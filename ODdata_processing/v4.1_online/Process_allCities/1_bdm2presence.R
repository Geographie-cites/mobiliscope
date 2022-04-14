# ================================================================================#
#                 Construction de la base de données des présences 
# 
#
# Description : A partir de la BD Mobiliscope, création des tables de présence où
#               chaque ligne correspond à une présence géographique (secteur) et 
#               temporelle (une heure de la journée) et où chaque présence est 
#               caractérisée par le profil socio-démo de la personne enquêtée
#       
#
# En entrée : BD_mobiliscope_depl et BD_mobiliscope_pers
# En sortie : BD_presence 
#
# avril 2018 - AD
# rv en juillet 2020
# rv fev. 2021 pour inclure Canada
# rv juin 2021 intégration des villes sud-américaines
# oct. 2021 : correction des variables H4...H27 + calcul parallèle
# mars 2022 : réécriture de la fonction createPrez 
#            (foreach loop -> purrr)
# ================================================================================#

# work directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1_online/Process_allCities/")

# Bibliothèque
library(tidyverse)
library(tidylog)
library(lubridate)




# Chargement des données ---- 

# Chargement de la BD mobiliscope
## France
tripTable_fr <- readRDS("BD_mobiliscope_depl.RDS")
indTable_fr <- readRDS("BD_mobiliscope_pers.RDS")

tripTable_fr <- tripTable_fr %>% mutate(PAYS = "FR")
indTable_fr <- indTable_fr %>% mutate(PAYS = "FR")

## Canada
tripTable_can <- readRDS("BD_mobiliscope_depl_can.RDS")
indTable_can <- readRDS("BD_mobiliscope_pers_can.RDS")

tripTable_can <- tripTable_can %>% mutate(PAYS = "CA")
indTable_can <- indTable_can %>% mutate(PAYS = "CA")

## Amérique du Sud
tripTable_as <- readRDS("../Preprocessing_LatinAmericaCities/data/BD_mobiliscope_depl_as.rds")
indTable_as <- readRDS("../Preprocessing_LatinAmericaCities/data/BD_mobiliscope_pers_as.rds")

tripTable_as <- tripTable_as %>% mutate(PAYS = "AS")
indTable_as <- indTable_as %>% mutate(PAYS = "AS")


# combine
tripTable <- tripTable_fr %>%
  bind_rows(., tripTable_can, tripTable_as) %>%
  arrange(PAYS, ENQUETE, ID_IND, NDEP)

indTable <-indTable_fr %>%
  bind_rows(., indTable_can, indTable_as) %>%
  arrange(PAYS, ENQUETE, ID_IND)

rm(indTable_can, tripTable_can, indTable_as, tripTable_as, tripTable_fr, indTable_fr)



# Sortie des tables de présences ---- 

# Chargement de la fonction 
suppressWarnings(source("1_bdm2presence_fct.R"))

# dossier de sortie
chemin <- "data/multiTables/"
dir.create(chemin)

# chemin vers table zf/qpv
cheminQP <- "txt/table_resZF_qpv_utf8.csv"



# sortir une table :
## utiliser LIB_ED : "Nom, année" car 2 millésimes pour Valenciennes
createPrez(libED = "Albi, 2011", tripTable, indTable, chemin)



# sortir plusieurs tables :
## calcul parallèle 
require(foreach)
require(doParallel)

## choix des enquêtes
enq <- unique(tripTable$LIB_ED)

## packages utilisés  
myPck <- as.vector(.packages())

## setup parallel backend to use many processors
cores <- detectCores()
cl <- makeCluster(cores[1]-2) # ! not overload your server
registerDoParallel(cl)

T1<-Sys.time()
foreach(i = enq, .packages = myPck) %dopar% {
  
  createPrez(libED = i, tripTable, indTable, chemin) #calling function
  
}
## stop cluster
stopCluster(cl)

## process time = Tdiff
T2<-Sys.time()
Tdiff= difftime(T2, T1) 




# Compilation des tables de présences et sauvegarde ---- 

# load tables présence
listdf <- list()
for (i in list.files(chemin)){
  prezTable <- readRDS(paste0(chemin, i))
  listdf[[i]] <- as.data.frame(prezTable)
  rm(prezTable)
}
# Compilation 
prezTable <- bind_rows(listdf, .id = "nameFile")

prezTable <- prezTable %>% 
  select(-nameFile) %>% 
  arrange(PAYS, LIB_ED) %>% 
  relocate(PAYS)

# sauvegarde
saveRDS(prezTable, "data/BD_presence.RDS")

# suppression de multiTables
unlink(chemin, recursive = TRUE)



