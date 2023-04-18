# ================================================================================#
#                 Construction de la base de données des présences v4-2
# 
#
# Description : 1. A partir de la BD Mobiliscope, création des tables de présence où
#               chaque ligne correspond à une présence géographique (secteur) et 
#               temporelle (une heure de la journée) et où chaque présence est 
#               caractérisée par le profil socio-démo de la personne enquêtée
#               2. création pour chaque ville d'une base "utile" pour le MobiliQuest 
#               sans doublons, filtrée et au format long 
#       
#
# En entrée : BD_mobiliscope_depl et BD_mobiliscope_pers
# En sortie : BD_presence et BD_presence_utile_ville
#
# avril 2018 - AD
# rv en juillet 2020
# rv fev. 2021 pour inclure Canada
# rv juin 2021 intégration des villes sud-américaines
# oct. 2021 : correction des variables H4...H27 + calcul parallèle
# mars 2022 : réécriture complète de la fonction createPrez 
#            (foreach loop to purrr)
# aout 2022 : ajout de la fonction createPrezLong 
# sept 2022 : nom d'enquête en slug pour les sorties presence_utile
# ================================================================================#



# Bibliothèque
library(tidyverse)
library(tidylog)
library(lubridate)



# ==== 1. BD_presence ====

# ~ Chargement des données ---- 

# ! le dossier data ne contient qu'un extrait de la BD Mobiliscope
# les données en open data sont signalés ici : 
# https://mobiliscope.cnrs.fr/fr/info/methods/data
dirIn <- "data/BD_mobiliscope/"

# Chargement de la BD mobiliscope
## France
tripTable <- readRDS(paste0(dirIn, "BD_mobiliscope_depl_nantes.RDS"))
indTable <- readRDS(paste0(dirIn, "BD_mobiliscope_pers_nantes.RDS"))

tripTable <- tripTable %>% 
  mutate(PAYS = "FR") %>%
  arrange(PAYS, ENQUETE, ID_IND, NDEP)
indTable <- indTable %>% 
  mutate(PAYS = "FR") %>%
  arrange(PAYS, ENQUETE, ID_IND)




# ~ Sortie des tables de présences ---- 

# Chargement de la fonction 
suppressWarnings(source("1_bdm2presence_fct.R"))

# dossier de sortie temporaire
dirOut <- "data/BD_presence/"

dirOut_temp <- paste0(dirOut, "multiTables/")
dir.create(dirOut_temp)

# sortir une table, exemple Nantes :
createPrez(libED = "Nantes, 2015", tripTable, indTable, chemin = dirOut_temp)


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
cl <- makeCluster(cores-2) # ! not overload your server
registerDoParallel(cl)

T1<-Sys.time()
foreach(i = enq, .packages = myPck) %dopar% {
  
  createPrez(libED = i, tripTable, indTable, chemin = dirOut_temp) # calling function
  
}
## stop cluster
stopCluster(cl)

## process time = Tdiff
T2 <- Sys.time()
Tdiff = difftime(T2, T1) 



# ~ Compilation des tables de présences et sauvegarde ---- 

# load tables présence
listdf <- list()
for (i in list.files(dirOut_temp)){
  prezTable <- readRDS(paste0(dirOut_temp, i))
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
saveRDS(prezTable, paste0(dirOut, "BD_presence.RDS"))

# suppression de multiTables
unlink(dirOut_temp, recursive = TRUE)



# ==== 2. BD_presence_utile ====

# load BD_presence
prezTable <- readRDS(paste0(dirOut, "BD_presence.RDS"))

# recode Valenciennes 2011
prezTable <- prezTable %>% 
  mutate(ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                             TRUE ~ ENQUETE))

# Chargement de la fonction 
suppressWarnings(source("1_bdm2presence_fct.R"))

# dossier de sortie
dirOut_utile <- "data/BD_presence_utile/"
dir.create(dirOut_utile)


# sortir une table, exemple Nantes :
createPrezLong(prezTable, chemin = dirOut_utile, enquete = "NANTES")


# sortir plusieurs tables :
## calcul parallèle 
require(foreach)
require(doParallel)

## choix des enquêtes
enq <- unique(prezTable$ENQUETE)

## packages utilisés  
myPck <- as.vector(.packages())

## setup parallel backend to use many processors
cores <- detectCores()
cl <- makeCluster(cores-2) # ! not overload your server
registerDoParallel(cl)

T1<-Sys.time()
foreach(i = enq, .packages = myPck) %dopar% {
  
  createPrezLong(prezTable, chemin = dirOut_utile, enquete = i) #calling function
  
}
## stop cluster
stopCluster(cl)

## process time = Tdiff
T2<-Sys.time()
(Tdiff= difftime(T2, T1))

