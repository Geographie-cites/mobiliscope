#==============================================================================#
#                         Construction de la BD Mobiliscope
#
#
# Description : à partir des EOD de Bogota, Sao Paulo,
#               Santiago et Buenos Aires, construction d'une base harmonisée
#               
# 
# AD, avril 2021
#==============================================================================#


# content :
# 1. Bogota : traitement de l'EOD 2019
# 2. Santiago : traitement de l'EOD 2012
# 3. Buenos Aires : en attente du dernier millésime 
# 4. Sao Paulo : traitement de l'EOD 2017
# 5. compilation des tables et sauvegarde


# métadonnées : dico_eodh_bdMobiliscope.xls


# directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1_online/Preprocessing_LatinAmericaCities/")

# Biblio
library(tidyverse)
library(tidylog)
library(lubridate)
library(haven)



# 1. Bogota ====


#~ load data source ----
## table déplacement
depl <- read.csv2("data_source/Bogota/Encuesta de Movilidad 2019/BD EODH2019 FINAL v14022020/Archivos CSV/ViajesEODH2019.csv",
                  #encoding = "Latin1",
                  colClasses = c("character"))
## table personne
pers <- read.csv2("data_source/Bogota/Encuesta de Movilidad 2019/BD EODH2019 FINAL v14022020/Archivos CSV/PersonasEODH2019.csv",
                  colClasses = c("character"))
## table ménage
men <- read.csv2("data_source/Bogota/Encuesta de Movilidad 2019/BD EODH2019 FINAL v14022020/Archivos CSV/HogaresEODH2019.csv",
                 colClasses = c("character"))

# Annexes
# load data durée
duree <- read.csv2("data_source/Bogota/Encuesta de Movilidad 2019/BD EODH2019 FINAL v14022020/Archivos CSV/Aux_DuraciónEODH2019.csv")
# load table correspondance code/nom des municipalités
municip <- read.csv2("data_source/Bogota/Encuesta de Movilidad 2019/BD EODH2019 FINAL v14022020/Archivos CSV/Aux_CódigoMunipios.csv")


##
d <- depl %>% 
  mutate(idd = paste(id_hogar, id_persona, id_viaje, "_"))
rm(d)
p <- pers %>% 
  mutate(idp = paste(id_hogar, id_persona, "_"))
rm(p)

length(unique(men$Id_Hogar))


#~ Nouvelle table déplacement ----

##~~ Identifiants ----

### identifiants uniques des répondants :
### codeVilleCentre_codeZAT_idHogar_idPersona
### corriger longueur des variables

depl <- depl %>% 
  left_join(., select(men, id_hogar = Id_Hogar, zat_hogar))

setdiff(unique(depl$zat_hogar), unique(depl$zat_origen))
sort(unique(as.numeric(depl$zat_hogar)))

### zat : longueur 4
depl <- depl %>% 
  mutate(zat_hogar = case_when(nchar(zat_hogar)==1 ~ paste0("000", zat_hogar),
                               nchar(zat_hogar)==2 ~ paste0("00", zat_hogar),
                               nchar(zat_hogar)==3 ~ paste0("0", zat_hogar),
                               TRUE ~ zat_hogar))

sort(unique(depl$zat_hogar))

### idHogar : longueur 6
max(nchar(men$Id_Hogar))
min(nchar(men$Id_Hogar))
depl <- depl %>% 
  mutate(idH = case_when(nchar(id_hogar)==3 ~ paste0("000", id_hogar),
                               nchar(id_hogar)==4 ~ paste0("00", id_hogar),
                               nchar(id_hogar)==5 ~ paste0("0", id_hogar),
                               TRUE ~ id_hogar))

### idPersona : longueur 2
max(nchar(depl$id_persona))

depl <- depl %>% 
  mutate(idP = case_when(nchar(id_persona)==1 ~ paste0("0", id_persona),
                         TRUE ~ id_persona))

### ID
depl <- depl %>% 
  mutate(ID_IND = paste0("11001_", zat_hogar, "_", idH, "_", idP),
         ID_ED = "11001_2019",
         LIB_ED = "Bogotá, 2019",
         ENQUETE = "BOGOTA") %>% 
  relocate(ID_IND, ID_ED, LIB_ED, ENQUETE)

min(nchar(depl$ID_IND))
max(nchar(depl$ID_IND))

##~~ Variables spatiales ----

### Lieux de résidence dans la table ménage
depl <- depl %>% 
  left_join(., select(men, id_hogar = Id_Hogar, RES_COG = municipio, 
                      RES_SEC = Utam, RES_LOC = localidad))

### Longueur de ZAT
sort(unique(depl$zat_origen))
sort(unique(depl$zat_destino))
depl <- depl %>% 
  mutate(O_ZF = case_when(nchar(zat_origen)==1 ~ paste0("000", zat_origen),
                          nchar(zat_origen)==2 ~ paste0("00", zat_origen),
                          nchar(zat_origen)==3 ~ paste0("0", zat_origen),
                          zat_origen=="" | zat_origen=="0" ~ NA_character_, 
                          TRUE ~ zat_origen),
         
         D_ZF = case_when(nchar(zat_destino)==1 ~ paste0("000", zat_destino),
                          nchar(zat_destino)==2 ~ paste0("00", zat_destino),
                          nchar(zat_destino)==3 ~ paste0("0", zat_destino),
                          zat_destino=="" | zat_destino=="0" ~ NA_character_, 
                          TRUE ~ zat_destino))


### Rename zat_hogar, mun_origen, mun_destino, et utam_origen, utam_destino
depl <- depl %>% 
  mutate(RES_ZF = zat_hogar,
         O_SEC = case_when(utam_origen %in% c("", "N/A") ~ NA_character_,
                           TRUE ~ utam_origen),
         D_SEC = case_when(utam_destino %in% c("", "N/A") ~ NA_character_,
                           TRUE ~ utam_destino),
         O_COG = case_when(mun_origen %in% c("", "0") ~ NA_character_,
                           TRUE ~ mun_origen),
         D_COG = case_when(mun_destino %in% c("", "0") ~ NA_character_,
                           TRUE ~ mun_destino))


##~~ Variables temporelles ----
## les variables temporelles sont explorées dans le script explo_fecha_bogota.R
## où on déduit que les jours de déplacement sont des jours "laboral normal"

# date et jour de déplacement
depl <- depl %>% 
  mutate(dateV = as.Date(as.numeric(fecha), "1899-12-30"),
         jourV = as.character(wday(dateV)))

sort(unique(depl$jourV))

depl <- depl %>% 
  mutate(jourV= case_when(is.na(jourV) ~ NA_character_,
                         TRUE ~ jourV))

### qui sont les individus avec zat/utam na ?
b <- depl %>% 
  filter(is.na(jourV))
length(unique(b$ID_IND))
jourNA2check <- depl %>% 
  filter(ID_IND %in% b$ID_IND)
rm(b)

### On filtre les déplacements sans jour qui ont aussi les zat/utam de déplacement na
depl <- depl %>%
  filter(!is.na(jourV))  # removed 7,133 rows (5%), 127,364 rows remaining



# Les heures
# stockées au format time serial number, soit après conversion de 0h à 23h59 
# sans que l'on sache le jour de déplacement correspondant (j ou j+1) :
# -déduire (avec durée négative) les déplacements réalisés autour de minuit entre j et j+1 pour attribuer l'heure d'arrivée à j+1
# -reporter tous les déplacements réalisés strictement entre 0h et 4h à j+1
# -dédoubler les déplacements chevauchant 4h à j et modifier leurs heures pour obtenir :
#           - un déplacement entre xh et 4h à j+1
#           - un déplacement entre 4h et xh à j


## création d'une table intermédiaire 
tempo <- depl %>% 
  select(ID_IND, id_hogar, id_persona, id_viaje, dateV, hora_inicio_viaje, p31_hora_llegada,
         RES_ZF, p17_Id_motivo_viaje, O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG) %>% 
  mutate(ho = as.numeric(hora_inicio_viaje)*24,
         hd = as.numeric(p31_hora_llegada)*24)


### Convertir les heures 
require(chron)

tempo <- tempo %>% 
  mutate(START = hms(times(ho/24)),
         END = hms(times(hd/24)))

### Création des variables H_START, M_START, H_END et M_END
### ajouter 24h dans le cas des heures d'arrivée inférieures aux heures de départ :
### repérées par durées négatives quand déplacement à cheval sur j et j+1
tempo <- tempo %>%
  mutate(H_START = hour(START),
         M_START = minute(START),
         H_END = case_when((hd-ho) < 0 ~ hour(END) + 24,
                           TRUE ~ hour(END)),
         M_END = minute(END))
  

### Calculer la durée du déplacement (min)
tempo <- tempo %>% 
  mutate(HEURE_DEB = case_when(H_START >= 24 ~
                                 as.character.Date(ISOdatetime(2019, 1, 2, H_START-24, M_START, 0)),
                               TRUE ~ 
                                 as.character.Date(ISOdatetime(2019, 1, 1, H_START, M_START, 0))),
         
         HEURE_FIN = case_when(H_END >= 24 ~ 
                                 as.character.Date(ISOdatetime(2019, 1, 2, H_END-24, M_END, 0)),
                               TRUE ~ 
                                 as.character.Date(ISOdatetime(2019, 1, 1, H_END, M_END, 0))),
         
         DUREE = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), 
                                     ymd_hms(HEURE_DEB, truncated=3), 
                                     units= "mins")))


### Confronter les résultats avec la table source 'duracion'
duree <- duree %>% 
  rename(hora_inicio_viaje_dur = hora_inicio_viaje, 
         p31_hora_llegada_dur = p31_hora_llegada) %>% 
  mutate(id_persona = as.character(id_persona),
         id_viaje = as.character(id_viaje))
tempo <- tempo %>% 
  left_join(., select(duree, -f_exp, -modo_principal))

tempoDiff <- tempo %>% 
  mutate(diff = DUREE - duracion) %>% 
  filter(diff!=0) # une erreur de durée dans la table source duracion




## Transfo de la fenêtre 0h-0h en 4h-4h
## new process
### clé
tempo <- tempo %>% 
  mutate(idd = paste0(ID_IND, "_", id_viaje)) %>% 
  relocate(idd)


### 606 déplacements débutent avant 4h (à j comme à j+1) ...
a <-  tempo %>% 
  filter(HEURE_DEB<"2019-01-01 04:00:00")

### ... dont 91 déplacements chevauchent 4h (à j comme à j+1):
b <- a %>% 
  filter(HEURE_FIN>"2019-01-01 04:00:00")

length(unique(b$ID_IND))  # 1 déplacement à cheval par individu

### 515 déplacements strictement compris entre 0h et 4h 
c <- a %>%
  filter(!idd %in% b$idd)


### REPORT DES DEPLACEMENTS COMPRIS STRICTEMENT ENTRE 0h ET 4H 

### -> on reporte à j+1
c <- c %>% 
  mutate(HEURE_DEB = as.character(ymd_hms(HEURE_DEB) + ddays(1)),
         HEURE_FIN = as.character(ymd_hms(HEURE_FIN) + ddays(1)),
         H_START = H_START + 24,
         H_END = H_END + 24,
         newIdd = paste0(idd, "_c"))


### on joint ces reports aux autres déplacements des individus concernés
tempo_c <- tempo %>% 
  filter(ID_IND %in% c$ID_IND) %>% 
  filter(!idd %in% c$idd) %>% 
  bind_rows(., c) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB))

### On vérifie la cohérence des lieux d'origine-destination
tempo_c <- tempo_c %>% 
  group_by(ID_IND) %>% 
  mutate(pbZf = case_when(!is.na(newIdd) & O_ZF!=lag(D_ZF) ~ TRUE),
         pbSec = case_when(!is.na(newIdd) & O_SEC!=lag(D_SEC) ~ TRUE),
         pbcog = case_when(!is.na(newIdd) & O_COG!=lag(D_COG) ~ TRUE)) %>% 
  ungroup()

### on observe les cas problématiques
i <- unique(tempo_c$ID_IND[tempo_c$pbZf==TRUE & !is.na(tempo_c$pbZf)])
bibi <- tempo_c %>% 
  filter(ID_IND %in% i)

### on corrige 
tempo_c <- tempo_c %>% 
  mutate(O_ZF = case_when(pbZf==TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pbSec==TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC),
         O_COG = case_when(pbcog==TRUE ~ lag(D_COG),
                           TRUE ~ O_COG))

### on joint les corrections à la table tempo
tempo <- tempo %>% 
  filter(!ID_IND %in% tempo_c$ID_IND) %>% 
  bind_rows(., select(tempo_c, -pbZf, -pbSec, -pbcog)) %>% 
  arrange(idd)

rm(i, bibi)


#### CAS DES DEPLACEMENTS QUI CHEVAUCHENT 4H

#### CAS DES id_viaje CODÉS 1
#### on vérifie leur cohérence en terme de lieux de présence 
#### par rapport au déplacement qui suit (selon HEURE_DEB) 
#### en vu de leur dédoublement : pas de correction pour la partie restant à j
#### mais correction pour la partie reportée à j+1
#### les déplacements uniques seront à corriger également
tempo_b <- tempo %>% 
  filter(ID_IND %in% b$ID_IND) %>% 
  group_by(ID_IND) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB)) %>% 
  mutate(ntrip = n(),
         chev = case_when(HEURE_DEB<"2019-01-01 04:00:00" ~ "y"),
         pbZf_idd1 = case_when(ntrip==1 ~ TRUE,
                               id_viaje==1 & chev=="y" & D_ZF==lead(O_ZF) ~ FALSE,
                               id_viaje==1 & chev=="y" & D_ZF!=lead(O_ZF) ~ TRUE),
         
         
         pbSec_idd1 = case_when(ntrip==1 ~ TRUE,
                               id_viaje==1 & chev=="y" & D_SEC==lead(O_SEC) ~ FALSE,
                               id_viaje==1 & chev=="y" & D_SEC!=lead(O_SEC) ~ TRUE),
         
         pbCog_idd1 = case_when(ntrip==1 ~ TRUE,
                               id_viaje==1 & chev=="y" & D_COG==lead(O_COG) ~ FALSE,
                               id_viaje==1 & chev=="y" & D_COG!=lead(O_COG) ~ TRUE)) %>% 
  ungroup()

#### CAS DES pbZf==FALSE
iF <- tempo_b$idd[tempo_b$pbZf_idd1==FALSE & !is.na(tempo_b$pbZf_idd1)]

#### On dédouble ces 60 déplacements sans incohérence de ZAT:
#### bF_j1 est à bouger à j+1
bF_j1 <- tempo_b %>% 
  filter(idd %in% iF) %>% 
  mutate(HEURE_FIN = as.character(ymd_hms(HEURE_FIN) + ddays(1)),
         H_END = H_END + 24,
         # HEURE_FIN = "2019-01-02 03:59:00",
         # H_END = 3 + 24,
         # M_END = 59,
         HEURE_DEB = as.character(ymd_hms(HEURE_DEB) + ddays(1)),
         H_START = H_START + 24,
         newIdd = paste0(idd, "_j1"))
#### bF_j reste à j
bF_j <- tempo_b %>% 
  filter(idd %in% iF) %>% 
  mutate(HEURE_DEB = "2019-01-01 04:00:00",
         H_START = 4,
         M_START = 0,
         newIdd = paste0(idd, "_j"))

#### on assemble les 120 nouveaux déplacements aux autres déplacements de ces individus
#### pour reconstituer leur journée et on corrige les lieux de présence
tempo_b1 <- tempo_b %>% 
  filter(!idd %in% iF) %>% 
  bind_rows(., bF_j1) %>% 
  bind_rows(., bF_j) %>% 
  filter(ID_IND %in% bF_j$ID_IND) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB)) %>% 
  group_by(ID_IND) %>% 
  mutate(tochangeZ = case_when(newIdd %in% bF_j1$newIdd & O_ZF != lag(D_ZF) ~ "T"),
         tochangeS = case_when(newIdd %in% bF_j1$newIdd & O_SEC != lag(D_SEC) ~ "T"),
         tochangeC = case_when(newIdd %in% bF_j1$newIdd & O_COG != lag(D_COG) ~ "T")) 

tempo_b1 <- tempo_b1 %>% 
  mutate(O_ZF = case_when(tochangeZ=="T" ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(tochangeZ=="T" ~ lag(D_SEC),
                          TRUE ~ O_SEC)) %>% 
  ungroup() %>% 
  select(-tochangeC, -tochangeZ, -tochangeS)


#### on joint ces corrections à tempo_b
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% tempo_b1$ID_IND) %>% 
  bind_rows(., tempo_b1) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB))

rm(bF_j, bF_j1)


#### CAS DES pbZf==TRUE
iT <- tempo_b$idd[tempo_b$pbZf_idd1==TRUE & !is.na(tempo_b$pbZf_idd1)]

#### on créé une sous-table pour observer leur journée
ind <- tempo_b$ID_IND[tempo_b$idd %in% iT]
tempo_bT <- tempo_b %>% 
  filter(ID_IND %in% ind)
  
#### => on supprime les deux individus qui ont deux déplacements incohérents 
#### au niveau des zat/motif/heure
tempo_bT <- tempo_bT %>% 
  filter(!ID_IND %in% c("11001_1001_012197_01", "11001_0740_009162_02"))
#### on supprime aussi dans la table tempo et dans la table déplacement
tempo <- tempo %>% 
  filter(!ID_IND %in% c("11001_1001_012197_01", "11001_0740_009162_02"))
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% c("11001_1001_012197_01", "11001_0740_009162_02"))
depl <- depl %>% 
  filter(!ID_IND %in% c("11001_1001_012197_01", "11001_0740_009162_02"))

#### on dédouble les déplacements uniques 
#### bT_j1 est à bouger à j+1
#### les motifs de déplacement deviennent NA
bT_j1 <- tempo_bT %>% 
  mutate(HEURE_FIN = as.character(ymd_hms(HEURE_FIN) + ddays(1)),
         H_END = H_END + 24,
         # HEURE_FIN = "2019-01-02 03:59:00",
         # H_END = 3 + 24,
         # M_END = 59,
         HEURE_DEB = as.character(ymd_hms(HEURE_DEB) + ddays(1)),
         H_START = H_START +24,
         newIdd = paste0(idd, "_j1"),
         p17_Id_motivo_viaje = NA_character_)
#### bT_j reste à j
bT_j <- tempo_bT %>% 
  mutate(HEURE_DEB = "2019-01-01 04:00:00",
         H_START = 4,
         M_START = 0,
         newIdd = paste0(idd, "_j"))

#### on assemble les deux 
tempo_bT <- bT_j %>% 
  rbind(., bT_j1) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB)) 

#### et on corrige les lieux de présence entre deux déplacements
tempo_bT <- tempo_bT %>% 
  group_by(ID_IND) %>% 
  mutate(O_ZF = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         D_ZF = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_ZF),
                          TRUE ~ D_ZF),
         
         O_SEC = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_SEC),
                          TRUE ~ O_SEC),
         D_SEC = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_SEC),
                          TRUE ~ D_SEC),
         
         O_COG = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_COG),
                           TRUE ~ O_COG),
         D_COG = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_COG),
                           TRUE ~ D_COG))

#### quand le déplacement 1 n'est pas un retour à la maison et que le déplacement 2 
#### à pour destination la zone de résidence, alors motif = retour à la maison
tempo_bT <- tempo_bT %>%
  mutate(p17_Id_motivo_viaje = case_when(newIdd %in% bT_j1$newIdd & 
                                           lag(p17_Id_motivo_viaje)!="6" &
                                           RES_ZF==D_ZF ~ "6",
                                         TRUE ~ p17_Id_motivo_viaje)) %>% 
  ungroup()


#### on ajoute à tempo_b les 24 nouveaux déplacements 
tempo_b <- tempo_b %>% 
  filter(!idd %in% tempo_bT$idd) %>% 
  bind_rows(., tempo_bT) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB))


#### on nettoie un peu
tempo_b <- tempo_b %>% 
  select(-ntrip, -chev, -pbZf_idd1, -pbSec_idd1, -pbCog_idd1)
rm(bT_j, bT_j1, ind)



#### CAS DES id_viaje NON CODÉS 1
i <- c(iF, iT)
idd_b2 <- setdiff(b$idd, i)

#### on reconstitue la journée de ces cas
#### on vérifie l'enchainement des lieux de présences en vu du dédoublement des déplacements :
ind_b2 <- tempo_b$ID_IND[tempo_b$idd %in% idd_b2]
tempo_b2 <- tempo_b %>% 
  filter(ID_IND %in% ind_b2) %>% 
  arrange(ID_IND, HEURE_DEB) %>%
  group_by(ID_IND) %>% 
  mutate(ntrip = n(),
         chev = case_when(HEURE_DEB<"2019-01-01 04:00:00" ~ "y"),
         j = case_when(chev=="y" & id_viaje==max(id_viaje) ~ "j+1"),
         lastrip = case_when(HEURE_DEB==max(HEURE_DEB) ~ "y"),
         pbZ_deb = case_when(chev=="y" & D_ZF!=lead(O_ZF) ~ TRUE,
                             chev=="y" & D_ZF==lead(O_ZF) ~ FALSE),
         pbZ_fin = case_when(chev=="y" & O_ZF!=D_ZF[lastrip=="y"] ~ TRUE,
                             chev=="y" & O_ZF==D_ZF[lastrip=="y"] ~ FALSE)) %>% 
  ungroup()


## on dédouble
#### b2_j1 est à bouger à j+1
b2_j1 <- tempo_b2 %>% 
  filter(chev=="y") %>% 
  mutate(HEURE_FIN = as.character(ymd_hms(HEURE_FIN) + ddays(1)),
         H_END = H_END + 24,
         # HEURE_FIN = "2019-01-02 03:59:00",
         # H_END = 3 + 24,
         # M_END = 59,
         HEURE_DEB = as.character(ymd_hms(HEURE_DEB) + ddays(1)),
         H_START = H_START +24,
         newIdd = paste0(idd, "_j1"))
#### b2_j reste à j
b2_j <- tempo_b2 %>% 
  filter(chev=="y") %>% 
  mutate(HEURE_DEB = "2019-01-01 04:00:00",
         H_START = 4,
         M_START = 0,
         newIdd = paste0(idd, "_j"))


#### on assemble les 34 nouveaux déplacements aux autres déplacements de ces individus
#### pour reconstituer leur journée et on corrige les lieux de présence
tempo_b2 <- tempo_b %>% 
  filter(!idd %in% idd_b2) %>% 
  bind_rows(., b2_j1) %>% 
  bind_rows(., b2_j) %>% 
  filter(ID_IND %in% ind_b2) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB))


#### on vérifie la cohérence des zones fines
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheZf = case_when(D_ZF == lead(O_ZF) ~ TRUE,
                            D_ZF != lead(O_ZF) ~ FALSE)) %>% 
  ungroup()

bibi <- tempo_b2 %>% 
  select(idd, ID_IND, RES_ZF, id_viaje, HEURE_DEB, HEURE_FIN, O_ZF, D_ZF, p17_Id_motivo_viaje, newIdd, coheZf)
rm(bibi)

#### on supprime partout les 3 individus avec trop de zat/utam na
ind <- unique(tempo_b2$ID_IND[tempo_b2$coheZf==FALSE & !is.na(tempo_b2$coheZf)])
tempo_b2 <- tempo_b2 %>% 
  filter(!ID_IND %in% ind)
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% ind)
tempo <- tempo %>% 
  filter(!ID_IND %in% ind)
depl <- depl %>% 
  filter(!ID_IND %in% ind)

#### on vérifie la cohérence des utam
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheS = case_when(D_SEC == lead(O_SEC) ~ TRUE,
                           D_SEC != lead(O_SEC) ~ FALSE),
         coheC = case_when(D_COG == lead(O_COG) ~ TRUE,
                           D_COG != lead(O_COG) ~ FALSE)) %>% 
  ungroup()

length(unique(tempo_b2$newIdd))

#### une erreur d'UTAM issue des données brutes

#### on intègre les corrections à tempo_b
tempo_b <- tempo_b %>% 
  filter(!idd %in% tempo_b2$idd) %>% 
  bind_rows(., select(tempo_b2, -ntrip, -chev, -j, -lastrip, -pbZ_deb, -pbZ_fin, -coheZf, -coheS, -coheC)) %>% 
  arrange(ID_IND, ymd_hms(HEURE_DEB))

rm(b2_j, b2_j1)

#### on vérifie que les déplacements reportés à j+1 ne se chevauchent pas entre eux
length(unique(tempo_b$newIdd))
tempo_b <- tempo_b %>% 
  group_by(ID_IND) %>% 
  mutate(pb = case_when(ymd_hms(HEURE_DEB)-lag(ymd_hms(HEURE_FIN))<0 ~ "pb")) %>% 
  ungroup()
  
#### on supprime partout les deux individus avec des incohérences d'heure
indH <- tempo_b$ID_IND[tempo_b$pb=="pb" & !is.na(tempo_b$pb)]
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% indH) 
tempo <- tempo %>% 
  filter(!ID_IND %in% indH)
depl <- depl %>% 
  filter(!ID_IND %in% indH)

#### on intègre tempo_b à tempo
tempo <- tempo %>% 
  filter(!ID_IND %in% tempo_b$ID_IND) %>% 
  bind_rows(., select(tempo_b, -pb))

length(unique(tempo$newIdd))

rm(tempo_b, tempo_b1, tempo_b2, tempo_bT, tempo_c)
rm(i, idd_b2, iF, ind, ind_b2, indH, iT)

# #### vérif sur tempo
# tempo <- tempo %>%
#   arrange(ID_IND, ymd_hms(HEURE_DEB)) %>%
#   group_by(ID_IND) %>%
#   mutate(pbH = case_when(ymd_hms(HEURE_DEB)-lag(ymd_hms(HEURE_FIN))<0 ~ "pb"))
# # => 51 incohérences dans les heures issues des données brutes: corrigés en fin de script
# tempo <- tempo %>%
#   mutate(pbZ = case_when(D_ZF!=lead(O_ZF) ~ TRUE))
# # 789 incohérences ZAT issues des données brutes
# tempo <- tempo %>%
#   mutate(pbS = case_when(D_SEC!=lead(O_SEC) ~ TRUE))
# # 619 incohérences UTAM issues des données brutes
# tempo <- tempo %>%
#   mutate(pbC = case_when(D_COG!=lead(O_COG) ~ TRUE))
# # 21 incohérences municipe issues des données brutes

### on recalcule durée
tempo <- tempo %>% 
  mutate(DUREE = as.numeric(difftime(ymd_hms(HEURE_FIN, truncated=3), 
                                     ymd_hms(HEURE_DEB, truncated=3), 
                                     units= "mins")))  

### on vérifie
tempoDiff <- tempo %>% 
  mutate(diff = DUREE - duracion) %>% 
  filter(diff!=0) 


### On recode H_START et H_END
tempo <- tempo %>% 
  mutate(H_START = case_when(HEURE_DEB >= ymd_hms("2019-01-02 00:00:00") ~ as.numeric(hour(HEURE_DEB) +24),
                             TRUE ~ H_START),
         H_END = case_when(HEURE_FIN >= ymd_hms("2019-01-02 00:00:00") ~ as.numeric(hour(HEURE_FIN) +24) ,
                           TRUE ~ H_END))

### On ramène ce qui déborde à la fenêtre 4h-4h (ne doit déborder que les déplacements j+1)
tempo <- tempo %>% 
  mutate(M_START = case_when(H_START<4 ~ 0,
                             TRUE ~ M_START),
         H_START = case_when(H_START<4 ~ 4,
                             TRUE ~ H_START),
         
         M_END = case_when(H_END>=28 ~ 0,
                           TRUE ~ M_END),
         H_END = case_when(H_END>28 ~ 28,
                           TRUE ~ H_END))


### arrange and order
tempo <- tempo %>% 
  arrange(ID_IND, HEURE_DEB) %>% 
  group_by(ID_IND) %>% 
  mutate(nordre = order(HEURE_DEB)) %>% 
  ungroup()

### 462 déplacements réordonnés par rapport à id_viaje
tempoDiff <- tempo %>% 
  mutate(diff = nordre - as.integer(id_viaje)) %>% 
  filter(diff!=0)

rm(tempoDiff)

### n° d'ordre de déplacement
tempo <- tempo %>%
  mutate(NDEP = case_when(nchar(nordre)==1 ~ paste0("0", nordre),
                          TRUE ~ as.character(nordre)))


### JOINDRE TEMPO A LA TABLE DEPLACEMENT

### clé
k <- tempo %>% 
  mutate(newIdd = case_when(str_detect(newIdd, "_c") ~ NA_character_,
                            TRUE ~ newIdd))

k <- k %>% 
  select(idd, newIdd) %>% 
  filter(!is.na(newIdd))
length(unique(k$idd))

tempo <- tempo %>% 
  mutate(newIdd = case_when(!is.na(newIdd) ~ newIdd,
                            TRUE ~ idd))

### joindre les résultats à la table déplacement
### dédoubler les déplacements qui chevauchent 4h (b)
### et création des nouveaux identifiants de déplacement
depl <- depl %>% 
  mutate(idd = paste0(ID_IND, "_", id_viaje),
         newIdd = case_when(idd %in% c$idd ~ paste0(idd, "_c"),
         TRUE ~ idd))

depl1 <- depl %>% 
  filter(idd %in% k$idd) %>% 
  mutate(newIdd = paste0(idd, "_j1"))
depl2 <- depl %>% 
  filter(idd %in% k$idd) %>% 
  mutate(newIdd = paste0(idd, "_j"))


### création de la nouvelle table déplacement comptant 84 déplacements supplémentaires
depl <- depl %>% 
  filter(!idd %in% k$idd) %>% 
  rbind(., depl1) %>% 
  rbind(., depl2) %>% 
  select(-p17_Id_motivo_viaje, -O_ZF, -D_ZF, -O_SEC, -D_SEC, -O_COG, -D_COG)

rm(depl1, depl2)


depl <- depl %>% 
  left_join(., select(tempo, newIdd, NDEP, H_START, M_START, H_END, M_END, D9 = DUREE,
                      p17_Id_motivo_viaje, O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG),
            by = "newIdd") %>% 
  arrange(ID_IND, NDEP)

setdiff(tempo$ID_IND, depl$ID_IND)


### on renomme les id de déplacements
depl <- depl %>% 
  select(-idd) %>% 
  rename(idd = newIdd)




##~~ Motif de déplacement ----  

sort(unique(depl$p17_otro_motivo[depl$p17_Id_motivo_viaje=="77"]))
sort(unique(depl$p17_otro_motivo[depl$p17_Id_motivo_viaje=="11"]))
sort(unique(depl$p17_Id_motivo_viaje))

f <- data.frame(table(depl$p17_Id_motivo_viaje))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f)

### motif de destination D_PURPOSE
#### charger la table de correspondance
motif <- read.csv2("txt/corresp_MOTIF.csv",
                   encoding = "UTF-8", colClasses = c("character"))

#### joindre 
depl <- depl %>% 
  left_join(., select(motif, ENQUETE, p17_Id_motivo_viaje = D2_D5, D_PURPOSE = PURPOSE)) 

rm(motif)


### motif à l'origine O_PURPOSE
purpose <- depl %>% 
  select(ID_IND, zat_hogar, RES_SEC, NDEP, H_START, M_START, H_END, M_END, O_ZF, O_SEC,
         D_ZF, D_SEC, lugar_origen, D_PURPOSE) %>% 
  arrange(ID_IND, NDEP) %>% 
  mutate(id_depl = paste0(ID_IND, "_", NDEP)) %>% 
  relocate(id_depl)

t <- purpose %>% 
  group_by(ID_IND, lugar_origen) %>% 
  summarise(n = n())
rm(t)

purpose <- purpose %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(O_PURPOSE = case_when(lugar_origen=="1" ~ "01",
                               NDEP!="01" & lugar_origen=="2" ~ lag(D_PURPOSE))) %>% 
  ungroup() %>% 
  relocate(D_PURPOSE, .after = last_col())

sum(is.na(purpose$O_PURPOSE)==TRUE)  #1549


#### cas des premiers déplacements sans purpose à l'origine
purpose1 <- purpose %>% 
  group_by(ID_IND) %>% 
  mutate(trip = case_when(min(as.numeric(NDEP)) == max(as.numeric(NDEP)) ~ "oneTrip",
                          NDEP == "01" ~ "firsTrip",
                          as.numeric(NDEP) == max(as.numeric(NDEP)) ~ "lasTrip")) %>% 
  ungroup() %>% 
  filter(!is.na(trip))


# Si plusieurs déplacements et 
# si last trip = retour au domicile et zat de résidence = zat à l'origine du 1er déplacement, alors on boucle
# si last trip = retour au domicile et zat de résidence != zat à l'origine du 1er déplacement, alors le 1er motif est autre (06)
# si last trip = autre que domicile, alors on boucle

# Si un seul déplacement et
# si D_PURPOSE = maison, alors O_PURPOSE = 06
# si D_PURPOSE = autre que domicile et zat de résidence = zat à l'origine du déplacement, alors O_PURPOSE = 01
# si D_PURPOSE = autre que domicile et zat de résidence != zat à l'origine du déplacement, alors O_PURPOSE = 06
purpose1 <- purpose1 %>% 
  group_by(ID_IND) %>% 
  mutate(sameZAT = case_when(NDEP == "01" & is.na(O_PURPOSE) & zat_hogar == O_ZF ~ "oui",
                             NDEP == "01" & is.na(O_PURPOSE) & zat_hogar != O_ZF ~ "non"),
         lasTripMotif = case_when(trip == "lasTrip" & D_PURPOSE == "01" ~ "domicile",
                                  trip == "lasTrip" & D_PURPOSE != "01" ~ "autre")) %>% 
  ungroup()


#### Sélection des cas à coder 
ind <- purpose1$ID_IND[!is.na(purpose1$sameZAT)]
ind_recode <- purpose1 %>%
  filter(ID_IND %in% ind) %>%
  group_by(ID_IND) %>%
  mutate(O_PURPOSE = case_when(trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZAT=="oui" & D_PURPOSE != "01" ~ "01",
                           trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZAT=="oui" & D_PURPOSE == "01" ~ "06",
                           trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZAT=="non" ~ "06",
                           trip=="firsTrip" & lead(lasTripMotif)=="autre"~ lead(D_PURPOSE),

                           trip=="oneTrip" & D_PURPOSE=="01" ~ "06",
                           trip=="oneTrip" & D_PURPOSE!="01" & sameZAT=="oui" ~ "01",
                           trip=="oneTrip" & D_PURPOSE!="01" & sameZAT=="non" ~ "06",

                           TRUE ~ O_PURPOSE)) %>%
  ungroup()



# check : des déplacements avec retour au domicile comme motif de départ et d'arrivée 
# sont déjà présents dans la table source
bibi <- ind_recode %>% 
  filter(O_PURPOSE==D_PURPOSE)
ind_bibi <- bibi$ID_IND[bibi$O_PURPOSE=="01"]
s <- depl %>% 
  filter(ID_IND %in% ind_bibi) %>% 
  arrange(ID_IND, NDEP)
rm(bibi, s, ind_bibi)


#### joindre les résultats du recodage à la table purpose
ind_recode <- ind_recode %>% 
  filter(NDEP=="01")
ind_viaje <- ind_recode$id_depl

purpose <- purpose %>% 
  filter(!id_depl %in% ind_viaje) %>% 
  rbind(., select(ind_recode, -trip, -sameZAT, -lasTripMotif)) %>% 
  arrange(id_depl)

# 11001_0047_010840_01_02 motif de destination na dans la table source
rm(ind_recode, purpose1, ind, ind_viaje)


# joindre les deux nouvelles variables PURPOSE à la table depl
depl <- depl %>% 
  mutate(id_depl = paste0(ID_IND, "_", NDEP)) %>% 
  left_join(., select(purpose, id_depl, O_PURPOSE, D_PURPOSE)) %>% 
  select(-id_depl) %>% 
  relocate(D_PURPOSE, .after = last_col())

sum(is.na(depl$O_PURPOSE)==TRUE)
rm(purpose)

#~~ Correction ----

## Sous-table des déplacements dédoublés
bibi <- depl %>% 
  filter(ID_IND %in% b$ID_IND) %>% 
  select(ID_IND, NDEP, idd, RES_SEC, H_START, M_START, H_END, M_END, D9, 
         O_PURPOSE, D_PURPOSE, O_SEC, D_SEC)

rm(bibi)
  

## check origine purpose des heures déplacées
purpose <- depl %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE)


purpose0 <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(report=="yes" & NDEP!="01" & O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE),
         pball = case_when(NDEP!="01" & O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                           TRUE ~ FALSE))

### correction
ind2recode <- purpose0$ID_IND[purpose0$pb==TRUE|purpose0$pball==TRUE]
purp02recode <- purpose0 %>% 
  filter(ID_IND %in% ind2recode) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(n = n()) %>% 
  ungroup() %>% 
  filter(n>1)

purp02recode <- purp02recode %>% 
  group_by(ID_IND) %>% 
  mutate(O_PURPOSE = case_when(pb==TRUE | pball==TRUE ~ lag(D_PURPOSE),
                               TRUE ~ O_PURPOSE)) %>% 
  ungroup()


### joindre les corrections à purpose
purpose <- purpose %>% 
  filter(!ID_IND %in% purp02recode$ID_IND) %>% 
  rbind(., select(purp02recode, -report, -pb, -pball, -n)) %>% 
  arrange(ID_IND, NDEP)

rm(purpose0, ind2recode, purp02recode)

### check zf et secteur de présence des déplacements réordonnés
df <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>%
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb_zf = case_when(O_ZF != lag(D_ZF) ~ TRUE,
                           TRUE ~ FALSE),
         pb_sec = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                            TRUE ~ FALSE)) %>% 
  ungroup()

ind2recode <- df$ID_IND[df$pb_zf==TRUE|df$pb_sec==TRUE]
df2recode <- df %>% 
  filter(ID_IND %in% ind2recode) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(n = n()) %>% 
  ungroup() %>% 
  filter(n>1)

### correction
df2recode <- df2recode %>% 
  group_by(ID_IND) %>% 
  mutate(O_ZF = case_when(pb_zf == TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pb_zf == TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC)) %>% 
  ungroup()

### joindre les corrections à purpose
purpose <- purpose %>% 
  filter(!ID_IND %in% df2recode$ID_IND) %>% 
  rbind(., select(df2recode, -report, -pb_zf, -pb_sec, -n)) %>% 
  arrange(ID_IND, NDEP)
  

### joindre à la table déplacement
depl <- depl %>% 
  select(-O_PURPOSE, -D_PURPOSE, -O_ZF, -D_ZF, -O_SEC, -D_SEC) %>% 
  left_join(., select(purpose, idd, O_ZF, D_ZF, O_SEC, D_SEC, O_PURPOSE, D_PURPOSE))

f <- data.frame(table(depl$D_PURPOSE))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f, df2recode, ind2recode, purpose, df)

### last check
#### check secteur de présence
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 617 déplacements avec incohérence dans les secteurs de présence 
# aucun de ces déplacements n'a été réordonnés = incohérence de la table source

#### check motif
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$idd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 136 déplacements avec incohérence dans les motifs de présence 
# aucun de ces déplacements n'a été réordonnés = incohérence de la table source

rm(bibi)


##~~ Mode de transport ----  

### charger la table de correspondance
mode <- read.csv2("txt/corresp_MODE.csv",
                   encoding = "UTF-8", colClasses = c("character"))

#### joindre 
depl <- depl %>% 
  left_join(., select(mode, ENQUETE, modo_principal = modo_des, MODP, MODE)) 

rm(mode)

### recoder mode quand 'Otro'
sort(unique(depl$modo_principal_desagregado[depl$modo_principal=="Otro"]))
depl <- depl %>% 
  mutate(MODE = case_when(modo_principal=="Otro" & 
                            modo_principal_desagregado %in% c("Bus escalera/Chiva",
                                                              "Bus privado/de empresa",
                                                              "Tren","Otro") ~ "01",
                          modo_principal=="Otro" & 
                            modo_principal_desagregado=="CamiÃ³n/Volqueta/Tractomula" ~ "02",
                          modo_principal=="Otro" & 
                            modo_principal_desagregado %in% c("VehÃ­culo de tracciÃ³n animal",
                                                              "VehÃ­culo de tracciÃ³n humana") ~ "03",
                          TRUE ~ MODE))

### Mode adhérent
### si MODE = 03 alors mode adhérent (1), sinon non adhérent (0)
depl <- depl %>% 
  mutate(MODE_ADH = case_when(MODE=="03" ~ 1,
                              MODE %in% c("01", "02", "04") ~ 0))



##~~ Mise en forme ----
depl_bogota <- depl %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, NDEP, 
            RES_ZF, RES_COG, RES_LOC, RES_SEC, 
            O_ZF, O_COG, O_SEC, D_ZF, D_COG, D_SEC, 
            H_START, M_START, H_END, M_END, D9, 
            D2 = NA_character_, O_PURPOSE, 
            D5 = p17_Id_motivo_viaje, D_PURPOSE, 
            MODP, MODE, MODE_ADH, ZONAGE_SEC = NA)




  
#~ Nouvelle table personne ----

##~~ Identifiants ----

### identifiants uniques des répondants :
### codeVilleCentre_codeZAT_idHogar_idPersona
### corriger longueur des variables

length(unique(men$Id_Hogar))

pers <- pers %>% 
  left_join(., select(men, id_hogar = Id_Hogar, zat_hogar))

sort(unique(as.numeric(pers$zat_hogar)))

### zat : longueur 4
pers <- pers %>% 
  mutate(RES_ZF = case_when(nchar(zat_hogar)==1 ~ paste0("000", zat_hogar),
                               nchar(zat_hogar)==2 ~ paste0("00", zat_hogar),
                               nchar(zat_hogar)==3 ~ paste0("0", zat_hogar),
                               TRUE ~ zat_hogar))

sort(unique(pers$RES_ZF))

### idHogar : longueur 6
max(nchar(men$Id_Hogar))
min(nchar(men$Id_Hogar))
pers <- pers %>% 
  mutate(idH = case_when(nchar(id_hogar)==3 ~ paste0("000", id_hogar),
                         nchar(id_hogar)==4 ~ paste0("00", id_hogar),
                         nchar(id_hogar)==5 ~ paste0("0", id_hogar),
                         TRUE ~ id_hogar))

### idPersona : longueur 2
max(nchar(pers$id_persona))

pers <- pers %>% 
  mutate(idP = case_when(nchar(id_persona)==1 ~ paste0("0", id_persona),
                         TRUE ~ id_persona))

### ID
pers <- pers %>% 
  mutate(ID_IND = paste0("11001_", RES_ZF, "_", idH, "_", idP),
         ID_ED = "11001_2019",
         LIB_ED = "Bogotá, 2019",
         ENQUETE = "BOGOTA") %>% 
  relocate(ID_IND, ID_ED, LIB_ED, ENQUETE)

min(nchar(pers$ID_IND))
max(nchar(pers$ID_IND))

### check
setdiff(depl$ID_IND, pers$ID_IND)
### individu absent de la table déplacement :
setdiff(pers$ID_IND, depl_bogota$ID_IND)


##~~ Variables spatiales ----

### Lieux de résidence dans la table ménage
pers <- pers %>% 
  left_join(., select(men, id_hogar = Id_Hogar, RES_COG = municipio, 
                      RES_SEC = Utam, RES_LOC = localidad, SSE = p5_estrato))

length(unique(pers$RES_SEC))
unique(pers$RES_SEC)

### Strate socio-éco RES_SSE
pers <- pers %>% 
  mutate(RES_SSE = case_when(SSE %in% c("0", "1") ~ "1",
                             SSE == "2" ~ "2",
                             SSE == "3" ~ "3",
                             SSE == "4" ~ "4",
                             SSE %in% c("5", "6") ~ "5"))

### zonage METAL
require(readxl)
zonas <- read_excel("txt/PassageLOCMUNI_ZONAS.xlsx")

zonas <- zonas %>% 
  mutate(NOMBRE = case_when(NOMBRE == "RAFAEL URIBE" ~ "RAFAEL URIBE URIBE",
                             TRUE ~ NOMBRE),
         MUNI = as.character(MUNI))

#### Joindre le zonage par la localidad
zonas_utam <- pers %>% 
  left_join(., select(zonas, RES_LOC = NOMBRE, ZONA, ZONA_lab))

zonas_utam <- zonas_utam %>% 
  select(RES_LOC, RES_COG, RES_SEC, ZONA, ZONA_lab) %>% 
  filter(!duplicated(RES_SEC))

#### Joindre le zonage par le code de municipe
zonasna <- zonas_utam %>% 
  filter(is.na(ZONA))
setdiff(zonasna$RES_COG, zonas$MUNI)

bogotana <- zonasna %>% 
  filter(RES_COG == "11001")

zonasna <- zonasna %>% 
  filter(RES_COG != "11001") %>% 
  select(-ZONA, -ZONA_lab) %>% 
  left_join(., select(zonas, RES_COG = MUNI, ZONA, ZONA_lab))


#### rbind le tout et corriger les UPR de Bogota
zonas_utam <- zonas_utam %>% 
  filter(!is.na(ZONA)) %>% 
  rbind(., zonasna) %>% 
  rbind(., bogotana) %>% 
  arrange(RES_COG, RES_SEC)

zonas_utam <- zonas_utam %>% 
  mutate(ZONA = case_when(RES_SEC == "UPR1" ~ 8,
                          RES_SEC == "UPR2" ~ 8,
                          RES_SEC == "UPR3" ~ 10,
                          TRUE ~ ZONA),
         ZONA_lab = case_when(RES_SEC =="UPR1" ~ "PERIPHERIE AM NORD",
                              RES_SEC =="UPR2" ~ "PERIPHERIE AM NORD",
                              RES_SEC =="UPR3" ~ "PERIPHERIE AM SUD",
                              TRUE ~ ZONA_lab),
         ZONAGE_SEC = case_when(ZONA==1 ~ 4,
                                ZONA %in% c(2, 3, 4) ~ 3,
                                ZONA %in% c(5, 6, 7) ~ 2,
                                ZONA %in% c(8, 9, 10) ~ 1))

#### Visualiser résultat
require(sf)
require(mapview)
utam <- st_read("data_source/MODURAL/couches SIG EOD Bogotá/utam_modural.shp")

utam <- utam %>%
  left_join(., select(zonas_utam, UTAM = RES_SEC, ZONA, ZONA_lab))

# mapview(utam["ZONA_lab"], viewer.suppress = mapviewGetOption("viewer.suppress"))


#### Joindre le zonage à la table personne
pers <-  pers %>% 
  left_join(., select(zonas_utam, RES_SEC, ZONAGE_SEC))

sort(unique(pers$ZONAGE_SEC))


#### Finaliser et sauvegarder la table de passage 
utamdf <- utam %>%
select(RES_SEC = UTAM, MUN = LocMuni) %>%
   st_drop_geometry()

zonas_utam <- zonas_utam %>%
   left_join(., utamdf)

zonas_utam <- zonas_utam %>%
   rename(LOC_NAME = RES_LOC, MUN_CODE = RES_COG, UTAM_CODE = RES_SEC, MUN_NAME = MUN) %>%
   relocate(UTAM_CODE, LOC_NAME, MUN_CODE, MUN_NAME)
 
zonas_utam <- zonas_utam %>% 
   mutate(MUN_NAME = case_when(MUN_CODE=="11001" ~ "BOGOTA",
                               TRUE ~ MUN_NAME))
 
## add utam 117 (aéroport)
zonas_utam117 <- data.frame(UTAM_CODE = "UTAM117",
                            LOC_NAME= NA_character_,
                            MUN_CODE = "11001",
                            MUN_NAME = "BOGOTA",
                            ZONA = 6,
                            ZONA_lab = "PERIPHERIE DISTRICT OUEST",
                            ZONAGE_SEC = 2)

zonas_utam <- zonas_utam %>% 
  bind_rows(., zonas_utam117)
rm(zonas_utam117)
# write.csv2(zonas_utam, "txt/zonas_utam_METAL.csv",
#            row.names = FALSE, fileEncoding = "UTF-8")

rm(bogotana, utam, utamdf, zonas, zonas_utam, zonasna)



##~~ Variables socio-démo ----

### sex, âge, poids
pers <- pers %>% 
  mutate(SEX = case_when(Sexo=="Hombre" ~ "1",
                         Sexo=="Mujer" ~ "2"),
         AGE = case_when(p4_edad == "9999" ~ NA_real_,
                         TRUE ~ as.numeric(p4_edad)),
         KAGE = case_when(as.numeric(AGE) >= 16 & as.numeric(AGE) <= 24 ~ "1",
                          as.numeric(AGE) >= 25 & as.numeric(AGE) <= 34 ~ "2",
                          as.numeric(AGE) >= 35 & as.numeric(AGE) <= 64 ~ "3",
                          as.numeric(AGE) >= 65 ~ "4",
                          TRUE ~ "0"),
         KAGE2 = case_when(as.numeric(AGE) >= 16 & as.numeric(AGE) <= 25 ~ "1",
                           as.numeric(AGE) >= 26 & as.numeric(AGE) <= 40 ~ "2",
                           as.numeric(AGE) >= 41 & as.numeric(AGE) <= 60 ~ "3",
                           as.numeric(AGE) >= 61 ~ "4",
                           TRUE ~ "0"),
         W_IND = as.numeric(f_exp))

### check : âge des individus présents dans la table déplacement
depl_bogota <- depl_bogota %>% 
  left_join(., select(pers, ID_IND, AGE))

depl_bogota <- depl_bogota %>% 
  select(-AGE)

### P8, P9, ECO
pers <- pers %>% 
  mutate(P8 = case_when(p5_id_nivel_educativo %in% c("99", "") ~ NA_character_,
                        TRUE ~ p5_id_nivel_educativo),
         P9 = case_when(p6_id_ocupacion=="" ~ NA_character_,
                        TRUE ~ p6_id_ocupacion),
         ECO = case_when(p7_id_actividad_economica=="" & 
                           P9 %in% c("1", "2", "3", "4", "5", "31", "32", "33", 
                                     "34", "35", "36", "37", "38") ~ "99", # non concerné
                         p7_id_actividad_economica=="" & 
                           P9 %in% c("11", "18", "21") ~ NA_character_,
                         p7_id_actividad_economica=="" & is.na(P9) ~ NA_character_,
                         p7_id_actividad_economica=="99" ~ NA_character_,
                         TRUE ~ p7_id_actividad_economica))

### EDUC
#### charger la table de correspondance
educ <- read.csv2("txt/corresp_EDUC.csv",
                   encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  left_join(., educ)

### OCC
#### charger la table de correspondance
occ <- read.csv2("txt/corresp_OCC.csv",
                  encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  left_join(., occ)

rm(educ, occ)



### individus avec les heures ou lieux NA
t <- jourNA2check %>% 
  left_join(., pers, by = "ID_IND")
rm(t)

### Les enfants de moins de 5 ans : na partout
bibi <- pers %>% 
  filter_at(.vars = c("P8", "P9", "ECO", "EDUC", "OCC"), all_vars(is.na(.)))
sort(unique(bibi$AGE))
rm(bibi)


##~~ Revenu  ----

## récupérer la variable source
pers <- pers %>%
  left_join(., select(men, id_hogar = Id_Hogar, KREV = id_rango_ingresos))



###~~~ imputation des NA ----
### imputation réalisée dans imputation_bogota/imputation.Rmd selon
### la méthode random forest du package missForest
pers <- pers %>% 
  mutate(IDH = case_when(nchar(id_hogar)==3 ~ paste0("000", id_hogar),
                         nchar(id_hogar)==4 ~ paste0("00", id_hogar),
                         nchar(id_hogar)==5 ~ paste0("0", id_hogar),
                         TRUE ~ id_hogar))

### load le revenu du ménage imputé
rev <- read.csv2("txt/KREVI_bogota.csv",
                  encoding = "UTF-8", colClasses = c("character"))

### et joindre
pers <- pers %>% 
  left_join(., rev)

rm(rev)


###~~~ revenu par UC (selon INSEE) ----
#### Nb d'adultes et d'enfants de - de 14 ans dans le ménage (avec et sans le 1er adulte)
men_temp <- pers %>%
  select(id_hogar, id_persona, AGE) %>%
  group_by(id_hogar) %>%
  summarise(nbpers=length(unique(id_persona)),
            nbad = sum(AGE >= 18, na.rm=TRUE),
            nbadMoinsUn = sum(AGE >= 14, na.rm=TRUE) - 1,
            nbmoins14 = sum(AGE<14, na.rm=TRUE))

# attention : 4 ménages avec chef de famille = mineur de 17 ans

pers_rev <- pers %>%
  select(ID_IND, id_hogar, id_persona, AGE, KREV, KREVI) %>%
  left_join(., men_temp) %>%
  arrange(ID_IND)

rm(men_temp)


# Les unités de consommation sont généralement calculées
# selon l'échelle d'équivalence dite de l'OCDE modifiée
# qui attribue 1 uc au premier adulte du ménage,
# 0,5 uc aux autres personnes de 14 ans ou plus
# et 0,3 uc aux enfants de moins de 14 ans.

# rappel : cf. dico_eodh_BDMobiliscope pour les tranches de revenu
pers_rev <- pers_rev %>%
  mutate(REV_UC = case_when(KREVI == "1" ~ 414058/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "2" ~ 1164058/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "3" ~ 1750000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "4" ~ 2225000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "5" ~ 3000000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "6" ~ 4200000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "7" ~ 5850000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "8" ~ 7900000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),
                            KREVI == "9" ~ 10500000/(1+ nbadMoinsUn*0.5 + nbmoins14*0.3),

                            id_hogar == "33995" ~ 414058,
                            id_hogar == "16032" ~ 1164058,
                            id_hogar == "31612" ~ 3000000,
                            id_hogar == "33199" ~ 414058/1.3))

require(skimr)
skim(pers_rev$REV_UC)

### Création de la variable 'REV' en 5 modalités
options(scipen = 9999)
ggplot(pers_rev, aes(x=REV_UC)) +
  geom_histogram(binwidth=800000, color="white") +
  labs(title = "eff brut (tout âge)", x = "REV_UC (pas de 800 000$)")


### SMN 2019 = 828
pers_rev <- pers_rev %>%
  mutate(REV = case_when(REV_UC < 414000 ~ "1", # moins de un demi smic
                         REV_UC >= 414000 & REV_UC < 828000 ~ "2", # entre 0.5 et 1 smic
                         REV_UC >= 828000 & REV_UC < 1656000 ~ "3", # entre 1 et 2 smic
                         REV_UC >= 1656000 & REV_UC < 3312000 ~ "4", # entre 2 et 4 smic
                         REV_UC >= 3312000 ~ "5")) # plus de 4 smic

f <- data.frame(table(pers_rev$REV[pers_rev$AGE>15]))
f <- f %>%
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

### joindre les résultats à la table pers
pers <- pers %>% 
  left_join(., select(pers_rev, ID_IND, REV_UC, REV))

rm(f, pers_rev)



##~~ Travail informel ----

actifs <- pers %>% 
  select(ID_IND, AGE, P9, OCC, ECO, P8, EDUC, KREVI, W_IND, RES_COG) %>% 
  filter(OCC=="1")

sort(unique(actifs$P9))

## combiner P9 et ECO
actifs <- actifs %>% 
  mutate(P9_ECO = paste0(P9, "_", ECO))

actifs <- actifs %>% 
  mutate(ECO = case_when(is.na(ECO) ~ "NA",
                         TRUE ~ ECO))


## Si P9 = 11, 12, 13, 15, 21 => informel
## Si P9 = 18 => formel

## Si ECO = 20 => informel
## Si P9 = 17 et ECO = 15 => formel

sort(unique(actifs$P9_ECO))

# formel
formel <- c(# Tous les employés du public
            "17_1", "17_2", "17_3", "17_4", "17_5", "17_6", "17_7", "17_8", "17_9", 
            "17_10", "17_11", "17_12", "17_13", "17_14", "17_15", "17_16", "17_17", 
            "17_18", "17_19", "17_20", "17_21", "17_NA",
            
            # Tous les professionnels indépendants sauf secteur éco "résidentiel" 20
            "18_1", "18_2", "18_3", "18_4", "18_5", "18_6", "18_7", "18_8", "18_9", 
            "18_10", "18_11", "18_12", "18_13", "18_14", "18_15", "18_16", "18_17", 
            "18_18", "18_19", "18_21", "18_NA",
            
            # Tous les actifs du secteur éco "admin publique" 15
            "11_15", "12_15", "13_15", "14_15", "15_15", "16_15", "19_15", "20_15", "21_15",
            
            # Les conducteurs/messagers des secteurs éco ci-dessous (service++)
            "14_11", "14_13", "14_14", "14_16", "14_17",
            
            # Les employés du privé des secteurs éco ci-dessous (service++)
            "16_10", "16_11", "16_12", "16_13", "16_14", "16_15", "16_16", "16_17", "16_21",
            
            # Les employeurs des organisations extraterritoriales
            "20_21"
            )

##. informel
informel <- c(# Tous les manoeuvres sauf ceux du secteur éco "admin publique" 15
              "11_1", "11_2", "11_3", "11_4", "11_5", "11_6", "11_7", "11_8", "11_9",  
              "11_10", "11_11", "11_12", "11_13", "11_14", "11_16", "11_17", "11_18",
              "11_19",  "11_20", "11_21", "11_NA", 
              
              # Tous les journaliers/agriculteurs sauf ceux du secteurs éco "admin publique" 15
              "12_1", "12_3", "12_5", "12_6","12_7", "12_8", "12_9", "12_11", 
              "12_13", "12_14", "12_17","12_18", "12_19", "12_20", 
              
              # Tous les domestiques sauf ECO 15
              "13_1", "13_3", "13_4", "13_5", "13_6", "13_7", "13_8", "13_9", "13_10", 
              "13_11", "13_12", "13_13", "13_14", "13_16", "13_17", "13_18", "13_19", 
              "13_20", "13_21", 
              
              # Tous les travailleurs domestiques sauf ECO 15
              "15_1", "15_2", "15_3",  "15_5", "15_6", "15_7", "15_8", "15_9", 
              "15_10", "15_11", "15_12", "15_13", "15_14", "15_16","15_17", "15_18", 
              "15_19",  "15_20", "15_21", "15_NA",
              
              # Tous les vendeurs de l'informel
              "21_NA",
              
              # Tous les conducteurs/messagers des secteurs éco ci-dessous 
              "14_1", "14_2", "14_3", "14_4", "14_5", "14_6", "14_7", "14_8", "14_9",
              "14_10", "14_12", "14_18", "14_19", "14_20", "14_NA",
              
              # Les travailleurs indépendants des secteurs éco ci-dessous
              "19_1", "19_2", "19_3", "19_4", "19_5", "19_6", "19_7", "19_8", "19_9", 
              "19_12", "19_14", "19_16", "19_18", "19_19", "19_20", "19_NA",
              
              # Les employés du privé, les professionnels indépendants, les employeurs du secteur "résidentiel" 20
              "16_20", "18_20", "20_20",
              
              # Les employés du privé sans secteur éco renseigné
              "16_NA"
              )


actifs <- actifs %>% 
  mutate(INFORMAL = case_when(P9_ECO %in% formel ~ 0,
                              P9_ECO %in% informel ~ 1))


## reste 8931 actifs à classer :
table(actifs$INFORMAL, useNA = "always")


actifs2 <- actifs %>% 
  filter(is.na(INFORMAL))

sort(unique(actifs2$P9_ECO))

## Classement selon revenu et niv éduc
actifs2 <- actifs2 %>% 
  mutate(KREVI = as.numeric(KREVI),
         INFORMAL = case_when(P9 == "16" & KREVI == 1 ~ 1,
                              P9 == "16" & KREVI > 1 ~ 0,
                              P9 == "19" & P8 %in% c("11", "12", "13") & KREVI > 2 ~ 0,
                              P9 == "19" & (!P8 %in% c("11", "12", "13") | KREVI <= 2) ~ 1,
                              P9 == "20" & KREVI>5 ~ 0,
                              P9 == "20" & KREVI<=5 ~ 1))

actifs <- actifs %>% 
  filter(!ID_IND %in% actifs2$ID_IND) %>% 
  rbind(actifs2)

table(actifs$INFORMAL, useNA = "always")

### part de l'informel parmi les actifs de 16+ pondérés
sumPop <- actifs %>% 
  filter(AGE>15) %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

options(scipen = 9999)
sumPop_p9 <- actifs %>% 
  filter(AGE>15) %>%
  group_by(P9, INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = round(n*100/sum(n), 2))

sumPop_Bogota <- actifs %>% 
  filter(AGE>15) %>%
  filter(RES_COG=="11001") %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))


## Joindre la nouvelle variable INFORMAL à la table personne
pers <- pers %>% 
  left_join(., select(actifs, ID_IND, INFORMAL))

rm(actifs2, sumPop, sumPop_Bogota, sumPop_p9, formel, informel)


##~~ cso ----
## 1 : travailleur non qualifié
## 2 : travailleur qualifié
## 3 : indépendant
## 4 : profesionales

actifs <- actifs %>% 
  mutate(CSO = case_when(P9 %in% c("11", "12", "13") ~ "1",
                         P9 %in% c("14", "15") & P8 %in% c("1", "2", "3", "4", "5", "6", "14") ~ "1",
                         P9 %in% c("14", "15") & !P8 %in% c("1", "2", "3", "4", "5", "6", "14") ~ "2",
                         P9 == "21" ~ "1",
                         P9 %in% c("16", "17") & P8 %in% c("1", "2", "3", "4", "5", "6", "14") ~ "1",
                         P9 %in% c("16", "17") & P8 %in% c("11", "12", "13") & as.numeric(KREVI)>2 ~ "4",
                         P9 %in% c("16", "17") & P8 %in% c("11", "12", "13") & as.numeric(KREVI)<=2 ~ "2",
                         P9 %in% c("16", "17") & P8 %in% c("7", "8", "9", "10") ~ "2",
                         P9 == "18" & ECO == "20" ~ "3",
                         P9 == "18" & P8 %in% c("1", "2", "3", "4", "5", "6", "14") ~ "3",
                         P9 == "18" & ECO != "20" & P8 %in% c("7", "8", "9", "10", "11", "12", "13") ~ "4",
                         P9 == "19" ~ "3",
                         P9 == "20" & ECO == "15" ~ "4",
                         P9 == "20" & ECO != "15" ~ "3",
                         P9 == "18" & is.na(ECO) ~ "4"))

table(actifs$CSO, useNA = "always")

## effectifs des actifs de 16 ans et plus pondérés
sumPop <- actifs %>% 
  filter(AGE>15) %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

### joindre la nouvelle variable à la table personne
pers <- pers %>% 
  left_join(., select(actifs, ID_IND, CSO))

rm(actifs, sumPop)



##~~ statut d'occupation dans le logement ----

## statut d'occupation relativement à la position de la personne au chef de ménage
## 3. proprio = ménage proprio + chef ou conjoint ou enfant de moins de 25 exclu
## 2. locataire = ménage locataire + chef ou conjoint ou enfant de moins de 25 exclu
## 1. hébergé et autres = autre ménage ou proprio/locataire non chef/conjoint

## on joint la variable propia du ménage à la table personne
pers <- pers %>% 
  left_join(., select(men, id_hogar = Id_Hogar, propia = p4_id_vivienda_propia))

## proppia simplifié :
log <- read.csv2("txt/corresp_OCCLOG.csv",
                  encoding = "UTF-8", colClasses = c("character"))

## on joint 
pers <- pers %>% 
  left_join(., log)

table(pers$OCC_LOG, useNA = "always")

rm(log)



## Création de LOG par croisement de variables
pers <- pers %>% 
  mutate(LOG = case_when(OCC_LOG == "1" & p3_id_parentesco_jh %in% c("1", "2") ~ "3",
                         OCC_LOG == "1" & p3_id_parentesco_jh == "3" & AGE < 25 ~ "3",
                         OCC_LOG == "2" & p3_id_parentesco_jh %in% c("1", "2") ~ "2",
                         OCC_LOG == "2" & p3_id_parentesco_jh == "3" & AGE < 25 ~ "2",
                         is.na(OCC_LOG) ~ NA_character_,
                         TRUE ~ "1"))

table(pers$LOG, useNA = "always")

# check
p <- pers %>% 
  select(ID_IND, W_IND, AGE, propia, OCC_LOG, p3_id_parentesco_jh, LOG)

f <- data.frame(table(p$LOG[p$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

f2 <- p %>% 
  filter(AGE>15) %>% 
  group_by(LOG) %>% 
  summarize(pond = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(pondP = round(pond * 100 / sum(pond), 1))

## n et p brut 
f <- f %>% 
  mutate(occ_log = c("Hébergé", "locataire", "proprio", "NA")) %>% 
  select(occ_log, n = Freq, p = Freq_P)


##~~ structure du ménage ----

## Catégories :
## 5: extenso o compuesto con menores : ménage composé d'un ou plusieurs adultes avec mineur(s) :
## comprend les familles élargies, et éventuellement les membres n'ont pas tous un lien 
## de parenté avec le chef de ménage 
## 4: nuclear con menores : ménage composé d'une famille nucléaire avec enfant(s) :
## un ou deux parents avec enfant(s) de moins de 16 ans
## 3: extenso o compusto con adultos : ménage composé uniquement d'adultes : famille élargie ou
## sans liens familiaux
## 2: nuclear adultos : ménage composé uniquement d'adultes avec un lien de parenté direct :
## couple ; couple avec enfant(s) majeur(s) ; ou un parent avec enfant(s) majeur(s)
## 1: unipersonal : ménage d'une seule personne

## ! ici, majorité à 16 ans


## comptage du nombre de personne dans le ménage
men_temp <- pers %>%
  select(id_hogar, id_persona, AGE, p3_id_parentesco_jh) %>%
  filter(!p3_id_parentesco_jh %in% c("15", "16")) %>% ## exclusion des domestiques et de leurs enfants dans le comptage
  group_by(id_hogar) %>%
  summarise(nbpers = length(unique(id_persona)),
            nbad = sum(AGE >= 16, na.rm = TRUE),
            nbmin = sum(AGE <16, na.rm = TRUE)) %>% 
  ungroup()


## joindre le comptage à la table personne (table intermédiaire)
## et on simplifie les relations au chef du ménage
p <- pers %>% 
  left_join(., men_temp) %>% 
  select(ID_IND, AGE, p3_id_parentesco_jh, id_hogar, nbpers, nbad, nbmin) %>% 
  mutate(p3 = case_when(p3_id_parentesco_jh %in% c("4", "5", "6", "7", "8", "9",
                                                   "10", "11", "12", "13", "14") ~ "4", # parentés
                        p3_id_parentesco_jh %in% c("15", "16") ~ "5", # domestiques + enfants domestiques
                        p3_id_parentesco_jh == "17" ~ "6",   # non parentés
                        TRUE ~ p3_id_parentesco_jh))

## on recode le ménage d'une domestique
p <- p %>% 
  mutate(nbpers = case_when(id_hogar == "P00521" ~ 1,
                            TRUE ~ as.numeric(nbpers)))


## stockage de toutes les compositions (relation au chef de famille)
p <- p %>% 
  arrange(id_hogar, as.numeric(p3)) %>% 
  group_by(id_hogar) %>% 
  mutate(suite_p3 = list(unique(p3))) %>% 
  ungroup()

length(unique(p$suite_p3))

## on identifie les familles nucléaires
p <- p %>% 
  mutate(nuclear = case_when(as.character(suite_p3) == 'c("1", "2")' ~ "couple",
                             as.character(suite_p3) == 'c("1", "3")' ~ "monoparental",
                             as.character(suite_p3) == 'c("1", "2", "3")' ~ "couple avec enfant"))


## Création de l'indicateur STRM (structure du ménage)
p <- p %>% 
  mutate(STRM = case_when(
    
    nbpers == 1 ~ "1. unipersonal",
    
    nuclear %in% c("couple avec enfant", "monoparental") & nbmin > 0 ~ "4. nuclear con menores",
    
    nuclear %in% c("couple", "couple avec enfant", "monoparental") & nbmin == 0 ~ "2. nuclear adultos",
    
    nbpers == nbad ~ "3. extenso o compuesto adultos",
    
    TRUE ~ "5. extenso o compuesto con menores"
    
  ))


## on repasse au niveau des ménages pour vérification
m <- p %>% 
  filter(!duplicated(id_hogar))

f <- data.frame(table(m$STRM, useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))


unique(m$suite_p3[m$STRM=="2. nuclear adultos"]) 
unique(m$suite_p3[m$STRM=="4. nuclear con menores"])
unique(m$suite_p3[m$STRM=="5. extenso o compuesto con menores"])
unique(m$suite_p3[m$STRM=="1. unipersonal"])
unique(m$suite_p3[m$STRM=="3. extenso o compuesto adultos"])

## on recode par des chiffres les modalités
m <- m %>% 
  rename(STRUCTURE = STRM) %>% 
  mutate(STRM = substr(STRUCTURE, 1, 1)) %>% 
  select(id_hogar, STRUCTURE, STRM)

rm(p)

## enfin jointure à la table personne (pas de STRM pour les domestiques)
pers <- pers %>% 
  left_join(., m) %>% 
  mutate(STRM = case_when(p3_id_parentesco_jh %in% c("15", "16") ~ NA_character_,
                          TRUE ~ STRM))

## check 
p <- pers %>% 
  select(ID_IND, p3_id_parentesco_jh, AGE, SEX, STRM, STRUCTURE)

rm(p, men_temp, m)

f <- data.frame(table(pers$STRM[pers$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))




##~~ filtrage des individus ----
### individus présents dans la table déplacement
ind_depl <- sort(unique(depl_bogota$ID_IND))
pers <- pers %>% 
  mutate(mobility = case_when(ID_IND %in% ind_depl ~ "mobile",
                              !ID_IND %in% ind_depl & p13_realizo_desplazamiento !="1" ~ "immobile"))


### individus avec les heures ou lieux NA
t <- jourNA2check %>% 
  left_join(., pers, by = "ID_IND")
t <- t %>% 
  select(ID_IND, AGE, mobility)
t <- t %>% 
  filter(!duplicated(ID_IND)) %>% 
  filter(!is.na(AGE))
rm(t, jourNA2check)


### on filtre les individus qui se sont déplacés mais non pas répondu au module
pers_bogota <- pers %>% 
  filter(!is.na(mobility))

### on filtre les enfants de 5-
pers_bogota <- pers_bogota %>% 
  filter(AGE>4)

f <- data.frame(table(pers_bogota$mobility))
f <- f %>%
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

### on filtre les résidents des secteurs supprimés
pers_bogota <- pers_bogota %>% 
  filter(!RES_SEC %in% c("UTAM60", "UTAM63", "UTAM64", 
                         "UPR1", "UPR2", "UPR3", "UPR4", "UPR5"))


##~~ Mise en forme ----
pers_bogota <- pers_bogota %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_ZF, RES_COG, RES_SEC, RES_LOC, RES_SSE,
            SEX, AGE, KAGE, KAGE2,
            P8, EDUC, P9, OCC, 
            KREV = KREVI, REV_UC, REV,
            CSO, INFORMAL, STRM, LOG,
            W_IND, ZONAGE_SEC) %>% 
  arrange(ID_IND)


rm(depl, duree, men, municip, pers, ind_depl, f)


### on refait les calculs sur les actifs avec la nouvelle table filtrée
sumPop_cso <- pers_bogota %>% 
  filter(AGE>15) %>% 
  filter(!is.na(CSO)) %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

sumPop_informel <- pers_bogota %>% 
  filter(AGE>15) %>% 
  filter(!is.na(INFORMAL)) %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

sumPop_informel_B <- pers_bogota %>% 
  filter(AGE>15) %>%
  filter(!is.na(INFORMAL)) %>% 
  filter(RES_COG=="11001") %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

rm(sumPop_cso, sumPop_informel, sumPop_informel_B)



##~ last corrections ----
### correction des heures sources Bogota pour 44 individus
### au cas par cas ou supression

# fifi <- read.csv2("data/bdm/fifi.csv")
# pbBogota <- depl_bogota %>%
#   filter(ID_IND %in% fifi$ID_IND)
# length(unique(pbBogota$ID_IND))



### correction des données brutes 
depl_bogota$M_START[depl_bogota$ID_IND=="11001_0017_034554_01" & depl_bogota$NDEP=="02"] <- 30

depl_bogota$H_START[depl_bogota$ID_IND=="11001_0053_P01626_01" & depl_bogota$NDEP=="03"] <- 18
depl_bogota$M_START[depl_bogota$ID_IND=="11001_0053_P01626_01" & depl_bogota$NDEP=="03"] <- 30
 
depl_bogota$H_START[depl_bogota$ID_IND=="11001_0055_034088_02" & depl_bogota$NDEP=="02"] <- 7

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0109_001837_01" & depl_bogota$NDEP=="02"] <- 40

depl_bogota <- depl_bogota %>%
  mutate(NDEP = case_when(ID_IND=="11001_0115_P00831_05" & NDEP=="01" ~ NA_character_,
                          ID_IND=="11001_0115_P00831_05" & NDEP=="02" ~ "01",
                          ID_IND=="11001_0115_P00831_05" & NDEP=="03" ~ "02",
                          TRUE ~ NDEP)) %>%
  filter(!is.na(NDEP))

depl_bogota$H_END[depl_bogota$ID_IND=="11001_0170_012699_02" & depl_bogota$NDEP=="01"] <- 7

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0185_005414_02" & depl_bogota$NDEP=="03"] <- 50
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0317_P04028_02" & depl_bogota$NDEP=="01"] <- 14

depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0330_014100_01")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0330_014100_01")

depl_bogota <- depl_bogota %>%
  mutate(NDEP = case_when(ID_IND=="11001_0335_015253_03" & NDEP=="01" ~ NA_character_,
                          ID_IND=="11001_0335_015253_03" & NDEP=="02" ~ "01",
                          ID_IND=="11001_0335_015253_03" & NDEP=="03" ~ NA_character_,
                          ID_IND=="11001_0335_015253_03" & NDEP=="04" ~ "02",
                          TRUE ~ NDEP),

         O_PURPOSE = case_when(ID_IND=="11001_0335_015253_03" & NDEP=="02" ~ "03",
                               TRUE ~ O_PURPOSE)) %>%
  filter(!is.na(NDEP))
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0348_002348_04" & depl_bogota$NDEP=="01"] <- 9
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0348_002348_04" & depl_bogota$NDEP=="01"] <- 10
 
depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0395_010702_02")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0395_010702_02")

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0462_P01118_01" & depl_bogota$NDEP=="02"] <- 5

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0515_017594_04" & depl_bogota$NDEP=="04"] <- 14
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0515_017594_04" & depl_bogota$NDEP=="04"] <- 19

depl_bogota$H_END[depl_bogota$ID_IND=="11001_0517_004078_01" & depl_bogota$NDEP=="01"] <- 4

depl_bogota$H_END[depl_bogota$ID_IND=="11001_0524_010591_01" & depl_bogota$NDEP=="01"] <- 8
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0524_010591_01" & depl_bogota$NDEP=="01"] <- 50

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0542_001244_01" & depl_bogota$NDEP=="01"] <- 5
depl_bogota$M_START[depl_bogota$ID_IND=="11001_0542_001244_01" & depl_bogota$NDEP=="02"] <- 25
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0542_001244_01" & depl_bogota$NDEP=="02"] <- 30

depl_bogota <- depl_bogota %>%
  mutate(NDEP = case_when(ID_IND=="11001_0543_004037_02" & NDEP=="02" ~ NA_character_,
                          ID_IND=="11001_0543_004037_02" & NDEP=="03" ~ "02",
                          ID_IND=="11001_0543_004037_02" & NDEP=="04" ~ "03",
                          TRUE ~ NDEP),

         O_PURPOSE = case_when(ID_IND=="11001_0543_004037_02" & NDEP=="03" ~ "05",
                               TRUE ~ O_PURPOSE)) %>%
  filter(!is.na(NDEP))
 
depl_bogota$H_START[depl_bogota$ID_IND=="11001_0551_001250_01" & depl_bogota$NDEP=="02"] <- 12
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0551_001250_01" & depl_bogota$NDEP=="02"] <- 13

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0569_000516_01" & depl_bogota$NDEP=="03"] <- 55

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0649_P04353_02" & depl_bogota$NDEP=="01"] <- 4

depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0654_033652_01")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0654_033652_01")

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0663_002974_01" & depl_bogota$NDEP=="02"] <- 50

depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0672_002402_01")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0672_002402_01")

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0672_002403_02" & depl_bogota$NDEP=="06"] <- 55
 
# depl_bogota <- depl_bogota %>%  filter(ID_IND!="11001_0677_000337_01")
# pers_bogota <- pers_bogota %>%  filter(ID_IND!="11001_0677_000337_01")

depl_bogota$H_END[depl_bogota$ID_IND=="11001_0677_000447_02" & depl_bogota$NDEP=="02"] <- 11
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0677_000447_02" & depl_bogota$NDEP=="02"] <- 37
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0682_005477_02" & depl_bogota$NDEP=="01"] <- 8
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0682_005477_02" & depl_bogota$NDEP=="01"] <- 0

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0743_010929_02" & depl_bogota$NDEP=="01"] <- 10

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0749_P01437_01" & depl_bogota$NDEP=="01"] <- 20

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0783_P03496_01" & depl_bogota$NDEP=="03"] <- 15
depl_bogota$M_START[depl_bogota$ID_IND=="11001_0783_P03496_01" & depl_bogota$NDEP=="04"] <- 20
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0783_P03496_01" & depl_bogota$NDEP=="04"] <- 55

depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0784_014402_01")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0784_014402_01")
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0838_033887_01" & depl_bogota$NDEP=="01"] <- 7

depl_bogota$M_END[depl_bogota$ID_IND=="11001_0909_P03446_01" & depl_bogota$NDEP=="01"] <- 15
 
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0910_P01003_02" & depl_bogota$NDEP=="01"] <- 16
 
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0913_P07293_04" & depl_bogota$NDEP=="03"] <- 15
 
# depl_bogota$H_END[depl_bogota$ID_IND=="11001_0914_P03093_01" & depl_bogota$NDEP=="01"] <- 4
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_0934_P00708_01" & depl_bogota$NDEP=="01"] <- 6
depl_bogota$M_END[depl_bogota$ID_IND=="11001_0934_P00708_01" & depl_bogota$NDEP=="01"] <- 30
 
# depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0948_010309_01")
# pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0948_010309_01")

depl_bogota$M_START[depl_bogota$ID_IND=="11001_0998_004617_03" & depl_bogota$NDEP=="05"] <- 30
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_1034_032956_02" & depl_bogota$NDEP=="01"] <- 6
 
depl_bogota$H_END[depl_bogota$ID_IND=="11001_1509_P00256_01" & depl_bogota$NDEP=="10"] <- 19
depl_bogota$M_END[depl_bogota$ID_IND=="11001_1509_P00256_01" & depl_bogota$NDEP=="10"] <- 15
depl_bogota$O_PURPOSE[depl_bogota$ID_IND=="11001_1509_P00256_01" & depl_bogota$NDEP=="11"] <- "05"
 
depl_bogota$M_END[depl_bogota$ID_IND=="11001_1520_006204_03" & depl_bogota$NDEP=="04"] <- 48
depl_bogota$M_START[depl_bogota$ID_IND=="11001_1520_006204_03" & depl_bogota$NDEP=="05"] <- 50
 
depl_bogota$M_END[depl_bogota$ID_IND=="11001_1522_005028_03" & depl_bogota$NDEP=="02"] <- 18
 
depl_bogota$M_END[depl_bogota$ID_IND=="11001_1609_004842_03" & depl_bogota$NDEP=="03"] <- 5
depl_bogota$M_START[depl_bogota$ID_IND=="11001_1609_004842_03" & depl_bogota$NDEP=="04"] <- 10
depl_bogota$M_END[depl_bogota$ID_IND=="11001_1609_004842_03" & depl_bogota$NDEP=="04"] <- 30




depl_bogota <- depl_bogota %>% filter(ID_IND!="11001_0122_P04793_01")
pers_bogota <- pers_bogota %>% filter(ID_IND!="11001_0122_P04793_01")

depl_bogota <- depl_bogota %>%
  mutate(NDEP = case_when(ID_IND=="11001_0310_P03873_04" & NDEP=="03" ~ NA_character_,
                          TRUE ~ NDEP)) %>%
  filter(!is.na(NDEP))

depl_bogota$H_START[depl_bogota$ID_IND=="11001_0462_P00487_02" & depl_bogota$NDEP=="03"] <- 17


depl_bogota <- depl_bogota %>%
  mutate(NDEP = case_when(ID_IND=="11001_0508_P07662_01" & NDEP=="03" ~ NA_character_,
                          TRUE ~ NDEP)) %>%
  filter(!is.na(NDEP)) %>% 
  mutate(NDEP = case_when(ID_IND=="11001_0508_P07662_01" & NDEP=="04" ~"03",
                          ID_IND=="11001_0508_P07662_01" & NDEP=="05" ~"04",
                          TRUE ~ NDEP),
         O_PURPOSE = case_when(ID_IND=="11001_0508_P07662_01" & NDEP=="03" ~"06",
                               TRUE ~ O_PURPOSE))

depl_bogota$H_END[depl_bogota$ID_IND=="11001_0727_001567_02" & depl_bogota$NDEP=="02"] <- 10
depl_bogota$H_START[depl_bogota$ID_IND=="11001_0727_001567_02" & depl_bogota$NDEP=="03"] <- 11

depl_bogota$H_START[depl_bogota$ID_IND=="11001_0743_P02795_02" & depl_bogota$NDEP=="02"] <- 7

depl_bogota$H_START[depl_bogota$ID_IND=="11001_0784_011520_02" & depl_bogota$NDEP=="02"] <- 8
depl_bogota$M_START[depl_bogota$ID_IND=="11001_0784_011520_02" & depl_bogota$NDEP=="02"] <- 0
# rm(fifi, pbBogota)



### recoder O_ZF et D_ZF 0000 par NA ou 9999 ?
sort(unique(depl_bogota$RES_ZF))
sort(unique(depl_bogota$O_ZF))
sort(unique(depl_bogota$D_ZF))

depl_bogota <- depl_bogota %>% 
  mutate(O_ZF = case_when(O_ZF == "0000" ~ NA_character_,
                          TRUE ~ O_ZF),
         D_ZF = case_when(D_ZF == "0000" ~ NA_character_,
                          TRUE ~ D_ZF))

### secteurs - remplacer UTAM63 et les NA par 999 
sort(unique(depl_bogota$RES_SEC))
sort(unique(depl_bogota$O_SEC))
sort(unique(depl_bogota$D_SEC))

depl_bogota <- depl_bogota %>% 
  mutate(O_SEC = case_when(is.na(O_SEC) & !is.na(O_ZF) ~ "999",
                           O_SEC %in% c("UTAM60", "UTAM63", "UTAM64", 
                                        "UPR1", "UPR2", "UPR3", "UPR4", "UPR5") ~ "999",
                           TRUE ~ O_SEC),
         D_SEC = case_when(is.na(D_SEC) & !is.na(D_ZF) ~ "999",
                           D_SEC %in% c("UTAM60", "UTAM63", "UTAM64", 
                                        "UPR1", "UPR2", "UPR3", "UPR4", "UPR5") ~ "999",
                           TRUE ~ D_SEC))

sort(unique(depl_bogota$RES_COG))
sort(unique(depl_bogota$O_COG))
sort(unique(depl_bogota$D_COG))


rm(a, b, c, k, tempo, f2)




# 2. Santiago ====


#~ load data source ----

require(readxl)
options(scipen = 9999)
## déplacement
depl <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Viaje.xlsx")
## personne
pers <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Persona.xlsx")
## ménage
men <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Hogar.xlsx")
## étape
etape <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Etapa.xlsx")


##
d <- depl %>% 
  mutate(idd = paste(Hogar, Persona, Viaje, "_"))
rm(d)
p <- pers %>% 
  mutate(idp = paste(Hogar, Persona, "_"))
rm(p)
length(unique(men$Hogar))


#~ Nouvelle table déplacement ----

##~~ Identifiants ----

### identifiants uniques des répondants :
### codeVilleCentre_Zona_Hogar_Persona
### corriger longueur des variables

# ZF de résidence - table ménage
depl <- depl %>% 
  left_join(., select(men, Hogar, Zona))

### longueur de ZF
min(nchar(depl$Zona))
max(nchar(depl$Zona))
length(unique(depl$Zona))

depl <- depl %>% 
  mutate(RES_ZF = case_when(nchar(Zona)==1 ~ paste0("00", as.character(Zona)),
                            nchar(Zona)==2 ~ paste0("0", as.character(Zona)),
                            nchar(Zona)==3 ~ as.character(Zona)))

### ID
max(nchar(depl$Hogar))
min(nchar(depl$Hogar))
max(nchar(depl$Persona))

depl <- depl %>% 
  mutate(ID_IND = paste0("13101_", RES_ZF, "_", as.character(Hogar), "_", as.character(substr(Persona, 7, 8))),
         ID_ED = "13101_2012",
         LIB_ED = "Santiago, 2012",
         ENQUETE = "SANTIAGO") 

min(nchar(depl$ID_IND))
max(nchar(depl$ID_IND))


##~~ Variables spatiales ----

### Comuna
sort(unique(men$Comuna))

#### load table Comuna de la BD source
com <- read_excel("data_source//Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Comuna.xlsx")

setdiff(depl$ComunaOrigen, com$Id)
setdiff(depl$ComunaDestino, com$Id)
setdiff(men$Comuna, com$Comuna)

#### joindre les codes comuna de résidence à la table déplacement via la table ménage
men <- men %>% 
  left_join(., com)

depl <- depl %>% 
  left_join(., select(men, Hogar, RES_COG = Id))

length(unique(depl$RES_COG))

### RES_SEC
### load table de passage zona/secteur créée dans 1_construction_secteurs_santiago.R
zfsec <- read.csv2("txt/corresp_ZONA_SEC_santiago.csv",
                   colClasses = c("character"))

depl <- depl %>% 
  left_join(., select(zfsec, RES_ZF = CODE_ZONA, RES_SEC = CODE_SEC), by = "RES_ZF")

### O_ZF et D_ZF
depl <- depl %>% 
  mutate(O_ZF = case_when(nchar(ZonaOrigen)==1 ~ paste0("00", as.character(ZonaOrigen)),
                          nchar(ZonaOrigen)==2 ~ paste0("0", as.character(ZonaOrigen)),
                          nchar(ZonaOrigen)==3 ~ as.character(ZonaOrigen)),
         D_ZF = case_when(nchar(ZonaDestino)==1 ~ paste0("00", as.character(ZonaDestino)),
                          nchar(ZonaDestino)==2 ~ paste0("0", as.character(ZonaDestino)),
                          nchar(ZonaDestino)==3 ~ as.character(ZonaDestino)),
         RES_COG = as.character(RES_COG),
         O_COG = as.character(ComunaOrigen),
         D_COG = as.character(ComunaDestino))

### O_SEC et D_SEC 
depl <- depl %>% 
  left_join(., select(zfsec, O_ZF = CODE_ZONA, O_SEC = CODE_SEC), by = "O_ZF")

depl <- depl %>% 
  left_join(., select(zfsec, D_ZF = CODE_ZONA, D_SEC = CODE_SEC), by = "D_ZF")

###☻ check new code
length(unique(depl$RES_SEC))
length(unique(depl$O_SEC))
length(unique(depl$D_SEC))

setdiff(depl$O_SEC, depl$D_SEC)
setdiff(depl$O_SEC, depl$RES_SEC)

### secteur hors périmètre = 999
depl <- depl %>% 
  mutate(O_SEC = case_when(is.na(O_SEC) ~ "999",
                           TRUE ~ O_SEC),
         D_SEC = case_when(is.na(D_SEC) ~ "999",
                           TRUE ~ D_SEC))



##~~ Variables temporelles ----


### Rappel : fenêtre de minuit à minuit
### On change de date pour les déplacements se terminant à 0h et au-delà

varTemp <- depl %>% 
  select(ID_IND, Viaje, HoraIni, HoraFin, HoraMedia, TiempoViaje, TiempoMedio, Periodo, CódigoTiempo,
         RES_ZF, O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG, Proposito)


varTemp <- varTemp %>% 
  mutate(diff = (HoraFin-HoraIni)/60)
varTemp <- varTemp %>% 
  mutate(HoraFin2 = case_when(((HoraFin-HoraIni)/60)<0 ~ 
                                HoraFin + ddays(1),
                              TRUE ~ HoraFin))

### on vérifie si diff avec tiempoViaje
varTemp <- varTemp %>% 
  mutate(diff2 = case_when((HoraFin2-HoraIni)/60==TiempoViaje ~ TRUE,
                           (HoraFin2-HoraIni)/60!=TiempoViaje ~ FALSE))


### transfo de la fenêtre 0h-0h => 4h-4h

#### clé
varTemp <- varTemp %>% 
  mutate(id_viaje = as.numeric(as.character(substr(Viaje, 9, 10)))) %>% 
  mutate(idd = paste0(ID_IND, "_", id_viaje)) %>% 
  relocate(idd)

### 544 déplacements débutent avant 4h (à j comme à j+1) ...
a <-  varTemp %>% 
  filter(HoraIni< ymd_hms("1899-12-31 04:00:00"))

### ... dont 22 déplacements chevauchent 4h (à j comme à j+1):
b <- a %>% 
  filter(HoraFin2> ymd_hms("1899-12-31 04:00:00"))

length(unique(b$ID_IND))  # 1 déplacement à cheval par individu

### 522 déplacements strictement compris entre 0h et 4h 
c <- a %>%
  filter(!idd %in% b$idd)



### REPORT DES DEPLACEMENTS COMPRIS STRICTEMENT ENTRE 0h ET 4H 

### -> on reporte à j+1
c <- c %>% 
  mutate(HoraIni = ymd_hms(HoraIni) + ddays(1),
         HoraFin2 = ymd_hms(HoraFin2) + ddays(1),
         newIdd = paste0(idd, "_c"))


### on joint ces reports aux autres déplacements des individus concernés
tempo_c <- varTemp %>% 
  filter(ID_IND %in% c$ID_IND) %>% 
  filter(!idd %in% c$idd) %>% 
  bind_rows(., c) %>% 
  arrange(ID_IND, HoraIni)

### On vérifie la cohérence des lieux d'origine-destination
tempo_c <- tempo_c %>% 
  group_by(ID_IND) %>% 
  mutate(pbZf = case_when(!is.na(newIdd) & O_ZF!=lag(D_ZF) ~ TRUE),
         pbSec = case_when(!is.na(newIdd) & O_SEC!=lag(D_SEC) ~ TRUE),
         pbcog = case_when(!is.na(newIdd) & O_COG!=lag(D_COG) ~ TRUE)) %>% 
  ungroup()

### on observe le cas problématique
i <- unique(tempo_c$ID_IND[tempo_c$pbZf==TRUE & !is.na(tempo_c$pbZf)])
bibi <- tempo_c %>% 
  filter(ID_IND %in% i)

### on corrige 
tempo_c <- tempo_c %>% 
  mutate(O_ZF = case_when(pbZf==TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pbSec==TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC))

### on joint les corrections à la table tempo
varTemp <- varTemp %>% 
  filter(!ID_IND %in% tempo_c$ID_IND) %>% 
  bind_rows(., select(tempo_c, -pbZf, -pbSec, -pbcog)) %>% 
  arrange(idd)

rm(i, bibi)


#### CAS DES DEPLACEMENTS QUI CHEVAUCHENT 4H

#### CAS DES id_viaje CODÉS 1
#### on vérifie leur cohérence en terme de lieux de présence 
#### par rapport au déplacement qui suit (selon HEURE_DEB) 
#### en vu de leur dédoublement : pas de correction pour la partie restant à j
#### mais correction pour la partie reportée à j+1
#### les déplacements uniques seront à corriger également
tempo_b <- varTemp %>% 
  filter(ID_IND %in% b$ID_IND) %>% 
  group_by(ID_IND) %>% 
  arrange(ID_IND, HoraIni) %>% 
  mutate(ntrip = n(),
         chev = case_when(HoraIni<ymd_hms("1899-12-31 04:00:00") ~ "y"),
         pbZf_idd1 = case_when(ntrip==1 ~ TRUE,
                               id_viaje==1 & chev=="y" & D_ZF==lead(O_ZF) ~ FALSE,
                               id_viaje==1 & chev=="y" & D_ZF!=lead(O_ZF) ~ TRUE),
         
         
         pbSec_idd1 = case_when(ntrip==1 ~ TRUE,
                                id_viaje==1 & chev=="y" & D_SEC==lead(O_SEC) ~ FALSE,
                                id_viaje==1 & chev=="y" & D_SEC!=lead(O_SEC) ~ TRUE),
         
         pbCog_idd1 = case_when(ntrip==1 ~ TRUE,
                                id_viaje==1 & chev=="y" & D_COG==lead(O_COG) ~ FALSE,
                                id_viaje==1 & chev=="y" & D_COG!=lead(O_COG) ~ TRUE)) %>% 
  ungroup()

#### CAS DES pbZf==FALSE
iF <- tempo_b$idd[tempo_b$pbZf_idd1==FALSE & !is.na(tempo_b$pbZf_idd1)]

#### On dédouble ces 14 déplacements sans incohérence de ZAT:
#### bF_j1 est à bouger à j+1
bF_j1 <- tempo_b %>% 
  filter(idd %in% iF) %>% 
  mutate(HoraFin2 = ymd_hms(HoraFin2) + ddays(1),
         HoraIni = ymd_hms(HoraIni) + ddays(1),
         newIdd = paste0(idd, "_j1"))
#### bF_j reste à j
bF_j <- tempo_b %>% 
  filter(idd %in% iF) %>% 
  mutate(HoraIni = ymd_hms("1899-12-31 04:00:00"),
         newIdd = paste0(idd, "_j"))

#### on assemble les 28 nouveaux déplacements aux autres déplacements de ces individus
#### pour reconstituer leur journée et on corrige les lieux de présence
tempo_b1 <- tempo_b %>% 
  filter(!idd %in% iF) %>% 
  bind_rows(., bF_j1) %>% 
  bind_rows(., bF_j) %>% 
  filter(ID_IND %in% bF_j$ID_IND) %>% 
  arrange(ID_IND, ymd_hms(HoraIni)) %>% 
  group_by(ID_IND) %>% 
  mutate(tochangeZ = case_when(newIdd %in% bF_j1$newIdd & O_ZF != lag(D_ZF) ~ "T"),
         tochangeS = case_when(newIdd %in% bF_j1$newIdd & O_SEC != lag(D_SEC) ~ "T"),
         tochangeC = case_when(newIdd %in% bF_j1$newIdd & O_COG != lag(D_COG) ~ "T")) 

tempo_b1 <- tempo_b1 %>% 
  mutate(O_ZF = case_when(tochangeZ=="T" ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(tochangeZ=="T" ~ lag(D_SEC),
                           TRUE ~ O_SEC)) %>% 
  ungroup() %>% 
  select(-tochangeC, -tochangeZ, -tochangeS)


#### on joint ces corrections à tempo_b
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% tempo_b1$ID_IND) %>% 
  bind_rows(., tempo_b1) %>% 
  arrange(ID_IND, ymd_hms(HoraIni))

rm(bF_j, bF_j1)


#### CAS DU pbZf==TRUE
iT <- tempo_b$idd[tempo_b$pbZf_idd1==TRUE & !is.na(tempo_b$pbZf_idd1)]

#### on créé une sous-table pour observer sa journée
ind <- tempo_b$ID_IND[tempo_b$idd %in% iT]
tempo_bT <- tempo_b %>% 
  filter(ID_IND %in% ind)

#### on dédouble son déplacement unique
#### bT_j1 est à bouger à j+1
#### les motifs de déplacement deviennent NA
bT_j1 <- tempo_bT %>% 
  mutate(HoraFin2 = ymd_hms(HoraFin2) + ddays(1),
         HoraIni = ymd_hms(HoraIni) + ddays(1),
         newIdd = paste0(idd, "_j1"),
         Proposito = NA)
#### bT_j reste à j
bT_j <- tempo_bT %>% 
  mutate(HoraIni = ymd_hms("1899-12-31 04:00:00"),
         newIdd = paste0(idd, "_j"))

#### on assemble les deux 
tempo_bT <- bT_j %>% 
  rbind(., bT_j1) %>% 
  arrange(ID_IND, ymd_hms(HoraIni)) 

#### et on corrige les lieux de présence entre deux déplacements
tempo_bT <- tempo_bT %>% 
  group_by(ID_IND) %>% 
  mutate(O_ZF = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         D_ZF = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_ZF),
                          TRUE ~ D_ZF),
         
         O_SEC = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_SEC),
                           TRUE ~ O_SEC),
         D_SEC = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_SEC),
                           TRUE ~ D_SEC),
         
         O_COG = case_when(newIdd %in% bT_j1$newIdd ~ lag(D_COG),
                           TRUE ~ O_COG),
         D_COG = case_when(newIdd %in% bT_j1$newIdd ~ lag(O_COG),
                           TRUE ~ D_COG))

#### quand le déplacement 1 n'est pas un retour à la maison et que le déplacement 2 
#### à pour destination la zone de résidence, alors motif = retour à la maison
tempo_bT <- tempo_bT %>%
  mutate(Proposito = case_when(newIdd %in% bT_j1$newIdd & 
                                           lag(Proposito)!=7 &
                                           RES_ZF==D_ZF ~ 7,
                                         TRUE ~ Proposito)) %>% 
  ungroup()


#### on ajoute à tempo_b les 2 nouveaux déplacements 
tempo_b <- tempo_b %>% 
  filter(!idd %in% tempo_bT$idd) %>% 
  bind_rows(., tempo_bT) %>% 
  arrange(ID_IND, ymd_hms(HoraIni))


#### on nettoie un peu
tempo_b <- tempo_b %>% 
  select(-ntrip, -chev, -pbZf_idd1, -pbSec_idd1, -pbCog_idd1)
rm(bT_j, bT_j1, ind)


#### CAS DES id_viaje NON CODÉS 1
i <- c(iF, iT)
idd_b2 <- setdiff(b$idd, i)

#### on reconstitue la journée de ces cas
#### on vérifie l'enchainement des lieux de présences en vu du dédoublement des déplacements :
ind_b2 <- tempo_b$ID_IND[tempo_b$idd %in% idd_b2]
tempo_b2 <- tempo_b %>% 
  filter(ID_IND %in% ind_b2) %>% 
  arrange(ID_IND, HoraIni) %>%
  group_by(ID_IND) %>% 
  mutate(ntrip = n(),
         chev = case_when(HoraIni<ymd_hms("1899-12-31 04:00:00") ~ "y"),
         j = case_when(chev=="y" & id_viaje==max(id_viaje) ~ "j+1"),
         lastrip = case_when(HoraIni==max(HoraIni) ~ "y"),
         pbZ_deb = case_when(chev=="y" & D_ZF!=lead(O_ZF) ~ TRUE,
                             chev=="y" & D_ZF==lead(O_ZF) ~ FALSE),
         pbZ_fin = case_when(chev=="y" & O_ZF!=D_ZF[lastrip=="y"] ~ TRUE,
                             chev=="y" & O_ZF==D_ZF[lastrip=="y"] ~ FALSE)) %>% 
  ungroup()

## on dédouble
#### b2_j1 est à bouger à j+1
b2_j1 <- tempo_b2 %>% 
  filter(chev=="y") %>% 
  mutate(HoraFin2 = ymd_hms(HoraFin2) + ddays(1),
         HoraIni = ymd_hms(HoraIni) + ddays(1),
         newIdd = paste0(idd, "_j1"))
#### b2_j reste à j
b2_j <- tempo_b2 %>% 
  filter(chev=="y") %>% 
  mutate(HoraIni = ymd_hms("1899-12-31 04:00:00"),
         newIdd = paste0(idd, "_j"))

#### on assemble les 34 nouveaux déplacements aux autres déplacements de ces individus
#### pour reconstituer leur journée et on corrige les lieux de présence
tempo_b2 <- tempo_b %>% 
  filter(!idd %in% idd_b2) %>% 
  bind_rows(., b2_j1) %>% 
  bind_rows(., b2_j) %>% 
  filter(ID_IND %in% ind_b2) %>% 
  arrange(ID_IND, ymd_hms(HoraIni))


#### on vérifie la cohérence des zones fines
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheZf = case_when(D_ZF == lead(O_ZF) ~ TRUE,
                            D_ZF != lead(O_ZF) ~ FALSE)) %>% 
  ungroup()

bibi <- tempo_b2 %>% 
  select(idd, ID_IND, RES_ZF, id_viaje, HoraIni, HoraFin2, O_ZF, D_ZF, Proposito, newIdd, coheZf)
rm(bibi)

#### on vérifie la cohérence des secteurs
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheS = case_when(D_SEC == lead(O_SEC) ~ TRUE,
                           D_SEC != lead(O_SEC) ~ FALSE),
         coheC = case_when(D_COG == lead(O_COG) ~ TRUE,
                           D_COG != lead(O_COG) ~ FALSE)) %>% 
  ungroup()

length(unique(tempo_b2$newIdd))

#### on intègre les corrections à tempo_b
tempo_b <- tempo_b %>% 
  filter(!idd %in% tempo_b2$idd) %>% 
  bind_rows(., select(tempo_b2, -ntrip, -chev, -j, -lastrip, -pbZ_deb, -pbZ_fin, -coheZf, -coheS, -coheC)) %>% 
  arrange(ID_IND, ymd_hms(HoraIni))

rm(b2_j, b2_j1)

#### on vérifie que les déplacements reportés à j+1 ne se chevauchent pas entre eux
length(unique(tempo_b$newIdd))
tempo_b <- tempo_b %>% 
  group_by(ID_IND) %>% 
  mutate(pb = case_when(HoraIni-lag(HoraFin2)<0 ~ "pb")) %>% 
  ungroup()

#### on supprime partout les deux individus avec des incohérences d'heure
indH <- tempo_b$ID_IND[tempo_b$pb=="pb" & !is.na(tempo_b$pb)]
tempo_b <- tempo_b %>% 
  filter(!ID_IND %in% indH) 
varTemp <- varTemp %>% 
  filter(!ID_IND %in% indH)
depl <- depl %>% 
  filter(!ID_IND %in% indH)

#### on intègre tempo_b à tempo
varTemp <- varTemp %>% 
  filter(!ID_IND %in% tempo_b$ID_IND) %>% 
  bind_rows(., select(tempo_b, -pb))

length(unique(varTemp$newIdd))

rm(tempo_b, tempo_b1, tempo_b2, tempo_bT, tempo_c)
rm(i, idd_b2, iF, ind_b2, indH, iT)


# #### vérif sur varTemp
# varTemp <- varTemp %>%
#   arrange(ID_IND, ymd_hms(HoraIni)) %>%
#   group_by(ID_IND) %>%
#   mutate(pbH = case_when(HoraIni-lag(HoraFin2)<0 ~ "pb"))
# # => 21 incohérences dans les heures issues des données brutes: corrigés en fin de script
# varTemp <- varTemp %>%
#   mutate(pbZ = case_when(D_ZF!=lead(O_ZF) ~ TRUE))
# # 41 incohérences ZAT issues des données brutes
# varTemp <- varTemp %>%
#   mutate(pbS = case_when(D_SEC!=lead(O_SEC) ~ TRUE))
# # 39 incohérences secteurs issues des données brutes
# varTemp <- varTemp %>%
#   mutate(pbC = case_when(D_COG!=lead(O_COG) ~ TRUE))
# # 26 incohérences municipe issues des données brutes



### Créa des variables H_START, H_END ...
varTemp <- varTemp %>% 
  ungroup() %>% 
  mutate(H_START = case_when(HoraIni>=ymd_hms("1900-01-01 00:00:00") ~ as.numeric(hour(HoraIni)+24),
                             HoraIni<ymd_hms("1900-01-01 00:00:00") ~ as.numeric(hour(HoraIni))),
         M_START = as.numeric(minute(HoraIni)),
         H_END = case_when(HoraFin2>=ymd_hms("1900-01-01 00:00:00") ~ as.numeric(hour(HoraFin2)+24),
                           HoraFin2<ymd_hms("1900-01-01 00:00:00") ~ as.numeric(hour(HoraFin2))),
         M_END = as.numeric(minute(HoraFin2)))

### durée 
varTemp <- varTemp %>% 
  mutate(D9 = (HoraFin2-HoraIni)/60)

varTemp <- varTemp %>% 
  mutate(diff3 = D9 - TiempoViaje)

bibi <- varTemp %>% 
  filter(diff3<0)
rm(bibi)

### On ramène ce qui déborde à la fenêtre 4h-4h (déborde uniquement à j+1)
varTemp <- varTemp %>% 
  mutate(M_START = case_when(H_START<4 ~ 0,
                             TRUE ~ M_START),
         H_START = case_when(H_START<4 ~ 4,
                             TRUE ~ H_START),
         
         M_END = case_when(H_END>=28 ~ 0,
                           TRUE ~ M_END),
         H_END = case_when(H_END>28 ~ 28,
                           TRUE ~ H_END))

### On supprime les déplacements avec heure manquante avant créa de NDEP
varTemp <- varTemp %>% 
  filter_at(.vars = c("H_START", "M_START", "H_END", "M_END"), all_vars(!is.na(.))) #removed 276 rows (<1%), 113,315 rows remaining

### arrange and order
varTemp <- varTemp %>% 
  arrange(ID_IND, HoraIni) %>% 
  group_by(ID_IND) %>% 
  mutate(nordre = order(HoraIni)) %>% 
  ungroup()


### NDEP n° d'ordre de déplacement
varTemp <- varTemp %>%
  mutate(NDEP = case_when(nchar(nordre)==1 ~ paste0("0", nordre),
                          TRUE ~ as.character(nordre)))


### 595 déplacements réordonnés par rapport à id_viaje
tempoDiff <- varTemp %>% 
  mutate(diff = nordre - as.integer(id_viaje)) %>% 
  filter(diff!=0)

rm(tempoDiff)


### JOINDRE TEMPO A LA TABLE DEPLACEMENT

### clé
k <- varTemp %>% 
  mutate(newIdd = case_when(str_detect(newIdd, "_c") ~ NA_character_,
                            TRUE ~ newIdd))

k <- k %>% 
  select(idd, newIdd) %>% 
  filter(!is.na(newIdd))
length(unique(k$idd))

varTemp <- varTemp %>% 
  mutate(newIdd = case_when(!is.na(newIdd) ~ newIdd,
                            TRUE ~ idd))

### joindre les résultats à la table déplacement
### dédoubler les déplacements qui chevauchent 4h (b)
### et création des nouveaux identifiants de déplacement
depl <- depl %>% 
  filter_at(.vars = c("HoraIni", "HoraFin"), all_vars(!is.na(.))) %>% #removed 276 rows (<1%), 113,311 rows remaining
  mutate(id_viaje = as.numeric(as.character(substr(Viaje, 9, 10)))) %>%
  mutate(idd = paste0(ID_IND, "_", id_viaje),
         newIdd = case_when(idd %in% c$idd ~ paste0(idd, "_c"),
                            TRUE ~ idd))

depl1 <- depl %>% 
  filter(idd %in% k$idd) %>% 
  mutate(newIdd = paste0(idd, "_j1"))
depl2 <- depl %>% 
  filter(idd %in% k$idd) %>% 
  mutate(newIdd = paste0(idd, "_j"))


### création de la nouvelle table déplacement 
depl <- depl %>% 
  filter(!idd %in% k$idd) %>% 
  rbind(., depl1) %>% 
  rbind(., depl2) %>% 
  select(-Proposito, -O_ZF, -D_ZF, -O_SEC, -D_SEC, -O_COG, -D_COG)

rm(depl1, depl2)


depl <- depl %>% 
  left_join(., select(varTemp, newIdd, NDEP, H_START, M_START, H_END, M_END, D9,
                      Proposito, O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG),
            by = "newIdd") %>% 
  arrange(ID_IND, NDEP)

setdiff(varTemp$ID_IND, depl$ID_IND)


### on renomme les id de déplacements
depl <- depl %>% 
  select(-idd) %>% 
  rename(idd = newIdd)




##~~ Motif de déplacement ----  

### motif de destination D_PURPOSE
#### charger la table de correspondance
motif <- read.csv2("txt/corresp_MOTIF.csv",  
                   encoding = "UTF-8", 
                   colClasses = c("character", "numeric", "character"))

#### joindre 
depl <- depl %>% 
  left_join(., select(motif, ENQUETE, Proposito = D2_D5, D_PURPOSE = PURPOSE)) 

rm(motif)


### motif à l'origine O_PURPOSE
purpose <- depl %>% 
  select(ID_IND, RES_ZF, NDEP, H_START, M_START, H_END, M_END, O_ZF, D_ZF, D_PURPOSE) %>% 
  arrange(ID_IND, NDEP) %>% 
  mutate(id_depl = paste0(ID_IND, "_", NDEP)) %>% 
  relocate(id_depl)

### si ce n'est pas le premier déplacement de la journée :
### O_PURPOSE = D_PURPOSE du déplacement précédent 
purpose <- purpose %>% 
  arrange(id_depl) %>% 
  group_by(ID_IND) %>% 
  mutate(O_PURPOSE = case_when(NDEP=="01" ~ NA_character_,
                               NDEP!="01" ~ lag(D_PURPOSE))) %>% 
  ungroup() %>% 
  relocate(D_PURPOSE, .after = last_col())

# 13101_001_266683_01

#### cas des premiers déplacements 
purpose1 <- purpose %>% 
  group_by(ID_IND) %>% 
  mutate(trip = case_when(min(as.numeric(NDEP)) == max(as.numeric(NDEP)) ~ "oneTrip",
                          NDEP == "01" ~ "firsTrip",
                          as.numeric(NDEP) == max(as.numeric(NDEP)) ~ "lasTrip")) %>% 
  ungroup() %>% 
  filter(!is.na(trip))

# Si plusieurs déplacements et 
# si last trip = retour au domicile et zf de résidence = zf à l'origine du 1er déplacement, alors on boucle
# si last trip = retour au domicile et zf de résidence != zf à l'origine du 1er déplacement, alors le 1er motif est autre (06)
# si last trip = autre que domicile, alors on boucle

# Si un seul déplacement et
# si D_PURPOSE = maison, alors O_PURPOSE = 06
# si D_PURPOSE = autre que domicile et zf de résidence = zf à l'origine du déplacement, alors O_PURPOSE = 01
# si D_PURPOSE = autre que domicile et zf de résidence != zf à l'origine du déplacement, alors O_PURPOSE = 06
purpose1 <- purpose1 %>% 
  group_by(ID_IND) %>% 
  mutate(sameZF = case_when(NDEP == "01" & is.na(O_PURPOSE) & RES_ZF == O_ZF ~ "oui",
                            NDEP == "01" & is.na(O_PURPOSE) & RES_ZF != O_ZF ~ "non"),
         lasTripMotif = case_when(trip == "lasTrip" & D_PURPOSE == "01" ~ "domicile",
                                  trip == "lasTrip" & D_PURPOSE != "01" ~ "autre")) %>% 
  ungroup()

#### Sélection des cas à coder 
ind <- purpose1$ID_IND[!is.na(purpose1$sameZF)]
ind_recode <- purpose1 %>% 
  filter(ID_IND %in% ind) %>% 
  group_by(ID_IND) %>% 
  mutate(O_PURPOSE = case_when(trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZF=="oui" & D_PURPOSE != "01" ~ lead(D_PURPOSE),
                               trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZF=="oui" & D_PURPOSE == "01" ~ "06",
                               trip=="firsTrip" & lead(lasTripMotif)=="domicile" & sameZF=="non" ~ "06",
                               trip=="firsTrip" & lead(lasTripMotif)=="autre"~ lead(D_PURPOSE),
                               
                               trip=="oneTrip" & D_PURPOSE=="01" ~ "06",
                               trip=="oneTrip" & D_PURPOSE!="01" & sameZF=="oui" ~ "01",
                               trip=="oneTrip" & D_PURPOSE!="01" & sameZF=="non" ~ "06",
                               
                               TRUE ~ O_PURPOSE)) %>% 
  ungroup()

# check : les déplacements avec retour au domicile comme motif de départ et d'arrivée 
# sont déjà présents dans la table source
bibi <- ind_recode %>% 
  filter(O_PURPOSE==D_PURPOSE)
ind_bibi <- bibi$ID_IND[bibi$O_PURPOSE=="01"]
s <- depl %>% 
  filter(ID_IND %in% ind_bibi) %>% 
  arrange(ID_IND, NDEP)
rm(bibi, s, ind_bibi)


#### joindre les résultats du recodage à la table purpose
ind_recode <- ind_recode %>% 
  filter(NDEP=="01")
ind_viaje <- ind_recode$id_depl

purpose <- purpose %>% 
  filter(!id_depl %in% ind_viaje) %>% 
  rbind(., select(ind_recode, -trip, -sameZF, -lasTripMotif)) %>% 
  arrange(id_depl)


rm(ind_recode, purpose1, ind, ind_viaje)


# joindre les deux nouvelles variables PURPOSE à la table depl
depl <- depl %>% 
  mutate(id_depl = paste0(ID_IND, "_", NDEP)) %>% 
  left_join(., select(purpose, id_depl, O_PURPOSE, D_PURPOSE)) %>% 
  select(-id_depl) %>% 
  relocate(D_PURPOSE, .after = last_col())

sum(is.na(depl$O_PURPOSE)==TRUE)
sum(is.na(depl$D_PURPOSE)==TRUE)
rm(purpose)

### effectif brut par motif
f <- data.frame(table(depl$D_PURPOSE))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))
rm(f)



#~~ Correction ----

## check origine purpose des heures déplacées => pas de pb
purpose <- depl %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE)


purpose0 <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(report=="yes" & O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE),
         pball = case_when( O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                           TRUE ~ FALSE)) %>% 
  ungroup()

ind2recode <- purpose0$ID_IND[purpose0$pb==TRUE|purpose0$pball==TRUE]

rm(purpose0, ind2recode)

### check zf et secteur de présence des déplacements réordonnés
df <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>%
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb_zf = case_when(O_ZF != lag(D_ZF) ~ TRUE,
                           TRUE ~ FALSE),
         pb_sec = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                            TRUE ~ FALSE)) %>% 
  ungroup()

ind2recode <- df$ID_IND[df$pb_zf==TRUE|df$pb_sec==TRUE]
df2recode <- df %>% 
  filter(ID_IND %in% ind2recode) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(n = n()) %>% 
  ungroup() %>% 
  filter(n>1)

### correction 
df2recode <- df2recode %>% 
  mutate(O_ZF = case_when(pb_zf==TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pb_sec==TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC))


### joindre les corrections à purpose
purpose <- purpose %>% 
  filter(!ID_IND %in% df2recode$ID_IND) %>% 
  rbind(., select(df2recode, -report, -pb_zf, -pb_sec, -n)) %>% 
  arrange(ID_IND, NDEP)


### joindre à la table déplacement
depl <- depl %>% 
  select(-O_PURPOSE, -D_PURPOSE, -O_ZF, -D_ZF, -O_SEC, -D_SEC) %>% 
  left_join(., select(purpose, idd, O_ZF, D_ZF, O_SEC, D_SEC, O_PURPOSE, D_PURPOSE))

f <- data.frame(table(depl$D_PURPOSE))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f, df2recode, ind2recode, purpose, df)

### last check
#### check secteur de présence
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 19 déplacements avec incohérence dans les secteurs de présence 
# aucun de ces déplacements n'a été réordonnés = incohérence de la table source

#### check motif
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(idd %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(idd, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 0 déplacement avec incohérence dans les motifs de présence 

rm(bibi)


### TO DO check O_ZF et D_ZF codés 000 ou 999 
sort(unique(depl$RES_ZF))
sort(unique(depl$O_ZF))
sort(unique(depl$D_ZF))



##~~ Mode de transport ----  

### comment les modes sont classés  en privé, public etc. dans la table déplacement ?
sort(unique(depl$ModoAgregado))
unique(depl$ModoAgregado[depl$ModoPriPub==1]) #privé
unique(depl$ModoAgregado[depl$ModoPriPub==2]) #public
unique(depl$ModoAgregado[depl$ModoPriPub==3]) #otro
unique(depl$ModoAgregado[depl$ModoPriPub==4]) #mixte
unique(depl$ModoAgregado[depl$ModoPriPub==5]) #non motorisé

### effectif par mode
f <- data.frame(table(depl$ModoAgregado))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

### des déplacements absents de la table étapes et de la table déplacements
length(unique(depl$Viaje))
length(unique(etape$Viaje))
setdiff(depl$Viaje, etape$Viaje)
setdiff(etape$Viaje, depl$Viaje)


### à partir de la table étapes, construire le mode principal utilisé pour le déplacement
### On compte le nb de mode utilisé par déplacement et on liste les différents modes
modeT <- etape %>% 
  arrange(Etapa) %>% 
  group_by(Viaje) %>% 
  arrange(Modo) %>% 
  mutate(nbModo = length(unique(Modo)),
         suiteModo = paste0(Modo, collapse = "_")) %>% 
  ungroup()

### effectif par suite de modes
f <- data.frame(table(modeT$suiteModo[modeT$nbModo>1]))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))


### Table intermédiaire
modeT <- modeT %>% 
  filter(!duplicated(Viaje)) %>% 
  select(Viaje, nbModo, suiteModo)

length(unique(etape$Modo))

### mode de transport unique
uniMode <- modeT %>% 
  filter(nbModo==1)

#### load table de correspondance
mode <- read.csv2("txt/corresp_MODE.csv",
                  encoding = "UTF-8", colClasses = c("character"))

#### joindre 
uniMode <- uniMode %>% 
  mutate(ENQUETE="SANTIAGO") %>% 
  left_join(., select(mode, ENQUETE, suiteModo = MODP, MODE)) %>% 
  select(-ENQUETE)

### cas des suites avec les mêmes types de modes
# privé = 1, 7, 10, 17, 18
# doux = 8, 9
# collectif = le reste

uniModeR <- uniMode %>% 
  filter(is.na(MODE))%>% 
  mutate(suiteModo2 = paste0("_", suiteModo, "_"),
         prive = str_detect(suiteModo2,  "_1_|_7_|_10_|_17_|_18_"),
         doux = str_detect(suiteModo2, "_8_|_9_"),
         coll = case_when(prive==FALSE & doux==FALSE ~ TRUE,
                          TRUE ~ FALSE))

uniModeR <- uniModeR %>% 
  mutate(MODE = case_when(prive==TRUE ~ "02",
                          doux==TRUE ~ "03",
                          coll==TRUE ~ "01"))

#### jointure
uniMode <- uniMode %>% 
  filter(!Viaje%in%uniModeR$Viaje) %>% 
  rbind(., select(uniModeR, Viaje, nbModo, suiteModo, MODE))


### cas des multimodaux
multiMode <- modeT %>% 
  filter(nbModo>1)


multiMode <- multiMode %>% 
  mutate(suiteModo2 = paste0("_", suiteModo, "_"),
         coll = str_detect(suiteModo2, "_2_|_3_|_4_|_5_|_6_|_11_|_12_|_13_|_14_|_15_|_16_"),
         prive = str_detect(suiteModo2,  "_1_|_7_|_10_|_17_|_18_"),
         doux = case_when(prive==FALSE & coll==FALSE ~ TRUE,
                          TRUE ~ FALSE))

## priorité aux transports collectifs puis aux véhicules perso puis aux modes doux
multiMode <- multiMode %>% 
  mutate(MODE = case_when(coll==TRUE ~ "01",
                          coll==FALSE & prive==TRUE ~ "02"))
  

#### jointure finale
allMode <- uniMode %>% 
  rbind(., select(multiMode, Viaje, nbModo, suiteModo, MODE))

rm(mode, uniMode, uniModeR, multiMode, modeT, f)

depl <- depl %>% 
  left_join(., select(allMode, Viaje, MODE))

rm(allMode)

## il y a 1 déplacement sans MODE 
sum(is.na(depl$MODE)==TRUE)

### effectif brut par motif
f <- data.frame(table(depl$MODE))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))
rm(f)


### Mode adhérent
### si MODE = 03 alors mode adhérent (1), sinon non adhérent (0)
depl <- depl %>% 
  mutate(MODE_ADH = case_when(MODE=="03" ~ 1,
                              MODE %in% c("01", "02") ~ 0))



##~~ Mise en forme ----

### Ne garder que les déplacements en semaine
depl_santiago <- depl %>% 
  filter(!is.na(FactorLaboralNormal))

depl_santiago <- depl_santiago %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, NDEP, 
            RES_ZF, RES_COG, RES_SEC, 
            O_ZF, O_COG, O_SEC, 
            D_ZF, D_COG, D_SEC, 
            H_START, M_START, H_END, M_END, D9 = as.numeric(D9), 
            D2 = NA_character_, O_PURPOSE, 
            D5 = as.character(Proposito), D_PURPOSE, 
            MODP = NA_character_, MODE, MODE_ADH, 
            ZONAGE_SEC = NA) %>% 
  arrange(ID_IND, NDEP)



#~ Nouvelle table personne ----

##~~ Identifiants ----

### identifiants uniques des répondants :
### codeVilleCentre_Zona_Hogar_Persona
### corriger longueur des variables

# ZF de résidence - table ménage
pers <- pers %>% 
  left_join(., select(men, Hogar, Zona))

### longueur de ZF
min(nchar(pers$Zona))
max(nchar(pers$Zona))
length(unique(pers$Zona))

pers <- pers %>% 
  mutate(RES_ZF = case_when(nchar(Zona)==1 ~ paste0("00", as.character(Zona)),
                            nchar(Zona)==2 ~ paste0("0", as.character(Zona)),
                            nchar(Zona)==3 ~ as.character(Zona)))

### ID
max(nchar(pers$Hogar))
min(nchar(pers$Hogar))
max(nchar(pers$Persona))

length(unique(men$Hogar))

pers <- pers %>% 
  mutate(ID_IND = paste0("13101_", RES_ZF, "_", as.character(Hogar), "_", as.character(substr(Persona, 7, 8))),
         ID_ED = "13101_2012",
         LIB_ED = "Santiago, 2012",
         ENQUETE = "SANTIAGO") 

min(nchar(pers$ID_IND))
max(nchar(pers$ID_IND))


##~~ Variables spatiales ----

### Comuna
#### joindre les codes comuna de résidence à la table personne
pers <- pers %>% 
  left_join(., select(men, Hogar, RES_COG = Id))

length(unique(pers$RES_COG))

### RES_SEC
pers <- pers %>% 
  left_join(., select(zfsec, RES_ZF = CODE_ZONA, RES_SEC = CODE_SEC), by = "RES_ZF")

### zonage
z <- read_excel("txt/corresp_Comuna_Anillo_STG.xlsx")

### joindre codage com/nom com/zonage
require(stringi)
z <- z %>% 
  mutate(Comuna = stri_trans_general(Comuna, "latin-ascii"))
com <- com %>% 
  mutate(Comuna = stri_trans_general(Comuna, "latin-ascii"))

z <- z %>% 
  left_join(., com, by="Comuna")

z <- z %>% 
  mutate(ZONAGE_SEC = case_when(ANILLO == "Centre" ~ 4,
                                ANILLO == "Péricentre" ~ 3,
                                ANILLO == "Périphérie proche" ~ 2,
                                ANILLO == "Périphérie lointaine" ~ 1))

pers <- pers %>% 
  left_join(., select(z, RES_COG = Id, ZONAGE_SEC))

rm(z)



##~~ Variables socio-démo ----

### âge à calculer à partir de l'année de naissance et de la date de l'enquête
pers <- pers %>% 
  left_join(., select(men, Hogar, Fecha)) %>% 
  mutate(AGE = year(Fecha)-AnoNac,
         SEX= as.character(Sexo),
         KAGE = case_when(AGE >= 16 & AGE <= 24 ~ "1",
                          AGE >= 25 & AGE <= 34 ~ "2",
                          AGE >= 35 & AGE <= 64 ~ "3",
                          AGE >= 65 ~ "4",
                          TRUE ~ "0"),
         KAGE2 = case_when(AGE >= 16 & AGE <= 25 ~ "1",
                           AGE >= 26 & AGE <= 40 ~ "2",
                           AGE >= 41 & AGE <= 60 ~ "3",
                           AGE >= 61 ~ "4",
                           TRUE ~ "0"),
         W_IND = Factor_LaboralNormal) 

f <- data.frame(table(pers$KAGE2))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f)

### EDUC 
sort(unique(pers$Estudios))
sort(unique(pers$Curso))
p <- pers %>% 
  filter(AGE>15) %>% 
  mutate(EDUC = case_when(Estudios %in% c(1, 2, 3, 4) ~ "1",
                          Estudios %in% c(5, 6, 7) & Curso < 4 ~ "1",
                          Estudios %in% c(5, 6, 7) & Curso >= 4 ~ "2",
                          Estudios %in% c(8, 9, 10) ~ "3",
                          Estudios == 11 & Curso <= 4 ~ "3",
                          Estudios == 11 & Curso > 4 ~ "4",
                          Estudios %in% c(98, 99) ~ "1"))

bibi <- p %>% 
  select(ID_IND, SEX, AGE, Estudios, Curso, EDUC)

f <- data.frame(table(bibi$EDUC, useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f)



### Occupation principale
### Contre intuitif: Actividad => occupations et Ocupation = type d'emploi
sort(unique(pers$Actividad[is.na(pers$Ocupacion)]))
sort(unique(pers$Actividad[!is.na(pers$Ocupacion)]))
sort(unique(pers$Actividad))
### A = actifs
### personnes avec plusieurs occupations dont le travail : croiser avec JoranadaTrabajo
modA <- c("A;B", "A;B;C", "A;B;C;D", "A;B;D", "A;B;G", "A;C", "A;C;D", "A;D", "A;E")
persA <- p %>% 
  filter(Actividad %in% modA)
table(persA$Actividad, persA$JornadaTrabajo)

### si temps plein ou temps partiel => actifs
### Si week-end uniquement ou occasionnel :
#### si AB, ABD, ABG, AD ou AE => 2eme lettre
#### si ABC, ABCD, ACD et si f60+ ou h65+ => C 
#### si ABC ou ABCD et si f-60 ou h-65 => B
#### si ACD et si f-60 ou h-65 => D
p <- p %>% 
  mutate(P9 = case_when(Actividad %in% c("A", "A;G") ~ "A",
                        Actividad %in% modA & JornadaTrabajo %in% c(1, 2) ~ "A",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad %in% c("A;B", "A;B;D", "A;B;G", "A;D", "A;E", "A;C") 
                        ~ substr(Actividad,3,3),
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad %in% c("A;B;C", "A;B;C;D", "A;C;D") &
                          SEX == "1" & AGE >= 65 
                        ~ "C",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad %in% c("A;B;C", "A;B;C;D", "A;C;D") &
                          SEX == "2" & AGE >= 60 
                        ~ "C",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad %in% c("A;B;C", "A;B;C;D") &
                          SEX == "1" & AGE < 65 
                        ~ "B",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad %in% c("A;B;C", "A;B;C;D") &
                          SEX == "2" & AGE < 60 
                        ~ "B",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad == "A;C;D" &
                          SEX == "1" & AGE < 65 
                        ~ "D",
                        
                        JornadaTrabajo %in% c(3, 4) & 
                          Actividad == "A;C;D" &
                          SEX == "2" & AGE < 60 
                        ~ "D",
                        
                        ))

rm(modA, persA)

### B = étudiants
modB <- c("B;C", "B;C;D", "B;C;D;G", "B;D", "B;E", "B;F")      
persB <- p %>% 
  filter(Actividad %in% modB)

### BC ont 16 et 25 ans => étudiants
### BCD et BCDG sont des femmes de plus de 60 ans => retraités
### BE = 1 trentenaire universitaire => étudiants
### BD = des femmes de 18 à 61 ... étudiantes
### BF ... 
p <- p %>% 
  mutate(P9 = case_when(Actividad %in% c("B", "B;C", "B;E", "B;D", "B;D;F", "B;G", "B;F") ~ "B",
                        Actividad %in% c("B;C;D", "B;C;D;G") ~ "C",
                        TRUE ~ P9))

rm(modB, persB)

### C = retraités
persCD <- p %>% 
  filter(Actividad=="C;D")
persCF <- p %>% 
  filter(Actividad=="C;F")
### CD une écrasante majorité de femmes de 30 à 97 ans
### CF 3 personnes
### Si femme de 60ans + ou homme de 65ans+ => retraités sinon "au foyer"
rm(persCD, persCF)

p <- p %>% 
  mutate(P9 = case_when(Actividad %in% c("C", "C;G") ~ "C",
                        Actividad %in% c("C;D", "C;F") & SEX == "1" & AGE>=65 ~ "C",
                        Actividad %in% c("C;D", "C;F") & SEX == "2" & AGE>=60 ~ "C",
                        Actividad %in% c("C;D", "C;F") & SEX == "1" & AGE<65 ~ substr(Actividad,3,3),
                        Actividad %in% c("C;D", "C;F") & SEX == "2" & AGE<60 ~ substr(Actividad,3,3),
                        TRUE ~ P9))

### D = Inactifs (au foyer)
### E = sans emploi (en recherche d'emploi pour la 1ere fois)
### F = sans emploi (chômage)
### G = Inactifs (autre)
p <- p %>% 
  mutate(P9 = case_when(Actividad %in% c("D", "D;G") ~ "D",
                        Actividad %in% c("D;E", "E") ~ "E",
                        Actividad %in% c("D;F", "F", "F;G") ~ "F",
                        Actividad == "G" ~ "G",
                        TRUE ~ P9))

### check
bibi <- p %>% 
  filter(is.na(P9))
rm(bibi)


### OCC
p <- p %>% 
  mutate(OCC = case_when(P9 == "A" ~ "1",
                         P9 == "B" ~ "2",
                         P9 == "C" ~ "4",
                         P9 %in% c("D", "G") ~ "5",
                         P9 %in% c("E", "F") ~ "3"))

pers <- pers %>% 
  left_join(., select(p, ID_IND, EDUC, P9, OCC))

rm(p)




##~~ Revenu ---- 

### Est-ce que le revenu de la table ménage est la somme des revenus des personnes ?
pers <- pers %>% 
  left_join(., select(men, Hogar, IngresoHogar)) %>% 
  group_by(Hogar) %>% 
  mutate(TOT_IngresoFinal = sum(IngresoFinal, na.rm = TRUE),
         diff = TOT_IngresoFinal - IngresoHogar) %>% 
  ungroup()

###~~~ revenu par UC (def INSEE) ----
### avec IngresoHogar

#### Nb d'adultes et d'enfants de - de 14 ans dans le ménage (avec et sans le 1er adulte)

men_temp <- pers %>%
  select(ID_IND, Hogar, Persona, AGE) %>%
  group_by(Hogar) %>%
  summarise(nbpers=length(unique(ID_IND)),
            nbad = sum(AGE >= 18, na.rm=TRUE),
            nbadMoinsUn = sum(AGE >= 14, na.rm=TRUE) - 1,
            nbmoins14 = sum(AGE<14, na.rm=TRUE))

## check
men_temp <- men_temp %>% 
  mutate(tot = nbadMoinsUn + nbmoins14 +1,
         diff = tot - nbpers)


#### On travaille sur une table intermédiaire
pers_rev <- pers %>%
  select(ID_IND, Hogar, Persona, AGE, IngresoHogar) %>%
  left_join(., men_temp) %>%
  arrange(ID_IND)

rm(men_temp)

require(skimr)
skim(pers_rev$IngresoHogar)


# Les unités de consommation sont généralement calculées
# selon l'échelle d'équivalence dite de l'OCDE modifiée
# qui attribue 1 uc au premier adulte du ménage,
# 0,5 uc aux autres personnes de 14 ans ou plus
# et 0,3 uc aux enfants de moins de 14 ans.

pers_rev <- pers_rev %>% 
  mutate(REV_UC = IngresoHogar/(1 + nbadMoinsUn*0.5 + nbmoins14*0.3))

skim(pers_rev$REV_UC)

### Visu
options(scipen = 9999)
ggplot(pers_rev, aes(x=REV_UC)) +
  geom_histogram(binwidth=200000, color="white") +
  scale_y_log10() +
  labs(title = "Santiago - Distribution du revenu du ménage par UC", x = "REV_UC (pas de 200 000)", y = "Nombre d'enquêtés, tout âge (log10)")

ggplot(pers_rev %>% filter(AGE>15), aes(x=REV_UC)) +
  geom_histogram(binwidth=200000, color="white") +
  scale_y_log10() +
  labs(title = "Santiago - Distribution du revenu du ménage par UC", 
       x = "REV_UC (pas de 200 000)", 
       y = "Nombre d'enquêtés de 16 ans et plus (log10)")



### A quel revenu correspond les modalités de TramoIngresoFinal ? (pas d'info dans la doc source) 
pers_rev <- pers_rev %>% 
  left_join(., select(pers, ID_IND, IngresoFinal, TramoIngresoFinal)) %>% 
  group_by(TramoIngresoFinal) %>% 
  mutate(minMax_TIF = paste0(min(IngresoFinal), " - ", max(IngresoFinal))) %>% 
  ungroup()

sort(unique(pers_rev$minMax_TIF))



### REV_UC à discrétiser
#### On teste le regroupement de TramoIngreso, soit :
# 1	Menos de 200.000 pesos
# 2	Entre 200.001 y 400.000 pesos
# 3	Entre 400.001 y 800.000 pesos
# 4	Entre 800.001 y 1.600.000 pesos
# 5	Entre 1.600.001 y 2.400.000 pesos
# 6	Más de 2.400.000 pesos
# 7	No contesta

pers_rev <- pers_rev %>%
  mutate(REV = case_when(REV_UC==0 ~ "0", # 42 individus
                         REV_UC>0 & REV_UC<=200000 ~ "1",
                         REV_UC>200000 & REV_UC<=400000 ~ "2",
                         REV_UC>400000 & REV_UC<=800000 ~ "3",
                         REV_UC>800000 & REV_UC<=1600000 ~ "4",
                         REV_UC>1600000 & REV_UC<=2400000 ~ "5",
                         REV_UC>2400000 ~ "6"))

f <- data.frame(table(pers_rev$REV[pers_rev$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f)


### selon salaire min 2012, soit 187500, en 5 classes ~ équilibrées
pers_rev <- pers_rev %>%
  mutate(REV = case_when(REV_UC < 187500 ~ "1", # moins de 1 smic
                         REV_UC >= 187500 & REV_UC < 281250 ~ "2", # entre 1 et 1.5 smic
                         REV_UC >= 281250 & REV_UC < 375000 ~ "3", # entre 1.5 et 2 smic
                         REV_UC >= 375000 & REV_UC < 562500 ~ "4", # entre 2 et 3 smic
                         REV_UC >= 562500 ~ "5")) # plus de 3 smic

f <- data.frame(table(pers_rev$REV[pers_rev$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))


### joindre 
pers <- pers %>% 
  left_join(., select(pers_rev, ID_IND, REV_UC, REV))

rm(pers_rev, f)



##~~ cso ---- 
actifs <- pers %>% 
  select(ID_IND, W_IND, AGE,
         Actividad, ActividadEmpresa, Ocupacion, JornadaTrabajo, Estudios,
         EDUC, P9, OCC)

### interlude
actifs1 <- actifs %>% 
  filter(!is.na(Ocupacion))
actifs2 <- actifs %>% 
  filter(OCC=="1")
setdiff(actifs1$ID_IND, actifs2$ID_IND)
rm(actifs1, actifs2)

### on sélectionne les actifs occupés selon OCC
actifs <- actifs %>% 
  filter(OCC=="1")

### codage du CSO
## 1 : travailleur non qualifié
## 2 : travailleur qualifié
## 3 : indépendant
## 4 : profesionales
actifs <- actifs %>% 
  mutate(CSO = case_when(Ocupacion=="1" ~ "3",
                         Ocupacion=="2" & ActividadEmpresa=="6" ~ "3",
                         Ocupacion=="2" & ActividadEmpresa!="6" & EDUC!="4" ~ "3",
                         Ocupacion=="2" & ActividadEmpresa!="6" & EDUC=="4" ~ "4",
                         Ocupacion %in% c("3", "4", "5") & EDUC=="1" ~ "1",
                         Ocupacion %in% c("3", "4", "5") & EDUC %in% c("2", "3") ~ "2",
                         Ocupacion %in% c("3", "4", "5") & EDUC=="4" ~ "4",
                         Ocupacion %in% c("6", "7", "8") ~ "1",
                         Ocupacion=="9" ~ "2"))

table(actifs$CSO, useNA = "always")

sumPop <- actifs %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

### joindre
pers <- pers %>% 
  left_join(., select(actifs, ID_IND, CSO))

rm(actifs, sumPop)


##~~ statut d'occupation dans le logement ----

## statut d'occupation relativement à la position de la personne au chef de ménage
## 3. proprio = ménage proprio + chef ou conjoint ou enfant
## 2. locataire = ménage locataire + chef ou conjoint ou enfant 
## 1. hébergé et autres = autre ménage ou proprio/locataire non chef/conjoint/enfant

pers <- pers %>% 
  left_join(., select(men, Hogar, propia = Propiedad)) %>% 
  mutate(propia = as.character(propia))

### charger la table de correspondance
log <- read.csv2("txt/corresp_OCCLOG.csv",
                 encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  left_join(., log)

table(pers$OCC_LOG, useNA = "always")

rm(log)

## Création de LOG par croisement de variables
pers <- pers %>% 
  mutate(LOG = case_when(OCC_LOG == "1" & Relacion %in% c("1", "2") ~ "3",
                         OCC_LOG == "1" & Relacion == "3" & AGE < 25 ~ "3",
                         OCC_LOG == "2" & Relacion %in% c("1", "2") ~ "2",
                         OCC_LOG == "2" & Relacion == "3" & AGE < 25 ~ "2",
                         TRUE ~ "1"))

table(pers$LOG, useNA = "always")

#♦ check
p <- pers %>% 
  select(ID_IND, W_IND, AGE, propia, OCC_LOG, Relacion, LOG)

f <- data.frame(table(p$LOG[p$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

f2 <- p %>% 
  filter(AGE>15) %>% 
  group_by(LOG) %>% 
  summarize(pond = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(pondP = round(pond * 100 / sum(pond), 1))


##~~ structure du ménage ----

## Catégories :
## 5: extenso o compuesto con menores : ménage composé d'un ou plusieurs adultes avec mineur(s) :
## comprend les familles élargies, et éventuellement les membres n'ont pas tous un lien 
## de parenté avec le chef de ménage 
## 4: nuclear con menores : ménage composé d'une famille nucléaire avec enfant(s) :
## un ou deux parents avec enfant(s) de moins de 16 ans
## 3: extenso o compusto con adultos : ménage composé uniquement d'adultes : famille élargie ou
## sans liens familiaux
## 2: nuclear adultos : ménage composé uniquement d'adultes avec un lien de parenté direct :
## couple ; couple avec enfant(s) majeur(s) ; ou un parent avec enfant(s) majeur(s)
## 1: unipersonal : ménage d'une seule personne


## ! ici, majorité à 16 ans


## comptage du nombre de personne dans le ménage
men_temp <- pers %>%
  select(Hogar, Persona, AGE, Relacion) %>%
  filter(Relacion != 7) %>% ## exclusion des domestiques
  group_by(Hogar) %>%
  summarise(nbpers = length(unique(Persona)),
            nbad = sum(AGE >= 16, na.rm = TRUE),
            nbmin = sum(AGE <16, na.rm = TRUE)) %>% 
  ungroup()


## joindre le comptage à la table personne (table intermédiaire)
## et on simplifie les relations au chef du ménage
p <- pers %>% 
  left_join(., men_temp) %>% 
  select(ID_IND, AGE, Relacion, Hogar, nbpers, nbad, nbmin) %>% 
  mutate(p3 = case_when(Relacion %in% c(5, 6) ~ "6", # non parenté / pensionnaire
                        Relacion == 7 ~ "5",         # domestiques
                        TRUE ~ as.character(Relacion)))


## stockage de toutes les compositions (relation au chef de famille)
p <- p %>% 
  arrange(Hogar, as.numeric(p3)) %>% 
  group_by(Hogar) %>% 
  mutate(suite_p3 = list(unique(p3))) %>% 
  ungroup()

length(unique(p$suite_p3))

## on identifie les familles nucléaires
p <- p %>% 
  mutate(nuclear = case_when(as.character(suite_p3) == 'c("1", "2")' ~ "couple",
                             as.character(suite_p3) == 'c("1", "3")' ~ "monoparental",
                             as.character(suite_p3) == 'c("1", "2", "3")' ~ "couple avec enfant"))


## Création de l'indicateur STRM (structure du ménage)
p <- p %>% 
  mutate(STRM = case_when(
    
    nbpers == 1 ~ "1. unipersonal",
    
    nuclear %in% c("couple avec enfant", "monoparental") & nbmin > 0 ~ "4. nuclear con menores",
    
    nuclear %in% c("couple", "couple avec enfant", "monoparental") & nbmin == 0 ~ "2. nuclear adultos",
    
    nbpers == nbad ~ "3. extenso o compuesto adultos",
    
    TRUE ~ "5. extenso o compuesto con menores"
    
  ))


## on repasse au niveau des ménages pour vérification
m <- p %>% 
  filter(!duplicated(Hogar))

f <- data.frame(table(m$STRM, useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))


unique(m$suite_p3[m$STRM=="2. nuclear adultos"]) 
unique(m$suite_p3[m$STRM=="4. nuclear con menores"])
unique(m$suite_p3[m$STRM=="5. extenso o compuesto con menores"])
unique(m$suite_p3[m$STRM=="1. unipersonal"])
unique(m$suite_p3[m$STRM=="3. extenso o compuesto adultos"])

## on recode par des chiffres les modalités
m <- m %>% 
  rename(STRUCTURE = STRM) %>% 
  mutate(STRM = substr(STRUCTURE, 1, 1)) %>% 
  select(Hogar, STRUCTURE, STRM)

rm(p)

## enfin jointure à la table personne (pas de STRM pour les domestiques)
pers <- pers %>% 
  left_join(., m) %>% 
  mutate(STRM = case_when(Relacion == 7 ~ NA_character_,
                          TRUE ~ STRM))

## check 
p <- pers %>% 
  select(ID_IND, Relacion, AGE, SEX, STRM, STRUCTURE)

f <- data.frame(table(p$STRM[p$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

rm(p, men_temp, m)



##~~ Mise en forme ---- 

### on filtre les enfants de 5 ans et moins
pers_santiago <- pers %>% 
  filter(AGE>4)



## INTERLUDE
### individus avec un factor laboral normal dans la table personne
ind_fln <- unique(pers_santiago$ID_IND[!is.na(pers_santiago$W_IND)])
### individus avec factor laboral normal dans la table déplacement 
ind_depl <- unique(depl_santiago$ID_IND)
length(unique(depl_santiago$ID_IND))

### comparaison des deux
#### individus absent de la table personne 
setdiff(ind_depl, ind_fln)
#### individus absent de la table déplacement
setdiff(ind_fln, ind_depl)

### table personne - individus avec au moins un déplacement en labor normal
pers_santiago <- pers_santiago %>% 
  mutate(mobility = case_when(ID_IND %in% depl_santiago$ID_IND ~ "mobile"))
### qui sont ceux absent de la table depl_santiago ?
abs <- pers_santiago %>% filter(is.na(mobility))
### parmis eux, qui a 0 viaje ?
v0 <- abs %>% filter(Viajes==0)

rm(abs, v0, ind_depl, ind_fln)
##



### sélection personne semaine
### table personne - individus avec au moins un déplacement en labor normal + individus restés à la maison
pers_santiago <- pers_santiago %>% 
  mutate(mobility = case_when(ID_IND %in% depl_santiago$ID_IND ~ "mobile",
                              !ID_IND %in% depl_santiago$ID_IND & Viajes == 0 & !is.na(Factor_LaboralNormal) ~ "immobile"))
pers_santiago <- pers_santiago %>% 
   filter(!is.na(mobility))

sum(pers_santiago$W_IND[pers_santiago$AGE>=16], na.rm = TRUE)
length(unique(pers_santiago$ID_IND[pers_santiago$AGE>=16]))

f <- data.frame(table(pers_santiago$mobility))
f <- f %>%
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

rm(f)

### transmute
pers_santiago <- pers_santiago %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_ZF, RES_COG = as.character(RES_COG), RES_SEC,
            SEX, AGE, KAGE, KAGE2,
            P8 = as.character(Estudios), EDUC, P9, OCC, 
            REV_UC, REV, CSO, STRM, LOG,
            W_IND, ZONAGE_SEC) %>% 
  arrange(ID_IND)


### on refait les calculs sur les actifs avec la nouvelle table filtrée
sumPop_cso <- pers_santiago %>% 
  filter(AGE>15) %>% 
  filter(!is.na(CSO)) %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))


rm(com, depl, etape, men, pers, sumPop_cso, zfsec)



# ~ last corrections ----

# fifi <- read.csv2("data/bdm/fifi.csv")
# pb <- depl_santiago %>%
#   filter(ID_IND %in% fifi$ID_IND)
# unique(pb$ID_IND)

depl_santiago$M_START[depl_santiago$ID_IND=="13101_056_104301_02" & depl_santiago$NDEP=="01"] <- 9
depl_santiago$M_END[depl_santiago$ID_IND=="13101_056_104301_02" & depl_santiago$NDEP=="01"] <- 15

depl_santiago$H_START[depl_santiago$ID_IND=="13101_250_147850_01" & depl_santiago$NDEP=="02"] <- 20
depl_santiago$H_END[depl_santiago$ID_IND=="13101_250_147850_01" & depl_santiago$NDEP=="02"] <- 21
 
depl_santiago$H_START[depl_santiago$ID_IND=="13101_338_167091_03" & depl_santiago$NDEP=="02"] <- 15
depl_santiago$H_END[depl_santiago$ID_IND=="13101_338_167091_03" & depl_santiago$NDEP=="02"] <- 16

 
depl_santiago$H_END[depl_santiago$ID_IND=="13101_359_168471_03" & depl_santiago$NDEP=="01"] <- 13
depl_santiago$M_END[depl_santiago$ID_IND=="13101_359_168471_03" & depl_santiago$NDEP=="01"] <- 15
depl_santiago$D9[depl_santiago$ID_IND=="13101_359_168471_03" & depl_santiago$NDEP=="01"] <- 45

depl_santiago$M_START[depl_santiago$ID_IND=="13101_434_189821_03" & depl_santiago$NDEP=="04"] <- 51
depl_santiago$M_END[depl_santiago$ID_IND=="13101_434_189821_03" & depl_santiago$NDEP=="04"] <- 11

depl_santiago$H_START[depl_santiago$ID_IND=="13101_479_203361_01" & depl_santiago$NDEP=="02"] <- 11
depl_santiago$H_END[depl_santiago$ID_IND=="13101_479_203361_01" & depl_santiago$NDEP=="02"] <- 11
 
depl_santiago$H_END[depl_santiago$ID_IND=="13101_563_241841_01" & depl_santiago$NDEP=="01"] <- 10
depl_santiago$D9[depl_santiago$ID_IND=="13101_563_241841_01" & depl_santiago$NDEP=="01"] <- 15

depl_santiago <- depl_santiago %>%
  mutate(NDEP = case_when(ID_IND=="13101_567_243292_05" & NDEP=="03" ~ NA_character_,
                          TRUE ~ NDEP)) %>%
  filter(!is.na(NDEP))

depl_santiago <- depl_santiago %>% filter(ID_IND!="13101_604_249031_02")
pers_santiago <- pers_santiago %>% filter(ID_IND!="13101_604_249031_02")

depl_santiago$M_START[depl_santiago$ID_IND=="13101_727_206953_01" & depl_santiago$NDEP=="03"] <- 3


 
# rm(fifi, pb)

## recoder ZF et COG NA ou hors périmètre
depl_santiago <- depl_santiago %>% 
  mutate(O_ZF = case_when(O_ZF == "000" ~ NA_character_,
                          O_ZF == "999" ~ "999999",
                          TRUE ~ O_ZF),
         
         D_ZF = case_when(D_ZF == "000" ~ NA_character_,
                          D_ZF == "999" ~ "999999",
                         TRUE ~ D_ZF),
         
         O_COG = case_when(O_COG == "0" ~ NA_character_,
                           O_COG == "999" ~ "99999",
                           TRUE ~ O_COG),
         
         D_COG = case_when(D_COG == "0" ~ NA_character_,
                           D_COG == "999" ~ "99999",
                           TRUE ~ D_COG))


## supprimer les déplacements des individus absents de la table personne finale
depl_santiago <- depl_santiago %>% 
  filter(ID_IND %in% pers_santiago$ID_IND) # removed 2,868 rows (4%), 75,738 rows remaining

rm(a, b, c, k, varTemp, f2)



# 3. Buenos aires ====


# 4. Sao Paulo ====

#~ load data ----
OD_2017 <- read_sav("data_source/Sao Paulo/Pesquisa-Origem-Destino-2017-Banco-Dados/OD 2017/Banco de dados/OD_2017.sav")


##
a <- OD_2017 %>% 
  filter(id_pess=="00010018102")

d <- OD_2017 %>% 
  mutate(idd = paste(id_fam, id_pess, n_viag, "_"))
rm(d)
length(unique(OD_2017$id_fam))
length(unique(OD_2017$id_pess))
p <- OD_2017 %>% 
  mutate(idp = paste(id_fam, id_pess, "_"))
rm(p)



#~ Identifiants ----

## zonage
z <- read_excel("txt/corresp_Zona_Anillo_SP.xlsx")
unique(z$ANILLO)
z <- z %>% 
  mutate(ZONAGE_SEC = case_when(ANILLO == "Centre" ~ 4,
                                ANILLO == "Péricentre" ~ 3,
                                ANILLO == "Périphérie proche" ~ 2,
                                ANILLO == "Périphérie lointaine" ~ 1))

OD_2017 <- OD_2017 %>% 
  left_join(., select(z, zona = ZONA, ZONAGE_SEC))

## load table de passage (construite dans 2_construction_secteurs_SaoPaulo.R)
zfsec <- read.csv2("txt/corresp_ZONA_SEC_saoPaulo.csv")

## zona -> RES_SEC
OD_2017 <- OD_2017 %>% 
  left_join(., select(zfsec, zona, RES_SEC = CODE_SEC))

## longueur de zona
OD_2017 <- OD_2017 %>% 
  mutate(RES_ZF = case_when(nchar(zona)==1 ~ paste0("00", zona),
                            nchar(zona)==2 ~ paste0("0", zona),
                            TRUE ~ as.character(zona)))

## ID
OD_2017 <- OD_2017 %>% 
  mutate(NumPers = case_when(nchar(pessoa)==1 ~ paste0("0", pessoa),
                             TRUE ~ as.character(pessoa)),
         ID_IND = paste0("01000_", RES_ZF,"_", id_fam, "_", NumPers),
         ID_ED = "01000_2017",
         LIB_ED = "São Paulo, 2017",
         ENQUETE = "SAO PAULO") %>% 
  relocate(ID_IND, ID_ED, LIB_ED, ENQUETE, RES_SEC, RES_ZF) %>% 
  select(-NumPers)

min(nchar(OD_2017$ID_IND))
max(nchar(OD_2017$ID_IND))





 
#~ Nouvelle table déplacement ----

### On sélectionne dans la BD les enregistrements avec au moins un déplacement
depl <- OD_2017 %>% 
  filter(tot_viag!=0)


### id viag
depl <- depl %>% 
  mutate(IDD = paste0(ID_IND, "_", n_viag))
length(unique(depl$ID_IND))
length(unique(depl$IDD))


##~~ Variables spatiales ----

### RES_SEC et RES_ZF ci-dessus
### RES_COG
depl <- depl %>% 
  mutate(RES_COG = as.character(muni_dom))

### secteur d'origine 
depl <- depl %>% 
  left_join(., select(zfsec, zona_o = zona, O_SEC = CODE_SEC), by = "zona_o")

length(unique(depl$O_SEC))

### idem pour le secteur de destination
depl <- depl %>% 
  left_join(., select(zfsec, zona_d = zona, D_SEC = CODE_SEC), by = "zona_d")

length(unique(depl$D_SEC))
length(unique(depl$RES_SEC))

rm(zfsec)

### zona et commune d'origine et de destination
depl <- depl %>% 
  mutate(O_ZF = case_when(nchar(zona_o)==1 ~ paste0("00", zona_o),
                          nchar(zona_o)==2 ~ paste0("0", zona_o),
                          TRUE ~ as.character(zona_o)),
         D_ZF = case_when(nchar(zona_d)==1 ~ paste0("00", zona_d),
                          nchar(zona_d)==2 ~ paste0("0", zona_d),
                          TRUE ~ as.character(zona_d)),
         O_COG = as.character(muni_o),
         D_COG = as.character(muni_d))




##~~ Variables temporelles ----

### fenêtre de minuit à minuit
varTemp <- depl %>% 
  select(IDD, ID_IND, n_viag, h_saida, min_saida, h_cheg, min_cheg, duracao,
         RES_ZF, O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG, motivo_o, motivo_d)

### qui induit des durées négatives :
varTemp <- varTemp %>% 
  mutate(h1 = paste0(h_saida, "h", min_saida),
         h2 = paste0(h_cheg, "h", min_cheg),
         duree = as.duration(hm(h2)-hm(h1)),
         diff = duree-(duracao*60))

### check : On ajoute +24 pour les déplacements se terminant à 0h ou plus
varTemp <- varTemp %>% 
  mutate(h_cheg2 = case_when(duree<0 ~ h_cheg + 24,
                              TRUE ~ h_cheg))


#### 797 déplacements débutent avant 4h au jour j
a <-  varTemp %>% 
  filter(as.numeric(h_saida)<4)

#### dont 11 déplacements matinaux chevauchent 4h  
b <- a %>% 
  filter(as.numeric(h_cheg2)>4) 

length(unique(b$ID_IND))

## l'individu 01000_473_047303021_01 a deux déplacements à cheval
## l'un à j et le second à j+1
bb <- b %>% 
  filter(ID_IND == "01000_473_047303021_01")

b <- b %>% 
  filter(ID_IND!= "01000_473_047303021_01")

### 786 déplacements strictement compris entre 0h et 4h 
c <- a %>%
  filter(!IDD %in% b$IDD)

### REPORT DES DEPLACEMENTS COMPRIS STRICTEMENT ENTRE 0h ET 4H 

### -> on reporte à j+1
c <- c %>% 
  mutate(h_saida = h_saida + 24,
         h_cheg2 = h_cheg2 + 24,
         newIdd = paste0(IDD, "_c"))

### on joint ces reports aux autres déplacements des individus concernés
tempo_c <- varTemp %>% 
  filter(ID_IND %in% c$ID_IND) %>% 
  filter(!IDD %in% c$IDD) %>% 
  bind_rows(., c) %>% 
  arrange(ID_IND, h_saida, min_saida)

### On vérifie la cohérence des lieux d'origine-destination
tempo_c <- tempo_c %>% 
  group_by(ID_IND) %>% 
  mutate(pbZf = case_when(!is.na(newIdd) & O_ZF!=lag(D_ZF) ~ TRUE),
         pbSec = case_when(!is.na(newIdd) & O_SEC!=lag(D_SEC) ~ TRUE),
         pbcog = case_when(!is.na(newIdd) & O_COG!=lag(D_COG) ~ TRUE)) %>% 
  ungroup()

### on observe les cas problématiques
i <- unique(tempo_c$ID_IND[tempo_c$pbZf==TRUE & !is.na(tempo_c$pbZf)])
bibi <- tempo_c %>% 
  filter(ID_IND %in% i)

### on corrige 
tempo_c <- tempo_c %>% 
  mutate(O_ZF = case_when(pbZf==TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pbSec==TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC),
         O_COG = case_when(pbcog==TRUE ~ lag(D_COG),
                           TRUE ~ O_COG))

### on joint les corrections à la table tempo
varTemp <- varTemp %>% 
  filter(!ID_IND %in% tempo_c$ID_IND) %>% 
  bind_rows(., select(tempo_c, -pbZf, -pbSec, -pbcog)) %>% 
  arrange(IDD)

rm(i, bibi)


### CAS DES CHEVAUCHEMENTS A DEDOUBLER 
### sous-table de tous leur déplacement:
### ils sont tous codés > 1
tempo_b <- varTemp %>% 
  filter(ID_IND %in% b$ID_IND) %>% 
  group_by(ID_IND) %>% 
  arrange(ID_IND, h_saida, min_saida) %>% 
  mutate(ntrip = n(),
         chev = case_when(h_saida<4 ~ "y")) %>% 
  ungroup()

## on dédouble
#### b2_j1 est à bouger à j+1
b2_j1 <- tempo_b %>% 
  filter(chev=="y") %>% 
  mutate(h_cheg2 = h_cheg2 + 24,
         h_saida = h_saida + 24,
         newIdd = paste0(IDD, "_j1"))
#### b2_j reste à j
b2_j <- tempo_b %>% 
  filter(chev=="y") %>% 
  mutate(h_saida = 4,
         min_saida = 0,
         newIdd = paste0(IDD, "_j"))

#### on assemble les 18 nouveaux déplacements aux autres déplacements de ces individus
#### pour reconstituer leur journée et on corrige les lieux de présence
tempo_b2 <- tempo_b %>% 
  filter(!IDD %in% b2_j$IDD) %>% 
  bind_rows(., b2_j1) %>% 
  bind_rows(., b2_j) %>% 
  arrange(ID_IND, h_saida, min_saida)


#### on ajoute bb
bb <- bb %>% 
  mutate(newIdd = case_when(n_viag==1 ~ paste0(IDD, "_j"),
                            TRUE ~ paste0(IDD, "_j1")),
         h_saida = case_when(n_viag==1 ~ 4,
                             TRUE ~ h_saida + 24),
         min_saida = case_when(n_viag==1 ~ 0,
                               TRUE ~ min_saida),
         h_cheg2 = case_when(n_viag==1 ~ h_cheg2,
                             TRUE ~ h_cheg2 + 24))

tempo_b2 <- tempo_b2 %>% 
  bind_rows(., bb)

#### on vérifie la cohérence des zones fines -> ok
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheZf = case_when(D_ZF == lead(O_ZF) ~ TRUE,
                            D_ZF != lead(O_ZF) ~ FALSE)) %>% 
  ungroup()

#### on vérifie la cohérence des secteurs
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(coheS = case_when(D_SEC == lead(O_SEC) ~ TRUE,
                           D_SEC != lead(O_SEC) ~ FALSE),
         coheC = case_when(D_COG == lead(O_COG) ~ TRUE,
                           D_COG != lead(O_COG) ~ FALSE)) %>% 
  ungroup()

#### on vérifie que les déplacements reportés à j+1 ne se chevauchent pas entre eux
length(unique(tempo_b2$newIdd))
tempo_b2 <- tempo_b2 %>% 
  group_by(ID_IND) %>% 
  mutate(pb = case_when(h_saida>lag(h_cheg2) ~ "pb")) %>% 
  ungroup()

#### on intègre tempo_b2 à varTemp
varTemp <- varTemp %>% 
  filter(!ID_IND %in% tempo_b2$ID_IND) %>% 
  bind_rows(., select(tempo_b2, -ntrip, -chev, -coheZf, -coheS, -coheC, -pb))

length(unique(varTemp$newIdd))

rm(tempo_b, tempo_b2, tempo_c, bb, b2_j, b2_j1)


# #### vérif sur tempo
# varTemp <- varTemp %>%
#   arrange(ID_IND, h_saida, min_saida) %>%
#   group_by(ID_IND) %>%
#   mutate(pbH = case_when(h_saida<lag(h_cheg2) ~ "pb"))
# # => 0 incohérence dans les heures issues des données brutes
# varTemp <- varTemp %>%
#   mutate(pbZ = case_when(D_ZF!=lead(O_ZF) ~ TRUE))
# # 309 incohérences Zona issues des données brutes
# varTemp <- varTemp %>%
#   mutate(pbS = case_when(D_SEC!=lead(O_SEC) ~ TRUE))
# # 270 incohérences secteurs issues des données brutes
# varTemp <- varTemp %>%
#   mutate(pbC = case_when(D_COG!=lead(O_COG) ~ TRUE)) %>% 
#   ungroup()
# # 57 incohérences municipe issues des données brutes

 
### Création des nouvelles variables temporelles
varTemp <- varTemp %>%
  mutate(H_START = h_saida,
         M_START = as.numeric(min_saida),
         H_END = h_cheg2,
         M_END = as.numeric(min_cheg),
         D9 = as.numeric(as.duration(hm(paste0(H_END, "h", M_END)) - hm(paste0(H_START, "h", M_START))))/60)

### check : 3 diff (erreur originelle) + nouveaux dépl
bibi <- varTemp %>% filter(D9-duracao!=0)
rm(bibi)


### On ramène ce qui déborde à la fenêtre 4h-4h (ne doit déborder que les déplacements à j+1)
varTemp <- varTemp %>%
  mutate(M_START = case_when(H_START<4 ~ 0,
                             TRUE ~ M_START),
         H_START = case_when(H_START<4 ~ 4,
                             TRUE ~ H_START),

         M_END = case_when(H_END>=28 ~ 0,
                           TRUE ~ M_END),
         H_END = case_when(H_END>28 ~ 28,
                           TRUE ~ H_END))

### arrange and order
varTemp <- varTemp %>%
  arrange(ID_IND, H_START, M_START) %>%
  group_by(ID_IND) %>%
  mutate(nordre = order(H_START)) %>%
  ungroup()

### 29 déplacements réordonnés par rapport à n_viag 
tempoDiff <- varTemp %>%
  mutate(diff = nordre - n_viag) %>%
  filter(diff!=0)

### n° d'ordre de déplacement
varTemp <- varTemp %>%
  mutate(NDEP = case_when(nchar(nordre)==1 ~ paste0("0", nordre),
                          TRUE ~ as.character(nordre)))

### JOINDRE TEMPO A LA TABLE DEPLACEMENT

### clé
k <- varTemp %>% 
  mutate(newIdd = case_when(str_detect(newIdd, "_c") ~ NA_character_,
                            TRUE ~ newIdd))

k <- k %>% 
  select(IDD, newIdd) %>% 
  filter(!is.na(newIdd)) %>% 
  filter(!IDD %in% c("01000_473_047303021_01_1", "01000_473_047303021_01_2"))
length(unique(k$IDD))

varTemp <- varTemp %>% 
  mutate(newIdd = case_when(!is.na(newIdd) ~ newIdd,
                            TRUE ~ IDD))

### joindre les résultats à la table déplacement
### dédoubler les déplacements qui chevauchent 4h (b)
### et création des nouveaux identifiants de déplacement
depl <- depl %>% 
  mutate(newIdd = case_when(IDD %in% c$IDD ~ paste0(IDD, "_c"),
                            TRUE ~ IDD))

depl1 <- depl %>% 
  filter(IDD %in% k$IDD) %>% 
  mutate(newIdd = paste0(IDD, "_j1"))
depl2 <- depl %>% 
  filter(IDD %in% k$IDD) %>% 
  mutate(newIdd = paste0(IDD, "_j"))


### création de la nouvelle table déplacement comptant 84 déplacements supplémentaires
depl <- depl %>% 
  filter(!IDD %in% k$IDD) %>% 
  rbind(., depl1) %>% 
  rbind(., depl2) %>% 
  select(-O_ZF, -D_ZF, -O_SEC, -D_SEC, -O_COG, -D_COG)

rm(depl1, depl2)


setdiff(depl$newIdd, varTemp$newIdd)


depl <- depl %>% 
  left_join(., select(varTemp, newIdd, NDEP, H_START, M_START, H_END, M_END, D9,
                      O_ZF, D_ZF, O_SEC, D_SEC, O_COG, D_COG),
            by = "newIdd") %>% 
  arrange(ID_IND, NDEP)

setdiff(varTemp$ID_IND, depl$ID_IND)


### on renomme les id de déplacements
depl <- depl %>% 
  select(-IDD) %>% 
  rename(IDD = newIdd)





##~~ Motif de déplacement ----  

### motif de destination D_PURPOSE
#### charger la table de correspondance
motif <- read.csv2("txt/corresp_MOTIF.csv",  
                   encoding = "UTF-8", 
                   colClasses = c("character", "numeric", "character"))  

#### joindre 
depl <- depl %>% 
  left_join(., select(motif, ENQUETE, motivo_d = D2_D5, D_PURPOSE = PURPOSE))
depl <- depl %>% 
  left_join(., select(motif, ENQUETE, motivo_o = D2_D5, O_PURPOSE = PURPOSE)) 

rm(motif) 

##~~ Correction ----
### check origine purpose des heures déplacées
purpose <- depl %>% 
  select(IDD, ID_IND, NDEP, zona, RES_SEC,  H_START, M_START, H_END, M_END, 
         O_ZF, D_ZF, O_SEC, D_SEC, O_PURPOSE, D_PURPOSE)

purpose0 <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(IDD %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(report=="yes" & O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE),
         pball = case_when(O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                           TRUE ~ FALSE))

### correction manuelle
ind2recode <- purpose0$ID_IND[purpose0$pb==TRUE|purpose0$pball==TRUE]
purp02recode <- purpose0 %>% 
  filter(ID_IND %in% ind2recode) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(n = n()) %>% 
  ungroup() %>% 
  filter(n>1)

purp02recode <- purp02recode %>% 
  mutate(O_PURPOSE = case_when(pball==TRUE ~ lag(D_PURPOSE),
                               TRUE ~ O_PURPOSE))

### joindre les corrections à purpose
purpose <- purpose %>% 
  filter(!ID_IND %in% purp02recode$ID_IND) %>% 
  rbind(., select(purp02recode, -report, -pb, -pball, -n)) %>% 
  arrange(ID_IND, NDEP)

rm(purpose0, ind2recode, purp02recode)

### check zf et secteur de présence des déplacements réordonnés
df <- purpose %>% 
  filter(ID_IND %in% a$ID_IND) %>%
  group_by(ID_IND) %>% 
  mutate(report = case_when(IDD %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb_zf = case_when(O_ZF != lag(D_ZF) ~ TRUE,
                           TRUE ~ FALSE),
         pb_sec = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                            TRUE ~ FALSE)) %>% 
  ungroup()

ind2recode <- df$ID_IND[df$pb_zf==TRUE|df$pb_sec==TRUE]
df2recode <- df %>% 
  filter(ID_IND %in% ind2recode) %>% 
  arrange(ID_IND, NDEP) %>% 
  group_by(ID_IND) %>% 
  mutate(n = n()) %>% 
  ungroup() %>% 
  filter(n>1)

### correction
df2recode <- df2recode %>% 
  group_by(ID_IND) %>% 
  mutate(O_ZF = case_when(pb_zf == TRUE ~ lag(D_ZF),
                          TRUE ~ O_ZF),
         O_SEC = case_when(pb_zf == TRUE ~ lag(D_SEC),
                           TRUE ~ O_SEC)) %>% 
  ungroup()

### joindre les corrections à purpose
purpose <- purpose %>% 
  filter(!ID_IND %in% df2recode$ID_IND) %>% 
  rbind(., select(df2recode, -report, -pb_zf, -pb_sec, -n)) %>% 
  arrange(ID_IND, NDEP)


### joindre à la table déplacement
depl <- depl %>% 
  select(-O_PURPOSE, -D_PURPOSE, -O_ZF, -D_ZF, -O_SEC, -D_SEC) %>% 
  left_join(., select(purpose, IDD, O_ZF, D_ZF, O_SEC, D_SEC, O_PURPOSE, D_PURPOSE))

f <- data.frame(table(depl$D_PURPOSE))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f, df2recode, ind2recode, purpose, df)

### last check
#### check secteur de présence
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(IDD %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_SEC != lag(D_SEC) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(IDD, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 267 déplacements avec incohérence dans les secteurs de présence 
# aucun de ces déplacements n'a été réordonnés = incohérence de la table source

#### check motif
bibi <- depl %>% 
  group_by(ID_IND) %>% 
  mutate(report = case_when(IDD %in% c(c$newIdd, k$newIdd) ~ "yes",
                            TRUE ~ "no"),
         pb = case_when(O_PURPOSE != lag(D_PURPOSE) ~ TRUE,
                        TRUE ~ FALSE)) %>% 
  ungroup() %>% 
  select(IDD, ID_IND, NDEP, RES_SEC, H_START, M_START, H_END, M_END, O_ZF, D_ZF, 
         O_SEC, D_SEC, O_PURPOSE, D_PURPOSE, pb, report)

# => 103 déplacements avec incohérence dans les motifs de présence 
# aucun de ces déplacements n'a été réordonnés = incohérence de la table source

rm(bibi)



##~~ Mode de transport ----  

### charger la table de correspondance
mode <- read.csv2("txt/corresp_MODE.csv",
                  encoding = "UTF-8", 
                  colClasses = c("character", "character", "numeric", "character"))

#### joindre 
depl <- depl %>% 
  left_join(., select(mode, ENQUETE, modoprin = MODP, MODE)) 

rm(mode)  



### Mode adhérent
### si MODE = 03 alors mode adhérent (1), sinon non adhérent (0)
depl <- depl %>% 
  mutate(MODE_ADH = case_when(MODE=="03" ~ 1,
                              MODE %in% c("01", "02") ~ 0))


##~~ Mise en forme et sauvegarde ----
depl_SP <- depl %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, NDEP, 
            RES_ZF, RES_COG, RES_SEC, 
            O_ZF, O_COG = as.character(muni_o), O_SEC, 
            D_ZF, D_COG = as.character(muni_d), D_SEC, 
            H_START, M_START, H_END, M_END, D9, 
            D2 = as.character(motivo_o), O_PURPOSE, 
            D5 = as.character(motivo_d), D_PURPOSE, 
            MODP = as.character(modoprin), MODE, MODE_ADH, 
            ZONAGE_SEC = NA_character_) %>% 
  arrange(ID_IND, NDEP)




#~ Nouvelle table personne ----
pers <- OD_2017 %>% 
  filter(!duplicated(ID_IND))


##~~ Variables socio-démo ----

### AGE, SEX
pers <- pers %>% 
  mutate(AGE = idade,
         SEX= as.character(sexo),
         KAGE = case_when(AGE >= 16 & AGE <= 24 ~ "1",
                          AGE >= 25 & AGE <= 34 ~ "2",
                          AGE >= 35 & AGE <= 64 ~ "3",
                          AGE >= 65 ~ "4",
                          TRUE ~ "0"),
         KAGE2 = case_when(AGE >= 16 & AGE <= 25 ~ "1",
                           AGE >= 26 & AGE <= 40 ~ "2",
                           AGE >= 41 & AGE <= 60 ~ "3",
                           AGE >= 61 ~ "4",
                           TRUE ~ "0"),
         W_IND = fe_pess) 

f <- data.frame(table(pers$KAGE2))
f <- f %>% 
  mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f)

### EDUC
pers <- pers %>% 
  mutate(P8 = as.character(grau_ins))

#### charger la table de correspondance
educ <- read.csv2("txt/corresp_EDUC.csv",
                  encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  left_join(., educ)

### OCC
pers <- pers %>% 
  mutate(P9 = as.character(cd_ativi))

#### charger la table de correspondance
occ <- read.csv2("txt/corresp_OCC.csv",
                 encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  left_join(., occ)

rm(educ, occ)


##~~ Revenu ----

###~~~ revenu par UC (selon INSEE) ----

#### Nb d'adultes et d'enfants de - de 14 ans dans le ménage (avec et sans le 1er adulte)
men_temp <- pers %>%
  select(ID_IND, id_fam, pessoa, AGE) %>%
  group_by(id_fam) %>%
  summarise(nbpers=length(unique(ID_IND)),
            nbad = sum(AGE >= 18, na.rm=TRUE),
            nbadMoinsUn = sum(AGE >= 14, na.rm=TRUE) - 1,
            nbmoins14 = sum(AGE<14, na.rm=TRUE))


## check
men_temp <- men_temp %>% 
  mutate(tot = nbadMoinsUn + nbmoins14 +1,
         diff = tot - nbpers)


#### On travaille sur une table intermédiaire
pers_rev <- pers %>%
  select(ID_IND, id_fam, pessoa, AGE, OCC, renda_fa) %>%
  left_join(., men_temp) %>%
  arrange(ID_IND)

rm(men_temp)

require(skimr)
skim(pers_rev$renda_fa)


# Les unités de consommation sont généralement calculées
# selon l'échelle d'équivalence dite de l'OCDE modifiée
# qui attribue 1 uc au premier adulte du ménage,
# 0,5 uc aux autres personnes de 14 ans ou plus
# et 0,3 uc aux enfants de moins de 14 ans.

pers_rev <- pers_rev %>% 
  mutate(REV_UC = renda_fa/(1 + nbadMoinsUn*0.5 + nbmoins14*0.3))

skim(pers_rev$REV_UC)

### Visu
options(scipen = 9999)
ggplot(pers_rev, aes(x=REV_UC)) +
  geom_histogram(binwidth=1000, color="white") +
  scale_y_log10() +
  labs(title = "Sao Paulo - Distribution du revenu du ménage par UC", x = "REV_UC (tranche de 1000 Reais)", y = "Nombre d'enquêtés, tout âge (log10)")

ggplot(pers_rev %>% filter(AGE>15), aes(x=REV_UC)) +
  geom_histogram(binwidth=1000, color="white") +
  scale_y_log10() +
  labs(title = "Sao Paulo - Distribution du revenu du ménage par UC", 
       x = "REV_UC (tranche de 1000 Reais)", 
       y = "Nombre d'enquêtés de 16 ans et plus (log10)")


### selon salaire min 2017, soit 937 Reais, mais en 5k ~ équilibrées
pers_rev <- pers_rev %>%
  mutate(REV = case_when(REV_UC < 937 ~ "1", # moins de 1 smic
                         REV_UC >= 937 & REV_UC < 1874 ~ "2", # entre 1 et 2 smic
                         REV_UC >= 1874 & REV_UC < 2811 ~ "3", # entre 2 et 3 smic
                         REV_UC >= 2811 & REV_UC < 4685 ~ "4", # entre 3 et 5 smic
                         REV_UC >= 4685 ~ "5")) # plus de 5 smic

f <- data.frame(table(pers_rev$REV[pers_rev$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))




### joindre à la table personne
pers <- pers %>% 
  left_join(., select(pers_rev, ID_IND, REV_UC, REV))

rm(pers_rev, f)



##~~ Informel ----

actifs <- pers %>% 
  select(ID_IND, AGE, cd_ativi, ocup1, setor1, vinc1, OCC, EDUC) %>% 
  mutate_if(is.numeric, ~as.character(.)) %>% 
  left_join(., select(pers, ID_IND, W_IND, renda_fa)) 

### interlude
actifs1 <- actifs %>% 
  filter(cd_ativi %in% c("1", "2"))
actifs2 <- actifs %>% 
  filter(OCC == "1")
rm(actifs1, actifs2)

### sélection des actifs occupés
actifs <- actifs %>% 
  filter(OCC == "1")

### codage
### 0 : travail formel ; 1: travail informel
actifs <- actifs %>% 
  mutate(INFORMAL = case_when(vinc1 %in% c("1", "3") ~ 0,
                              vinc1 %in% c("2", "7", "8") ~ 1,
                              vinc1 %in% c("4", "5", "6") & cd_ativi=="2" ~ 1,
                              vinc1 == "6" & cd_ativi %in% c("1", "3") & ocup1 %in% c("1", "2", "3", "4", "5") ~ 0,
                              vinc1 == "6" & cd_ativi %in% c("1", "3") & ocup1 %in% c("6", "7", "8", "9", "11") ~ 1,
                              vinc1 == "4" & cd_ativi %in% c("1", "3") & ocup1 %in% c("1", "2", "3") ~ 0,
                              vinc1 == "4" & cd_ativi %in% c("1", "3") & ocup1 %in% c("4", "5", "6", "7", "8", "9", "10", "11") ~ 1))


table(actifs$INFORMAL, useNA = "always") 

## codage informalité employeur
actifs <- actifs %>% 
  mutate(INFORMAL = case_when(is.na(INFORMAL) & vinc1=="5" & !ocup1 %in% c("1", "2") ~ 1,
                              is.na(INFORMAL) & vinc1=="5" & ocup1 %in% c("1", "2") & renda_fa < 6000 ~ 1,
                              is.na(INFORMAL) & vinc1=="5" & ocup1 %in% c("1", "2") & renda_fa >= 6000 ~ 0,
                              TRUE ~ INFORMAL))


table(actifs$INFORMAL, useNA = "always")


## 15 actifs NA (sans info sur l'emploi)
actifs_NA <- actifs %>% 
  filter(is.na(INFORMAL))

sumPop <- actifs %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

options(scipen = 9999)
sumPop_ocup1 <- actifs %>% 
  group_by(ocup1, INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = round(n*100/sum(n), 2))

### joindre
pers <- pers %>% 
  left_join(., select(actifs, ID_IND, INFORMAL))

rm(actifs_NA, sumPop, sumPop_ocup1)


##~~ cso ----

## 1 : travailleur non qualifié
## 2 : travailleur qualifié
## 3 : indépendant
## 4 : profesionales
actifs <- actifs %>% 
  mutate(CSO = case_when(vinc1 %in% c("1", "2", "3") & ocup1 %in% c("1", "2") ~ "4",
                         vinc1 %in% c("1", "2", "3") & ocup1 %in% c("3", "4", "10") ~ "2",
                         vinc1 %in% c("1", "2", "3") & ocup1 %in% c("5", "6", "7", "8", "9", "11") & EDUC %in% c("1", "2") ~ "1",
                         vinc1 %in% c("1", "2", "3") & ocup1 %in% c("5", "6", "7", "8", "9", "11") & EDUC %in% c("3", "4") ~ "2",
                         vinc1=="4" & ocup1 %in% c("1", "2") ~ "4",
                         vinc1=="4" & !ocup1 %in% c("1", "2") ~ "3",
                         vinc1 %in% c("5", "7") ~ "3",
                         vinc1=="6" ~ "4",
                         vinc1=="8" ~ "1"))

table(actifs$CSO, useNA = "always")

sumPop <- actifs %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

## joindre
pers <- pers %>% 
  left_join(., select(actifs, ID_IND, CSO))

rm(actifs, sumPop)



##~~ statut d'occupation dans le logement ----

### charger la table de correspondance
log <- read.csv2("txt/corresp_OCCLOG.csv",
                 encoding = "UTF-8", colClasses = c("character"))

pers <- pers %>% 
  mutate(condmora = as.character(condmora)) %>% 
  left_join(., select(log, ENQUETE, condmora = propia, OCC_LOG))

table(pers$OCC_LOG, useNA = "always")

rm(log)

## Création de LOG par croisement de variables
pers <- pers %>% 
  mutate(sit_fam = as.character(sit_fam)) %>% 
  mutate(LOG = case_when(OCC_LOG == "1" & sit_fam %in% c("1", "2") ~ "3",
                         OCC_LOG == "1" & sit_fam == "3"  & AGE < 25 ~ "3",
                         OCC_LOG == "2" & sit_fam %in% c("1", "2") ~ "2",
                         OCC_LOG == "2" & sit_fam == "3" & AGE < 25 ~ "2",
                         is.na(OCC_LOG) ~ NA_character_,
                         TRUE ~ "1"))

table(pers$LOG, useNA = "always")

#♦ check
p <- pers %>% 
  select(ID_IND, W_IND, AGE, condmora, OCC_LOG, sit_fam, LOG)

f <- data.frame(table(p$LOG[p$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

f2 <- p %>% 
  filter(AGE>15) %>% 
  group_by(LOG) %>% 
  summarize(pond = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(pondP = round(pond * 100 / sum(pond), 1))





##~~ structure du ménage ----

## Catégories :
## 5: extenso o compuesto con menores : ménage composé d'un ou plusieurs adultes avec mineur(s) :
## comprend les familles élargies, et éventuellement les membres n'ont pas tous un lien 
## de parenté avec le chef de ménage 
## 4: nuclear con menores : ménage composé d'une famille nucléaire avec enfant(s) :
## un ou deux parents avec enfant(s) de moins de 16 ans
## 3: extenso o compusto con adultos : ménage composé uniquement d'adultes : famille élargie ou
## sans liens familiaux
## 2: nuclear adultos : ménage composé uniquement d'adultes avec un lien de parenté direct :
## couple ; couple avec enfant(s) majeur(s) ; ou un parent avec enfant(s) majeur(s)
## 1: unipersonal : ménage d'une seule personne


## ! ici, majorité à 16 ans


## comptage du nombre de personne dans le ménage
men_temp <- pers %>%
  select(ID_IND, id_fam, pessoa, AGE, sit_fam) %>%
  mutate(sit_fam = as.character(sit_fam)) %>% 
  filter(!sit_fam %in% c("6", "7")) %>% ## exclusion des domestiques résidents et de leurs parents
  group_by(id_fam) %>%
  summarise(nbpers = length(unique(pessoa)),
            nbad = sum(AGE >= 16, na.rm = TRUE),
            nbmin = sum(AGE <16, na.rm = TRUE)) %>% 
  ungroup()


## joindre le comptage à la table personne (table intermédiaire)
## et on simplifie les relations au chef du ménage
p <- pers %>% 
  left_join(., men_temp) %>% 
  select(ID_IND, AGE, sit_fam, id_fam, nbpers, nbad, nbmin) %>% 
  mutate(sit_fam = as.character(sit_fam)) %>% 
  mutate(p3 = case_when(sit_fam == "5" ~ "6",            # agregado 
                        sit_fam %in% c("6", "7") ~ "5",  # domestiques
                        TRUE ~ sit_fam))

unique(p$p3)


## stockage de toutes les compositions (relation au chef de famille)
p <- p %>% 
  arrange(id_fam, as.numeric(p3)) %>% 
  group_by(id_fam) %>% 
  mutate(suite_p3 = list(unique(p3))) %>% 
  ungroup()

length(unique(p$suite_p3))

## on identifie les familles nucléaires
p <- p %>% 
  mutate(nuclear = case_when(as.character(suite_p3) == 'c("1", "2")' ~ "couple",
                             as.character(suite_p3) == 'c("1", "3")' ~ "monoparental",
                             as.character(suite_p3) == 'c("1", "2", "3")' ~ "couple avec enfant"))


## Création de l'indicateur STRM (structure du ménage)
p <- p %>% 
  mutate(STRM = case_when(
    
    nbpers == 1 ~ "1. unipersonal",
    
    nuclear %in% c("couple avec enfant", "monoparental") & nbmin > 0 ~ "4. nuclear con menores",
    
    nuclear %in% c("couple", "couple avec enfant", "monoparental") & nbmin == 0 ~ "2. nuclear adultos",
    
    nbpers == nbad ~ "3. extenso o compuesto adultos",
    
    TRUE ~ "5. extenso o compuesto con menores"
    
  ))


## on repasse au niveau des ménages pour vérification
m <- p %>% 
  filter(!duplicated(id_fam))

f <- data.frame(table(m$STRM, useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))


unique(m$suite_p3[m$STRM=="2. nuclear adultos"]) 
unique(m$suite_p3[m$STRM=="4. nuclear con menores"])
unique(m$suite_p3[m$STRM=="5. extenso o compuesto con menores"])
unique(m$suite_p3[m$STRM=="1. unipersonal"])
unique(m$suite_p3[m$STRM=="3. extenso o compuesto adultos"])

## on recode par des chiffres les modalités
m <- m %>% 
  rename(STRUCTURE = STRM) %>% 
  mutate(STRM = substr(STRUCTURE, 1, 1)) %>% 
  select(id_fam, STRUCTURE, STRM)

rm(p)

## enfin jointure à la table personne (pas de STRM pour les domestiques)
pers <- pers %>% 
  left_join(., m) %>% 
  mutate(STRM = case_when(sit_fam %in% c("6", "7") ~ NA_character_,
                          TRUE ~ STRM))

## check 
p <- pers %>% 
  select(ID_IND, sit_fam, AGE, SEX, STRM, STRUCTURE)

f <- data.frame(table(p$STRM[p$AGE>15], useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)), 2))

rm(p, men_temp, m)



##~~ Mise en forme ---- 

sum(pers$W_IND[pers$AGE>=16], na.rm = TRUE)
length(unique(pers$ID_IND))
length(unique(pers$ID_IND[pers$AGE>=16]))

## filter les enfants en bas âge
pers_SP <- pers %>% 
  filter(AGE>4)

## trouver les personnes restées à la maison

### individus dans la table déplacement
length(unique(pers_SP$ID_IND))
ind_depl <- sort(unique(depl_SP$ID_IND))

### table personne - mobility
pers_SP <- pers_SP %>% 
  mutate(mobility = case_when(ID_IND %in% depl_SP$ID_IND ~ "mobile",
                              !ID_IND %in% depl_SP$ID_IND & tot_viag == 0 ~ "immobile")) %>% 
  filter(!is.na(mobility))


f <- data.frame(table(pers_SP$mobility, useNA = "always"))
f <- f %>% mutate(Freq_P = round(Freq * 100 / (sum(Freq)),2))

rm(f, ind_depl)


### transmute
pers_SP <- pers_SP %>% 
  transmute(ID_IND, ID_ED, LIB_ED, ENQUETE, 
            RES_ZF, RES_COG = as.character(muni_dom), RES_SEC,
            SEX, AGE, KAGE, KAGE2,
            P8, EDUC, P9, OCC, 
            REV_UC, REV, INFORMAL, CSO, STRM, LOG,
            W_IND, ZONAGE_SEC) %>% 
  arrange(ID_IND)



### on refait les calculs sur les actifs avec la nouvelle table filtrée
sumPop_cso <- pers_SP %>% 
  filter(AGE>15) %>% 
  filter(!is.na(CSO)) %>% 
  group_by(CSO) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))

sumPop_informel <- pers_SP %>% 
  filter(AGE>15) %>% 
  filter(!is.na(INFORMAL)) %>% 
  group_by(INFORMAL) %>% 
  summarize(n = sum(W_IND, na.rm = TRUE)) %>% 
  mutate(p = n*100/sum(n))


rm(sumPop_cso, sumPop_informel)



##~ last corrections ----
### correction des heures sources 
### au cas par cas ou supression


depl_SP <- depl_SP %>%
  filter(!ID_IND %in% c("01000_043_004309821_01", "01000_z473_047303021_01"))

depl_SP <- depl_SP %>%
  mutate(NDEP = case_when(ID_IND == "01000_218_021804541_01" & NDEP == "02" ~ NA_character_,
                          ID_IND == "01000_218_021804541_01" & NDEP == "03" ~ "02",
                          TRUE ~ NDEP)) %>%
  filter(!is.na(NDEP)) %>%
  mutate(O_ZF = case_when(ID_IND == "01000_d005_021804541_01" & NDEP == "02" ~ "289",
                          TRUE ~ O_ZF),
         O_SEC = case_when(ID_IND == "01000_d005_021804541_01" & NDEP == "02" ~ "023",
                           TRUE ~ O_SEC))

depl_SP$M_START[depl_SP$ID_IND=="01000_490_049004391_01" & depl_SP$NDEP=="08"] <- 45
depl_SP$M_END[depl_SP$ID_IND=="01000_490_049004391_01" & depl_SP$NDEP=="08"] <- 54

depl_SP$H_START[depl_SP$ID_IND=="01000_513_051305011_02" & depl_SP$NDEP == "02"] <- 17
depl_SP$H_END[depl_SP$ID_IND=="01000_513_051305011_02" & depl_SP$NDEP == "02"] <- 17

depl_SP$H_START[depl_SP$ID_IND=="01000_513_051305011_01" & depl_SP$NDEP == "02"] <- 8


rm(depl, OD_2017, pers, zona_distrit)

## supprimer les déplacements des individus absents de la table personne finale
depl_SP <- depl_SP %>% 
  filter(ID_IND %in% pers_SP$ID_IND) # removed 5,019 rows (3%), 152,975 rows remaining

rm(a, b, c, k, varTemp, tempoDiff)


# 5. Compilation des tables et sauvegarde ====

depl <- bind_rows(depl_bogota, depl_santiago, depl_SP)
pers <- bind_rows(pers_bogota, pers_santiago, pers_SP)

pers <- pers %>% select(-KAGE2)
depl <- depl %>% select(-ZONAGE_SEC)

## sauvegarde 
saveRDS(depl, "data/bdm/BD_mobiliscope_depl_as.rds")
saveRDS(pers, "data/bdm/BD_mobiliscope_pers_as.rds")





# création de la table de correspondance code secteur - zonage centre/périphérie ====

# library
library(tidylog)
library(tidyverse)
library(sf)


## load data
pers <- readRDS("data/BD_mobiliscope_pers_as.rds")
s <- st_read("shp/SEC_AS_W84.shp")

## prepare data
z <- pers %>% 
  select(ENQUETE, RES_SEC, ZONAGE_SEC) %>% 
  group_by(ENQUETE) %>% 
  filter(!duplicated(RES_SEC)) %>% 
  ungroup

z117 <- data.frame(ENQUETE = "BOGOTA",
                   RES_SEC = "UTAM117",
                   ZONAGE_SEC = 2)

z <- z %>% 
  rbind(., z117) %>% 
  rename(CODE_SEC = RES_SEC)

rm(z117, pers)

z <- z %>% 
  mutate(ID_SEC = case_when(ENQUETE=="BOGOTA" ~ paste0("BOGOTA_2019_", CODE_SEC),
                            ENQUETE=="SANTIAGO" ~ paste0("SANTIAGO_2012_", CODE_SEC),
                            ENQUETE=="SAO PAULO" ~ paste0("SAO PAULO_2017_", CODE_SEC))) %>% 
  transmute(ID_SEC, ZONAGE_SEC)

## check jointure
s <- s %>% 
  left_join(., z)


## save
write.csv2(z, "txt/correspondance_SEC_ZONAGE_AL.csv", row.names = FALSE)



