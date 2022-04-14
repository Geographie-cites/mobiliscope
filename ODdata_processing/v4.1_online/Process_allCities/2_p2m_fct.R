# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope
#                                      fonctions 
# ================================================================================#




#==== GLOBAL FUNCTIONS ====

# 0. Transformation de la table des présences au format long ----
# (présences autonomes et "immobiles" en un lieu) 
prepPrezLong <- function(data){
  
  
  ctry <- unique(data$PAYS)
  if (ctry == "FR") {
    # Recoder les modalités de 'QPV'
    data <- data %>% 
      mutate(QPV = QPV+1,
             MOTIF = case_when(MOTIF == "06" ~ "00",
                               TRUE ~ MOTIF))
    
    data <- data %>% 
      mutate(ZONAGE = case_when(ENQUETE %in% c("BESANCON", "CARCASSONNE") & ZONAGE == 3 ~ 2,
                                TRUE ~ ZONAGE))
    # Sélection des mobilités autonomes
    data <- filter(data, AGE > 15)
    
  }
  if (ctry == "CA") {
    # filtrer code_sec = NA
    data <- data %>% filter(!is.na(CODE_SEC))
    # Sélection des mobilités autonomes
    data <- data %>% filter(KAGE != "0")
    # recoder revenu inconnu avec 5
    data <- data %>% mutate(REV = case_when(REV=="0" ~ "5",
                                            TRUE ~ REV),
                            MOTIF = case_when(MOTIF == "06" ~ "00",
                                              TRUE ~ MOTIF))
  }
  if (ctry == "AS") {
    # filter code_sec = NA
    data <- data %>% filter(!is.na(CODE_SEC))
    # Sélection des mobilités autonomes
    data <- data %>% filter(KAGE != "0")
    # Recoder les modalités de 'INFORMAL'
    data <- data %>% 
      mutate(INFORMAL = INFORMAL+1)
    # prendre le niveau d'éduc le plus haut du ménage (EDUCMEN2)
    data <- data %>% 
      select(-EDUCMEN) %>% 
      rename(EDUCMEN = EDUCMEN2)
    # recoder RES_SSE
    data <- data %>% 
      mutate(RES_SSE = case_when(RES_SSE=="5" ~ "4",
                                 TRUE ~ RES_SSE))
  }
  
  # Suppression des présences hors zone d'enquête (codées '999') 
  # et des présences mobiles/en déplacement (codées '888')
  data <- filter(data, CODE_SEC != "999" & CODE_SEC != "888")
  
  # Suppression des artefacts de construction avec des durées = 0 
  data <- filter(data, DUREE != 0)
  
  # Format long
  prez_long <- data %>% 
    pivot_longer(-c(!starts_with("h", ignore.case = FALSE)), names_to = "HOUR", values_to = "value")
  
  # On conserve uniquement les heures où les personnes stationnent dans un lieu
  prez_long <- filter(prez_long, value == TRUE)  
  
  # Supprimer les "doublons" de la variable temporelle 
  # (respect du principe selon lequel un individu ne peut être présent dans 2 lieux distincts à la même heure)
  doublon <- prez_long %>% 
    group_by(LIB_ED, HOUR, ID_IND) %>% 
    mutate(nID = n(),
           nSEC = length(unique(CODE_SEC)),
           durMax = max(DUREE)) %>% 
    ungroup()
  
  doublon <- doublon %>% 
    filter(nID > 1 & nSEC > 1) %>% 
    select(ID_IND, CODE_SEC, CODE_COM, CODE_ZF, DUREE, HOUR, value, nSEC, durMax) %>% 
    mutate(toRemove = case_when(DUREE == durMax ~ "oui",
                                TRUE ~ "non"))
  
  doublon <- doublon %>% 
    filter(toRemove == "oui") %>% 
    mutate(ID = paste(ID_IND, CODE_SEC, HOUR, sep = "_"))
  
  prez_long <- prez_long %>% 
    mutate(ID = paste(ID_IND, CODE_SEC, HOUR, sep = "_")) %>% 
    filter(!ID %in% doublon$ID)
  
  prez_long$ID <- NULL
  
  # Hour in factor
  prez_long <- prez_long %>% 
    mutate(HOUR = factor(HOUR,
                         levels = c("h4", "h5", "h6", "h7",
                                    "h8", "h9", "h10", "h11", 
                                    "h12", "h13", "h14", "h15", 
                                    "h16", "h17", "h18", "h19", 
                                    "h20", "h21", "h22", "h23", 
                                    "h24", "h25", "h26", "h27"))) 
  
  # création de la variable RES (résident/non-résident)
  prez_long <- prez_long %>% 
    mutate(RES = case_when(CODE_SEC==RES_SEC ~ 2,
                           CODE_SEC!=RES_SEC ~ 1))
  
  # rectifier le typage de MODE_ARR et MODE_DEP
  prez_long <- prez_long %>% 
    mutate(MODE_ARR = as.numeric(MODE_ARR),
           MODE_DEP = as.numeric(MODE_DEP))
  
  
  return(prez_long)
  
}

# 1. Indicateur POPULATION GLOBALE ----
createPopFiles <- function(nomEnq, prez_long, sfSec, seuil){

  # 1a. CONSTRUCTION DES DONNEES POUR la carte en cercle proportionnelle - pop0_prop : 
  # nombre estimé de personnes présentes par secteur et par heure
  
  dir.create(paste0(chemin, nomEnq,"/pop0_prop"))
  dir.create(paste0(chemin, nomEnq,"/pop0_prop/data"))
  dir.create(paste0(chemin, nomEnq,"/pop0_prop/geo"))
  
  ## Comptage des présences par secteur et par heure : 
  ## POPULATION PRESENTE (STOCK PONDERE)
  pvs <- prez_long %>% 
    group_by(HOUR, CODE_SEC) %>% 
    summarise(popSec = round(sum(W_IND, na.rm = TRUE),2),
              popSecB = length(ID_IND)) %>% 
    ungroup() %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Application d'un seuil - replace petits effectifs bruts par 0
  if(!is.na(seuil)){
    pvs <- pvs %>% 
      mutate(popSec = case_when(popSecB < seuil & popSecB > 0 ~ NaN,
                                TRUE ~ popSec))
  }
  
  ## Préparation de la table à joindre au geojson
  dataShpProp <- pvs %>% 
    select(HOUR, CODE_SEC, popSec) %>% 
    pivot_wider(names_from = HOUR, 
                values_from = popSec, 
                names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC)
  
  ## Jointure 
  shpProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
  
  ### Export
  shpProp <- sf_geojson(shpProp)
  geojson_write(shpProp,
                file = paste0(chemin, nomEnq,"/pop0_prop/geo/secteursData.geojson"),
                layer_options = "ENCODING=UTF-8")
  
  
  
  ## Préparation de la table pour le graphique simple (dataSect)
  oldH <- unique(as.character(pvs$HOUR))
  newH <- c("4am", "5am", "6am", "7am", 
            "8am", "9am", "10am", "11am", 
            "12am", "1pm", "2pm", "3pm", 
            "4pm", "5pm", "6pm", "7pm", 
            "8pm", "9pm", "10pm", "11pm", 
            "12pm", "1am", "2am", "3am")
  
  ## mise en forme csv STOCK
  dfProp <- pvs %>% 
    select(-popSecB) %>% 
    pivot_wider(names_from = CODE_SEC, values_from = popSec) %>% 
    mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
    relocate(hour) %>% 
    select(-HOUR)
  
  
  ### Export
  write.csv(dfProp, 
             paste0(chemin, nomEnq,"/pop0_prop/data/dataSect.csv"), 
             row.names = FALSE)   
  
  
  
  # 1b. CONSTRUCTION DES DONNEES POUR la carte de densité - pop0_choro : 
  # Densité de personnes (km2) présentes par secteur et par heure
  
  dir.create(paste0(chemin, nomEnq,"/pop0_choro"))
  dir.create(paste0(chemin, nomEnq,"/pop0_choro/data"))
  dir.create(paste0(chemin, nomEnq,"/pop0_choro/geo"))
  
  ### joindre la variable 'AREA' de la couche des secteurs à la table de présence et calcul
  options(scipen = 999)
  pvs2 <- pvs %>% 
    left_join(., select(sfSec, CODE_SEC = Secteur_EM, AREA)) %>% 
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
                file = paste0(chemin, nomEnq,"/pop0_choro/geo/secteursData.geojson"),
                layer_options = "ENCODING=UTF-8")

  ## mise en forme csv DENS
  dfChoro <- pvs2 %>% 
    select(HOUR, CODE_SEC, dens) %>% 
    pivot_wider(names_from = CODE_SEC, values_from = dens) %>% 
    mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
    relocate(hour) %>% 
    select(-HOUR)
  
  
  ### Export
  write.csv(dfChoro, 
             paste0(chemin, nomEnq,"/pop0_choro/data/dataSect.csv"), 
             row.names = FALSE) 
  
  
  
  
  # 1c. CONSTRUCTION DES DONNEES POUR LES CARTES EN OURSINS - pop0_flow : 
  # nombre estimé de personnes non résidentes par secteur et par heure + flux OD
  
  # Création des dossiers   
  dir.create(paste0(chemin, nomEnq,"/pop0_flow"))
  dir.create(paste0(chemin, nomEnq,"/pop0_flow/data"))
  dir.create(paste0(chemin, nomEnq,"/pop0_flow/geo"))
  

  ## Calcul des flux OD (origine = secteur de résidence - RES_SEC, destination = secteur de présence - CODE_SEC)
  ## seuil de population brute = 6 individus par secteur (en deçà on ne diffuse pas l'info)
  flowdata <- prez_long %>% 
    select(ID_IND, W_IND, HOUR, CODE_SEC, RES_SEC) %>% 
    group_by(HOUR, CODE_SEC, RES_SEC) %>% 
    summarise(W_IND = round(sum(W_IND, na.rm = TRUE),2),
              n = length(ID_IND)) %>% 
    ungroup() %>% 
    filter(CODE_SEC != RES_SEC & n >= 6) %>%   ### seuil sur les flux 
    select(-n) %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Export de flowdata
  write.csv2(flowdata, 
             paste0(chemin,nomEnq,"/pop0_flow/geo/flowData.csv"), 
             row.names = FALSE)  
  
  
  ## data stock NR
  pvs3 <- prez_long %>% 
    filter(CODE_SEC != RES_SEC) %>% 
    group_by(HOUR, CODE_SEC) %>% 
    summarise(popSec = round(sum(W_IND, na.rm = TRUE),2),
              popSecB = length(ID_IND)) %>%    
    ungroup() %>% 
    arrange(CODE_SEC, HOUR)
  
  ## Application d'un seuil - replace petits effectifs bruts par 0
  if(!is.na(seuil)){
    pvs3 <- pvs3 %>% 
      mutate(popSec = case_when(popSecB < seuil & popSecB > 0 ~ NaN,
                                TRUE ~ popSec))
  }
  
      
  ## Préparation de la table à joindre au geojson  
  dataShpChoroNR <- pvs3 %>% 
    select(-popSecB) %>% 
    pivot_wider(names_from = HOUR, 
                values_from = popSec, 
                names_sort = TRUE,
                names_prefix = "pop0_") %>% 
    rename(Secteur_EM = CODE_SEC) %>% 
    arrange(Secteur_EM) %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0))
  
  ## Jointure avec le geojson
  shpChoroNR <- left_join(sfSec, dataShpChoroNR, by = "Secteur_EM")
  
  ## Export
  shpChoroNR <- sf_geojson(shpChoroNR)
  geojson_write(shpChoroNR,
                file = paste0(chemin, nomEnq, "/pop0_flow/geo/secteursData.geojson"),
                layer_options = "ENCODING=UTF-8")
  
  ## mise en forme csv STOCK NR
  dfChoroNR <- pvs3 %>% 
    select(-popSecB) %>% 
    pivot_wider(names_from = CODE_SEC, values_from = popSec) %>% 
    mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
    relocate(hour) %>% 
    select(-HOUR) %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0))
  
  
  ## Export des tables
  write.csv(dfChoroNR, 
             paste0(chemin, nomEnq,"/pop0_flow/data/dataSect.csv"), 
             row.names = FALSE) 
}

# 2. Autres indicateurs : ----

#~ calcul des pourcentages ----
calculPart <- function(dataStock){
  data.frame(dataStock[ , 1:3], apply(dataStock[ , 4:length(dataStock)], MARGIN = 2, 
                                      FUN = function(x){round((x * 100) / dataStock$popSec, 2)}))
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
  return(result)
  
  
}

#~ création des geojson et des csv pour le graphique "simple" ----
createFiles <- function(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil){

  # calcul des mini tables de présences de l'indicateur
  data <- prepPVS(nomEnq, prez_long, nomIndic, nomVar, seuil)
  
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  if(nomIndic != "res"){
    pvs3 <- data[["pvs3"]]
  }
  
  
  # pour chaque modalité :
  for(i in 1:nbMod){
    
    # Création des répertoires
    ## Répertoires parents (2 par indicateur)
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_prop"))
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_choro"))
    
    ## Répertoires enfants (2 par répertoire parent)
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_prop/geo"))
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_choro/geo"))
    
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_prop/data"))
    dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_choro/data"))
    
    indic <- colnames(pvs)[3 + i]

    ## Préparation du tableau de données à joindre au geojson
    ## data stock
    dataShpProp <- pvs %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>%
      pivot_wider(names_from = HOUR, 
                  values_from = indic, 
                  names_sort = TRUE,
                  names_prefix = paste0(indic, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Jointure des données au fond de carte
    shpProp <- left_join(sfSec, dataShpProp, by = "Secteur_EM")
    
    ### Export des données spatiales
    shpProp <- sf_geojson(shpProp)
    geojson_write(shpProp,
                  file = paste0(chemin, nomEnq, "/", nomIndic, i ,"_prop/geo/secteursData.geojson"),
                  layer_options = "ENCODING=UTF-8")
    
    
    ## data part
    dataShpChoro <- pvs2 %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>%
      pivot_wider(names_from = HOUR, 
                  values_from = indic, 
                  names_sort = TRUE,
                  names_prefix = paste0(indic, "_")) %>% 
      rename(Secteur_EM = CODE_SEC)
    
    ### Jointure des données au fond de carte
    shpChoro <- left_join(sfSec, dataShpChoro, by = "Secteur_EM")
    
    ### Export des données spatiales
    shpChoro <- sf_geojson(shpChoro)
    geojson_write(shpChoro,
                  file = paste0(chemin, nomEnq, "/", nomIndic, i ,"_choro/geo/secteursData.geojson"),
                  layer_options = "ENCODING=UTF-8")
    
    
    ## Création des données pour les cartes en oursins
    if(!nomIndic %in% c("res")){
      
      ## Répertoires parents (2 par indicateur)
      dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow"))
      
      ## Répertoires enfants (2 par répertoire parent)
      dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow/geo"))
      dir.create(paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow/data"))
      
      ### Flowdata : csv des flux OD avec seuil à 6
      flowdata <- prez_long %>% 
        select(ID_IND, W_IND, HOUR, CODE_SEC, RES_SEC, all_of(nomVar)) %>%
        mutate(nomVar = as.numeric(get(nomVar))) %>% 
        filter(nomVar == i) %>% 
        group_by(HOUR, CODE_SEC, RES_SEC) %>% 
        summarise(W_IND = round(sum(W_IND, na.rm = TRUE),2),
                  n = length(ID_IND)) %>% 
        ungroup() %>%
        filter(CODE_SEC != RES_SEC & n  >= 6) %>% ## application du seuil
        select(-n) %>% 
        arrange(CODE_SEC, HOUR)
      
      ### data stock NR
      dataShpChoroNR <- pvs3 %>% 
        select(HOUR, CODE_SEC, all_of(indic)) %>%
        pivot_wider(names_from = HOUR, 
                    values_from = indic, 
                    names_sort = TRUE,
                    names_prefix = paste0(indic, "_")) %>% 
        rename(Secteur_EM = CODE_SEC) %>% 
        arrange(Secteur_EM) %>% 
        mutate_if(is.numeric, ~replace(., is.na(.), 0))

      ### Jointure des données au fond de carte
      shpChoroNR <- left_join(sfSec, dataShpChoroNR, by = "Secteur_EM")
      
      ### Export des données spatiales
      shpChoroNR <- sf_geojson(shpChoroNR)
      geojson_write(shpChoroNR,
                    file = paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow/geo/secteursData.geojson"),
                    layer_options = "ENCODING=UTF-8")
      write.csv2(flowdata, 
                 paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow/geo/flowData.csv"), 
                 row.names = FALSE)
    }
    
    
    
    # Création des tables pour le graphique simple
    oldH <- unique(as.character(pvs$HOUR))
    newH <- c("4am", "5am", "6am", "7am", 
              "8am", "9am", "10am", "11am", 
              "12am", "1pm", "2pm", "3pm", 
              "4pm", "5pm", "6pm", "7pm", 
              "8pm", "9pm", "10pm", "11pm", 
              "12pm", "1am", "2am", "3am")
    
    ## mise en forme csv STOCK
    dfProp <- pvs %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>% 
      pivot_wider(names_from = CODE_SEC, values_from = indic) %>% 
      mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
      relocate(hour) %>% 
      select(-HOUR)
      
    
    ### Export des données
    write.csv(dfProp, 
               paste0(chemin, nomEnq, "/", nomIndic, i ,"_prop/data/dataSect.csv"), 
               row.names = FALSE)

    
    ## mise en forme csv PART
    dfChoro <- pvs2 %>% 
      select(HOUR, CODE_SEC, all_of(indic)) %>% 
      pivot_wider(names_from = CODE_SEC, values_from = indic) %>% 
      mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
      relocate(hour) %>% 
      select(-HOUR)
    
    
    ### Export des données
    write.csv(dfChoro, 
               paste0(chemin, nomEnq, "/", nomIndic, i ,"_choro/data/dataSect.csv"), 
               row.names = FALSE)
    
    ## Oursins
    if(nomIndic != "res"){
      
      ## mise en forme csv STOCK NR
      dfChoroNR <- pvs3 %>% 
        select(HOUR, CODE_SEC, all_of(indic)) %>% 
        pivot_wider(names_from = CODE_SEC, values_from = indic) %>% 
        mutate(hour = plyr::mapvalues(HOUR, oldH, newH)) %>% 
        relocate(hour) %>% 
        select(-HOUR) %>% 
        mutate_if(is.numeric, ~replace(., is.na(.), 0))
      
      ## Export des données
      write.csv(dfChoroNR, 
                 paste0(chemin, nomEnq, "/", nomIndic, i ,"_flow/data/dataSect.csv"), 
                 row.names = FALSE)
    }
    
  }
  
}  

#~ création des indices de ségrégation et csv ----
createISeg <- function(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil){
  
  # sortie des mini tables de présences de l'indicateur
  data <- prepPVS(nomEnq, prez_long, nomIndic, nomVar, seuil)
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  
  # DUNCAN
  ## Init table
  duncan <- data.frame("hour" = unique(pvs$HOUR))
  
  ## Calcul de l'indice
  for (i in unique(pvs$HOUR)){
    
    duncan <- bind_rows(duncan, as.data.frame(t(ISDuncan(pvs[pvs$HOUR == i , 4:length(pvs)]))))
    
  }
  
  ## mise en forme 
  newH <- c("4am", "5am", "6am", "7am", 
            "8am", "9am", "10am", "11am", 
            "12am", "1pm", "2pm", "3pm", 
            "4pm", "5pm", "6pm", "7pm", 
            "8pm", "9pm", "10pm", "11pm", 
            "12pm", "1am", "2am", "3am")
  
  duncan <- duncan %>% 
    filter(!is.na(V1)) %>% 
    mutate(hour = newH) %>% # !! pvs$HOUR doit être factor with 24 levels from h4 to h27
    mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
    mutate_if(is.numeric, ~round(., 2))

  ## Rename variables
  colnames(duncan)[2:length(duncan)] <- colnames(pvs[ , 4:length(pvs)])
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    duncan <- duncan %>% relocate(c("hour", "rev5"))
  }
  ## Pour Bogota mode4 en 2eme col
  if(nomEnq == "BOGOTA" & nomIndic == "mode") {
    duncan <- duncan %>% relocate(c("hour", "mode4"))
  }
  
  
  # MORAN
  
  ## projection 
  if (ctry == "FR") {
    if (!nomEnq %in% c("LA REUNION", "MARTINIQUE")) {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2154)
    }
    if (nomEnq == "LA REUNION") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 2975)
    }
    if (nomEnq == "MARTINIQUE") {
      shpSectMoran <- sfSec %>% 
        st_transform(crs = 5490)
    }
  }
  
  if (ctry == "CA") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 3978)
  }
  
  if (nomEnq == "BOGOTA") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 21897) %>% 
      # supression des secteurs non contigüs
      filter(!Secteur_EM %in% c("UTAM700", "UTAM650", "UTAM680", 
                                "UTAM563", "UTAM660", "UTAM690",
                                "UTAM670", "UTAM640", "UTAM540",
                                "UTAM500", "UTAM520", "UTAM580",
                                "UTAM620", "UTAM600", "UTAM590",
                                "UTAM630", "UTAM610", "UTAM89"))
  }
  
  if (nomEnq == "SAO PAULO") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 22523)
  }
  
  if (nomEnq == "SANTIAGO") {
    shpSectMoran <- sfSec %>% 
      st_transform(crs = 32719)
  }
  
  
  ## Init table
  moran <- data.frame("hour" = '', "var" = '', "moran" = numeric(24))
  
  for (i in unique(pvs$HOUR)){
    
    # Trier les données
    dataMoran <- filter(pvs2 %>% select(-popSec), HOUR == i)
    dataMoran <- dataMoran %>%
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
    
    # Calcul de l'indice de Moran
    # nbMod+1 car jointure de perim 
    for (j in colnames(dataMoran[ , (length(dataMoran)-nbMod+1):length(dataMoran)])){
      
      Moran <- moran.mc(x = dataMoran[[j]],
                        listw = nb2listw(nbSecteurs), nsim=1000)
      
      moran <- rbind(moran, data.frame("hour" = i,
                                       "var" = j,
                                       "moran" = Moran$statistic,
                                       stringsAsFactors = FALSE))
    }
    
  }
  
  
  ## Mise en forme
  moran <- moran %>% 
    filter(hour != '') %>% 
    mutate_if(is.numeric, ~replace(., is.na(.), 0)) %>% 
    mutate_if(is.numeric, ~round(., 2)) %>% 
    pivot_wider(names_from = var, values_from = moran) %>% 
    mutate(hour = newH) # !! pvs$HOUR doit être factor with 24 levels from h4 to h27
  
  ## Pour le Canada rev5 en 2eme col
  if(ctry == "CA" & nomIndic == "rev") {
    moran <- moran %>% relocate(c("hour", "rev5"))
  }
  ## Pour Bogota mode4 en 2eme col
  if(nomEnq == "BOGOTA" & nomIndic == "mode") {
    moran <- moran %>% relocate(c("hour", "mode4"))
  }
  
  
  ## EXPORT 
  write.csv(duncan, 
              paste0(chemin, nomEnq, "/indice_segreg/", nomIndic,"_Duncan.csv"), 
              row.names = FALSE)
  write.csv(moran, 
              paste0(chemin, nomEnq, "/indice_segreg/", nomIndic,"_Moran.csv"), 
              row.names = FALSE)
}  

#~ création des csv pour graphique en aires empilées (stacked) ----
createStacked <- function(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil){
  
  # calcul des mini tables de présences de l'indicateur
  data <- prepPVS(nomEnq, prez_long, nomIndic, nomVar, seuil)
  
  pvs <- data[["pvs"]]
  pvs2 <- data[["pvs2"]]
  if(nomIndic != "res"){
    pvs3 <- data[["pvs3"]]
  }
  
  # hour vec
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
  
  ## Pour le Canada rev5 en 3eme col
  if(ctry == "CA" & nomIndic == "rev") {
    df <- df %>% relocate(c("hour", "district", "rev5"))
  }
  ## Pour Bogota mode4 en 3eme col
  if(nomEnq == "BOGOTA" & nomIndic == "mode") {
    df <- df %>% relocate(c("hour", "district", "mode4"))
  }
  
  ## Export
  write.csv(df, paste0(chemin, nomEnq, "/stacked/", nomIndic, "_choro_stacked.csv"), 
            row.names = FALSE)
  
  
  # 2. Cartes Proportionnelles
  
  df <- pvs %>% 
    mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
    rename(district = CODE_SEC) %>% 
    relocate(district, hour) %>% 
    select(-HOUR, -popSec)
  
  
  ## Pour le Canada rev5 en 3eme col
  if(ctry == "CA" & nomIndic == "rev") {
    df <- df %>% relocate(c("hour", "district", "rev5"))
  }
  ## Pour Bogota mode4 en 3eme col
  if(nomEnq == "BOGOTA" & nomIndic == "mode") {
    df <- df %>% relocate(c("hour", "district", "mode4"))
  }
  
  ## Export
  write.csv(df, 
            paste0(chemin, nomEnq, "/stacked/", nomIndic, "_prop_stacked.csv"), 
            row.names = FALSE)
  
  
  # 3. Cartes en oursins
  if(!nomIndic %in% c("res")){
    
    df <- pvs3 %>% 
      mutate(hour = recode(HOUR, !!!setNames(newH, oldH))) %>% 
      rename(district = CODE_SEC) %>% 
      relocate(district, hour) %>% 
      select(-HOUR, -popSec)
    
    ## Pour le Canada rev5 en 3eme col
    if(ctry == "CA" & nomIndic == "rev") {
      df <- df %>% relocate(c("hour", "district", "rev5"))
    }
    ## Pour Bogota mode4 en 3eme col
    if(nomEnq == "BOGOTA" & nomIndic == "mode") {
      df <- df %>% relocate(c("hour", "district", "mode4"))
    }
    
    ## Export
    write.csv(df, 
              paste0(chemin, nomEnq, "/stacked/", nomIndic, "_flow_stacked.csv"), 
              row.names = FALSE)
  }
  
}  



#==== ALGO FUNCTION ====

##---- Fonction p2m : de la table de présence aux indicateurs du Mobiliscope ----
p2m <- function(nomEnq){
  
  # Création des répertoires de sortie 
  # dir.create(chemin)
  dir.create(paste0(chemin, nomEnq))
  dir.create(paste0(chemin, nomEnq, "/stacked"))
  dir.create(paste0(chemin, nomEnq, "/indice_segreg"))
  
  
  #~ 0. préparation data ----
  
  # couche secteur
  sfSec <- sf %>% 
    mutate(ENQUETE = case_when(LIB_ED=="Valenciennes, 2011" ~ "VALENCIENNES2011",
                               TRUE ~ ENQUETE)) %>% 
    filter(ENQUETE == nomEnq) %>% 
    rename(Secteur_EM = CODE_SEC, CENTROID_X = X_W84, CENTROID_Y = Y_W84) 
  
  # données de présence
  prez_long <- prepPrezLong(data = prezTable %>% filter(ENQUETE == as.name(nomEnq)))
  
  # code pays de l'enquête
  ctry <- unique(prez_long$PAYS)
  
  # seuil de répondants bruts en deçà duquel on ne diffuse pas l'info
  seuil <- NA

  
  #~ 1. INDICATEUR "WHOLE POPULATION" ----
  createPopFiles(nomEnq, prez_long, sfSec, seuil)
  
  
  #~ 2. TOUS LES AUTRES INDICATEURS ----
  
  ## POPULATION RESIDENTE/NON RESIDENTE
  nbMod <- 2
  nomIndic <- "res"
  nomVar <- "RES"
  
  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  ## SEX 
  nbMod <- 2
  nomIndic <- "sex"
  nomVar <- "SEX"

  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  
  
  ## AGE
  nbMod <- 4
  nomIndic <- "age"
  nomVar <- "KAGE"
  
  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  ## OCCUPATION PRINCIPALE
  nbMod <- 5
  nomIndic <- "occ"
  nomVar <- "OCC"
  
  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  
  ## ACTIVITE 
  if(ctry %in% c("FR", "CA")){
    nbMod <- 5
  }
  if(ctry == "AS"){
    nbMod <- 6
  }
  nomIndic <- "act"
  nomVar <- "MOTIF"
  
  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  unlink(paste0(chemin, nomEnq, "/act1_flow/geo"), recursive = TRUE)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  

  
  ## MODE DE TRANSPORT 
  if(nomEnq!="BOGOTA"){
    nbMod <- 3
  }
  if(nomEnq=="BOGOTA"){
    nbMod <- 4
  }
  nomIndic <- "mode"
  nomVar <- "MODE_ARR"
  
  createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
  createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  
  if(ctry %in% c("FR", "AS")){
    
    ## NIVEAU D'EDUCATION (INDIVIDUEL)
    nbMod <- 4
    nomIndic <- "cleduc"
    nomVar <- "EDUC"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

    
    ## NIVEAU D'EDUCATION (MENAGE) 
    nbMod <- 4
    nomIndic <- "educmen"
    nomVar <- "EDUCMEN"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  if(ctry == "FR"){
    ## CSP (INDIVIDUELLE) 
    nbMod <- 5
    nomIndic <- "cs"
    nomVar <- "CSP"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

    
    ## CSP (MENAGE) 
    nbMod <- 5
    nomIndic <- "cspmen"
    nomVar <- "CSPMEN"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  
  ## ZONE DE RESIDENCE 
  if(ctry == "FR"){
    if(!nomEnq %in% c("CARCASSONNE", "BESANCON")){
      nbMod <- 3
    }
    if(nomEnq %in% c("CARCASSONNE", "BESANCON")){ 
      nbMod <- 2
    }
    nomIndic <- "resarea"
    nomVar <- "ZONAGE"
    
    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  
  ## QPV 
  if(ctry == "FR" & nomEnq != "ANNECY"){
    
    nbMod <- 2
    nomIndic <- "qpv"
    nomVar <- "QPV"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  
  # REVENU (MENAGE) - PARIS, CANADA et Amérique du Sud
  if(nomEnq == "IDF" || ctry %in% c("CA", "AS")){
    
    if(nomEnq == "IDF"){
      nbMod <- 4
    }
    if(ctry %in% c("CA", "AS")){
      nbMod <- 5
    }  
    nomIndic <- "rev"
    nomVar <- "REV"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  
  if(nomEnq == "IDF"){
    
    # DEPARTEMENT DE RESIDENCE 
    nbMod <- length(unique(prez_long$DEP))
    nomIndic <- "dep"
    nomVar <- "DEP"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  if(ctry=="AS"){
    
    ## 3o. CSO (des actifs)
    nbMod <- 4
    nomIndic <- "cso"
    nomVar <- "CSO"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

    
    ## COMPOSITION DU MENAGE
    nbMod <- 5
    nomIndic <- "strm"
    nomVar <- "STRM"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

    
    ## STATUT D'OCCUPATION DU LOGEMENT
    nbMod <- 3
    nomIndic <- "log"
    nomVar <- "LOG"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  ## INFORMALITE (des actifs) 
  if(nomEnq %in% c("BOGOTA", "SAO PAULO")){
    
    nbMod <- 2
    nomIndic <- "inf"
    nomVar <- "INFORMAL"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  
  
  if(ctry=="AS"){ 
    ## ZONAGE METAL 
    nbMod <- 4
    nomIndic <- "zona"
    nomVar <- "ZONAGE"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)

  }
  
  if(nomEnq == "BOGOTA"){    
    ## SSE
    nbMod <- 4
    nomIndic <- "sse"
    nomVar <- "RES_SSE"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  if(ctry=="FR"){
    ## STATUT D'OCCUPATION DU LOGEMENT
    nbMod <- 4
    nomIndic <- "strmfr"
    nomVar <- "STRM"

    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  if(ctry=="CA"){
    ## STATUT D'OCCUPATION DU LOGEMENT
    nbMod <- 3
    nomIndic <- "strmqc"
    nomVar <- "STRM"
    
    createFiles(nbMod, nomIndic, nomVar, nomEnq, prez_long, sfSec, seuil)
    createISeg(nbMod, nomIndic, nomVar, nomEnq, ctry, prez_long, sfSec, seuil)
    createStacked(nomIndic, nomVar, nomEnq, prez_long, ctry, seuil)
  }
  
  
}

