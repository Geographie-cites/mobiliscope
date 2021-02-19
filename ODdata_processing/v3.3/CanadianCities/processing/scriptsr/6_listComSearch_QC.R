#####========================== Liste des communes d'appartenance aux secteurs ===========================######
#####==============pour le search du Mobiliscope- adapt? pour les villes du Qu?bec (janvier 2020 - EV) ===######



# Biblio
library(sf)
library(dplyr)
library(stringr)
library(jsonlite)



# Créa fichier liste communes
com23ED <- st_read("2-prepa_data/shp/com23ED_2019.shp", stringsAsFactors = F)
com23ED <- com23ED %>% 
  select(INSEE_COM, NOM_COM, LIBGEO, CODE_DEPT, enquete) %>% 
  st_set_geometry(NULL)
com23ED <- com23ED %>%  
  transmute(cog = INSEE_COM, name_up = NOM_COM, name = LIBGEO, dep = CODE_DEPT,
         id = plyr::mapvalues(enquete, c("ALBI", "ANGERS", "ANGOULEME", "BEZIERS", "BORDEAUX", "CAEN",
                                        "CLERMONT FERRAND", "GRENOBLE", "IDF", "LA ROCHELLE", "LILLE", "LYON",
                                        "MARSEILLE", "MONTPELLIER", "NANCY", "NANTES", "NIMES", "QUIMPER",
                                        "SAINT ETIENNE", "STRASBOURG", "TOULOUSE", "VALENCIENNES", "RENNES"),
                                       c("albi", "angers", "angouleme", "beziers", "bordeaux", "caen",
                                         "clermont-ferrand", "grenoble", "idf", "la-rochelle", "lille", "lyon",
                                         "marseille", "montpellier", "nancy", "nantes", "nimes", "quimper",
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

#ajout villes canadiennes
com6ED <- st_read("2-prepa_data/shp/municipalites_in_6OD.shp", stringsAsFactors = F)
com6ED <- com6ED %>% 
  select(MUS_NM_MUN, OD) %>% 
  st_set_geometry(NULL)

com6ED <- com6ED %>%  
  transmute(name_up = "", name = MUS_NM_MUN,
            id = plyr::mapvalues(OD, c("MONTREAL","QUEBEC","SAGUENAY","SHERBROOKE","OTTAWA-GATINEAU","TROIS-RIVIERES"),
                                 c("montreal","quebec", "saguenay","sherbrooke","ottawa-gatineau","trois-rivieres"))) 
com6ED <- com6ED %>% 
  mutate(name_up = str_replace_all(str_to_upper(com6ED$name), c("-"=" ", "-"=" ", "-"=" ", "-"=" ", "È"="E", "Î"="I","Â"="A","Ô"="O","É"="E")))

com6ED <- filter(com6ED, !(name_up %in% c("TNO AQUATIQUE DE LA MRC D'ARGENTEUIL", "TNO AQUATIQUE DE LA MRC DE BEAUHARNOIS SALABERRY",
         "TNO AQUATIQUE DE LA MRC DE BELLECHASSE", "TNO AQUATIQUE DE LA MRC DE L'ILE D'ORLEANS","TNO AQUATIQUE DE LA MRC DE MASKINONGE",
         "TNO AQUATIQUE DE LA MRC DE ROUSSILLON", "TNO AQUATIQUE DE LA MRC DU FJORD DU SAGUENAY")))


#ajout du pays
com23ED <- com23ED %>%
  mutate(name = paste(com23ED$name," (France)", sep = ""))

com6ED <- com6ED %>%
  mutate(name = paste(com6ED$name," (Canada)", sep = ""))




com29ED <- bind_rows(com23ED,com6ED)

write.csv2(com29ED, "2-prepa_data/txt/cities_list.csv", row.names = F)
write_json(com29ED, "2-prepa_data/txt/cities_list.json")

## Le fichier cities_list.json, si satisfaisant, est à copier dans le dossier dev C:\wamp64\www\mobiliscope\script

                

         
