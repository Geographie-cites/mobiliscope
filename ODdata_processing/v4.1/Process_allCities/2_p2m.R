# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                
#    Adaptation du script de Constance Lecomte (prepa_data_Mobiliscope_P2.R)
# 
# avril 2018 - AD
# rv en octobre 2020
# rv en jan. 2021 pour intégration Canada
# rv en juillet 2021 pour intégration Amérique du sud
# rv février 2022 : réécriture de p2m_fct
# ================================================================================#


# set working directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1/Process_allCities/")

# library
library(tidylog)
library(tidyverse)
library(sf)
library(geojsonio)
library(geojsonsf)
library(OasisR) # Duncan
library(spdep) # Moran



# load data ----

# 1. données de présences
prezTable <- readRDS("data/BD_presence.RDS")

## Recoder Valenciennes 2011
prezTable <- prezTable %>%
  mutate(ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                             TRUE ~ ENQUETE))

# 2. données géo
sf <- st_read("SEC_59ED_W84.shp")


# load p2m functions ----
suppressWarnings(source("2_p2m_fct.R"))

# indiquer le chemin vers le dossier de sortie
chemin <- "C:/wamp64/www/mobiliscope/data/"



# sortir les data d'une enquête ----
p2m(nomEnq = "")




# sortir les data de plusieurs enquêtes ----
require(foreach)
require(doParallel)

(Enq <- sort(unique(prezTable$ENQUETE)))
# (Enq <- sort(unique(prezTable$ENQUETE[prezTable$PAYS=="CA"])))

## packages utilisés dans la fonction p2m
myPck <- as.vector(.packages())

## setup parallel backend to use many processors
cores <- detectCores()
cl <- makeCluster(cores[1]-2) # !!! not to overload your computer
registerDoParallel(cl)


T1<-Sys.time()

foreach(i = Enq, .packages = myPck) %dopar% {
  
  p2m(nomEnq = i) #calling p2m function
  
}

## stop cluster
stopCluster(cl)

T2<-Sys.time()
Tdiff= difftime(T2, T1)






