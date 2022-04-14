# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                
#    Adaptation du script de Constance Lecomte (prepa_data_Mobiliscope_P2.R)
# 
# avril 2018 - AD
# rv en octobre 2020
# rv en jan. 2021 pour intégration Canada
# ================================================================================#

# set working directory
setwd("")

# Chargement des bibliothèques 
library(tidylog)
library(tidyverse)
library(sf)
library(data.table) # setDT function
library(geojsonio)
library(OasisR) # Duncan
library(spdep) # Moran
library(rgdal)
library(spdplyr)



# Chargement des données en entrée ----

## table des présences 
prezTable <- readRDS("BD_presence.RDS")

## Recoder Valenciennes 2011
prezTable <- prezTable %>% 
  mutate(ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                             TRUE ~ ENQUETE))

## couche des secteurs 
sfSec_all <- st_read("SEC_50ED_6EOD_W84.shp")


# Chargement des fonctions de création des fichiers web et INDIC
suppressWarnings(source("3_p2m_fct.R"))


# Sortir les data d'une seule enquête ----
p2m(nomEnq = "")




# Sortir les data de toutes les enquêtes ----
require(foreach)
require(doParallel)



## Sélection de toutes les enquêtes 
## ~45min pour les 48ED
#(Enq <- sort(unique(prezTable$ENQUETE[prezTable$PAYS == "FR"])))
#(Enq <- sort(unique(prezTable$ENQUETE[prezTable$PAYS == "CA"])))
(Enq <- sort(unique(prezTable$ENQUETE)))

## packages utilisés dans la fonction p2m
myPck <- as.vector(.packages())

## setup parallel backend to use many processors
cores <- detectCores()
cl <- makeCluster(cores[1]-2) # not to overload your computer
registerDoParallel(cl)

foreach(i = Enq, .packages = myPck) %dopar% {
  
  p2m(nomEnq = i) #calling p2m function

}

## stop cluster
stopCluster(cl)






