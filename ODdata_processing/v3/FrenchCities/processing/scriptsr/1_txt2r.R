# ================================================================================#
#       Transformation de l'ED de Montpellier au format txt en .RDS
#                                       script
# mars 2019 - AD
# ================================================================================#


# Library
library(readr)
library(dplyr)
library(stringr)


# chargement des données brutes
BD_depl <- read_csv("opendata/EDGT34_TOTAL_DEPLACEMENTS.txt", 
                                             col_names = FALSE)

BD_pers <- read_csv("opendata/EDGT34_TOTAL_PERSONNES.txt", 
                    col_names = FALSE)


# Construction de la BD déplacement
BD_depl <- BD_depl %>% 
  mutate(DP1 = substr(X1, 1, 1),
         IDD3 = 2014,
         IDD4 = "34172",
         ZFD = str_c("00", substr(X1, 2, 7), sep = ""),
         ECH = substr(X1, 8, 10),
         PER = substr(X1, 11, 12),
         NDEP = substr(X1, 13, 14),
         GD1 = NA,
         STD = str_c("0", substr(X1, 2, 4), sep = ""),
         D2A = substr(X1, 15, 16),
         D2B = substr(X1, 17, 18),
         D3 = str_c("00", substr(X1, 19, 24), sep = ""),
         GDO1 = NA,
         STDO = str_c("0", substr(D3, 3, 5), sep = ""),
         D4 = substr(X1, 25, 28),
         D5A = substr(X1, 29, 30),
         D5B = substr(X1, 31, 32),
         D6 = substr(X1, 46, 47),
         D7 = str_c("00",substr(X1, 33, 38), sep = ""),
         GDD1 = NA,
         STDD = str_c("0", substr(D7, 3, 5), sep = ""),
         D8 = substr(X1, 39, 42),
         D9 = substr(X1, 43, 45),
         D10 = substr(X1, 48, 48),
         D11 = substr(X1, 54, 61),
         D12 = substr(X1, 62, 69),
         MODP = substr(X1, 50, 51),
         TYPD = substr(X1, 79, 79),
         METHOD = NA ) %>% 
  select(-(X1))

BD_depl <- BD_depl %>% 
  mutate(STDO = ifelse(str_detect(STDO, "^09") | str_detect(STDO, "^01") | str_detect(STDO, "^02"),
                                  "0999",
                                  STDO),
         STDD =  ifelse(str_detect(STDD, "^09") | str_detect(STDD, "^01") | str_detect(STDD, "^02"),
                        "0999",
                        STDD))
  
## sauvegarde
save(BD_depl, file = "scriptsr/data/BD_brute_depl.RDS")


# Construction de la BD personne
BD_pers <- BD_pers %>% 
  mutate(PP1 = substr(X1, 1, 1),
         IDP3 = "2014",
         IDP4 = "34172",
         ZFP = str_c("00", substr(X1, 2, 7), sep = ""),
         ECH = substr(X1, 8, 10),
         PER = substr(X1, 12, 12),
         GP1 = NA,
         STP = str_c("0", substr(X1, 2, 4), sep = ""),
         ANNEE = str_c("20", substr(X1, 17, 18), sep = ""),
         MOIS = substr(X1, 15, 16),
         DATE = substr(X1, 13, 14),
         JOUR = substr(X1, 20, 20),
         PENQ = substr(X1, 19, 19),
         P2 = substr(X1, 21, 21),
         P3 = substr(X1, 22, 22),
         P4 = substr(X1, 23, 24),
         P5 = "",
         P6 = "",
         P7 = substr(X1, 25, 25),
         P8 = str_c("0", substr(X1, 26, 26), sep = ""),
         P9 = substr(X1, 27, 27),
         P10 = "",
         PCSC = str_c("0", substr(X1, 44, 44), sep = ""),
         PCSD = "",
         P12 = "",
         P14 = substr(X1, 28, 28),
         P15 = substr(X1, 29, 34), 
         DP15 = "",
         GP5 = "",
         STW = "",
         P16 = substr(X1, 35, 35),
         P17 = "",
         P18 = substr(X1, 37, 37),
         P18A = "",
         P19 = substr(X1, 38, 38),
         P20 = substr(X1, 39, 39),
         P21 = substr(X1, 40, 40),
         P22 = substr(X1, 41, 41),
         P23 = substr(X1, 42, 42),
         P24 = substr(X1, 43, 43),
         P25 = substr(X1, 45, 45),
         P26 = substr(X1, 46, 46),
         COE1 = substr(X1, 56, 63),
         COEP = substr(X1, 64, 71),
         METHOD = NA) %>% 
  select(-(X1)) %>% 
  mutate(P8 = ifelse(P8 == "0 ", "", P8),
         PCSC = ifelse(PCSC == "0 ", "", PCSC))



## Sauvegarde
save(BD_pers, file = "scriptsr/data/BD_brute_pers.RDS")


