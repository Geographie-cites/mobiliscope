# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                    script
#            Adaptation du script de AD pour les villes du Québec
# 
# juillet 2019 - EV
# ================================================================================#


# Chargement des bibliothèques 
library(tidyverse)
library(sf)
library(reshape2)
library(data.table)
library(geojsonio)
library(OasisR)
library(spdep)
library(rgdal)
library(spdplyr)
library(geojsonlint)
library(tibble)

# Chargement des fonctions de création des fichiers htdocs et INDIC
suppressWarnings(source("2-prepa_data/scriptsr/4_p2m_fct.R"))

# Sélection d'une enquête 
nomEnq <- "TROIS-RIVIERES"

# Chargement de la table des présences 
load(paste("2-prepa_data/data/table_presence_", nomEnq, ".RDS", sep = ""))

# Chargement de la couche des secteurs modifiée 
sfSec <- st_read(paste("2-prepa_data/shp/SM_", nomEnq, ".shp", sep = ""), stringsAsFactors = F)
sfSec <- sfSec %>% 
  transmute(Secteur_EM, geometry, CENTROID_X, CENTROID_Y)


# Chargement des libellés 
#à créer pour chaque enquete, attention à la casse des libellés !
libSect <- read_delim(paste("2-prepa_data/txt/", nomEnq, "/LIB_SEC_", nomEnq,".csv", sep = ""), 
                      delim = ";", escape_double = FALSE, col_types = cols(Secteur_EM = col_character(), LIB = col_character()), trim_ws = TRUE)

colnames(libSect) <- c("Secteur_EM", "LIB")
libSect$LIB <- toupper(libSect$LIB)


### recodage des secteurs
# pour Ottawa-Gatineau, les secteurs sont déjà des chaînes de caractères de 3 chiffres donc changement des secteurs de libSect
if (nomEnq == "OTTAWA-GATINEAU"){
  libSect <- libSect %>%
    mutate(Secteur_EM = plyr::mapvalues(Secteur_EM, c("1","50"),
                                      c( "001","050")))
}


#pour Quebec, on renomme tous les secteurs avec des virgules
if (nomEnq == "QUEBEC"){
  
  prezTable$RES_SEC <- as.character(prezTable$RES_SEC)
  

  prezTable <- prezTable %>%
      mutate(CODE_SEC = plyr::mapvalues(CODE_SEC, c("2.1","2.2","8.1","9.1","22.1","57.1","58.1"),
                                        c( "70","71","72", "73", "74", "75", "76")),
             RES_SEC = plyr::mapvalues(RES_SEC, c("2.1","2.2","8.1","9.1","22.1","57.1","58.1"),
                                       c( "70","71","72", "73", "74", "75", "76")))

  sfSec <- sfSec %>%
    mutate(Secteur_EM = plyr::mapvalues(Secteur_EM, c("2.1","2.2","8.1","9.1","22.1","57.1","58.1"),
                                      c( "70","71","72", "73", "74", "75", "76")))

  
  libSect <- libSect %>%
    mutate(Secteur_EM = plyr::mapvalues(Secteur_EM, c("2.1","2.2","8.1","9.1","22.1","57.1","58.1"),
                                         c( "70","71","72", "73", "74", "75", "76")))

  
  
}

## Jointure des libellés
sfSec <- left_join(sfSec, libSect, by = "Secteur_EM")
sfSec <- sfSec %>% 
  transmute(Secteur_EM , LIB, geometry, CENTROID_X, CENTROID_Y)
rm(libSect)

for (i in 1:length(sfSec$Secteur_EM)){
     sfSec$Secteur_EM[i] = ifelse(nchar(sfSec$Secteur_EM[i]) == 2, str_c("0", sfSec$Secteur_EM[i]),
                                ifelse(nchar(sfSec$Secteur_EM[i]) == 1, str_c("00", sfSec$Secteur_EM[i]),
                                       sfSec$Secteur_EM[i]))
}

# Création des répertoires "stacked" et "indice_segreg"
dir.create(paste("www/data/",nomEnq, sep = ''))
dir.create(paste("www/data/",nomEnq,"/stacked", sep = ''))
dir.create(paste("www/data/",nomEnq,"/indice_segreg", sep = ''))


# 1. Sélection des présences autonomes et stationnaires et transfo de la table au format large 
prez_wide_h <- prepPrezWide(data = prezTable)

# standardisation des noms des secteurs : étape très longue mais importante pour les cartes en oursins
# toutes sauf ottawa-gatineau et montréal

for (i in 1:length(prez_wide_h$CODE_SEC)){
   prez_wide_h$CODE_SEC[i] <- ifelse(nchar(prez_wide_h$CODE_SEC[i]) == 1, str_c("00", prez_wide_h$CODE_SEC[i]),
                                     ifelse(nchar(prez_wide_h$CODE_SEC[i]) == 2, str_c("0", prez_wide_h$CODE_SEC[i]),
                                            prez_wide_h$CODE_SEC[i]))
   prez_wide_h$RES_SEC[i] <- ifelse(nchar(prez_wide_h$RES_SEC[i]) == 1, str_c("00", prez_wide_h$RES_SEC[i]),
                                    ifelse(nchar(prez_wide_h$RES_SEC[i]) == 2, str_c("0", prez_wide_h$RES_SEC[i]),
                                           prez_wide_h$RES_SEC[i]))
 }

# pour Ottawa-Gatineau

if (nomEnq == "OTTAWA-GATINEAU"){

  prez_wide_h <- prez_wide_h %>%
    mutate(CODE_SEC = plyr::mapvalues(CODE_SEC, c("1","50"),
                                        c( "001","050")),
             RES_SEC = plyr::mapvalues(RES_SEC, c("1","50"),
                                        c( "001","050")))
}


# vérification : on enlève les variables hors zone d'enquête 


if (nomEnq == "SAGUENAY"){
  prez_wide_h <-  filter(prez_wide_h, CODE_SEC != 22)
}

if (nomEnq == "TROIS-RIVIERES" | nomEnq == "SHERBROOKE"){
  prez_wide_h <-  filter(prez_wide_h, CODE_SEC != 29)
}

if (nomEnq == "QUEBEC"){
  prez_wide_h <-  filter(prez_wide_h, CODE_SEC != 69)
}


# 2. INDICATEUR "WHOLE POPULATION" 
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

# 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN) (pour l'instant, Moran commenté)
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



## 3c. STATUT D'OCCUPATION # attention au nb de modalités (toujours tester (unique(prez_wide_h$OCC) et enlever 1 ou 2 à nbMod)
nbMod <- length(unique(prez_wide_h$OCC))
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




## 3e. ACTIVITE (attention -2 car activité 6 laissée de côté, et -1 pour certaines villes car pas de MOTIF == NA)
nbMod <- length(unique(prez_wide_h$MOTIF)) - 1
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



## 3f. MODE DE TRANSPORT
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



## 3g. REVENU 
nbMod <- length(unique(prez_wide_h$REVENU))
nomIndic <- "rev"
indicateur <- prez_wide_h$REVENU

prezStock <- prepStock_rev(nomEnq)
prezPart <- prepPart_rev(pvs = prezStock)
prezNR <- prepNR_rev()

# 4. CREATION DES FICHIERS POUR LA CARTOGRAPHIE ET LE GRAPHIQUE "SIMPLE" :
createFiles(nbMod, indicateur, nomIndic, nomEnq, 
            pvs = prezStock, pvs2 = prezPart, pvs3 = prezNR)

# 5. CREATION DES FICHIERS POUR LE GRAPHIQUE SEGREGATION (INDICES DE DUNCAN ET DE MORAN)
createISeg(nbMod, nomIndic, nomEnq, pvs = prezStock, pvs2 = prezPart)

# 6. CREATION DES FICHIERS POUR LE GRAPHIQUE "STACKED"
createStacked(nbMod, nomIndic, nomEnq)



