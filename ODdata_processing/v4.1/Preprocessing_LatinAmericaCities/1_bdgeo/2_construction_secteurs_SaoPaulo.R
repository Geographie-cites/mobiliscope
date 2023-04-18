#==============================================================================#
#                     Construction de la BD géo Mobiliscope
#
#
# Description : Construction de la couche des secteurs de Sao Paulo constituée 
#               des distrits de la municipe de Sao Paulo + les zonas périphériques
#               
#
# AD, sept 2021
#==============================================================================#


# directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1/Preprocessing_LatinAmericaCities/")

# Biblio
library(tidyverse)
library(tidylog)
library(sf)
library(mapview)
library(haven)


# load data ----

## BD source
OD_2017 <- read_sav("data_source/Sao Paulo/Pesquisa-Origem-Destino-2017-Banco-Dados/OD 2017/Banco de dados/OD_2017.sav")

## load shapes corrigés sous QGis
## Proj source : EPSG:22523 Corrego Alegre 1970-72 / UTM zone 23S
distrit <- st_read("qgis/saoPaulo/Distritos_2017_region_corr.shp")
zonas <- st_read("qgis/saoPaulo/Zonas_2017_region_corr.shp")
length(unique(zonas$NumeroZona))

## check geom
sum(st_is_valid(zonas)==FALSE)
sum(st_is_valid(distrit)==FALSE)


# Effectif par zonas ----
## toutes les zonas mentionnées dans la BD numérique ont une géométrie :
setdiff(OD_2017$zona, zonas$NumeroZona)
## codes des zonas non enquêtées :
setdiff(zonas$NumeroZona, OD_2017$zona)

## compter le nombre de personne de 16 + par zona
pers16_zona <- OD_2017 %>% 
  filter(idade > 15) %>% 
  group_by(zona) %>% 
  summarize(nByZona = n_distinct(id_pess)) 

## joindre les codes de municip et de distrit
zona_muni <- OD_2017 %>% 
  select(zona, muni_dom) %>% 
  filter(!duplicated(zona))
pers16_zona <- pers16_zona %>% 
  left_join(., zona_muni)

## joindre le décompte à la couche
zonas <- zonas %>% 
  left_join(., select(pers16_zona, NumeroZona = zona, nByZona), by = "NumeroZona")

## 12 zonas (hors Sao Paulo) sans enquêtés => à fusionner avec zona voisine 

# Mapview 
### transfo shape
zonaspt <- st_point_on_surface(zonas)
zonasNA <- zonas %>% 
  filter(NumeroMuni != 36) %>% 
  filter(is.na(nByZona))
zonaspt <- zonaspt %>% filter(!is.na(nByZona))

mapview(zonas, alpha.regions = 0, aplha = 1) + 
  mapview(zonasNA) +
  mapview(zonaspt, cex = "nByZona") 


# Couche des zonas périphériques ----

## -exclusion des zonas de Sao Paulo
## -fusion des zonas sans enquêtés avec la zona voisine du même district 
## en fonction de la morpho urbaine
zonaPeri <- zonas %>% 
  filter(NumeroMuni!=36) %>% 
  mutate(newIdZ = case_when(NumeroZona == 510 ~ 511,
                            NumeroZona == 479 ~ 476,
                            NumeroZona == 478 ~ 477,
                            NumeroZona == 346 ~ 345,
                            NumeroZona == 349 ~ 350,
                            NumeroZona == 353 ~ 351,
                            NumeroZona == 352 ~ 351,
                            NumeroZona == 354 ~ 355,
                            NumeroZona == 381 ~ 380,
                            NumeroZona == 374 ~ 375,
                            NumeroZona == 385 ~ 384,
                            NumeroZona == 392 ~ 391,
                            TRUE ~ NumeroZona))

length(unique(zonaPeri$NumeroZona)) - length(unique(zonaPeri$newIdZ))

zonaPeri_f <- zonaPeri %>%
  mutate(area = st_area(.)) %>% 
  group_by(newIdZ) %>%
  summarise(area = sum(area))

mapview(zonaPeri_f, alpha.regions = 0, aplha = 1) +
  mapview(zonasNA)

## toponymes
zona_muni <- zona_muni %>% 
  left_join(., select(zonas, zona = NumeroZona, NomeZona, NomeMunici, NumDistrit)) %>% 
  select(-geometry)

zonaPeri_f <- zonaPeri_f %>% 
  left_join(., select(zona_muni, newIdZ = zona, muni_dom, NomeZona, NomeMunici))

zonaPeri_f <- zonaPeri_f %>% 
  mutate(LIB = case_when(NomeMunici != NomeZona 
                         ~ paste0(toupper(NomeMunici), " ", toupper(NomeZona)),
                         NomeMunici == NomeZona 
                         ~ toupper(NomeZona))) %>% 
  arrange(LIB)

# ## LIB sans accent
# require(stringi)
# zonaPeri_f <- zonaPeri_f %>% 
#   mutate(LIB = stri_trans_general(LIB, "latin-ascii"))

## compléter certains toponymes
zonaPeri_f <- zonaPeri_f %>% 
  mutate(LIB = case_when(newIdZ %in% c(387, 476, 344, 347, 508, 
                                       455, 466, 356, 362, 504,
                                       358, 436, 395, 444, 389, 
                                       422)  ~ paste0(LIB, " CENTRO"),
                         newIdZ == 472 ~ paste0(LIB, " NORTE"),
                         newIdZ == 391 ~ paste0(LIB, " CENTRO E SUL"),
                         newIdZ == 468 ~ paste0(LIB, " NORDESTE"),
                         newIdZ == 485 ~ paste0(LIB, " PARQUE JOSÉ ALEXANDRE"),
                         newIdZ == 514 ~ paste0(LIB, " ORIENTE"),
                         newIdZ == 396 ~ paste0(LIB, " VILA VIRGÍNIA"),
                         newIdZ == 404 ~ paste0(LIB, " MODERNO"),
                         newIdZ == 489 ~ paste0(LIB, " AVENIDA MARECHAL RONDON"),
                         newIdZ == 440 ~ paste0(LIB, " OESTE"),
                         newIdZ == 449 ~ paste0(LIB, " NOVA PETRÓPOLIS"),
                         newIdZ == 421 ~ paste0(LIB, " NORTE"),
                         newIdZ == 511 ~ "COTIA, CAUCAIA",
                         newIdZ == 345 ~ "CAIEIRAS, SERPA E SANTA INÊS",
                         newIdZ == 350 ~ "FRANCO DA ROCHA OESTE",
                         newIdZ == 351 ~ "FRANCO DA ROCHA ORIENTE",
                         newIdZ == 355 ~ "FRANCISCO MORATO OESTE",
                         newIdZ == 375 ~ "GUARULHOS AEROPORTO",
                         newIdZ == 384 ~ "GUARULHOS ÂGUA AZUL E VASCONCELÂNDIA",
                         TRUE ~ LIB
                         ))

length(unique(zonaPeri_f$LIB))

## recoder id longueur 4 (ex: z001)
zonaPeri_f <- zonaPeri_f %>% 
  mutate(CODE_SEC = case_when(nchar(newIdZ)==1 ~ paste0("z00", newIdZ),
                              nchar(newIdZ)==2 ~ paste0("z0", newIdZ),
                              TRUE ~ paste0("z", newIdZ))) %>% 
  arrange(CODE_SEC)

zonasp <- zonaPeri_f %>% 
  transmute(CODE_SEC, LIB)

rm(pers16_zona, zonaPeri, zonasNA, zonaspt)


# Couche des distrits centraux ----

## Sélection des distrits de SAO PAULO
dist_muni <- zona_muni %>% 
  filter(!duplicated(NumDistrit))
dist <- distrit %>% 
  left_join(., select(dist_muni, NumeroDist = NumDistrit, muni_dom)) %>% 
  filter(muni_dom == 36)

## toponymes
dist <- dist %>% 
  mutate(LIB = paste0("SÃO PAULO ", toupper(NomeDistri)))

## ID
dist <- dist %>% 
  mutate(CODE_SEC = case_when(nchar(NumeroDist)==1 ~ paste0("d00", NumeroDist),
                              nchar(NumeroDist)==2 ~ paste0("d0", NumeroDist),
                              TRUE ~ paste0("d", NumeroDist))) %>% 
  arrange(CODE_SEC)

distc <- dist %>% 
  transmute(CODE_SEC, LIB)


# Compilation des zonas et des distrits ----
sec <- rbind(distc, zonasp)
rm(zonasp, distc)
mapview(sec)

sort(sec$LIB)



## sauvegarde 
st_write(sec, "qgis/saoPaulo/secSP.shp",
         delete_dsn = TRUE, layer_options = "ENCODING=UTF-8")






# Table de correspondance ----

## on part sur le maillage des zonas avec code distrit correspondant
t <- zonas %>% 
  transmute(zona = NumeroZona, distrit = NumDistrit, municip = NumeroMuni) %>% 
  st_drop_geometry()

## on joint les nouveaux codes secteurs créés pour les zonas périphériques
t <- t %>% 
  left_join(., select(zonaPeri_f, zona = newIdZ, CODE_SEC)) %>% 
  select(-geometry)

## les zonas périphériques sans enquêtés ont été recodées : elles n'ont donc pas de CODE_SEC associées
## correction :
t <- t %>% 
  mutate(CODE_SEC = case_when(zona == 510 ~ "z511",
                              zona == 479 ~ "z476",
                              zona == 478 ~ "z477",
                              zona == 346 ~ "z345",
                              zona == 349 ~ "z350",
                              zona == 353 ~ "z351",
                              zona == 352 ~ "z351",
                              zona == 354 ~ "z355",
                              zona == 381 ~ "z380",
                              zona == 374 ~ "z375",
                              zona == 385 ~ "z384",
                              zona == 392 ~ "z391",
                              TRUE ~ CODE_SEC))

## On joint les codes secteurs pour la municipe de Sao Paulo
t2 <- t %>% 
  filter(municip == 36) %>% 
  select(-CODE_SEC) %>% 
  left_join(., select(dist, distrit = NumeroDist, CODE_SEC)) %>% 
  select(-geometry)

## on combine
t <- t %>% 
  filter(municip != 36) %>% 
  rbind(., t2)

rm(t2, zonaPeri_f, dist)

## on sauvegarde 
write.csv2(t, "txt/corresp_ZONA_SEC_saoPaulo.csv",
           row.names = FALSE)

# Comptage des enquêtés par secteur ----

OD_2017 <- OD_2017 %>% 
  left_join(., select(t, zona, CODE_SEC))

length(unique(OD_2017$CODE_SEC))

pers16_sec <- OD_2017 %>% 
  filter(idade > 15) %>% 
  group_by(CODE_SEC) %>% 
  summarise(n = n_distinct(id_pess))

mean(pers16_sec$n)
