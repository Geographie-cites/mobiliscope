# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope v4-2
#                                      fonctions 
# ================================================================================#

# library
library(stringr)
library(dplyr)
library(tidyr)
library(purrr)
library(sf)
library(geojsonio)
library(geojsonsf)
library(jsonlite)
library(OasisR) # Duncan
library(spdep) # Moran
library(readxl)


#==== GLOBAL FUNCTIONS ====


## 0. Création menu.json ----
menuJson <- function(cheminIn, nomEnq, ctry, cheminOut){
  
  # choix de l'onglet selon l'enquête
  if(ctry=="FR" & !nomEnq %in% c("idf", "besancon", "carcassonne", "annecy")){
    sheet <- "FR"
  }
  if(nomEnq=="idf"){
    sheet <- "IDF"
  }
  if(nomEnq %in% c("besancon", "carcassonne")){
    sheet <- "BECA"
  }
  if(nomEnq=="annecy"){
    sheet <- "ANNECY"
  }
  if(ctry=="CA"){
    sheet <- "CA"
  }
  if(nomEnq=="bogota"){
    sheet <- "CO"
  }
  if(nomEnq=="santiago"){
    sheet <- "CL"
  }
  if(nomEnq=="sao-paulo"){
    sheet <- "BR"
  }
  
  
  # ouverture du fichier
  dico <- read_excel(paste0(cheminIn, "/ressources/dictionnaire_menu.xlsx"), sheet = sheet)

  
  # ordre voulu des niveaux 1 :
  dico <- dico %>% 
    mutate(GROUPINDIC = factor(GROUPINDIC,
                               levels = c("global", "profilDemo",
                                          "profilSocial", "profilResid",
                                          "activiteTransport")))
  
  # construction des imbrications de niveaux
  j <- dico %>% 
    group_by(GROUPINDIC, LIB_INDIC, INDICATEUR) %>% 
    nest() %>% 
    tibble(
      json3 = map(data, 
                  ~paste0('{',
                          paste0('"label":', .x$LIB_MOD, ','),
                          paste0('"modalite":"', .x$MODALITE, '",'),
                          paste0('"color":', .x$COL, ','),
                          paste0('"mode_de_representation":', .x$mode_R),
                          '}'
                  )
      ),
      json2 = paste0('{',
                     paste0('"label":', LIB_INDIC, ','),
                     paste0('"indicateur":"', INDICATEUR, '",'), 
                     '"niv3" : [',
                     map_chr(json3, ~paste(., collapse = ", ")),
                     ']',
                     '}'
      )
      
    ) %>% 
    select(-data, -LIB_INDIC, -INDICATEUR, -json3) %>% 
    unnest(cols = c(GROUPINDIC, json2)) %>% 
    group_by(GROUPINDIC) %>% 
    mutate(
      jsonN2 = paste0('"niv2" : [',
                      map_chr(list(json2), ~paste(., collapse = ", ")),
                      ']')
    ) %>% 
    summarise(json1 = paste0('"label":"', GROUPINDIC, '", ', jsonN2)) %>% 
    mutate(a = "a") %>% 
    group_by(a) %>% 
    summarise(json = paste0('{', json1, '}'))
  
  json <- paste0(
    '{',
    '"niv1" :',
    '[',
    map_chr(list(unique(j$json)), ~paste(., collapse = ",")),
    ']',
    '}'
  )
  
  # Indentation pour des yeux humains
  json <- as.character(prettify(json, indent = 4))
  
  # write table UTF8
  write.table(json,
              paste0(cheminOut, "/menu.json"),
              row.names = FALSE, col.names = FALSE, quote = FALSE,
              fileEncoding = "UTF-8")
  
  
  return(dico)
  
}

# 0. Création paramgeom.js
paramgeom <- function(nomEnq, cheminIn, cheminOut){
  
  # Paramètres géométriques et cartographiques (dernière mise à jour : v4.1)
  data <- read_excel(paste0(cheminIn,"/ressources/paramgeom.xlsx"))
  data <- data %>% filter(cityKey == nomEnq)
  
  if(!is.na(data$myBounds)){
    
    varjs <- c("// Déclaration des variables géométriques propres à l'enquête observée",
               "",
               "// Source des données",
               paste0('var dataSource = "', data$dataSource, '";'),
               "",
               "// Centrer la projection leaflet sur la ville centre (load.js)",
               paste0("var setview = ", data$setview, ";"),
               "// Paramétrer les niveaux de zoom leaflet (load.js)",
               paste0("var zoom = ", data$zoom, ";"),
               paste0("var minZoom = ", data$minZoom, ";"),
               "",
               "// stocker max bounds",
               paste0("var myBounds = ", data$myBounds, ";"),
               "",
               "// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)",
               paste0("var nomCol = '", data$codeSec, "';"),
               paste0('var nameSec = "', data$nameSec, '";'),
               "",
               "// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)",
               paste0("var radiusRange = ", data$radiusRange, ";"),
               "",
               "// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)",
               paste0("var datasetProp = ", data$datasetProp, ","),
               paste0("datasetFlow = ", data$datasetFlow, ";"),
               "",
               "// Seuils des liens (carte et légende flow)",
               paste0("var sLink = ", data$sLink, ";"),
               "")
    
  }else{
    
    varjs <- c("// Déclaration des variables géométriques propres à l'enquête observée",
               "",
               "// Source des données",
               paste0('var dataSource = "', data$dataSource, '";'),
               "",
               "// Centrer la projection leaflet sur la ville centre (load.js)",
               paste0("var setview = ", data$setview, ";"),
               "// Paramétrer les niveaux de zoom leaflet (load.js)",
               paste0("var zoom = ", data$zoom, ";"),
               paste0("var minZoom = ", data$minZoom, ";"),
               "",
               "// stocker max bounds",
               paste0("var myBounds ;"),
               "",
               "// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)",
               paste0("var nomCol = '", data$codeSec, "';"),
               paste0('var nameSec = "', data$nameSec, '";'),
               "",
               "// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)",
               paste0("var radiusRange = ", data$radiusRange, ";"),
               "",
               "// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)",
               paste0("var datasetProp = ", data$datasetProp, ","),
               paste0("datasetFlow = ", data$datasetFlow, ";"),
               "",
               "// Seuils des liens (carte et légende flow)",
               paste0("var sLink = ", data$sLink, ";"),
               "")
    
  }
  
  write.table(varjs, 
              paste0(cheminOut, "/paramgeom.js"),
              sep="\t", row.names = FALSE, col.names = FALSE, quote = FALSE,
              fileEncoding = "UTF-8")
  
  return(varjs)
  
}


# 1. Indicateur POPULATION GLOBALE ----
createPopFiles <- function(nomEnq, prez_long, sfSec, cheminOut){
  
  # 1a. CONSTRUCTION DES DONNEES POUR la carte en cercle proportionnelle - pop0_prop : 
  # nombre estimé de personnes présentes par secteur et par heure
  
  ## Comptage des présences par secteur et par heure : 
  ## POPULATION PRESENTE (STOCK PONDERE)
  pvs <- prez_long %>% 
    group_by(HOUR, CODE_SEC) %>% 
    summarise(popSec = round(sum(W_IND, na.rm = TRUE),2),
              popSecB = length(ID_IND),
              .groups = "keep") %>% 
    ungroup() %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Préparation de la table à joindre au geojson
  dataShpProp <- pvs %>% 
    select(HOUR, CODE_SEC, popSec) %>% 
    pivot_wider(names_from = HOUR, 
                values_from = popSec, 
                names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC) %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0))
  
  ## Jointure 
  shpProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
  
  ### Export
  shpProp <- sf_geojson(shpProp)
  geojson_write(shpProp,
                file = paste0(cheminOut,"/geo/pop0_prop.geojson"),
                layer_options = "ENCODING=UTF-8")
  
  
  
  ## Préparation de la table pour le graphique simple 
  oldH <- unique(as.character(pvs$HOUR))
  newH <- c("4am", "5am", "6am", "7am", 
            "8am", "9am", "10am", "11am", 
            "12am", "1pm", "2pm", "3pm", 
            "4pm", "5pm", "6pm", "7pm", 
            "8pm", "9pm", "10pm", "11pm", 
            "12pm", "1am", "2am", "3am")
  
  
  # ===> mise en forme façon stacked
  ## sortie pour dossier stacked
  dfProp <- pvs %>% 
    select(-popSecB) %>% 
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC, pop0 = popSec) %>% 
    relocate(district, hour) %>% 
    select(-HOUR)
  
  ### Export
  write.csv(dfProp, 
            paste0(cheminOut, "/stacked/pop_prop_stacked.csv"), 
            row.names = FALSE)
  
  
  # 1b. CONSTRUCTION DES DONNEES POUR la carte de densité - pop0_choro : 
  # Densité de personnes (km2) présentes par secteur et par heure
  
  ### joindre la variable 'AREA' de la couche des secteurs à la table de présence et calcul
  options(scipen = 999)
  pvs2 <- pvs %>% 
    left_join(., select(sfSec, CODE_SEC = Secteur_EM, AREA), by = "CODE_SEC") %>% 
    select(-geometry) %>% 
    mutate(AREA_KM = AREA/1e6,
           dens = round(popSec/AREA_KM,2))
  
  ## Préparation de la table à joindre au geojson
  dataShpChoro <- pvs2 %>% 
    select(HOUR, CODE_SEC, dens) %>% 
    pivot_wider(names_from = HOUR, 
                values_from = dens, 
                names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC)
  
  ## Jointure avec le fichier shp
  shpChoro <- left_join(sfSec, dataShpChoro, by = "Secteur_EM")
  
  ### Export
  shpChoro <- sf_geojson(shpChoro)
  geojson_write(shpChoro,
                file = paste0(cheminOut,"/geo/pop0_choro.geojson"),
                layer_options = "ENCODING=UTF-8")
  
  # ===> mise en forme façon stacked
  ## sortie pour dossier stacked
  dfChoro <- pvs2 %>% 
    select(HOUR, CODE_SEC, dens) %>% 
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC, pop0 = dens) %>% 
    relocate(district, hour) %>% 
    select(-HOUR)
  
  ### Export
  write.csv(dfChoro, 
            paste0(cheminOut, "/stacked/pop_choro_stacked.csv"), 
            row.names = FALSE)
  
  
  # 1c. CONSTRUCTION DES DONNEES POUR LES CARTES EN OURSINS - pop0_flow : 
  # nombre estimé de personnes non résidentes par secteur et par heure + flux OD
  
  ## Calcul des flux OD (origine = secteur de résidence - RES_SEC, destination = secteur de présence - CODE_SEC)
  ## seuil de population brute = 6 individus par secteur (en deçà on ne diffuse pas l'info)
  flowdata <- prez_long %>% 
    select(ID_IND, W_IND, HOUR, CODE_SEC, RES_SEC) %>% 
    group_by(HOUR, CODE_SEC, RES_SEC) %>% 
    summarise(W_IND = round(sum(W_IND, na.rm = TRUE),2),
              n = length(ID_IND),
              .groups = "keep") %>% 
    ungroup() %>% 
    filter(CODE_SEC != RES_SEC & n >= 6) %>%   ### seuil sur les flux 
    select(-n) %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Export de flowdata
  if (nrow(flowdata)!=0){
    write.csv2(flowdata, 
               paste0(cheminOut, "/flowData/pop0_flow.csv"), 
               row.names = FALSE) 
  }
  
  
  ## data stock NR
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(HOUR, CODE_SEC) %>% 
    summarise(popSec = round(sum(W_IND, na.rm = TRUE),2),
              popSecB = length(ID_IND),
              .groups = "keep") %>%    
    ungroup() %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Préparation de la table à joindre au geojson  
  dataShpChoroNR <- pvs3 %>% 
    select(-popSecB) %>% 
    pivot_wider(names_from = HOUR, 
                values_from = popSec, 
                names_sort = TRUE,
                names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC) %>% 
    arrange(Secteur_EM)
  
  
  ## Jointure avec le geojson
  shpChoroNR <- left_join(sfSec, dataShpChoroNR, by = "Secteur_EM")
  
  ## Export
  shpChoroNR <- sf_geojson(shpChoroNR)
  geojson_write(shpChoroNR,
                file = paste0(cheminOut, "/geo/pop0_flow.geojson"),
                layer_options = "ENCODING=UTF-8")
  
  
  # ===> mise en forme façon stacked
  ## sortie pour dossier stacked
  uniqueHS <- pvs %>% select(HOUR, CODE_SEC)
  dfChoroNR <- pvs3 %>% 
    select(-popSecB) %>%
    right_join(uniqueHS, by = c("HOUR", "CODE_SEC")) %>%
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC, pop0 = popSec) %>% 
    relocate(district, hour) %>% 
    select(-HOUR) %>% 
    arrange(district, hour) %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0))
  
  
  ### Export
  write.csv(dfChoroNR, 
            paste0(cheminOut, "/stacked/pop_flow_stacked.csv"), 
            row.names = FALSE)
}

# 2. Autres indicateurs : ----

#~ calcul des pourcentages ----
calculPart <- function(dataStock){
  data.frame(dataStock[ , 1:3], apply(dataStock[ , 4:length(dataStock)], MARGIN = 2, 
                                      FUN = function(x){round((x * 100) / dataStock$popSec, 4)}))
}

#~ comptage des présences par heure/secteur et par modalités d'indicateur ----
prepPVS <- function(nomEnq, prez_long, nomIndic, nomVar, seuil){
  
  result <- list()
  
  ## Construction de la table de présence par secteur et par heure : STOCKS
  if(is.na(seuil)){
    pvs <- prez_long %>% 
      select(HOUR, CODE_SEC, W_IND, all_of(nomVar)) %>%
      mutate(nomVar = as.numeric(get(nomVar))) %>%
      filter(!is.na(nomVar)) %>% 
      filter(nomVar>0) %>% 
      arrange(nomVar) %>% 
      pivot_wider(id_cols = c(HOUR, CODE_SEC), 
                  names_from = nomVar, 
                  names_prefix = nomIndic,
                  names_sort = TRUE,
                  values_from = W_IND,
                  values_fn = sum) %>% 
      mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
      mutate_if(is.numeric, ~round(.,2)) %>% 
      group_by(HOUR, CODE_SEC) %>%  
      mutate(popSec = sum(c_across(where(is.numeric)))) %>% 
      relocate(popSec, .after = CODE_SEC) %>% 
      ungroup() %>% 
      arrange(CODE_SEC, HOUR)
  }
  
  
  ### Calcul avec application d'un seuil de répondants bruts
  if(!is.na(seuil)){
    pvs <- prez_long %>% 
      select(HOUR, CODE_SEC, W_IND, all_of(nomVar)) %>%
      mutate(nomVar = as.numeric(get(nomVar))) %>%
      filter(!is.na(nomVar)) %>% 
      filter(nomVar>0) %>% 
      arrange(nomVar) %>% 
      mutate(N_IND = 1) %>% 
      pivot_wider(id_cols = c(HOUR, CODE_SEC), 
                  names_from = nomVar, 
                  names_prefix = nomIndic,
                  names_sort = TRUE,
                  values_from = c(W_IND, N_IND),
                  values_fn = sum) %>% 
      mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
      mutate_if(is.numeric, ~round(.,2)) 
    
    # Application du filtre
    pvs <- pvs %>% 
      mutate(across(all_of(starts_with("W")), 
                    ~ case_when(get(str_replace(cur_column(), "W_IND", "N_IND")) < seuil &
                                  get(str_replace(cur_column(), "W_IND", "N_IND")) > 0 ~ NaN,
                                TRUE ~ .))) %>% 
      select(-c(starts_with("N_IND"))) %>% 
      rename_with(., ~ str_replace(., "W_IND_", ""), starts_with("W")) %>% 
      group_by(HOUR, CODE_SEC) %>%
      mutate(popSec = sum(c_across(where(is.numeric)), na.rm = TRUE)) %>%
      relocate(popSec, .after = CODE_SEC) %>%
      ungroup() %>%
      arrange(CODE_SEC, HOUR)
  }
  
  
  ## Construction de la table de présence par secteur et par heure : PARTS
  pvs2 <- calculPart(dataStock = pvs)
  
  ## Construction de la table de présence par secteur et par heure : 
  ## POPULATION NON RESIDENTE (STOCKS)
  if(is.na(seuil)){
    pvs3 <- prez_long %>%
      filter(CODE_SEC != RES_SEC) %>%
      select(HOUR, CODE_SEC, W_IND, all_of(nomVar)) %>%
      mutate(nomVar = as.numeric(get(nomVar))) %>%
      filter(!is.na(nomVar)) %>% 
      filter(nomVar>0) %>% 
      arrange(nomVar) %>% 
      pivot_wider(id_cols = c(HOUR, CODE_SEC), 
                  names_from = nomVar, 
                  names_prefix = nomIndic,
                  names_sort = TRUE,
                  values_from = W_IND,
                  values_fn = sum) %>% 
      mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
      mutate_if(is.numeric, ~round(.,2)) %>% 
      group_by(HOUR, CODE_SEC) %>%  
      mutate(popSec = sum(c_across(where(is.numeric)))) %>% 
      relocate(popSec, .after = CODE_SEC) %>% 
      ungroup() %>% 
      arrange(CODE_SEC, HOUR)
  }
  
  ### Calcul avec application d'un seuil de répondants bruts
  if(!is.na(seuil)){
    pvs3 <- prez_long %>% 
      filter(CODE_SEC != RES_SEC) %>%
      select(HOUR, CODE_SEC, W_IND, all_of(nomVar)) %>%
      mutate(nomVar = as.numeric(get(nomVar))) %>%
      filter(!is.na(nomVar)) %>% 
      filter(nomVar>0) %>% 
      arrange(nomVar) %>% 
      mutate(N_IND = 1) %>% 
      pivot_wider(id_cols = c(HOUR, CODE_SEC), 
                  names_from = nomVar, 
                  names_prefix = nomIndic,
                  names_sort = TRUE,
                  values_from = c(W_IND, N_IND),
                  values_fn = sum) %>% 
      mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
      mutate_if(is.numeric, ~round(.,2)) %>% 
      
      # Application du filtre
      pvs3 <- pvs3 %>% 
        mutate(across(all_of(starts_with("W")), 
                      ~ case_when(get(str_replace(cur_column(), "W_IND", "N_IND")) < seuil & 
                                    get(str_replace(cur_column(), "W_IND", "N_IND")) > 0 ~ NaN,
                                  TRUE ~ .))) %>% 
        select(-c(starts_with("N_IND"))) %>% 
        rename_with(., ~ str_replace(., "W_IND_", ""), starts_with("W")) %>% 
        group_by(HOUR, CODE_SEC) %>%
        mutate(popSec = sum(c_across(where(is.numeric)), na.rm = TRUE)) %>%
        relocate(popSec, .after = CODE_SEC) %>%
        ungroup() %>%
        arrange(CODE_SEC, HOUR)
      
  }
  
  if(nomVar=="MOTIF"){
    pvs3 <- pvs3 %>% mutate(act1 = 0)
  }
  
  
  result[["pvs"]] <- pvs
  result[["pvs2"]] <- pvs2
  result[["pvs3"]] <- pvs3
  result[["mod"]] <- as.numeric(str_sub(names(pvs)[4:length(pvs)], -1))
  result[["mod3"]] <- as.numeric(str_sub(names(pvs3)[4:length(pvs3)], -1))
  return(result)
  
  
}

#~ création des geojson et des csv pour le graphique stacked ----
createFiles <- function(nomIndic, nomVar, nomEnq, data, prez_long, sfSec, ctry, cheminOut){
  
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  if(nomIndic != "res"){
    pvs3 <- data[["pvs3"]]
  }
  
  # valeur des modalités
  mod <- data[["mod"]]
  mod3 <- data[["mod3"]]
  
  # GEOJSON
  # pour chaque modalité :
  for(m in mod){
    
    indic <- paste0(nomIndic, m)
    
    ## Préparation du tableau de données à joindre au geojson
    ## data stock
    dataShpProp <- pvs %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>%
      pivot_wider(names_from = HOUR, 
                  values_from = all_of(indic), 
                  names_sort = TRUE,
                  names_prefix = paste0(indic, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Jointure des données au fond de carte
    shpProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
    
    ### Export des données spatiales
    shpProp <- sf_geojson(shpProp)
    geojson_write(shpProp,
                  file = paste0(cheminOut, "/geo/", indic ,"_prop.geojson"),
                  layer_options = "ENCODING=UTF-8")
    
    
    ## data part
    dataShpChoro <- pvs2 %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>%
      pivot_wider(names_from = HOUR, 
                  values_from = all_of(indic), 
                  names_sort = TRUE,
                  names_prefix = paste0(indic, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Jointure des données au fond de carte
    shpChoro <- left_join(sfSec, dataShpChoro, by = "Secteur_EM")
    
    ### Export des données spatiales
    shpChoro <- sf_geojson(shpChoro)
    geojson_write(shpChoro,
                  file = paste0(cheminOut, "/geo/", indic ,"_choro.geojson"),
                  layer_options = "ENCODING=UTF-8")

  }  
  
  ## Création des données pour les cartes en oursins
  if(!nomIndic %in% c("res")){
    
    for(m in mod3){
      
      indic <- paste0(nomIndic, m)
      
      # Sauf à domicile
      if (!indic %in% c("act1")){
        
        ### Flowdata : csv des flux OD avec seuil à 6
        flowdata <- prez_long %>% 
          select(ID_IND, W_IND, HOUR, CODE_SEC, RES_SEC, all_of(nomVar)) %>%
          mutate(nomVar = as.numeric(get(nomVar))) %>% 
          filter(nomVar == m) %>% 
          group_by(HOUR, CODE_SEC, RES_SEC) %>% 
          summarise(W_IND = round(sum(W_IND, na.rm = TRUE),2),
                    n = length(ID_IND),
                    .groups = "keep") %>% 
          ungroup() %>% 
          filter(CODE_SEC != RES_SEC & n >= 6) %>% 
          select(-n) %>% 
          arrange(CODE_SEC, HOUR)
        
        
        ### data stock NR
        dataShpChoroNR <- pvs3 %>% 
          select(HOUR, CODE_SEC, all_of(indic)) %>%
          pivot_wider(names_from = HOUR, 
                      values_from = all_of(indic), 
                      names_sort = TRUE,
                      names_prefix = paste0(indic, "_")) %>% 
          rename(Secteur_EM = CODE_SEC) %>% 
          arrange(Secteur_EM) 
        
        
        ### Jointure des données au fond de carte
        shpChoroNR <- left_join(sfSec, dataShpChoroNR, by = "Secteur_EM")
        
        ### Export des données 
        shpChoroNR <- sf_geojson(shpChoroNR)
        geojson_write(shpChoroNR,
                      file = paste0(cheminOut, "/geo/", indic ,"_flow.geojson"),
                      layer_options = "ENCODING=UTF-8")
        if (nrow(flowdata)!=0){
          write.csv(flowdata, 
                    paste0(cheminOut, "/flowData/", indic ,"_flow.csv"), 
                    row.names = FALSE)
          
        }
        
      }
      
    }
    
  }  
  
  
  # CSV
  # Création des tables pour les graphiques empilés
  oldH <- unique(as.character(pvs$HOUR))
  newH <- c("4am", "5am", "6am", "7am",
            "8am", "9am", "10am", "11am",
            "12am", "1pm", "2pm", "3pm",
            "4pm", "5pm", "6pm", "7pm",
            "8pm", "9pm", "10pm", "11pm",
            "12pm", "1am", "2am", "3am")
  

  # 1. Cartes choro
  df <- pvs2 %>% 
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC) %>% 
    relocate(district, hour) %>% 
    select(-HOUR, -popSec)
  
  ## Export
  write.csv(df, paste0(cheminOut, "/stacked/", nomIndic, "_choro_stacked.csv"), 
            row.names = FALSE)
  
  
  # 2. Cartes Proportionnelles
  df <- pvs %>% 
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC) %>% 
    relocate(district, hour) %>% 
    select(-HOUR, -popSec)
  
  
  ## Export
  write.csv(df, 
            paste0(cheminOut, "/stacked/", nomIndic, "_prop_stacked.csv"), 
            row.names = FALSE)
  

  
  # 3. Cartes en oursins
  if(!nomIndic %in% c("res")){
    
    uniqueHS <- pvs %>% select(HOUR, CODE_SEC)
    
    df <- pvs3 %>% 
      right_join(uniqueHS, by = c("HOUR", "CODE_SEC")) %>%  # all secteur/heure même si pas de données
      mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
      rename(district = CODE_SEC) %>% 
      relocate(district, hour) %>% 
      select(-HOUR, -popSec) %>% 
      arrange(district, hour) %>% 
      mutate_if(is.numeric, ~replace(., is.na(.), 0))
    
    ## Export
    write.csv(df, 
              paste0(cheminOut, "/stacked/", nomIndic, "_flow_stacked.csv"), 
              row.names = FALSE)
      

  }
  
}  

#~ création des indices de ségrégation et csv ----
createISeg <- function(nomIndic, nomVar, nomEnq, ctry, data, sfSec, cheminOut){
  
  # sortie des mini tables de présences de l'indicateur
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  # valeur des modalités
  mod <- data[["mod"]]
  
  ## formalisation des heures
  Hlevels <- c("h4", "h5", "h6", "h7",
               "h8", "h9", "h10", "h11", 
               "h12", "h13", "h14", "h15", 
               "h16", "h17", "h18", "h19", 
               "h20", "h21", "h22", "h23", 
               "h24", "h25", "h26", "h27")
  
  newH <- c("4am", "5am", "6am", "7am", 
            "8am", "9am", "10am", "11am", 
            "12am", "1pm", "2pm", "3pm", 
            "4pm", "5pm", "6pm", "7pm", 
            "8pm", "9pm", "10pm", "11pm", 
            "12pm", "1am", "2am", "3am")
  
  
  # DUNCAN
  ## Init table
  duncan <- list()
  
  ## Calcul de l'indice pour chaque heure
  for (h in unique(pvs$HOUR)){
    
    duncan[[h]] <- as.data.frame(t(ISDuncan(pvs[pvs$HOUR == h , 4:length(pvs)])))
    
  }
  ## Compilation des résultats
  duncan <- bind_rows(duncan, .id = "hour")
  
  ## Mise en forme
  colnames(duncan)[2:length(duncan)] <- colnames(pvs[ , 4:length(pvs)])
  
  duncan <- duncan %>% 
    mutate(hour = factor(hour, levels = Hlevels),
           hour = newH) %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0)) 
  
  
  ## EXPORT sauf si NA partout 
  write.csv(duncan, 
            paste0(cheminOut, "/segreg/", nomIndic,"_Duncan.csv"), 
            row.names = FALSE)

  
  
  # MORAN
  
  ## projection 
  if (ctry == "FR") {
    if (!nomEnq %in% c("la-reunion", "martinique")) {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2154)
    }
    if (nomEnq == "la-reunion") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2975)
    }
    if (nomEnq == "martinique") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 5490)
    }
  }
  
  if (ctry == "CA") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 3978)
  }
  
  if (nomEnq == "bogota") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 21897) 
  }
  
  if (nomEnq == "sao-paulo") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 22523)
  }
  
  if (nomEnq == "santiago") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 32719)
  }
  
  
  ## Init table
  moran <- data.frame()
  
  for (h in unique(pvs2$HOUR)){
    
    # Filtrage heure 
    dataMoran <- pvs2 %>% 
      select(-popSec) %>% 
      filter(HOUR == h) %>%
      rename(Secteur_EM = CODE_SEC)
    
    # Joindre avec le shp
    dataMoran <- left_join(shpSectMoran, dataMoran, by = "Secteur_EM")

    # Calcul des paramètres
    nbSecteurs <- poly2nb(pl = dataMoran,
                          row.names = dataMoran$Secteur_EM,
                          snap = 50,
                          queen = TRUE)
    
    dataMoran <- dataMoran %>%
      st_drop_geometry()
    
    # Calcul de l'indice de Moran pour chaque modalité 
    for (n in colnames(pvs2[4:length(pvs2)])){
      
        result <- moran.mc(x = dataMoran[[n]],
                           listw = nb2listw(nbSecteurs), 
                           nsim=1000)
        
        moran <- rbind(moran, data.frame("hour" = h,
                                         "var" = n,
                                         "moran" = result$statistic))

    }
      
  } 
    
  ## EXPORT 

  ## Mise en forme
  moran <- moran %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
    mutate_if(is.numeric, ~round(., 4)) %>% 
    pivot_wider(names_from = var, values_from = moran) %>% 
    mutate(hour = factor(hour, levels = Hlevels)) %>% 
    mutate(hour = newH) 
  
  ## écriture
  write.csv(moran, 
            paste0(cheminOut, "/segreg/", nomIndic,"_Moran.csv"), 
            row.names = FALSE)

}  




#==== ALGO FUNCTION ====

##---- Fonction p2m : de la table de présence aux indicateurs du Mobiliscope ----
p2m <- function(nomEnq, cheminIn, cheminOut){
  
  # Création des répertoires de sortie 
  dir.create(paste0(cheminOut, "/"))
  dir.create(paste0(cheminOut, "/geo"))
  dir.create(paste0(cheminOut, "/flowData"))
  dir.create(paste0(cheminOut, "/stacked"))
  dir.create(paste0(cheminOut, "/segreg"))
  
  
  #~ 1. LOAD DATA ----
  
  # couche secteur
  sfSec <- st_read(paste0(cheminIn, "/BDgeo/v4-2/SEC_52ED_W84.shp"))
  sfSec <- sfSec %>% 
    mutate(ZONAGE_SEC = case_when(PAYS=="AS" ~ ZONAGE_SEC+3,
                                  TRUE ~ as.numeric(ZONAGE_SEC)),
           PAYS = case_when(ENQUETE=="BOGOTA" ~ "CO",
                            ENQUETE=="SAO PAULO" ~ "BR",
                            ENQUETE=="SANTIAGO" ~ "CL",
                            TRUE ~ PAYS),
           ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                               TRUE ~ ENQUETE),
           cityKey = reduce2(.x = " ", .y = "-", .init = tolower(ENQUETE), str_replace)) %>% 
    filter(cityKey == nomEnq) %>%
    rename(Secteur_EM = CODE_SEC, 
           CENTROID_X = X_W84, 
           CENTROID_Y = Y_W84,
           PERIM = ZONAGE_SEC) 
  

  # données de présence
  prez_long <- readRDS(paste0(cheminIn, "/BD_presence_utile/presence_utile_", nomEnq, ".RDS"))
  
  ### code pays de l'enquête
  prez_long <- prez_long %>% 
    mutate(PAYS = case_when(nomEnq=="bogota" ~ "CO",
                            nomEnq=="sao-paulo" ~ "BR",
                            nomEnq=="santiago" ~ "CL",
                            TRUE ~ PAYS))
  ctry <- unique(prez_long$PAYS)
  
  # seuil de répondants bruts en deçà duquel on ne diffuse pas l'info
  seuil <- NA
  
  # geojson vierge pour le téléchargement
  geojson_write(sfSec %>% select(ENQUETE, ANNEE, CODE_SEC = Secteur_EM, LIB),
                file = paste0(cheminOut, "/geo/secteurs.geojson"))
  
  
  # création du json pour le menu accordéon + appel dico des variables
  dico <- menuJson(cheminIn, nomEnq, ctry, cheminOut)
  
  # création du js stockant les variables globales
  paramgeom(nomEnq, cheminIn, cheminOut)
  
  #~ 1. INDICATEUR "WHOLE POPULATION" ----
  createPopFiles(nomEnq, prez_long, sfSec, cheminOut)
  
  
  #~ 2. TOUS LES AUTRES INDICATEURS ----
  varind <- dico %>% filter(INDICATEUR!="pop") %>% distinct(VARIABLE, INDICATEUR) 
  variables <- varind %>% pull(VARIABLE)
  
  for(i in variables) {
    
    j <- varind %>% filter(VARIABLE==i) %>% pull(INDICATEUR)
    data <- prepPVS(nomEnq, prez_long, nomIndic = j, nomVar = i, seuil)
    createFiles(nomIndic = j, nomVar = i, nomEnq, data, prez_long, sfSec, ctry, cheminOut)
    
    if(!i %in% c("RES", "MOTIF", "MODE_ARR")){
      
      createISeg(nomIndic = j, nomVar = i, nomEnq, ctry, data, sfSec = sfSec, cheminOut)
      
    }
    
  }
  
}

