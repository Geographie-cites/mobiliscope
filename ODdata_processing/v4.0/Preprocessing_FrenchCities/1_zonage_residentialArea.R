#===========================================================================#
#      Construction du zonage pour l'indicateur "residential area"
#
# juillet 2020 - AD
#===========================================================================#

# directory
setwd("")

# Chargement des bibliothèques
library(sf)
library(lwgeom)
library(dplyr)
library(tidylog)
library(stringr)
library(mapview)


# ==== 1. Création du zonage sur la couche des communes ====

# Chargement de la couche commune 
# Source : IGN, GEOFLA, décembre 2019 (=> codes INSEE 2019 utilisés par le CEREMA 
# pour la construction de la BU2020)
sfCom <- st_read("ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS/1_DONNEES_LIVRAISON_2019-01-18/ADE_2-0_SHP_LAMB93_FR/COMMUNE.shp")  %>%
  st_transform(crs = 2154)

## La réunion
sfCom_LR <- st_read("ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS/1_DONNEES_LIVRAISON_2019-01-18/ADE_2-0_SHP_RGR92UTM40S_D974/COMMUNE.shp") %>% 
  st_transform(crs = 2154)
## Martinique
sfCom_Marti <- st_read("ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS_2-0__SHP__FRA_2019-01-18/ADMIN-EXPRESS/1_DONNEES_LIVRAISON_2019-01-18/ADE_2-0_SHP_UTM20W84MART_D972/COMMUNE.shp") %>% 
  st_transform(crs = 2154)


sfCom <- rbind(sfCom, sfCom_LR, sfCom_Marti)

rm(sfCom_LR, sfCom_Marti)


# Chargement de la table d'appartenance géographique des communes au 1er janvier 2019 
# Source : INSEE, code officiel géographique, janvier 2019
AU2010 <- read.csv2("txt/AU2010_GEO2019.csv",
                    encoding = "UTF-8", colClasses = c(rep("character", 3)))

## Jointure de la couche des communes à la table des ZAU
sfCom <- left_join(sfCom, AU2010, by = "INSEE_COM")


# Création de la variable "VC" (ville centre de l'EMD ? oui/non)
# Attention aux arrondissements de Paris, Lyon et Marseille -> à supprimer de sfCom
IDM4 <- read.csv2("txt/correspondance_IDM4.csv", 
                  encoding = "UTF-8", colClasses = c(CODE_INSEE_VC = "character"))

IDM4 <- IDM4 %>% 
  filter(ENQUETE_MIN %in% c("Tours", "Poitiers", "Besançon", "Saint-Denis", "Rouen", 
                            "Brest", "Metz", "Alençon", "Annemasse", "Annecy", 
                            "Dunkerque", "Dijon", "Creil", "Cherbourg", "Carcassonne", 
                            "Niort", "Bayonne",               ## 17 new ed
                            "Valenciennes",                   ## Valenciennes 2019
                            "Amiens", "Douai", "Fort-de-France", "Saint-Brieuc", "Valence", ## 5 from Adisp
                            "Longwy", "Thionville", ## add 2 
                            "Le Havre", ## add 1
                            "Nice", "Lyon", "Marseille", "Nantes", "Albi",
                            "Grenoble", "Bordeaux", "Montpellier", "Toulouse", "Strasbourg", 
                            "Nancy", "Rennes", "Caen", "Saint-Étienne", "Lille", 
                            "Clermont-Ferrand", "Nîmes", "Béziers", "Quimper", "Angers", 
                            "La Rochelle", "Angoulême", "Paris")) %>%    ## 23 ed  
  mutate(CODE_INSEE_VC = case_when(NOM_VC == "La Réunion" ~ "97411",
                                 TRUE ~ CODE_INSEE_VC))


cogVC <- IDM4$CODE_INSEE_VC

arrVC <- c("69381", "69382", "69383", "69384", "69385",
           "69386", "69387", "69388","69389",  # Lyon
           "13201", "13202", "13203", "13204", "13205",
           "13206", "13207", "13208", "13209", "13210",
           "13211", "13212", "13213", "13214", "13215",
           "13216", # Marseille
            "75101", "75102", "75103", "75104", "75105",
            "75106", "75107", "75108", "75109", "75110",
            "75111", "75112", "75113", "75114", "75115",
            "75116", "75117", "75118", "75119", "75120") # Paris

sfCom <- sfCom %>% 
  mutate(VC = case_when(INSEE_COM %in% cogVC ~ "oui",
                        TRUE ~ "non")) %>% 
  filter(!INSEE_COM %in% arrVC)


# Création de la variable "ZONAGE" (appartenance des communes au zonage 'residential area')
# Trois modalités : 
# 3 : commune appartenant à la ville centre de l'EMD
# 2 : commune appartenant à un pôle urbain (petit, moyen, grand)
# 1 : commune appartenant à la couronne des pôles urbains ou multipolarisée ou isolée

sfCom <- sfCom %>% 
  mutate(ZONAGE_COM = case_when(VC == "oui" ~ "3",
                                VC == "non" & CATAEU2010 == "111" | CATAEU2010 == "211" | 
                                  CATAEU2010 == "221" ~ "2",
                                VC == "non" & CATAEU2010 == "112" | CATAEU2010 == "120" | 
                                  CATAEU2010 == "212" | CATAEU2010 == "222" | 
                                  CATAEU2010 == "300" | CATAEU2010 == "400" ~ "1",
                                TRUE ~ "0"))


## Selection variables utiles
sfCom <- select(sfCom, INSEE_COM, NOM_COM, STATUT, INSEE_DEP, LIBGEO,
                CATAEU2010, VC, ZONAGE_COM)

rm(AU2010, IDM4)



# ==== 2. Reporter les attributs des communes sur la couche des secteurs ====

# Chargement de la couche des ED 
sfSec <- st_read("SEC_50ED_W84.shp") 
sfSec <- sfSec %>% st_transform(crs = 2154)

## Tester la validité topologique des polygones et rendre valide les polygones invalides 
sum(st_is_valid(sfSec)==FALSE)
#sum(st_is_valid(sfCom)==FALSE)



# ----~ 2.1. Sélection des communes dont le centroïde se trouve dans les secteurs ----

# Calculer les centroides des communes 
sfCentroCom <- st_point_on_surface(sfCom)
sfCentroCom <- sfCentroCom[sfSec, , op = st_intersects]

## joindre les attributs des deux couches 
## (attention un seul secteur sélectionné par ville centre)
sfCentroCom <- st_intersection(sfCentroCom, sfSec)
## Supprimer l'unique secteur intersecté dans chaque ville centre 
sfCentroCom <- filter(sfCentroCom, VC == "non")
## Contrôle visuel
mapview(sfSec, viewer.suppress = mapviewGetOption("viewer.suppress")) +
  mapview(sfCentroCom, viewer.suppress = mapviewGetOption("viewer.suppress"))


# ----~ 2.2. Sélection des secteurs dont le centroïde se trouve dans les communes ----

# Calculer les centroïdes des secteurs 
sfCentroSec <- st_point_on_surface(sfSec)
sfCentroSec <- sfCentroSec[sfCom, , op = st_intersects] # manque 2 secteurs

## Joindre les attributs des deux couches
sfCentroSec <- st_intersection(sfCentroSec, sfCom)

## Contrôle visuel
# mapview(sfCom, viewer.suppress = mapviewGetOption("viewer.suppress")) +
#   mapview(sfCentroSec, viewer.suppress = mapviewGetOption("viewer.suppress"))


# ----~ 2.3. Assemblage des deux sélections ----

# Sélection des secteurs qui ne sont pas en doublon dans la 1ere sélection (sfCentroCom)
sfCentroSecND <- anti_join(sfCentroSec, as_tibble(sfCentroCom), by = "ID_SEC")
## Contrôle visuel
mapview(sfCentroSecND, viewer.suppress = mapviewGetOption("viewer.suppress"))

# Combiner en ligne
sfCentroAll <- rbind(sfCentroCom, sfCentroSecND)
## Contrôle visuel
mapview(sfCentroAll, viewer.suppress = mapviewGetOption("viewer.suppress")) +
  mapview(sfSec, viewer.suppress = mapviewGetOption("viewer.suppress"))

# table d'appartenance des communes 
corresp_com_sec <- sfCentroAll %>% 
  select(-LENGTH, -AREA, -X_W84, -Y_W84) %>% 
  st_drop_geometry()


# Vérifier si secteur manquant - A CORRIGER A LA MAIN
length(unique(corresp_com_sec$ID_SEC)) # 2 secteurs manquants
length(unique(sfSec$ID_SEC))

bibi <- unique(corresp_com_sec$ID_SEC)
lulu <- unique(sfSec$ID_SEC)

setdiff(lulu, bibi)  #  "MARTINIQUE_2014_017" "NICE_2009_005" 

mapview(sfCom %>% filter(NOM_COM %in% c("Nice", "Le Lamentin")), viewer.suppress = mapviewGetOption("viewer.suppress")) +
  mapview(sfSec %>% filter(ID_SEC %in% setdiff(lulu, bibi)), viewer.suppress = mapviewGetOption("viewer.suppress")) +
    mapview(st_point_on_surface(sfSec) %>% filter(ID_SEC %in% setdiff(lulu, bibi)), viewer.suppress = mapviewGetOption("viewer.suppress"))
  
# centroïde de ces deux secteurs dans l'eau !


## Add Nice et Le Lamentin
com2add <- sfCom %>% filter(NOM_COM %in% c("Nice", "Le Lamentin")) %>% st_drop_geometry()
sec2add <- sfSec %>% filter(ID_SEC %in% c("NICE_2009_005", "MARTINIQUE_2014_017")) %>% 
  select(-LENGTH, -AREA, -X_W84, -Y_W84) %>% 
  st_drop_geometry() %>% 
  arrange(CODE_SEC)

corresp2add <- cbind(com2add, sec2add)

corresp_com_sec <- rbind(corresp_com_sec, corresp2add)
length(unique(corresp_com_sec$ID_SEC))

rm(bibi, lulu, com2add, sec2add, corresp2add)

## Sauvegarde des communes avec leurs secteurs d'appartenance
write.csv2(corresp_com_sec, "txt/correspondance_com2019_sec.csv", row.names = FALSE, fileEncoding = "UTF-8")

rm(sfCentroCom, sfCentroSec, sfCentroAll, sfCentroSecND)


# ==== 2.3. Création de la couche des communes avec leur secteur d'appartenance (50 ED) ====
comED <- corresp_com_sec %>% 
  select(INSEE_COM, LIB_ED) 
comED <- comED[!duplicated(comED), ]
com50ED <- right_join(sfCom, comED, by = "INSEE_COM")

length(unique(com50ED$LIB_ED))

## Contrôle visuel
# mapview(com48ED, viewer.suppress = mapviewGetOption("viewer.suppress"))

## Sauvegarde de la couche des communes 
st_write(com50ED, "shp/com/com50ED.shp", delete_layer = TRUE,
         layer_options = "ENCODING=UTF-8")

rm(comED)



# ==== 3. Construction du zonage au niveau des secteurs ====

# Principes :
# 3: Secteur de la ville centre : secteurs dont plus de la moitié des communes sont classées 3 au 'ZONAGE_COM' 
# 2: Secteur d'un pôle urbain (petit, moyen, grand) : secteurs dont la moitié ou plus de la moitié des communes sont classées 2 au 'ZONAGE_COM'
# 1: Secteur appartenant à la couronne des pôles urbains / multipolarisé / isolé : secteurs dont plus de la moitié des communes sont classées 1 au 'ZONAGE_COM'

## Compter le nombre de communes par secteur
corresp_com_sec <- corresp_com_sec %>% 
  group_by(ID_SEC) %>% 
  mutate(nbCom = n())

#table(corresp_com_sec$ZONAGE_COM)
## Compter le nombre de communes par zonage et par secteur
### zone 3
nbComZ3 <- corresp_com_sec %>% 
  filter(ZONAGE_COM == "3") %>% 
  summarise(nbComZ3 = n()) 
### Zone 2
nbComZ2 <- corresp_com_sec %>% 
  filter(ZONAGE_COM == "2") %>% 
  summarise(nbComZ2 = n())
### zone 1
nbComZ1 <- corresp_com_sec %>% 
  filter(ZONAGE_COM == "1") %>% 
  summarise(nbComZ1 = n())

### join
corresp_com_sec <- corresp_com_sec %>% 
  left_join(., nbComZ3) %>% 
  left_join(. ,nbComZ2) %>% 
  left_join(., nbComZ1)

rm(nbComZ1, nbComZ2, nbComZ3)

## Création de la variable 'ZONAGE'
corresp_com_sec <- corresp_com_sec %>% 
  mutate(ZONAGE_SEC = case_when(nbComZ3 > ((nbCom * 50) / 100) ~ 3,
                                nbComZ2 >= ((nbCom * 50) / 100) ~ 2,
                                nbComZ1 > ((nbCom * 50) / 100) ~ 1,
                                TRUE ~ 0))

# création de la table zonage
zonage <- corresp_com_sec %>% 
  select(., ID_SEC, ZONAGE_SEC) %>% 
  filter(!duplicated(ID_SEC))

length(unique(zonage$ID_SEC))


## Jointure de la nouvelle variable à la couche des secteurs
sfSec <- left_join(sfSec, zonage, by = "ID_SEC")


## Vérif visuelle
library(RColorBrewer)
#display.brewer.all()

par(mar = c(0,0,0,0))

test <- filter(sfSec, ENQUETE == "LE HAVRE")
plot(test["ZONAGE_SEC"], pal = brewer.pal(3,"Set1"))


mapview(sfSec %>% filter(ENQUETE == "LONGWY"), viewer.suppress = mapviewGetOption("viewer.suppress"))

# 4. Sauvegarde
write.csv2(zonage, "txt/correspondance_SEC_ZONAGE_2019.csv", row.names = FALSE)









