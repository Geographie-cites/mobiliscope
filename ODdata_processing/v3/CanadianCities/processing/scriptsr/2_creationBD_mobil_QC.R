# ================================================================================#
#               Construction de la base de données du Mobiliscope 
#                               pour les eod du Québec
#           Adaptation des scripts 1_text2r.R et 2_createBDmobil.R de AD
# mai 2019 - EV
# ================================================================================#


# Chargement des bibliothèques
library(stringr)
library(TraMineR)
library(plyr)
library(dplyr)
library(readr)
library(Hmisc)


# choix d'une enquête (attention : "Ottawa-Gatineau" et "Trois-Rivières")
nomEnq <- "TROIS-RIVIERES"

# chargement des BD brutes modifiées par le script 1b-pretraitements_QC.R
load("2-prepa_data/data/BD_Mtl.RDS")
load("2-prepa_data/data/BD_Qbc.RDS")
load("2-prepa_data/data/BD_Sag.RDS")
load("2-prepa_data/data/BD_She.RDS")
load("2-prepa_data/data/BD_Trv.RDS")
load("2-prepa_data/data/BD_Out.RDS")


# Ne charger que l'enquête dont on veut créer la BD Mobiliscope
tripTable <- BD_brute
indTable <- BD_brute
rm(BD_brute)


# 1. Création de la table des déplacements

## IDD4 = code géographique de la ville centre (source : ministère des affaires municipales et habitations du Québec) (code de Gatineau pour l'eod d'Ottawa-Gatineau)
## Création d'un identifiant unique pour chaque individu (concaténation de IDD4 et PER)
## Création d'un identifiant unique pour chaque enquete (oncaténation de IDD4 et IDD3), attention à changer IDD3 et IDD4
tripTable <- tripTable %>% 
  transmute(IDD3 = "2011", # 2011 pour Québec/Ott-Gat/Trois-Rivières ; 2012 pour Sherbrooke ; 2013 pour Montréal ; 2015 pour Saguenay
            IDD4 = "37067",# changer selon enquête
            PER = clepersonne,
            NDEP = as.character(nodep),
            RES_ZF = smlog,
            RES_COG = smlog,
            RES_SEC = smlog,
            O_ZF = smori,
            O_COG = smori,
            O_SEC = smori,
            D_ZF = smdes,
            D_COG = smdes,
            D_SEC = smdes,
            D4 = ifelse(nchar(hredep) == 3, str_c("0", hredep),hredep),
            D8 = ifelse(nchar(hrearv) == 3, str_c("0", hrearv),hrearv),
            H_START = as.integer(hhdep),
            M_START = as.integer(mmdep),
            H_END = as.integer(hharv), 
            M_END = as.integer(mmarv),
            D9 = duree, 
            D2A = motif_O,
            D5A = motif,
            MODE = modep,
            MODP = modep)

tripTable <- tripTable %>% 
  mutate(ID_IND = str_c(IDD4, "_", PER),
         ID_ED = str_c(IDD4, "_", IDD3))

## Création d'un libellé pour chaque enquete 
tripTable <- tripTable %>% 
  mutate(LIB_ED = plyr::mapvalues(IDD4, c("66023","23027","37067", "43027", "94068","81017"),
                                        c( "MONTREAL", "QUEBEC", "TROIS-RIVIERES", "SHERBROOKE", "SAGUENAY", "OTTAWA-GATINEAU")))

  
## Création des variables O_PURPOSE et D_PURPOSE (D2A et D5A en 6 modalités)
## 1 : domicile ; 2 : travail ; 3 : études ; 4 : achats ; 5 : loisirs ; 6 : autre
correspMotifO <- read_delim(str_c("2-prepa_data/txt/", nomEnq, "/correspondance_D2A_OPURPOSE.csv")[1], ";", escape_double = FALSE, trim_ws = TRUE)
correspMotifD <- read_delim(str_c("2-prepa_data/txt/", nomEnq, "/correspondance_D5A_DPURPOSE.csv")[1], ";", escape_double = FALSE, trim_ws = TRUE)
tripTable <- left_join(x = tripTable, y = correspMotifO, by = "D2A")
tripTable <- left_join(x = tripTable, y = correspMotifD, by = "D5A")
rm(correspMotifO, correspMotifD)
 

## Construction de la table avec les variables utiles
tripTable <- tripTable %>%
  transmute(LIB_ED, ID_IND, ID_ED, LIB_ED, NDEP, 
            RES_ZF, RES_COG, RES_SEC, 
            O_ZF, O_COG, O_SEC, 
            D_ZF, D_COG, D_SEC, 
            H_START , M_START,
            H_END, M_END,
            D9 , D2 = D2A, O_PURPOSE, D5 = D5A, D_PURPOSE, MODP, MODE)


#les enquêtes n'ont pas de variable zonage
tripTable <- tripTable %>%
  mutate(ZONAGE_SEC = 0)



## Sauvegarde BD
save(tripTable, file = paste("2-prepa_data/data/BD_mobiliscope_depl_", nomEnq, ".RDS", sep = ""))



# 2. Création de la nouvelle table des personnes 

## Création d'un identifiant unique pour chaque individu (concaténation de IDP4 et PER)
## Création d'un identifiant unique pour chaque enquête (concaténation de IDD3 (année) et IDD4 (ville centre))
indTable <- indTable %>% 
  transmute(IDP3 = "2011", # 2011 pour Québec/Ott-Gat/Trois-Rivières ; 2012 pour Sherbrooke ; 2013 pour Montréal ; 2015 pour Saguenay
            IDP4 = "37067", # changer selon enquête
            PER = clepersonne,
            SEX = sexe,
            KAGE = grpage,
            AGE = "",
            P8 = "",
            P9 = occper,
            RES_ZF = smlog,
            RES_COG = smlog,
            RES_SEC = as.character(smlog),
            EDUC = "",
            CS_D = "",
            CS_C = "",
            CSP = "",
            REVENU,
            COEP = ifelse(nomEnq != "MONTREAL", facper, facper11)) #pour Montreal : facper11
indTable <- indTable %>% 
  mutate(ID_IND = str_c(IDP4, "_", PER),
         ID_ED = str_c(IDP4, "_", IDP3))

indTable <- indTable[!duplicated(indTable$ID_IND),]


## Création d'un libellé pour chaque enquete 
indTable <- indTable %>% 
  mutate(LIB_ED = plyr::mapvalues(IDP4, c("66023","23027","37067", "43027", "94068","81017"),
                                  c( "MONTREAL", "QUEBEC", "TROIS-RIVIERES", "SHERBROOKE", "SAGUENAY", "OTTAWA-GATINEAU")))




## Création de la variable classe d'âge (KAGE) pour toutes les eod sauf Trois Rivières
## 1 : 15-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus
indTable <- indTable %>% 
  mutate(KAGE = case_when(as.numeric(KAGE) %in% c(4,5) ~ 1,
                          as.numeric(KAGE) %in% c(6,7) ~ 2,
                          as.numeric(KAGE) %in% c(8:13) ~ 3,
                          as.numeric(KAGE) > 13 ~ 4,
                         TRUE ~ 0))

## Création de la variable classe d'âge (KAGE) pour Trois Rivières 
##1 : 15-24 ; 2 : 25-34 ; 3 : 35-64 ; 4 : 65 ans ou plus
indTable <- indTable %>% 
  mutate(KAGE = case_when(as.numeric(KAGE) %in% c(4,5) ~ 1,
                          as.numeric(KAGE) == 6 ~ 2,
                          as.numeric(KAGE) %in% c(7:11) ~ 3,
                          as.numeric(KAGE) > 11 ~ 4,
                          TRUE ~ 0))


## Création de la variable occupation principale (OCC) en 5 modalités 

##Québec / Trois Rivières / Ottawa-Gatineau
indTable <- indTable %>%
  mutate(OCC = plyr::mapvalues(P9, c("1", "2", "3", "4", "5", "6", "7", "8", "9"), 
                              c("1", "1", "2", "4", "3", "5", "5", "1", "NA")))

##Montréal
indTable <- indTable %>% 
  mutate(OCC = plyr::mapvalues(P9, c("1", "2", "3", "4", "5", "6", "7", "8"), 
                               c("1", "1", "2", "4", "3", "NA", "5", "NA")))

##Saguenay
indTable <- indTable %>%
  mutate(OCC = plyr::mapvalues(P9, c("1", "2", "3", "5", "6", "7", "8", "9", "10"), 
                               c("1", "1", "2", "4", "3", "5", "5", "1", "NA")))

##Sherbrooke
indTable <- indTable %>%
  mutate(OCC = plyr::mapvalues(P9, c("1", "2", "3", "4", "5", "6", "7", "8", "9", "10"), 
                               c("1", "1", "2", "2", "4", "3", "5", "5", "1", "NA")))


## Construction de la table avec les variables utiles
indTable <- indTable %>%
  transmute(LIB_ED, ID_IND, ID_ED, LIB_ED, RES_ZF, RES_COG, RES_SEC, 
            SEX, AGE, KAGE, P8, EDUC, P9, OCC, CS_D, 
            CS_C, CSP, REVENU, W_IND = as.numeric(COEP))



#les enquêtes n'ont pas de variable zonage
indTable <- indTable %>%
  mutate(ZONAGE_SEC = 0)

    
## Sauvegarde BD
save(indTable, file = paste("2-prepa_data/data/BD_mobiliscope_pers_", nomEnq, ".RDS", sep = ''))
