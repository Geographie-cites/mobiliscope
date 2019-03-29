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




# 1. Sélection des présences autonomes et stationnaires et transfo de la table au format large
prez_wide_h <- prepPrezWide(data = prezTable)

# 2. Création des indicateurs à intégrer au Mobiliscope (geojson et csv)
p2m(nomEnq)






