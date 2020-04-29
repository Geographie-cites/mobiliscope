# ================================================================================#
#                   Construction des tables de présence 
#    Adaptation du script de Guillaume Le Roux (ProgrammationArticleSegreg.R)
# 
# avril 2018 - AD
# ================================================================================#


# Chargement des bibliothèques
library(plyr)
library(stringr)
library(dplyr)
library(lubridate)
library(foreach)
library(readr)
library(tidyr)


# choix de la ville
nomEnq <- "MONTREAL"


# Chargement des fonctions de création des tables de présence
suppressWarnings(source("2-prepa_data/scriptsr/3_deplToPresence_fct.R"))



# Chargement de la BD mobiliscope
load(paste("2-prepa_data/data/BD_mobiliscope_depl_", nomEnq, ".RDS", sep = ''))
load(paste("2-prepa_data/data/BD_mobiliscope_pers_", nomEnq,".RDS", sep = ''))



# Création de la table de présence 
prezTable <- createPrez(libED = nomEnq)







