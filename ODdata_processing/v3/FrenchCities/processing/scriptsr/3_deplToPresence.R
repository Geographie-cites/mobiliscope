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


# Chargement de la BD mobiliscope
load("scriptsr/data/BD_mobiliscope_depl.RDS")
load("scriptsr/data/BD_mobiliscope_pers.RDS")


# Chargement des fonctions de création des tables de présence
suppressWarnings(source("scriptsr/3_deplToPresence_fct.R"))


# Création de la table de présence 
prezTable <- createPrez(libED = "MONTPELLIER")










