# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                    fonctions
#    Adaptation du script de Constance Lecomte (prepa_data_Mobiliscope_P2.R)
# 
# avril 2018 - AD
# ================================================================================#




################## GLOBAL FONCTIONS #########################

# 1. TRANSFO DE LA TABLE DES PRESENCES (autonomes et "immobiles" en un lieu) AU FORMAT LARGE
prepPrezWide <- function(data){
  
  # Sélection des mobilités autonomes
  prezTable <- filter(data, as.numeric(AGE) > 15)
  
  # Supression des présences hors zone d'enqu^te (codées '999') 
  # et des présences mobiles/en déplacement (codées '888')
  prezTable <- filter(prezTable, CODE_SEC != "999" & CODE_SEC != "888")
  
  # Format WIDE
  prez_wide <- select(prezTable, ID_IND, ID_ED, LIB_ED, W_IND, CODE_ZF, CODE_COM, CODE_SEC, MOTIF, SEX, AGE, 
                      KAGE, EDUC, EDUCMEN, OCC, CSP, CSPMEN, RES_SEC, RES_COG, ZONAGE, MODE_ARR, 
                      h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27)
  prez_wide <- melt(prez_wide, id.vars=c("ID_IND","ID_ED", "LIB_ED","W_IND", "CODE_ZF", "CODE_COM", "CODE_SEC", 
                                         "MOTIF", "SEX", "AGE", "KAGE", "EDUC", "EDUCMEN", "OCC","CSP", 
                                         "CSPMEN", "RES_SEC", "RES_COG", "ZONAGE", "MODE_ARR")) 
  prez_wide <- filter(prez_wide, value==TRUE)  
  prez_wide_h <- group_by(.data = prez_wide, variable) 
  
  # Supprimer les "doublons" de la variable temporelle 
  #(respect du principe selon lequel un individu ne peut être présent dans deux lieux distincts à la même heure)
  prez_wide_h_p <- group_by(.data = prez_wide_h , variable, ID_IND)
  prez_wide_h_p <- as.data.frame(summarize(prez_wide_h_p, nID = n()))
  prez_wide_h <- merge(prez_wide_h, prez_wide_h_p, by=c("variable", "ID_IND"))
  prez_wide_h <- prez_wide_h[!duplicated(prez_wide_h[ , which(names(prez_wide_h) != "CODE_SEC" 
                             & names(prez_wide_h) != "CODE_COM" & names(prez_wide_h) != "CODE_ZF" 
                             & names(prez_wide_h) != "MOTIF")]), ]
  prez_wide_h$nID <- NULL
  
  return(prez_wide_h)
}


# 2. PREPARATION DE L'INDICATEUR "WHOLE POPULATION"
createPopFiles <- function(nomEnq){
  
  # 2.a. CONSTRUCTION DES DONNEES POUR LES OURSINS - pop0_flow : 
  # nombre estimé de personnes non résidentes par secteur et par heure
  
  # Création des dossiers   
  dir.create(paste("www/data/", nomEnq, sep = ''))
  dir.create(paste("www/data/", nomEnq,"/pop0_flow", sep = ''))
  dir.create(paste("www/data/", nomEnq,"/pop0_flow/data", sep = ''))
  dir.create(paste("www/data/", nomEnq,"/pop0_flow/geo", sep = ''))
  
  # Construction des données pour les oursins
  
  ## Calcul des flux OD (origine = secteur de résidence - RES_SEC, destination = secteur de présence - CODE_SEC)
  ## ! Pondération réalisée avec la variable 'COEP' de la BD brute (coef de redressement de la personne enquêtée)
  flowdata <- select(prez_wide_h, ID_IND, variable, CODE_SEC, W_IND, RES_SEC)
  flowdata <- group_by(.data = flowdata , variable, CODE_SEC, RES_SEC) 
  flowdata <- summarise(flowdata, W_IND = sum(W_IND))
  flowdata <- filter(flowdata, CODE_SEC != RES_SEC)
  
  ## Préparation des données pour les oursins
  flowdatasmp <- select(prez_wide_h, ID_IND, variable, CODE_SEC, RES_SEC, W_IND)
  flowdatasmp <- group_by(.data = flowdatasmp , variable, CODE_SEC)
  
  ## Calcul de la population non résidente brute (non pondérée)
  ## seuil de population brute = 12 individus par secteur (en deçà on ne diffuse pas l'info)
  flowdatasmpNRB <-  filter(flowdatasmp, CODE_SEC != RES_SEC) %>%
    select(variable, CODE_SEC) %>%
    group_by(variable, CODE_SEC) %>%
    mutate(count = n()) %>%
    distinct() %>% 
    filter(count >= 12) 
  
  ## suppression des secteurs et des heures correspondantes comptant moins de 12 personnes non résidentes 
  flowdatasmp <- full_join(flowdatasmp, flowdatasmpNRB, by = c("variable", "CODE_SEC")) %>%
    filter(is.na(count) != T) 
  flowdatasmp$count <- NULL
  ## idem sur flowdata :
  flowdata <- left_join(flowdata, flowdatasmpNRB, by = c("variable", "CODE_SEC")) %>%
    filter(is.na(count) != T)
  flowdata$count <- NULL
  
  ## Calcul de la population pondérée par secteur et par heure (avec seuil à 12 personnes/secteur en non pondéré)
  flowdatasmpT <- summarise(flowdatasmp, W_IND = sum(W_IND))
  
  ## Calcul de la population pondérée non résidente par secteur et par heure
  flowdatasmpNR <-  filter(flowdatasmp, CODE_SEC != RES_SEC) 
  flowdatasmpNR <- summarise(flowdatasmpNR, W_IND = sum(W_IND))
  
  ## Population pondérée par secteur et par heure totale (x) et non résidente (y)
  flowdatasmp <- left_join(x = flowdatasmpT, y = flowdatasmpNR, by = c("variable","CODE_SEC"))
  alldist <- distinct(prez_wide_h, variable, CODE_SEC)
  ## Ajout des secteurs vides (< 12 personnes brutes)
  flowdatasmp <-  right_join(flowdatasmp, alldist, by = c("variable", "CODE_SEC")) # add empty sect

  ## Mise en forme de la table de la population non résidente où en ligne = les heures et en colonne = les secteurs
  flowdatasmp <- spread(select(flowdatasmp, variable, CODE_SEC, W_IND.y), key = CODE_SEC, value = W_IND.y, fill = 0) %>% ungroup()
  flowdatasmp$variable <- gsub("h", '', flowdatasmp$variable)
  flowdatasmp$variable <- ifelse(as.numeric(flowdatasmp$variable) <= 12, paste(flowdatasmp$variable, 'am', sep = ''), 
                                 ifelse(as.numeric(flowdatasmp$variable) >= 24, paste((as.numeric(flowdatasmp$variable) - 24), 'am', sep = ''),
                                        paste((as.numeric(flowdatasmp$variable) - 12), 'pm', sep = '')))
  flowdatasmp$variable[flowdatasmp$variable == "0am"] <- "12pm"
  colnames(flowdatasmp)[1] <- "hour"
  ## Suppression des secteurs sans population non résidente toute la journée (car seuil à 12)
  flowdatasmp <- flowdatasmp[ ,!apply(flowdatasmp == 0, 2, all)]


  ## Calcul des valeurs min et max 
  
  vMinF <- 1000000 # init
  vMaxF <- 0 # init
  
  vMinF <- apply(flowdatasmp[ , 2:length(flowdatasmp)], MARGIN = 2, function(x){
    if(min(x) < vMinF){
      vMinF <-  min(x)
    }
  })
  vMinF <- min(vMinF) # valeur min en stock
  
  vMaxF <- apply(flowdatasmp[ , 2:length(flowdatasmp)], MARGIN = 2, function(x){
    if(max(x) > vMaxF){
      vMaxF <-  max(x)
    }
  })
  vMaxF <- max(unlist(vMaxF)) # valeur max en stock  AUTO ajout de unlist()
  
  dfMinMaxF <- data.frame("min" = numeric(length(flowdatasmp)-1),
                          "max" = numeric(length(flowdatasmp)-1))
  
  dfMinMaxF$min <- vMinF
  dfMinMaxF$max <- vMaxF
  dfMinMaxF <- as.data.frame(t(dfMinMaxF))
  dfMinMaxF <- setDT(dfMinMaxF, keep.rownames = TRUE)[]
  
  
  ## Ajout de min et max à flowdatasmp
  dfMinMaxF <- data.frame("min" = numeric(length(flowdatasmp)-1), "max" = numeric(length(flowdatasmp)-1))
  dfMinMaxF$min <- vMinF
  dfMinMaxF$max <- vMaxF
  dfMinMaxF <- as.data.frame(t(dfMinMaxF))
  ## Transfo df -> data.table 
  dfMinMaxF <- setDT(dfMinMaxF, keep.rownames = TRUE)[]  
  flowdatasmp <- rbindlist(list(flowdatasmp, dfMinMaxF))
  flowdatasmp <- rbind(slice(flowdatasmp, 25:26), slice(flowdatasmp, 1:24))
  
  ## Export des tables
  write.csv2(flowdata, paste("www/data/",nomEnq,"/pop0_flow/geo/flowData.csv", sep = ''), row.names = F)  
  write.table(flowdatasmp, paste("www/data/",nomEnq,"/pop0_flow/data/dataSect.csv", sep = ''), row.names = F, sep = ",", dec = ".")   
  
  ### Mise en forme de la table de la population non résidente pour jointure avec le shp (où en ligne = les secteurs et en colonne = les heures)
  flowdatasmpGJS <- spread(flowdatasmpNR, key = variable, value = W_IND)
  flowdatasmpGJS[is.na(flowdatasmpGJS)] <- 0
  colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)] <- paste("pop0", colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)], sep = "_")
  colnames(flowdatasmpGJS)[1] <- "Secteur_EM"
  
  ## Jointure avec le fichier shp
  shpSectDataFlow <- left_join(sfSec, flowdatasmpGJS, by = "Secteur_EM")
  
  ## Conversion geojson
  shpSectDataFlowJson <- geojson_json(shpSectDataFlow)
  
  ## Export
  geojson_write(shpSectDataFlowJson, file = paste("www/data/",nomEnq,"/pop0_flow/geo/secteursData.geojson", sep = ''))   
  
  
  # 2.b. CONSTRUCTION DES DONNEES POUR la carte en cercle proportionnelle - pop0_prop : 
  # nombre estimé de personnes présentes par secteur et par heure
  
  dir.create(paste("www/data/", nomEnq,"/pop0_prop", sep = ''))
  dir.create(paste("www/data/", nomEnq,"/pop0_prop/data", sep = ''))
  dir.create(paste("www/data/", nomEnq,"/pop0_prop/geo", sep = ''))
  
  ## Table de présence par secteur et par heure : POPULATION PRESENTE (STOCK PONDERE)
  prez_Var_Sec_popT <- group_by(.data = prez_wide_h , variable, CODE_SEC)
  prez_Var_Sec_popT <- as.data.frame(summarize(prez_Var_Sec_popT, 
                                               popSec = sum(W_IND, na.rm = TRUE)))
  
  ## Préparation de la table à joindre au shp geojson
  dataShpProp <- select_(prez_Var_Sec_popT, "variable", "CODE_SEC", "popSec") %>%
    spread_("variable", "popSec")
  dataShpProp <- data.frame("Secteur_EM" = dataShpProp[ , 1], dataShpProp[ , 8:25], dataShpProp[ , 2:7])
  colnames(dataShpProp)[-1] <- paste("pop0", colnames(dataShpProp)[-1], sep='_')
  
  ### Jointure
  shpSectDataProp <- merge(sfSec, dataShpProp, by = "Secteur_EM")
  
  ### Conversion en geojson
  shpSectDataPropJson <- geojson_json(shpSectDataProp)
  
  ### Export
  geojson_write(shpSectDataPropJson, file = paste("www/data/",nomEnq,"/pop0_prop/geo/secteursData.geojson", sep = ''))   
  
  ## Calcul des valeurs min et max (pour la table du graphique simple)
  vMinS <- 1000000 # init
  vMaxS <- 0 # init
  
  
  vMinS <- apply(dataShpProp[ , 2:length(dataShpProp)], MARGIN = 2, function(x){
    if(min(x) < vMinS){
      vMinS <-  min(x)
    }
  })
  vMinS <- min(vMinS) # valeur min en stocks
  
  vMaxS <- apply(dataShpProp[ , 2:length(dataShpProp)], MARGIN = 2, function(x){
    if(max(x) > vMaxS){
      vMaxS <-  max(x)
    }
  })
  vMaxS <- max(vMaxS) # valeur max en stocks
  
  dfMinMaxS <- data.frame("min" = numeric(nrow(dataShpProp)),
                          "max" = numeric(nrow(dataShpProp)))
  
  dfMinMaxS$min <- vMinS
  dfMinMaxS$max <- vMaxS
  dfMinMaxS <- as.data.frame(t(dfMinMaxS))
  dfMinMaxS <- setDT(dfMinMaxS, keep.rownames = TRUE)[]
  
  ## Préparation de la table pour le graphique simple (dataSect)
  dataSectProp <- as.data.frame(t(dataShpProp))
  names(dataSectProp) <- as.matrix(dataSectProp[1, ])
  dataSectProp <-  dataSectProp[-1, ]
  dataSectProp <- add_rownames(dataSectProp, "hour")
  dataSectProp$hour <- gsub(".*h",'',dataSectProp$hour)
  dataSectProp$hour <- ifelse(as.numeric(dataSectProp$hour) <= 12, paste(dataSectProp$hour, 'am', sep = ''),
                              ifelse(as.numeric(dataSectProp$hour) >= 24, paste((as.numeric(dataSectProp$hour) - 24), 'am', sep = ''),
                                     paste((as.numeric(dataSectProp$hour) - 12), 'pm', sep = '')))
  dataSectProp$hour[dataSectProp$hour == "0am"] <- "12pm"
  dataSectProp <- rbind(slice(dataSectProp, 19:24), slice(dataSectProp, 1:18))
  dataSectProp <- rbindlist(list(dataSectProp, dfMinMaxS))
  dataSectProp <- rbind(slice(dataSectProp, 25:26), slice(dataSectProp, 1:24))
  
  ### Export
  write.csv2(dataSectProp, paste("www/data/",nomEnq,"/pop0_prop/data/dataSect.csv", sep = ''), row.names = F)   
  
}


# 3. CREATION DES TABLES POUR LA FONCTION "createFiles"

## 3a. INDICATEUR : SEX

prepStock_sex <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                  popSec = sum(W_IND[as.numeric(SEX) >= 1], na.rm = TRUE),
                                  sex1 = sum(W_IND[as.numeric(SEX) == 1], na.rm = TRUE),
                                  sex2 = sum(W_IND[as.numeric(SEX) == 2], na.rm = TRUE)))
  
  return(pvs)
  
}

prepPart_sex <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ , 1:3], apply(pvs[ , 4:length(pvs)], MARGIN = 2, 
                                        FUN = function(x){(x * 100) / pvs$popSec}))

  return(pvs2)
  
} 

prepNR_sex <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                    popsec = sum(W_IND[as.numeric(SEX) >= 1], na.rm = TRUE),
                                    sex1 = sum(W_IND[as.numeric(SEX) == 1], na.rm = TRUE),
                                    sex2 = sum(W_IND[as.numeric(SEX) == 2], na.rm = TRUE)))
  
  return(pvs3)
  
} 
 
 
## 3b. INDICATEUR : AGE GROUPS

prepStock_age <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(KAGE) >= 1], na.rm = TRUE),
                                 age1 = sum(W_IND[as.numeric(KAGE) == 1], na.rm = TRUE),
                                 age2 = sum(W_IND[as.numeric(KAGE) == 2], na.rm = TRUE),
                                 age3 = sum(W_IND[as.numeric(KAGE) == 3], na.rm = TRUE),
                                 age4 = sum(W_IND[as.numeric(KAGE) == 4], na.rm = TRUE)))
  

  return(pvs)
  
}

prepPart_age <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ , 1:3], apply(pvs[ , 4:length(pvs)], MARGIN = 2, 
                                        FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}

prepNR_age <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(KAGE) >= 1], na.rm = TRUE),
                                  age1 = sum(W_IND[as.numeric(KAGE) == 1], na.rm = TRUE),
                                  age2 = sum(W_IND[as.numeric(KAGE) == 2], na.rm = TRUE),
                                  age3 = sum(W_IND[as.numeric(KAGE) == 3], na.rm = TRUE),
                                  age4 = sum(W_IND[as.numeric(KAGE) == 4], na.rm = TRUE)))
  
  return(pvs3)
  
}


## 3c. INDICATEUR : EDUCATIONAL LEVEL (au niveau des individus)

prepStock_educ <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, EDUC != '') 
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(EDUC) >= 1], na.rm = TRUE),
                                 cleduc1 = sum(W_IND[as.numeric(EDUC) == 1], na.rm = TRUE),
                                 cleduc2 = sum(W_IND[as.numeric(EDUC) == 2], na.rm = TRUE),
                                 cleduc3 = sum(W_IND[as.numeric(EDUC) == 3], na.rm = TRUE),
                                 cleduc4 = sum(W_IND[as.numeric(EDUC) == 4], na.rm = TRUE)))
  

  
  
  return(pvs)

}
  
prepPart_educ <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}

prepNR_educ <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & EDUC != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(EDUC) >= 1], na.rm = TRUE),
                                  cleduc1 = sum(W_IND[as.numeric(EDUC) == 1], na.rm = TRUE),
                                  cleduc2 = sum(W_IND[as.numeric(EDUC) == 2], na.rm = TRUE),
                                  cleduc3 = sum(W_IND[as.numeric(EDUC) == 3], na.rm = TRUE),
                                  cleduc4 = sum(W_IND[as.numeric(EDUC) == 4], na.rm = TRUE)))
  
  return(pvs3)
  
}

## 3d. INDICATEUR : EDUCATIONAL LEVEL (au niveau des ménages)

prepStock_educMen <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, EDUCMEN !='') 
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(EDUCMEN) >= 1], na.rm = TRUE),
                                 educmen1 = sum(W_IND[as.numeric(EDUCMEN) == 1], na.rm = TRUE),
                                 educmen2 = sum(W_IND[as.numeric(EDUCMEN) == 2], na.rm = TRUE),
                                 educmen3 = sum(W_IND[as.numeric(EDUCMEN) == 3], na.rm = TRUE),
                                 educmen4 = sum(W_IND[as.numeric(EDUCMEN) == 4], na.rm = TRUE)))
  
  
  
  return(pvs)
  
}

prepPart_educMen <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}

prepNR_educMen <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & EDUCMEN !='')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(EDUCMEN) >= 1], na.rm = TRUE),
                                  educmen1 = sum(W_IND[as.numeric(EDUCMEN) == 1], na.rm = TRUE),
                                  educmen2 = sum(W_IND[as.numeric(EDUCMEN) == 2], na.rm = TRUE),
                                  educmen3 = sum(W_IND[as.numeric(EDUCMEN) == 3], na.rm = TRUE),
                                  educmen4 = sum(W_IND[as.numeric(EDUCMEN) == 4], na.rm = TRUE)))
  
  return(pvs3)
  
}



## 3f. INDICATEUR : SOCIOPROFESSIONAL STATUS (au niveau des individus)

prepStock_csp <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, CSP != '') 
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(CSP) >= 1], na.rm = TRUE),
                                 cs1 = sum(W_IND[as.numeric(CSP) == 1], na.rm = TRUE),
                                 cs2 = sum(W_IND[as.numeric(CSP) == 2], na.rm = TRUE),
                                 cs3 = sum(W_IND[as.numeric(CSP) == 3], na.rm = TRUE),
                                 cs4 = sum(W_IND[as.numeric(CSP) == 4], na.rm = TRUE),
                                 cs5 = sum(W_IND[as.numeric(CSP) == 5], na.rm = TRUE)))
  
  
  
  return(pvs)
  
}

prepPart_csp <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))

  return(pvs2)
  
}

prepNR_csp <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & CSP != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(CSP) >= 1], na.rm = TRUE),
                                  cs1 = sum(W_IND[as.numeric(CSP) == 1], na.rm = TRUE),
                                  cs2 = sum(W_IND[as.numeric(CSP) == 2], na.rm = TRUE),
                                  cs3 = sum(W_IND[as.numeric(CSP) == 3], na.rm = TRUE),
                                  cs4 = sum(W_IND[as.numeric(CSP) == 4], na.rm = TRUE),
                                  cs5 = sum(W_IND[as.numeric(CSP) == 5], na.rm = TRUE)))
  
  return(pvs3)
  
}


## 3g. INDICATEUR : SOCIOPROFESSIONAL STATUS (au niveau des ménages)

prepStock_cspMen <- function(nomEnq){
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, CSPMEN != '') 
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(CSPMEN) >= 1], na.rm = TRUE),
                                 cspmen1 = sum(W_IND[as.numeric(CSPMEN) == 1], na.rm = TRUE),
                                 cspmen2 = sum(W_IND[as.numeric(CSPMEN) == 2], na.rm = TRUE),
                                 cspmen3 = sum(W_IND[as.numeric(CSPMEN) == 3], na.rm = TRUE),
                                 cspmen4 = sum(W_IND[as.numeric(CSPMEN) == 4], na.rm = TRUE),
                                 cspmen5 = sum(W_IND[as.numeric(CSPMEN) == 5], na.rm = TRUE)))
  
  
  
  return(pvs)
  
}

prepPart_cspMen <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
 
  return(pvs2)
  
}

prepNR_cspMen <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & CSPMEN != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(CSPMEN) >= 1], na.rm = TRUE),
                                  cspmen1 = sum(W_IND[as.numeric(CSPMEN) == 1], na.rm = TRUE),
                                  cspmen2 = sum(W_IND[as.numeric(CSPMEN) == 2], na.rm = TRUE),
                                  cspmen3 = sum(W_IND[as.numeric(CSPMEN) == 3], na.rm = TRUE),
                                  cspmen4 = sum(W_IND[as.numeric(CSPMEN) == 4], na.rm = TRUE),
                                  cspmen5 = sum(W_IND[as.numeric(CSPMEN) == 5], na.rm = TRUE)))
  
  return(pvs3)
  
}


## 3h. INDICATEUR : OCCUPATIONAL STATUS

prepStock_occ <- function(nomEnq){
  

  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, OCC !='')
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(OCC) >= 1], na.rm = TRUE),
                                 occ1 = sum(W_IND[as.numeric(OCC) == 1], na.rm = TRUE),
                                 occ2 = sum(W_IND[as.numeric(OCC) == 2], na.rm = TRUE),
                                 occ3 = sum(W_IND[as.numeric(OCC) == 3], na.rm = TRUE),
                                 occ4 = sum(W_IND[as.numeric(OCC) == 4], na.rm = TRUE),
                                 occ5 = sum(W_IND[as.numeric(OCC) == 5], na.rm = TRUE)))
  
 
  return(pvs)
  
}

prepPart_occ <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}

prepNR_occ <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & OCC !='')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(OCC) >= 1], na.rm = TRUE),
                                  occ1 = sum(W_IND[as.numeric(OCC) == 1], na.rm = TRUE),
                                  occ2 = sum(W_IND[as.numeric(OCC) == 2], na.rm = TRUE),
                                  occ3 = sum(W_IND[as.numeric(OCC) == 3], na.rm = TRUE),
                                  occ4 = sum(W_IND[as.numeric(OCC) == 4], na.rm = TRUE),
                                  occ5 = sum(W_IND[as.numeric(OCC) == 5], na.rm = TRUE)))
  
  return(pvs3)
  
}


## 3j. INDICATEUR : RESIDENTIAL RINGS

prepStock_zone <- function(nomEnq){
  

  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(ZONAGE) >= 1], na.rm = TRUE),
                                 resarea1 = sum(W_IND[as.numeric(ZONAGE) == 1], na.rm = TRUE),
                                 resarea2 = sum(W_IND[as.numeric(ZONAGE) == 2], na.rm = TRUE),
                                 resarea3 = sum(W_IND[as.numeric(ZONAGE) == 3], na.rm = TRUE)))
  
  
  
  return(pvs)
  
}

prepPart_zone <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ , 1:3], apply(pvs[ , 4:length(pvs)], MARGIN = 2, 
                                        FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
}

prepNR_zone <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popSec = sum(W_IND[as.numeric(ZONAGE) >= 1], na.rm = TRUE),
                                  resarea1 = sum(W_IND[as.numeric(ZONAGE) == 1], na.rm = TRUE),
                                  resarea2 = sum(W_IND[as.numeric(ZONAGE) == 2], na.rm = TRUE),
                                  resarea3 = sum(W_IND[as.numeric(ZONAGE) == 3], na.rm = TRUE)))
  
  return(pvs3)
  
}

## 3k. INDICATEUR : ACTIVITY  

prepStock_act <- function(nomEnq){


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, MOTIF != '')
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(MOTIF) >= 1], na.rm = TRUE),
                                 act1 = sum(W_IND[as.numeric(MOTIF) == 1], na.rm = TRUE),
                                 act2 = sum(W_IND[as.numeric(MOTIF) == 2], na.rm = TRUE),
                                 act3 = sum(W_IND[as.numeric(MOTIF) == 3], na.rm = TRUE),
                                 act4 = sum(W_IND[as.numeric(MOTIF) == 4], na.rm = TRUE),
                                 act5 = sum(W_IND[as.numeric(MOTIF) == 5], na.rm = TRUE)))
  
  

  return(pvs)
  
}

prepPart_act <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}
  
prepNR_act <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & MOTIF != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3, 
                                           popSec = sum(W_IND[as.numeric(MOTIF) >= 1], na.rm = TRUE),
                                           act1 = sum(W_IND[as.numeric(MOTIF) == 1], na.rm = TRUE),
                                           act2 = sum(W_IND[as.numeric(MOTIF) == 2], na.rm = TRUE),
                                           act3 = sum(W_IND[as.numeric(MOTIF) == 3], na.rm = TRUE),
                                           act4 = sum(W_IND[as.numeric(MOTIF) == 4], na.rm = TRUE),
                                           act5 = sum(W_IND[as.numeric(MOTIF) == 5], na.rm = TRUE)))
  
  return(pvs3)
  
}  

## 3l. INDICATEUR : TRAVEL MODE

prepStock_mode <- function(nomEnq){
  

  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, MODE_ARR != '')
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(MODE_ARR) >= 1], na.rm = TRUE),
                                 mode1 = sum(W_IND[as.numeric(MODE_ARR) == 1], na.rm = TRUE),
                                 mode2 = sum(W_IND[as.numeric(MODE_ARR) == 2], na.rm = TRUE),
                                 mode3 = sum(W_IND[as.numeric(MODE_ARR) == 3], na.rm = TRUE)))
  
  

  return(pvs)
  
}

prepPart_mode <- function(pvs){
  
  ## Construction de la table de <-  présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ , 4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
 
  return(pvs2)
  
}

prepNR_mode <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & MODE_ARR != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3, 
                                  popSec = sum(W_IND[as.numeric(MODE_ARR) >= 1], na.rm = TRUE),
                                  mode1 = sum(W_IND[as.numeric(MODE_ARR) == 1], na.rm = TRUE),
                                  mode2 = sum(W_IND[as.numeric(MODE_ARR) == 2], na.rm = TRUE),
                                  mode3 = sum(W_IND[as.numeric(MODE_ARR) == 3], na.rm = TRUE)))
  
  return(pvs3)
  
}



# 4. CREATION DES FICHIERS POUR LES CARTES ET LE GRAPHIQUE "SIMPLE"

createFiles <- function(nbMod, indicateur, nomIndic, nomEnq, pvs, pvs2, pvs3){
  
  # Calcul des valeurs min et max pour l'ensemble des modalités
  # Ces valeurs seront utilisées pour déterminer les bornes minimum et maximum des graphiques 
  # "simples" par secteur
  
  ## STOCK (cercle proportionnel)
  vMinS <- 1000000 # init
  vMaxS <- 0 # init
  
  vMinS <- apply(pvs[ , 4:length(pvs)], MARGIN = 2, function(x){
    if(min(x) < vMinS){
      vMinS <-  min(x)
    }
  })
  vMinS <- min(vMinS) # valeur min en stocks
  
  vMaxS <- apply(pvs[ , 4:length(pvs)], MARGIN = 2, function(x){
    if(max(x) > vMaxS){
      vMaxS <-  max(x)
    }
  })
  vMaxS <- max(vMaxS) # valeur max en stocks
  
  dfMinMaxS <- data.frame("min" = numeric(length(unique(prez_wide_h$CODE_SEC))), 
                          "max" = numeric(length(unique(prez_wide_h$CODE_SEC)))) 
  
  dfMinMaxS$min <- vMinS
  dfMinMaxS$max <- vMaxS
  dfMinMaxS <- as.data.frame(t(dfMinMaxS))
  dfMinMaxS <- setDT(dfMinMaxS, keep.rownames = TRUE)[]
  
  ## PART (carte Choro)
  vMinP <- 110 # init
  vMaxP <- 0 # init
  
  vMinP <- apply(pvs2[ , 4:length(pvs2)], MARGIN = 2, function(x){
    if(min(x) < vMinP){
      vMinP <-  min(x)
    }
  })
  vMinP <- min(vMinP) # valeur min en parts
  
  vMaxP <- apply(pvs2[ , 4:length(pvs2)], MARGIN = 2, function(x){
    if(max(x) > vMaxP){
      vMaxP <-  max(x)
    }
  })
  vMaxP <- max(vMaxP) # valeur max en parts
  
  dfMinMaxP <- data.frame("min" = numeric(length(unique(prez_wide_h$CODE_SEC))), 
                          "max" = numeric(length(unique(prez_wide_h$CODE_SEC)))) 
  
  dfMinMaxP$min <- vMinP
  dfMinMaxP$max <- vMaxP
  dfMinMaxP <- as.data.frame(t(dfMinMaxP))
  dfMinMaxP <- setDT(dfMinMaxP, keep.rownames = TRUE)[]
  
  ## Carte en oursins
  vMinF <- 1000000 # init
  vMaxF <- 0 # init
  
  vMinF <- apply(pvs3[ , 4:length(pvs3)], MARGIN = 2, function(x){
    if(min(x) < vMinF){
      vMinF <-  min(x)
    }
  })
  vMinF <- min(vMinF) # valeur min en stocks
  
  vMaxF <- apply(pvs3[ , 4:length(pvs3)], MARGIN = 2, function(x){
    if(max(x) > vMaxF){
      vMaxF <-  max(x)
    }
  })
  vMaxF <- max(vMaxF) # valeur max en stocks
  
  dfMinMaxF <- data.frame("min" = numeric(length(unique(prez_wide_h$CODE_SEC))), 
                          "max" = numeric(length(unique(prez_wide_h$CODE_SEC)))) 
  
  dfMinMaxF$min <- vMinF
  dfMinMaxF$max <- vMaxF
  dfMinMaxF <- as.data.frame(t(dfMinMaxF))
  dfMinMaxF <- setDT(dfMinMaxF, keep.rownames = TRUE)[]
  
  for(i in 1:nbMod){
    
    indic <- colnames(pvs)[3 + i]
    indic2 <- colnames(pvs2)[3 + i]
    
    # Préparation du tableau de données à joindre au shape
    ## data shape stock
    dataShpProp <- select_(pvs, "variable", "CODE_SEC", indic) %>%
      spread_("variable", indic)
    
    ### Reorder
    dataShpProp <- data.frame("Secteur_EM" = dataShpProp[ , 1], dataShpProp[ , 8:25], dataShpProp[ , 2:7])
    colnames(dataShpProp)[-1] <- paste(indic, colnames(dataShpProp)[-1], sep='_')
    
    ## data shape part
    dataShpChoro <- select_(pvs2, "variable", "CODE_SEC", indic2) %>%
      spread_("variable", indic2)
    
    ### Reorder
    dataShpChoro <- data.frame("Secteur_EM" = dataShpChoro[ , 1], dataShpChoro[ , 8:25], dataShpChoro[ , 2:7])
    colnames(dataShpChoro)[-1] <- paste(indic2, colnames(dataShpChoro)[-1], sep='_')
    
    ## Création des données pour les cartes en oursins
    ### Flowdata 
    flowdata <- filter(prez_wide_h, as.numeric(indicateur) == i)
    flowdata <- select(flowdata, ID_IND, variable, CODE_SEC, W_IND, RES_SEC)
    flowdata <- group_by(.data = flowdata , variable, CODE_SEC, RES_SEC)
    flowdata <- summarise(flowdata, W_IND = sum(W_IND))
    flowdata <- filter(flowdata, CODE_SEC != RES_SEC)
    
    ### Geojson
    flowdatasmp <- filter(prez_wide_h, as.numeric(indicateur) == i & CODE_SEC != "")
    flowdatasmp <- select(flowdatasmp, ID_IND, variable, CODE_SEC, RES_SEC, W_IND)
    flowdatasmp <- group_by(.data = flowdatasmp , variable, CODE_SEC)
    
    flowdatasmpNRB <-  filter(flowdatasmp, CODE_SEC != RES_SEC) %>%
      select(variable, CODE_SEC) %>%
      group_by(variable, CODE_SEC) %>%
      mutate(count = n()) %>%
      distinct() %>% 
      filter(count >= 12) # non resident population brut
    
    ### suppression des lignes correspondant aux couples heure-secteur avec < 12 individus en brut non pondéré
    flowdatasmp <- full_join(flowdatasmp, flowdatasmpNRB, by = c("variable", "CODE_SEC")) %>%
      filter(is.na(count) != T)
    flowdatasmp$count <- NULL
    ### répercution sur flowdata
    flowdata <- left_join(flowdata, flowdatasmpNRB, by = c("variable", "CODE_SEC")) %>%
      filter(is.na(count) != T)
    flowdata$count <- NULL
    
    flowdatasmpT <- summarise(flowdatasmp, W_IND = sum(W_IND))
    flowdatasmpNR <-  filter(flowdatasmp, CODE_SEC != RES_SEC) 
    flowdatasmpNR <- summarise(flowdatasmpNR, W_IND = sum(W_IND)) # non resident present population
    
    flowdatasmp <- left_join(flowdatasmpT, flowdatasmpNR, by = c("variable","CODE_SEC"))
    flowdatasmp <-  right_join(flowdatasmp, select(pvs3, variable, CODE_SEC), by = c("variable", "CODE_SEC")) # add empty sect
    flowdatasmp[is.na(flowdatasmp)] <- 0
    
    ### Wide
    flowdatasmp <- spread(select(flowdatasmp, variable, CODE_SEC, W_IND.y), key = variable, value = W_IND.y)
    colnames(flowdatasmp)[2:length(flowdatasmp)] <- paste(indic, colnames(flowdatasmp)[2:length(flowdatasmp)], sep = "_")
    
    
    # Jointure des données aux fonds de carte
    shpSectDataProp <- merge(sfSec, dataShpProp, by = "Secteur_EM")
    shpSectDataChoro <- merge(sfSec, dataShpChoro, by = "Secteur_EM")
    shpSectDataFlow <- merge(sfSec, flowdatasmp, by.x = "Secteur_EM", by.y = "CODE_SEC")
    
    
    # Création des répertoires
    ## Répertoires parents (2 par indicateur)
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_prop", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_choro", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow", sep = ''))
    
    ## Répertoires enfants (2 par répertoire parent)
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_prop/data", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_choro/data", sep = ''))
    dir.create(paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow/data", sep = ''))
    
    # Conversion shp to json
    shpSectDataPropJson <- geojson_json(shpSectDataProp)
    shpSectDataChoroJson <- geojson_json(shpSectDataChoro)
    shpSectDataFlowJson <- geojson_json(shpSectDataFlow)
    
    # Export des données spatiales
    geojson_write(shpSectDataPropJson, file = paste("www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo/secteursData.geojson", sep = ''))
    geojson_write(shpSectDataChoroJson, file = paste("www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo/secteursData.geojson", sep = ''))
    geojson_write(shpSectDataFlowJson, file = paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/secteursData.geojson", sep = ''))
    write.table(flowdata, paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/flowData.csv", sep = ''), row.names = F, sep = ",", dec = ".")
    
    # Création des tables pour le graphique simple
    ## STOCK
    dataSectProp <- as.data.frame(t(dataShpProp))
    names(dataSectProp) <- as.matrix(dataSectProp[1, ])
    dataSectProp <-  dataSectProp[-1, ]
    dataSectProp <- add_rownames(dataSectProp, "hour")
    dataSectProp$hour <- gsub(".*h",'',dataSectProp$hour)
    dataSectProp$hour <- ifelse(as.numeric(dataSectProp$hour) <= 12, paste(dataSectProp$hour, 'am', sep = ''), 
                                ifelse(as.numeric(dataSectProp$hour) >= 24, paste((as.numeric(dataSectProp$hour) - 24), 'am', sep = ''),
                                       paste((as.numeric(dataSectProp$hour) - 12), 'pm', sep = '')))
    dataSectProp$hour[dataSectProp$hour == "0am"] <- "12pm"
    dataSectProp <- rbind(slice(dataSectProp, 19:24), slice(dataSectProp, 1:18))
    dataSectProp <- rbindlist(list(dataSectProp, dfMinMaxS))
    dataSectProp <- rbind(slice(dataSectProp, 25:26), slice(dataSectProp, 1:24))
    
    ## PART
    dataSectChoro <- as.data.frame(t(dataShpChoro))
    names(dataSectChoro) <- as.matrix(dataSectChoro[1, ])
    dataSectChoro <- dataSectChoro[-1, ]
    dataSectChoro <- add_rownames(dataSectChoro, "hour")
    dataSectChoro$hour <- gsub(".*h",'',dataSectChoro$hour)
    dataSectChoro$hour <- ifelse(as.numeric(dataSectChoro$hour) <= 12, paste(dataSectChoro$hour, 'am', sep = ''), 
                                 ifelse(as.numeric(dataSectChoro$hour) >= 24, paste((as.numeric(dataSectChoro$hour) - 24), 'am', sep = ''),
                                        paste((as.numeric(dataSectChoro$hour) - 12), 'pm', sep = '')))
    dataSectChoro$hour[dataSectChoro$hour == "0am"] <- "12pm"
    dataSectChoro <- rbind(slice(dataSectChoro, 19:24), slice(dataSectChoro, 1:18))
    dataSectChoro <- rbindlist(list(dataSectChoro, dfMinMaxP))
    dataSectChoro <- rbind(slice(dataSectChoro, 25:26), slice(dataSectChoro, 1:24))
    
    ## Oursins
    dataSectFlow <- as.data.frame(t(flowdatasmp))
    names(dataSectFlow) <- as.matrix(dataSectFlow[1,])
    dataSectFlow <-  dataSectFlow[-1, ]
    dataSectFlow <- add_rownames(dataSectFlow, "hour")
    dataSectFlow$hour <- gsub(".*h",'',dataSectFlow$hour)
    dataSectFlow$hour <- ifelse(as.numeric(dataSectFlow$hour) <= 12, paste(dataSectFlow$hour, 'am', sep = ''), 
                                ifelse(as.numeric(dataSectFlow$hour) >= 24, paste((as.numeric(dataSectFlow$hour) - 24), 'am', sep = ''),
                                       paste((as.numeric(dataSectFlow$hour) - 12), 'pm', sep = '')))
    dataSectFlow$hour[dataSectFlow$hour == "0am"] <- "12pm"
    dfh <- data.frame(hour = c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")) # au cas o? il  a des heures manquantes (cf shopping)
    dataSectFlow <- left_join(dfh, dataSectFlow, by = "hour")
    
    dataSectFlow <- rbind(slice(dataSectFlow, 19:24), slice(dataSectFlow, 1:18))
    dfMinMaxF2 <- dfMinMaxF[,1:length(dataSectFlow)]
    dataSectFlow <- rbindlist(list(dataSectFlow, dfMinMaxF2))
    dataSectFlow <- rbind(slice(dataSectFlow, 25:26), slice(dataSectFlow, 1:24))
    dataSectFlow <- rbind(slice(dataSectFlow, 1:2), slice(dataSectFlow, 9:26), slice(dataSectFlow, 3:8))
    dataSectFlow[is.na(dataSectFlow)] <- 0
    
    # Export des données
    write.csv2(dataSectProp, paste("www/data/", nomEnq, "/", nomIndic, i ,"_prop/data/dataSect.csv", sep = ''), row.names = F)
    write.csv2(dataSectChoro, paste("www/data/", nomEnq, "/", nomIndic, i ,"_choro/data/dataSect.csv", sep = ''), row.names = F)
    write.csv2(dataSectFlow, paste("www/data/", nomEnq, "/", nomIndic, i ,"_flow/data/dataSect.csv", sep = ''), row.names = F)
  }
  
}  
  

# 5.FONCTION : création des indices de ségrégation 

createISeg <- function(nbMod, nomIndic, nomEnq, pvs, pvs2){
  
  # DUNCAN
  ## Mise en forme du tableau de base
  tabISeg <- pvs
  listHour <- levels(tabISeg$variable)
  duncan <- data.frame("hour" = character(24))
  
  for (i in listHour){
    
    duncan <- bind_rows(duncan, as.data.frame(t(ISDuncan(tabISeg[tabISeg$variable == i , 4:length(tabISeg)]))))
    
  }
  
  ## Ajout des heures
  duncan$hour <- listHour
  duncan$hour <- gsub(".*h",'',duncan$hour)
  duncan$hour <- ifelse(as.numeric(duncan$hour) <= 12, paste(duncan$hour, 'am', sep = ''), 
                        ifelse(as.numeric(duncan$hour) >= 24, paste((as.numeric(duncan$hour) - 24), 'am', sep = ''),
                               paste((as.numeric(duncan$hour) - 12), 'pm', sep = '')))
  duncan$hour[duncan$hour == "0am"] <- "12pm"
  
  ## suppression des lignes vides
  duncan <- filter(duncan[25:48,]) 
  
  ## Correction si na (à valider)
  duncan[is.na(duncan)] <- 0
  
  ## Correction des noms de variable
  colnames(duncan)[2:length(duncan)] <- colnames(tabISeg[ , 4:length(tabISeg)])
  
  
  # MORAN
  shpSectMoran <- readOGR(dsn = "scriptsr/shp/SEC_MONTPELLIER_L93.shp", layer = "SEC_MONTPELLIER_L93", 
                          encoding = "utf8", stringsAsFactors = FALSE, drop_unsupported_fields = FALSE) 
  
  ## Création d'un tableau vide
  moran <- data.frame("hour" = '', "var" = '', "moran" = numeric(24))
  
  for (i in listHour){
    
    # Trier les données
    dataMoran <- filter(pvs2, variable == i)
    
    # Joindre avec le shp
    dataMoran <- merge(shpSectMoran, dataMoran, by.x = 'Secteur_EM', by.y = 'CODE_SEC')
    
    # Calcul des paramètres
    nbSecteurs <- poly2nb(pl = dataMoran,
                          row.names = dataMoran@data$Secteur_EM,
                          #row.names = dataMoran$Secteur_EM,
                          snap = 50,
                          queen = TRUE)
    
    # Calcul de l'indice de Moran
    for (j in colnames(dataMoran@data[ , 10:length(dataMoran@data)])){  

      Moran <- moran.mc(x = dataMoran[[j]],
                        listw = nb2listw(nbSecteurs), nsim=1000) 
      
      moran <- rbind(moran, data.frame("hour" = i,
                                       "var" = j,
                                       "moran" = Moran$statistic,
                                       stringsAsFactors = F))
    }
  }
  
  ## Correction si na (à valider)
  moran[is.na(moran)] <- 0
  
  ## Mise en forme
  moran <- filter(moran, hour != '') # suppression des lignes vides
  
  ## mise en forme des heures
  moran$hour <- gsub(".*h",'',moran$hour)
  moran$hour <- ifelse(as.numeric(moran$hour) <= 12, paste(moran$hour, 'am', sep = ''), 
                       ifelse(as.numeric(moran$hour) >= 24, paste((as.numeric(moran$hour) - 24), 'am', sep = ''),
                              paste((as.numeric(moran$hour) - 12), 'pm', sep = '')))
  moran$hour[moran$hour == "0am"] <- "12pm"
  
  ## wide
  moran <- spread(moran, key = var, value = moran)
  
  ## reorder
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  moran$hour <- factor( as.character(moran$hour), levels=desired_order )
  moran <- moran[order(moran$hour),]
  
  
  ## EXPORT 
  for (i in 1:nbMod){
    
    write.table(duncan, paste("www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Duncan.csv", 
                              sep = ''), row.names = F, sep = ',', dec = '.')
    write.table(moran, paste("www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Moran.csv", 
                              sep = ''), row.names = F, sep = ',', dec = '.')
    
  } 
  
}  


# 6.FONCTION : création des graphiques en barres empilées (stacked) 

createStacked <- function(nbMod, nomIndic, nomEnq){
  
  # 1. Cartes choro
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_choro", sep = ""),
           read.csv2(paste("www/data/", nomEnq, "/", nomIndic, i, "_choro/data/dataSect.csv", sep =""), 
                     sep = ";", stringsAsFactors = F))
    
    listData[[i]] <- eval(parse(text = paste("dataSect", i, "_choro", sep = "")))
    
  }
  
  listData <- lapply(listData, function(x){
    
    # Filter out min and max
    x <- filter(x, hour != "min" & hour != "max")
    
    # From wide to long
    x <- gather(x, secteur, value, eval(parse(text = colnames(x)[2])) : eval(parse(text = colnames(x)[length(x)])))
    
    # Changer le nom des colonnes
    x$secteur <- gsub("X", "", x$secteur) 
    
    # Convertir les valeurs en numériques
    x$value <- as.numeric(x$value)
    
    # Retourne les tableaux
    return(x)
  })
  
  ## On récupère les dataframes
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_choro", sep = ""), listData[[i]])
    
  }
  
  ## Jointure des dataframes
  tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
  varColNames <- character()
  
  for (i in 1:nbMod){
    varColNames <- c(varColNames, paste(nomIndic, i, sep = ""))
  }
  
  colnames(tabFin) <- c("district", "hour", varColNames)
  
  ## Sort tableau
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  tabFin$hour <- factor( as.character(tabFin$hour), levels=desired_order)
  tabFin <- tabFin[order(tabFin$hour), ]
  
  ## Export
  write.table(tabFin, paste("www/data/", nomEnq, "/stacked/", nomIndic, "_choro_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")
  
  # 2. Cartes Proportionnelles
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_prop", sep = ""),
           read.csv2(paste("www/data/", nomEnq, "/", nomIndic, i, "_prop/data/dataSect.csv", sep =""), 
                     sep = ";", stringsAsFactors = F))
    
    listData[[i]] <- eval(parse(text = paste("dataSect", i, "_prop", sep = "")))
    
  }
  
  listData <- lapply(listData, function(x){
    
    # Filter out min and max
    x <- filter(x, hour != "min" & hour != "max")
    
    # From wide to long
    x <- gather(x, secteur, value, eval(parse(text = colnames(x)[2])) : eval(parse(text = colnames(x)[length(x)])))
    
    # Changer le nom des colonnes
    x$secteur <- gsub("X", "", x$secteur) 
    
    # Convertir les valeur en num?riques
    x$value <- as.numeric(x$value)
    
    # Retourne les tableaux
    return(x)
  })
  
  ## On récupère les dataframes
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_prop", sep = ""), listData[[i]])
    
  }

  ## Jointure des dataframes
  tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
  varColNames <- character()
  
  for (i in 1:nbMod){
    varColNames <- c(varColNames, paste(nomIndic, i, sep = ""))
  }
  
  colnames(tabFin) <- c("district", "hour", varColNames)
  
  ## Sort tableau
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  tabFin$hour <- factor(as.character(tabFin$hour), levels=desired_order)
  tabFin <- tabFin[order(tabFin$hour), ]
  
  ## Export
  write.table(tabFin, paste("www/data/", nomEnq, "/stacked/", nomIndic, "_prop_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")
  
  # 3. Cartes en oursins
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_flow", sep = ""),
           read.csv2(paste("www/data/", nomEnq, "/", nomIndic, i, "_flow/data/dataSect.csv", sep =""), 
                     sep = ";", stringsAsFactors = F))
    
    listData[[i]] <- eval(parse(text = paste("dataSect", i, "_flow", sep = "")))
    
  }
  
  listData <- lapply(listData, function(x){
    
    # Filter out min and max
    x <- filter(x, hour != "min" & hour != "max")
    
    # From wide to long
    x <- gather(x, secteur, value, eval(parse(text = colnames(x)[2])) : eval(parse(text = colnames(x)[length(x)])))
    
    # Changer le nom des colonnes
    x$secteur <- gsub("X", "", x$secteur) 
    
    # Convertir les valeur en num?riques
    x$value <- as.numeric(x$value)
    
    # Retourne les tableaux
    return(x)
  })
  
  ## On récupère les dataframes
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_flow", sep = ""), listData[[i]])
    
  }
  
  ## Jointure des dataframes
  tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
  varColNames <- character()
  
  for (i in 1:nbMod){
    varColNames <- c(varColNames, paste(nomIndic, i, sep = ""))
  }
  
  colnames(tabFin) <- c("district", "hour", varColNames)
  
  ## Sort tableau
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  tabFin$hour <- factor(as.character(tabFin$hour), levels=desired_order)
  tabFin <- tabFin[order(tabFin$hour), ]
  tabFin[is.na(tabFin)] <- 0 
  
  ## Export
  write.table(tabFin, paste("www/data/", nomEnq, "/stacked/", nomIndic, "_flow_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")

}  





######################### ALGO FONCTION ######################### 

## Fonction p2m : de la table de présence aux indicateurs du Mobiliscope

p2m <- function(nomEnq){
  
  # Création des répertoires "stacked" et "indice_segreg"
  dir.create(paste("www/data/",nomEnq, sep = ''))
  dir.create(paste("www/data/",nomEnq,"/stacked", sep = ''))
  dir.create(paste("www/data/",nomEnq,"/indice_segreg", sep = ''))
  
  # 2. INDICATEUR "WHOLE POPULATION" (et dossier "INDIC")
  createPopFiles(nomEnq)
  
  # 3. Préparation des données par indicateur 
  
  ## 3a. SEX 
  nbMod <- length(unique(prez_wide_h$SEX))
  nomIndic <- "sex"
  indicateur <- prez_wide_h$SEX
  
  prezStock <- prepStock_sex(nomEnq)
  prezPart <- prepPart_sex(pvs = prezStock)
  prezNR <- prepNR_sex()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3b. AGE
  nbMod <- length(unique(prez_wide_h$KAGE))
  nomIndic <- "age"
  indicateur <- prez_wide_h$KAGE
  
  prezStock <- prepStock_age(nomEnq)
  prezPart <- prepPart_age(pvs = prezStock)
  prezNR <- prepNR_age()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3c. NiVEAU D'EDUCATION (INDIVIDUEL)
  nbMod <- length(unique(prez_wide_h$EDUC))-1
  nomIndic <- "cleduc"
  indicateur <- prez_wide_h$EDUC
  
  prezStock <- prepStock_educ(nomEnq)
  prezPart <- prepPart_educ(pvs = prezStock)
  prezNR <- prepNR_educ()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3d. NiVEAU D'EDUCATION (MENAGE) 
  nbMod <- length(unique(prez_wide_h$EDUCMEN))-1
  nomIndic <- "educmen"
  indicateur <- prez_wide_h$EDUCMEN
  
  prezStock <- prepStock_educMen(nomEnq)
  prezPart <- prepPart_educMen(pvs = prezStock)
  prezNR <- prepNR_educMen()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  
  ## 3f. CSP (INDIVIDUELLE) 
  nbMod <- length(unique(prez_wide_h$CSP))-1
  nomIndic <- "cs"
  indicateur <- prez_wide_h$CSP
  
  prezStock <- prepStock_csp(nomEnq)
  prezPart <- prepPart_csp(pvs = prezStock)
  prezNR <- prepNR_csp()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3g. CSP (MENAGE) 
  nbMod <- length(unique(prez_wide_h$CSPMEN))-1
  nomIndic <- "cspmen"
  indicateur = prez_wide_h$CSPMEN
  
  prezStock <- prepStock_cspMen(nomEnq)
  prezPart <- prepPart_cspMen(pvs = prezStock)
  prezNR <- prepNR_cspMen()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3h. STATUT D'OCCUPATION 
  nbMod <- length(unique(prez_wide_h$OCC))-1
  nomIndic <- "occ"
  indicateur = prez_wide_h$OCC
  
  prezStock <- prepStock_occ(nomEnq)
  prezPart <- prepPart_occ(pvs = prezStock)
  prezNR <- prepNR_occ()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  
  ## 3j. ZONE DE RESIDENCE (RESIDENTIAL RINGS)
  nbMod <- length(unique(prez_wide_h$ZONAGE))
  nomIndic <- "resarea"
  indicateur <- prez_wide_h$ZONAGE
  
  prezStock <- prepStock_zone(nomEnq)
  prezPart <- prepPart_zone(pvs = prezStock)
  prezNR <- prepNR_zone()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  
  ## 3k. ACTIVITE (attention -2 pour Paris)
  nbMod <- length(unique(prez_wide_h$MOTIF))-1
  nomIndic <- "act"
  indicateur <- prez_wide_h$MOTIF
  
  prezStock <- prepStock_act(nomEnq)
  prezPart <- prepPart_act(pvs = prezStock)
  prezNR <- prepNR_act()
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
  ## 3l. MODE DE TRANSPORT 
  nbMod <- length(unique(prez_wide_h$MODE_ARR))-1
  nomIndic <- "mode"
  indicateur <- prez_wide_h$MODE_ARR
  
  prezStock <- prepStock_mode(nomEnq)
  prezPart <- prepPart_mode(pvs = prezStock)
  prezNR <- prepNR_mode()
  
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq)
  
}