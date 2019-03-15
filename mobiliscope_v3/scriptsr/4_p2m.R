# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                    script
#    Adaptation du script de Constance Lecomte (prepa_data_Mobiliscope_P2.R)
# 
# avril 2018 - AD
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



# Chargement des fonctions de création des fichiers htdocs et INDIC
suppressWarnings(source("scriptsr/4_p2m_fct.R"))

# Sélection d'une enquête 
nomEnq <- "MONTPELLIER"

# Chargement de la table des présences 
load("scriptsr/data/table_presence.RDS")

# Chargement de la couche des secteurs (de toutes les ED)
sfSec <- st_read("scriptsr/shp/SEC_MONTPELLIER_W84.shp", stringsAsFactors = F) 

# Chargement des libellés 
libSect <- read_delim(paste("scriptsr/txt/LIB_SEC_", nomEnq,".csv", sep = ""), 
                      delim = ";", escape_double = FALSE, col_types = cols(Secteur_EM = col_character()), trim_ws = TRUE)

## Jointure des libellés
sfSec <- left_join(sfSec, libSect, by = "Secteur_EM")

rm(libSect)

# Création des répertoires "stacked" et "indice_segreg"
dir.create(paste("mobiliscope/data/",nomEnq, sep = ''))
dir.create(paste("mobiliscope/data/",nomEnq,"/stacked", sep = ''))
dir.create(paste("mobiliscope/data/",nomEnq,"/indice_segreg", sep = ''))


# 1. Sélection des présences autonomes et stationnaires et transfo de la table au format large
prez_wide_h <- prepPrezWide(data = prezTable)

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





