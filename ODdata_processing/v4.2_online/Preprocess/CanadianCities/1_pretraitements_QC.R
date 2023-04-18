# ================================================================================#
#                         Traitements EOD Québec niveau 2 :
#   Montréal / Québec / Trois-Rivières / Saguenay / Sherbrooke / Ottawa-Gatineau
#
#       Homogénéisation des tables / Nettoyage / Création des variables manquantes
#                       
# avril 2019 - EV
# jan. 2021 - AD
# jan. 2022 : reprise du mode principal - AD
# ================================================================================#

# set working directory
setwd("")

# Library
library(tidyverse)
library(tidylog)
library(lubridate)


# Chargement des données brutes des 6 enquêtes OD ----

BD_Mtl <- read.csv2("mtl13_niveau_2.csv",
                    colClasses = c("character"))
BD_Qbc <- read.csv2("que11_niveau_2.csv",
                    colClasses = c("character"))
BD_Sag <- read.csv2("sag15_niveau_2.csv",
                    colClasses = c("character"))
BD_Trv <- read.csv2("trv11_niveau_2.csv",
                    colClasses = c("character"))
BD_She <- read.csv2("she12_niveau_2.csv",
                    colClasses = c("character"))
BD_Out <- read.csv2("out11_niveau_2.csv",
                    colClasses = c("character"))


# Création des identifiants d'enquête
BD_Mtl <- BD_Mtl %>% 
  mutate(ENQUETE = "MONTREAL")

BD_Out <- BD_Out %>% 
  mutate(ENQUETE = "OTTAWA GATINEAU")

BD_Qbc <- BD_Qbc %>% 
  mutate(ENQUETE = "QUEBEC")

BD_Sag <- BD_Sag %>% 
  mutate(ENQUETE = "SAGUENAY")

BD_She <- BD_She %>% 
  mutate(ENQUETE = "SHERBROOKE")

BD_Trv <- BD_Trv %>% 
  mutate(ENQUETE = "TROIS RIVIERES")


# Création des l'identifiant "clepersonne" seulement pour Ottawa-Gatineau

BD_Out <- BD_Out %>% 
  mutate(clepersonne = str_c(nolog, noper))


# Sélection des 15 ans et + => nope
# BD_brute <- filter(BD_brute, grpage >= 4)


# Transformation des modes des EOD en modes 1 à 3 (voir la table de correspondance) ----

# Montréal  
BD_Mtl <- BD_Mtl %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                   c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode4 = plyr::mapvalues(mode4, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode5 = plyr::mapvalues(mode5, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode6 = plyr::mapvalues(mode6, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode7 = plyr::mapvalues(mode7, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)))

# Ottawa-Gatineau
BD_Out <- BD_Out %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode4 = plyr::mapvalues(mode4, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode5 = plyr::mapvalues(mode5, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)))
# Québec
BD_Qbc <- BD_Qbc %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)))

# Trois Rivières / Sherbrooke
BD_Trv <- BD_Trv %>% 
    mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)))

BD_She <- BD_She %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)))


# Saguenay
BD_Sag <- BD_Sag %>% 
    mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)))


# Compilation des EOD
BD_brute <- bind_rows(BD_Mtl, BD_Out, BD_Qbc, BD_Sag, BD_She, BD_Trv)
BD_brute <- BD_brute %>% relocate(ENQUETE)

rm(BD_Mtl, BD_Out, BD_Qbc, BD_Sag, BD_She, BD_Trv)

# Identifiant unique 
BD_brute <- BD_brute %>% 
  mutate(clepersonne = case_when(ENQUETE == "MONTREAL" ~ str_c(clepersonne, "_Mtl"),
                                 ENQUETE == "OTTAWA GATINEAU" ~ str_c(clepersonne, "_Out"),
                                 ENQUETE == "QUEBEC" ~ str_c(clepersonne, "_Qbc"),
                                 ENQUETE == "SAGUENAY" ~ str_c(clepersonne, "_Sag"),
                                 ENQUETE == "SHERBROOKE" ~ str_c(clepersonne, "_She"),
                                 ENQUETE == "TROIS RIVIERES" ~ str_c(clepersonne, "_Trv")))


# Correction code secteur ----

## MONTREAL
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="MONTREAL"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="MONTREAL"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="MONTREAL"]))

### NA
BD_brute <- BD_brute %>% 
  mutate(smori = case_when(ENQUETE == "MONTREAL" & smori %in% c("0", "", "999") ~ NA_character_,
                              TRUE ~ smori),
         smdes = case_when(ENQUETE == "MONTREAL" & smdes %in% c("0", "", "999") ~ NA_character_,
                           TRUE ~ smdes))

## OTTAWA GATINEAU
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="OTTAWA GATINEAU"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="OTTAWA GATINEAU"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="OTTAWA GATINEAU"]))

### Correction
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "OTTAWA GATINEAU" & smlog == "1" ~ "001",
                           ENQUETE == "OTTAWA GATINEAU" & smlog == "50" ~ "050",
                           TRUE ~ smlog),
         
         smori = case_when(ENQUETE == "OTTAWA GATINEAU" & smori == "1" ~ "001",
                           ENQUETE == "OTTAWA GATINEAU" & smori == "50" ~ "050",
                           ENQUETE == "OTTAWA GATINEAU" & smori == "9999" ~ "999",
                           ENQUETE == "OTTAWA GATINEAU" & smori == "" ~ NA_character_,
                           TRUE ~ smori),
         
         smdes = case_when(ENQUETE == "OTTAWA GATINEAU" & smdes == "1" ~ "001",
                           ENQUETE == "OTTAWA GATINEAU" & smdes == "50" ~ "050",
                           ENQUETE == "OTTAWA GATINEAU" & smdes == "9999" ~ "999",
                           ENQUETE == "OTTAWA GATINEAU" & smdes == "" ~ NA_character_,
                           TRUE ~ smdes))

## QUEBEC
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="QUEBEC"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="QUEBEC"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="QUEBEC"]))

### Codage avec des ,
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "QUEBEC" & smlog == "2,1" ~ "070",
                           ENQUETE == "QUEBEC" & smlog == "2,2" ~ "071",
                           ENQUETE == "QUEBEC" & smlog == "8,1" ~ "072",
                           ENQUETE == "QUEBEC" & smlog == "9,1" ~ "073",
                           ENQUETE == "QUEBEC" & smlog == "22,1" ~ "074",
                           ENQUETE == "QUEBEC" & smlog == "57,1" ~ "075",
                           ENQUETE == "QUEBEC" & smlog == "58,1" ~ "076",
                           TRUE ~ smlog),
         
         smori = case_when(ENQUETE == "QUEBEC" & smori == "2,1" ~ "070",
                           ENQUETE == "QUEBEC" & smori == "2,2" ~ "071",
                           ENQUETE == "QUEBEC" & smori == "8,1" ~ "072",
                           ENQUETE == "QUEBEC" & smori == "9,1" ~ "073",
                           ENQUETE == "QUEBEC" & smori == "22,1" ~ "074",
                           ENQUETE == "QUEBEC" & smori == "57,1" ~ "075",
                           ENQUETE == "QUEBEC" & smori == "58,1" ~ "076",
                           TRUE ~ smori),
         
         smdes = case_when(ENQUETE == "QUEBEC" & smdes == "2,1" ~ "070",
                           ENQUETE == "QUEBEC" & smdes == "2,2" ~ "071",
                           ENQUETE == "QUEBEC" & smdes == "8,1" ~ "072",
                           ENQUETE == "QUEBEC" & smdes == "9,1" ~ "073",
                           ENQUETE == "QUEBEC" & smdes == "22,1" ~ "074",
                           ENQUETE == "QUEBEC" & smdes == "57,1" ~ "075",
                           ENQUETE == "QUEBEC" & smdes == "58,1" ~ "076",
                           TRUE ~ smdes))

### Hors territoire et NA
BD_brute <- BD_brute %>% 
  mutate(smori = case_when(ENQUETE == "QUEBEC" & smori == "69" ~ "999",
                           ENQUETE == "QUEBEC" & smori == "" ~ NA_character_,
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "QUEBEC" & smdes == "69" ~ "999",
                           ENQUETE == "QUEBEC" & smdes == "" ~ NA_character_,
                           TRUE ~ smdes))


### Correction des longueurs
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "QUEBEC" & nchar(smlog) == 1 ~ paste0("00", smlog),
                           ENQUETE == "QUEBEC" & nchar(smlog) == 2 ~ paste0("0", smlog),
                           TRUE ~ smlog),
         smori = case_when(ENQUETE == "QUEBEC" & nchar(smori) == 1 ~ paste0("00", smori),
                           ENQUETE == "QUEBEC" & nchar(smori) == 2 ~ paste0("0", smori),
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "QUEBEC" & nchar(smdes) == 1 ~ paste0("00", smdes),
                           ENQUETE == "QUEBEC" & nchar(smdes) == 2 ~ paste0("0", smdes),
                           TRUE ~ smdes))


## SAGUENAY (22 = HT)
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="SAGUENAY"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="SAGUENAY"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="SAGUENAY"]))

### Correction des longueurs
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "SAGUENAY" & nchar(smlog) == 1 ~ paste0("00", smlog),
                           ENQUETE == "SAGUENAY" & nchar(smlog) == 2 ~ paste0("0", smlog),
                           TRUE ~ smlog),
         smori = case_when(ENQUETE == "SAGUENAY" & nchar(smori) == 1 ~ paste0("00", smori),
                           ENQUETE == "SAGUENAY" & nchar(smori) == 2 ~ paste0("0", smori),
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "SAGUENAY" & nchar(smdes) == 1 ~ paste0("00", smdes),
                           ENQUETE == "SAGUENAY" & nchar(smdes) == 2 ~ paste0("0", smdes),
                           TRUE ~ smdes))
### NA
BD_brute <- BD_brute %>% 
  mutate(smori = case_when(ENQUETE == "SAGUENAY" & smori %in% c("", "999") ~ NA_character_,
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "SAGUENAY" & smdes %in% c("", "999") ~ NA_character_,
                           TRUE ~ smdes))


## SHERBROOKE
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="SHERBROOKE"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="SHERBROOKE"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="SHERBROOKE"]))

### Hors territoire et NA
BD_brute <- BD_brute %>% 
  mutate(smori = case_when(ENQUETE == "SHERBROOKE" & smori == "29" ~ "999",
                           ENQUETE == "SHERBROOKE" & smori == "" ~ NA_character_,
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "SHERBROOKE" & smdes == "29" ~ "999",
                           ENQUETE == "SHERBROOKE" & smdes == "" ~ NA_character_,
                           TRUE ~ smdes))

### Longueur
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "SHERBROOKE" & nchar(smlog) == 1 ~ paste0("00", smlog),
                           ENQUETE == "SHERBROOKE" & nchar(smlog) == 2 ~ paste0("0", smlog),
                           TRUE ~ smlog),
         
         smori = case_when(ENQUETE == "SHERBROOKE" & nchar(smori) == 1 ~ paste0("00", smori),
                           ENQUETE == "SHERBROOKE" & nchar(smori) == 2 ~ paste0("0", smori),
                           TRUE ~ smori),
         
         smdes = case_when(ENQUETE == "SHERBROOKE" & nchar(smdes) == 1 ~ paste0("00", smdes),
                           ENQUETE == "SHERBROOKE" & nchar(smdes) == 2 ~ paste0("0", smdes),
                           TRUE ~ smdes))


## TROIS RIVIERES
sort(unique(BD_brute$smlog[BD_brute$ENQUETE=="TROIS RIVIERES"]))
sort(unique(BD_brute$smori[BD_brute$ENQUETE=="TROIS RIVIERES"]))
sort(unique(BD_brute$smdes[BD_brute$ENQUETE=="TROIS RIVIERES"]))


### Hors territoire et NA
BD_brute <- BD_brute %>% 
  mutate(smori = case_when(ENQUETE == "TROIS RIVIERES" & smori == "29" ~ "999",
                           ENQUETE == "TROIS RIVIERES" & smori == "0" ~ NA_character_,
                           TRUE ~ smori),
         smdes = case_when(ENQUETE == "TROIS RIVIERES" & smdes == "29" ~ "999",
                           ENQUETE == "TROIS RIVIERES" & smdes == "0" ~ NA_character_,
                           TRUE ~ smdes))

### Longueur
BD_brute <- BD_brute %>% 
  mutate(smlog = case_when(ENQUETE == "TROIS RIVIERES" & nchar(smlog) == 1 ~ paste0("00", smlog),
                           ENQUETE == "TROIS RIVIERES" & nchar(smlog) == 2 ~ paste0("0", smlog),
                           TRUE ~ smlog),
         
         smori = case_when(ENQUETE == "TROIS RIVIERES" & nchar(smori) == 1 ~ paste0("00", smori),
                           ENQUETE == "TROIS RIVIERES" & nchar(smori) == 2 ~ paste0("0", smori),
                           TRUE ~ smori),
         
         smdes = case_when(ENQUETE == "TROIS RIVIERES" & nchar(smdes) == 1 ~ paste0("00", smdes),
                           ENQUETE == "TROIS RIVIERES" & nchar(smdes) == 2 ~ paste0("0", smdes),
                           TRUE ~ smdes))



# Création du mode principal de chaque déplacement pour toutes les enquêtes ----

# Création de la fonction qui attribue le mode principal au déplacement
# on prend le mode 1 en priorité, puis 2 puis 3 
# (transport public : 1 / véhicule privé motorisé :2 / mobilités douces : 3)

BD_brute <- BD_brute %>% 
  mutate(modep = case_when(mode1 == "1" | mode2 == "1" | mode3 == "1" |
                           mode4 == "1" | mode5 == "1" | mode6 == "1" |
                           mode7 == "1" ~ "1",
                           
                           mode1 == "2" | mode2 == "2" | mode3 == "2" |
                           mode4 == "2" | mode5 == "2" | mode6 == "2" |
                           mode7 == "2" ~ "2",
                           
                           mode1 == "3" | mode2 == "3" | mode3 == "3" |
                           mode4 == "3" | mode5 == "3" | mode6 == "3" |
                           mode7 == "3" ~ "3"))


# Suppression des colonnes modeX
# BD_brute <- BD_brute %>% 
#   select(- mode1,- mode2, - mode3, - mode4,- mode5, - mode6,- mode7, - mode8, - mode9)

       

# Création du motif d'origine de chaque déplacement pour toutes les enquêtes ----

# Création de la fonction qui détermine le motif d'origine
# si c'est le premier déplacement de la personne, 
# on lui assigne le motif destination du dernier déplacement de sa journée (boucle)

BD_brute <- BD_brute %>% 
  group_by(clepersonne) %>% 
  mutate(nodep = as.numeric(nodep)) %>% 
  mutate(motifO = case_when(nodep == 1 ~ motif[nodep==max(nodep)],
                            nodep > 1 ~ motif[lag(nodep)]))



# Création des classes de revenus ----

# création rev_aj = médiane de la tranche de revenu divisée 
# par la racine de la taille du ménage (ou NA si non renseigné)

BD_brute <- BD_brute %>% 
  mutate(rev_med = case_when(revenu == "1" ~ 15000,
                             revenu == "2" ~ 45000,
                             revenu == "3" ~ 75000,
                             revenu == "4" ~ 105000,
                             revenu == "5" ~ 135000,
                             revenu == "6" ~ 165000,
                             
                             ENQUETE %in% c("OTTAWA-GATINEAU", "SHERBROOKE", "QUEBEC", "SAGUENAY") &
                               revenu == "7" ~ 195000,
                             ENQUETE %in% c("OTTAWA-GATINEAU", "SHERBROOKE", "QUEBEC", "SAGUENAY") &
                               revenu == "8" ~ 225000))


BD_brute <- BD_brute %>% 
  mutate(rev_aj = rev_med/sqrt(as.numeric(nbper)))

bibi <- BD_brute %>% 
  transmute(ENQUETE, nbper, revenu, clepersonne, rev_med, rev_aj)
rm(bibi)


# création REVENU

BD_brute <- BD_brute %>% 
  mutate(REV = case_when(rev_aj <= 19669 ~ "1",
                         rev_aj > 19669 &  rev_aj <= 39337 ~ "2",
                         rev_aj > 39337 & rev_aj < 68839.7 ~ "3",
                         rev_aj >= 68839.75 ~ "4",
                         TRUE ~ "0"))

bibi <- BD_brute %>% 
  transmute(ENQUETE, nbper, revenu, clepersonne, rev_med, rev_aj, REV)
rm(bibi)




# Durée du déplacement et standardisation des heures/minutes ----
# de départ et d'arrivée pour toutes les enquêtes

#~ 1. création des variables heures et minutes ----

myhredep <- sort(unique(as.numeric(BD_brute$hredep)))
myhredep[1:990]
myhredep[991:1332]

## interlude
bibi <- BD_brute %>% 
  filter(hredep == "0") # heure dep = 0
length(unique(bibi$clepersonne))
bibi2 <- BD_brute %>% 
  filter(nodep == "0") # pas de n° de déplacement
length(unique(bibi2$clepersonne))
bibi3 <- BD_brute %>% 
  filter(mobil != "1") # pas de mobilité
length(unique(bibi3$clepersonne))
bibi4 <- BD_brute %>% 
  filter(noper != "1") # non répondant
length(unique(bibi4$clepersonne))

rm(bibi, bibi2, bibi3, bibi4)


# Pour les personnes sans mobilité, on affecte NA en heure de départ (au lieu de 0)
# Pour les non répondants et les personnes ne s'étant pas déplacées, 
# on affecte NA aux heures d'arrivée car celles qui sont présentes sont erronées
BD_brute <- BD_brute %>% 
  mutate(hredep = case_when(mobil != "1"  ~ NA_character_,
                            TRUE ~ hredep),
         hrearv = case_when(mobil != "1" | noper != "1" ~ NA_character_,
                            TRUE ~ hrearv))

## interlude
bibi <- BD_brute %>% 
  filter(hredep == "0")
bibi2 <- BD_brute %>% 
  filter(hrearv == "0")
rm(bibi, bibi2)

## On remplace les hrearv = 0 qui restent par NA
BD_brute <- BD_brute %>% 
  mutate(hrearv = case_when(hrearv == "0" ~ NA_character_,
                            TRUE ~ hrearv))




## interlude
bibi <- BD_brute %>% 
  filter(hredep == "1")
bibi <- BD_brute %>% 
  filter(hredep == "20")
rm(bibi)

## On corrige la longueur de hredep et hrearv
BD_brute <- BD_brute %>% 
  mutate(hredep = case_when(nchar(hredep)==1 ~ str_c("000", hredep),
                            nchar(hredep)==2 ~ str_c("00", hredep),
                            nchar(hredep)==3 ~ str_c("0", hredep),
                            TRUE ~ hredep),
         
         hrearv = case_when(nchar(hrearv)==1 ~ str_c("000", hrearv),
                            nchar(hrearv)==2 ~ str_c("00", hrearv),
                            nchar(hrearv)==3 ~ str_c("0", hrearv),
                            TRUE ~ hrearv))


myhredep <- sort(unique(BD_brute$hredep))
myhredep[1:990]
myhredep[991:1331]
myhrearv <- sort(unique(BD_brute$hrearv))
myhrearv[1:992]
myhrearv[993:1359]


# On remplace les hrearv sans info par NA
BD_brute <- BD_brute %>% 
  mutate(hrearv = case_when(hrearv=="" ~ NA_character_,
                            TRUE ~ hrearv))

# On remplace les hrearv 2799 et 2899 par 2800
BD_brute <- BD_brute %>% 
  mutate(hrearv = case_when(hrearv %in% c("2799", "2899") ~ "2800",
                            TRUE ~ hrearv))




# On sépare les heures des minutes

BD_brute <- BD_brute %>% 
  mutate(hhdep = substr(hredep, 1, 2),
         mmdep = substr(hredep, 3, 4),
         hharv = substr(hrearv, 1, 2),
         mmarv = substr(hrearv, 3, 4))


## interlude
sort(unique(BD_brute$hhdep))
sort(unique(BD_brute$mmdep))
sort(unique(BD_brute$hharv)) # => 99 ???
sort(unique(BD_brute$mmarv)) # => 99 ???

bibi <- BD_brute %>% 
  filter(mmarv %in% c("60", "62", "68", "75", "82", "99")) %>% 
  select(clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv)

# On remplace "99" par NA (leur mobilité aurait dû être remplacée par 4 selon le dico eod, osti !)
BD_brute <- BD_brute %>% 
  mutate(hrearv = case_when(hrearv == "9999" ~ NA_character_,
                            TRUE ~ hrearv),
         hharv = case_when(hharv == "99" ~ NA_character_,
                           TRUE ~ hharv),
         mmarv = case_when(mmarv == "99" ~ NA_character_,
                           TRUE ~ mmarv))

## interlude
sort(unique(BD_brute$hharv)) 
sort(unique(BD_brute$mmarv))

bibi <- BD_brute %>% 
  filter(mmarv %in% c("60", "62", "68", "75", "82")) %>% 
  select(clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv)

# Correction manuelle des 6 individus avec mmarv >= 60
BD_brute$hharv[BD_brute$clepersonne=="10262261_Mtl" & BD_brute$nodep==2] <- "17"
BD_brute$mmarv[BD_brute$clepersonne=="10262261_Mtl" & BD_brute$nodep==2] <- "00"

BD_brute$hharv[BD_brute$clepersonne=="10441261_Mtl" & BD_brute$nodep==6] <- "15"
BD_brute$mmarv[BD_brute$clepersonne=="10441261_Mtl" & BD_brute$nodep==6] <- "08"

BD_brute$hharv[BD_brute$clepersonne=="11130231_Mtl" & BD_brute$nodep==1] <- "20"
BD_brute$mmarv[BD_brute$clepersonne=="11130231_Mtl" & BD_brute$nodep==1] <- "15"

BD_brute$hharv[BD_brute$clepersonne=="11461641_Mtl" & BD_brute$nodep==2] <- "19"
BD_brute$mmarv[BD_brute$clepersonne=="11461641_Mtl" & BD_brute$nodep==2] <- "00"

BD_brute$hharv[BD_brute$clepersonne=="11973991_Mtl" & BD_brute$nodep==2] <- "17"
BD_brute$mmarv[BD_brute$clepersonne=="11973991_Mtl" & BD_brute$nodep==2] <- "02"

BD_brute$hharv[BD_brute$clepersonne=="12019211_Mtl" & BD_brute$nodep==2] <- "09"
BD_brute$mmarv[BD_brute$clepersonne=="12019211_Mtl" & BD_brute$nodep==2] <- "22"

## interlude
sort(unique(BD_brute$hharv)) 
sort(unique(BD_brute$mmarv))

rm(bibi)



# Orga de la table 
BD_brute <- BD_brute %>% 
  mutate(hhdep = as.numeric(hhdep),
         mmdep = as.numeric(mmdep),
         hharv = as.numeric(hharv),
         mmarv = as.numeric(mmarv)) %>% 
  arrange(ENQUETE, clepersonne, hhdep, mmdep)


# création des variables HEURE_DEB et HEURE_FIN au format ISO et 
# calcul de la nouvelle variable 'duree' 
BD_brute$HEURE_DEB <- ifelse(BD_brute$hhdep>23,
                             as.character.Date(ISOdatetime(2010, 1, 2, BD_brute$hhdep-24, BD_brute$mmdep, 0)),
                             as.character.Date(ISOdatetime(2010, 1, 1, BD_brute$hhdep, BD_brute$mmdep, 0)))

BD_brute$HEURE_FIN <- ifelse(BD_brute$hharv>23,
                             as.character.Date(ISOdatetime(2010, 1, 2, BD_brute$hharv-24, BD_brute$mmarv, 0)),
                             as.character.Date(ISOdatetime(2010, 1, 1, BD_brute$hharv,BD_brute$mmarv, 0)))

BD_brute$duree <- as.numeric(difftime(ymd_hms(BD_brute$HEURE_FIN, truncated=3),ymd_hms(BD_brute$HEURE_DEB, truncated=3), units= "mins"))

bibi <- BD_brute %>% 
  select(clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree)

# Pour ceux qui ont des durées incohérentes (nulles ou négatives), 
# On remplace hrearv par NA et on répercute sur les autres variables

BD_brute <- BD_brute %>% 
  mutate(hrearv = case_when(duree <= 0 ~ NA_character_,
                            TRUE ~ hrearv),
         hharv = case_when(duree <= 0 ~ NA_real_,
                           TRUE ~ hharv),
         mmarv = case_when(duree <= 0 ~ NA_real_,
                           TRUE ~ mmarv))


# On refait le calcul date ISO et durée

BD_brute$HEURE_DEB <- ifelse(BD_brute$hhdep>23,
                             as.character.Date(ISOdatetime(2010, 1, 2, BD_brute$hhdep-24, BD_brute$mmdep, 0)),
                             as.character.Date(ISOdatetime(2010, 1, 1, BD_brute$hhdep, BD_brute$mmdep, 0)))

BD_brute$HEURE_FIN <- ifelse(BD_brute$hharv>23,
                             as.character.Date(ISOdatetime(2010, 1, 2, BD_brute$hharv-24, BD_brute$mmarv, 0)),
                             as.character.Date(ISOdatetime(2010, 1, 1, BD_brute$hharv,BD_brute$mmarv, 0)))

BD_brute$duree <- as.numeric(difftime(ymd_hms(BD_brute$HEURE_FIN, truncated=3),ymd_hms(BD_brute$HEURE_DEB, truncated=3), units= "mins"))


bibi <- BD_brute %>% 
  select(clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, smori, smdes)



#~ 2. Méthode utilisée pour renseigner l'heure d'arrivée ----

# 0 : personnes restées à la maison (mobil = 2)
# 1 : horaire issu de l'enquête OD ; 
# 2 : heure d'arrivée issue de l'eod mais minutes manquantes :
#     - 2a : intra-secteur (minute d'arrivée = minute de départ)
#     - 2b : inter-secteurs (minute d'arrivée = minute de départ +5)
# 3 : déplacement intra-secteur (horaire d'arrivée identique à l'horaire de départ) ; 
# 4 : horaire estimé à partir des moyennes des temps de déplacement inter-secteurs 
# 5 : horaire estimé à partir d'une modélisation des temps de trajet réalisée sous Arcgis
# 6 : correction de l'heure d'arrivée quand celle-ci est supérieure à l'heure de départ suivant

# meth_ha = 1 quand heure d'arrivée issue de l'enquête
BD_brute <- BD_brute %>% 
  mutate(meth_ha = case_when(!is.na(hrearv) ~ "1")) # 40%

# meth_ha = 2 quand heure d'arrivée issue de l'eod mais
# pb de minutes
BD_brute <- BD_brute %>% 
  mutate(meth_ha = case_when(meth_ha == "1" & is.na(mmarv) ~ "2",
                             TRUE ~ meth_ha))

rm(bibi)




#~ 3. pour les déplacements sans heure d'arrivée, ----
# qui s'effectuent dans le même secteur (origine et destination)
# on affecte la même heure que l'heure de départ puisque les déplacements 
# seront ensuite agrégés heure par heure (meth_ha = 3)

## meth_ha
BD_brute <- BD_brute %>%
  group_by(ENQUETE) %>% 
  mutate(meth_ha = case_when(is.na(hrearv) & mobil == "1" & smori == smdes ~ "3", # 20%
                             TRUE ~ meth_ha)) %>% 
  ungroup()
  
## heure d'arrivée = heure de départ
BD_brute <- BD_brute %>% 
  mutate(hharv = case_when(meth_ha == "3" ~ hhdep,
                            TRUE ~ hharv),
         mmarv = case_when(meth_ha == "3" ~ mmdep,
                           TRUE ~ mmarv))

## même chose pour meth_ha = 2 et smori = smdes
BD_brute <- BD_brute %>% 
  mutate(mmarv = case_when(meth_ha == "2" & smori == smdes ~ mmdep,
                           TRUE ~ mmarv),
         meth_ha = case_when(meth_ha == "2" & smori == smdes ~"2a",
                             TRUE ~ meth_ha))

# Cas heure d'arrivée ok mais pas minute
BD_brute <- BD_brute %>% 
  mutate(mmarv = case_when(meth_ha == "2" ~ mmdep+5,
                           TRUE ~ mmarv),
         meth_ha = case_when(meth_ha == "2" ~ "2b",
                             TRUE ~ meth_ha))


## On refait le calcul date ISO et durée
BD_brute <- BD_brute %>% 
  mutate(HEURE_FIN = case_when(meth_ha %in% c("1", "2a","2b", "3") & hharv > 23 ~ 
                                 as.character.Date(ISOdatetime(2010, 1, 2, hharv-24, mmarv, 0)),
                               meth_ha %in% c("1", "2a","2b", "3") & hharv <= 23 ~ 
                                 as.character.Date(ISOdatetime(2010, 1, 1, hharv, mmarv, 0)),
                               TRUE ~ HEURE_FIN),
         
         duree = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), ymd_hms(HEURE_DEB, truncated=3), units= "mins")))



# meth_ha = 0 pour ceux restés à la maison 
# => on traitera les heures au moment 
# de la création de la table de présence
BD_brute <- BD_brute %>% 
  mutate(meth_ha = case_when(mobil == "2" ~ "0", # 7%
                             TRUE ~ meth_ha))





## interlude

bibi_ <- BD_brute %>% 
  select(ENQUETE, clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, modep, motif, smori, smdes, meth_ha)

m0 <- bibi_ %>% 
  filter(meth_ha == "0") %>% 
  mutate(pb = is.na(hrearv))

m1 <- bibi_ %>% 
  filter(meth_ha == "1") %>% 
  mutate(hrearv_na = is.na(hrearv),
         hharv_na = is.na(hharv),
         mmarv_na = is.na(mmarv))

m2a <- bibi_ %>% 
  filter(meth_ha == "2a") %>% 
  mutate(pb = is.na(duree))

m2b <- bibi_ %>% 
  filter(meth_ha == "2b")

m3 <- bibi_ %>% 
  filter(meth_ha == "3") %>% 
  mutate(pb = is.na(HEURE_FIN))

na <- bibi_ %>% filter(is.na(meth_ha))

rm(m0, m1, m2a, m2b, m3, na)


#~ 4. Heures d'arrivée pour les déplacements inter-secteurs (meth_ha = 4) ----

# Fonction pour Québec, Saguenay, Sherbrooke et Trois-Rivières
meth_ha_4 <- function(nomEnq){
  
  # nomEnq = "QUEBEC"
  
  # On filtre les répondants avec une mobilité et des heures renseignées
  BD_rep <- BD_brute %>% 
    filter(ENQUETE == nomEnq) %>%  
    filter(noper == "1" & mobil == "1" & !is.na(hrearv) & meth_ha == "1") 
  # %>% 
  #   select(-mode1, -mode2, -mode3, -mode4) %>% 
  #   relocate(modep, duree, meth_ha)
  
  # BD_sm <- BD_brute %>% 
  #   filter(ENQUETE == nomEnq) %>% 
  #   filter_at(.vars = c("smori", "smdes"), all_vars(!is.na(.))) %>% 
  #   filter_at(.vars = c("smori", "smdes"), any_vars(.!="999"))
  
  smori <- sort(unique(BD_rep$smori))
  smdes <- sort(unique(BD_rep$smdes))
  
  # création des matrices pour les 3 types de modes, 
  # à partir des déplacements des répondants
  mat_mode1 <- matrix(data = NA, 
                      nrow = length(smori), 
                      ncol = length(smdes), 
                      byrow = FALSE)
  rownames(mat_mode1) <- smori
  colnames(mat_mode1) <- smdes
  
  mat_mode2 <- matrix(data = NA, 
                      nrow = length(smori), 
                      ncol = length(smdes), 
                      byrow = FALSE)
  rownames(mat_mode2) <- smori
  colnames(mat_mode2) <- smdes
  
  mat_mode3 <- matrix(data = NA, 
                      nrow = length(smori),
                      ncol = length(smdes), 
                      byrow = FALSE)
  rownames(mat_mode3) <- smori
  colnames(mat_mode3) <- smdes
  
  # remplissage des matrices : le temps de parcours entre deux lieux 
  # est la moyenne des temps de parcours entre ces mêmes lieux 
  # pour les heures d'arrivée existantes (biais, si il n'y a qu'un seul déplacement..)
  
  data <- BD_brute %>% 
    filter(ENQUETE == nomEnq) %>% 
    mutate(duree_moy = NA) 
  # %>% 
  #   select(-mode1, -mode2, -mode3, -mode4) %>% 
  #   relocate(modep, duree, meth_ha) 
  
  for (i in 1:length(smori)){
    for (j in 1:length(smdes)){
      mat_mode1[i,j] <- round(mean(BD_rep$duree[BD_rep$modep == "1" & BD_rep$smori == rownames(mat_mode1)[i] & BD_rep$smdes == colnames(mat_mode1)[j]], na.rm = TRUE))
      mat_mode2[i,j] <- round(mean(BD_rep$duree[BD_rep$modep == "2" & BD_rep$smori == rownames(mat_mode2)[i] & BD_rep$smdes == colnames(mat_mode2)[j]], na.rm = TRUE))
      mat_mode3[i,j] <- round(mean(BD_rep$duree[BD_rep$modep == "3" & BD_rep$smori == rownames(mat_mode3)[i] & BD_rep$smdes == colnames(mat_mode3)[j]], na.rm = TRUE))
      
    }
  }

  # remplissage des cases vides dont le trajet existe dans l'autre sens (smori = smdes)
  for (i in 1:length(smori)){
    for (j in 1:length(smdes)){
      mat_mode1[i,j] = ifelse(is.na(mat_mode1[i,j]), mat_mode1[j,i],mat_mode1[i,j]) 
      mat_mode2[i,j] = ifelse(is.na(mat_mode2[i,j]), mat_mode2[j,i],mat_mode2[i,j]) 
      mat_mode3[i,j] = ifelse(is.na(mat_mode3[i,j]), mat_mode3[j,i],mat_mode2[i,j]) 
    }
  }
  

  # remplissage des heures d'arrivée à partir des matrices 
  # pour les non-répondants mobiles inter-secteurs
  
  for (i in (1:nrow(data))){
    
    if (isTRUE(is.na(data$meth_ha[i]) & data$noper[i] != "1" & data$mobil[i] == "1" & data$smori[i] != data$smdes[i])){
      
      a = data$smori[i]
      b = data$smdes[i]
      #if(!isTRUE(a == 0 | b == 0)){
        if (data$modep[i] == "1"){
          data$duree_moy[i] = mat_mode1[rownames(mat_mode1) == a, colnames(mat_mode1) == b]
        }else if (data$modep[i] == "2"){
          data$duree_moy[i] = mat_mode2[rownames(mat_mode2) == a, colnames(mat_mode2) == b]
        }else if (data$modep[i] == "3"){
          data$duree_moy[i] = mat_mode3[rownames(mat_mode3) == a, colnames(mat_mode3) == b]
        }
        
        data$hharv[i] = data$hhdep[i] + ((data$mmdep[i] + data$duree_moy[i])%/%60%%24)
        data$mmarv[i] = (data$mmdep[i] + data$duree_moy[i])%%60
        data$meth_ha[i] = "4"
        # data$hrearv[i] = str_c(data$hharv[i], data$mmarv[i])
      #}
    }
  }
  
  # remplissage des heures d'arrivée à partir des matrices 
  # pour les répondants mobiles inter-secteurs sans heures d'arrivée
  
  for (i in (1:nrow(data))){
    
    if (isTRUE(is.na(data$meth_ha[i]) & data$noper[i] == "1" & is.na(data$hrearv[i]) & data$mobil[i] == "1" & data$smori[i] != data$smdes[i])){
      
      a = data$smori[i]
      b = data$smdes[i]
      #if(!isTRUE(a == 0 | b == 0)){
        if (data$modep[i] == "1"){
          data$duree_moy[i] = mat_mode1[rownames(mat_mode1) == a, colnames(mat_mode1) == b]
        }else if (data$modep[i] == "2"){
          data$duree_moy[i] = mat_mode2[rownames(mat_mode2) == a, colnames(mat_mode2) == b]
        }else if (data$modep[i] == "3"){
          data$duree_moy[i] = mat_mode3[rownames(mat_mode3) == a, colnames(mat_mode3) == b]
        }
        
        data$hharv[i] = data$hhdep[i] + ((data$mmdep[i] + data$duree_moy[i])%/%60%%24)
        data$mmarv[i] = (data$mmdep[i] + data$duree_moy[i])%%60
        data$meth_ha[i] = "4"
        # data$hrearv[i] = str_c(data$hharv[i], data$mmarv[i])
      #}
    }
  }
  
  
  # On refait le calcul date ISO et durée
  data <- data %>% 
    mutate(HEURE_FIN = case_when(meth_ha == "4" & hharv > 23 ~ 
                                   as.character.Date(ISOdatetime(2010, 1, 2, hharv-24, mmarv, 0)),
                                 meth_ha == "4" & hharv <= 23 ~ 
                                   as.character.Date(ISOdatetime(2010, 1, 1, hharv, mmarv, 0)),
                                 TRUE ~ HEURE_FIN),
           
           duree = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), ymd_hms(HEURE_DEB, truncated=3), units= "mins")))
  
  
  # data$HEURE_FIN <- ifelse(data$meth_ha== "4" & data$hharv>23, 
  #                          as.character.Date(ISOdatetime(2010, 1, 2, data$hharv-24, data$mmarv, 0)),
  #                          as.character.Date(ISOdatetime(2010, 1, 1, data$hharv,data$mmarv, 0)))
  # 
  # data$duree <- as.numeric(difftime(ymd_hms(data$HEURE_FIN, truncated=3),ymd_hms(data$HEURE_DEB, truncated=3), units= "mins"))
  # 
  return(data)
}


# data_sag <- meth_ha_4(nomEnq = "SAGUENAY")
# data_qbc <- meth_ha_4(nomEnq = "QUEBEC")
# data_she <- meth_ha_4(nomEnq = "SHERBROOKE")
# data_trv <- meth_ha_4(nomEnq = "TROIS RIVIERES")
# 
# rm(data_qbc, data_sag, data_she, data_trv)


data_meth4 <- rbind(meth_ha_4(nomEnq = "QUEBEC"), 
                    meth_ha_4(nomEnq = "SAGUENAY"), 
                    meth_ha_4(nomEnq = "SHERBROOKE"), 
                    meth_ha_4(nomEnq = "TROIS RIVIERES"))


## interlude
bibi4 <- data_meth4 %>% 
  select(ENQUETE, clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, duree_moy, modep, smori, smdes, meth_ha)

m4 <- bibi4 %>% 
  filter(meth_ha == "4") %>% 
  mutate(pb = is.na(duree))

m4na <- m4 %>% 
  filter(pb == TRUE) %>% 
  mutate(ID = paste0(ENQUETE, "_", smori, "_", smdes, "_", modep))

m1 <- bibi_ %>% 
  filter(meth_ha == "1" & !ENQUETE %in% c("MONTREAL", "OTTAWA GATINEAU")) %>% 
  mutate(ID = paste0(ENQUETE, "_", smori, "_", smdes, "_", modep))

## couples secteurs inexistants dans la table de réf 
myID <- setdiff(m4na$ID, m1$ID)
length(unique(m4na$ID))

## couples existants mais bug dans duree_moy 
m4na_pb <- m4na %>% 
  filter(!ID %in% myID)

rm(BD_rep, data, mat_mode1, mat_mode2, mat_mode3, i, j, nomEnq, smdes, smori)
rm(bibi4, m4, m4na, m1, myID, m4na_pb)



#~ 5. Montréal, Ottawa : les heures d'arrivée manquantes sont obtenues suite ----
# à la modélisation avec Arcgis (meth_ha = 5)

meth_ha_5 <- function(nomEnq){
  
  if(nomEnq == "MONTREAL"){
    
    load("temps_de_parcours/tps_voit_Mtl.RDS")
    load("temps_de_parcours/tps_pieds_Mtl.RDS")
    
    tps_voit <- tps_voit_Mtl %>% 
      mutate(duree_model_voit = durée) %>% 
      select(-durée) %>% 
      mutate_at(vars(c("smori", "smdes")), funs(as.character(.))) %>% 
      mutate(coupleID = case_when(smori != smdes ~ str_c(smori, "_", smdes))) %>% 
      filter(!is.na(coupleID))
    
    tps_pieds <- tps_pieds_Mtl %>% 
      mutate(duree_model_pieds = durée) %>% 
      select(-durée)%>% 
      mutate_at(vars(c("smori", "smdes")), funs(as.character(.)))%>% 
      mutate(coupleID = case_when(smori != smdes ~ str_c(smori, "_", smdes))) %>% 
      filter(!is.na(coupleID))
  }
  
  if(nomEnq == "OTTAWA GATINEAU"){
    
    load("temps_de_parcours/tps_voit_Ott.RDS")
    load("temps_de_parcours/tps_pieds_Ott.RDS")
    
    tps_voit <- tps_voit %>% 
      mutate(duree_model_voit = durée) %>% 
      select(-durée) %>% 
      mutate_at(vars(c("smori", "smdes")), funs(as.character(.))) %>% 
      mutate(smori = case_when(smori == "1" ~ "001",
                               smori == "50" ~ "050",
                               TRUE ~ smori),
             smdes = case_when(smdes == "1" ~ "001",
                               smdes == "50" ~ "050",
                               TRUE ~ smdes))%>% 
      mutate(coupleID = case_when(smori != smdes ~ str_c(smori, "_", smdes))) %>% 
      filter(!is.na(coupleID))
    
    tps_pieds <- tps_pieds %>% 
      mutate(duree_model_pieds = durée) %>% 
      select(-durée) %>% 
      mutate_at(vars(c("smori", "smdes")), funs(as.character(.))) %>% 
      mutate(smori = case_when(smori == "1" ~ "001",
                               smori == "50" ~ "050",
                               TRUE ~ smori),
             smdes = case_when(smdes == "1" ~ "001",
                               smdes == "50" ~ "050",
                               TRUE ~ smdes))%>% 
      mutate(coupleID = case_when(smori != smdes ~ str_c(smori, "_", smdes))) %>% 
      filter(!is.na(coupleID))
    
  }
  
  # création des durées et heures d'arrivées restantes à partir de la modélisation
  
  data <- BD_brute %>% 
    filter(ENQUETE == nomEnq) %>% 
    mutate(coupleID = case_when(is.na(meth_ha) & smori != smdes ~ str_c(smori, "_", smdes)))
  
  # Joindre les temps modélisés
  data <- data %>% 
    left_join(., select(tps_voit, -smori, -smdes), by = "coupleID") %>% 
    left_join(., select(tps_pieds, -smori, -smdes), by = "coupleID")
  
  # Calculer hharv
  data <- data %>% 
    mutate(hharv = case_when(mobil == "1" & is.na(hrearv) & !is.na(coupleID) & modep %in% c("1", "2") ~ 
                               hhdep + ((mmdep + duree_model_voit)%/%60%%24),
                             mobil == "1" & is.na(hrearv) & !is.na(coupleID) & modep == "3" ~ 
                               hhdep + ((mmdep + duree_model_pieds)%/%60%%24),
                             TRUE ~ hharv),
           
           mmarv = case_when(mobil == "1" & is.na(hrearv) & !is.na(coupleID) & modep %in% c("1", "2") ~ 
                               (mmdep + duree_model_voit)%%60,
                             mobil == "1" & is.na(hrearv) & !is.na(coupleID) & modep == "3" ~ 
                               (mmdep + duree_model_pieds)%%60,
                             TRUE ~ mmarv),
           
           meth_ha = case_when(mobil == "1" & is.na(hrearv) & !is.na(coupleID) & !is.na(modep) ~ "5",
                               TRUE ~ meth_ha))
  
  
  # On refait le calcul des heures de fin ISO et des durées
  data <- data %>% 
    mutate(HEURE_FIN = case_when(meth_ha == "5" & hharv > 23 ~ 
                                   as.character.Date(ISOdatetime(2010, 1, 2, hharv-24, mmarv, 0)),
                                 meth_ha == "5" & hharv <= 23 ~ 
                                   as.character.Date(ISOdatetime(2010, 1, 1, hharv, mmarv, 0)),
                                 TRUE ~ HEURE_FIN),
           
           duree = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), ymd_hms(HEURE_DEB, truncated=3), units= "mins")))
  
  # data$HEURE_FIN <- ifelse(data$meth_ha== "5" & data$hharv>23, 
  #                          as.character.Date(ISOdatetime(2010, 1, 2, data$hharv-24, data$mmarv, 0)),
  #                          as.character.Date(ISOdatetime(2010, 1, 1, data$hharv, data$mmarv, 0)))
  # 
  # data$duree <- as.numeric(difftime(ymd_hms(data$HEURE_FIN, truncated=3), ymd_hms(data$HEURE_DEB, truncated=3), units= "mins"))
  
  return(data)
  
}

# data_mtl <- meth_ha_5(nomEnq = "MONTREAL")  
# data_ott <- meth_ha_5(nomEnq = "OTTAWA GATINEAU")

data_meth5 <- rbind(meth_ha_5(nomEnq = "MONTREAL"),
                    meth_ha_5(nomEnq = "OTTAWA GATINEAU"))


## interlude
bibi5 <- data_meth5 %>% 
  select(ENQUETE, clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, duree_model_voit, duree_model_pieds, modep, smori, smdes, meth_ha)

m5 <- bibi5 %>% 
  filter(meth_ha == "5") %>% 
  mutate(pb = is.na(duree))

m5na <- m5 %>% 
  filter(pb == TRUE) 

m5na_pb <- m5na %>% 
  filter_at(.vars = c("smori", "smdes"), all_vars(.!="999"))

rm(bibi5, m5, m5na, m5na_pb)
  


# Combiner les deux résultats, check et sauvegarde ----
data <- bind_rows(data_meth5, data_meth4)

# encore des corrections
data <- data %>% 
  mutate(hharv = case_when(meth_ha == "2b" & mmarv >= 60 ~ hharv+1,
                           TRUE ~ hharv),
         mmarv = case_when(meth_ha == "2b" & mmarv >= 60 ~ mmarv-60,
                           TRUE ~ mmarv))

data <- data %>% 
  mutate(HEURE_FIN = case_when(meth_ha == "2b" & hharv > 23 ~ 
                                 as.character.Date(ISOdatetime(2010, 1, 2, hharv-24, mmarv, 0)),
                               meth_ha == "2b" & hharv <= 23 ~ 
                                 as.character.Date(ISOdatetime(2010, 1, 1, hharv, mmarv, 0)),
                               TRUE ~ HEURE_FIN),
         
         duree = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), ymd_hms(HEURE_DEB, truncated=3), units= "mins")))



## Final check
bibi <- data %>% 
  select(ENQUETE, clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, duree_moy, duree_model_voit, duree_model_pieds, modep, motif, smori, smdes, meth_ha)

## Personnes restées à la maison
bibi0 <- bibi %>% 
  filter(meth_ha == "0")

## Répondants mobiles
bibi1 <- bibi %>% 
  filter(meth_ha == "1")

## minutes à corriger
bibi2 <- bibi %>% 
  filter(meth_ha %in% c("2a", "2b"))

## Déplacements intra-sec
bibi3 <- bibi %>% 
  filter(meth_ha == "3")

## Reste des individus mobiles sans durée moyenne de ref
bibi4 <- bibi %>% 
  filter(meth_ha == "4")

## Reste des individus sans heure d'arrivée car déplacement dans 999
bibi5 <- bibi %>% 
  filter(meth_ha == "5")

## reste les sans mobilté ou refus
## et reste des mobiles mais avec smori, smdes ou modep NA
bibi_methna <- bibi %>% 
  filter(is.na(meth_ha))

# Individus mobiles mais sans heures/durée (2.5%)
bibi_dureeNA <- bibi %>% 
  filter(is.na(duree) & mobil == "1")
id_na <- sort(unique(bibi_dureeNA$clepersonne))

# individus mobiles totales
ind_mobil <- sort(unique(bibi$clepersonne[bibi$mobil=="1"]))



saveRDS(data, "BD_eod_meth_ha.RDS")




#~ 6. correction heure d'arrivée again and again ----
data <- readRDS("BD_eod_meth_ha.RDS")


# Pour chaque individu, l'heure d'arrivée d'un déplacement 
# ne doit pas être supérieure à l'heure de départ du trajet suivant
# meth_ha = 6
data <- data %>% 
  group_by(clepersonne) %>% 
  mutate(meth_ha = case_when(HEURE_FIN > lead(HEURE_DEB) ~ "6",  # changed 9,337 values (1%) of 'meth_ha'
                             TRUE ~ meth_ha))

# si c'est le cas, on affecte l'heure d'arrivée = heure de départ du déplacement suivant
data <- data %>% 
  mutate(hharv = case_when(meth_ha == "6" ~ as.numeric(hour(lead(HEURE_DEB))),
                           TRUE ~ hharv),
         mmarv = case_when(meth_ha == "6" ~ as.numeric(minute(lead(HEURE_DEB))),
                           TRUE ~ mmarv)) %>% 
  ungroup()

# et on répercute sur isoDateTime et durée
data$HEURE_FIN <- ifelse(data$hharv>23,
                         as.character.Date(ISOdatetime(2010, 1, 2, data$hharv-24, data$mmarv, 0)),
                         as.character.Date(ISOdatetime(2010, 1, 1, data$hharv, data$mmarv, 0)))

data$duree <- as.numeric(difftime(ymd_hms(data$HEURE_FIN, truncated=3), ymd_hms(data$HEURE_DEB, truncated=3), units= "mins"))



## CHECK
bibi <- data %>% 
  select(ENQUETE, clepersonne, noper, mobil, nodep, hredep, hrearv, hhdep, mmdep, hharv, mmarv,
         HEURE_DEB, HEURE_FIN, duree, duree_moy, duree_model_voit, duree_model_pieds, modep, motif, smori, smdes, meth_ha)

bibi <- bibi %>% 
  filter(mobil == "1") %>% 
  filter(!is.na(duree))

bibi_pb <- bibi %>% filter(clepersonne %in% bibi$clepersonne[bibi$meth_ha=="6"])

bibi_pb <- bibi_pb %>% 
  group_by(clepersonne) %>% 
  mutate(pb = case_when(HEURE_FIN > lead(HEURE_DEB) ~ TRUE))


## Sauvegarde
saveRDS(data, "BD_eod_meth_ha.RDS")



