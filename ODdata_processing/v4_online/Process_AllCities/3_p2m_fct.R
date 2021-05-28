# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                      fonctions 
#    Adaptation du script de Constance Lecomte (prepa_data_Mobiliscope_P2.R)
# 
# avril 2018 - AD
# rv en octobre 2020
# rv en jan. 2021 pour intégration Canada
# ================================================================================#




#==== GLOBAL FUNCTIONS ====

##---- 1. Transformation de la table des présences au format long----
## (présences autonomes et "immobiles" en un lieu) 
prepPrezLong <- function(data){
  
  ctry <- unique(data$PAYS)
  if (ctry == "FR") {
    # Recoder les modalités de 'QPV'
    data <- data %>% 
      mutate(QPV = QPV+1)
    
    data <- data %>% 
      mutate(ZONAGE = case_when(ENQUETE %in% c("BESANCON", "CARCASSONNE") & ZONAGE == 3 ~ 2,
                                TRUE ~ ZONAGE))
    # Sélection des mobilités autonomes
    data <- filter(data, AGE > 15)
    
  }
  
  if (ctry == "CA") {
    # filtrer code_sec = NA
    data <- data %>% filter(!is.na(CODE_SEC))
    data <- data %>% filter(KAGE != "0")
    # recoder revenu inconnu avec 5
    data <- data %>% mutate(REV = case_when(REV=="0" ~ "5",
                                            TRUE ~ REV))
  }
  
  # Suppression des présences hors zone d'enquête (codées '999') 
  # et des présences mobiles/en déplacement (codées '888')
  data <- filter(data, CODE_SEC != "999" & CODE_SEC != "888")
  
  # Suppression des artefacts de construction avec des durées = 0 
  data <- filter(data, DUREE != 0)
  
  # Format long
  prez_long <- data %>% 
    pivot_longer(-c(!starts_with("h", ignore.case = FALSE)), names_to = "variable", values_to = "value")
  
  # On conserve uniquement les heures où les personnes stationnent dans un lieu
  prez_long <- filter(prez_long, value == TRUE)  
  
  # Supprimer les "doublons" de la variable temporelle 
  # (respect du principe selon lequel un individu ne peut être présent dans 2 lieux distincts à la même heure)
  doublon <- prez_long %>% 
      group_by(variable, ID_IND) %>% 
      mutate(nID = n(),
             nSEC = length(unique(CODE_SEC)),
             durMax = max(DUREE))
    
  doublon <- doublon %>% 
      filter(nID > 1 & nSEC > 1) %>% 
      select(ID_IND, CODE_SEC, CODE_COM, CODE_ZF, DUREE, variable, value, nSEC, durMax) %>% 
      mutate(toRemove = case_when(DUREE == durMax ~ "oui",
                                  # nSEC > 2 & DUREE == 0 ~ "oui",
                                  TRUE ~ "non"))
    
  doublon <- doublon %>% 
      filter(toRemove == "oui") %>% 
      mutate(ID = paste(ID_IND, CODE_SEC, variable, sep = "_"))
    
  prez_long <- prez_long %>% 
      mutate(ID = paste(ID_IND, CODE_SEC, variable, sep = "_")) %>% 
      filter(!ID %in% doublon$ID)
    
  prez_long$ID <- NULL
  
  return(prez_long)
  
}

##---- 2. Préparation de l'indicateur "whole population" ----
createPopFiles <- function(nomEnq, prez_long, sfSec){
  
  # 2.a. CONSTRUCTION DES DONNEES POUR LES OURSINS - pop0_flow : 
  # nombre estimé de personnes non résidentes par secteur et par heure
  
  # Création des dossiers   
  dir.create(paste0("www/data/", nomEnq))
  dir.create(paste0("www/data/", nomEnq,"/pop0_flow"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_flow/data"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_flow/geo"))
  
  # Construction des données pour les oursins
  
  ## Calcul des flux OD (origine = secteur de résidence - RES_SEC, destination = secteur de présence - CODE_SEC)
  ## ! Pondération réalisée avec la variable 'COEQ' de la BD brute (coef de redressement de la personne enquêtée)
  ## seuil de population brute = 12 individus par secteur (en deçà on ne diffuse pas l'info)
  flowdata <- prez_long %>% 
    select(ID_IND, W_IND, variable, CODE_SEC, RES_SEC) %>% 
    group_by(variable, CODE_SEC, RES_SEC) %>% 
    summarise(W_IND = sum(W_IND),
              n = length(ID_IND)) %>% 
    filter(CODE_SEC != RES_SEC & n >= 6) %>% 
    select(-n)
  
  ## Préparation des données pour les oursins
  flowdatasmp <- prez_long %>%
    select(ID_IND, variable, CODE_SEC, RES_SEC, W_IND) %>%
    group_by(variable, CODE_SEC)

  
  ## Calcul de la population pondérée par secteur et par heure 
  flowdatasmpT <- summarise(flowdatasmp, W_IND = sum(W_IND))
  
  ## Calcul de la population pondérée non résidente par secteur et par heure
  flowdatasmpNR <-  filter(flowdatasmp, CODE_SEC != RES_SEC) 
  flowdatasmpNR <- summarise(flowdatasmpNR, W_IND = sum(W_IND))
  
  ## Population pondérée par secteur et par heure totale (x) et non résidente (y)
  flowdatasmp <- left_join(x = flowdatasmpT, y = flowdatasmpNR, by = c("variable","CODE_SEC"))
  alldist <- distinct(prez_long, variable, CODE_SEC)
  ## Ajout des secteurs vides (< 12 personnes brutes)
  flowdatasmp <-  right_join(flowdatasmp, alldist, by = c("variable", "CODE_SEC"))

  ## Mise en forme de la table de la population non résidente où en ligne = les heures et en colonne = les secteurs
  flowdatasmp <- spread(select(flowdatasmp, variable, CODE_SEC, W_IND.y), 
                        key = CODE_SEC, value = W_IND.y, fill = 0) %>% ungroup()
  flowdatasmp$variable <- gsub("h", '', flowdatasmp$variable)
  flowdatasmp$variable <- ifelse(as.numeric(flowdatasmp$variable) <= 12, paste0(flowdatasmp$variable, 'am'), 
                                 ifelse(as.numeric(flowdatasmp$variable) >= 24, paste0((as.numeric(flowdatasmp$variable) - 24), 'am'),
                                        paste0((as.numeric(flowdatasmp$variable) - 12), 'pm')))
  flowdatasmp$variable[flowdatasmp$variable == "0am"] <- "12pm"
  colnames(flowdatasmp)[1] <- "hour"
  ## Suppression des secteurs sans population non résidente toute la journée 
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
  vMaxF <- max(vMaxF) # valeur max en stock  
  
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
  flowdatasmp <- rbind(slice(flowdatasmp, 1:2), slice(flowdatasmp, 21:26), slice(flowdatasmp, 3:20))
  
  ## Export des tables
  write.csv2(flowdata, paste0("www/data/",nomEnq,"/pop0_flow/geo/flowData.csv"), row.names = FALSE)  
  write.table(flowdatasmp, paste0("www/data/",nomEnq,"/pop0_flow/data/dataSect.csv"), 
              row.names = FALSE, sep = ",", dec = ".")   
  
  ### Mise en forme de la table de la population non résidente 
  ### pour jointure avec le shp (où en ligne = les secteurs et en colonne = les heures)
  flowdatasmpGJS <- spread(flowdatasmpNR, key = variable, value = W_IND)
  flowdatasmpGJS[is.na(flowdatasmpGJS)] <- 0
  colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)] <- paste("pop0", colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)], sep = "_")
  colnames(flowdatasmpGJS)[1] <- "Secteur_EM"
  
  ## Jointure avec le fichier shp
  shpSectDataFlow <- left_join(sfSec, flowdatasmpGJS, by = "Secteur_EM")

  ## Export
  geojson_write(shpSectDataFlow,
                file = paste0("www/data/", nomEnq, "/pop0_flow/geo/secteursData.geojson"))

  
  
  # 2.b. CONSTRUCTION DES DONNEES POUR la carte en cercle proportionnelle - pop0_prop : 
  # nombre estimé de personnes présentes par secteur et par heure
  
  dir.create(paste0("www/data/", nomEnq,"/pop0_prop"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_prop/data"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_prop/geo"))
  
  ## Table de présence par secteur et par heure : 
  ## POPULATION PRESENTE (STOCK PONDERE)
  prez_Var_Sec_popT <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND, na.rm = TRUE))
  
  ## Préparation de la table à joindre au shp geojson
  dataShpProp <- prez_Var_Sec_popT %>% 
    select(variable, CODE_SEC, popSec) %>% 
    pivot_wider(names_from = variable, values_from = popSec, names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC)
  dataShpProp <- dataShpProp[ , c(1, 20:25, 2:24)]
  dataShpProp <- dataShpProp[ , 1:25]

  ## Jointure avec le fichier shp
  shpSectDataProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
  
  ### Export
  geojson_write(shpSectDataProp,
                file = paste0("www/data/", nomEnq,"/pop0_prop/geo/secteursData.geojson"))

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
  dataSectProp$hour <- ifelse(as.numeric(dataSectProp$hour) <= 12, paste0(dataSectProp$hour, 'am'),
                              ifelse(as.numeric(dataSectProp$hour) >= 24, paste0((as.numeric(dataSectProp$hour) - 24), 'am'),
                                     paste0((as.numeric(dataSectProp$hour) - 12), 'pm')))
  dataSectProp$hour[dataSectProp$hour == "0am"] <- "12pm"
  #dataSectProp <- rbind(slice(dataSectProp, 19:24), slice(dataSectProp, 1:18))
  dataSectProp <- rbindlist(list(dataSectProp, dfMinMaxS))
  dataSectProp <- rbind(slice(dataSectProp, 25:26), slice(dataSectProp, 1:24))
  
  ### Export
  write.csv2(dataSectProp, 
             paste0("www/data/", nomEnq,"/pop0_prop/data/dataSect.csv"), 
             row.names = FALSE)   
  
  # 2.c. CONSTRUCTION DES DONNEES POUR la carte de densité - pop0_choro : 
  # Densité estimée de personnes (km2) présentes par secteur et par heure
  
  dir.create(paste0("www/data/", nomEnq,"/pop0_choro"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_choro/data"))
  dir.create(paste0("www/data/", nomEnq,"/pop0_choro/geo"))
  
  ## Calcul de la densité de population par secteur et par heure
  ### joindre la variable 'AREA' de la couche des secteurs à la table de présence
  options(scipen = 999)
  prez_Var_Sec_popT <- prez_Var_Sec_popT %>% 
    left_join(., select(sfSec, CODE_SEC = Secteur_EM, AREA)) %>% 
    select(-geometry) %>% 
    mutate(AREA_KM = AREA/1e6,
           dens = popSec/AREA_KM)
  
  ## export vers méta
  write.csv2(prez_Var_Sec_popT, 
             paste0("02_PREPA_DATA/meta/indicateurs/",nomEnq,"/POP/Data_DENS_Pond.csv"), 
             row.names = FALSE)
  
  ## Préparation de la table à joindre au shp geojson
  dataShpChoro <- prez_Var_Sec_popT %>% 
    select(variable, CODE_SEC, dens) %>% 
    pivot_wider(names_from = variable, values_from = dens, names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC)
  dataShpChoro <- dataShpChoro[ , c(1, 20:25, 2:24)]
  dataShpChoro <- dataShpChoro[ , 1:25]
  
  ## Jointure avec le fichier shp
  shpSectDataChoro <- left_join(sfSec, dataShpChoro, by = "Secteur_EM")
  
  ### Export
  geojson_write(shpSectDataChoro,
                file = paste0("www/data/", nomEnq,"/pop0_choro/geo/secteursData.geojson"))
   
  ## Calcul des valeurs min et max (pour la table du graphique simple)
  vMinP <- 1000000 # init
  vMaxP <- 0 # init
  
  vMinP <- apply(dataShpChoro[ , 2:length(dataShpChoro)], MARGIN = 2, function(x){
    if(min(x) < vMinP){
      vMinP <-  min(x)
    }
  })
  vMinP <- min(vMinP) # valeur min en stocks
  
  vMaxP <- apply(dataShpChoro[ , 2:length(dataShpChoro)], MARGIN = 2, function(x){
    if(max(x) > vMaxP){
      vMaxP <-  max(x)
    }
  })
  vMaxP <- max(vMaxP) # valeur max en stocks
  
  dfMinMaxP <- data.frame("min" = numeric(nrow(dataShpChoro)),
                          "max" = numeric(nrow(dataShpChoro)))
  
  dfMinMaxP$min <- vMinP
  dfMinMaxP$max <- vMaxP
  dfMinMaxP <- as.data.frame(t(dfMinMaxP))
  dfMinMaxP <- setDT(dfMinMaxP, keep.rownames = TRUE)[]
  
  ## Préparation de la table pour le graphique simple (dataSect)
  dataSectChoro <- as.data.frame(t(dataShpChoro))
  names(dataSectChoro) <- as.matrix(dataSectChoro[1, ])
  dataSectChoro <-  dataSectChoro[-1, ]
  dataSectChoro <- rownames_to_column(dataSectChoro, "hour")
  dataSectChoro$hour <- gsub(".*h",'',dataSectChoro$hour)
  dataSectChoro$hour <- ifelse(as.numeric(dataSectChoro$hour) <= 12, paste0(dataSectChoro$hour, 'am'),
                              ifelse(as.numeric(dataSectChoro$hour) >= 24, paste0((as.numeric(dataSectChoro$hour) - 24), 'am'),
                                     paste0((as.numeric(dataSectChoro$hour) - 12), 'pm')))
  dataSectChoro$hour[dataSectChoro$hour == "0am"] <- "12pm"
  dataSectChoro <- rbindlist(list(dataSectChoro, dfMinMaxP))
  dataSectChoro <- rbind(slice(dataSectChoro, 25:26), slice(dataSectChoro, 1:24))
  
  ### Export
  write.csv2(dataSectChoro, 
             paste0("www/data/", nomEnq,"/pop0_choro/data/dataSect.csv"), 
             row.names = FALSE)   
  

}

##---- 3. Création des tables pour le dossier "indicateurs" et la fonction "createFiles" ----

### Création de la table en % à partir de la table en stock
calculPart <- function(dataStock){
  data.frame(dataStock[ , 1:3], apply(dataStock[ , 4:length(dataStock)], MARGIN = 2, 
                              FUN = function(x){(x * 100) / dataStock$popSec}))
}

###----~ 3a. Indicateur 'Sex' 
prepSex <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(SEX) >= 1], na.rm = TRUE),
              sex1 = sum(W_IND[as.numeric(SEX) == 1], na.rm = TRUE),
              sex2 = sum(W_IND[as.numeric(SEX) == 2], na.rm = TRUE))
  
  
  ## CONTROLE DES EFFECTIFS BRUTS
  ## Construction de la table de présence par secteur et par heure NON PONDEREE 
  ## pour vérification des effectifs bruts (population présente)
  prez_Var_Sec_B <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(as.numeric(SEX) >= 1, na.rm = TRUE),
              sex1 = sum(as.numeric(SEX) == 1, na.rm=TRUE),
              sex2 = sum(as.numeric(SEX) == 2, na.rm=TRUE))
  
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>%
    summarise(popsec = sum(W_IND[as.numeric(SEX) >= 1], na.rm = TRUE),
              sex1 = sum(W_IND[as.numeric(SEX) == 1], na.rm = TRUE),
              sex2 = sum(W_IND[as.numeric(SEX) == 2], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
  
}

###----~ 3b. Indicateur 'Age groups' 
prepAge <- function(nomEnq, prez_long){
  
  result <-  list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(KAGE) >= 1], na.rm = TRUE),
              age1 = sum(W_IND[as.numeric(KAGE) == 1], na.rm = TRUE),
              age2 = sum(W_IND[as.numeric(KAGE) == 2], na.rm = TRUE),
              age3 = sum(W_IND[as.numeric(KAGE) == 3], na.rm = TRUE),
              age4 = sum(W_IND[as.numeric(KAGE) == 4], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(KAGE) >= 1], na.rm = TRUE),
              age1 = sum(W_IND[as.numeric(KAGE) == 1], na.rm = TRUE),
              age2 = sum(W_IND[as.numeric(KAGE) == 2], na.rm = TRUE),
              age3 = sum(W_IND[as.numeric(KAGE) == 3], na.rm = TRUE),
              age4 = sum(W_IND[as.numeric(KAGE) == 4], na.rm = TRUE))
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3c. Indicateur 'Educational level' (au niveau des individus) 
prepEduc <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(EDUC) >= 1], na.rm = TRUE),
              cleduc1 = sum(W_IND[as.numeric(EDUC) == 1], na.rm = TRUE),
              cleduc2 = sum(W_IND[as.numeric(EDUC) == 2], na.rm = TRUE),
              cleduc3 = sum(W_IND[as.numeric(EDUC) == 3], na.rm = TRUE),
              cleduc4 = sum(W_IND[as.numeric(EDUC) == 4], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)

  
  ## Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>%
    summarise(popsec = sum(W_IND[as.numeric(EDUC) >= 1], na.rm = TRUE),
              cleduc1 = sum(W_IND[as.numeric(EDUC) == 1], na.rm = TRUE),
              cleduc2 = sum(W_IND[as.numeric(EDUC) == 2], na.rm = TRUE),
              cleduc3 = sum(W_IND[as.numeric(EDUC) == 3], na.rm = TRUE),
              cleduc4 = sum(W_IND[as.numeric(EDUC) == 4], na.rm = TRUE))
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3d. Indicateur 'Educational level' (au niveau des ménages) 
prepEducmen <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(EDUCMEN) >= 1], na.rm = TRUE),
              educmen1 = sum(W_IND[as.numeric(EDUCMEN) == 1], na.rm = TRUE),
              educmen2 = sum(W_IND[as.numeric(EDUCMEN) == 2], na.rm = TRUE),
              educmen3 = sum(W_IND[as.numeric(EDUCMEN) == 3], na.rm = TRUE),
              educmen4 = sum(W_IND[as.numeric(EDUCMEN) == 4], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(EDUCMEN) >= 1], na.rm = TRUE),
              educmen1 = sum(W_IND[as.numeric(EDUCMEN) == 1], na.rm = TRUE),
              educmen2 = sum(W_IND[as.numeric(EDUCMEN) == 2], na.rm = TRUE),
              educmen3 = sum(W_IND[as.numeric(EDUCMEN) == 3], na.rm = TRUE),
              educmen4 = sum(W_IND[as.numeric(EDUCMEN) == 4], na.rm = TRUE))
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3e. Indicateur 'Household income' 
prepRev <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(REV) >= 1], na.rm = TRUE),
              rev1 = sum(W_IND[as.numeric(REV) == 1], na.rm = TRUE),
              rev2 = sum(W_IND[as.numeric(REV) == 2], na.rm = TRUE),
              rev3 = sum(W_IND[as.numeric(REV) == 3], na.rm = TRUE),
              rev4 = sum(W_IND[as.numeric(REV) == 4], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC & REV != '') %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(REV) >= 1], na.rm = TRUE),
              rev1 = sum(W_IND[as.numeric(REV) == 1], na.rm = TRUE),
              rev2 = sum(W_IND[as.numeric(REV) == 2], na.rm = TRUE),
              rev3 = sum(W_IND[as.numeric(REV) == 3], na.rm = TRUE),
              rev4 = sum(W_IND[as.numeric(REV) == 4], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3f. Indicateur 'Socioprofessional status' (au niveau des individus) 
prepCsp <- function(nomEnq, prez_long){
  
  result <- list()
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(CSP) >= 1], na.rm = TRUE),
              cs1 = sum(W_IND[as.numeric(CSP) == 1], na.rm = TRUE),
              cs2 = sum(W_IND[as.numeric(CSP) == 2], na.rm = TRUE),
              cs3 = sum(W_IND[as.numeric(CSP) == 3], na.rm = TRUE),
              cs4 = sum(W_IND[as.numeric(CSP) == 4], na.rm = TRUE),
              cs5 = sum(W_IND[as.numeric(CSP) == 5], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(CSP) >= 1], na.rm = TRUE),
              cs1 = sum(W_IND[as.numeric(CSP) == 1], na.rm = TRUE),
              cs2 = sum(W_IND[as.numeric(CSP) == 2], na.rm = TRUE),
              cs3 = sum(W_IND[as.numeric(CSP) == 3], na.rm = TRUE),
              cs4 = sum(W_IND[as.numeric(CSP) == 4], na.rm = TRUE),
              cs5 = sum(W_IND[as.numeric(CSP) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3g. Indicateur 'Socioprofessional status' (au niveau des ménages) 
prepCspmen <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(CSPMEN) >= 1], na.rm = TRUE),
              cspmen1 = sum(W_IND[as.numeric(CSPMEN) == 1], na.rm = TRUE),
              cspmen2 = sum(W_IND[as.numeric(CSPMEN) == 2], na.rm = TRUE),
              cspmen3 = sum(W_IND[as.numeric(CSPMEN) == 3], na.rm = TRUE),
              cspmen4 = sum(W_IND[as.numeric(CSPMEN) == 4], na.rm = TRUE),
              cspmen5 = sum(W_IND[as.numeric(CSPMEN) == 5], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>%
    summarise(popsec = sum(W_IND[as.numeric(CSPMEN) >= 1], na.rm = TRUE),
              cspmen1 = sum(W_IND[as.numeric(CSPMEN) == 1], na.rm = TRUE),
              cspmen2 = sum(W_IND[as.numeric(CSPMEN) == 2], na.rm = TRUE),
              cspmen3 = sum(W_IND[as.numeric(CSPMEN) == 3], na.rm = TRUE),
              cspmen4 = sum(W_IND[as.numeric(CSPMEN) == 4], na.rm = TRUE),
              cspmen5 = sum(W_IND[as.numeric(CSPMEN) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3h. Indicateur 'Occupational status 
prepOcc <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(OCC) >= 1], na.rm = TRUE),
              occ1 = sum(W_IND[as.numeric(OCC) == 1], na.rm = TRUE),
              occ2 = sum(W_IND[as.numeric(OCC) == 2], na.rm = TRUE),
              occ3 = sum(W_IND[as.numeric(OCC) == 3], na.rm = TRUE),
              occ4 = sum(W_IND[as.numeric(OCC) == 4], na.rm = TRUE),
              occ5 = sum(W_IND[as.numeric(OCC) == 5], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(OCC) >= 1], na.rm = TRUE),
              occ1 = sum(W_IND[as.numeric(OCC) == 1], na.rm = TRUE),
              occ2 = sum(W_IND[as.numeric(OCC) == 2], na.rm = TRUE),
              occ3 = sum(W_IND[as.numeric(OCC) == 3], na.rm = TRUE),
              occ4 = sum(W_IND[as.numeric(OCC) == 4], na.rm = TRUE),
              occ5 = sum(W_IND[as.numeric(OCC) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3i. Indicateur 'Residential departement' 
prepDep <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(DEP) >= 1], na.rm = TRUE),
              dep1 = sum(W_IND[as.numeric(DEP) == 1], na.rm = TRUE),
              dep2 = sum(W_IND[as.numeric(DEP) == 2], na.rm = TRUE),
              dep3 = sum(W_IND[as.numeric(DEP) == 3], na.rm = TRUE),
              dep4 = sum(W_IND[as.numeric(DEP) == 4], na.rm = TRUE),
              dep5 = sum(W_IND[as.numeric(DEP) == 5], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(DEP) >= 1], na.rm = TRUE),
              dep1 = sum(W_IND[as.numeric(DEP) == 1], na.rm = TRUE),
              dep2 = sum(W_IND[as.numeric(DEP) == 2], na.rm = TRUE),
              dep3 = sum(W_IND[as.numeric(DEP) == 3], na.rm = TRUE),
              dep4 = sum(W_IND[as.numeric(DEP) == 4], na.rm = TRUE),
              dep5 = sum(W_IND[as.numeric(DEP) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3j. Indicateur 'Residential rings' 
prepZone <- function(nomEnq, prez_long){

  result <- list()


  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>%
    group_by(variable, CODE_SEC) %>%
    summarise(popSec = sum(W_IND[ZONAGE >= 1], na.rm = TRUE),
              resarea1 = sum(W_IND[ZONAGE == 1], na.rm = TRUE),
              resarea2 = sum(W_IND[ZONAGE == 2], na.rm = TRUE),
              resarea3 = sum(W_IND[ZONAGE == 3], na.rm = TRUE))


  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)


  ## Construction de la table de présence par secteur et par heure :
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>%
    filter(CODE_SEC != RES_SEC) %>%
    group_by(variable, CODE_SEC) %>%
    summarise(popSec = sum(W_IND[ZONAGE >= 1], na.rm = TRUE),
              resarea1 = sum(W_IND[ZONAGE == 1], na.rm = TRUE),
              resarea2 = sum(W_IND[ZONAGE == 2], na.rm = TRUE),
              resarea3 = sum(W_IND[ZONAGE == 3], na.rm = TRUE))


  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)

}

prepZone_2mod <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[ZONAGE >= 1], na.rm = TRUE),
              resarea1 = sum(W_IND[ZONAGE == 1], na.rm = TRUE),
              resarea2 = sum(W_IND[ZONAGE == 2], na.rm = TRUE))  
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[ZONAGE >= 1], na.rm = TRUE),
              resarea1 = sum(W_IND[ZONAGE == 1], na.rm = TRUE),
              resarea2 = sum(W_IND[ZONAGE == 2], na.rm = TRUE))  
 
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3k. Indicateur 'Activity' 
prepAct <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(MOTIF) >= 1], na.rm = TRUE),
              act1 = sum(W_IND[as.numeric(MOTIF) == 1], na.rm = TRUE),
              act2 = sum(W_IND[as.numeric(MOTIF) == 2], na.rm = TRUE),
              act3 = sum(W_IND[as.numeric(MOTIF) == 3], na.rm = TRUE),
              act4 = sum(W_IND[as.numeric(MOTIF) == 4], na.rm = TRUE),
              act5 = sum(W_IND[as.numeric(MOTIF) == 5], na.rm = TRUE))
  
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(MOTIF) >= 1], na.rm = TRUE),
              act1 = sum(W_IND[as.numeric(MOTIF) == 1], na.rm = TRUE),
              act2 = sum(W_IND[as.numeric(MOTIF) == 2], na.rm = TRUE),
              act3 = sum(W_IND[as.numeric(MOTIF) == 3], na.rm = TRUE),
              act4 = sum(W_IND[as.numeric(MOTIF) == 4], na.rm = TRUE),
              act5 = sum(W_IND[as.numeric(MOTIF) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}
 
###----~ 3l. Indicateur 'Travel mode' 
prepMode <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(MODE_ARR) >= 1], na.rm = TRUE),
              mode1 = sum(W_IND[as.numeric(MODE_ARR) == 1], na.rm = TRUE),
              mode2 = sum(W_IND[as.numeric(MODE_ARR) == 2], na.rm = TRUE),
              mode3 = sum(W_IND[as.numeric(MODE_ARR) == 3], na.rm = TRUE))
  
  
  ## Construction de la table de <-  présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(MODE_ARR) >= 1], na.rm = TRUE),
              mode1 = sum(W_IND[as.numeric(MODE_ARR) == 1], na.rm = TRUE),
              mode2 = sum(W_IND[as.numeric(MODE_ARR) == 2], na.rm = TRUE),
              mode3 = sum(W_IND[as.numeric(MODE_ARR) == 3], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

###----~ 3m. Indicateur 'QPV' 
prepQpv <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(QPV) >= 1], na.rm = TRUE),
              qpv1 = sum(W_IND[as.numeric(QPV) == 1], na.rm = TRUE),
              qpv2 = sum(W_IND[as.numeric(QPV) == 2], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(variable, CODE_SEC) %>%
    summarise(popsec = sum(W_IND[as.numeric(QPV) >= 1], na.rm = TRUE),
              qpv1 = sum(W_IND[as.numeric(QPV) == 1], na.rm = TRUE),
              qpv2 = sum(W_IND[as.numeric(QPV) == 2], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
  
}

###----~ 3n. Indicateur 'RES' 
prepRes <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>%
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND, na.rm = TRUE),
              res1 = sum(W_IND[CODE_SEC != RES_SEC], na.rm = TRUE),
              res2 = sum(W_IND[CODE_SEC == RES_SEC], na.rm = TRUE))
              
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  return(result)
  
  
}

###----~ 3o. Indicateur 'Household income' - CANADA
prepRev_can <- function(nomEnq, prez_long){
  
  result <- list()
  
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  pvs <- prez_long %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popSec = sum(W_IND[as.numeric(REV) > 0], na.rm = TRUE),
              rev1 = sum(W_IND[as.numeric(REV) == 1], na.rm = TRUE),
              rev2 = sum(W_IND[as.numeric(REV) == 2], na.rm = TRUE),
              rev3 = sum(W_IND[as.numeric(REV) == 3], na.rm = TRUE),
              rev4 = sum(W_IND[as.numeric(REV) == 4], na.rm = TRUE),
              rev5 = sum(W_IND[as.numeric(REV) == 5], na.rm = TRUE))
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC & REV != '') %>% 
    group_by(variable, CODE_SEC) %>% 
    summarise(popsec = sum(W_IND[as.numeric(REV) > 0], na.rm = TRUE),
              rev1 = sum(W_IND[as.numeric(REV) == 1], na.rm = TRUE),
              rev2 = sum(W_IND[as.numeric(REV) == 2], na.rm = TRUE),
              rev3 = sum(W_IND[as.numeric(REV) == 3], na.rm = TRUE),
              rev4 = sum(W_IND[as.numeric(REV) == 4], na.rm = TRUE),
              rev5 = sum(W_IND[as.numeric(REV) == 5], na.rm = TRUE))
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  return(result)
  
}

##---- 4. Création des fichiers pour les cartes et le graphique "simple" ----
createFiles <- function(nbMod, indicateur, nomIndic, nomEnq, data, prez_long, sfSec){
  
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  if(nomIndic != "res"){
    pvs3 <- data[["pvs3"]]
  }
  
  
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
  
  dfMinMaxS <- data.frame("min" = numeric(length(unique(prez_long$CODE_SEC))), 
                          "max" = numeric(length(unique(prez_long$CODE_SEC)))) 
  
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
  
  dfMinMaxP <- data.frame("min" = numeric(length(unique(prez_long$CODE_SEC))), 
                          "max" = numeric(length(unique(prez_long$CODE_SEC)))) 
  
  dfMinMaxP$min <- vMinP
  dfMinMaxP$max <- vMaxP
  dfMinMaxP <- as.data.frame(t(dfMinMaxP))
  dfMinMaxP <- setDT(dfMinMaxP, keep.rownames = TRUE)[]
  
  ## Carte en oursins
  if(nomIndic != "res"){
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
    
    dfMinMaxF <- data.frame("min" = numeric(length(unique(prez_long$CODE_SEC))), 
                            "max" = numeric(length(unique(prez_long$CODE_SEC)))) 
    
    dfMinMaxF$min <- vMinF
    dfMinMaxF$max <- vMaxF
    dfMinMaxF <- as.data.frame(t(dfMinMaxF))
    dfMinMaxF <- setDT(dfMinMaxF, keep.rownames = TRUE)[]
  }
  
  
  for(i in 1:nbMod){
    
    indic <- colnames(pvs)[3 + i]
    indic2 <- colnames(pvs2)[3 + i]
    
    # Préparation du tableau de données à joindre au shape
    ## data shape stock
    dataShpProp <- pvs %>% 
      select(variable, CODE_SEC, indic) %>%
      pivot_wider(names_from = variable, values_from = indic, names_prefix = paste0(indic, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Reorder
    dataShpProp <- dataShpProp[ , c(1, 20:25, 2:24)]
    dataShpProp <- dataShpProp[ , 1:25]

    ## data shape part
    dataShpChoro <- pvs2 %>% 
      select(variable, CODE_SEC, indic2) %>%
      pivot_wider(names_from = variable, values_from = indic2, names_prefix = paste0(indic2, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Reorder
    dataShpChoro <- dataShpChoro[ , c(1, 20:25, 2:24)]
    dataShpChoro <- dataShpChoro[ , 1:25]
    
    ## Création des données pour les cartes en oursins
    if(nomIndic != "res"){
      ### Flowdata 
      flowdata <- prez_long %>% 
        filter(as.numeric(indicateur) == i) %>% 
        select(ID_IND, W_IND, variable, CODE_SEC, RES_SEC) %>%
        group_by(variable, CODE_SEC, RES_SEC) %>% 
        summarise(W_IND = sum(W_IND),
                  n = length(ID_IND)) %>% 
        filter(CODE_SEC != RES_SEC & n  >= 6) %>% 
        select(-n)
      
      ### Préparation des données pour les oursins
      flowdatasmp <- prez_long %>% 
        filter(as.numeric(indicateur) == i) %>% 
        select(ID_IND, variable, CODE_SEC, RES_SEC, W_IND) %>% 
        group_by(variable, CODE_SEC)
      
      
      ### Calcul de la population pondérée par secteur et par heure 
      ### (sans seuil à 12 personnes/secteur en non pondéré)
      flowdatasmpT <- flowdatasmp %>% 
        summarise(W_IND = sum(W_IND))
      
      ### Calcul de la population pondérée non résidente par secteur et par heure
      flowdatasmpNR <-  filter(flowdatasmp, CODE_SEC != RES_SEC) 
      flowdatasmpNR <- summarise(flowdatasmpNR, W_IND = sum(W_IND)) 
      
      ## Population pondérée par secteur et par heure totale (x) et non résidente (y)
      flowdatasmp <- left_join(flowdatasmpT, flowdatasmpNR, by = c("variable","CODE_SEC"))
      flowdatasmp <-  right_join(flowdatasmp, select(pvs3, variable, CODE_SEC), by = c("variable", "CODE_SEC")) # add empty sect
      flowdatasmp[is.na(flowdatasmp)] <- 0
      
      ### Wide
      flowdatasmp <- flowdatasmp %>% 
        select(variable, CODE_SEC, W_IND.y) %>% 
        pivot_wider(names_from = variable, values_from = W_IND.y, names_prefix = paste0(indic, "_")) %>% 
        rename(Secteur_EM = CODE_SEC)
      flowdatasmp <- flowdatasmp[ , c(1, 23:25, 13:15, 2:12, 16:22)]
      
      # Jointure des données aux fonds de carte
      shpSectDataFlow <- left_join(sfSec, flowdatasmp, by = "Secteur_EM")
      
      # Création des répertoires
      ## Répertoires parents (2 par indicateur)
      dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow"))
      
      ## Répertoires enfants (2 par répertoire parent)
      dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo"))
      dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow/data"))
      
      # Export des données spatiales
      geojson_write(shpSectDataFlow,
                    file = paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/secteursData.geojson"))
      write.table(flowdata,
                  paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow/geo/flowData.csv"),
                  row.names = FALSE, sep = ",", dec = ".")
    }
    

    # Jointure des données aux fonds de carte
    shpSectDataProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
    shpSectDataChoro <- left_join(sfSec, dataShpChoro, by = "Secteur_EM")
    
    
    # Création des répertoires
    ## Répertoires parents (2 par indicateur)
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_prop"))
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_choro"))
    
    
    ## Répertoires enfants (2 par répertoire parent)
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo"))
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo"))
    
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_prop/data"))
    dir.create(paste0("www/data/", nomEnq, "/", nomIndic, i ,"_choro/data"))
    
    
    # Export des données spatiales
    # écriture avec geojson_write -> fichier moins lourd
    geojson_write(shpSectDataProp,
                  file = paste0("www/data/", nomEnq, "/", nomIndic, i ,"_prop/geo/secteursData.geojson"))
    geojson_write(shpSectDataChoro,
                  file = paste0("www/data/", nomEnq, "/", nomIndic, i ,"_choro/geo/secteursData.geojson"))
    

    
    # Création des tables pour le graphique simple
    ## STOCK
    dataSectProp <- as.data.frame(t(dataShpProp))
    names(dataSectProp) <- as.matrix(dataSectProp[1, ])
    dataSectProp <-  dataSectProp[-1, ]
    dataSectProp <- rownames_to_column(dataSectProp, "hour")
    dataSectProp$hour <- gsub(".*h",'',dataSectProp$hour)
    dataSectProp$hour <- ifelse(as.numeric(dataSectProp$hour) <= 12, paste0(dataSectProp$hour, 'am'), 
                                ifelse(as.numeric(dataSectProp$hour) >= 24, paste0((as.numeric(dataSectProp$hour) - 24), 'am'),
                                       paste0((as.numeric(dataSectProp$hour) - 12), 'pm')))
    dataSectProp$hour[dataSectProp$hour == "0am"] <- "12pm"
    # dataSectProp <- rbind(slice(dataSectProp, 19:24), slice(dataSectProp, 1:18))
    dataSectProp <- rbindlist(list(dataSectProp, dfMinMaxS))
    dataSectProp <- rbind(slice(dataSectProp, 25:26), slice(dataSectProp, 1:24))
    
    ## PART
    dataSectChoro <- as.data.frame(t(dataShpChoro))
    names(dataSectChoro) <- as.matrix(dataSectChoro[1, ])
    dataSectChoro <- dataSectChoro[-1, ]
    dataSectChoro <- rownames_to_column(dataSectChoro, "hour")
    dataSectChoro$hour <- gsub(".*h",'',dataSectChoro$hour)
    dataSectChoro$hour <- ifelse(as.numeric(dataSectChoro$hour) <= 12, paste0(dataSectChoro$hour, 'am'), 
                                 ifelse(as.numeric(dataSectChoro$hour) >= 24, paste0((as.numeric(dataSectChoro$hour) - 24), 'am'),
                                        paste0((as.numeric(dataSectChoro$hour) - 12), 'pm')))
    dataSectChoro$hour[dataSectChoro$hour == "0am"] <- "12pm"
    # dataSectChoro <- rbind(slice(dataSectChoro, 19:24), slice(dataSectChoro, 1:18))
    dataSectChoro <- rbindlist(list(dataSectChoro, dfMinMaxP))
    dataSectChoro <- rbind(slice(dataSectChoro, 25:26), slice(dataSectChoro, 1:24))

    ## Oursins
    if(nomIndic != "res"){
      dataSectFlow <- as.data.frame(t(flowdatasmp))
      names(dataSectFlow) <- as.matrix(dataSectFlow[1,])
      dataSectFlow <-  dataSectFlow[-1, ]
      dataSectFlow <- rownames_to_column(dataSectFlow, "hour")
      dataSectFlow$hour <- gsub(".*h",'',dataSectFlow$hour)
      dataSectFlow$hour <- ifelse(as.numeric(dataSectFlow$hour) <= 12, paste0(dataSectFlow$hour, 'am'), 
                                  ifelse(as.numeric(dataSectFlow$hour) >= 24, paste0((as.numeric(dataSectFlow$hour) - 24), 'am'),
                                         paste0((as.numeric(dataSectFlow$hour) - 12), 'pm')))
      dataSectFlow$hour[dataSectFlow$hour == "0am"] <- "12pm"
      dfh <- data.frame(hour = c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")) # au cas o? il  a des heures manquantes (cf shopping)
      dataSectFlow <- left_join(dfh, dataSectFlow, by = "hour")
      
      # dataSectFlow <- rbind(slice(dataSectFlow, 19:24), slice(dataSectFlow, 1:18))
      dfMinMaxF2 <- dfMinMaxF[,1:length(dataSectFlow)]
      dataSectFlow <- rbindlist(list(dataSectFlow, dfMinMaxF2))
      dataSectFlow <- rbind(slice(dataSectFlow, 25:26), slice(dataSectFlow, 1:24))
      # dataSectFlow <- rbind(slice(dataSectFlow, 1:2), slice(dataSectFlow, 9:26), slice(dataSectFlow, 3:8))
      dataSectFlow[is.na(dataSectFlow)] <- 0
      
      # Export des données
      write.csv2(dataSectFlow, 
                 paste0("www/data/", nomEnq, "/", nomIndic, i ,"_flow/data/dataSect.csv"), 
                 row.names = FALSE)
    }
    
    
    # Export des données
    write.csv2(dataSectProp, 
               paste0("www/data/", nomEnq, "/", nomIndic, i ,"_prop/data/dataSect.csv"), 
               row.names = FALSE)
    write.csv2(dataSectChoro, 
               paste0("www/data/", nomEnq, "/", nomIndic, i ,"_choro/data/dataSect.csv"), 
               row.names = FALSE)
    
  }
  
}  

##---- 5. Création des indices de ségrégation ----
createISeg <- function(nbMod, nomIndic, nomEnq, data, ctry, sfSec){
  
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  
  # DUNCAN
  ## Mise en forme du tableau de base
  tabISeg <- pvs 
  listHour <- unique(tabISeg$variable)
  duncan <- data.frame("hour" = character(24))
  
  for (i in listHour){
    
    duncan <- bind_rows(duncan, as.data.frame(t(ISDuncan(tabISeg[tabISeg$variable == i , 4:length(tabISeg)]))))
    
  }
  
  ## Ajout des heures
  duncan$hour <- listHour
  duncan$hour <- gsub(".*h",'',duncan$hour)
  duncan$hour <- ifelse(as.numeric(duncan$hour) <= 12, paste0(duncan$hour, 'am'), 
                        ifelse(as.numeric(duncan$hour) >= 24, paste0((as.numeric(duncan$hour) - 24), 'am'),
                               paste0((as.numeric(duncan$hour) - 12), 'pm')))
  duncan$hour[duncan$hour == "0am"] <- "12pm"
  
  ## suppression des lignes vides et reorder
  duncan <- filter(duncan[c(43:48,25:42), ]) 
  
  ## Correction si na (à valider)
  duncan[is.na(duncan)] <- 0
  
  ## Correction des noms de variable
  colnames(duncan)[2:length(duncan)] <- colnames(tabISeg[ , 4:length(tabISeg)])
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    duncan <- duncan %>% relocate(c("hour", "rev5"))
  }
  
  
  # MORAN
  if (ctry == "FR") {
    if (!nomEnq %in% c("LA REUNION", "MARTINIQUE")) {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2154)
    }
    if (nomEnq == "LA REUNION") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2975)
    }
    if (nomEnq == "MARTINIQUE") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 5490)
    }
  }
  
  if (ctry == "CA") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 3978)
  }

  
  ## Création d'un tableau vide
  moran <- data.frame("hour" = '', "var" = '', "moran" = numeric(24))
  
  for (i in listHour){
    
    # Trier les données
    dataMoran <- filter(pvs2 %>% select(-popSec), variable == i)
    dataMoran <- dataMoran %>%
      rename(Secteur_EM = CODE_SEC)
    
    # Joindre avec le shp
    dataMoran <- left_join(shpSectMoran, dataMoran, by = "Secteur_EM")
    
    # Calcul des paramètres
    nbSecteurs <- poly2nb(pl = dataMoran,
                          row.names = dataMoran$Secteur_EM,
                          snap = 50,
                          queen = TRUE)
    
    dataMoran <- dataMoran %>%
      st_drop_geometry()
    
    # Calcul de l'indice de Moran
    for (j in colnames(dataMoran[ , 13:length(dataMoran)])){

      Moran <- moran.mc(x = dataMoran[[j]],
                        listw = nb2listw(nbSecteurs), nsim=1000)

      moran <- rbind(moran, data.frame("hour" = i,
                                       "var" = j,
                                       "moran" = Moran$statistic,
                                       stringsAsFactors = FALSE))
    }
    
  }
  
  ## Correction si na (à valider)
  moran[is.na(moran)] <- 0
  
  ## Mise en forme
  moran <- filter(moran, hour != '') # suppression des lignes vides
  
  ## mise en forme des heures
  moran$hour <- gsub(".*h",'',moran$hour)
  moran$hour <- ifelse(as.numeric(moran$hour) <= 12, paste0(moran$hour, 'am'), 
                       ifelse(as.numeric(moran$hour) >= 24, paste0((as.numeric(moran$hour) - 24), 'am'),
                              paste0((as.numeric(moran$hour) - 12), 'pm')))
  moran$hour[moran$hour == "0am"] <- "12pm"
  
  ## wide
  moran <- moran %>% 
    pivot_wider(names_from = var, values_from = moran)

  ## reorder
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  moran$hour <- factor( as.character(moran$hour), levels=desired_order )
  moran <- moran[order(moran$hour), ]
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    moran <- moran %>% relocate(c("hour", "rev5"))
  }
  
  
  ## EXPORT 
  write.table(duncan, 
              paste0("www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Duncan.csv"), 
              row.names = FALSE, sep = ',', dec = '.')
  write.table(moran, 
              paste0("www/data/", nomEnq, "/indice_segreg/", nomIndic,"_Moran.csv"), 
              row.names = FALSE, sep = ',', dec = '.')

  
}  



##---- 6. création des graphiques en barres empilées (stacked) ----
createStacked <- function(nbMod, nomIndic, nomEnq, ctry){
  
  # 1. Cartes choro
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste0("dataSect", i, "_choro"),
           read.csv(paste0("www/data/", nomEnq, "/", nomIndic, i, "_choro/data/dataSect.csv"), 
                     sep = ";", dec= ".", stringsAsFactors = FALSE, header = TRUE, check.names = FALSE
                     ))

    listData[[as.character(i)]] <- eval(parse(text = paste0("dataSect", i, "_choro")))
    
  }
  
  listData <- lapply(listData, function(x){
    
    # Filter out min and max
    x <- filter(x, hour != "min" & hour != "max")
    
    # From wide to long
    x <- x %>% pivot_longer(-hour, names_to = "secteur", values_to = "value")

    # Retourne les tableaux
    return(x)
  })
  
  ## On récupère les dataframes
  for (i in 1:nbMod){
    
    assign(paste0("dataSect", i, "_choro"), listData[[as.character(i)]])
    
  }
  
  ## Jointure des dataframes
  tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
  varColNames <- character()
  
  for (i in 1:nbMod){
    varColNames <- c(varColNames, paste0(nomIndic, i))
  }
  
  colnames(tabFin) <- c("district", "hour", varColNames)
  
  ## Sort tableau
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  tabFin$hour <- factor( as.character(tabFin$hour), levels=desired_order)
  tabFin <- tabFin[order(tabFin$hour), ]
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    tabFin <- tabFin %>% relocate(c("hour", "district", "rev5"))
  }
  
  ## Export
  write.table(tabFin, paste0("www/data/", nomEnq, "/stacked/", nomIndic, "_choro_stacked.csv"), 
              row.names = FALSE, sep = ",", dec = ".")
  
  # 2. Cartes Proportionnelles
  
  ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
  listData <- list()
  
  for (i in 1:nbMod){
    
    assign(paste0("dataSect", i, "_prop"),
           read.csv(paste0("www/data/", nomEnq, "/", nomIndic, i, "_prop/data/dataSect.csv"), 
                     sep = ";", dec= ".", stringsAsFactors = FALSE, header = TRUE, check.names = FALSE
                    ))
    
    listData[[as.character(i)]] <- eval(parse(text = paste0("dataSect", i, "_prop")))
    
  }
  
  listData <- lapply(listData, function(x){
    
    # Filter out min and max
    x <- filter(x, hour != "min" & hour != "max")
    
    # From wide to long
    x <- x %>% pivot_longer(-hour, names_to = "secteur", values_to = "value")
    
    # Retourne les tableaux
    return(x)
    
  })
  
  ## On récupère les dataframes
  for (i in 1:nbMod){
    
    assign(paste0("dataSect", i, "_prop"), listData[[as.character(i)]])
    
  }

  ## Jointure des dataframes
  tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
  varColNames <- character()
  
  for (i in 1:nbMod){
    varColNames <- c(varColNames, paste0(nomIndic, i))
  }
  
  colnames(tabFin) <- c("district", "hour", varColNames)
  
  ## Sort tableau
  desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                     "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                     "1am", "2am", "3am")
  tabFin$hour <- factor(as.character(tabFin$hour), levels=desired_order)
  tabFin <- tabFin[order(tabFin$hour), ]
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    tabFin <- tabFin %>% relocate(c("hour", "district", "rev5"))
  }
  
  ## Export
  write.table(tabFin, paste0("www/data/", nomEnq, "/stacked/", nomIndic, "_prop_stacked.csv"), 
              row.names = FALSE, sep = ",", dec = ".")
  
  # 3. Cartes en oursins
  if(nomIndic != "res"){
    
    ## Création d'un tableau pour la construction d'histogrammes en barres empilées (stacked bar chart)
    listData <- list()
    
    for (i in 1:nbMod){
      
      assign(paste0("dataSect", i, "_flow"),
             read.csv(paste0("www/data/", nomEnq, "/", nomIndic, i, "_flow/data/dataSect.csv"), 
                      sep = ";", dec= ".", stringsAsFactors = FALSE, header = TRUE, check.names = FALSE
             ))
      
      listData[[as.character(i)]] <- eval(parse(text = paste0("dataSect", i, "_flow")))
      
    }
    
    listData <- lapply(listData, function(x){
      
      # Filter out min and max
      x <- filter(x, hour != "min" & hour != "max")
      
      # From wide to long
      x <- x %>% pivot_longer(-hour, names_to = "secteur", values_to = "value")
      
      # Retourne les tableaux
      return(x)
      
    })
    
    ## On récupère les dataframes
    for (i in 1:nbMod){
      
      assign(paste0("dataSect", i, "_flow"), listData[[as.character(i)]])
      
    }
    
    ## Jointure des dataframes
    tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
    varColNames <- character()
    
    for (i in 1:nbMod){
      varColNames <- c(varColNames, paste0(nomIndic, i))
    }
    
    colnames(tabFin) <- c("district", "hour", varColNames)
    
    ## Sort tableau
    desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", 
                       "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", 
                       "1am", "2am", "3am")
    tabFin$hour <- factor(as.character(tabFin$hour), levels=desired_order)
    tabFin <- tabFin[order(tabFin$hour), ]
    tabFin[is.na(tabFin)] <- 0 
    
    ## Pour le Canada rev5 en 2eme col
    if(ctry == "CA" & nomIndic == "rev") {
      tabFin <- tabFin %>% relocate(c("hour", "district", "rev5"))
    }
    
    ## Export
    write.table(tabFin, paste0("www/data/", nomEnq, "/stacked/", nomIndic, "_flow_stacked.csv"), 
                row.names = FALSE, sep = ",", dec = ".")
  }
  

}  



#==== ALGO FUNCTION ====

##---- Fonction p2m : de la table de présence aux indicateurs du Mobiliscope ----
p2m <- function(nomEnq){
  
  # Préparer la couche secteur
  ## jointure
  sfSec <- sfSec_all %>% 
    mutate(ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                               TRUE ~ ENQUETE)) %>% 
    filter(ENQUETE == nomEnq) %>% 
    rename(Secteur_EM = CODE_SEC, CENTROID_X = X_W84, CENTROID_Y = Y_W84) 
  
  
  # Sélection des présences autonomes et stationnaires
  prez_long <- prepPrezLong(data = prezTable %>% filter(ENQUETE == as.name(nomEnq)))
  ctry <- unique(prez_long$PAYS)
  
  # Création des répertoires "stacked" et "indice_segreg"
  dir.create(paste0("www/data/", nomEnq))
  dir.create(paste0("www/data/", nomEnq, "/stacked"))
  dir.create(paste0("www/data/", nomEnq, "/indice_segreg"))
  
  # 2. INDICATEUR "WHOLE POPULATION" (et dossier "indicateurs")
  createPopFiles(nomEnq, prez_long, sfSec)
  
  # 3. Préparation des données par indicateur (+ dossier indicateurs) 
  
  ## 3a. SEX 
  nbMod <- length(unique(prez_long$SEX))
  nomIndic <- "sex"
  indicateur <- prez_long$SEX
  
  ## data 
  data <- prepSex(nomEnq, prez_long)
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  
  
  ## 3b. AGE
  nbMod <- length(unique(prez_long$KAGE))
  nomIndic <- "age"
  indicateur <- prez_long$KAGE
  
  ## data 
  data <- prepAge(nomEnq, prez_long)
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  
  
  if(ctry == "FR"){
    
    ## 3c. NiVEAU D'EDUCATION (INDIVIDUEL)
    nbMod <- length(unique(prez_long$EDUC))-1
    nomIndic <- "cleduc"
    indicateur <- prez_long$EDUC
    
    ## data 
    data <- prepEduc(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
    ## 3d. NiVEAU D'EDUCATION (MENAGE) 
    nbMod <- length(unique(prez_long$EDUCMEN))-1
    nomIndic <- "educmen"
    indicateur <- prez_long$EDUCMEN
    
    ## data
    data <- prepEducmen(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
    ## 3f. CSP (INDIVIDUELLE) 
    nbMod <- length(unique(prez_long$CSP))-1
    nomIndic <- "cs"
    indicateur <- prez_long$CSP
    
    ## data
    data <- prepCsp(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
    ## 3g. CSP (MENAGE) 
    nbMod <- length(unique(prez_long$CSPMEN))-1
    nomIndic <- "cspmen"
    indicateur = prez_long$CSPMEN
    
    ## data
    data <- prepCspmen(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
  }
  
  
  ## 3h. STATUT D'OCCUPATION 
  if(!nomEnq %in% c("OTTAWA GATINEAU", "QUEBEC", "SAGUENAY", "SHERBROOKE", "TROIS RIVIERES")){
    nbMod <- length(unique(prez_long$OCC))-1
  }
  if(nomEnq %in% c("OTTAWA GATINEAU", "QUEBEC", "SAGUENAY", "SHERBROOKE", "TROIS RIVIERES")){
    nbMod <- length(unique(prez_long$OCC))
  }
  nomIndic <- "occ"
  indicateur = prez_long$OCC
  
  ## data
  data <- prepOcc(nomEnq, prez_long)
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  
  
  
  
  ## 3j. ZONE DE RESIDENCE (RESIDENTIAL RINGS)
  if(ctry == "FR"){
    
    nbMod <- length(unique(prez_long$ZONAGE))
    nomIndic <- "resarea"
    indicateur <- prez_long$ZONAGE
    
    # data
    if(nbMod == 2){     # "CARCASSONNE", "BESANCON"
      data <- prepZone_2mod(nomEnq, prez_long)
    }else{
      data <- prepZone(nomEnq, prez_long)
    }
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
  }
  
  
  ## 3k. ACTIVITE 
  if(nomEnq != "SHERBROOKE"){
    nbMod <- length(unique(prez_long$MOTIF))-1
  }
  if(nomEnq == "SHERBROOKE"){
    nbMod <- length(unique(prez_long$MOTIF))-2
  }
  nomIndic <- "act"
  indicateur <- prez_long$MOTIF
  
  ## data
  data <- prepAct(nomEnq, prez_long)

  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  
  
  ## 3l. MODE DE TRANSPORT 
  nbMod <- length(unique(prez_long$MODE_ARR))-1
  nomIndic <- "mode"
  indicateur <- prez_long$MODE_ARR
  
  ## data
  data <- prepMode(nomEnq, prez_long)
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
  createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  

  ## 3m. QPV 
  if(ctry == "FR" & nomEnq != "ANNECY"){
    
    nbMod <- length(unique(prez_long$QPV))
    nomIndic <- "qpv"
    indicateur <- prez_long$QPV
    
    ## data
    data <- prepQpv(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq, 
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
  }
  
  
  
  ## 3n. Population résidante
  nbMod <- 2
  nomIndic <- "res"
  indicateur <- NA
  
  ## data
  data <- prepRes(nomEnq, prez_long)
  
  # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
  createFiles(nbMod, indicateur, nomIndic, nomEnq, 
              data, prez_long, sfSec)
  
  # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
  createStacked(nbMod, nomIndic, nomEnq, ctry)
  
  
  # 3e. REVENU (MENAGE) - PARIS
  if(nomEnq == "IDF"){
    
    nbMod <- length(unique(prez_long$REV))-1
    nomIndic <- "rev"
    indicateur <- prez_long$REV
    
    ## data
    data <- prepRev(nomEnq, prez_long)

    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq,
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
    # 3i. ZONE DE RESIDENCE (RESIDENTIAL DEP) - PARIS
    nbMod <- length(unique(prez_long$DEP))
    nomIndic <- "dep"
    indicateur <- prez_long$DEP
    
    ## data
    data <- prepDep(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq,
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)
    
    
  }
  
  
  
  # 3o. REVENU (MENAGE) - CANADA
  if(ctry == "CA"){
    
    nbMod <- length(unique(prez_long$REV))
    nomIndic <- "rev"
    indicateur <- prez_long$REV
    
    ## data
    data <- prepRev_can(nomEnq, prez_long)
    
    # 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
    createFiles(nbMod, indicateur, nomIndic, nomEnq,
                data, prez_long, sfSec)
    
    # 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
    createISeg(nbMod, nomIndic, nomEnq, data, ctry, sfSec)
    
    # 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
    createStacked(nbMod, nomIndic, nomEnq, ctry)

  }
  
  
}

