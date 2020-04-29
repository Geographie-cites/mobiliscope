# ================================================================================#
#               Construction de la base de données du Mobiliscope v3
#                                       script
# avril 2018 - AD
# ================================================================================#


# Chargement des bibliothèques
library(stringr)
library(TraMineR)
library(dplyr)
library(readr)
library(Hmisc)


# Chargement de la base de données brutes 
load("scriptsr/data/BD_brute_depl.RDS")
load("scriptsr/data/BD_brute_pers.RDS")

tripTable <- BD_depl
indTable <- BD_pers
rm(BD_depl, BD_pers)


# 1. Création de la nouvelle table des déplacements
## Code secteurs et ZF de longueur 3 et 6
## Création d'un identifiant unique pour chaque individu (concaténation de IDD4, ZFD, ECH et PER)
## Création d'un identifiant unique pour chaque enquête (concaténation de IDD3 (année) et IDD4 (ville centre))
tripTable <- tripTable %>% 
  mutate(STD = substr(STD, 2, 4),
         ZFD = substr(ZFD, 3, 8),
         ECH = ifelse(nchar(ECH) == 1, str_c("000", ECH), 
                      ifelse(nchar(ECH) == 2, str_c("00", ECH), 
                             ifelse(nchar(ECH) == 3, str_c("0", ECH), ECH))),
         PER = ifelse(nchar(PER) == 1, str_c("0", PER), PER),
         ID_IND = str_c(IDD4, "_", ZFD, "_", ECH, "_", PER),
         ID_ED = str_c(tripTable$IDD4, "_", tripTable$IDD3))


## Création d'un libellé pour chaque enquête 
tripTable <- tripTable %>% 
  mutate(LIB_ED = plyr::mapvalues(IDD4, c("13055", "14118", "16015", "17300", "29232", "31555", "33063", "34032", "34172", 
                                          "38185", "42218", "44109", "49007", "54395", "59350", "59606", "63113", "69123", 
                                          "81004", "06088", "67482", "35238"),
                                        c("MARSEILLE", "CAEN", "ANGOULEME", "LA ROCHELLE", "QUIMPER", "TOULOUSE", "BORDEAUX",
                                          "BEZIERS", "MONTPELLIER", "GRENOBLE", "SAINT ETIENNE", "NANTES", "ANGERS", "NANCY",
                                          "LILLE", "VALENCIENNES", "CLERMONT FERRAND", "LYON", "ALBI", "NICE", "STRASBOURG", 
                                          "RENNES")))

  
## Création des variables O_PURPOSE et D_PURPOSE (D2A et D5A en 6 modalités)
## 1 : domicile ; 2 : travail ; 3 : études ; 4 : achats ; 5 : loisirs ; 6 : autre
correspMotifO <- read_delim("scriptsr/txt/correspondance_D2A_OPURPOSE.csv", ";", escape_double = FALSE, trim_ws = TRUE)
correspMotifD <- read_delim("scriptsr/txt/correspondance_D5A_DPURPOSE.csv", ";", escape_double = FALSE, trim_ws = TRUE)
tripTable <- left_join(x = tripTable, y = correspMotifO, by = "D2A")
tripTable <- left_join(x = tripTable, y = correspMotifD, by = "D5A")
rm(correspMotifO, correspMotifD)

## Création de la variable MODE (MODP en 3 modalités)
correspMode <- read_delim("scriptsr/txt/correspondance_MODE.csv", delim = ";", escape_double = FALSE, trim_ws = TRUE)
tripTable <- left_join(x = tripTable, y = correspMode, by = "MODP")
rm(correspMode)

## Construction de la table avec les variables utiles
tripTable <- tripTable %>%
     transmute(ID_IND, ID_ED, LIB_ED, NDEP = as.character(NDEP), 
               RES_ZF = ZFD, RES_COG = GD1, RES_SEC = STD, 
               O_ZF = substr(D3, 3, 8), O_COG = GDO1, O_SEC = substr(STDO, 2, 4), 
               D_ZF = substr(D7, 3, 8), D_COG = GDD1, D_SEC = substr(STDD, 2, 4), 
               H_START = as.integer(substr(D4, 1, 2)), M_START = as.integer(substr(D4, 3, 4)),
               H_END = as.integer(substr(D8, 1, 2)), M_END = as.integer(substr(D8, 3, 4)),
               D9 = as.numeric(D9), D2 = D2A, O_PURPOSE, D5 = D5A, D_PURPOSE, MODP, MODE)



## Ajout de la variable "ZONAGE_SEC" (variable construite dans le script zonage_residentialArea.R)
### Au préalable, création d'une clé de jointure
tripTable$idsec <- str_c(tripTable$LIB_ED, "_", tripTable$RES_SEC)
### Import de la table de correspondance
correspZone <- read_delim("scriptsr/txt/correspondance_SEC_ZONAGE.csv", ";", escape_double = FALSE, trim_ws = TRUE)
### Jointure
tripTable <- left_join(x = tripTable, y = correspZone, by = "idsec")
### suppression de la clé de jointure
tripTable$idsec <- NULL


## Sauvegarde BD
save(tripTable, file = "scriptsr/data/BD_mobiliscope_depl.RDS")


# 2. Création de la nouvelle table des personnes 

## Sélection des personnes enquêtées (PENQ = 1) - 
## Dans les enquêtes par téléphone, seules une ou deux personnes par ménage sont interrogées sur leurs déplacements - 
## et parmi les pers. enquêtées, sélection des personnes ayant réalisées au moins un déplacement (P25 = 1) 
## et des personnes qui sont restées à domicile (P25 =2)
indTable <- filter(indTable, PENQ == "1" & P25 == "1" | P25 == "2")

## Code secteurs et ZF de longueur 3 et 6
## Création d'un identifiant unique pour chaque individu (concaténation de IDP4, ZFP, ECH et PER)
## Création d'un identifiant unique pour chaque enquête (concaténation de IDD3 (année) et IDD4 (ville centre))
indTable <- indTable %>% 
  mutate(STP = substr(STP, 2, 4),
         ZFP = substr(ZFP, 3, 8),
         ECH = ifelse(nchar(ECH) == 1, str_c("000", ECH), 
                      ifelse(nchar(ECH) == 2, str_c("00", ECH), 
                             ifelse(nchar(ECH) == 3, str_c("0", ECH), ECH))),
         PER = ifelse(nchar(PER) == 1, str_c("0",PER), PER),
         ID_IND = str_c(IDP4, "_", ZFP, "_", ECH, "_", PER),
         ID_ED = str_c(IDP4, "_", IDP3))



## Création d'un libellé pour chaque enquête 
indTable <- indTable %>% 
  mutate(LIB_ED = plyr::mapvalues(IDP4, c("13055", "14118", "16015", "17300", "29232", "31555", "33063", "34032", "34172",
                                          "38185", "42218", "44109", "49007", "54395", "59350", "59606", "63113", "69123",
                                          "81004", "06088", "67482", "35238"),
                                        c("MARSEILLE", "CAEN", "ANGOULEME", "LA ROCHELLE", "QUIMPER", "TOULOUSE", "BORDEAUX",
                                          "BEZIERS", "MONTPELLIER", "GRENOBLE", "SAINT ETIENNE", "NANTES", "ANGERS", "NANCY",
                                          "LILLE", "VALENCIENNES", "CLERMONT FERRAND", "LYON", "ALBI", "NICE", "STRASBOURG",
                                          "RENNES")))

## Création de la variable classe d'âge (KAGE) 
## 0 : 15 ans ou moins ; 1 : 16-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus
indTable <- indTable %>% 
    mutate(KAGE = case_when(as.numeric(P4) >= 16 & as.numeric(P4) <= 24 ~ 1,
                            as.numeric(P4) >= 25 & as.numeric(P4) <= 34 ~ 2,
                            as.numeric(P4) >= 35 & as.numeric(P4) <= 64 ~ 3,
                            as.numeric(P4) >= 65 ~ 4,
                           TRUE ~ 0))

## Création de la variable niveau d'éducation (EDUC) en 4 modalités
## 1 : low ; 2 : middle-low ; 3 : middle-high ; 4 : high
indTable <- indTable %>% 
  mutate(EDUC = plyr::mapvalues(P8, c("", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "93", "97", "90"), 
                                    c(NA, NA, 1, 2, 2, 3, 3, 4, 1, 3, 1, NA, NA, NA)))

## Création de la variable CSP en 5 modalités (à partir de la PCS courte)
## 1 : inactive (unemployed long term, housework) ; 2 : low (workers) ; 3 : middle-low (employees)
## 4 : middle-high (intermediary professionals ; craftsmen, merchants & employers of more than 10 employees ; farm operators) ; 
## 5 : high (managers, intellectual professionals)
correspCSP <- read_delim("scriptsr/txt/correspondance_PCSC_CSP.csv", ";", escape_double = FALSE, trim_ws = TRUE)
indTable <- left_join(x = indTable, y = correspCSP, by = "PCSC")
rm(correspCSP)

## Création de la variable occupation principale en 5 modalités (OCC)
## 1 : inactive ; 2 : retired ; 3 : unemployed ; 4 : student ; 5 : active
indTable <- indTable %>% 
  mutate(OCC = plyr::mapvalues(P9, c("", "1", "2", "3", "4", "5", "6", "7", "8", "9"), 
                                   c(NA, "1", "1", "2", "2", "2", "3", "4", "5", NA)))

## Construction de la table avec les variables utiles
indTable <- indTable %>%
  transmute(ID_IND, ID_ED, LIB_ED, RES_ZF = ZFP, RES_COG = GP1, RES_SEC = STP, 
            SEX = P2, AGE = as.numeric(P4), KAGE, P8, EDUC, P9, OCC, CS_D = PCSD, 
            CS_C = PCSC, CSP, W_IND = as.numeric(COEP))


## Ajout de la variable "ZONAGE_SEC" construite dans le script zonage_residentialArea.R
### Au préalable, création d'une clé de jointure
indTable$idsec <- str_c(indTable$LIB_ED, "_", indTable$RES_SEC)
### Import de la table de correspondance
correspZone <- read_delim("scriptsr/txt/correspondance_SEC_ZONAGE.csv", ";", escape_double = FALSE, trim_ws = TRUE)
### Jointure
indTable <- left_join(x = indTable, y = correspZone, by = "idsec")
### suppression de la clé de jointure
indTable$idsec <- NULL
rm(correspZone)


## Sauvegarde BD
save(indTable, file = "scriptsr/data/BD_mobiliscope_pers.RDS")




