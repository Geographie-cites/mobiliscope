#===========================================================================#
#      Construction du zonage pour l'indicateur "residential area"
#
# juillet 2018 - AD
#===========================================================================#



# Chargement des bibliothèques
library(sf)
library(lwgeom)
library(readr)
library(dplyr)
library(stringr)
library(mapview)


# 1. Création du zonage sur la couche des communes 

## Chargement de la couche commune 
# Source : IGN, GEOFLA, décembre 2015
# Projection : Lambert 93
sfCom <- st_read("scriptsr/shp/COMMUNE_DEC2015.shp", stringsAsFactors = F)  %>% 
  st_transform(crs = 2154)

## Chargement de la table de l'appartenance géographique des communes au 1er janvier 2015 (géographie au 01/01/2015)
# Source : INSEE, code officiel géographique, octobre 2015
AU2010 <- read_delim("scriptsr/txt/AU2010_GEO2015.csv", 
                      delim = ";", escape_double = FALSE, col_types = cols(CATAEU2010 = col_character()), 
                             trim_ws = TRUE, locale = locale(encoding = "latin1")) %>% 
  rename(INSEE_COM = CODGEO)

## Jointure de la couche des communes à la table des ZAU
sfCom <- left_join(sfCom, AU2010, by = "INSEE_COM")


## Création de la variable "VC" (ville centre de l'EMD ? oui/non)
## Attention aux arrondissements de Paris, Lyon et Marseille
sfCom <- sfCom %>% 
  mutate(VC = ifelse(INSEE_COM == "49007" | INSEE_COM == "16015" | INSEE_COM == "63113" | INSEE_COM == "44109" | INSEE_COM == "29232" | 
                     INSEE_COM == "31555" | INSEE_COM == "14118" | INSEE_COM == "81004" | INSEE_COM == "38185" | INSEE_COM == "17300" | 
                     INSEE_COM == "42218" | INSEE_COM == "59606" | INSEE_COM == "34032" | INSEE_COM == "59350" | INSEE_COM == "34172" |  
                     INSEE_COM == "54395" | INSEE_COM == "33063" | INSEE_COM == "06088" | INSEE_COM == "67482" | INSEE_COM == "35238" |
                     CODE_DEPT== "75" | # Paris
                     INSEE_COM == "69381" | INSEE_COM == "69382" | INSEE_COM == "69383" | INSEE_COM == "69384" | INSEE_COM == "69385" | 
                     INSEE_COM == "69386" | INSEE_COM == "69387" | INSEE_COM == "69388" | INSEE_COM == "69389" | # Lyon
                     INSEE_COM == "13201" | INSEE_COM == "13202" | INSEE_COM == "13203" | INSEE_COM == "13204" | INSEE_COM == "13205" |
                     INSEE_COM == "13206" | INSEE_COM == "13207" | INSEE_COM == "13208" | INSEE_COM == "13209" | INSEE_COM == "13210" |
                     INSEE_COM == "13211" | INSEE_COM == "13212" | INSEE_COM == "13213" | INSEE_COM == "13214" | INSEE_COM == "13215" |
                     INSEE_COM == "13216", # Marseille
                      c("oui"), c("non")))

## Création de la variable "ZONAGE" (appartenance des communes au zonage 'residential area')
# Trois modalités : 
# 3 : commune appartenant à la ville centre de l'EMD
# 2 : commune appartenant à un pôle urbain (petit, moyen, grand)
# 1 : commune appartenant à la couronne des pôles urbains ou multipolarisée ou isolée

sfCom <- sfCom %>% 
  mutate(ZONAGE_COM = ifelse(VC == "oui", c("3"),
                    ifelse(VC == "non" & CATAEU2010 == "111" | CATAEU2010 == "211" | CATAEU2010 == "221", c("2"),
                      ifelse(VC == "non" & CATAEU2010 == "112" | CATAEU2010 == "120" | CATAEU2010 == "212" | CATAEU2010 == "222" | 
                               CATAEU2010 == "300" | CATAEU2010 == "400", c("1"), c("0")))))

## Nettoyage de la table
sfCom <- select(sfCom, INSEE_COM, NOM_COM, STATUT, CODE_DEPT, LIBGEO, CATAEU2010, VC, ZONAGE_COM, geometry)




# 2. Reporter les attributs des communes sur la couche des secteurs

## Chargement de la couche des ED (23 ED - fev. 2019)
sfSec <- st_read("scriptsr/shp/SEC_23ED_L93.shp", stringsAsFactors = F) %>%   
  st_transform(crs = 2154)
# st_simplify(sfSec)
sfSec <- st_read("scriptsr/shp/SEC_MONTPELLIER_L93.shp", stringsAsFactors = F) %>%   
  st_transform(crs = 2154)

## Ajout d'un id unique par secteur
sfSec$idsec <- str_c(sfSec$enquete, "_", sfSec$Secteur_EM)

## Tester la validité topologique des polygones et rendre valide les polygones invalides 
st_is_valid(sfSec)
st_is_valid(sfSec[1000:1588,])
sfSec <- st_make_valid(sfSec)
st_is_valid(sfSec[1000:1588,])

### 1. Sélection des communes dont le centroïde se trouve dans les secteurs
#### Calculer les centroides des communes 
sfCentroCom <- st_point_on_surface(sfCom)
sfCentroCom <- sfCentroCom[sfSec, , op = st_intersects]

#### joindre les attributs des deux couches (attention un seul secteur sélectionné par ville centre)
sfComSec <- st_intersection(sfSec, sfCentroCom)

#### Supprimer l'unique secteur intersecté dans chaque ville centre (sauf arrondissements parisiens)
sfComSec <- filter(sfComSec, VC == "non" | CODE_DEPT == "75")
#### Contrôle visuel
mapview(sfComSec)

### 2. Sélection des secteurs dont le centroïde se trouve dans les communes
#### Calculer les centroïdes des secteurs 
sfCentroSec <- st_point_on_surface(sfSec)
sfCentroSec <- sfCentroSec[sfCom, , op = st_intersects]

#### Joindre les attributs des deux couches
sfSecCom <- st_intersection(sfCentroSec, sfCom)
#### Contrôle visuel
mapview(sfSecCom)

### 3. Assemblage des deux sélections
#### Sélection des secteurs qui ne sont pas en doublon dans la 1ere sélection (sfComSec)
sfSecComND <- anti_join(sfSecCom, as_tibble(sfComSec), by = "idsec")
#### Contrôle visuel
mapview(sfSecComND)

#### Combiner en ligne
sfSecComAll <- rbind(sfComSec, sfSecComND)
#### Contrôle visuel
mapview(sfSecComAll)

#### Sauvegarde de la couche de points des secteurs d'appartenance des communes
# st_write(sfSecComAll, "scriptsr/shp/secComPt_montpel.shp", delete_layer = T)



# 3. Création de la couche des communes d'appartenance des secteurs (23 ED)
comED <- as.data.frame(select(sfSecComAll, INSEE_COM, enquete))
comED$geometry <- NULL
comED <- comED[!duplicated(comED), ]
com_montpel <- right_join(sfCom, comED, by = "INSEE_COM")
## Contrôle visuel
mapview(com_montpel)

## Sauvegarde de la couche des communes 
# st_write(com_montpel, "scriptsr/shp/com_montpel.shp", delete_layer = T)



########################### INTERLUDE ##################################  


# Vérifier si secteur manquant 

idsecSelec <- length(unique(sfSecComAll$idsec))
idsec <- length(unique(sfSec$idsec))


# vérification du nombre de communes (géo 2015) par enquête (cf. pdf Carte ED cerema)

verif <- function(libEd){
  x <- filter(sfSecComAll, enquete == libEd) 
  nbCom <- length(unique(x$INSEE_COM))
  return(nbCom)
}

verif("MONTPELLIER")


# vérification de la concordance des COG de la BU et de sf 

# Chargement de la BU du mobiliscope
load("data/BD_mobiliscope_pers.RDS")

verifB <- function(libEd){
  x <- filter(indTable, LIB_ED == libEd)
  cogBu <- sort(unique(x$RES_COG))
  nbCog <- length(unique(x$RES_COG))
  print(cogBu)
  print(nbCog)
  y <- filter(sfSecComAll, enquete == libEd)
  cogsf <- sort(unique(as.character(y$INSEE_COM)))
  nbCog2 <- length(unique(y$INSEE_COM))
  print(cogsf)
  print(nbCog2)
}


verifB("MONTPELLIER")


rm(idsec, idsecSelec, verif, verifB)

######################################################################################


# 3. Construction du zonage au niveau des secteurs

# Principes :
# 3: Secteur de la ville centre : secteurs dont plus de la moitié des communes sont classées 3 au 'ZONAGE_COM' 
# 2: Secteur d'un pôle urbain (petit, moyen, grand) : secteurs dont la moitié ou plus de la moitié des communes sont classées 2 au 'ZONAGE_COM'
# 1: Secteur appartenant à la couronne des pôles urbains / multipolarisé / isolée : secteurs dont plus de la moitié des communes sont classées 1 au 'ZONAGE_COM'

## Compter le nombre de communes par secteur
dfSecComAll <- sfSecComAll %>% st_set_geometry(NULL)
dfSecComAll_GRP <- group_by(.data = dfSecComAll, idsec)
nbCom <- as.data.frame(summarise(dfSecComAll_GRP, nbCom = n()))
dfSecComAll_GRP <- left_join(x = dfSecComAll_GRP, y = nbCom, by = "idsec")

## Compter le nombre de communes par zonage et par secteur
### zone 3
dfSecComAllZ3 <- filter(dfSecComAll_GRP, ZONAGE_COM == "3")
nbComZ3 <-  as.data.frame(summarise(dfSecComAllZ3, nbComZ3 = n()))
dfSecComAll_GRP <- left_join(dfSecComAll_GRP, nbComZ3, by = "idsec")
### Zone 2
dfSecComAllZ2 <- filter(dfSecComAll_GRP, ZONAGE_COM == "2") 
nbComZ2 <- as.data.frame(summarise(dfSecComAllZ2, nbComZ2 = n()))
dfSecComAll_GRP <- left_join(dfSecComAll_GRP, nbComZ2, by = "idsec")
### zone 1
dfSecComAllZ1 <- filter(dfSecComAll_GRP, ZONAGE_COM == "1")
nbComZ1 <- as.data.frame(summarise(dfSecComAllZ1, nbComZ1 = n()))
dfSecComAll_GRP <- left_join(dfSecComAll_GRP, nbComZ1, by = "idsec")

rm(nbCom, nbComZ1, nbComZ2, nbComZ3, dfSecComAllZ1, dfSecComAllZ2, dfSecComAllZ3, dfSecComAll)

## Création de la variable 'ZONAGE'
dfSecComAll_GRP <- dfSecComAll_GRP %>% 
  mutate(ZONAGE_SEC = case_when(as.numeric(nbComZ3) > ((nbCom * 50) / 100) ~ 3,
                                as.numeric(nbComZ2) >= ((nbCom * 50) / 100) ~ 2,
                                as.numeric(nbComZ1) > ((nbCom * 50) / 100) ~ 1,
                                TRUE ~ 0))

zonage <- select(dfSecComAll_GRP, idsec, ZONAGE_SEC)
zonage <- zonage[!duplicated(zonage), ]

## Jointure de la nouvelle variable à la couche des secteurs
sfSecZonage <- left_join(sfSec, zonage, by = "idsec")

## Vérif visuelle
library(RColorBrewer)
par(mar = c(0,0,0,0))
display.brewer.all()
par(mar = c(0,0,0,0))
plot(sfSecZonage["ZONAGE_SEC"], pal = brewer.pal(3,"Set1"), border = F)




# 4. Sauvegarde

# write.csv2(zonage, "scriptsr/txt/correspondance_SEC_ZONAGE.csv", row.names = F)
# st_write(sfSecZonage, "scriptsr/shp/SEC_23ED_ZONAGE.shp", delete_layer = T)



















