## Script de récupération des indicateurs à intégrer au Mobiliscope
# Chargement des packages 
library("reshape2")
library("dplyr")
library("tidyr")
library("rgdal")
library("geojsonio")

## Chargement de la table de presence_semaine
load("presence_semaine.RData")
load("personnes_semaine.RData")

shpSect <- readOGR("sectEGT.shp", layer = "sectEGT")
plot(shpSect)

# Fichier contenant le libellé des secteurs à afficher en infobulles
libSect <- read.csv2("LIB_SECTEURS.csv")

######################### INDEPENDANT : POP ###################################

# Sélection des mobilités autonomes
presence_semaine <- filter(presence_semaine, age>16)

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888' & code_sec != '9999' & code_sec != '')

# CALCUL DES EFFECTIFS pondérés par secteur et par heure
# WIDE
prsem_wide <- select(presence_semaine,nquest, np, ID_pers, code_sec, code_dep, code_cour, poidsp, motif_presence, sexe, age, niveduc, trage,envireduc_men_moyen, cs8, cs24l, niveduc_men_min, csp_men_min, h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27)
prsem_wide <- melt(prsem_wide, id.vars=c("nquest","np", "ID_pers", "code_sec", "code_dep", "code_cour", "poidsp", "motif_presence", "sexe", "age", "niveduc", "trage","envireduc_men_moyen", "cs8", "cs24l", "niveduc_men_min", "csp_men_min"))
prsem_wide <- filter(prsem_wide, value==TRUE)
prsem_wide_h <- group_by(.data =prsem_wide , variable)

# Repérer les individus qui sortent de l'échantillon
personnes_semaine$ID_pers <- ifelse(nchar(personnes_semaine$np)==1,paste(personnes_semaine$nquest,personnes_semaine$np,sep="0"),paste(personnes_semaine$nquest,personnes_semaine$np,sep=""))

# Supprimer les doublons en favorisant les positions hors transport
prsem_wide_h_p <- group_by(.data =prsem_wide_h , variable,ID_pers)
prsem_wide_h_p <- as.data.frame(summarize(prsem_wide_h_p, nID = n()))
prsem_wide_h <- merge(prsem_wide_h, prsem_wide_h_p,by=c("variable","ID_pers") )
prsem_wide_h <- prsem_wide_h[prsem_wide_h$nID==1|(prsem_wide_h$nID>1 & prsem_wide_h$code_cour!=88),]
prsem_wide_h <- filter(prsem_wide_h, motif_presence != '88'&  motif_presence != '99' &  motif_presence != '')
prsem_wide_h <- prsem_wide_h[!duplicated(prsem_wide_h[, which(names(prsem_wide_h) != "code_sec" & names(prsem_wide_h) != "code_dep" & names(prsem_wide_h) != "code_cour" & names(prsem_wide_h) != "motif_presence")]),]
prsem_wide_h$nID <- NULL

# On récupère le secteur de résidence
prsem_wide_h <- merge(x = prsem_wide_h, y = select(personnes_semaine, ID_pers, ressect), by="ID_pers", all.x=TRUE)
prsem_wide_h <- group_by(.data =prsem_wide_h , variable)

# Construction des données pour les oursins
flowdata <- select(prsem_wide_h, ID_pers, variable, code_sec, poidsp, ressect)
flowdata <- group_by(.data = flowdata , variable, code_sec, ressect)
flowdata <- summarise(flowdata, poidsp = sum(poidsp))
flowdata <- filter(flowdata, code_sec != ressect)

## Préparation des données pour les oursins
flowdatasmp <- select(prsem_wide_h, ID_pers, variable, code_sec, ressect, poidsp)
flowdatasmp <- group_by(.data = flowdatasmp , variable, code_sec)

flowdatasmpNRB <-  filter(flowdatasmp, code_sec != ressect) %>%
  select(variable, code_sec) %>%
  group_by(variable, code_sec) %>%
  mutate(count = n()) %>%
  distinct() %>% 
  filter(count >= 12) # non resident population brut
# supprimer les lignes correspondant à des couples heure-secteur avec < 12 individus en brut non pondéré
flowdatasmp <- full_join(flowdatasmp, flowdatasmpNRB, by = c("variable", "code_sec")) %>%
  filter(is.na(count) != T)
flowdatasmp$count <- NULL
# répercuter sur flowdata
flowdata <- left_join(flowdata, flowdatasmpNRB, by = c("variable", "code_sec")) %>%
  filter(is.na(count) != T)
flowdata$count <- NULL

flowdatasmpT <- summarise(flowdatasmp, poidsp = sum(poidsp)) # present population
flowdatasmpNR <-  filter(flowdatasmp, code_sec != ressect) # non resident present population
flowdatasmpNR <- summarise(flowdatasmpNR, poidsp = sum(poidsp))

flowdatasmp <- left_join(flowdatasmpT, flowdatasmpNR, by = c("variable","code_sec"))
alldist <- distinct(prsem_wide_h, variable, code_sec)
flowdatasmp <-  right_join(flowdatasmp, alldist, by = c("variable", "code_sec")) # add empty sect
flowdatasmp[is.na(flowdatasmp)] <- 0

# Wide
flowdatasmp <- spread(select(flowdatasmp, variable, code_sec, poidsp.y), key = code_sec, value = poidsp.y)

flowdatasmp$variable <- gsub("h",'',flowdatasmp$variable)
flowdatasmp$variable <- ifelse(as.numeric(flowdatasmp$variable) <= 12, paste(flowdatasmp$variable, 'am', sep = ''), 
                             ifelse(as.numeric(flowdatasmp$variable) >= 24, paste((as.numeric(flowdatasmp$variable) - 24), 'am', sep = ''),
                                    paste((as.numeric(flowdatasmp$variable) - 12), 'pm', sep = '')))
flowdatasmp$variable[flowdatasmp$variable == "0am"] <- "12pm"
colnames(flowdatasmp)[1] <- "hour"
flowdatasmp <- flowdatasmp[,-c(21, 41)] # drop 2 district with no non resident population all day long when filter >= 12

# Add min and max values
library(data.table)

vMinS <- 1000000 # init
vMaxS <- 0 # init

vMinS <- apply(flowdatasmp[,2:length(flowdatasmp)], MARGIN = 2, function(x){
  if(min(x) < vMinS){
    vMinS <-  min(x)
  }
})
vMinS <- min(vMinS) # valeur min en stocks

vMaxS <- apply(flowdatasmp[,2:length(flowdatasmp)], MARGIN = 2, function(x){
  if(max(x) > vMaxS){
    vMaxS <-  max(x)
  }
})
vMaxS <- max(vMaxS) # valeur max en stocks

dfMinMaxS <- data.frame("min" = numeric(107),
                        "max" = numeric(107))

dfMinMaxS$min <- vMinS
dfMinMaxS$max <- vMaxS
dfMinMaxS <- as.data.frame(t(dfMinMaxS))
dfMinMaxS <- setDT(dfMinMaxS, keep.rownames = TRUE)[]

flowdatasmp <- rbindlist(list(flowdatasmp, dfMinMaxS))
flowdatasmp <- rbind(slice(flowdatasmp, 25:26),
                     slice(flowdatasmp, 1:24))

# Export
write.csv2(flowdata, "htdocs/pop0_flow/geo/flowData.csv", row.names = F)
write.table(flowdatasmp, "htdocs/pop0_flow/data/dataSect.csv", row.names = F, sep = ",", dec = ".")

## Geojson
# Wide
flowdatasmpGJS <- spread(flowdatasmpNR, key = variable, value = poidsp)
flowdatasmpGJS[is.na(flowdatasmpGJS)] <- 0
colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)] <- paste("pop0", colnames(flowdatasmpGJS)[2:length(flowdatasmpGJS)], sep = "_")

# Jointure avec le fichier shp
shpSectDataFlow <- merge(shpSect, flowdatasmpGJS, by.x = "SECT_EGT", by.y = "code_sec")

# Jointure avec les libellés
shpSectDataFlow <- merge(shpSectDataFlow, libSect, by = "SECT_EGT")

# Conversion geojson
shpSectDataFlowJson <- geojson_json(shpSectDataFlow)

# Export
geojson_write(shpSectDataFlowJson, file = paste("htdocs/pop0_flow/geo/secteursData.geojson", sep = ''))

###################################################################################

######################### ECHANTILLONNAGE : DEP ###################################

# ECHANTILLONNAGE
indicB <- 'resdep' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'dep' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Jointure avec la table personne pour identifier le département de résidence
personnes_semaine$ID_pers <- ifelse(nchar(personnes_semaine$np)==1,paste(personnes_semaine$nquest,personnes_semaine$np,sep="0"),paste(personnes_semaine$nquest,personnes_semaine$np,sep=""))
presence_semaine <- left_join(presence_semaine, select(personnes_semaine, ID_pers, resdep), by = 'ID_pers')

# Sélection des mobilités autonomes
presence_semaine <- filter(presence_semaine, age>16)

# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888' & code_sec != '')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- ifelse(presence_semaine[[indicB]] == '75', 1,
                                      ifelse(presence_semaine[[indicB]] == '93', 2,
                                             ifelse(presence_semaine[[indicB]] == '94', 3,
                                                    ifelse(presence_semaine[[indicB]] == '92', 4, 5))))

###################################################################################

######################### ECHANTILLONNAGE : ACT ###################################

# ECHANTILLONNAGE
indicB <- 'motif_presence' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'act' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)

# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des valeurs manquantes
presence_semaine <- filter(presence_semaine, eval(parse(text = indicB)) != 88 & eval(parse(text = indicB)) != 99 & eval(parse(text = indicB)) != ""
                           & eval(parse(text = indicB)) != '7' & eval(parse(text = indicB)) != '9')

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- ifelse(presence_semaine[[indicB]] == '1', 1,
                                      ifelse(presence_semaine[[indicB]] == '2', 2,
                                             ifelse(presence_semaine[[indicB]] == '3', 2,
                                                    ifelse(presence_semaine[[indicB]] == '4', 3,
                                                           ifelse(presence_semaine[[indicB]] == '5', 4, 5)))))

###################################################################################

######################### ECHANTILLONNAGE : AGE ###################################

# ECHANTILLONNAGE
indicB <- 'trage' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'age' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)

# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- ifelse(presence_semaine[[indicB]] == '15 A 24 ANS', 1,
                                      ifelse(presence_semaine[[indicB]] == '25 A 34 ANS', 2,
                                             ifelse(presence_semaine[[indicB]] == '35 A 54 ANS', 3,
                                                    ifelse(presence_semaine[[indicB]] == '55 A 64 ANS', 3, 4))))

###################################################################################

######################### ECHANTILLONNAGE : SEX ###################################

# ECHANTILLONNAGE
indicB <- 'sexe' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT)
nomVar <-  'sex' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)

# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- presence_semaine[[indicB]]

###################################################################################

######################### ECHANTILLONNAGE : CS ####################################

# ECHANTILLONNAGE
indicB <- 'csp_men_min' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'cs' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)
#presence_semaine <- filter(presence_semaine, csp_men_min>0 & csp_men_min<9 & niveduc_men_min>0 & niveduc_men_min<9 )
# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des valeurs manquantes
presence_semaine <- filter(presence_semaine, eval(parse(text = indicB)) != 'Inf') 

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- presence_semaine[[indicB]]

###################################################################################

######################### ECHANTILLONNAGE : CLEDUC ################################

# ECHANTILLONNAGE
indicB <- 'niveduc_men_min' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'cleduc' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)
#presence_semaine <- filter(presence_semaine, csp_men_min>0 & csp_men_min<9 & niveduc_men_min>0 & niveduc_men_min<9 )
# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des valeurs manquantes
presence_semaine <- filter(presence_semaine, eval(parse(text = indicB)) != 'Inf') 

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- presence_semaine[[indicB]]

###################################################################################

######################### ECHANTILLONNAGE : OCC ###################################

# ECHANTILLONNAGE
indicB <- 'occp' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'occ' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)

# VERIFIER MANUELLEMENT TOUTES LES MODALITES AVANT LE IFELSE POUR SUPPRIMER LES VALEURS MANQUANTES
unique(presence_semaine[[indicB]])

# Suppression des valeurs manquantes
presence_semaine <- filter(presence_semaine, eval(parse(text = indicB)) != "")

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- ifelse(presence_semaine[[indicB]] == '0', 5,
                                      ifelse(presence_semaine[[indicB]] == '1', 1,
                                             ifelse(presence_semaine[[indicB]] == '2', 1,
                                                    ifelse(presence_semaine[[indicB]] == '3', 2,
                                                           ifelse(presence_semaine[[indicB]] == '4', 2,
                                                                  ifelse(presence_semaine[[indicB]] == '5', 2,
                                                                         ifelse(presence_semaine[[indicB]] == '6', 3,
                                                                                ifelse(presence_semaine[[indicB]] == '7', 4,
                                                                                       ifelse(presence_semaine[[indicB]] == '8', 3, 5)))))))))

###################################################################################

######################### ECHANTILLONNAGE : REV ###################################

# Calcul de l'indicateur de revenu (Julie)
#revenus par UC_OK (Refait selon INSEE)
## nombre d'adultes du menage (avec et sans le premier adulte)
personnes_semaine_men <- group_by(select(personnes_semaine, nquest, age), nquest)
personnes_semaine_temp <- as.data.frame(summarize(personnes_semaine_men, nbad = sum(age>=18, na.rm=TRUE), nbadMoinsUn = sum(age>=18, na.rm=TRUE)-1 ))
presence_semaine <- left_join(x = presence_semaine, y=personnes_semaine_temp, by = "nquest")

## Les unites de consommation sont generalement calculees selon l'echelle d'equivalence dite de l'OCDE modifi?e qui attribue 1 uc au premier adulte du menage, 0,5 uc aux autres personnes de 14 ans ou plus et 0,3 uc aux enfants de moins de 14 ans.
presence_semaine$revenus_UC_ok <- ifelse(as.numeric(presence_semaine$revenu)==1, 400/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                         ifelse(as.numeric(presence_semaine$revenu)==2, 1000/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                ifelse(as.numeric(presence_semaine$revenu)==3, 1400/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                       ifelse(as.numeric(presence_semaine$revenu)==4, 1800/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                              ifelse(as.numeric(presence_semaine$revenu)==5, 2200/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                                     ifelse(as.numeric(presence_semaine$revenu)==6, 2700/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                                            ifelse(as.numeric(presence_semaine$revenu)==7, 3250/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                                                   ifelse(as.numeric(presence_semaine$revenu)==8, 3750/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                                                          ifelse(as.numeric(presence_semaine$revenu)==9, 5000/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),
                                                                                                 ifelse(as.numeric(presence_semaine$revenu)==10, 7000/(1+presence_semaine$nbadMoinsUn*0.5+presence_semaine$nmoins14*0.3),NA))))))))))


# ECHANTILLONNAGE
indicB <- 'revenus_UC_ok' # nom de l'indicateur dans presence_semaine A COMPLETER MANUELLEMENT
nomVar <-  'rev' # nom de la variable en sortie A COMPLETER MANUELLEMENT

# Sélection des mobilités autonomes >15 ans
presence_semaine <- filter(presence_semaine, age>16)

# Suppression des valeurs manquantes
presence_semaine <- filter(presence_semaine, is.na(eval(parse(text = indicB))) != T) 

# Suppression des secteurs '8888'
presence_semaine <- filter(presence_semaine, code_sec != '8888')

# Recodage A COMPLETER MANUELLEMENT
presence_semaine$indic_simp <- ifelse(presence_semaine[[indicB]] < 1084, 1,
                                      ifelse(presence_semaine[[indicB]] >= 1084 & presence_semaine[[indicB]] < 1806, 2,
                                             ifelse(presence_semaine[[indicB]] >= 1806 & presence_semaine[[indicB]] < 2890, 3, 4)))

###################################################################################
###################################################################################

# CALCUL DES EFFECTIFS pondérés par secteur et par heure
# WIDE
prsem_wide <- select(presence_semaine,nquest, np, ID_pers, code_sec, code_dep, code_cour, poidsp, motif_presence, indic_simp, sexe, age, niveduc, trage,envireduc_men_moyen, cs8, cs24l, niveduc_men_min, csp_men_min, h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27)
prsem_wide <- melt(prsem_wide, id.vars=c("nquest","np", "ID_pers", "code_sec", "code_dep", "code_cour", "poidsp", "motif_presence", "indic_simp", "sexe", "age", "niveduc", "trage","envireduc_men_moyen", "cs8", "cs24l", "niveduc_men_min", "csp_men_min"))
prsem_wide <- filter(prsem_wide, value==TRUE)
prsem_wide_h <- group_by(.data =prsem_wide , variable)

# Repérer les individus qui sortent de l'échantillon
personnes_semaine$ID_pers <- ifelse(nchar(personnes_semaine$np)==1,paste(personnes_semaine$nquest,personnes_semaine$np,sep="0"),paste(personnes_semaine$nquest,personnes_semaine$np,sep=""))

# Supprimer les doublons en favorisant les positions hors transport
prsem_wide_h_p <- group_by(.data =prsem_wide_h , variable,ID_pers)
prsem_wide_h_p <- as.data.frame(summarize(prsem_wide_h_p, nID = n()))
prsem_wide_h <- merge(prsem_wide_h, prsem_wide_h_p,by=c("variable","ID_pers") )
prsem_wide_h <- prsem_wide_h[prsem_wide_h$nID==1|(prsem_wide_h$nID>1 & prsem_wide_h$code_cour!=88),]
prsem_wide_h <- filter(prsem_wide_h, motif_presence != "88" &  motif_presence != "99" &  motif_presence != "")
#prsem_wide_h <- prsem_wide_h[!duplicated(prsem_wide_h[,c(-5,-6)]),]
prsem_wide_h <- prsem_wide_h[!duplicated(prsem_wide_h[, which(names(prsem_wide_h) != "code_sec" & names(prsem_wide_h) != "code_dep" & names(prsem_wide_h) != "code_cour" & names(prsem_wide_h) != "motif_presence")]),]
prsem_wide_h$nID <- NULL

# On récupère le secteur de résidence
prsem_wide_h <- merge(x = prsem_wide_h, y = select(personnes_semaine, ID_pers, ressect), by="ID_pers", all.x=TRUE)
prsem_wide_h <- group_by(.data =prsem_wide_h , variable)

nbMod <- length(unique(presence_semaine$indic_simp))

## 1. Construction de la table de présence par secteur et par heure : STOCKS
# A COMPLETER MANUELLEMENT (à automatiser)
prsem_Var_Sec <- group_by(.data =prsem_wide_h , variable, code_sec)
prsem_Var_Sec <- as.data.frame(summarize(prsem_Var_Sec, code_cour=first(code_cour),
                                         popsec = sum(poidsp[as.numeric(indic_simp)>=1], na.rm = TRUE),
                                         act1 = sum(poidsp[as.numeric(indic_simp)==1],na.rm=TRUE),
                                         act2 = sum(poidsp[as.numeric(indic_simp)==2],na.rm=TRUE),
                                         act3 = sum(poidsp[as.numeric(indic_simp)==3],na.rm=TRUE),
                                         act4 = sum(poidsp[as.numeric(indic_simp)==4],na.rm=TRUE),
                                         act5 = sum(poidsp[as.numeric(indic_simp)==5],na.rm=TRUE)))

prsem_Var_Sec <- filter(prsem_Var_Sec, code_cour != 4)

# Création d'un folder au nom de l'indicateur
dir.create(paste("MOBILISCOPE_PHASE2/DATA/INDIC/", toupper(nomVar), sep = ""))
write.csv2(prsem_Var_Sec, paste("MOBILISCOPE_PHASE2/DATA/INDIC/", toupper(nomVar), "/Data_", toupper(nomVar), "_Pond.csv", sep = ""), row.names = F)

## 2. Construction de la table de présence par secteur et par heure : PARTS
prsem_Var_Sec2 <- data.frame(
  prsem_Var_Sec[,1:4], 
  apply(prsem_Var_Sec[,5:length(prsem_Var_Sec)], 2, function(x){(x * 100) / prsem_Var_Sec$popsec}))

## 3. Construction de la table de présence par secteur et par heure : POPULATION NON RESIDENTE (STOCKS)
prsem_Var_Sec3 <- filter(prsem_wide_h, code_sec != ressect)
prsem_Var_Sec3 <- group_by(.data =prsem_Var_Sec3 , variable, code_sec)
prsem_Var_Sec3 <- as.data.frame(summarize(prsem_Var_Sec3, code_cour=first(code_cour),
                                         popsec = sum(poidsp[as.numeric(indic_simp)>=1], na.rm = TRUE),
                                         act1 = sum(poidsp[as.numeric(indic_simp)==1],na.rm=TRUE),
                                         act2 = sum(poidsp[as.numeric(indic_simp)==2],na.rm=TRUE),
                                         act3 = sum(poidsp[as.numeric(indic_simp)==3],na.rm=TRUE),
                                         act4 = sum(poidsp[as.numeric(indic_simp)==4],na.rm=TRUE),
                                         act5 = sum(poidsp[as.numeric(indic_simp)==5],na.rm=TRUE)))

prsem_Var_Sec3 <- filter(prsem_Var_Sec3, code_cour != 4)

## CONTROLE DES EFFECTIFS BRUTS
# Construction de la table de présence par secteur et par heure NON PONDEREE pour vérifications des effectifs bruts (population présente)
prsem_Var_Sec_B <- group_by(.data =prsem_wide_h , variable, code_sec)

# A COMPLETER MANUELLEMENT (à automatiser)
prsem_Var_Sec_B <- as.data.frame(summarize(prsem_Var_Sec_B, code_cour=first(code_cour),
                                         popsec = sum(as.numeric(indic_simp)>=1, na.rm = TRUE),
                                         act1 = sum(as.numeric(indic_simp)==1,na.rm=TRUE),
                                         act2 = sum(as.numeric(indic_simp)==2,na.rm=TRUE),
                                         act3 = sum(as.numeric(indic_simp)==3,na.rm=TRUE),
                                         act4 = sum(as.numeric(indic_simp)==4,na.rm=TRUE),
                                         act5 = sum(as.numeric(indic_simp)==5,na.rm=TRUE)))

prsem_Var_Sec_B <- filter(prsem_Var_Sec_B, code_cour != 4)

write.csv2(prsem_Var_Sec_B, paste("MOBILISCOPE_PHASE2/DATA/INDIC/", toupper(nomVar), "/Data_", toupper(nomVar), "_Brutes.csv", sep = ""), row.names = F)

# Construction de la table de présence par secteur et par heure NON PONDEREE pour vérifications des effectifs bruts (population présente non résidente)
prsem_Var_Sec_BNR <- filter(prsem_wide_h, code_sec != ressect)
prsem_Var_Sec_BNR <- group_by(.data =prsem_Var_Sec_BNR , variable, code_sec)

# A COMPLETER MANUELLEMENT (à automatiser)
prsem_Var_Sec_BNR <- as.data.frame(summarize(prsem_Var_Sec_BNR, code_cour=first(code_cour),
                                           popsec = sum(as.numeric(indic_simp)>=1, na.rm = TRUE),
                                           act1 = sum(as.numeric(indic_simp)==1,na.rm=TRUE),
                                           act2 = sum(as.numeric(indic_simp)==2,na.rm=TRUE),
                                           act3 = sum(as.numeric(indic_simp)==3,na.rm=TRUE),
                                           act4 = sum(as.numeric(indic_simp)==4,na.rm=TRUE),
                                           act5 = sum(as.numeric(indic_simp)==5,na.rm=TRUE)))

prsem_Var_Sec_BNR <- filter(prsem_Var_Sec_BNR, code_cour != 4)

write.csv2(prsem_Var_Sec_BNR, paste("MOBILISCOPE_PHASE2/DATA/INDIC/", toupper(nomVar), "/Data_", toupper(nomVar), "_BrutesNR.csv", sep = ""), row.names = F)

#######################################################################################################################
#######################################################################################################################
#######################################################################################################################
## PREPARATION DES DONNEES pour la représentation cartographique (1 par modalité)

# Calcul des valeurs minimum et maximum pour l'ensemble des modalités
# Ces valeurs seront utilisées pour déterminer les bornes minimum et maximum des graphiques "simples" par secteur
# Valeurs min et valeurs max de la série
library(data.table)

# Prop
vMinS <- 1000000 # init
vMaxS <- 0 # init

vMinS <- apply(prsem_Var_Sec[,5:length(prsem_Var_Sec)], MARGIN = 2, function(x){
  if(min(x) < vMinS){
    vMinS <-  min(x)
  }
})
vMinS <- min(vMinS) # valeur min en stocks

vMaxS <- apply(prsem_Var_Sec[,5:length(prsem_Var_Sec)], MARGIN = 2, function(x){
  if(max(x) > vMaxS){
    vMaxS <-  max(x)
  }
})
vMaxS <- max(vMaxS) # valeur max en stocks

dfMinMaxS <- data.frame("min" = numeric(109),
                        "max" = numeric(109))

dfMinMaxS$min <- vMinS
dfMinMaxS$max <- vMaxS
dfMinMaxS <- as.data.frame(t(dfMinMaxS))
dfMinMaxS <- setDT(dfMinMaxS, keep.rownames = TRUE)[]

# Choro
vMinP <- 110 # init
vMaxP <- 0 # init

vMinP <- apply(prsem_Var_Sec2[,5:length(prsem_Var_Sec2)], MARGIN = 2, function(x){
  if(min(x) < vMinP){
    vMinP <-  min(x)
  }
})
vMinP <- min(vMinP) # valeur min en parts

vMaxP <- apply(prsem_Var_Sec2[,5:length(prsem_Var_Sec2)], MARGIN = 2, function(x){
  if(max(x) > vMaxP){
    vMaxP <-  max(x)
  }
})
vMaxP <- max(vMaxP) # valeur max en parts

dfMinMaxP <- data.frame("min" = numeric(109),
                        "max" = numeric(109))

dfMinMaxP$min <- vMinP
dfMinMaxP$max <- vMaxP
dfMinMaxP <- as.data.frame(t(dfMinMaxP))
dfMinMaxP <- setDT(dfMinMaxP, keep.rownames = TRUE)[]

# Oursins
vMinF <- 1000000 # init
vMaxF <- 0 # init

vMinF <- apply(prsem_Var_Sec3[,5:length(prsem_Var_Sec3)], MARGIN = 2, function(x){
  if(min(x) < vMinF){
    vMinF <-  min(x)
  }
})
vMinF <- min(vMinF) # valeur min en stocks

vMaxF <- apply(prsem_Var_Sec3[,5:length(prsem_Var_Sec3)], MARGIN = 2, function(x){
  if(max(x) > vMaxF){
    vMaxF <-  max(x)
  }
})
vMaxF <- max(vMaxF) # valeur max en stocks

dfMinMaxF <- data.frame("min" = numeric(109),
                        "max" = numeric(109))

dfMinMaxF$min <- vMinF
dfMinMaxF$max <- vMaxF
dfMinMaxF <- as.data.frame(t(dfMinMaxF))
dfMinMaxF <- setDT(dfMinMaxF, keep.rownames = TRUE)[]

for (i in 1:nbMod){
  
  indic <- colnames(prsem_Var_Sec)[4 + i]
  indic2 <- colnames(prsem_Var_Sec2)[4 + i]

  # Préparation du tableau de données
  dataShpProp <- select_(prsem_Var_Sec, "variable", "code_sec", indic) %>%
    spread_("variable", indic)
  
  # Reorder
  dataShpProp <- data.frame("SECT_EGT" = dataShpProp[,1], dataShpProp[,8:25], dataShpProp[,2:7])
  colnames(dataShpProp)[-1] <-  paste(indic,  colnames(dataShpProp)[-1] , sep='_')
  
  # Data shape prop
  dataShpChoro <- select_(prsem_Var_Sec2, "variable", "code_sec", indic2) %>%
    spread_("variable", indic2)
  
  dataShpChoro <- data.frame("SECT_EGT" = dataShpChoro[,1], dataShpChoro[,8:25], dataShpChoro[,2:7])
  colnames(dataShpChoro)[-1] <-  paste(indic,  colnames(dataShpChoro)[-1] , sep='_')
  
  # Jointure avec le fond de carte
  shpSectDataProp <- merge(shpSect, dataShpProp, by = "SECT_EGT")
  shpSectDataChoro <- merge(shpSect, dataShpChoro, by = "SECT_EGT")
  
  # Jointure des libellés
  shpSectDataProp <- merge(shpSectDataProp, libSect, by = "SECT_EGT")
  shpSectDataChoro <- merge(shpSectDataChoro, libSect, by = "SECT_EGT")
  
  ## Création des données pour les cartes en oursins
  # 1. Flowdata (pour les oursins)
  flowdata <- filter(prsem_wide_h, indic_simp == i)
  flowdata <- select(flowdata, ID_pers, variable, code_sec, poidsp, ressect)
  flowdata <- group_by(.data = flowdata , variable, code_sec, ressect)
  flowdata <- summarise(flowdata, poidsp = sum(poidsp))
  flowdata <- filter(flowdata, code_sec != ressect)
  
  # 2. Geojson
  flowdatasmp <- filter(prsem_wide_h, indic_simp == i & code_sec != "")
  flowdatasmp <- select(flowdatasmp, ID_pers, variable, code_sec, ressect, poidsp)
  flowdatasmp <- group_by(.data = flowdatasmp , variable, code_sec)
  
  flowdatasmpNRB <-  filter(flowdatasmp, code_sec != ressect) %>%
    select(variable, code_sec) %>%
    group_by(variable, code_sec) %>%
    mutate(count = n()) %>%
    distinct() %>% 
    filter(count >= 12) # non resident population brut
  # supprimer les lignes correspondant à des couples heure-secteur avec < 12 individus en brut non pondéré
  flowdatasmp <- full_join(flowdatasmp, flowdatasmpNRB, by = c("variable", "code_sec")) %>%
    filter(is.na(count) != T)
  flowdatasmp$count <- NULL
  # répercuter sur flowdata
  flowdata <- left_join(flowdata, flowdatasmpNRB, by = c("variable", "code_sec")) %>%
    filter(is.na(count) != T)
  flowdata$count <- NULL
  
  flowdatasmpT <- summarise(flowdatasmp, poidsp = sum(poidsp))
  flowdatasmpNR <-  filter(flowdatasmp, code_sec != ressect) 
  flowdatasmpNR <- summarise(flowdatasmpNR, poidsp = sum(poidsp)) # non resident present population
  
  flowdatasmp <- left_join(flowdatasmpT, flowdatasmpNR, by = c("variable","code_sec"))
  flowdatasmp <-  right_join(flowdatasmp, select(prsem_Var_Sec3, variable, code_sec), by = c("variable", "code_sec")) # add empty sect
  flowdatasmp[is.na(flowdatasmp)] <- 0
  
  # Wide
  flowdatasmp <- spread(select(flowdatasmp, variable, code_sec, poidsp.y), key = variable, value = poidsp.y)
  colnames(flowdatasmp)[2:length(flowdatasmp)] <- paste(indic, colnames(flowdatasmp)[2:length(flowdatasmp)], sep = "_")
  
  # Jointure avec le fichier shp
  shpSectDataFlow <- merge(shpSect, flowdatasmp, by.x = "SECT_EGT", by.y = "code_sec")
  
  # Jointure des libellés
  shpSectDataFlow <- merge(shpSectDataFlow, libSect, by = "SECT_EGT")
  
  ## Création des répertoires
  # Répertoires parents (2 par indicateur)
  dir.create( paste("htdocs/", nomVar, i ,"_prop", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_choro", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_flow", sep = ''))
  
  # Répertoires enfants (2 par répertoire parent)
  dir.create( paste("htdocs/", nomVar, i ,"_prop/geo", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_choro/geo", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_flow/geo", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_prop/data", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_choro/data", sep = ''))
  dir.create( paste("htdocs/", nomVar, i ,"_flow/data", sep = ''))
  
  # Export des données spatiales
  shpSectDataPropJson <- geojson_json(shpSectDataProp)
  shpSectDataChoroJson <- geojson_json(shpSectDataChoro)
  shpSectDataFlowJson <- geojson_json(shpSectDataFlow)
  geojson_write(shpSectDataPropJson, file = paste("htdocs/", nomVar, i ,"_prop/geo/secteursData.geojson", sep = ''))
  geojson_write(shpSectDataChoroJson, file = paste("htdocs/", nomVar, i ,"_choro/geo/secteursData.geojson", sep = ''))
  geojson_write(shpSectDataFlowJson, file = paste("htdocs/", nomVar, i ,"_flow/geo/secteursData.geojson", sep = ''))
  write.table(flowdata, paste("htdocs/", nomVar, i ,"_flow/geo/flowData.csv", sep = ''), row.names = F, sep = ",", dec = ".")
  
  # Export des données
  #write.csv2(dataShpProp, paste("htdocs/", nomVar, i ,"_prop/data/", nomVar, i ,".csv", sep = ''), row.names = F)
  #write.csv2(dataShpChoro, paste("htdocs/", nomVar, i ,"_choro/data/", nomVar, i ,".csv", sep = ''), row.names = F)
  
  ### Création des tableaux pour le graphique simple
  ## Prop
  dataSectProp <- as.data.frame(t(dataShpProp))
  names(dataSectProp) <- as.matrix(dataSectProp[1,])
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
  
  ## Choro
  dataSectChoro <- as.data.frame(t(dataShpChoro))
  names(dataSectChoro) <- as.matrix(dataSectChoro[1,])
  dataSectChoro <-  dataSectChoro[-1, ]
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
  dfh <- data.frame(hour = c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")) # au cas où il  a des heures manquantes (cf shopping)
  dataSectFlow <- left_join(dfh, dataSectFlow, by = "hour")
  
  dataSectFlow <- rbind(slice(dataSectFlow, 19:24), slice(dataSectFlow, 1:18))
  dfMinMaxF2 <- dfMinMaxF[,1:length(dataSectFlow)]
  dataSectFlow <- rbindlist(list(dataSectFlow, dfMinMaxF2))
  dataSectFlow <- rbind(slice(dataSectFlow, 25:26), slice(dataSectFlow, 1:24))
  dataSectFlow <- rbind(slice(dataSectFlow, 1:2), slice(dataSectFlow, 9:26), slice(dataSectFlow, 3:8))
  dataSectFlow[is.na(dataSectFlow)] <- 0
  
  # POUR LE TYPE AT HOME DE ACTIVITY => remplacer les valeurs par 0
  if (indic == "act1"){
    
    dataSectFlow <- data.frame(dataSectFlow[,1],
                               rbind(dataSectFlow[1:2,2:length(dataSectFlow)],
                                apply(dataSectFlow[3:26,2:length(dataSectFlow)], MARGIN = 2, function(a){a <- ifelse(a!=0, 0, a)})))
    
    colnames(dataSectFlow) <- gsub("X", "", colnames(dataSectFlow))
    
  }
  
  # Export
  write.csv2(dataSectProp, paste("htdocs/", nomVar, i ,"_prop/data/dataSect.csv", sep = ''), row.names = F)
  write.csv2(dataSectChoro, paste("htdocs/", nomVar, i ,"_choro/data/dataSect.csv", sep = ''), row.names = F)
  write.csv2(dataSectFlow, paste("htdocs/", nomVar, i ,"_flow/data/dataSect.csv", sep = ''), row.names = F)
  
}

#######################################################################################################################
## CALCUL DES INDICES DE SEGREGATION
library(OasisR)
library(spdep)

## DUNCAN
# Mise en forme du tableau de base
tabISeg <- prsem_Var_Sec
listHour <- levels(tabISeg$variable)
result <- data.frame()
result2 <- data.frame()
dfMinMax <- data.frame("hour" = c("min", "max"), 
                       "Duncan" = numeric(2),
                       "Moran" = numeric(2)) # mise en forme d'un df contenant les min et max de chaque série

for (i in listHour){
  
  result <- rbind(result, as.data.frame(t(ISDuncan(tabISeg[tabISeg$variable == i , 5:length(tabISeg)]))))
  
}

# Correction si na (à valider)
result[is.na(result)] <- 0

# Ajout des heures
result$hour <- listHour
result$hour <- gsub(".*h",'',result$hour)
result$hour <- ifelse(as.numeric(result$hour) <= 12, paste(result$hour, 'am', sep = ''), 
                             ifelse(as.numeric(result$hour) >= 24, paste((as.numeric(result$hour) - 24), 'am', sep = ''),
                                    paste((as.numeric(result$hour) - 12), 'pm', sep = '')))
result$hour[result$hour == "0am"] <- "12pm"

# Correction des noms de variable
colnames(result)[1:length(result)-1] <- colnames(tabISeg[,5:length(tabISeg)])
colnames(result)[1:length(result)-1] <- lapply(colnames(result)[1:length(result)-1],
                                               function(x){paste('Duncan', x, sep = '_')}) 

# Valeurs min et valeurs max de la série
maxDuncan <- 0 # init
minDuncan <- 1 # init

maxDuncan <- apply(result[,1:length(result)-1], MARGIN = 2, function(x){
  if(max(x) > maxDuncan){
    maxDuncan <-  max(x)
  }
})

minDuncan <- apply(result[,1:length(result)-1], MARGIN = 2, function(x){
  if(min(x) < minDuncan){
    minDuncan <-  min(x)
  }
})

dfMinMax$Duncan[dfMinMax$hour == "min"] <- min(minDuncan)
dfMinMax$Duncan[dfMinMax$hour == "max"] <- max(maxDuncan)

## MORAN
# Shp pour Moran
shpSectMoran <- readOGR(dsn = "Donnees Carto/EGT2010_SECTEURS_DIS.shp", layer = "EGT2010_SECTEURS_DIS", encoding = "utf8", stringsAsFactors=FALSE,drop_unsupported_fields = FALSE)

# Création d'un tableau vide
result2 <- data.frame("hour" = '', "var" = '', "moran" = numeric(24))

for (i in listHour){
  
  # Trier les données
  dataMoran <- filter(prsem_Var_Sec2, variable == i)
  
  # Joindre avec le shp
  dataMoran <- merge(shpSectMoran, dataMoran, by.x = 'SECT_EGT', by.y = 'code_sec')
  
  # Calcul des paramètres
  nbSecteurs <- poly2nb(pl = dataMoran,
                        row.names = dataMoran@data$SECT_EGT,
                        snap = 50,
                        queen = TRUE)
  
  # Calcul de l'indice de Moran
  for (j in colnames(dataMoran@data[,10:length(dataMoran@data)])){
   
     Moran <- moran.mc(x = dataMoran@data[[j]],
                      listw = nb2listw(nbSecteurs), nsim=1000)
     
     result2 <- rbind(result2, data.frame("hour" = i,
                                             "var" = j,
                                             "moran" = Moran$statistic,
                                          stringsAsFactors = F))
    
  }

    
}

# Correction si na (à valider)
result2[is.na(result2)] <- 0

# Mise en forme
result2 <- filter(result2, hour != '') # suppression des lignes vides

# préparation à la mise en forme des heures
result2$hour <- gsub(".*h",'',result2$hour)

# mise en forme des heures
result2$hour <- ifelse(as.numeric(result2$hour) <= 12, paste(result2$hour, 'am', sep = ''), 
                      ifelse(as.numeric(result2$hour) >= 24, paste((as.numeric(result2$hour) - 24), 'am', sep = ''),
                             paste((as.numeric(result2$hour) - 12), 'pm', sep = '')))
result2$hour[result2$hour == "0am"] <- "12pm"

# wide
result2 <- spread(result2, key = var, value = moran)

# changement du nom des colonnes
colnames(result2)[2:length(result2)] <- lapply(colnames(result2)[2:length(result2)],
                                              function(x){paste('Moran', x, sep = '_')})

# Valeurs min et valeurs max de la série
maxMoran <- -10 # init
minMoran <- 10 # init

maxMoran <- apply(result2[,2:length(result2)], MARGIN = 2, function(x){
  if(max(x) > maxMoran){
    maxMoran <-  max(x)
  }
})

minMoran <- apply(result2[,2:length(result2)], MARGIN = 2, function(x){
  if(min(x) < minMoran){
    minMoran <-  min(x)
  }
})

dfMinMax$Moran[dfMinMax$hour == "min"] <- min(minMoran)
dfMinMax$Moran[dfMinMax$hour == "max"] <- max(maxMoran)

## Jointure avec les indices de Duncan
segregIDF <- merge(result, result2, by = 'hour')

## EXPORT par modalité
for (i in 1:nbMod){
  
  indic <- paste(nomVar, i, sep = '')
  
  dataToX <- select(segregIDF, hour, matches(indic))
  colnames(dataToX)[2:3] <- c("Duncan", "Moran")
  dataToX <- rbind(dfMinMax, dataToX)
  
  # reorder
  desired_order <- c("min", "max", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")
  dataToX$hour <- factor( as.character(dataToX$hour), levels=desired_order )
  dataToX <- dataToX[order(dataToX$hour),]
  
  write.table(dataToX, paste("htdocs/", nomVar, i ,"_choro/data/dataIDF.csv", sep = ''), row.names = F, sep = ',', dec = '.')
  write.table(dataToX, paste("htdocs/", nomVar, i ,"_prop/data/dataIDF.csv", sep = ''), row.names = F, sep = ',', dec = '.')
  
}

#######################################################################################################################
## CALCUL DES GRAPHIQUES STACKED
library(tidyr)

# 1. Choro
# Création d'un tableau pour la construction d'histogrammes en aires empilées (stacked area chart)
listData <- list()

for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_choro", sep = ""),
         read.csv2(paste("htdocs/", nomVar, i, "_choro/data/dataSect.csv", sep =""), sep = ";", stringsAsFactors = F))
  
  listData[[i]] <- eval(parse(text = paste("dataSect", i, "_choro", sep = "")))
  
}

listData <- lapply(listData, function(x){
  
  # Filter out min and max
  x <- filter(x, hour != "min" & hour != "max")
  
  # From wide to long
  x <- gather(x, secteur, value, X7501 : X9513)
  
  # Changer le nom des colonnes
  x$secteur <- gsub("X", "", x$secteur) 
  
  # Convertir les valeur en numériques
  x$value <- as.numeric(x$value)
  
  # Retourne les tableaux
  return(x)
})

# On récupère les dataframes
for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_choro", sep = ""), listData[[i]])
  
}

# On les joint
#listData <- list(dataSect1_choro, dataSect2_choro, dataSect3_choro, dataSect4_choro)

# Jointure des dataframes
tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
varColNames <- character()
for (i in 1:nbMod){varColNames <- c(varColNames, paste(nomVar, i, sep = ""))}
colnames(tabFin) <- c("district", "hour", varColNames)

# Sort tableau
desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")
tabFin$hour <- factor( as.character(tabFin$hour), levels=desired_order )
tabFin <- tabFin[order(tabFin$hour),]

# Export
write.table(tabFin, paste("htdocs/stacked/", nomVar, "_choro_stacked.csv", sep = ""), row.names = F, sep = ",", dec = ".")

# 2. Prop
# Création d'un tableau pour la construction d'histogrammes en aires empilées (stacked area chart)
listData <- list()

for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_prop", sep = ""),
         read.csv2(paste("htdocs/", nomVar, i, "_prop/data/dataSect.csv", sep =""), sep = ";", stringsAsFactors = F))
  
  listData[[i]] <- eval(parse(text = paste("dataSect", i, "_prop", sep = "")))
  
}

listData <- lapply(listData, function(x){
  
  # Filter out min and max
  x <- filter(x, hour != "min" & hour != "max")
  
  # From wide to long
  x <- gather(x, secteur, value, X7501 : X9513)
  
  # Changer le nom des colonnes
  x$secteur <- gsub("X", "", x$secteur) 
  
  # Convertir les valeur en numériques
  x$value <- as.numeric(x$value)
  
  # Retourne les tableaux
  return(x)
})

# On récupère les dataframes
for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_prop", sep = ""), listData[[i]])
  
}

# On les joint
#listData <- list(dataSect1_prop, dataSect2_prop, dataSect3_prop, dataSect4_prop)

# Jointure des dataframes
tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
varColNames <- character()
for (i in 1:nbMod){varColNames <- c(varColNames, paste(nomVar, i, sep = ""))}
colnames(tabFin) <- c("district", "hour", varColNames)

# Sort tableau
desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")
tabFin$hour <- factor( as.character(tabFin$hour), levels=desired_order )
tabFin <- tabFin[order(tabFin$hour),]

# Export
write.table(tabFin, paste("htdocs/stacked/", nomVar, "_prop_stacked.csv", sep = ""), row.names = F, sep = ",", dec = ".")

# 3. Oursins
# Création d'un tableau pour la construction d'histogrammes en aires empilées (stacked area chart)
listData <- list()

for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_flow", sep = ""),
         read.csv2(paste("htdocs/", nomVar, i, "_flow/data/dataSect.csv", sep =""), sep = ";", stringsAsFactors = F))
  
  listData[[i]] <- eval(parse(text = paste("dataSect", i, "_flow", sep = "")))
  
}

listData <- lapply(listData, function(x){
  
  # Filter out min and max
  x <- filter(x, hour != "min" & hour != "max")
  
  # From wide to long
  x <- gather(x, secteur, value, eval(parse(text = colnames(x)[2])) : eval(parse(text = colnames(x)[length(x)])))
  
  # Changer le nom des colonnes
  x$secteur <- gsub("X", "", x$secteur) 
  
  # Convertir les valeurs en numérique
  x$value <- as.numeric(x$value)
  
  # Retourne les tableaux
  return(x)
})

# On récupère les dataframes
for (i in 1:nbMod){
  
  assign(paste("dataSect", i, "_flow", sep = ""), listData[[i]])
  
}

# Jointure des dataframes
tabFin <- Reduce(function(x, y) merge(x, y, by = c("secteur", "hour"), all=TRUE), listData)
varColNames <- character()
for (i in 1:nbMod){varColNames <- c(varColNames, paste(nomVar, i, sep = ""))}
colnames(tabFin) <- c("district", "hour", varColNames)

# Sort tableau
desired_order <- c("4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am")
tabFin$hour <- factor( as.character(tabFin$hour), levels=desired_order )
tabFin <- tabFin[order(tabFin$hour),]
tabFin[is.na(tabFin)] <- 0 
  
# Export
write.table(tabFin, paste("htdocs/stacked/", nomVar, "_flow_stacked.csv", sep = ""), row.names = F, sep = ",", dec = ".")
