# ================================================================================#
#                   Construction des tables de présence 
#                                 Fonction
#    Adaptation du script de Guillaume Le Roux (ProgrammationArticleSegreg.R)
# 
# septembre 2018 - AD
# ================================================================================#



# Fonction de création de la table de présence pour les enquêtes comportant entre 9000 et 12000 personnes en déplacement

createPrez <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEP) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Supression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des horaires de leurs déplacements
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- filter(tripTable, H_START>=4 | H_END>=4)
  tripTable <- filter(tripTable, H_START<=28 | H_END<=28)
  ### et ajustement des minutes (min=0) quand h=28 ou h=4 
  tripTable$M_END[tripTable$H_END>=28] <- 0
  tripTable$H_END[tripTable$H_END>=28] <- 28
  tripTable$M_END[tripTable$H_START<4] <- 0
  tripTable$H_END[tripTable$H_START<4] <- 4
  
  ## création des variables HEURE_DEB et HEURE_FIN au format ISO et calcul de la nouvelle variable duree (on garde D9)
  tripTable$HEURE_FIN <- ifelse(tripTable$H_END>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_END-24,tripTable$M_END,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_END,tripTable$M_END,0)) )
  tripTable$HEURE_DEB <- ifelse(tripTable$H_START>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_START-24,tripTable$M_START,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_START,tripTable$M_START,0)) )
  tripTable$duree <- as.numeric(difftime(ymd_hms(tripTable$HEURE_FIN, truncated=3),ymd_hms(tripTable$HEURE_DEB, truncated=3), units= "mins"))
  
  ## création de l'indicateur modadherent : màp, vélo, roller etc. = 1 
  correspModadher <- read_delim("scriptsr/txt/correspondance_MODP_modadherent.csv", ";", escape_double = FALSE, trim_ws = TRUE)
  tripTable <-left_join(x = tripTable, y = correspModadher, by = "MODP")
  
  ## suppression des individus avec des heures manquantes 
  IDhNA <- data.frame(ID_IND = character(length(unique(tripTable$ID_IND[is.na(tripTable$H_START)==FALSE & is.na(tripTable$H_END)==FALSE]))))
  IDhNA$ID_IND <- unique(tripTable$ID_IND[is.na(tripTable$H_START)==FALSE & is.na(tripTable$H_END)==FALSE])
  tripTable <-  merge(x = tripTable, y=IDhNA, by = "ID_IND", all = FALSE)
  tripTable <- arrange(tripTable, ID_IND, H_START,M_START)
  
  ## Ajout de la variable nombre de déplacement/individu (nobs)                        
  tripTable_GRP <- group_by(.data = tripTable, ID_IND)
  nobs <- as.data.frame(dplyr::summarize(tripTable_GRP, nobs = n()))
  tripTable_GRP <- merge(x = tripTable_GRP, y = nobs, by = "ID_IND", all =  TRUE)
  
  
  
  # 2. Construction de la table des présences
  
  ## Initialisation de la table des présences (prezTable)
  prezTable <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), ZONAGE = character (0), stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  VecID1 <- VecID[1:3000]
  VecID2 <- VecID[3001:6000]
  VecID3 <- VecID[6001:9000]
  VecID4 <- VecID[9001:length(VecID)]

  prezTable_1 <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), ZONAGE = character (0), stringsAsFactors = FALSE)
  
  invisible(foreach (ind = VecID1, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character (nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), ZONAGE = character (nobs+1), stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- 1:(nobs+1)
    prez_ind[ , 5] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 6] <- depl_ind$O_ZF[1]
    prez_ind[1, 7] <- depl_ind$O_COG[1]
    prez_ind[1, 8] <- depl_ind$O_SEC[1]
    prez_ind[1, 9] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 10] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 12] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 13] <- 0
    prez_ind[nobs+1, 14] <- 0
    prez_ind[1, 15] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    prez_ind[1, 17] <- depl_ind$ZONAGE_SEC[1]
    
    for (i in 1:nobs){
      prez_ind[i+1, 6] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 7] <- depl_ind$D_COG[i]
      prez_ind[i+1, 8] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 9] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                 as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 10] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$modadherent[i]==1){
        prez_ind[i+1,9] <-as.character.Date(ymd_hms(prez_ind[i+1,9], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i,10] <-  as.character.Date(ymd_hms(prez_ind[i,10], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 12] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 13] <- depl_ind$modadherent[i]
      prez_ind[i, 14] <- depl_ind$modadherent[i]
      prez_ind[i+1, 15] <- depl_ind$MODE[i]
      prez_ind[i, 16] <- depl_ind$MODE[i]
      prez_ind[i+1, 17] <- depl_ind$ZONAGE_SEC[i]
    }
    
    prezTable_1 <-rbind(prezTable_1, prez_ind)
    
  })
  
  
  prezTable_2 <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), ZONAGE = character (0), stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID2, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character (nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), ZONAGE = character (nobs+1), stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- 1:(nobs+1)
    prez_ind[ , 5] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 6] <- depl_ind$O_ZF[1]
    prez_ind[1, 7] <- depl_ind$O_COG[1]
    prez_ind[1, 8] <- depl_ind$O_SEC[1]
    prez_ind[1, 9] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 10] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 12] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 13] <- 0
    prez_ind[nobs+1, 14] <- 0
    prez_ind[1, 15] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    prez_ind[1, 17] <- depl_ind$ZONAGE_SEC[1]
    
    for (i in 1:nobs){
      prez_ind[i+1, 6] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 7] <- depl_ind$D_COG[i]
      prez_ind[i+1, 8] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 9] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                 as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 10] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$modadherent[i]==1){
        prez_ind[i+1,9] <-as.character.Date(ymd_hms(prez_ind[i+1,9], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i,10] <-  as.character.Date(ymd_hms(prez_ind[i,10], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 12] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 13] <- depl_ind$modadherent[i]
      prez_ind[i, 14] <- depl_ind$modadherent[i]
      prez_ind[i+1, 15] <- depl_ind$MODE[i]
      prez_ind[i, 16] <- depl_ind$MODE[i]
      prez_ind[i+1, 17] <- depl_ind$ZONAGE_SEC[i]
    }
    
    prezTable_2 <-rbind(prezTable_2, prez_ind)
    
  })
  
  
  prezTable_3 <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), ZONAGE = character (0), stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID3, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character (nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), ZONAGE = character (nobs+1), stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- 1:(nobs+1)
    prez_ind[ , 5] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 6] <- depl_ind$O_ZF[1]
    prez_ind[1, 7] <- depl_ind$O_COG[1]
    prez_ind[1, 8] <- depl_ind$O_SEC[1]
    prez_ind[1, 9] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 10] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 12] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 13] <- 0
    prez_ind[nobs+1, 14] <- 0
    prez_ind[1, 15] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    prez_ind[1, 17] <- depl_ind$ZONAGE_SEC[1]
    
    for (i in 1:nobs){
      prez_ind[i+1, 6] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 7] <- depl_ind$D_COG[i]
      prez_ind[i+1, 8] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 9] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                 as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 10] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$modadherent[i]==1){
        prez_ind[i+1,9] <-as.character.Date(ymd_hms(prez_ind[i+1,9], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i,10] <-  as.character.Date(ymd_hms(prez_ind[i,10], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 12] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 13] <- depl_ind$modadherent[i]
      prez_ind[i, 14] <- depl_ind$modadherent[i]
      prez_ind[i+1, 15] <- depl_ind$MODE[i]
      prez_ind[i, 16] <- depl_ind$MODE[i]
      prez_ind[i+1, 17] <- depl_ind$ZONAGE_SEC[i]
    }
    
    prezTable_3 <-rbind(prezTable_3, prez_ind)
    
  })
  
  prezTable_4 <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), ZONAGE = character (0), stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID4, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character (nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), ZONAGE = character (nobs+1), stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- 1:(nobs+1)
    prez_ind[ , 5] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 6] <- depl_ind$O_ZF[1]
    prez_ind[1, 7] <- depl_ind$O_COG[1]
    prez_ind[1, 8] <- depl_ind$O_SEC[1]
    prez_ind[1, 9] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 10] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 12] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 13] <- 0
    prez_ind[nobs+1, 14] <- 0
    prez_ind[1, 15] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    prez_ind[1, 17] <- depl_ind$ZONAGE_SEC[1]
    
    for (i in 1:nobs){
      prez_ind[i+1, 6] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 7] <- depl_ind$D_COG[i]
      prez_ind[i+1, 8] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 9] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                 as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 10] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$modadherent[i]==1){
        prez_ind[i+1,9] <-as.character.Date(ymd_hms(prez_ind[i+1,9], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i,10] <-  as.character.Date(ymd_hms(prez_ind[i,10], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 12] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 13] <- depl_ind$modadherent[i]
      prez_ind[i, 14] <- depl_ind$modadherent[i]
      prez_ind[i+1, 15] <- depl_ind$MODE[i]
      prez_ind[i, 16] <- depl_ind$MODE[i]
      prez_ind[i+1, 17] <- depl_ind$ZONAGE_SEC[i]
    }
    
    prezTable_4 <-rbind(prezTable_4, prez_ind)
    
  })
  
  
  prezTable <-rbind(prezTable_1, prezTable_2, prezTable_3, prezTable_4)
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, W_IND, 
                                      CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, ZONAGE = ZONAGE_SEC),
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ID_ORDRE = 1, W_IND = as.numeric(W_IND), CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, ZONAGE)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), LIB_ED = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), CODE_SEC = character(nobs),
                           HEURE_DEB = character(nobs), HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), ZONAGE = character (nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, LIB_ED = tripTable$LIB_ED, ID_ORDRE = 0, 
              W_IND = tripTable$W_IND, CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, ZONAGE = tripTable$ZONAGE_SEC)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$modadherent==0)
  
  ## Compilation des présences, des présences sans déplacements, des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|
                        prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|
                        prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
  ## calcul des durées de présence
  prezTable$DUREE <- as.numeric(difftime(ymd_hms(prezTable$HEURE_FIN, truncated=3),ymd_hms(prezTable$HEURE_DEB, truncated=3), units= "mins"))
  
  ## Calcul des presences à chaque heure
  
  prezTable$h4 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,5,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,5,0,0))))
  prezTable$h5 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,6,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,6,0,0))))
  prezTable$h6 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,7,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,7,0,0))))
  prezTable$h7 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,8,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,8,0,0))))
  prezTable$h8 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,9,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,9,0,0))))
  prezTable$h9 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                               interval(start = as.character.Date(ISOdatetime(2010,1,1,10,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,10,0,0))))
  prezTable$h10 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,11,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,11,0,0))))
  prezTable$h11 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,12,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,12,0,0))))
  prezTable$h12 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,13,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,13,0,0))))
  prezTable$h13 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,14,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,14,0,0))))
  prezTable$h14 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,15,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,15,0,0))))
  prezTable$h15 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,16,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,16,0,0))))
  prezTable$h16 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,17,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,17,0,0))))
  prezTable$h17 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,18,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,18,0,0))))
  prezTable$h18 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,19,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,19,0,0))))
  prezTable$h19 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,20,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,20,0,0))))
  prezTable$h20 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,21,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,21,0,0))))
  prezTable$h21 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,22,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,22,0,0))))
  prezTable$h22 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,1,23,0,0)), end = as.character.Date(ISOdatetime(2010,1,1,23,0,0))))
  prezTable$h23 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,2,0,0,0)), end = as.character.Date(ISOdatetime(2010,1,2,0,0,0))))
  prezTable$h24 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,2,1,0,0)), end = as.character.Date(ISOdatetime(2010,1,2,1,0,0))))
  prezTable$h25 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,2,2,0,0)), end = as.character.Date(ISOdatetime(2010,1,2,2,0,0))))
  prezTable$h26 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,2,3,0,0)), end = as.character.Date(ISOdatetime(2010,1,2,3,0,0))))
  prezTable$h27 <- int_overlaps(interval(ymd_hms(prezTable$HEURE_DEB, truncated=3), ymd_hms(prezTable$HEURE_FIN, truncated=3)),
                                interval(start = as.character.Date(ISOdatetime(2010,1,2,4,0,0)), end = as.character.Date(ISOdatetime(2010,1,2,4,0,0))))
  
  
  # 5. Ajout des données socio-démo de la table personne
  prezTable <- left_join(prezTable, y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC, CSP, RES_SEC, RES_COG), by = "ID_IND")
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable$ID_MEN <- substr(prezTable$ID_IND, 1, 17)
  prezTable$CSP <- as.character(prezTable$CSP)
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  save(prezTable, file = "scriptsr/data/table_presence.RDS")
  
  return(prezTable)
  
}



