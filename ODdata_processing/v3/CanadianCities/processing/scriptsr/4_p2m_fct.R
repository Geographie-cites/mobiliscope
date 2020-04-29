# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                    fonctions
#           Adaptation du script de AD pour les enquetes du Quebec 
# 
# juillet 2019 - EV
# ================================================================================#



# 1. TRANSFO DE LA TABLE DES PRESENCES (autonomes et "immobiles" en un lieu) AU FORMAT LARGE

prepPrezWide <- function(data){
  
  
  # Supression des présences hors zone d'enqu^te (codées '99999') 
  # et des présences mobiles/en déplacement (codées '88888')
  prezTable <- filter(prezTable, CODE_SEC != "99999" & CODE_SEC != "88888" & CODE_SEC != "8888" & CODE_SEC != "888" &  CODE_SEC != "9999" & CODE_SEC != 0)
  
  # Format WIDE
  
  prez_wide <- select(prezTable, ID_IND, ID_ED, LIB_ED, W_IND, CODE_SEC,  MOTIF, SEX,
                      KAGE, OCC, REVENU, RES_SEC, ZONAGE, MODE_ARR, 
                      h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27)
  prez_wide <- reshape2::melt(prez_wide, id.vars=c("ID_IND","ID_ED", "LIB_ED","W_IND", "CODE_SEC", 
                                         "MOTIF", "SEX", "REVENU",  "KAGE", "OCC", "RES_SEC", "ZONAGE", "MODE_ARR")) 
  prez_wide <- filter(prez_wide, value==TRUE)  
  
  #on modifie le type des variables
  prez_wide$CODE_SEC <- as.character(prez_wide$CODE_SEC)
  prez_wide$RES_SEC <- as.character(prez_wide$RES_SEC)
  prez_wide$MOTIF <- ifelse((prez_wide$MOTIF == "01"), "1", as.character(prez_wide$MOTIF))
  prez_wide$OCC <- as.numeric(prez_wide$OCC)
  prez_wide$MODE_ARR <- as.numeric(prez_wide$MODE_ARR)

  prez_wide_h <- group_by(.data = prez_wide, variable) 
  
  # Supprimer les "doublons" de la variable temporelle 
  #(respect du principe selon lequel un individu ne peut être présent dans deux lieux distincts à la même heure)
  prez_wide_h_p <- group_by(.data = prez_wide_h , variable, ID_IND)
  prez_wide_h_p <- as.data.frame(summarize(prez_wide_h_p, nID = n()))
  prez_wide_h <- merge(prez_wide_h, prez_wide_h_p, by=c("variable", "ID_IND"))
  prez_wide_h <- prez_wide_h[!duplicated(prez_wide_h[ , which(names(prez_wide_h) != "CODE_SEC" & names(prez_wide_h) != "MOTIF")]), ]
  prez_wide_h$nID <- NULL
  
  
  return(prez_wide_h)
}



# 2. PREPARATION DE L'INDICATEUR "WHOLE POPULATION"

createPopFiles <- function(nomEnq){
  
  # 2.a. CONSTRUCTION DES DONNEES POUR LES OURSINS - pop0_flow : 
  # nombre estimé de personnes non résidentes par secteur et par heure
  
  # Création des dossiers   
  dir.create(paste("3-data_V3.3/www/data/", nomEnq, sep = ''))
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_flow", sep = ''))
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_flow/data", sep = ''))
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_flow/geo", sep = ''))

  # Construction des données pour les oursins
  
  ## Calcul des flux OD (origine = secteur de résidence - RES_SEC, destination = secteur de présence - CODE_SEC)
  ## ! Pondération réalisée avec la variable 'W_IND' de la BD brute (coef de redressement de la personne enquêtée)
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
  write.csv2(flowdata, paste("3-data_V3.3/www/data/",nomEnq,"/pop0_flow/geo/flowData.csv", sep = ''), row.names = F)  
  write.csv(flowdatasmp, paste("3-data_V3.3/www/data/",nomEnq,"/pop0_flow/data/dataSect.csv", sep = ''), row.names = F)   
  
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
  geojson_write(shpSectDataFlowJson, file = paste("3-data_V3.3/www/data/",nomEnq,"/pop0_flow/geo/secteursData.geojson", sep = ''))   
  
  
  
  # 2.b. CONSTRUCTION DES DONNEES POUR la carte en cercle proportionnelle - pop0_prop : 
  # nombre estimé de personnes présentes par secteur et par heure
  
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_prop", sep = ''))
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_prop/data", sep = ''))
  dir.create(paste("3-data_V3.3/www/data/", nomEnq,"/pop0_prop/geo", sep = ''))
  
  ## Table de présence par secteur et par heure : POPULATION PRESENTE (STOCK PONDERE)
  prez_Var_Sec_popT <- group_by(.data = prez_wide_h , variable, CODE_SEC)
  prez_Var_Sec_popT <- as.data.frame(summarize(prez_Var_Sec_popT, 
                                               popSec = sum(W_IND, na.rm = TRUE)))
  prez_Var_Sec_popT <- filter(prez_Var_Sec_popT, CODE_SEC !=0)
  
  ## Préparation de la table à joindre au shp geojson
  dataShpProp <- select(prez_Var_Sec_popT, "variable", "CODE_SEC", "popSec") %>%
    spread_("variable", "popSec")
  dataShpProp <- data.frame(Secteur_EM = dataShpProp[ , 1], dataShpProp[ , 8:25], dataShpProp[ , 2:7])
  colnames(dataShpProp)[-1] <- paste("pop0", colnames(dataShpProp)[-1], sep='_')
  dataShpProp$Secteur_EM <- as.character((dataShpProp$Secteur_EM))
  
  for (i in 1:length(dataShpProp$Secteur_EM)){
    dataShpProp$Secteur_EM[i] = ifelse(nchar(dataShpProp$Secteur_EM[i]) == 2, str_c("0", dataShpProp$Secteur_EM[i]),
                                       ifelse(nchar(dataShpProp$Secteur_EM[i]) == 1, str_c("00", dataShpProp$Secteur_EM[i]),
                                              dataShpProp$Secteur_EM[i]))
  }
  
  ### Jointure
  shpSectDataProp <- merge(sfSec, dataShpProp, by = "Secteur_EM")
  
  ### Conversion en geojson
  shpSectDataPropJson <- geojson_json(shpSectDataProp)
  
  ### Export
  geojson_write(shpSectDataPropJson, file = paste("3-data_V3.3/www/data/",nomEnq,"/pop0_prop/geo/secteursData.geojson", sep = ''))   
  
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
  dataSectProp <- rownames_to_column(dataSectProp, "hour")
  dataSectProp$hour <- gsub(".*h",'',dataSectProp$hour)
  dataSectProp$hour <- ifelse(as.numeric(dataSectProp$hour) <= 12, paste(dataSectProp$hour, 'am', sep = ''),
                              ifelse(as.numeric(dataSectProp$hour) >= 24, paste((as.numeric(dataSectProp$hour) - 24), 'am', sep = ''),
                                     paste((as.numeric(dataSectProp$hour) - 12), 'pm', sep = '')))
  dataSectProp$hour[dataSectProp$hour == "0am"] <- "12pm"
  dataSectProp <- rbind(slice(dataSectProp, 19:24), slice(dataSectProp, 1:18))
  dataSectProp <- rbindlist(list(dataSectProp, dfMinMaxS), use.names = F)
  dataSectProp <- rbind(slice(dataSectProp, 25:26), slice(dataSectProp, 1:24))
  
  ### Export
  write.csv2(dataSectProp, paste("3-data_V3.3/www/data/",nomEnq,"/pop0_prop/data/dataSect.csv", sep = ''), row.names = F)   
    
}




# 3. CREATION DES TABLES POUR LA FONCTION "createFiles"
#============================================================================#


# 3. CREATION DES TABLES POUR LE DOSSIER "indicateurs" ET LA FONCTION "createFiles"

## 3a. INDICATEUR : SEX

prepStock_sex <- function(nomEnq){
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/SEX", sep = "")) 
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(SEX) >= 1], na.rm = TRUE),
                                 sex1 = sum(W_IND[as.numeric(SEX) == 1], na.rm = TRUE),
                                 sex2 = sum(W_IND[as.numeric(SEX) == 2], na.rm = TRUE)))

  ### EXPORT
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/SEX/Data_SEX_Pond.csv", sep = ""), row.names = F)
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h)
  prez_Var_Sec_B <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(SEX) >= 1, na.rm = TRUE),
                                            sex1 = sum(as.numeric(SEX) == 1, na.rm=TRUE),
                                            sex2 = sum(as.numeric(SEX) == 2, na.rm=TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/SEX/Data_SEX_Brutes.csv", sep = ""), row.names = F)       
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(SEX) >= 1, na.rm = TRUE),
                                              sex1 = sum(as.numeric(SEX) == 1, na.rm = TRUE),
                                              sex2 = sum(as.numeric(SEX) == 2, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/SEX/Data_SEX_BrutesNR.csv", sep = ""), row.names = F)
  
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
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/AGE", sep = ""))  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(KAGE) >= 1], na.rm = TRUE),
                                 age1 = sum(W_IND[as.numeric(KAGE) == 1], na.rm = TRUE),
                                 age2 = sum(W_IND[as.numeric(KAGE) == 2], na.rm = TRUE),
                                 age3 = sum(W_IND[as.numeric(KAGE) == 3], na.rm = TRUE),
                                 age4 = sum(W_IND[as.numeric(KAGE) == 4], na.rm = TRUE)))
  
  ### EXPORT
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/AGE/Data_AGE_Pond.csv", sep = ""), row.names = F)   
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- group_by(.data =prez_wide_h, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(KAGE) >= 1, na.rm = TRUE),
                                            age1 = sum(as.numeric(KAGE) == 1, na.rm = TRUE),
                                            age2 = sum(as.numeric(KAGE) == 2, na.rm = TRUE),
                                            age3 = sum(as.numeric(KAGE) == 3, na.rm = TRUE),
                                            age4 = sum(as.numeric(KAGE) == 4, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/AGE/Data_AGE_Brutes.csv", sep = ""), row.names = F)  
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(KAGE) >= 1, na.rm = TRUE),
                                              age1 = sum(as.numeric(KAGE) == 1, na.rm = TRUE),
                                              age2 = sum(as.numeric(KAGE) == 2, na.rm = TRUE),
                                              age3 = sum(as.numeric(KAGE) == 3, na.rm = TRUE),
                                              age4 = sum(as.numeric(KAGE) == 4, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/AGE/Data_AGE_BrutesNR.csv", sep = ""), row.names = F)  
  
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


## 3c. INDICATEUR : OCCUPATIONAL STATUS

prepStock_occ <- function(nomEnq){ 
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/OCC", sep = ""))    
  
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
  
  ### Export
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/OCC/Data_OCC_Pond.csv", sep = ""), row.names = F)
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h, OCC !='')
  prez_Var_Sec_B <- group_by(.data = prez_Var_Sec_B, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(OCC) >= 1, na.rm = TRUE),
                                            occ1 = sum(as.numeric(OCC) == 1, na.rm = TRUE),
                                            occ2 = sum(as.numeric(OCC) == 2, na.rm = TRUE),
                                            occ3 = sum(as.numeric(OCC) == 3, na.rm = TRUE),
                                            occ4 = sum(as.numeric(OCC) == 4, na.rm = TRUE),
                                            occ5 = sum(as.numeric(OCC) == 5, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/OCC/Data_OCC_Brutes.csv", sep = ""), row.names = F)  # AUTO
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC & OCC !='')
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(OCC) >= 1, na.rm = TRUE),
                                              occ1 = sum(as.numeric(OCC) == 1, na.rm = TRUE),
                                              occ2 = sum(as.numeric(OCC) == 2, na.rm = TRUE),
                                              occ3 = sum(as.numeric(OCC) == 3, na.rm = TRUE),
                                              occ4 = sum(as.numeric(OCC) == 4, na.rm = TRUE),
                                              occ5 = sum(as.numeric(OCC) == 5, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/OCC/Data_OCC_BrutesNR.csv", sep = ""), row.names = F)   # AUTO
  
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


## 3d. INDICATEUR : RESIDENTIAL RINGS

prepStock_zone <- function(nomEnq){
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/RESAREA", sep = "")) 
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(ZONAGE) >= 1], na.rm = TRUE),
                                 resarea1 = sum(W_IND[as.numeric(ZONAGE) == 1], na.rm = TRUE),
                                 resarea2 = sum(W_IND[as.numeric(ZONAGE) == 2], na.rm = TRUE),
                                 resarea3 = sum(W_IND[as.numeric(ZONAGE) == 3], na.rm = TRUE)))
  
  
  ### EXPORT
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/RESAREA/Data_RESAREA_Pond.csv", sep = ""), row.names = F)   
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h)
  prez_Var_Sec_B <- group_by(.data = prez_wide_h, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(ZONAGE) >= 1, na.rm = TRUE),
                                            resarea1 = sum(as.numeric(ZONAGE) == 1, na.rm=TRUE),
                                            resarea2 = sum(as.numeric(ZONAGE) == 2, na.rm=TRUE),
                                            resarea3 = sum(as.numeric(ZONAGE) == 2, na.rm=TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/RESAREA/Data_RESAREA_Brutes.csv", sep = ""), row.names = F)      
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC)
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(ZONAGE) >= 1, na.rm = TRUE),
                                              resarea1 = sum(as.numeric(ZONAGE) == 1, na.rm=TRUE),
                                              resarea2 = sum(as.numeric(ZONAGE) == 2, na.rm=TRUE),
                                              resarea3 = sum(as.numeric(ZONAGE) == 2, na.rm=TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/RESAREA/Data_RESAREA_BrutesNR.csv", sep = ""), row.names = F)        # AUTO
  
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

## 3e. INDICATEUR : ACTIVITY  

prepStock_act <- function(nomEnq){
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/ACT", sep = ""))   
  
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
  
  ### Export
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/ACT/Data_ACT_Pond.csv", sep = ""), row.names = F)   
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h, MOTIF != '')
  prez_Var_Sec_B <- group_by(.data = prez_Var_Sec_B, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(MOTIF) >= 1, na.rm = TRUE),
                                            act1 = sum(as.numeric(MOTIF) == 1, na.rm = TRUE),
                                            act2 = sum(as.numeric(MOTIF) == 2, na.rm = TRUE),
                                            act3 = sum(as.numeric(MOTIF) == 3, na.rm = TRUE),
                                            act4 = sum(as.numeric(MOTIF) == 4, na.rm = TRUE),
                                            act5 = sum(as.numeric(MOTIF) == 5, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/ACT/Data_ACT_Brutes.csv", sep = ""), row.names = F)   
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC & MOTIF != '')
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(MOTIF) >= 1, na.rm = TRUE),
                                              act1 = sum(as.numeric(MOTIF) == 1, na.rm = TRUE),
                                              act2 = sum(as.numeric(MOTIF) == 2, na.rm = TRUE),
                                              act3 = sum(as.numeric(MOTIF) == 3, na.rm = TRUE),
                                              act4 = sum(as.numeric(MOTIF) == 4, na.rm = TRUE),
                                              act5 = sum(as.numeric(MOTIF) == 5, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/ACT/Data_ACT_BrutesNR.csv", sep = ""), row.names = F)   
  
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

## 3f. INDICATEUR : TRAVEL MODE

prepStock_mode <- function(nomEnq){
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/MODE", sep = ""))   
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, MODE_ARR != '')
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(MODE_ARR) >= 1], na.rm = TRUE),
                                 mode1 = sum(W_IND[as.numeric(MODE_ARR) == 1], na.rm = TRUE),
                                 mode2 = sum(W_IND[as.numeric(MODE_ARR) == 2], na.rm = TRUE),
                                 mode3 = sum(W_IND[as.numeric(MODE_ARR) == 3], na.rm = TRUE)))
  
  ### Export
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/MODE/Data_MODE_Pond.csv", sep = ""), row.names = F)  
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h, MODE_ARR != '')
  prez_Var_Sec_B <- group_by(.data = prez_Var_Sec_B, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(MODE_ARR) >= 1, na.rm = TRUE),
                                            mode1 = sum(as.numeric(MODE_ARR) == 1, na.rm = TRUE),
                                            mode2 = sum(as.numeric(MODE_ARR) == 2, na.rm = TRUE),
                                            mode3 = sum(as.numeric(MODE_ARR) == 3, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/MODE/Data_MODE_Brutes.csv", sep = ""), row.names = F)  
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC & MODE_ARR != '')
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(MODE_ARR) >= 1, na.rm = TRUE),
                                              mode1 = sum(as.numeric(MODE_ARR) == 1, na.rm = TRUE),
                                              mode2 = sum(as.numeric(MODE_ARR) == 2, na.rm = TRUE),
                                              mode3 = sum(as.numeric(MODE_ARR) == 3, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/MODE/Data_MODE_BrutesNR.csv", sep = ""), row.names = F) 
  
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


## 3g. INDICATEUR : REVENU

prepStock_rev <- function(nomEnq){
  
  ## Création d'un folder au nom de l'indicateur :
  dir.create(paste("meta/indicateurs/",nomEnq,"/REV", sep = ""))    
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- filter(prez_wide_h, REVENU != '') 
  pvs <- group_by(.data = pvs, variable, CODE_SEC)
  pvs <- as.data.frame(summarize(pvs, 
                                 popSec = sum(W_IND[as.numeric(REVENU) >= 0], na.rm = TRUE),
                                 rev1 = sum(W_IND[as.numeric(REVENU) == 1], na.rm = TRUE),
                                 rev2 = sum(W_IND[as.numeric(REVENU) == 2], na.rm = TRUE),
                                 rev3 = sum(W_IND[as.numeric(REVENU) == 3], na.rm = TRUE),
                                 rev4 = sum(W_IND[as.numeric(REVENU) == 4], na.rm = TRUE),
                                 rev5 = sum(W_IND[as.numeric(REVENU) == 0], na.rm = TRUE)))
  
  
  
  ### Export
  write.csv2(pvs, paste("meta/indicateurs/",nomEnq,"/REV/Data_REV_Pond.csv", sep = ""), row.names = F)  
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- filter(prez_wide_h, REVENU != '')
  prez_Var_Sec_B <- group_by(.data = prez_Var_Sec_B, variable, CODE_SEC)
  prez_Var_Sec_B <- as.data.frame(summarize(prez_Var_Sec_B,
                                            popsec = sum(as.numeric(REVENU) >= 0, na.rm = TRUE),
                                            rev1 = sum(as.numeric(REVENU) == 1, na.rm = TRUE),
                                            rev2 = sum(as.numeric(REVENU) == 2, na.rm = TRUE),
                                            rev3 = sum(as.numeric(REVENU) == 3, na.rm = TRUE),
                                            rev4 = sum(as.numeric(REVENU) == 4, na.rm = TRUE),
                                            rev5 = sum(as.numeric(REVENU) == 0, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_B, paste("meta/indicateurs/",nomEnq,"/REV/Data_REV_Brutes.csv", sep = ""), row.names = F)   # AUTO
  
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente non résidente)
  prez_Var_Sec_BNR <- filter(prez_wide_h, CODE_SEC != RES_SEC & REVENU != '')
  prez_Var_Sec_BNR <- group_by(.data = prez_Var_Sec_BNR, variable, CODE_SEC)
  prez_Var_Sec_BNR <- as.data.frame(summarize(prez_Var_Sec_BNR,
                                              popsec = sum(as.numeric(REVENU) >= 0, na.rm = TRUE),
                                              rev1 = sum(as.numeric(REVENU) == 1, na.rm = TRUE),
                                              rev2 = sum(as.numeric(REVENU) == 2, na.rm = TRUE),
                                              rev3 = sum(as.numeric(REVENU) == 3, na.rm = TRUE),
                                              rev4 = sum(as.numeric(REVENU) == 4, na.rm = TRUE),
                                              rev5 = sum(as.numeric(REVENU) == 0, na.rm = TRUE)))
  
  ### Export
  write.csv2(prez_Var_Sec_BNR, paste("meta/indicateurs/",nomEnq,"/REV/Data_REV_BrutesNR.csv", sep = ""), row.names = F)      # AUTO
  
  return(pvs)
  
}

prepPart_rev <- function(pvs){
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- data.frame(pvs[ ,1:3], apply(pvs[ ,4:length(pvs)], MARGIN = 2, 
                                       FUN = function(x){(x * 100) / pvs$popSec}))
  
  return(pvs2)
  
}

prepNR_rev <- function(){
  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- filter(prez_wide_h, CODE_SEC != RES_SEC & REVENU != '')
  pvs3 <- group_by(.data = pvs3, variable, CODE_SEC)
  pvs3 <- as.data.frame(summarize(pvs3,
                                  popsec = sum(W_IND[as.numeric(REVENU) >= 0], na.rm = TRUE),
                                  rev1 = sum(W_IND[as.numeric(REVENU) == 1], na.rm = TRUE),
                                  rev2 = sum(W_IND[as.numeric(REVENU) == 2], na.rm = TRUE),
                                  rev3 = sum(W_IND[as.numeric(REVENU) == 3], na.rm = TRUE),
                                  rev4 = sum(W_IND[as.numeric(REVENU) == 4], na.rm = TRUE),
                                  rev5 = sum(W_IND[as.numeric(REVENU) == 0], na.rm = TRUE)))
  
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
    dataShpProp <- select(pvs, "variable", "CODE_SEC", indic) %>%
      spread_("variable", indic)
    
    ### Reorder
    dataShpProp <- data.frame("Secteur_EM" = dataShpProp[ , 1], dataShpProp[ , 8:25], dataShpProp[ , 2:7])
    colnames(dataShpProp)[-1] <- paste(indic, colnames(dataShpProp)[-1], sep='_')
    
    
    # modification des codes secteurs
    dataShpProp$Secteur_EM <- as.character((dataShpProp$Secteur_EM))
    for (j in 1:length(dataShpProp$Secteur_EM)){
      dataShpProp$Secteur_EM[j] = ifelse(nchar(dataShpProp$Secteur_EM[j]) == 2, str_c("0", dataShpProp$Secteur_EM[j]),
                                         ifelse(nchar(dataShpProp$Secteur_EM[j]) == 1, str_c("00", dataShpProp$Secteur_EM[j]),
                                                dataShpProp$Secteur_EM[j]))
    }
    
    ## data shape part
    dataShpChoro <- select(pvs2, "variable", "CODE_SEC", indic2) %>%
      spread_("variable", indic2)
    
    ### Reorder
    dataShpChoro <- data.frame("Secteur_EM" = dataShpChoro[ , 1], dataShpChoro[ , 8:25], dataShpChoro[ , 2:7])
    colnames(dataShpChoro)[-1] <- paste(indic2, colnames(dataShpChoro)[-1], sep='_')
    
    
    # modification des codes secteurs
    dataShpChoro$Secteur_EM <- as.character((dataShpChoro$Secteur_EM))
    for (j in (1:length(dataShpChoro$Secteur_EM))){
      dataShpChoro$Secteur_EM[j] = ifelse(nchar(dataShpChoro$Secteur_EM[j]) == 2, str_c("0", dataShpChoro$Secteur_EM[j]),
                                          ifelse(nchar(dataShpChoro$Secteur_EM[j]) == 1, str_c("00", dataShpChoro$Secteur_EM[j]),
                                                 dataShpChoro$Secteur_EM[j]))
    }
    
    ## Création des données pour les cartes en oursins
    ### Flowdata 
    
    if (indic == "rev5"){
      flowdata <- filter(prez_wide_h, as.numeric(indicateur) == 0)
    }else{
      flowdata <- filter(prez_wide_h, as.numeric(indicateur) == i)
    }
    flowdata <- select(flowdata, ID_IND, variable, CODE_SEC, W_IND, RES_SEC)
    flowdata <- group_by(.data = flowdata , variable, CODE_SEC, RES_SEC)
    flowdata <- summarise(flowdata, W_IND = sum(W_IND))
    flowdata <- filter(flowdata, CODE_SEC != RES_SEC)
    
    ### Geojson
    if (indic == "rev5"){
      flowdatasmp <- filter(prez_wide_h, as.numeric(indicateur) == 0 & CODE_SEC != "")
    }else{
      flowdatasmp <- filter(prez_wide_h, as.numeric(indicateur) == i & CODE_SEC != "")
    }
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
    
    # modification des codes secteurs
    for (j in 1:length(flowdata$CODE_SEC)){
      flowdata$CODE_SEC[j] <- ifelse(nchar(flowdata$CODE_SEC[j]) == 1, str_c("00", flowdata$CODE_SEC[j]),
                                     ifelse(nchar(flowdata$CODE_SEC[j]) == 2, str_c("0", flowdata$CODE_SEC[j]),
                                            flowdata$CODE_SEC[j]))
      flowdata$RES_SEC[j] <- ifelse(nchar(flowdata$RES_SEC[j]) == 1, str_c("00", flowdata$RES_SEC[j]),
                                    ifelse(nchar(flowdata$RES_SEC[j]) == 2, str_c("0", flowdata$RES_SEC[j]),
                                           flowdata$RES_SEC[j]))
    }
    
    flowdatasmp$CODE_SEC <- as.character((flowdatasmp$CODE_SEC))
    
    for (j in 1:length(flowdatasmp$CODE_SEC)){
      flowdatasmp$CODE_SEC[j] = ifelse(nchar(flowdatasmp$CODE_SEC[j]) == 2, str_c("0", flowdatasmp$CODE_SEC[j]),
                                          ifelse(nchar( flowdatasmp$CODE_SEC[j]) == 1, str_c("00", flowdatasmp$CODE_SEC[j]),
                                                 flowdatasmp$CODE_SEC[j]))
      }

    
    # Jointure des données aux fonds de carte
    
    shpSectDataProp <- merge(sfSec, dataShpProp, by = "Secteur_EM")
    shpSectDataChoro <- merge(sfSec, dataShpChoro, by = "Secteur_EM")
    shpSectDataFlow <- merge(sfSec, flowdatasmp, by.x = "Secteur_EM", by.y = "CODE_SEC")
    
    
    # Création des répertoires
    ## Répertoires parents (2 par indicateur)
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_prop", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_choro", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow", sep = ''))
    
    ## Répertoires enfants (2 par répertoire parent)
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_prop/data", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_choro/data", sep = ''))
    dir.create(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow/data", sep = ''))
    
    # Conversion shp to json
    shpSectDataPropJson <- geojson_json(shpSectDataProp)
    shpSectDataChoroJson <- geojson_json(shpSectDataChoro)
    shpSectDataFlowJson <- geojson_json(shpSectDataFlow)
    
    # Export des données spatiales
    geojson_write(shpSectDataPropJson, file = paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo/secteursData.geojson", sep = ''))
    geojson_write(shpSectDataChoroJson, file = paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo/secteursData.geojson", sep = ''))
    geojson_write(shpSectDataFlowJson, file = paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/secteursData.geojson", sep = ''))
    write.table(flowdata, paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/flowData.csv", sep = ''), row.names = F, sep = ",", dec = ".")
    
    # Création des tables pour le graphique simple
    ## STOCK
    dataSectProp <- as.data.frame(t(dataShpProp))
    names(dataSectProp) <- as.matrix(dataSectProp[1, ])
    dataSectProp <-  dataSectProp[-1, ]
    dataSectProp <- rownames_to_column(dataSectProp, "hour")
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
    dataSectChoro <- rownames_to_column(dataSectChoro, "hour")
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
    dataSectFlow <- rownames_to_column(dataSectFlow, "hour")
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
    write.csv2(dataSectProp, paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_prop/data/dataSect.csv", sep = ''), row.names = F)
    write.csv2(dataSectChoro, paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_choro/data/dataSect.csv", sep = ''), row.names = F)
    write.csv2(dataSectFlow, paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i ,"_flow/data/dataSect.csv", sep = ''), row.names = F)
  }
  
}  
  
############################################################################################




################## FONCTION : création des indices de ségrégation #########################  

createISeg <- function(nbMod, nomIndic, nomEnq, pvs, pvs2){
  
  # DUNCAN
  ## Mise en forme du tableau de base
  tabISeg <- pvs
  listHour <- unique(as.character(tabISeg$variable))
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

  
  shpSectMoran <- readOGR(dsn = paste("scriptsr/shp"), layer = paste("SM_", nomEnq, sep = ""),
                          encoding = "utf8", stringsAsFactors = FALSE, drop_unsupported_fields = FALSE)  
  
  if (nomEnq == "MONTREAL"){
  shpSectMoran$REG<-NULL
  shpSectMoran$VC<-NULL
  shpSectMoran$idsec<-NULL
  shpSectMoran$ZONAGE_COM<-NULL
  shpSectMoran$ZONAGE_SEC<-NULL
    
  }
  

  
  shpSectMoran <- spTransform(shpSectMoran, CRS("+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +units=m +no_defs")) 
  
  shpSectMoran@data <- unique(shpSectMoran@data) 
  
  #pour Quebec, on renomme tous les secteurs avec des virgules
  if (nomEnq == "QUEBEC"){
  
    shpSectMoran@data <- shpSectMoran@data %>%
      mutate(Secteur_EM = plyr::mapvalues(Secteur_EM, c("2.1","2.2","8.1","9.1","22.1","57.1","58.1"),
                                          c( "70","71","72", "73", "74", "75", "76")))
   
  }
  
  
  for (i in 1:length(shpSectMoran@data$Secteur_EM)){
     shpSectMoran@data$Secteur_EM[i] = ifelse(nchar(shpSectMoran@data$Secteur_EM[i]) == 2, str_c("0", shpSectMoran@data$Secteur_EM[i]),
                                  ifelse(nchar(shpSectMoran@data$Secteur_EM[i]) == 1, str_c("00", shpSectMoran@data$Secteur_EM[i]),
                                         shpSectMoran@data$Secteur_EM[i]))
  }

    
   
  ## Création d'un tableau vide
   moran <- data.frame("hour" = '', "var" = '', "moran" = numeric(24))
  
   for (i in listHour){
  
     # Trier les données
     
    dataMoran <- filter(pvs2, variable == i)
    
    
     # mise en forme des codes secteurs 
     for (j in 1:length(dataMoran$CODE_SEC)){
                 dataMoran$CODE_SEC[j] = ifelse(nchar(dataMoran$CODE_SEC[j]) == 2, str_c("0", dataMoran$CODE_SEC[j]),
                                         ifelse(nchar(dataMoran$CODE_SEC[j]) == 1, str_c("00", dataMoran$CODE_SEC[j]),
                                                dataMoran$CODE_SEC[j]))
     }
     
     # Joindre avec le shp
     dataMoran <- merge(shpSectMoran, dataMoran, by.x = 'Secteur_EM', by.y = 'CODE_SEC')
     
     # Calcul des paramètres
     nbSecteurs <- poly2nb(pl = dataMoran,
                           row.names = unique(dataMoran$Secteur_EM),
                           snap = 50,
                           queen = TRUE)
     
   # Calcul de l'indice de Moran : 6 correspond au nombre de colonnes avant les infos utilisées par la fonction, changer en 7 si on a rajouté le zonage


     for (j in colnames(dataMoran@data[ , 6:length(dataMoran@data)])){
  
       Moran <- moran.mc(x = dataMoran[[j]],
                         listw = nb2listw(nbSecteurs), nsim = 1000)
  
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
   
  #villes canadiennes : on met les revenus inconnus au d?but pour les avoir en bas du graphique empil?
  if (nomIndic == "rev" & nbMod == 5){
     duncan <- duncan[,c(1,6,2,3,4,5)]
     moran <- moran[,c(1,6,2,3,4,5)]
   } 
   
  for (i in 1:nbMod){
    
    write.table(duncan, paste("3-data_V3.3/www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Duncan.csv", 
                              sep = ''), row.names = F, sep = ',', dec = '.')
    write.table(moran, paste("3-data_V3.3/www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Moran.csv", 
                              sep = ''), row.names = F, sep = ',', dec = '.')
    
  } 
  
}  




################## FONCTION : création des graphiques en barres empilées (stacked) #########################  

createStacked <- function(nbMod, nomIndic, nomEnq){
  
  # 1. Cartes choro
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_choro", sep = ""),
           read.csv2(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i, "_choro/data/dataSect.csv", sep =""), 
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
  #tabFin$district <- as.numeric(tabFin$district) (jointure des codes secteurs en caractères)
  tabFin <- tabFin[order(tabFin$district), ]
  tabFin <- tabFin[order(tabFin$hour), ]
  
  #villes canadiennes : on met les revenus inconnus au d?but pour les avoir en bas du graphique empil?
  if (nomIndic == "rev" & nbMod == 5){
    tabFin <- tabFin[,c(1,2,7,3,4,5,6)]
  }
  
  ## Export
  write.table(tabFin, paste("3-data_V3.3/www/data/", nomEnq, "/stacked/", nomIndic, "_choro_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")
  
  # 2. Cartes Proportionnelles
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_prop", sep = ""),
           read.csv2(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i, "_prop/data/dataSect.csv", sep =""), 
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
  #tabFin$district <- as.numeric(tabFin$district)
  tabFin <- tabFin[order(tabFin$district), ]
  tabFin <- tabFin[order(tabFin$hour), ]
  
  #villes canadiennes : on met les revenus inconnus au d?but pour les avoir en bas du graphique empil?
  if (nomIndic == "rev" & nbMod == 5){
    tabFin <- tabFin[,c(1,2,7,3,4,5,6)]
  } 
  
  ## Export
  write.table(tabFin, paste("3-data_V3.3/www/data/", nomEnq, "/stacked/", nomIndic, "_prop_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")
  
  # 3. Cartes en oursins
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste("dataSect", i, "_flow", sep = ""),
           read.csv2(paste("3-data_V3.3/www/data/", nomEnq, "/", nomIndic, i, "_flow/data/dataSect.csv", sep =""), 
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
  #tabFin$district <- as.numeric(tabFin$district)
  tabFin <- tabFin[order(tabFin$district), ]
  tabFin <- tabFin[order(tabFin$hour), ]
  tabFin[is.na(tabFin)] <- 0 
  
  #villes canadiennes : on met les revenus inconnus au d?but pour les avoir en bas du graphique empil?
  if (nomIndic == "rev" & nbMod == 5){
    tabFin <- tabFin[,c(1,2,7,3,4,5,6)]
  } 
  
  ## Export
  write.table(tabFin, paste("3-data_V3.3/www/data/", nomEnq, "/stacked/", nomIndic, "_flow_stacked.csv", sep = ""), 
              row.names = F, sep = ",", dec = ".")

}  

############################################################################################