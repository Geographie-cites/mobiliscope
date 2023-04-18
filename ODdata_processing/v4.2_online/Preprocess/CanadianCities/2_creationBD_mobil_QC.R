# ================================================================================#
#               Construction de la base de données du Mobiliscope 
#                               pour les eod du Québec
#           Adaptation des scripts 1_text2r.R et 2_createBDmobil.R de AD
#
# mai 2019 - EV
# reprise jan. 2021 - AD
# jan. 2022 : ajout de la variable STRM (composition du ménage) construite dans
#  explo_structureMen_frca.rmd - AD
# ================================================================================#


# set working directory
setwd("")

# Chargement des bibliothèques
library(stringr)
library(TraMineR)
library(plyr) # mapvalues
library(tidylog)
library(tidyverse)
library(Hmisc)



# 1. Création de la table des déplacements ----

##~ Chargement de la BD des EOD avec heure d'arrivée corrigée ----
# cf. script 1_pretraitements_QC.R
tripTable <- readRDS("BD_eod_meth_ha.RDS")

# Sélection des personnes ayant réalisées au moins un déplacement (mobil = 1)
# et avec des heures ok
ind_na <- tripTable %>% 
  filter(mobil != "1" | is.na(duree))
ind_na <- sort(unique(ind_na$clepersonne))

tripTable <- tripTable %>% 
  filter(!clepersonne %in% ind_na)

##~ Identifiants ----
tripTable <- tripTable %>% 
  mutate(ANNEE = case_when(ENQUETE == "MONTREAL" ~ "2013",
                           ENQUETE == "OTTAWA GATINEAU" ~ "2011",
                           ENQUETE == "QUEBEC" ~ "2011",
                           ENQUETE == "SAGUENAY" ~ "2015",
                           ENQUETE == "SHERBROOKE" ~ "2012",
                           ENQUETE == "TROIS RIVIERES" ~ "2011"),
         
         ENQUETE_MIN = case_when(ENQUETE == "MONTREAL" ~ "Montréal",
                                 ENQUETE == "OTTAWA GATINEAU" ~ "Ottawa-Gatineau",
                                 ENQUETE == "QUEBEC" ~ "Québec",
                                 ENQUETE == "SAGUENAY" ~ "Saguenay",
                                 ENQUETE == "SHERBROOKE" ~ "Sherbrooke",
                                 ENQUETE == "TROIS RIVIERES" ~ "Trois-Rivières"),
         
         IDD4 = case_when(ENQUETE == "MONTREAL" ~ "66023",
                          ENQUETE == "OTTAWA GATINEAU" ~ "81017",
                          ENQUETE == "QUEBEC" ~ "23027",
                          ENQUETE == "SAGUENAY" ~ "94068",
                          ENQUETE == "SHERBROOKE" ~ "43027",
                          ENQUETE == "TROIS RIVIERES" ~ "37067"),
         
         clepersonne = str_sub(clepersonne, end = -5))

tripTable <- tripTable %>% 
  mutate(ID_IND = paste0(IDD4, "_", clepersonne),
         ID_ED = paste0(IDD4, "_", ANNEE),
         LIB_ED = paste0(ENQUETE_MIN, ", ", ANNEE)) %>% 
  relocate(c("ID_IND", "ID_ED", "LIB_ED", "ENQUETE"))

## Sélection des variables utiles
tripTable <- tripTable %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE,
            NDEP = as.character(nodep),
            RES_SEC = smlog,
            O_SEC = smori,
            D_SEC = smdes,
            D4 = hredep,
            D8 = hrearv,
            H_START = hhdep,
            M_START = mmdep,
            H_END = hharv,
            M_END = mmarv,
            D9 = duree,
            D2A = motifO,
            D5A = motif,
            MODE = modep,
            METH_HA = meth_ha)

## longueur de NDEP
tripTable <- tripTable %>% 
  mutate(NDEP = case_when(nchar(NDEP)==1 ~ paste0("0", NDEP),
                          TRUE ~ NDEP)) 

##~ Création des variables motif de déplacement ----
## O_PURPOSE et D_PURPOSE (D2A et D5A en 6 modalités)
## 1 : domicile ; 2 : travail ; 3 : études ; 4 : achats ; 5 : loisirs ; 6 : autre
correspMotif <- read.csv2("correspondance_motif_can.csv",
                          encoding = "UTF-8", colClasses = c(rep("character", 2)))

tripTable <- left_join(x = tripTable, 
                       y = select(correspMotif, ENQUETE, D2A = D2A_D5A, O_PURPOSE = PURPOSE), 
                       by = c("ENQUETE", "D2A"))
tripTable <- left_join(x = tripTable, 
                       y = select(correspMotif, ENQUETE, D5A = D2A_D5A, D_PURPOSE = PURPOSE), 
                       by = c("ENQUETE", "D5A"))
rm(correspMotif)
 

##~ Mode adhérant  ----
## 1: mode adhérant ; 0: mode non adhérant
tripTable <- tripTable %>% 
  mutate(MODE_ADH = case_when(MODE == "3" ~ 1,
                              MODE %in% c("1", "2") ~ 0))


##~ Sauvegarde ----

## Mise en forme
tripTable <- tripTable %>%
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            NDEP, RES_SEC, O_SEC, D_SEC, 
            H_START, M_START, H_END, M_END, D9,
            D2 = D2A, O_PURPOSE, D5 = D5A, D_PURPOSE, 
            MODE, MODE_ADH, METH_HA)

## save
saveRDS(tripTable, "BD_mobiliscope_depl_can.RDS")



# 2. Création de la nouvelle table des personnes ----

##~ Chargement de la BD des EOD avec heure d'arrivée corrigée ----
# cf. script 1_pretraitements_QC.R
indTable <- readRDS("BD_eod_meth_ha.RDS")

## Sélection des personnes ayant réalisées au moins un déplacement (mobil = 1) 
## avec des heures ok
## et des personnes qui sont restées à domicile (mobil =2)
ind_na <- indTable %>% 
  mutate(duree = case_when(meth_ha == "0" ~ 9999,
                           TRUE ~ duree)) %>% 
  filter(!mobil %in% c("1", "2") | is.na(duree)) %>% 
  relocate(duree, meth_ha)
ind_na <- sort(unique(ind_na$clepersonne))

indTable <- indTable %>% 
  mutate(duree = case_when(meth_ha == "0" ~ 9999,
                              TRUE ~ duree)) %>% 
  filter(!clepersonne %in% ind_na)

##~ Identifiants ----
indTable <- indTable %>% 
  mutate(ANNEE = case_when(ENQUETE == "MONTREAL" ~ "2013",
                           ENQUETE == "OTTAWA GATINEAU" ~ "2011",
                           ENQUETE == "QUEBEC" ~ "2011",
                           ENQUETE == "SAGUENAY" ~ "2015",
                           ENQUETE == "SHERBROOKE" ~ "2012",
                           ENQUETE == "TROIS RIVIERES" ~ "2011"),
         
         ENQUETE_MIN = case_when(ENQUETE == "MONTREAL" ~ "Montréal",
                                 ENQUETE == "OTTAWA GATINEAU" ~ "Ottawa-Gatineau",
                                 ENQUETE == "QUEBEC" ~ "Québec",
                                 ENQUETE == "SAGUENAY" ~ "Saguenay",
                                 ENQUETE == "SHERBROOKE" ~ "Sherbrooke",
                                 ENQUETE == "TROIS RIVIERES" ~ "Trois-Rivières"),
         
         IDD4 = case_when(ENQUETE == "MONTREAL" ~ "66023",
                          ENQUETE == "OTTAWA GATINEAU" ~ "81017",
                          ENQUETE == "QUEBEC" ~ "23027",
                          ENQUETE == "SAGUENAY" ~ "94068",
                          ENQUETE == "SHERBROOKE" ~ "43027",
                          ENQUETE == "TROIS RIVIERES" ~ "37067"),
         
         clepersonne = str_sub(clepersonne, end = -5))

indTable <- indTable %>% 
  mutate(ID_IND = paste0(IDD4, "_", clepersonne),
         ID_ED = paste0(IDD4, "_", ANNEE),
         LIB_ED = paste0(ENQUETE_MIN, ", ", ANNEE)) %>% 
  relocate(c("ID_IND", "ID_ED", "LIB_ED", "ENQUETE"))



## Sélection des variables utiles
indTable <- indTable %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE,
            MOBILITE = mobil,
            SEX = sexe,
            AGE = grpage,
            P9 = occper,
            RES_SEC = smlog,
            REVENU = revenu,
            REV_MED = rev_med,
            REV_AJ = rev_aj,
            REV,
            COEP = case_when(ENQUETE == "MONTREAL" ~ facper11,
                             ENQUETE != "MONTREAL" ~ facper),
            METH_HA = meth_ha,
            duree)

## Conversion numérique de COEP
indTable <- indTable %>% 
  mutate(COEP2 = str_replace(COEP, ",", "."),
         COEP2 = as.numeric(COEP2))

## Suppression des ID_IND doublons

length(unique(indTable$ID_IND))
length(unique(tripTable$ID_IND))

indTable <- indTable %>% 
  filter(!duplicated(ID_IND))


##~ Création de la variable classe d'âge (KAGE) ----
## 1 : 15-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus ; 0: 0-15

sort(unique(indTable$AGE))

indTable <- indTable %>% 
  mutate(KAGE = case_when(ENQUETE != "TROIS RIVIERES" & AGE %in% c("1", "2", "3") ~ "0",
                          ENQUETE != "TROIS RIVIERES" & AGE %in% c("4", "5") ~ "1",
                          ENQUETE != "TROIS RIVIERES" & AGE %in% c("6", "7") ~ "2",
                          ENQUETE != "TROIS RIVIERES" & as.numeric(AGE) %in% c(8:13) ~ "3",
                          ENQUETE != "TROIS RIVIERES" & as.numeric(AGE) > 13 ~ "4",
                          
                          ENQUETE == "TROIS RIVIERES" & AGE %in% c("1", "2", "3") ~ "0",
                          ENQUETE == "TROIS RIVIERES" & AGE %in% c("4", "5") ~ "1",
                          ENQUETE == "TROIS RIVIERES" & AGE %in% c("6") ~ "2",
                          ENQUETE == "TROIS RIVIERES" & as.numeric(AGE) %in% c(7:11) ~ "3",
                          ENQUETE == "TROIS RIVIERES" & as.numeric(AGE) > 11 ~ "4"))



##~ Création de la variable occupation principale (OCC) en 5 modalités ----
## 1 : active ; 2 : student ; 3 : unemployed ; 4 : retired ; 5 : inactive
correspOcc <- read.csv2("correspondance_occ_can.csv", 
                        encoding = "UTF-8", colClasses = c("character"))

indTable <- indTable %>% 
  left_join(., correspOcc, by = c("ENQUETE", "P9"))
rm(correspOcc)


##~ STRM
strm <- read.csv2("STRM_qc.csv", colClasses = "character")

strm <- strm %>% rename(STRM = STRMqc)

indTable <- indTable %>% left_join(., strm)


##~ Sauvegarde ----

## Mise en forme
indTable <- indTable %>%
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_SEC, SEX, KAGE, P9, OCC, 
            REV, STRM, 
            COEP, COEP2, W_IND = as.numeric(COEP2), 
            MOBILITE, METH_HA)

indTable <- indTable %>% select(-COEP, -COEP2)

## save
saveRDS(indTable, "BD_mobiliscope_pers_can.RDS")

    
