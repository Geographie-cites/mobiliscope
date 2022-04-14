# ================================================================================#
#                 Construction de la base de données des présences 
# 
#
# Description : A partir de la BD Mobiliscope, création des tables de présence où
#               chaque ligne correspond à une présence géographique (secteur) et à
#               une heure de la journée et où chaque présence est caractérisée par
#               le profil socio-démographique de la personne enquêtée
#
# En entrée : BD MOBILISCOPE
# En sortie : BD présence
#
# avril 2018 - AD
# rv en juillet 2020
# rv fev. 2021 pour inclure Canada
# ================================================================================#


# Attention, ce script a été écrit pour le serveur humanum ; en local, risque de plantage

# Humanum
setwd("~/R/mobiliscope")

# Chargement des bibliothèques
library(stringr)
library(lubridate)
library(foreach)
library(readr)
library(tidyverse)
library(tidylog)


# ---- Chargement des données ---- 

# Chargement de la BD mobiliscope
tripTable <- readRDS("03_PREPA_DATA/data/bd/02_bdm/BD_mobiliscope_depl.RDS")
indTable <- readRDS("03_PREPA_DATA/data/bd/02_bdm/BD_mobiliscope_pers.RDS")

tripTable <- tripTable %>% mutate(PAYS = "FR")
indTable <- indTable %>% mutate(PAYS = "FR")

# Canada
tripTable_can <- readRDS("03_PREPA_DATA/data/bd/02_bdm/BD_mobiliscope_depl_can.RDS")
indTable_can <- readRDS("03_PREPA_DATA/data/bd/02_bdm/BD_mobiliscope_pers_can.RDS")

tripTable_can <- tripTable_can %>% mutate(PAYS = "CA")
indTable_can <- indTable_can %>% mutate(PAYS = "CA")

# combine
tripTable <- tripTable %>% 
  bind_rows(., tripTable_can) %>% 
  arrange(ENQUETE, ID_IND, NDEP) 

indTable <-indTable %>% 
  bind_rows(., indTable_can) %>% 
  arrange(ENQUETE, ID_IND) 

rm(indTable_can, tripTable_can)

# Chargement des fonctions 
suppressWarnings(source("03_PREPA_DATA/scriptsr/3_bdm2presence_fct.R"))

## !!!!! Attention, présence des deux millésimes de Valenciennes, utiliser la variable LIB_ED


# Nombre d'individus par enquête dans table déplacement
nbPers <- tripTable %>% 
  filter(!duplicated(ID_IND)) %>% 
  group_by(PAYS, ENQUETE, LIB_ED) %>% 
  summarise(NB_PERS = n()) %>% 
  arrange(NB_PERS)


# ---- Création des tables de présences ----

##~ 1. enquêtes avec un max de 10 000 individus dans la table de déplacement ----

### 1.a Plusieurs enquêtes 
. <- nbPers %>% filter(NB_PERS < 10100) %>% select(LIB_ED) 
(enq10000 <- sort(.$LIB_ED))
for (i in enq10000) {
  prezTable <- createPrez_10000(libED = i)
}

### 1.b ou une seule enquête (Rennes = 7 minutes)
prezTable <- createPrez_10000(libED = "Valenciennes, 2011")


##~ 2. enquêtes avec entre 10 000 et 20 000 individus dans la table déplacement ---- 

### 2.a Plusieurs enquêtes 
. <- nbPers %>% filter(NB_PERS > 10100 & NB_PERS < 20000) %>% select(LIB_ED) 
(enq20000 <- sort(.$LIB_ED))
for (i in enq20000) {
  prezTable <- createPrez_20000(libED = i)
}

### 2.b ou une seule enquête (Nantes = 10 min)
prezTable <- createPrez_20000(libED = "Sherbrooke, 2012")


##~ 3. enquêtes avec entre 20 000 et 30 000 individus dans la table déplacement ----

### 3.a Plusieurs enquêtes 
. <- nbPers %>% filter(NB_PERS > 20000) %>% select(LIB_ED)
(enq30000 <- sort(.$LIB_ED))
for (i in enq30000) {
  prezTable <- createPrez_30000(libED = i)
}

### 3.b ou une seule enquête (Paris ~ 19 min)
prezTable <- createPrez_30000(libED = "Paris, 2010")


##~ 4. enquêtes du Québec et de Ottawa ----
## entre 40 000 et 50 000 individus dans la table déplacement 

### 4.a Plusieurs enquêtes 
. <- nbPers %>% filter(NB_PERS > 40000 & NB_PERS < 50000) %>% select(LIB_ED)
(enq40000 <- sort(.$LIB_ED))
for (i in enq40000) {
  prezTable <- createPrez_40000(libED = i)
}

### 4.b ou une seule enquête 
prezTable <- createPrez_40000(libED = "Ottawa-Gatineau, 2011")


##~ 5. enquêtes de Montréal ----
## plus de 100 000 individus (1 heure)
prezTable <- createPrez_mtl(libED = "Montréal, 2013")


rm(indTable, nbPers, prezTable, tripTable)
rm(enq10000, enq20000, enq30000, enq40000, i)


# ---- Compilation des toutes les tables de présence ----

## load tables présence
listdf <- list()
for (i in list.files("03_PREPA_DATA/data/bd/03_presence/")){
  prez <- readRDS(paste0("03_PREPA_DATA/data/bd/03_presence/", i))
  listdf[[i]] <- as.data.frame(prez)
  rm(prez)
}


## Compilation 
prez <- bind_rows(listdf, .id = "namePrez")




# ---- Sauvegarde de la table de présence ----
prez <- prez %>% 
  select(-namePrez) %>% 
  arrange(LIB_ED)


# ajout variable pays
prez <- prez %>% 
  mutate(PAYS = case_when(ENQUETE %in% c("MONTREAL", "OTTAWA GATINEAU", "QUEBEC", 
                                         "SAGUENAY", "SHERBROOKE", "TROIS RIVIERES") ~ "CA",
                          TRUE ~ "FR"))

# sauvegarde
saveRDS(prez, "03_PREPA_DATA/data/bd/all/BD_presence_humanum.RDS")


