#==============================================================================#
#                         Construction de la BD géo Mobiliscope
#
#
# Description : Création des tables attributaires des shapes de Santiago, Bogota 
#               et Sao Paulo
#               Compilation des secteurs des 3 EOD dans une seule couche
#
# AD, juin 2021
#==============================================================================#


# directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1_online/Preprocessing_LatinAmericaCities/")

# Biblio
library(tidyverse)
library(tidylog)
library(sf)
library(lwgeom) #st_perimeter
library(mapview)


## Function : Add XY in wgs84 
st_centroid_within_poly <- function (poly) {
  
  # check if centroid is in polygon
  ctrd <- st_centroid(poly, of_largest_polygon = TRUE)
  in_poly <- diag(st_within(ctrd, poly, sparse = F))
  
  # replace geometries that are not within polygon with st_point_on_surface()
  st_geometry(ctrd[!in_poly,]) <- st_geometry(st_point_on_surface(poly[!in_poly,]))
  
  ctrd <- ctrd %>% st_transform(crs = 4326) %>% st_coordinates() %>% as.data.frame()
  
  poly <- poly %>% mutate(X_W84 = ctrd$X, Y_W84 = ctrd$Y)
  
}


# Bogota ----

## load couches sources
z <- st_read("data_source/Bogota/Encuesta de Movilidad 2019/Zonificación (shapefiles)/ZONAS/ZAT.shp")
length(unique(z$ZAT))
length(unique(z$UTAM))
u <- st_read("data_source/Bogota/Encuesta de Movilidad 2019/Zonificación (shapefiles)/ZONAS/UTAM.shp")
length(unique(u$UTAM))
rm(z, u)

## load couche source simplifiée, corrigée et nettoyée sous QGis
utam <- st_read("qgis/bogota/utam.shp")
## check geom
sum(st_is_valid(utam)==FALSE)

## load couche MODURAL réceptionnée en octobre 2021
## (simplifiée et corrigée sous QGis)
utam_M <- st_read("data_source/MODURAL/couches SIG EOD Bogotá/utam_modural.shp")
## check geom
sum(st_is_valid(utam_M)==FALSE)

## projection Bogota 1975 / Colombia Bogota zone en mètre
utam <- utam %>% 
  st_transform(crs = 21897)
utam_M <- utam_M %>% 
  st_transform(crs = 21897)

## on prend la couche MODURAl à laquelle on ajoute l'UTAM117 (aéroport)
u117 <- utam %>% 
  filter(UTAM == "UTAM117") %>% 
  select(UTAM, UTAM_NOMBR = UTAMNombre)
utam_M <- utam_M %>% 
  bind_rows(., u117)

## on renomme le sf pour la suite
utam <- utam_M

rm(utam_M, u117)


## Nouvelle table attributaire
utam <- utam %>% 
  transmute(PAYS = "AS",
            LIB_ED = "Bogotá, 2019",
            ID_SEC = paste0("BOGOTA_2019_", UTAM),
            ENQUETE = "BOGOTA",
            ANNEE = "2019",
            CODE_SEC = UTAM,
            LENGTH = st_perimeter(.),
            AREA = st_area(.),
            X_W84 = NA,
            Y_W84 = NA,
            LIB = UTAM_NOMBR)



sort(unique(utam$LIB))


## OLD - correction des LIB de la couche source
# utam <- utam %>% 
#   mutate(LIB = case_when(LIB == "N/A" ~ NA_character_,
#                          TRUE ~ LIB))
# 
# utamNA <- utam %>% 
#   filter(is.na(LIB))
# 
# mapview(utam) + mapview(utamNA)
# 
# utam <- utam %>% 
#   mutate(LIB = case_when(CODE_SEC=="UTAM580" ~ "SIBATE",
#                          CODE_SEC=="UTAM640" ~ "BOJACA",
#                          CODE_SEC=="UTAM660" ~ "TOCANCIPA",
#                          CODE_SEC=="UTAM540" ~ "MADRID",
#                          CODE_SEC=="UTAM650" ~ "ZIPAQUIRA",
#                          CODE_SEC=="UTAM520" ~ "FUNZA",
#                          CODE_SEC=="UTAM630" ~ "LA CALERA",
#                          CODE_SEC=="UTAM590" ~ "CHIA-FUSCA",
#                          CODE_SEC=="UTAM620" ~ "SOPO",
#                          CODE_SEC=="UTAM575" ~ "SOACHA CAZUCA",
#                          CODE_SEC=="UTAM574" ~ "SOACHA COMPARTIR",
#                          CODE_SEC=="UTAM610" ~ "COTA",
#                          CODE_SEC=="UTAM690" ~ "TABIO",
#                          CODE_SEC=="UTAM571" ~ "SOACHA SAN MATEO",
#                          CODE_SEC=="UTAM570" ~ "SOACHA LA DESPENSA",
#                          CODE_SEC=="UTAM573" ~ "SOACHA CENTRAL",
#                          CODE_SEC=="UTAM572" ~ "SOACHA SAN HUMBERTO",
#                          CODE_SEC=="UTAM563" ~ "FACATATIVA",
#                          CODE_SEC=="UTAM600" ~ "CAJICA",
#                          CODE_SEC=="UTAM680" ~ "TENJO",
#                          CODE_SEC=="UTAM500" ~ "MOSQUERA",
#                          CODE_SEC=="UTAM501" ~ "MOSQUERA SUR",
#                          CODE_SEC=="UTAM670" ~ "EL ROSAL",
#                          CODE_SEC=="UTAM700" ~ "GACHANCIPA",
#                          TRUE ~ LIB))


## ajout de "BOGOTA" devant LIB
zu <- read.csv2("txt/zonas_utam_METAL.csv")

utam <- utam %>% 
  mutate(LIB = case_when(CODE_SEC %in% zu$UTAM_CODE[zu$MUN_NAME=="BOGOTA"] ~ paste0("BOGOTÁ ", LIB),
                         TRUE ~ LIB))


## majuscules accentuées
utam <- utam %>% 
  mutate(LIB = case_when(LIB == "BOGOTÁ ALFONSO LOPEZ" ~ "BOGOTÁ ALFONSO LÓPEZ",
                         LIB == "BOGOTÁ ARBORIZADORA" ~ "BOGOTÁ ARBORIZADORA ALTA",
                         LIB == "BOGOTÁ CHICO LAGO" ~ "BOGOTÁ CHICÓ LAGO",
                         LIB == "BOGOTÁ CIUDAD JARDIN" ~ "BOGOTÁ CIUDAD JARDÍN",
                         LIB == "BOGOTÁ ENGATIVA" ~ "BOGOTÁ ENGATIVÁ",
                         LIB == "BOGOTÁ FONTIBON" ~ "BOGOTÁ FONTIBÓN",
                         LIB == "BOGOTÁ FONTIBON SAN PABLO" ~ "BOGOTÁ FONTIBÓN SAN PABLO",
                         LIB == "BOGOTÁ GARCES NAVAS" ~ "BOGOTÁ GARCÉS NAVAS",
                         LIB == "BOGOTÁ JARDIN BOTANICO" ~ "BOGOTÁ JARDÍN BOTÁNICO",
                         LIB == "BOGOTÁ LOS ALCAZARES" ~ "BOGOTÁ LOS ALCÁZARES",
                         LIB == "BOGOTÁ MARCO FIDEL SUAREZ" ~ "BOGOTÁ MARCO FIDEL SUÁREZ",
                         LIB == "BOGOTÁ PARQUE SIMON BOLIVAR - CAN" ~ "BOGOTÁ PARQUE SÍMON BOLÍVAR",
                         LIB == "BOGOTÁ SAGRADO CORAZON" ~ "BOGOTÁ SAGRADO CORAZÓN",
                         LIB == "BOGOTÁ SAN CRISTOBAL NORTE" ~ "BOGOTÁ SAN CRISTÓBAL NORTE",
                         LIB == "BOGOTÁ SAN JOSE" ~ "BOGOTÁ SAN JOSÉ",
                         LIB == "BOGOTÁ SAN JOSE DE BAVARIA" ~ "BOGOTÁ SAN JOSÉ DE BAVARIA",
                         LIB == "BOGOTÁ SANTA BARBARA" ~ "BOGOTÁ SANTA BÁRBARA",
                         LIB == "BOGOTÁ TOBERIN" ~ "BOGOTÁ TOBERÍN",
                         LIB == "BOGOTÁ USAQUEN" ~ "BOGOTÁ USAQUÉN",
                         LIB == "BOJACA" ~ "BOJACÁ",
                         LIB == "CAJICA" ~ "CAJICÁ",
                         LIB == "CHIA" ~ "CHÍA",
                         LIB == "FACATATIVA" ~ "FACATATIVÁ",
                         LIB == "GACHANCIPA" ~ "GACHANCIPÁ",
                         LIB == "SIBATE" ~ "SIBATÉ",
                         LIB == "SOACHA ALTOS DE CAZUCA" ~ "SOACHA ALTOS DE CAZUCÁ",
                         LIB == "SOACHA LEON XIII" ~ "SOACHA LEÓN XIII",
                         LIB == "SOPO" ~ "SOPÓ",
                         LIB == "TOCANCIPA" ~ "TOCANCIPÁ",
                         LIB == "ZIPAQUIRA" ~ "ZIPAQUIRÁ",
                         TRUE ~ LIB))

sort(unique(utam$LIB))


## Centroïdes
utam <- st_centroid_within_poly(poly=utam)

attributes(utam$LENGTH) <- NULL
attributes(utam$AREA) <- NULL

rm(zu)

mapview(utam)


## transfo proj
utam <- utam %>% 
  st_transform(crs = 4326)




# Sao Paulo ----

## load shape des secteurs créés à partir des zonas et des distrits (cf. 2_construction_secteurs_SaoPAulo.R)
## Proj source : EPSG:22523 Corrego Alegre 1970-72 / UTM zone 23S
sec_sp <- st_read("qgis/saoPaulo/secSP.shp")

mapview(sec_sp)

## Nouvelle table attributaire
sec_sp <- sec_sp %>% 
  transmute(PAYS = "AS",
            LIB_ED = "São Paulo, 2017",
            ID_SEC = paste0("SAO PAULO_2017_", CODE_SEC),
            ENQUETE = "SAO PAULO",
            ANNEE = "2017",
            CODE_SEC,
            LENGTH = st_perimeter(.),
            AREA = st_area(.),
            X_W84 = NA,
            Y_W84 = NA,
            LIB)


## centroïdes
sec_sp <- st_centroid_within_poly(poly = sec_sp)

attributes(sec_sp$LENGTH) <- NULL
attributes(sec_sp$AREA) <- NULL

## transfo proj
sec_sp <- sec_sp %>% 
  st_transform(crs = 4326)

## remove Z dimension 
sec_sp <- st_zm(sec_sp, drop = TRUE)

sort(sec_sp$LIB)



## Santiago ----

# load couche des secteurs construite dans 1_construction_secteurs_Santiago et
# nettoyée dans QGis
# proj source : EPSG:32719 WGS84/UTM zone 19S
sect <- st_read("qgis/santiago/secClean_santiago.shp")

## check geom
sum(st_is_valid(sect)==FALSE)


## Nouvelle table attributaire
sect <- sect %>% 
  transmute(PAYS = "AS",
            LIB_ED = "Santiago, 2012",
            ID_SEC = paste0("SANTIAGO_2012_", CODE_SEC),
            ENQUETE = "SANTIAGO",
            ANNEE = "2012",
            CODE_SEC,
            LENGTH = st_perimeter(.),
            AREA = st_area(.),
            X_W84 = NA,
            Y_W84 = NA,
            LIB)

## on supprime les virgules dans LIB
sect <- sect %>% 
  mutate(LIB = str_replace(LIB, ",", ""))


## centroïdes
sect <- st_centroid_within_poly(poly = sect)


attributes(sect$LENGTH) <- NULL
attributes(sect$AREA) <- NULL

## transfo proj
sect <- sect %>% 
  st_transform(crs = 4326)





# Compilation ----
sec <- sect %>% 
  bind_rows(., utam, sec_sp) %>% 
  arrange(ENQUETE, CODE_SEC) %>% 
  mutate(LENGTH = round(LENGTH),
         AREA = round(AREA))



mapview(sec)

# save
st_write(sec, "shp/BDgeo/SEC_AS_W84.shp",
         delete_dsn = TRUE, layer_options = "ENCODING=UTF-8")


rm(sec_sp, sect, utam)


