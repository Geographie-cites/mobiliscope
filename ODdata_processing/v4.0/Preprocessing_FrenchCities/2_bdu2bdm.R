# ================================================================================#
#               Construction de la base de données du Mobiliscope v4
#                                       script
#
# Description : construction de la BD Mobiliscope à partir des tables 'déplacement'
#               et 'personne' transmises par le CEREMA en septembre 2020 : 
#               création de nouvelles variables ; 
#               conservation des variables utiles au Mobiliscope ; 
#               modification de la longueur des codes ZF et secteurs
#
# En entrée : BU CEREMA
# En sortie : BD MOBILISCOPE
#
#
# juillet 2020 - AD
# ================================================================================#


# NB :
# Compte-tenu de nos échanges avec le Cerema concernant la mise en cohérence des 
# identifiants uniques des ZF et secteurs (cf. verif_codages.doc) : 
#      - les secteurs 'virtuels' du sur-échantillonnage de Toulouse et Nancy sont recodés
#      - les zones fines 'virtuelles' du sur-échantillonnage de Toulouse, Nancy
#        et Montpellier sont recodés APRES la création des identifiants uniques 
#      - Pour Bayonne, les 2 secteurs origine-destination hors zone d'enquête et 
#        donc inexistant dans la BD Géo sont recodés '999'
#      - Correction d'un code Insee, ED Bayonne
#      - Correction de P25 pour 1650 enquêtés de Nice
# 
# + Concernant l'EGT IDF, les infos concernant le département de résidence et
# le niveau de revenu sont récupérées par jointure avec les tables 'personne' et 
# 'ménage' originelles.
#
# + ATTENTION : présence des ED Valenciennes 2011 et 2019. Se référer à la variable
# LIB_ED


# content
# 1. Création de la nouvelle table des déplacements 
# 2. Création de la nouvelle table des personnes
# 3. Recodage des zones fines 'étudiantes'
# 4. Correction des heures de déplacement
# 5. Correction des individus manquants (NICE et Besançon)


# set working directory
setwd("")

# Chargement des bibliothèques
library(stringr)
library(TraMineR)
library(plyr) # mapvalues
library(tidylog)
library(tidyverse)
library(Hmisc)



# Chargement de la base de données unifiée du CEREMA
tripTable <- readRDS("BDU_cerema_depl.RDS")
indTable <- readRDS("BDU_cerema_pers.RDS")


# ==== 1. Création de la nouvelle table des déplacements ====

## ----~ 1.1 Modification des codages ----

## Longueur des variables ---
## Code secteurs et ZF, respectivement de longueur 3 et 6
## Pour l'IDF de longueur 4 et 7
tripTable <- tripTable %>% 
  mutate(ZFD = case_when(!IDD4 %in% c("79191", "59606", "37261", "75056") ~ substr(ZFD, 4, 9),
                         IDD4 == "59606" & IDD3 == "2011" ~ substr(ZFD, 4, 9), # Valenciennes 2011
                         IDD4 == "59606" & IDD3 == "2019" ~ substr(ZFD, 1, 6), # Valenciennes 2019
                         IDD4 %in% c("79191", "37261") ~ substr(ZFD, 1, 6),
                         IDD4 == "75056" ~ substr(ZFD, 3, 9)),
         STD = case_when(IDD4 != "75056" ~ substr(STD, 2, 4),
                         TRUE ~ STD),
         D3 = case_when(!IDD4 %in% c("79191", "59606", "37261", "75056") ~ substr(D3, 4, 9),
                        IDD4 == "59606" & IDD3 == "2011" ~ substr(D3, 4, 9),
                        IDD4 == "59606" & IDD3 == "2019" ~ substr(D3, 1, 6),
                        IDD4 %in% c("79191", "37261") ~ substr(D3, 1, 6),
                        IDD4 == "75056" ~ substr(D3, 3, 9)),
         STDO = case_when(IDD4 != "75056" ~ substr(STDO, 2, 4),
                          TRUE ~ STDO),
         D7 = case_when(!IDD4 %in% c("79191", "59606", "37261", "75056") ~ substr(D7, 4, 9),
                        IDD4 == "59606" & IDD3 == "2011" ~ substr(D7, 4, 9),
                        IDD4 == "59606" & IDD3 == "2019" ~ substr(D7, 1, 6),
                        IDD4 %in% c("79191", "37261") ~ substr(D7, 1, 6),
                        IDD4 == "75056" ~ substr(D7, 3, 9)),
         STDD = case_when(IDD4 != "75056" ~ substr(STDD, 2, 4),
                          TRUE ~ STDD))

## IDF: recoder '9999' en '999'
tripTable <- tripTable %>% 
  mutate(STDO = case_when(IDD4 == "75056" & STDO == "9999" ~ "999",
                          TRUE ~ STDO),
         STDD = case_when(IDD4 == "75056" & STDD == "9999" ~ "999",
                          TRUE ~ STDD))

## IDF : changer date 2011 -> 2010
tripTable <- tripTable %>% 
  mutate(IDD3 = case_when(IDD4 == "75056" ~ "2010",
                          TRUE ~ IDD3))



## Recodage de secteurs ---

# Recodage de STP et STD codés en secteur virtuel étudiant 
# Toulouse : 24 secteurs à recoder, Nancy : 10 secteurs
tripTable$STD <- ifelse(tripTable$IDD4 == "31555", 
                        mapvalues(tripTable$STD, c("101", "102", "103", "104", "105", "106", "108", "112", "121", "132", "210", "211", "223", "224", "313", "315", "316", "317", "328", "329", "330", "434", "446", "447"),
                                                 c("001", "002", "003", "004", "005", "006", "008", "012", "021", "032", "010", "011", "023", "024", "013", "015", "016", "017", "028", "029", "030", "034", "046", "047")),
                     ifelse(tripTable$IDD4 == "54395",
                            mapvalues(tripTable$STD, c("202", "203", "204", "210", "216", "217", "218", "219", "221", "223"), 
                                                     c("102", "103", "104", "110", "116", "117", "118", "119", "121", "123")),
                            tripTable$STD)) 

# Recodage de STDO ET STDD absent de la BD Géo 
# Bayonne : 2 secteurs OD hors périmètre
# Toulouse : 4 secteurs OD virtuels étudiants
tripTable <- tripTable %>% 
  mutate(STDO = case_when(IDD4 == "64102" & STDO %in% c("201", "202") ~ "999",
                          IDD4 == "31555" & STDO == "210" ~ "010",
                          IDD4 == "31555" & STDO == "211" ~ "011",
                          IDD4 == "31555" & STDO == "224" ~ "024",
                          IDD4 == "31555" & STDO == "313" ~ "013",
                          TRUE ~ STDO),
         STDD = case_when(IDD4 == "64102" & STDD %in% c("201", "202") ~ "999",
                          IDD4 == "31555" & STDD == "210" ~ "010",
                          IDD4 == "31555" & STDD == "211" ~ "011",
                          IDD4 == "31555" & STDD == "224" ~ "024",
                          IDD4 == "31555" & STDD == "313" ~ "013",
                          TRUE ~ STDD))

# + Un code Insee, Ed Bayonne  
tripTable <- tripTable %>% 
  mutate(GD1 = case_when(IDD4 == "64102" & ZFD == "101005" ~ "40187",
                         TRUE ~ GD1))

## Identifiant unique ---         
## Création d'un identifiant unique pour chaque individu (concaténation de IDD4, ZFD, ECH, PER et METHOD)
## Pour Brest et Poitiers, des personnes d'un même ménage, l'une enquêtée en faf
## et l'autre par tel, avec le même identifiant => ajout de la méthode d'enquête 
## en suffixe d'identifiant
## Création d'un identifiant unique pour chaque enquête (concaténation de IDD3 (année) et IDD4 (ville centre))
tripTable <- tripTable %>% 
  mutate(ID_IND = str_c(IDD4, "_", ZFD, "_", ECH, "_", PER, "_", METHOD),
         ID_ED = str_c(tripTable$IDD4, "_", tripTable$IDD3))

## Création d'un libellé pour chaque enquête 
IDM4 <- read.csv2("txt/correspondance_IDM4.csv", 
                  encoding = "UTF-8", colClasses = c(rep("character", 4)))

tripTable <- left_join(tripTable, select(IDM4, IDD4 = CODE_INSEE_VC, ENQUETE, ENQUETE_MIN))
tripTable <- tripTable %>% mutate(LIB_ED = str_c(ENQUETE_MIN, ", ", IDD3))

rm(IDM4)


## ----~ 1.2 Création de nouvelles variables ----

## O_PURPOSE et D_PURPOSE (D2A et D5A en 6 modalités) ---
## 1 : domicile ; 2 : travail ; 3 : études ; 4 : achats ; 5 : loisirs ; 6 : autre
correspMotif <- read.csv2("txt/correspondance_motif.csv",
                    encoding = "UTF-8", colClasses = c(rep("character", 2)))

tripTable <- left_join(x = tripTable, 
                       y = select(correspMotif, D2A = D2A_D5A, O_PURPOSE = PURPOSE), 
                       by = "D2A")
tripTable <- left_join(x = tripTable, 
                       y = select(correspMotif, D5A = D2A_D5A, D_PURPOSE = PURPOSE), 
                       by = "D5A")
rm(correspMotif)

## MODE (MODP en 3 modalités) ---
## 1: transport public ; 2 : véhicule motorisé privé ; 3: transport doux
correspMode <- read.csv2("txt/correspondance_mode.csv", 
                         encoding = "UTF-8", colClasses = c(rep("character", 2)))

tripTable <- left_join(x = tripTable, y = correspMode, by = "MODP")
rm(correspMode)

## MODE_adherant (en 2 modalités) ---
## 1: mode adhérant ; 0: mode non adhérant
tripTable <- tripTable %>% 
  mutate(MODE_ADH = case_when(MODE == "03" ~ 1,
                              TRUE ~ 0))

## ZONAGE_SEC ---
## (variable construite dans le script 1_zonage_residentialArea.R)

### Au préalable, création d'une clé de jointure
tripTable$ID_SEC <- str_c(tripTable$ENQUETE, "_", tripTable$IDD3, "_", tripTable$STD)

### Import de la table de correspondance
correspZone <- read.csv2("txt/correspondance_SEC_ZONAGE_2019.csv",
                         encoding = "UTF-8")

### Jointure
tripTable <- left_join(x = tripTable, y = correspZone, by = "ID_SEC")


### suppression de la clé de jointure
tripTable$ID_SEC <- NULL
rm(correspZone)


## ----~ 1.3 Reshape et sauvegarde ----

## Construction de la table avec les variables utiles ---
tripTable <- tripTable %>%
     transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, NDEP = as.character(NDEP), 
               RES_ZF = ZFD, RES_COG = GD1, RES_SEC = STD, 
               O_ZF = D3, O_COG = GDO1, O_SEC = STDO, 
               D_ZF = D7, D_COG = GDD1, D_SEC = STDD, 
               H_START = as.integer(substr(D4, 1, 2)), M_START = as.integer(substr(D4, 3, 4)),
               H_END = as.integer(substr(D8, 1, 2)), M_END = as.integer(substr(D8, 3, 4)),
               D9 = as.numeric(D9), D2 = D2A, O_PURPOSE, D5 = D5A, D_PURPOSE, 
               MODP, MODE, MODE_ADH, ZONAGE_SEC)





# ==== 2. Création de la nouvelle table des personnes ====

## Sélection des personnes enquêtées (PENQ = 1) 
## et parmi les pers. enquêtées, sélection des personnes 
#♣ ayant réalisées au moins un déplacement (P25 = 1) 
## et des personnes qui sont restées à domicile (P25 =2)
indTable <- filter(indTable, PENQ == "1" & P25 == "1" | P25 == "2")


## ----~ 2.1 Modification des codages ----

## Longueur des variables ---
## Retrait des préfixes/suffixes '000'
## Code secteurs et ZF, respectivement de longueur 3 et 6
## Pour l'IDF de longueur 4 et 7
indTable <- indTable %>% 
  mutate(ZFP = case_when(!IDP4 %in% c("79191", "59606", "37261", "75056") ~ substr(ZFP, 4, 9),
                         IDP4 == "59606" & IDP3 == "2011" ~ substr(ZFP, 4, 9),
                         IDP4 == "59606" & IDP3 == "2019" ~ substr(ZFP, 1, 6),
                         IDP4 %in% c("79191", "37261") ~ substr(ZFP, 1, 6),
                         IDP4 == "75056" ~ substr(ZFP, 3, 9)),
         STP = case_when(IDP4 != "75056" ~ substr(STP, 2, 4),
                         TRUE ~ STP))

## IDF : changer date 2011 -> 2010
indTable <- indTable %>% 
  mutate(IDP3 = case_when(IDP4 == "75056" ~ "2010",
                          TRUE ~ IDP3))

##  Recodage des secteurs --- 

# Recodage de STP codé en secteur virtuel étudiant
# Toulouse : 24 secteurs à recoder, Nancy : 10 secteurs
indTable$STP <- ifelse(indTable$IDP4 == "31555", 
                       mapvalues(indTable$STP, c("101", "102", "103", "104", "105", "106", "108", "112", "121", "132", "210", "211", "223", "224", "313", "315", "316", "317", "328", "329", "330", "434", "446", "447"),
                                                c("001", "002", "003", "004", "005", "006", "008", "012", "021", "032", "010", "011", "023", "024", "013", "015", "016", "017", "028", "029", "030", "034", "046", "047")),
                       ifelse(indTable$IDP4 == "54395",
                               mapvalues(indTable$STP, c("202", "203", "204", "210", "216", "217", "218", "219", "221", "223"), 
                                                       c("102", "103", "104", "110", "116", "117", "118", "119", "121", "123")),
                               indTable$STP)) 

# + Un code Insee, Ed Bayonne  
indTable <- indTable %>% 
  mutate(GP1 = case_when(IDP4 == "64102" & ZFP == "101005" ~ "40187",
                         TRUE ~ GP1))

## Identifiant unique ---
## Création d'un identifiant unique pour chaque individu (concaténation de IDP4, ZFP, ECH et PER)
## Pour Brest et Poitiers, des personnes d'un même ménage, l'une enquêtée en faf
## et l'autre par tel, avec le même identifiant => ajout de la méthode d'enquête 
## en suffixe d'identifiant
## Création d'un identifiant unique pour chaque enquête (concaténation de IDD3 (année) et IDD4 (ville centre))
indTable <- indTable %>% 
  mutate(ID_IND = str_c(IDP4, "_", ZFP, "_", ECH, "_", PER, "_", METHOD),
         ID_ED = str_c(IDP4, "_", IDP3))

# Les deux Valenciennes ont des codes zf identiques => doublon chez les individus ?
length(unique(indTable$ID_IND))
# doublon <- indTable %>% filter(duplicated(ID_IND)) %>% select(ID_IND)
# write.csv2(doublon, "01_DONNEES_SOURCES/cerema/explo_correctif_BU2020/id_ind_doublon.csv", row.names = FALSE)
# rm(doublon)

## ----~ 2.2 Création de nouvelles variables ----

## libellé pour chaque enquête 
IDM4 <- read.csv2("txt/correspondance_IDM4.csv", 
                  encoding = "UTF-8", colClasses = c(rep("character", 4)))

indTable <- left_join(indTable, select(IDM4, IDP4 = CODE_INSEE_VC, ENQUETE, ENQUETE_MIN))
indTable <- indTable %>% mutate(LIB_ED = str_c(ENQUETE_MIN, ", ", IDP3))

rm(IDM4)


## variable classe d'âge (KAGE) ---
## 0 : 15 ans ou moins ; 1 : 16-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus
indTable <- indTable %>% 
    mutate(KAGE = case_when(as.numeric(P4) >= 16 & as.numeric(P4) <= 24 ~ "1",
                            as.numeric(P4) >= 25 & as.numeric(P4) <= 34 ~ "2",
                            as.numeric(P4) >= 35 & as.numeric(P4) <= 64 ~ "3",
                            as.numeric(P4) >= 65 ~ "4",
                            TRUE ~ "0"))

## variable niveau d'éducation (EDUC) en 4 modalités ---
## 1 : low ; 2 : middle-low ; 3 : middle-high ; 4 : high
correspEduc <- read.csv2("txt/correspondance_educ.csv", 
                          encoding = "UTF-8", colClasses = c(rep("character", 2)))

indTable <- indTable %>% left_join(., correspEduc)
rm(correspEduc)

## variable CSP en 5 modalités (à partir de la PCS courte) ---
## 1 : inactive (unemployed long term, housework) ; 2 : low (workers) ; 3 : middle-low (employees)
## 4 : middle-high (intermediary professionals ; craftsmen, merchants & employers of more than 10 employees ; farm operators) ; 5 : high (managers, intellectual professionals)
correspCSP <- read.csv2("txt/correspondance_csp.csv", 
                         encoding = "UTF-8", colClasses = c(rep("character", 2)))

indTable <- indTable %>% left_join(., correspCSP)
rm(correspCSP)

## variable occupation principale en 5 modalités (OCC) ---
## 1 : active ; 2 : student ; 3 : unemployed ; 4 : retired ; 5 : inactive
correspOcc <- read.csv2("txt/correspondance_occ.csv", 
                        encoding = "UTF-8", colClasses = c(rep("character", 2)))

indTable <- indTable %>% left_join(., correspOcc)
rm(correspOcc)

## variable "ZONAGE_SEC" ---
## construite dans le script 1_zonage_residentialArea.R

### Au préalable, création d'une clé de jointure
indTable$ID_SEC <- str_c(indTable$ENQUETE, "_", indTable$IDP3, "_", indTable$STP)
### Import de la table de correspondance
correspZone <- read.csv2("txt/correspondance_SEC_ZONAGE_2019.csv",
                         encoding = "UTF-8")
### Jointure
indTable <- left_join(x = indTable, y = correspZone, by = "ID_SEC")

# bibi <- indTable %>% filter(is.na(ZONAGE_SEC))
# rm(bibi)

### suppression de la clé de jointure
indTable$ID_SEC <- NULL
rm(correspZone)


## VARIABLES COMPLEMENTAIRES :

## Variable P14 
# TRAVAIL OU ETUDES A DOMICILE	
# 1	Oui
# 2	Non
sort(unique(indTable$P14))
indTable <- indTable %>% 
  mutate(P14 = case_when(P14==" " ~ NA_character_,
                         TRUE ~ P14))

## Variable P13B
# FREQUENCE TELETRAVAIL	
# 1	Non, jamais
# 2	Oui, plusieurs jours par semaine
# 3	Oui, plusieurs jours par mois
# 4	Oui, occasionnellement
sort(unique(indTable$P13B))
indTable <- indTable %>% 
  mutate(P13B = case_when(P13B==" " ~ NA_character_,
                         TRUE ~ P13B))

## Variable P15 ZF de travail ou d'étude
sort(unique(indTable$P15))
indTable <- indTable %>% 
  mutate(P15 = case_when(P15=="         " ~ NA_character_,
                          TRUE ~ P15))

indTable <- indTable %>% 
  mutate(P15 = case_when(!IDP4 %in% c("79191", "59606", "37261", "75056") ~ substr(P15, 4, 9),
                         IDP4 == "59606" & IDP3 == "2011" ~ substr(P15, 4, 9),
                         IDP4 == "59606" & IDP3 == "2019" ~ substr(P15, 1, 6),
                         IDP4 %in% c("79191", "37261") ~ substr(P15, 1, 6),
                         IDP4 == "75056" ~ substr(P15, 3, 9)))
sort(unique(indTable$P15))

## Création P15_B Secteur de travail ou d'étude
indTable <- indTable %>% 
  mutate(P15_B = substr(P15, 1, 3))

## Est-ce que GP5 (Insee ZF) et STW (secteur) sont des lieux de travail ou d'étude ?
## + est-ce que GP5 = cog2019 ?
sort(unique(indTable$STW))
indTable <- indTable %>% 
  mutate(STW = case_when(STW == "    " ~ NA_character_,
                         TRUE ~ STW)) %>% 
  mutate(STW = case_when(IDP4 != "75056" ~ substr(STW, 2, 4),
                         TRUE ~ STW))

sort(unique(indTable$GP5))
indTable <- indTable %>% 
  mutate(GP5 = case_when(GP5 == "     " ~ NA_character_,
                         TRUE ~ GP5))
  
# P9	OCCUPATION PRINCIPALE	
# 1	Travail à plein temps
# 2	Travail à temps partiel
# 3	Formation en alternance (apprentissage, professionnalisation), stage.
# 4	Étudiant
# 5	Scolaire jusqu’au BAC
# 6	Chômeur et/ou recherche un emploi
# 7	Retraité
# 8	Reste au foyer
# 9	Autre
sort(unique(indTable$P9))
indTable <- indTable %>% 
  mutate(P9 = case_when(P9 == " " ~ NA_character_,
                         TRUE ~ P9))

## DP15 distance domicile-travail/étude à vol d'oiseau (en mètres ?)
sort(unique(indTable$DP15))
indTable <- indTable %>% 
  mutate(DP15 = as.numeric(DP15))

# P26	Travail la veille	
# 1	Oui, hors du domicile.
# 2	Oui mais à domicile (travail toujours au domicile).
# 3	Oui mais à domicile – télétravail.
# 4	Oui mais à domicile - autre
# 5	Non, ne travaille jamais ce jour-là.
# 6	Non en raison de congés, grève ou maladie.
# 7	oui (sans précision)
# 8	non (sans précision)
sort(unique(indTable$P26))
indTable <- indTable %>% 
  mutate(P26 = case_when(P26 == " " ~ NA_character_,
                        TRUE ~ P26))

## Construction d'une table avec variables complémentaires
indTable_compl <- indTable %>% 
  transmute(ID_IND, W_IND = as.numeric(COEQ), ID_ED, LIB_ED, ENQUETE, 
            P9, P13B, P14, P15, P15_B, STW, GP5, DP15, P26)

## Construction de la table avec les variables utiles pour BD Mobiliscope---
indTable <- indTable %>%
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_ZF = ZFP, RES_COG = GP1, RES_SEC = STP, 
            SEX = P2, AGE = as.numeric(P4), KAGE, 
            P8, EDUC, P9, OCC, PCSD, PCSC, 
            CSP, W_IND = as.numeric(COEQ), ZONAGE_SEC)


length(unique(indTable$ID_IND))
#bibi <- indTable %>% filter(duplicated(ID_IND))


## ----~ 2.3 EGT IDF ----
## Ajout des variables propres à l'EGT IDF 

### Chargement de la base de données brutes de l'EGT
load("egt/personnes_semaine.RData")
load("egt/menages_semaine.RData")

indIDF <- personnes_semaine
menIDF <- menages_semaine
rm(personnes_semaine, menages_semaine)


### Création d'une clé de jointure
indIDF <- indIDF %>% 
  mutate(ECH = paste0("0", substr(nquest, 5, 8)),
         PERS = case_when(nchar(as.character(np))== 1 ~ paste0("0", as.character(np)),
                          TRUE ~ as.character(np)),
         ID_IND = paste0("75056_", resc, "_", ECH, "_", PERS, "_faf"))

#### Vérification cohérence entre les ID des deux tables
bibi <- indTable %>% filter(ENQUETE == "IDF")
setdiff(indIDF$ID_IND, bibi$ID_IND)  
setdiff(bibi$ID_IND, indIDF$ID_IND)
rm(bibi)


### Création de la variable département de résidence (recodage de resdep)
### 1: Paris ; 2: Seine-St-Denis, 3: Val-de-Marne, 4: Hauts-de-Seine; 5: Grande couronne
indIDF <- indIDF %>% 
  mutate(DEP = plyr::mapvalues(resdep, 
                               c("75", "93", "94", "92", "91", "95", "77", "78"), 
                               c( "1", "2", "3", "4", "5", "5", "5", "5")))


### Ajout de la variable 'revenu' du ménage
indIDF <- left_join(x = indIDF, y = select(menIDF, nquest, revenu), by = "nquest")

# Calcul de l'indicateur de revenu 
# revenus par UC (selon INSEE)
# nombre d'adultes du ménage (avec et sans le premier adulte)
indIDF_men <- group_by(select(indIDF, nquest, age), nquest)
indIDF_temp <- as.data.frame(dplyr::summarize(indIDF_men, 
                                              nbad = sum(age >= 18, na.rm=TRUE), 
                                              nbadMoinsUn = sum(age >= 18, na.rm=TRUE)-1, 
                                              nmoins14 = sum(age<14, na.rm=TRUE)))
indIDF <- left_join(x = indIDF, y= indIDF_temp, by = "nquest")
rm(indIDF_men, indIDF_temp)

# Les unités de consommation sont généralement calculées 
# selon l'échelle d'équivalence dite de l'OCDE modifiée 
# qui attribue 1 uc au premier adulte du ménage, 
# 0,5 uc aux autres personnes de 14 ans ou plus 
# et 0,3 uc aux enfants de moins de 14 ans.
indIDF$REV_UC <- ifelse(as.numeric(indIDF$revenu)==1, 400/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                          ifelse(as.numeric(indIDF$revenu)==2, 1000/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                 ifelse(as.numeric(indIDF$revenu)==3, 1400/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                        ifelse(as.numeric(indIDF$revenu)==4, 1800/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                               ifelse(as.numeric(indIDF$revenu)==5, 2200/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                                      ifelse(as.numeric(indIDF$revenu)==6, 2700/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                                             ifelse(as.numeric(indIDF$revenu)==7, 3250/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                                                    ifelse(as.numeric(indIDF$revenu)==8, 3750/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                                                           ifelse(as.numeric(indIDF$revenu)==9, 5000/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),
                                                                                  ifelse(as.numeric(indIDF$revenu)==10, 7000/(1+indIDF$nbadMoinsUn*0.5+indIDF$nmoins14*0.3),NA))))))))))

### Création de la variable 'REV' en 4 modalités 
indIDF <- indIDF %>% 
  mutate(REV = case_when(REV_UC < 1084 ~ "1",
                         REV_UC >= 1084 & REV_UC < 1806 ~ "2",
                         REV_UC >= 1806 & REV_UC < 2890 ~ "3",
                         REV_UC >= 2890 ~ "4")) 


### Joindre les variables propres à l'EGT IDF à la table des personnes
indTable <- left_join(indTable, 
                      select(indIDF, ID_IND, RES_DEP = resdep, DEP, KREV = revenu, REV_UC, REV), 
                      by = "ID_IND")

rm(indIDF, menIDF)
length(unique(indTable$ID_IND))

## arrange
indTable <- indTable %>% 
  arrange(ENQUETE, RES_SEC)




# ==== 3. Recodage des zones fines 'étudiantes' ====



## ----~ Montpellier ----

# code en 'XXX-9XX' correspondant aux ZF virtuelles du sur-échantillonnage étudiant
# 15 ZF de résidence virtuelles à recoder pour les faire correspondre à la BU géo
# Important pour la prise en compte de cette population dans le calcul du ratio d'hab. en QPV
virtual_zf <- c("005906", "006902", "006908", "006914", "014902", "022902", 
                "022903", "022904", "022905", "022910", "023901", "025903",
                "025905","026909","028904")

# check
# bibi <- tripTable %>% filter(ENQUETE == "MONTPELLIER" & RES_ZF %in% virtual_zf)
# length(unique(bibi$RES_ZF))
# lulu <- indTable %>% filter(ENQUETE == "MONTPELLIER" & RES_ZF %in% virtual_zf)
# length(unique(lulu$RES_ZF))
# rm(bibi, lulu)

tripTable <- tripTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "MONTPELLIER" & RES_ZF == "005906" ~ "005006",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006902" ~ "006002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006908" ~ "006008",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006914" ~ "006014",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "014902" ~ "014002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022902" ~ "022002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022903" ~ "022003",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022904" ~ "022004",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022905" ~ "022005",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022910" ~ "022010",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "023901" ~ "023001",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "025903" ~ "025003",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "025905" ~ "025005",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "026909" ~ "026009",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "028904" ~ "028004",
                            TRUE ~ RES_ZF))

indTable <- indTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "MONTPELLIER" & RES_ZF == "005906" ~ "005006",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006902" ~ "006002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006908" ~ "006008",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "006914" ~ "006014",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "014902" ~ "014002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022902" ~ "022002",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022903" ~ "022003",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022904" ~ "022004",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022905" ~ "022005",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "022910" ~ "022010",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "023901" ~ "023001",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "025903" ~ "025003",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "025905" ~ "025005",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "026909" ~ "026009",
                            ENQUETE == "MONTPELLIER" & RES_ZF == "028904" ~ "028004",
                            TRUE ~ RES_ZF))

### ZF virtuelle en ZF origine-destination ?
bibi <- tripTable %>% filter(ENQUETE == "MONTPELLIER" & O_ZF %in% virtual_zf)
sort(unique(bibi$O_ZF))
lulu <- tripTable %>% filter(ENQUETE == "MONTPELLIER" & D_ZF %in% virtual_zf)
sort(unique(lulu$D_ZF))
rm(bibi, lulu)


## ----~ Nancy ----
virtual_zf <- c("202107", "203104", "204107", "210106", "210107", "210108",
                "210109", "216106", "217101", "218107", "218108", "219103",
                "221116", "223104", "223106")

real_zf <- c("102107", "103104", "104107", "110106", "110107", "110108",
             "110109", "116106", "117101", "118107", "118108", "119103",
             "121116", "123104", "123106")

tripTable <- tripTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "NANCY" & RES_ZF %in% virtual_zf ~ 
                              mapvalues(RES_ZF, virtual_zf, real_zf),
                            TRUE ~ RES_ZF))

indTable <- indTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "NANCY" & RES_ZF %in% virtual_zf ~ 
                              mapvalues(RES_ZF, virtual_zf, real_zf),
                            TRUE ~ RES_ZF))

### ZF virtuelle en ZF origine-destination ?
bibi <- tripTable %>% filter(ENQUETE == "NANCY" & O_ZF %in% virtual_zf)
sort(unique(bibi$O_ZF))
lulu <- tripTable %>% filter(ENQUETE == "NANCY" & D_ZF %in% virtual_zf)
sort(unique(lulu$D_ZF))
rm(bibi, lulu)

## ----~ Toulouse ----
virtual_zf <- c("101005", "102010", "102003", "102004", "102002", "103004",
                "103020", "103021", "103018", "103003", "104006", "104005",
                "104004", "104010", "105012", "105011", "105013", "106021",
                "108002", "108001", "112001", "112002", "112014", "121035",
                "132011", "210018", "211008", "223052", "223027", "223048",
                "223037", "223051", "224023", "224024", "224013", "224010", 
                "224001", "224012", "224014", "224002", "224011", "224025",
                "313016", "313009", "315018", "316009", "316018", "316002",
                "316015", "316010", "317007", "317006", "328030", "328001",
                "328002", "329008", "329031", "329004", "330025", "330012",
                "434005", "446037", "446027", "446026", "446024", "447011", 
                "329002")

real_zf <- c("001005", "002010", "002003", "002004", "002002", "003004",
             "003020", "003021", "003018", "003003", "004006", "004005",
             "004004", "004010", "005012", "005011", "005013", "006021",
             "008002", "008001", "012001", "012002", "012014", "021035",
             "032011", "010018", "011008", "023052", "023027", "023048",
             "023037", "023051", "024023", "024024", "024013", "024010", 
             "024001", "024012", "024014", "024002", "024011", "024025",
             "013016", "013009", "015018", "016009", "016018", "016002",
             "016015", "016010", "017007", "017006", "028030", "028001",
             "028002", "029008", "029031", "029004", "030025", "030012",
             "034005", "046037", "046027", "046026", "046024", "047011", 
             "029002")

tripTable <- tripTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "TOULOUSE" & RES_ZF %in% virtual_zf ~ 
                              mapvalues(RES_ZF, virtual_zf, real_zf),
                            TRUE ~ RES_ZF))

indTable <- indTable %>% 
  mutate(RES_ZF = case_when(ENQUETE == "TOULOUSE" & RES_ZF %in% virtual_zf ~ 
                              mapvalues(RES_ZF, virtual_zf, real_zf),
                            TRUE ~ RES_ZF))

### ZF virtuelle en ZF origine-destination ?
bibi <- tripTable %>% filter(ENQUETE == "TOULOUSE" & O_ZF %in% virtual_zf)
sort(unique(bibi$O_ZF))
lulu <- tripTable %>% filter(ENQUETE == "TOULOUSE" & D_ZF %in% virtual_zf)
sort(unique(lulu$D_ZF))
rm(bibi, lulu)

### Correction 
tripTable <- tripTable %>% 
  mutate(O_ZF = case_when(ENQUETE == "TOULOUSE" & O_ZF %in% virtual_zf ~ 
                              mapvalues(O_ZF, virtual_zf, real_zf),
                            TRUE ~ O_ZF),
         D_ZF = case_when(ENQUETE == "TOULOUSE" & D_ZF %in% virtual_zf ~
                            mapvalues(D_ZF, virtual_zf, real_zf),
                          TRUE ~ D_ZF))





# ==== 4. Correction des heures de déplacement ====

## Des durées de présence négatives dues à des erreurs d'enregistrement des heures
## de déplacement dans les données sources => correction manuelle dans la BD Mobiliscope
## puis nouvelle sortie de la table de présence des enquêtes concernées via humanum



## ----~ Besançon ----
### Corrections
tripTable$M_START[tripTable$ID_IND=="25056_127011_00725_01_tel" & tripTable$NDEP=="05"] <- 55

## ----~ Paris ----
### Corrections
tripTable$H_START[tripTable$ID_IND=="75056_557672E_01061_01_faf" & tripTable$NDEP=="03"] <- 12
tripTable$M_END[tripTable$ID_IND=="75056_561633E_01801_01_faf" & tripTable$NDEP=="04"] <- 35
tripTable$M_START[tripTable$ID_IND=="75056_597212D_02041_02_faf" & tripTable$NDEP=="05"] <- 55
tripTable$M_START[tripTable$ID_IND=="75056_567416I_02751_01_faf" & tripTable$NDEP=="02"] <- 20
tripTable$M_END[tripTable$ID_IND=="75056_567416I_02751_01_faf" & tripTable$NDEP=="02"] <- 40
tripTable$M_START[tripTable$ID_IND=="75056_567416I_02751_01_faf" & tripTable$NDEP=="03"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_567416I_02751_02_faf" & tripTable$NDEP=="01"] <- 22
tripTable$M_END[tripTable$ID_IND=="75056_567614G_09031_03_faf" & tripTable$NDEP=="02"] <- 30
tripTable$M_END[tripTable$ID_IND=="75056_555647A_00351_02_faf" & tripTable$NDEP=="05"] <- 50
tripTable$H_END[tripTable$ID_IND=="75056_555647A_00351_02_faf" & tripTable$NDEP=="05"] <- 20
tripTable$M_END[tripTable$ID_IND=="75056_586546E_00181_01_faf" & tripTable$NDEP=="12"] <- 38
tripTable$M_END[tripTable$ID_IND=="75056_819275G_00061_02_faf" & tripTable$NDEP=="01"] <- 10
tripTable$M_END[tripTable$ID_IND=="75056_819275G_00061_02_faf" & tripTable$NDEP=="02"] <- 15
tripTable$M_START[tripTable$ID_IND=="75056_581367H_01081_02_faf" & tripTable$NDEP=="03"] <- 25
tripTable$M_START[tripTable$ID_IND=="75056_551819H_02571_01_faf" & tripTable$NDEP=="03"] <- 56
tripTable$H_START[tripTable$ID_IND=="75056_551819H_02571_01_faf" & tripTable$NDEP=="03"] <- 17
tripTable$M_END[tripTable$ID_IND=="75056_551819H_02571_01_faf" & tripTable$NDEP=="03"] <- 0
tripTable$M_END[tripTable$ID_IND=="75056_553655B_00411_02_faf" & tripTable$NDEP=="01"] <- 10
tripTable$M_END[tripTable$ID_IND=="75056_528475G_09011_01_faf" & tripTable$NDEP=="03"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_528475G_09011_01_faf" & tripTable$NDEP=="06"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_517887D_04531_01_faf" & tripTable$NDEP=="01"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_555825E_01881_01_faf" & tripTable$NDEP=="01"] <- 52
tripTable$M_END[tripTable$ID_IND=="75056_591197B_01931_01_faf" & tripTable$NDEP=="01"] <- 19
tripTable$M_END[tripTable$ID_IND=="75056_555832D_03351_02_faf" & tripTable$NDEP=="05"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_557464H_01661_02_faf" & tripTable$NDEP=="02"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_527695H_00451_01_faf" & tripTable$NDEP=="04"] <- 45
tripTable$M_END[tripTable$ID_IND=="75056_555974G_01051_01_faf" & tripTable$NDEP=="01"] <- 26
tripTable$M_END[tripTable$ID_IND=="75056_555974G_01051_03_faf" & tripTable$NDEP=="01"] <- 26
tripTable$M_END[tripTable$ID_IND=="75056_554932B_01411_01_faf" & tripTable$NDEP=="04"] <- 10
tripTable$M_START[tripTable$ID_IND=="75056_561388G_01281_01_faf" & tripTable$NDEP=="03"] <- 10
tripTable$M_START[tripTable$ID_IND=="75056_534683A_04281_01_faf" & tripTable$NDEP=="02"] <- 45
tripTable$M_END[tripTable$ID_IND=="75056_643674C_01031_02_faf" & tripTable$NDEP=="05"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_643674C_01031_04_faf" & tripTable$NDEP=="05"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_541741E_04131_01_faf" & tripTable$NDEP=="06"] <- 45
tripTable$M_END[tripTable$ID_IND=="75056_438454H_00401_01_faf" & tripTable$NDEP=="01"] <- 15
tripTable$M_END[tripTable$ID_IND=="75056_822323A_00171_02_faf" & tripTable$NDEP=="04"] <- 30
tripTable$M_END[tripTable$ID_IND=="75056_583596D_00561_01_faf" & tripTable$NDEP=="01"] <- 27
tripTable$M_END[tripTable$ID_IND=="75056_582242A_00931_01_faf" & tripTable$NDEP=="03"] <- 32
tripTable$M_END[tripTable$ID_IND=="75056_585172H_00941_02_faf" & tripTable$NDEP=="05"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_585172H_00941_03_faf" & tripTable$NDEP=="06"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_585172H_00941_04_faf" & tripTable$NDEP=="03"] <- 40
tripTable$M_START[tripTable$ID_IND=="75056_554136D_01641_01_faf" & tripTable$NDEP=="02"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_561191H_02571_02_faf" & tripTable$NDEP=="01"] <- 30
tripTable$M_END[tripTable$ID_IND=="75056_561191H_02571_02_faf" & tripTable$NDEP=="05"] <- 25
tripTable$M_END[tripTable$ID_IND=="75056_561191H_02571_02_faf" & tripTable$NDEP=="06"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_561793B_09011_05_faf" & tripTable$NDEP=="02"] <- 15
tripTable$M_END[tripTable$ID_IND=="75056_567471B_00941_01_faf" & tripTable$NDEP=="03"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_583151C_02341_01_faf" & tripTable$NDEP=="01"] <- 45
tripTable$M_END[tripTable$ID_IND=="75056_583151C_02341_01_faf" & tripTable$NDEP=="10"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_516885I_02791_01_faf" & tripTable$NDEP=="04"] <- 5
tripTable$M_END[tripTable$ID_IND=="75056_528475G_09011_01_faf" & tripTable$NDEP=="03"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_567485F_02151_02_faf" & tripTable$NDEP=="05"] <- 11
tripTable$M_END[tripTable$ID_IND=="75056_555386D_04461_01_faf" & tripTable$NDEP=="01"] <- 34
tripTable$M_END[tripTable$ID_IND=="75056_649183C_02821_01_faf" & tripTable$NDEP=="01"] <- 40
tripTable$M_END[tripTable$ID_IND=="75056_558438C_08131_01_faf" & tripTable$NDEP=="02"] <- 34
tripTable$M_END[tripTable$ID_IND=="75056_559281F_01141_02_faf" & tripTable$NDEP=="02"] <- 8
tripTable$M_END[tripTable$ID_IND=="75056_558126B_03041_01_faf" & tripTable$NDEP=="02"] <- 35
tripTable$M_END[tripTable$ID_IND=="75056_555414D_05181_01_faf" & tripTable$NDEP=="03"] <- 50
tripTable$M_END[tripTable$ID_IND=="75056_535556I_03941_01_faf" & tripTable$NDEP=="01"] <- 30

### Suppression (incorrigible)
tripTable <- filter(tripTable, ID_IND != "75056_564447I_01901_01_faf")


## ----~ Bordeaux ---- 
### Corrections
tripTable$H_START[tripTable$ID_IND=="33063_058002_00134_04_faf" & tripTable$NDEP=="05"] <- 16
tripTable$M_START[tripTable$ID_IND=="33063_058002_00134_04_faf" & tripTable$NDEP=="05"] <- 4

## BORDEAUX 33063_101029_00228_01 -> incorrigible
tripTable <- filter(tripTable, ID_IND != "33063_101029_00228_01_tel")

tripTable$H_START[tripTable$ID_IND=="33063_107001_00809_01_tel" & tripTable$NDEP=="04"] <- 16
tripTable$M_START[tripTable$ID_IND=="33063_107001_00809_01_tel" & tripTable$NDEP=="04"] <- 0
tripTable$H_END[tripTable$ID_IND=="33063_108001_00237_01_tel" & tripTable$NDEP=="09"] <- 17
tripTable$M_END[tripTable$ID_IND=="33063_108001_00237_01_tel" & tripTable$NDEP=="09"] <- 2
tripTable$H_END[tripTable$ID_IND=="33063_108001_00294_02_tel" & tripTable$NDEP=="01"] <- 15
tripTable$M_END[tripTable$ID_IND=="33063_108001_00294_02_tel" & tripTable$NDEP=="01"] <- 23


## ----~ Valenciennes 2011 ---- 

tripTable$H_START[tripTable$ID_IND=="59606_002012_00023_01_faf" & tripTable$NDEP=="02"] <- 15

tripTable$M_END[tripTable$ID_IND=="59606_005014_00046_03_faf" & tripTable$NDEP=="08"] <- 40

tripTable$H_START[tripTable$ID_IND=="59606_009017_00184_05_faf" & tripTable$NDEP=="03"] <- 15

tripTable$M_END[tripTable$ID_IND=="59606_010005_00109_02_faf" & tripTable$NDEP=="01"] <- 35

tripTable$M_END[tripTable$ID_IND=="59606_011002_00002_01_faf" & tripTable$NDEP=="06"] <- 45

tripTable$M_END[tripTable$ID_IND=="59606_011002_00002_02_faf" & tripTable$NDEP=="04"] <- 45

tripTable$M_END[tripTable$ID_IND=="59606_011005_00037_01_faf" & tripTable$NDEP=="01"] <- 40

tripTable$M_END[tripTable$ID_IND=="59606_018008_00047_05_faf" & tripTable$NDEP=="04"] <- 33

tripTable$H_END[tripTable$ID_IND=="59606_022005_00036_02_faf" & tripTable$NDEP=="02"] <- 11

tripTable$M_END[tripTable$ID_IND=="59606_023012_00006_02_faf" & tripTable$NDEP=="05"] <- 15

tripTable$M_START[tripTable$ID_IND=="59606_024025_00035_02_faf" & tripTable$NDEP=="02"] <- 10

tripTable$M_START[tripTable$ID_IND=="59606_025005_00027_01_faf" & tripTable$NDEP=="03"] <- 0

tripTable$H_START[tripTable$ID_IND=="59606_025016_00066_02_faf" & tripTable$NDEP=="04"] <- 15

tripTable$M_START[tripTable$ID_IND=="59606_029004_00051_01_faf" & tripTable$NDEP=="03"] <- 0

tripTable$H_START[tripTable$ID_IND=="59606_030005_00054_02_faf" & tripTable$NDEP=="03"] <- 17

tripTable$H_END[tripTable$ID_IND=="59606_032015_00079_02_faf" & tripTable$NDEP=="03"] <- 17

tripTable$M_END[tripTable$ID_IND=="59606_035005_00075_01_faf" & tripTable$NDEP=="02"] <- 35

tripTable$H_END[tripTable$ID_IND=="59606_038005_00069_01_faf" & tripTable$NDEP=="09"] <- 19
tripTable$M_END[tripTable$ID_IND=="59606_038005_00069_01_faf" & tripTable$NDEP=="09"] <- 0

tripTable$H_END[tripTable$ID_IND=="59606_041005_00038_01_faf" & tripTable$NDEP=="04"] <- 24

tripTable$H_START[tripTable$ID_IND=="59606_032015_00141_02_faf" & tripTable$NDEP=="03"] <- 8
tripTable$M_START[tripTable$ID_IND=="59606_032015_00141_02_faf" & tripTable$NDEP=="03"] <- 5

tripTable$NDEP[tripTable$ID_IND=="59606_025015_00021_01_faf" & tripTable$NDEP=="97"] <- "07"


#difficile à corriger je supprime 59606_034005_00079_01_faf
tripTable <- filter(tripTable, ID_IND != "59606_034005_00079_01_faf")


## arrange
tripTable <- tripTable %>% 
  arrange(ENQUETE, ID_IND, NDEP)





# ==== 5. Correction des individus manquants ====


## ID_IND présents uniquement dans la table déplacement
(dif <- sort(setdiff(unique(tripTable$ID_IND), unique(indTable$ID_IND))))
dif[1001:1332]

### 1330 individus absents de la table personne de NICE
### 1 individu absent de la table personne de Besançon "25056_108002_00146_02"
### 1 individu absent de la table personne de Valenciennes 2011 "59606_000031_00071_07"

. <- tripTable %>% 
  filter(ENQUETE == "NICE")
length(unique(.$ID_IND))  # 14792 individus dans tripTable NICE

bibi <- tripTable %>% 
  filter(ENQUETE == "NICE") %>% 
  filter(ID_IND %in% dif)

sort(unique(bibi$RES_SEC))
sort(unique(bibi$O_SEC))

rm(bibi)

# => P25 non renseigné pour ces secteurs de Nice enquêtés par téléphone
# Concerne 1650 personnes : 1330 en déplacement, 314 à domicile et 6 absents

# ----~ 5.1 Correction P25 NICE ----

### Chargement de la base de données unifiée du CEREMA
#BDUdepl <- readRDS("BDU_cerema_depl.RDS")
BDUpers <- readRDS("BDU_cerema_pers.RDS")

## Création des identifiants ---

### Longueur des variables 
BDUpers <- BDUpers %>% 
  mutate(ZFP = case_when(!IDP4 %in% c("79191", "59606", "37261", "75056") ~ substr(ZFP, 4, 9),
                         IDP4 == "59606" & IDP3 == "2011" ~ substr(ZFP, 4, 9),
                         IDP4 == "59606" & IDP3 == "2019" ~ substr(ZFP, 1, 6),
                         IDP4 %in% c("79191", "37261") ~ substr(ZFP, 1, 6),
                         IDP4 == "75056" ~ substr(ZFP, 3, 9)),
         STP = case_when(IDP4 != "75056" ~ substr(STP, 2, 4),
                         TRUE ~ STP))

###  Identifiant unique 
BDUpers <- BDUpers %>% 
  mutate(ID_IND = str_c(IDP4, "_", ZFP, "_", ECH, "_", PER, "_", METHOD),
         ID_ED = str_c(IDP4, "_", IDP3))

### Création d'un libellé pour chaque enquête 
IDM4 <- read.csv2("0txt/correspondance_IDM4.csv", 
                  encoding = "UTF-8", colClasses = c(rep("character", 4)))

BDUpers <- left_join(BDUpers, select(IDM4, IDP4 = CODE_INSEE_VC, ENQUETE, ENQUETE_MIN))
BDUpers <- BDUpers %>% mutate(LIB_ED = str_c(ENQUETE_MIN, ", ", IDP3))

rm(IDM4)

## ----~~ Ajout des enquêtés en déplacement ----

### Recodage P25 == 1 pour les 1330 individus ayant réalisés au moins 
### un déplacement dans la zone d'enquête
BDUpers_enDepl <- BDUpers %>% 
  filter(ENQUETE == "NICE" & ID_IND %in% dif) %>% 
  mutate(P25 = "1")

## ----~~ Ajout des enquêtés à domicile ----
# 314 personnes

### Load table 'personne' originale transmise par le Céréma le 29 sept. 2020
PERSONNE_nice <- read_csv("BDU_pers_29092020/PERSONNE",
                          col_names = FALSE)
### dictionnaire fichier 'personne' par téléphone
dico_pers <- read_delim("EMD_NICE_2009/Doc/Fichiers originaux - Enquête téléphonique/dico_pers_nice_tel.csv", 
                        ";", escape_double = FALSE, trim_ws = TRUE)

### mise en forme de la table
dico_pers <- dico_pers %>% 
  mutate(position_end = Position + Taille -1)

position <- dico_pers$position_end

variable <- dico_pers$Variables

pers_nice <- separate(data = PERSONNE_nice, col = X1, into = variable, sep = position, remove = TRUE)

rm(PERSONNE_nice)

### Ajout clé de jointure (identifiant des individus)
pers_nice <- pers_nice %>% 
  mutate(ID_IND = paste0("06088_", ZONE, "_00", NUMECH, "_", P01, "_tel"))

### et sélection ID et P23 (= Situation la veille du jour d’enquête)
pers_nice314 <- pers_nice %>% 
  filter(PENQ == "1" & P23 == "2") %>% 
  select(ID_IND, newP25 = P23)

### Recodage P25 pour les 314 individus à domicile 
BDUpers_aDom <- BDUpers %>% 
  filter(ENQUETE == "NICE" & ID_IND %in% pers_nice314$ID_IND) %>% 
  mutate(P25 = "2")

### Joindre les deux
BDUpers <- rbind(BDUpers_enDepl, BDUpers_aDom)


## ----~~ Création des variables ----

### Création de la variable classe d'âge (KAGE) 
### 0 : 15 ans ou moins ; 1 : 16-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus
BDUpers <- BDUpers %>% 
  mutate(KAGE = case_when(as.numeric(P4) >= 16 & as.numeric(P4) <= 24 ~ "1",
                          as.numeric(P4) >= 25 & as.numeric(P4) <= 34 ~ "2",
                          as.numeric(P4) >= 35 & as.numeric(P4) <= 64 ~ "3",
                          as.numeric(P4) >= 65 ~ "4",
                          TRUE ~ "0"))

### Création de la variable niveau d'éducation (EDUC) en 4 modalités 
### 1 : low ; 2 : middle-low ; 3 : middle-high ; 4 : high
correspEduc <- read.csv2("txt/correspondance_educ.csv", 
                         encoding = "UTF-8", colClasses = c(rep("character", 2)))

BDUpers <- BDUpers %>% left_join(., correspEduc)
rm(correspEduc)

### Création de la variable CSP en 5 modalités (à partir de la PCS courte) 
### 1 : inactive (unemployed long term, housework) ; 2 : low (workers) ; 3 : middle-low (employees)
### 4 : middle-high (intermediary professionals ; craftsmen, merchants & employers of more than 10 employees ; farm operators) ; 5 : high (managers, intellectual professionals)
correspCSP <- read.csv2("txt/correspondance_csp.csv", 
                        encoding = "UTF-8", colClasses = c(rep("character", 2)))

BDUpers <- BDUpers %>% left_join(., correspCSP)
rm(correspCSP)

### Création de la variable occupation principale en 5 modalités (OCC) 
### 1 : active ; 2 : student ; 3 : unemployed ; 4 : retired ; 5 : inactive
correspOcc <- read.csv2("txt/correspondance_occ.csv", 
                        encoding = "UTF-8", colClasses = c(rep("character", 2)))

BDUpers <- BDUpers %>% left_join(., correspOcc)
rm(correspOcc)

###  Ajout de la variable "ZONAGE_SEC" 
### construite dans le script 1_zonage_residentialArea.R

#### Au préalable, création d'une clé de jointure
BDUpers$ID_SEC <- str_c(BDUpers$ENQUETE, "_", BDUpers$IDP3, "_", BDUpers$STP)
#### Import de la table de correspondance
correspZone <- read.csv2("txt/correspondance_SEC_ZONAGE_2019.csv",
                         encoding = "UTF-8")
#### Jointure
BDUpers <- left_join(x = BDUpers, y = correspZone, by = "ID_SEC")

#### suppression de la clé de jointure
BDUpers$ID_SEC <- NULL
rm(correspZone)


## VARIABLES COMPLEMENTAIRES :

## Variable P14 
# TRAVAIL OU ETUDES A DOMICILE	
# 1	Oui
# 2	Non
sort(unique(BDUpers$P14))
BDUpers <- BDUpers %>% 
  mutate(P14 = case_when(P14==" " ~ NA_character_,
                         TRUE ~ P14))

## Variable P13B  100% NA pour Nice
# FREQUENCE TELETRAVAIL	
# 1	Non, jamais
# 2	Oui, plusieurs jours par semaine
# 3	Oui, plusieurs jours par mois
# 4	Oui, occasionnellement
sort(unique(BDUpers$P13B))
BDUpers <- BDUpers %>% 
  mutate(P13B = case_when(P13B==" " ~ NA_character_,
                          TRUE ~ P13B))

## Variable P15 ZF de travail ou d'étude
sort(unique(BDUpers$P15))
BDUpers <- BDUpers %>% 
  mutate(P15 = case_when(P15=="         " ~ NA_character_,
                         TRUE ~ P15))

BDUpers <- BDUpers %>% 
  mutate(P15 = substr(P15, 4, 9))

sort(unique(BDUpers$P15))

## Création P15_B Secteur de travail ou d'étude
BDUpers <- BDUpers %>% 
  mutate(P15_B = substr(P15, 1, 3))

## Est-ce que GP5 (Insee ZF) et STW (secteur) sont des lieux de travail ou d'étude ?
## + est-ce que GP5 = cog2019 ?
sort(unique(BDUpers$STW))
BDUpers <- BDUpers %>% 
  mutate(STW = case_when(STW == "    " ~ NA_character_,
                         TRUE ~ STW)) %>% 
  mutate(STW = substr(STW, 2, 4))

sort(unique(BDUpers$GP5))
BDUpers <- BDUpers %>% 
  mutate(GP5 = case_when(GP5 == "     " ~ NA_character_,
                         TRUE ~ GP5))

# P9	OCCUPATION PRINCIPALE	
# 1	Travail à plein temps
# 2	Travail à temps partiel
# 3	Formation en alternance (apprentissage, professionnalisation), stage.
# 4	Étudiant
# 5	Scolaire jusqu’au BAC
# 6	Chômeur et/ou recherche un emploi
# 7	Retraité
# 8	Reste au foyer
# 9	Autre
sort(unique(BDUpers$P9))


## DP15 distance domicile-travail/étude à vol d'oiseau (en mètres ?)
sort(unique(BDUpers$DP15))
BDUpers <- BDUpers %>% 
  mutate(DP15 = as.numeric(DP15))

# P26	Travail la veille	  100% na pour Nice
# 1	Oui, hors du domicile.
# 2	Oui mais à domicile (travail toujours au domicile).
# 3	Oui mais à domicile – télétravail.
# 4	Oui mais à domicile - autre
# 5	Non, ne travaille jamais ce jour-là.
# 6	Non en raison de congés, grève ou maladie.
# 7	oui (sans précision)
# 8	non (sans précision)
sort(unique(BDUpers$P26))
BDUpers <- BDUpers %>% 
  mutate(P26 = case_when(P26 == " " ~ NA_character_,
                         TRUE ~ P26))

## Construction d'une table avec variables complémentaires
BDUpers_compl <- BDUpers %>% 
  transmute(ID_IND, W_IND = as.numeric(COEQ), ID_ED, LIB_ED, ENQUETE, 
            P9, P13B, P14, P15, P15_B, STW, GP5, DP15, P26)



## ----~~ reshape table ----
BDUpers <- BDUpers %>%
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_ZF = ZFP, RES_COG = GP1, RES_SEC = STP, 
            SEX = P2, AGE = as.numeric(P4), KAGE, 
            P8, EDUC, P9, OCC, PCSD, PCSC, 
            CSP, W_IND = as.numeric(COEQ), ZONAGE_SEC)


length(unique(BDUpers$ID_IND))


## ----~~ Ajout des individus manquants à indTable ----
indTable <- bind_rows(indTable, BDUpers)
indTable_compl <- bind_rows(indTable_compl, BDUpers_compl)

## arrange
indTable <- indTable %>% 
  arrange(ENQUETE, RES_SEC)

indTable_compl <- indTable_compl %>% 
  arrange(LIB_ED, ID_IND)

rm(BDUpers, dif, BDUpers_aDom, BDUpers_enDepl, pers_nice, pers_nice314)
rm(dico_pers, fifi, BDUpers_compl, position, real_zf, virtual_zf, variable)

## ----~ 5.2 Suppression d'un individu à Besançon et d'un autre à Valenciennes, 2011----
## ID_IND présents uniquement dans la table déplacement
(dif <- sort(setdiff(unique(tripTable$ID_IND), unique(indTable$ID_IND))))

tripTable <- tripTable %>% filter(ID_IND != "25056_108002_00146_02_faf")
tripTable <- tripTable %>% filter(ID_IND != "59606_031008_00071_07_faf")




## ----~ Sauvegarde ----

saveRDS(tripTable, file = "BD_mobiliscope_depl.RDS")
saveRDS(indTable, file = "BD_mobiliscope_pers.RDS")

saveRDS(indTable_compl, file = "BD_mobiliscope_pers_complementaire.RDS")



