# ================================================================================#
#           Fonctions pour la onstruction de la base de données des présences 
#    Adaptation du script de Guillaume Le Roux (ProgrammationArticleSegreg.R)
# 
# juillet 2020 - AD
# ================================================================================#


# ==== FONCTION 1 ====
# 1. Fonction de création de la table de présence pour les enquêtes comportant 
# un max de 10 000 personnes en déplacement

createPrez_10000 <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEQ) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Suppression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des heures de départ
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- tripTable %>% 
    filter(H_START >= 4) %>% 
    filter(H_END >= 4)
  tripTable <- tripTable %>% 
    filter(H_START <= 28) %>% 
    filter(H_END <= 28)
  ### et ajustement des minutes (min=0) quand h=28 ou h=4 
  tripTable$M_END[tripTable$H_END>=28] <- 0
  tripTable$H_END[tripTable$H_END>=28] <- 28
  tripTable$M_END[tripTable$H_START<4] <- 0
  tripTable$H_END[tripTable$H_START<4] <- 4
  
  ## création des variables HEURE_DEB et HEURE_FIN au format ISO et 
  ## calcul de la nouvelle variable 'duree' (on ne garde pas D9)
  tripTable$HEURE_FIN <- ifelse(tripTable$H_END>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_END-24,tripTable$M_END,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_END,tripTable$M_END,0)) )
  tripTable$HEURE_DEB <- ifelse(tripTable$H_START>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_START-24,tripTable$M_START,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_START,tripTable$M_START,0)) )
  tripTable$duree <- as.numeric(difftime(ymd_hms(tripTable$HEURE_FIN, truncated=3),ymd_hms(tripTable$HEURE_DEB, truncated=3), units= "mins"))
  
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
  prezTable <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                          ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                          stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  invisible(foreach (ind = VecID, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable <-rbind(prezTable, prez_ind)
    
  })
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      W_IND, CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, ID_ORDRE = 1, W_IND = as.numeric(W_IND), 
              CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), 
              HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA,
              PAYS)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), 
                           LIB_ED = character(nobs), ENQUETE = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), 
                           CODE_SEC = character(nobs), HEURE_DEB = character(nobs), 
                           HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), PAYS = character(nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, 
              LIB_ED = tripTable$LIB_ED, ENQUETE = tripTable$ENQUETE,
              ID_ORDRE = 0, W_IND = tripTable$W_IND, 
              CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA, MODE_DEP = NA, PAYS = tripTable$PAYS)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$MODE_ADH == 0)
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
  ## calcul des durées de présence
  prezTable$DUREE <- as.numeric(difftime(ymd_hms(prezTable$HEURE_FIN, truncated=3),ymd_hms(prezTable$HEURE_DEB, truncated=3), units= "mins"))
  
  ## Calcul des présences à chaque heure
  
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
  prezTable <- left_join(prezTable, 
                         y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC,
                                    CSP, RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                                    ZONAGE = ZONAGE_SEC, DEP, KREV, REV_UC, REV), 
                         by = "ID_IND")
  
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable <- prezTable %>% 
    mutate(ID_MEN = case_when(ENQUETE == "IDF" ~ substr(ID_IND, 1, 19),
                              PAYS == "FR" & ENQUETE != "IDF" ~ substr(ID_IND, 1, 18),
                              TRUE ~ ID_IND))
  
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), 
                                                  CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  saveRDS(prezTable, file = paste("03_PREPA_DATA/data/bd/03_presence/presence_", libED,".RDS", sep = ''))
  
  return(prezTable)
  
}

# ==== FONCTION 2 ====
# 2. Fonction de création de la table de présence pour les enquêtes comportant 
# entre 10 000 et 20 000 personnes en déplacement

createPrez_20000 <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEQ) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Pour les villes canadiennes, ZF = SEC
  tripTable <- tripTable %>% 
    mutate(O_ZF = case_when(PAYS=="CA" ~ O_SEC),
           D_ZF = case_when(PAYS=="CA" ~ D_SEC))
  
  ## Supression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des heures de départ
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- tripTable %>% 
    filter(H_START >= 4) %>% 
    filter(H_END >= 4)
  tripTable <- tripTable %>% 
    filter(H_START <= 28) %>% 
    filter(H_END <= 28)
  ### et ajustement des minutes (min=0) quand h=28 ou h=4 
  tripTable$M_END[tripTable$H_END>=28] <- 0
  tripTable$H_END[tripTable$H_END>=28] <- 28
  tripTable$M_END[tripTable$H_START<4] <- 0
  tripTable$H_END[tripTable$H_START<4] <- 4
  
  ## création des variables HEURE_DEB et HEURE_FIN au format ISO et 
  ## calcul de la nouvelle variable duree (on ne garde pas D9)
  tripTable$HEURE_FIN <- ifelse(tripTable$H_END>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_END-24,tripTable$M_END,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_END,tripTable$M_END,0)) )
  tripTable$HEURE_DEB <- ifelse(tripTable$H_START>23, as.character.Date(ISOdatetime(2010,1,2,tripTable$H_START-24,tripTable$M_START,0)),
                                as.character.Date(ISOdatetime(2010,1,1,tripTable$H_START,tripTable$M_START,0)) )
  tripTable$duree <- as.numeric(difftime(ymd_hms(tripTable$HEURE_FIN, truncated=3),ymd_hms(tripTable$HEURE_DEB, truncated=3), units= "mins"))
  
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
  prezTable <- data.frame(ID_IND = character (0), ID_ED = character(0), LIB_ED = character(0), 
                          ENQUETE = character (0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                          stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  VecID1 <- VecID[1:10000]
  VecID2 <- VecID[10001:length(VecID)]
  
  prezTable_1 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE)
  
  invisible(foreach (ind = VecID1, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_1 <-rbind(prezTable_1, prez_ind)
    
  })
  
  
  prezTable_2 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character (0), 
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID2, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1),  PAYS = character (nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_2 <-rbind(prezTable_2, prez_ind)
    
  })
  
  prezTable <-rbind(prezTable_1, prezTable_2)
  
  ## Pour les villes canadiennes, ZF redevient NA
  prezTable <- prezTable %>%
    mutate(CODE_ZF = case_when(PAYS=="CA" ~ NA_character_))
  
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      W_IND, CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, ID_ORDRE = 1, W_IND = as.numeric(W_IND), 
              CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), 
              HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, PAYS)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), 
                           LIB_ED = character(nobs), ENQUETE = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), 
                           CODE_SEC = character(nobs), HEURE_DEB = character(nobs), 
                           HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), PAYS = character(nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, 
              LIB_ED = tripTable$LIB_ED, ENQUETE = tripTable$ENQUETE,
              ID_ORDRE = 0, W_IND = tripTable$W_IND, 
              CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA, MODE_DEP = NA, PAYS = tripTable$PAYS)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$MODE_ADH == 0)
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
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
  prezTable <- left_join(prezTable, 
                         y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC,
                                    CSP, RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                                    ZONAGE = ZONAGE_SEC, DEP, KREV, REV_UC, REV), 
                         by = "ID_IND")
  
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable <- prezTable %>% 
    mutate(ID_MEN = case_when(ENQUETE == "IDF" ~ substr(ID_IND, 1, 19),
                              PAYS == "FR" & ENQUETE != "IDF" ~ substr(ID_IND, 1, 18),
                              TRUE ~ ID_IND))
  
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), 
                                                  CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  saveRDS(prezTable, file = paste("03_PREPA_DATA/data/bd/03_presence/presence_", libED,".RDS", sep = ''))
  
  return(prezTable)
  
}


# ==== FONCTION 3 ====
# 3. Fonction de création de la table de présence pour les enquêtes comportant 
# entre 20 000 et 30 000 personnes en déplacement

createPrez_30000 <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEQ) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Supression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des heures de départ
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- tripTable %>% 
    filter(H_START >= 4) %>% 
    filter(H_END >= 4)
  tripTable <- tripTable %>% 
    filter(H_START <= 28) %>% 
    filter(H_END <= 28)
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
  prezTable <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                          ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                          stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  VecID1 <- VecID[1:10000]
  VecID2 <- VecID[10001:20000]
  VecID3 <- VecID[20001:length(VecID)]
  
  prezTable_1 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0),  PAYS = character(0),
                            stringsAsFactors = FALSE)
  
  invisible(foreach (ind = VecID1, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1),  PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_1 <-rbind(prezTable_1, prez_ind)
    
  })
  
  
  prezTable_2 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID2, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_2 <-rbind(prezTable_2, prez_ind)
    
  })
  
  
  prezTable_3 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID3, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_ZF[1] == depl_ind$D_ZF[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_3 <-rbind(prezTable_3, prez_ind)
    
  })
  
  prezTable <-rbind(prezTable_1, prezTable_2, prezTable_3)
  
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      W_IND, CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, ID_ORDRE = 1, W_IND = as.numeric(W_IND), 
              CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), 
              HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, PAYS)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), 
                           LIB_ED = character(nobs), ENQUETE = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), 
                           CODE_SEC = character(nobs), HEURE_DEB = character(nobs), 
                           HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), PAYS = character(nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, 
              LIB_ED = tripTable$LIB_ED, ENQUETE = tripTable$ENQUETE,
              ID_ORDRE = 0, W_IND = tripTable$W_IND, 
              CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA, MODE_DEP = NA, PAYS = tripTable$PAYS)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$MODE_ADH == 0)
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
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
  prezTable <- left_join(prezTable, 
                         y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC,
                                    CSP, RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                                    ZONAGE = ZONAGE_SEC, DEP, KREV, REV_UC, REV), 
                         by = "ID_IND")
  
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable <- prezTable %>% 
    mutate(ID_MEN = case_when(ENQUETE == "IDF" ~ substr(ID_IND, 1, 19),
                              PAYS == "FR" & ENQUETE != "IDF" ~ substr(ID_IND, 1, 18),
                              TRUE ~ ID_IND))
  
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), 
                                                  CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  saveRDS(prezTable, file = paste("03_PREPA_DATA/data/bd/03_presence/presence_", libED,".RDS", sep = ''))
  
  return(prezTable)
  
}



# ==== FONCTION 4 ====
# 4. Fonction de création de la table de présence pour Québec et Ottawa
# Enquêtes comptant environ 45000 personnes en déplacement

## attention aux NA de la variable MODE_ADH pour Ottawa

createPrez_40000 <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEQ) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Supression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des heures de départ
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- tripTable %>% 
    filter(H_START >= 4) %>% 
    filter(H_END >= 4)
  tripTable <- tripTable %>% 
    filter(H_START <= 28) %>% 
    filter(H_END <= 28)
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
  prezTable <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                          ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                          stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  VecID1 <- VecID[1:10000]
  VecID2 <- VecID[10001:20000]
  VecID3 <- VecID[20001:30000]
  VecID4 <- VecID[30001:40000]
  VecID5 <- VecID[40001:length(VecID)]
  
  prezTable_1 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0),  PAYS = character(0),
                            stringsAsFactors = FALSE)
  
  invisible(foreach (ind = VecID1, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1),  PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_1 <-rbind(prezTable_1, prez_ind)
    
  })
  
  
  prezTable_2 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID2, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_2 <-rbind(prezTable_2, prez_ind)
    
  })
  
  
  prezTable_3 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID3, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_3 <-rbind(prezTable_3, prez_ind)
    
  })
  
  prezTable_4 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID4, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_4 <-rbind(prezTable_4, prez_ind)
    
  })
  
  prezTable_5 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID5, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_5 <-rbind(prezTable_5, prez_ind)
    
  })
  
  prezTable <-rbind(prezTable_1, prezTable_2, prezTable_3, prezTable_4, prezTable_5)
  
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      W_IND, CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, ID_ORDRE = 1, W_IND = as.numeric(W_IND), 
              CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), 
              HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, PAYS)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), 
                           LIB_ED = character(nobs), ENQUETE = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), 
                           CODE_SEC = character(nobs), HEURE_DEB = character(nobs), 
                           HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), PAYS = character(nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, 
              LIB_ED = tripTable$LIB_ED, ENQUETE = tripTable$ENQUETE,
              ID_ORDRE = 0, W_IND = tripTable$W_IND, 
              CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA, MODE_DEP = NA, PAYS = tripTable$PAYS)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$MODE_ADH == 0 | is.na(tripTable$MODE_ADH))
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
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
  prezTable <- left_join(prezTable, 
                         y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC,
                                    CSP, RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                                    ZONAGE = ZONAGE_SEC, DEP, KREV, REV_UC, REV), 
                         by = "ID_IND")
  
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable <- prezTable %>% 
    mutate(ID_MEN = case_when(ENQUETE == "IDF" ~ substr(ID_IND, 1, 19),
                              PAYS == "FR" & ENQUETE != "IDF" ~ substr(ID_IND, 1, 18),
                              TRUE ~ ID_IND))
  
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), 
                                                  CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  saveRDS(prezTable, file = paste("03_PREPA_DATA/data/bd/03_presence/presence_", libED,".RDS", sep = ''))
  
  return(prezTable)
  
}



# ==== FONCTION 5 ====
# 5. Fonction de création de la table de présence pour Montréal
# Enquête comptant + de 140 000 personnes en déplacement

## attention aux NA de la variable MODE_ADH

createPrez_mtl <- function(libED){
  
  # 1. Préparation des tables 
  
  tripTable <- filter(tripTable, LIB_ED == libED)
  indTable <- filter(indTable, LIB_ED == libED)
  
  ## Ajout poids de la personne enquêtée (COEQ) à la table des déplacements
  id_W <- indTable %>% 
    transmute(ID_IND, W_IND = as.numeric(W_IND))
  tripTable <- left_join(tripTable, id_W, by = "ID_IND")
  
  ## Supression des observations hors fenêtre 4h-4h 
  ### Orga de la table dans l'ordre croissant des ID_IND et des heures de départ
  tripTable <- arrange(tripTable, ID_IND, H_START, M_START)
  ### Supression des observations hors fenêtre
  tripTable <- tripTable %>% 
    filter(H_START >= 4) %>% 
    filter(H_END >= 4)
  tripTable <- tripTable %>% 
    filter(H_START <= 28) %>% 
    filter(H_END <= 28)
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
  prezTable <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                          ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                          CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                          HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                          MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                          MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                          stringsAsFactors = FALSE )
  
  ## Remplissage de la table 
  VecID <- unique(tripTable_GRP$ID_IND)
  
  VecID1 <- VecID[1:10000]
  VecID2 <- VecID[10001:20000]
  VecID3 <- VecID[20001:30000]
  VecID4 <- VecID[30001:40000]
  VecID5 <- VecID[40001:50000]
  VecID6 <- VecID[50001:60000]
  VecID7 <- VecID[60001:70000]
  VecID8 <- VecID[70001:80000]
  VecID9 <- VecID[80001:90000]
  VecID10 <- VecID[90001:100000]
  VecID11 <- VecID[100001:110000]
  VecID12 <- VecID[110001:120000]
  VecID13 <- VecID[120001:130000]
  VecID14 <- VecID[130001:140000]
  VecID15 <- VecID[140001:length(VecID)]
  
  prezTable_1 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0),  PAYS = character(0),
                            stringsAsFactors = FALSE)
  
  invisible(foreach (ind = VecID1, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1),  PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_1 <-rbind(prezTable_1, prez_ind)
    
  })
  
  
  prezTable_2 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID2, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_2 <-rbind(prezTable_2, prez_ind)
    
  })
  
  
  prezTable_3 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID3, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_3 <-rbind(prezTable_3, prez_ind)
    
  })
  
  prezTable_4 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID4, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_4 <-rbind(prezTable_4, prez_ind)
    
  })
  
  prezTable_5 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID5, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_5 <-rbind(prezTable_5, prez_ind)
    
  })
  
  prezTable_6 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID6, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_6 <-rbind(prezTable_6, prez_ind)
    
  })
  
  prezTable_7 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID7, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_7 <-rbind(prezTable_7, prez_ind)
    
  })
  
  prezTable_8 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID8, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_8 <-rbind(prezTable_8, prez_ind)
    
  })
  
  prezTable_9 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                            ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                            CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                            HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                            MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                            MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                            stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID9, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_9 <-rbind(prezTable_9, prez_ind)
    
  })
  
  prezTable_10 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID10, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_10 <-rbind(prezTable_10, prez_ind)
    
  })
  
  prezTable_11 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID11, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_11 <-rbind(prezTable_11, prez_ind)
    
  })
  
  prezTable_12 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID12, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_12 <-rbind(prezTable_12, prez_ind)
    
  })
  
  prezTable_13 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID13, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_13 <-rbind(prezTable_13, prez_ind)
    
  })
  
  prezTable_14 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID14, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_14 <-rbind(prezTable_14, prez_ind)
    
  })
  
  prezTable_15 <- data.frame(ID_IND = character(0), ID_ED = character(0), LIB_ED = character(0), 
                             ENQUETE = character(0), ID_ORDRE = integer(0), W_IND = numeric(0), 
                             CODE_ZF = character(0), CODE_COM = character(0), CODE_SEC = character(0),
                             HEURE_DEB = character(0), HEURE_FIN = character(0), DUREE = numeric(0), 
                             MOTIF = integer(0), ADH_ARR = integer(0), ADH_DEP = integer(0), 
                             MODE_ARR = character(0), MODE_DEP = character (0), PAYS = character(0),
                             stringsAsFactors = FALSE )
  
  invisible(foreach (ind = VecID15, .verbose = FALSE) %do% {
    
    depl_ind <- filter(tripTable_GRP, tripTable_GRP$ID_IND == ind)
    nobs <- depl_ind$nobs[1]
    
    prez_ind <- data.frame(ID_IND = character(nobs+1), ID_ED = character(nobs+1), LIB_ED = character(nobs+1), 
                           ENQUETE = character(nobs+1), ID_ORDRE = integer(nobs+1), W_IND = numeric(nobs+1), 
                           CODE_ZF = character(nobs+1), CODE_COM = character(nobs+1), CODE_SEC = character(nobs+1),
                           HEURE_DEB = character(nobs+1), HEURE_FIN = character(nobs+1), DUREE = numeric(nobs+1), 
                           MOTIF = integer(nobs+1), ADH_ARR = integer(nobs+1), ADH_DEP = integer(nobs+1), 
                           MODE_ARR = character(nobs+1), MODE_DEP = character (nobs+1), PAYS = character(nobs+1),
                           stringsAsFactors = FALSE)
    
    prez_ind[ , 1] <- rep(depl_ind$ID_IND[1], nobs+1)
    prez_ind[ , 2] <- rep(depl_ind$ID_ED[1], nobs+1)
    prez_ind[ , 3] <- rep(depl_ind$LIB_ED[1], nobs+1)
    prez_ind[ , 4] <- rep(depl_ind$ENQUETE[1], nobs+1)
    prez_ind[ , 5] <- 1:(nobs+1)
    prez_ind[ , 6] <- rep(depl_ind$W_IND[1], nobs+1)
    prez_ind[1, 7] <- depl_ind$O_ZF[1]
    prez_ind[1, 8] <- depl_ind$O_COG[1]
    prez_ind[1, 9] <- depl_ind$O_SEC[1]
    prez_ind[1, 10] <- as.character.Date(ISOdatetime(2010,1,1,4,0,0))
    prez_ind[nobs+1, 11] <- as.character.Date(ISOdatetime(2010,1,2,4,0,0))
    prez_ind[1, 13] <- depl_ind$O_PURPOSE[1]
    prez_ind[1, 14] <- 0
    prez_ind[nobs+1, 15] <- 0
    prez_ind[1, 16] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[nobs], NA)
    prez_ind[nobs+1, 17] <- ifelse(depl_ind$O_SEC[1] == depl_ind$D_SEC[nobs] && depl_ind$O_PURPOSE[1] == depl_ind$D_PURPOSE[nobs], depl_ind$MODE[1], NA)
    
    for (i in 1:nobs){
      prez_ind[i+1, 7] <- depl_ind$D_ZF[i]
      prez_ind[i+1, 8] <- depl_ind$D_COG[i]
      prez_ind[i+1, 9] <- depl_ind$D_SEC[i]
      prez_ind[i+1, 10] <- ifelse(depl_ind$H_END[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_END[i]-24,depl_ind$M_END[i],0)),
                                  as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_END[i],depl_ind$M_END[i],0)) )
      prez_ind[i, 11] <- ifelse(depl_ind$H_START[i]>23, as.character.Date(ISOdatetime(2010,1,2,depl_ind$H_START[i]-24,depl_ind$M_START[i],0)),
                                as.character.Date(ISOdatetime(2010,1,1,depl_ind$H_START[i],depl_ind$M_START[i],0)) )
      if (depl_ind$MODE_ADH[i]==1 & !is.na(depl_ind$MODE_ADH[i])){
        prez_ind[i+1, 10] <-as.character.Date(ymd_hms(prez_ind[i+1,10], truncated=3) - minutes(floor(depl_ind$duree[i]/2)))
        prez_ind[i, 11] <-  as.character.Date(ymd_hms(prez_ind[i,11], truncated=3) + minutes(ceiling(depl_ind$duree[i]/2)))
      }
      prez_ind[i+1, 13] <- depl_ind$D_PURPOSE[i]
      prez_ind[i+1, 14] <- depl_ind$MODE_ADH[i]
      prez_ind[i, 15] <- depl_ind$MODE_ADH[i]
      prez_ind[i+1, 16] <- depl_ind$MODE[i]
      prez_ind[i, 17] <- depl_ind$MODE[i]
      prez_ind[ , 18] <- rep(depl_ind$PAYS[1], nobs+1)
    }
    
    prezTable_15 <-rbind(prezTable_15, prez_ind)
    
  })
  
  prezTable <-rbind(prezTable_1, prezTable_2, prezTable_3, prezTable_4, prezTable_5,
                    prezTable_6, prezTable_7, prezTable_8, prezTable_9, prezTable_10,
                    prezTable_11, prezTable_12, prezTable_13, prezTable_14, prezTable_15)
  
  
  # 3. Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(indTable, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      W_IND, CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, ID_ORDRE = 1, W_IND = as.numeric(W_IND), 
              CODE_ZF, CODE_COM, CODE_SEC, 
              HEURE_DEB = as.character.Date(ISOdatetime(2010,1,1,4,0,0)), 
              HEURE_FIN = as.character.Date(ISOdatetime(2010,1,2,4,0,0)),
              DUREE = 24*60, MOTIF = "01", ADH_ARR = 0, ADH_DEP = 0, MODE_ARR = NA, MODE_DEP = NA, PAYS)
  
  ## Récupération des déplacements (en mode non adherent)
  nobs <- length(tripTable$ID_IND)
  
  prezEnDepl <- data.frame(ID_IND = character (nobs), ID_ED = character(nobs), 
                           LIB_ED = character(nobs), ENQUETE = character(nobs), 
                           ID_ORDRE = integer(nobs), W_IND = numeric(nobs), 
                           CODE_ZF = character(nobs), CODE_COM = character(nobs), 
                           CODE_SEC = character(nobs), HEURE_DEB = character(nobs), 
                           HEURE_FIN = character(nobs), DUREE = numeric(nobs), 
                           MOTIF = integer(nobs), PAYS = character(nobs), stringsAsFactors = FALSE)
  
  prezEnDepl <-  prezEnDepl %>% 
    transmute(ID_IND = tripTable$ID_IND, ID_ED = tripTable$ID_ED, 
              LIB_ED = tripTable$LIB_ED, ENQUETE = tripTable$ENQUETE,
              ID_ORDRE = 0, W_IND = tripTable$W_IND, 
              CODE_ZF = "888888", CODE_COM ="88888", CODE_SEC ="888", 
              HEURE_DEB = tripTable$HEURE_DEB, HEURE_FIN = tripTable$HEURE_FIN,
              DUREE = 0, MOTIF = "88", ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA, MODE_DEP = NA, PAYS = tripTable$PAYS)
  
  prezEnDepl <- filter(prezEnDepl, tripTable$MODE_ADH == 0 | is.na(tripTable$MODE_ADH))
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences mobiles (en déplacement non adhérent)
  prezTable <-rbind(prezTable, prezNonDepl, prezEnDepl)
  prezTable <- dplyr::arrange(prezTable, ID_IND, HEURE_DEB)
  
  
  # 4. Construction des variables temporelles
  
  ## on supprime les artefacts de construction 4h-4h (observations de durée nulle)
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,1,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,1,4,0,0)))
  prezTable <- filter(prezTable, prezTable$HEURE_DEB!=as.character.Date(ISOdatetime(2010,1,2,4,0,0))|prezTable$HEURE_FIN!=as.character.Date(ISOdatetime(2010,1,2,4,0,0)))
  
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
  prezTable <- left_join(prezTable, 
                         y = select(indTable, ID_IND, SEX, AGE, KAGE, EDUC, OCC,
                                    CSP, RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                                    ZONAGE = ZONAGE_SEC, DEP, KREV, REV_UC, REV), 
                         by = "ID_IND")
  
  
  # 6. Calcul du niveau d'éducation et de la CSP au niveau du ménage 
  
  ## Identifiant du ménage
  prezTable <- prezTable %>% 
    mutate(ID_MEN = case_when(ENQUETE == "IDF" ~ substr(ID_IND, 1, 19),
                              PAYS == "FR" & ENQUETE != "IDF" ~ substr(ID_IND, 1, 18),
                              TRUE ~ ID_IND))
  
  ## Calcul de la variable EDUCMEN et de la variable CSPMEN
  ## niveau d'éducation le plus bas du ménage (adultes de 18 ans et plus)
  prezTableGRP <- group_by(select(prezTable, ID_MEN, ID_IND, AGE, EDUC, CSP), ID_MEN)
  prezTableGRP2 <- as.data.frame(dplyr::summarize(prezTableGRP, EDUCMEN = min(EDUC[AGE>17], na.rm = TRUE), 
                                                  CSPMEN = min(CSP[AGE>17], na.rm = TRUE)))
  
  ## Joindre les nouvelles variables à la table des présences
  prezTable <- left_join(x = prezTable, y = prezTableGRP2, by = "ID_MEN")
  
  
  # 7. Sauvegarde
  saveRDS(prezTable, file = paste("03_PREPA_DATA/data/bd/03_presence/presence_", libED,".RDS", sep = ''))
  
  return(prezTable)
  
}


