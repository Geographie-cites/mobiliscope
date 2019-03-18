# ================================================================================#
#                  Liste des communes d'appartenance aux secteurs
#                          pour le search du Mobiliscope
# 
# jan 2019 - AD
# ================================================================================#


# Biblio
library(sf)
library(dplyr)
library(stringr)
library(jsonlite)


# Ce script a été écrit pour l'ensemble des ED mais il peut être reproduit 
# à partir de la couche "com_montpel.shp" à créer dans "2b_zonage_residentialArea.R"
com23ED <- st_read("scriptsr/shp/com23ED.shp", stringsAsFactors = F)
com23ED <- com23ED %>% 
  select(INSEE_COM, NOM_COM, LIBGEO, CODE_DEPT, enquete) %>% 
  st_set_geometry(NULL)
com23ED <- com23ED %>%  
  transmute(cog = INSEE_COM, name_up = NOM_COM, name = LIBGEO, dep = CODE_DEPT,
         id = plyr::mapvalues(enquete, c("ALBI", "ANGERS", "ANGOULEME", "BEZIERS", "BORDEAUX", "CAEN",
                                        "CLERMONT FERRAND", "GRENOBLE", "IDF", "LA ROCHELLE", "LILLE", "LYON",
                                        "MARSEILLE", "MONTPELLIER", "NANCY", "NANTES", "NICE", "QUIMPER",
                                        "SAINT ETIENNE", "STRASBOURG", "TOULOUSE", "VALENCIENNES", "RENNES"),
                                       c("albi", "angers", "angouleme", "beziers", "bordeaux", "caen",
                                         "clermont-ferrand", "grenoble", "idf", "la-rochelle", "lille", "lyon",
                                         "marseille", "montpellier", "nancy", "nantes", "nice", "quimper",
                                         "saint-etienne", "strasbourg", "toulouse", "valenciennes", "rennes"))) 

## Cas des communes à arrondissements
com23ED <- com23ED %>% 
  filter(is.na(name) !=T) %>% 
  rbind(data.frame(cog = c("75000", "13000", "69000"),
                   name_up = c("PARIS", "MARSEILLE", "LYON"), 
                   name = c("Paris", "Marseille", "Lyon"), 
                   dep = c("75", "13", "69"), 
                   id = c("idf", "marseille", "lyon")))

## name up : maj sans accent et sans tiret
com23ED <- com23ED %>% 
  mutate(name_up = str_replace_all(com23ED$name_up, c("-"=" ", "-"=" ", "-"=" ", "-"=" ")))

## Cas des communes homonymes
### detection
comdupli <- com23ED %>% 
  mutate(doublon = duplicated(com23ED$name)) %>% 
  filter(doublon == T)
comdoublon <- com23ED %>% 
  left_join(select(comdupli, name_up, dep, doublon), by = "name_up") %>% 
  filter(doublon == T)
comdoublon <- comdoublon %>% 
  mutate(dep.x = str_c("(", dep.x, ")", sep =""),
         name1 = str_c(name_up, dep.x, sep = " "),
         name2 = str_c(name, dep.x, sep = " "))
comdoublon <- comdoublon[!duplicated(comdoublon[ , which(names(comdoublon) == "cog")]), ]
### join
com23ED <- left_join(com23ED, select(comdoublon, cog, name1, name2), by = "cog")
com23ED <- com23ED %>% 
  mutate(name = ifelse(!is.na(name2), name2, name)) %>% 
  select(name_up, name, id)

# # sauvegarde
# write.csv2(com23ED, "scriptsr/txt/listCom.csv", row.names = F)
# write_json(com23ED, "www/cities/cities_list.json")

                   

         
