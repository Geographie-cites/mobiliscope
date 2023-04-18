# ================================================================================#
#           Fonction de construction de la base de données des présences v4-2
#                     
# 
# mars 2022 - AD
# ================================================================================#

# noms d'enquête en minuscule sans accent ni espace
transChr <- function(chr){
  if(str_detect(chr, " ")){
    new <- str_replace(chr, " ", "-")
    new <- tolower(new)
  }else{
    new <- tolower(chr)
  }
  return(new)
}

# Passage des déplacements aux présences ----
createPrez <- function(libED, tripTable, indTable, chemin){
  
  # select une enquête
  d <- tripTable %>% filter(LIB_ED==libED)
  p <- indTable %>% filter(LIB_ED==libED)
  
  # 1. Préparation table déplacement ----
  
  # traitement des heures
  ## Ajustement de la fenêtre 4h-4h
  d <- d %>% 
    filter(H_START>=4 & H_END<=28) %>% 
    filter(H_START<=28 & H_END>=4) %>% 
    mutate(M_START = case_when(H_START==28 ~ 0,
                               TRUE ~ M_START),
           M_END = case_when(H_END==28 ~ 0,
                             TRUE ~ M_END))
  

  ## Créa des heures au format date
  d <- d %>% 
    mutate(HDEB = case_when(H_START>=24 ~ 
                              as.character.Date(ISOdatetime(2010, 1, 2, H_START-24, M_START, 0)),
                            TRUE ~ as.character.Date(ISOdatetime(2010, 1, 1, H_START, M_START, 0))),
           HFIN = case_when(H_END>=24 ~ 
                              as.character.Date(ISOdatetime(2010, 1, 2, H_END-24, M_END, 0)),
                            TRUE ~ as.character.Date(ISOdatetime(2010, 1, 1, H_END, M_END, 0))),
           
           DIFF = as.numeric(difftime(ymd_hms(HFIN, truncated = 3),ymd_hms(HDEB, truncated = 3), units = "mins"))
    ) %>% 
    # suppression des durées négatives
    filter(DIFF>=0)

  ## suppression des individus avec des heures manquantes (préventif)
  ### à répercuter dans la table personne plus bas
  dna <- d %>% 
    filter_at(.vars = c("HDEB", "HFIN"), any_vars(is.na(.)))
  d <- d %>% 
    filter(!ID_IND %in% dna$ID_IND)
  
  
  ## Nombre de déplacements par individu
  d <- d %>% 
    group_by(ID_IND) %>% 
    mutate(nobs = n()) %>% 
    ungroup() %>% 
    arrange(ID_IND, HDEB)
  
  ## Pour enquêtes canadiennes
  d <- d %>% 
    mutate(O_ZF = case_when(PAYS=="CA" ~ O_SEC,
                            TRUE ~ O_ZF),
           D_ZF = case_when(PAYS=="CA" ~ D_SEC,
                            TRUE ~ D_ZF))
  
  
  # 2. Préparation table personnes ----
  
  # suppression des individus avec des heures manquantes
  p <- p %>% 
    filter(!ID_IND %in% dna$ID_IND)
  rm(dna)
  
  # Création CSP et EDUC au niveau du ménage
  if(unique(p$PAYS)!="CA"){
    p <- p %>% 
      mutate(ID_MEN = word(ID_IND, 1, 3, "_")) %>% 
      group_by(ID_MEN) %>% 
      mutate(EDUCMEN = case_when(PAYS=="FR" ~ min(EDUC[AGE>=18], na.rm = TRUE),
                                 PAYS=="AS"~ max(EDUC[AGE>=18], na.rm = TRUE)),
             CSPMEN = case_when(PAYS=="FR" ~ min(CSP[AGE>=18], na.rm = TRUE),
                                PAYS=="AS" ~ NA_character_)) %>% 
      ungroup()
  }
  
  
  # 3. Création table présences ----
  
  dnested <- d %>% 
    arrange(ID_IND, HDEB) %>% 
    mutate(HDEB = case_when(MODE_ADH==1 ~ as.character.Date(ymd_hms(HDEB, truncated = 3) + minutes(ceiling(DIFF/2))),
                            TRUE ~ HDEB),
           HFIN = case_when(MODE_ADH==1 ~ HDEB,
                            TRUE ~ HFIN)) %>% 
    group_by(ID_IND) %>% 
    nest()
  
  dnested %>% pluck("data", 1)
  
  ### Bornage de la journée
  refDate <- ymd_hms("2010-01-01 04:00:00", truncated = 3)
  refDate2 <- refDate + days(1)
  
  
  ### purrr sur la ville
  prezTable <- dnested %>% 
    tibble(PAYS = map(data, ~c(unique(.x$PAYS))),
           ID_ED = map(data, ~c(unique(.x$ID_ED))),
           LIB_ED = map(data, ~c(unique(.x$LIB_ED))),
           ENQUETE = map(data, ~c(unique(.x$ENQUETE))),
           ID_ORDRE = map(data, ~seq(1, nrow(.)+1, by = 1)),
           CODE_ZF = map(data, ~c(first(.x$O_ZF), .x$D_ZF)),
           CODE_COM = map(data, ~c(first(.x$O_COG), .x$D_COG)),
           CODE_SEC = map(data, ~c(first(.x$O_SEC), .x$D_SEC)),
           HDEB = map(data, ~c(as.character(refDate), .x$HFIN)),
           HFIN = map(data, ~c(.x$HDEB, as.character(refDate2))),
           DUREE = 0,
           MOTIF = map(data, ~c(first(.x$O_PURPOSE), .x$D_PURPOSE)),
           ADH_ARR = map(data, ~c(0, .x$MODE_ADH)),
           ADH_DEP = map(data, ~c(.x$MODE_ADH, 0)),
           MODE_ARR = map(data, ~case_when(first(.x$O_ZF)==last(.x$D_ZF) 
                                           ~ c(last(.x$MODE), .x$MODE),
                                           TRUE ~ c(NA_character_, .x$MODE))),
           MODE_DEP = map(data, ~case_when(first(.x$O_ZF)==last(.x$D_ZF) 
                                           ~ c(.x$MODE, first(.x$MODE)),
                                           TRUE ~ c(.x$MODE, NA_character_)))
    )
  
  prezTable <- prezTable %>% 
    select(-data) %>% 
    unnest(cols = c(PAYS, ID_ED, LIB_ED, ENQUETE, ID_ORDRE, 
                    CODE_ZF, CODE_COM, CODE_SEC, HDEB, HFIN, MOTIF, 
                    ADH_ARR, ADH_DEP, MODE_ARR, MODE_DEP))
  
  length(unique(prezTable$ID_IND))
  
  
  # Ajout des autres présences
  
  ## Individus sans déplacements (à domicile toute la journée)
  prezNonDepl <- anti_join(x = select(p, ID_IND, ID_ED, LIB_ED, ENQUETE, 
                                      CODE_ZF = RES_ZF, CODE_COM = RES_COG, 
                                      CODE_SEC = RES_SEC, PAYS), 
                           y = prezTable, by = "ID_IND")
  
  prezNonDepl <- prezNonDepl %>% 
    transmute(ID_IND, 
              PAYS, ID_ED, LIB_ED, ENQUETE,
              ID_ORDRE = 1,
              CODE_ZF, CODE_COM, CODE_SEC,
              HDEB = "2010-01-01 04:00:00", 
              HFIN = "2010-01-02 04:00:00",
              DUREE = 24*60, 
              MOTIF = "01", 
              ADH_ARR = 0, ADH_DEP = 0, 
              MODE_ARR = NA_character_, MODE_DEP = NA_character_)
  
  ## Récupération des déplacements (en mode non adhérent)
  prezEnDepl <-  d %>% 
    filter(MODE_ADH == 0) %>% 
    transmute(ID_IND, 
              PAYS, ID_ED, LIB_ED, ENQUETE,
              ID_ORDRE = 0, 
              CODE_ZF = "888888",
              CODE_COM = "88888", 
              CODE_SEC = "888",
              HDEB, 
              HFIN,
              DUREE = 0, 
              MOTIF = "88", 
              ADH_ARR = 0, 
              ADH_DEP = 0, 
              MODE_ARR = NA_character_, 
              MODE_DEP = NA_character_)
  
  
  ## Compilation des présences, des présences à domicile, 
  ## des présences hors zone d'enquête et des présences dans un transport
  prezTable <-prezTable %>% 
    rbind(., prezNonDepl, prezEnDepl) %>% 
    arrange(ID_IND, HDEB)
  
  rm(prezEnDepl, prezNonDepl, nobs)
  
  
  
  # 4. Construction des variables H ----
  
  ## calcul des durées de présence en minute et suppression des durées nulles
  prezTable <- prezTable %>% 
    mutate(HDEB = ymd_hms(HDEB, truncated = 3),
           HFIN = ymd_hms(HFIN, truncated = 3),
           DUREE = as.numeric(HFIN - HDEB)/60) %>% 
    filter(DUREE!=0) 
  
  
  ## Calcul des présences à chaque heure
  
  ### Création d'un intervalle de référence pour chaque heure
  hInterval <- seq(refDate, refDate2, by = "hours")
  
  refHour <- data.frame(V1 = hInterval, V2 = hInterval)
  # refHour <- data.frame(V1 = hInterval, V2 = lead(hInterval-1)) # intervalles de temps de 59 minutes en ref 
  refHour <- refHour[1:24,]
  refHour <- refHour %>% 
    mutate(REFINT = interval(V1, V2),
           H = paste0("h", row_number()+3))
  
  
  ### Création de l'intervalle de chaque présence
  prezTable <- prezTable %>% 
    mutate(IDP = row.names(.)) %>% 
    mutate(INTERVAL = interval(HDEB, HFIN))
  
  
  ### overlap entre heure de réf (heure pile) et intervalle de présence
  Htest <- as.data.frame(sapply(refHour$REFINT, int_overlaps, prezTable$INTERVAL))
  colnames(Htest) <- refHour$H
  Htest <- Htest %>% 
    mutate(IDP = row.names(.)) 
  
  ### Add result to prezTable
  prezTable <- prezTable %>% 
    left_join(., Htest)
  
  
  
  # 5. Ajout des variables individus ----
  if(unique(prezTable$PAYS) == "FR") {
    prezTable <- prezTable %>% 
      left_join(., select(p, ID_IND, W_IND, SEX, AGE, KAGE, 
                          RES_ZF, RES_SEC, RES_COG, RES_DEP, 
                          ZONAGE = ZONAGE_SEC, DEP, REV, 
                          EDUC, EDUCMEN, CSP, CSPMEN, OCC,
                          STRM),
                by = "ID_IND")
    
    qp <- read.csv2(paste0(dirIn, "table_resZF_qpv_utf8.csv"))
    prezTable <- prezTable %>% 
      left_join(., select(qp, LIB_ED, RES_ZF, QPV)) 
  }
  if(unique(prezTable$PAYS) == "CA") {
    prezTable <- prezTable %>% 
      left_join(., select(p, ID_IND, W_IND, SEX, KAGE, 
                          RES_SEC, REV, OCC, STRM),
                by = "ID_IND") %>% 
      select(-CODE_ZF, -CODE_COM)
  }
  if(libED=="São Paulo, 2017") {
    prezTable <- prezTable %>% 
      left_join(., select(p, ID_IND, W_IND, SEX, AGE, KAGE, 
                          RES_ZF, RES_SEC, RES_COG, 
                          ZONAGE = ZONAGE_SEC, REV, 
                          EDUC, EDUCMEN, CSO, INFORMAL, OCC, 
                          STRM, LOG),
                by = "ID_IND")
  }
  if(libED == "Bogotá, 2019") {
    prezTable <- prezTable %>% 
      left_join(., select(p, ID_IND, W_IND, SEX, AGE, KAGE, 
                          RES_ZF, RES_SEC, RES_COG, RES_LOC, RES_SSE, 
                          ZONAGE = ZONAGE_SEC, REV, 
                          EDUC, EDUCMEN, CSO, INFORMAL, OCC,
                          STRM, LOG), 
                by = "ID_IND")
  }
  if (libED == "Santiago, 2012") {
    prezTable <- prezTable %>% 
      left_join(select(p, ID_IND, W_IND, SEX, AGE, KAGE, 
                       RES_ZF, RES_SEC, RES_COG, 
                       ZONAGE = ZONAGE_SEC, REV, 
                       EDUC, EDUCMEN, CSO, OCC, STRM, LOG), 
                by = "ID_IND")
  }
  
  prezTable <- prezTable %>% select(-IDP, -INTERVAL)
  
  saveRDS(prezTable, file = paste0(chemin, "presence_", libED, ".RDS"))
  
}

# Création des tables de présences "utiles" ----
createPrezLong <- function(prezTable, chemin, enquete){
  
  data <- prezTable %>% filter(ENQUETE == enquete)
  
  ctry <- unique(data$PAYS)
  if (ctry == "FR") {
    # Recoder les modalités de 'QPV'
    data <- data %>% 
      mutate(QPV = QPV+1,
             MOTIF = case_when(MOTIF == "06" ~ "00",
                               TRUE ~ MOTIF))

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
                                            TRUE ~ REV))
  }
  if (ctry == "AS") {
    # filter code_sec = NA
    data <- data %>% filter(!is.na(CODE_SEC))
    # Sélection des mobilités autonomes
    data <- data %>% filter(KAGE != "0")
    # Recoder les modalités de 'INFORMAL'
    data <- data %>% 
      mutate(INFORMAL = INFORMAL+1)
    # recoder RES_SSE
    data <- data %>% 
      mutate(RES_SSE = case_when(RES_SSE=="5" ~ "4",
                                 TRUE ~ RES_SSE))
  }
  
  # Suppression des présences hors zone d'enquête (codées '999') 
  # et des présences mobiles/en déplacement (codées '888')
  data <- filter(data, CODE_SEC != "999" & CODE_SEC != "888")
  
  # Format long
  prez_long <- data %>% 
    pivot_longer(-c(!starts_with("h", ignore.case = FALSE)), names_to = "HOUR", values_to = "value")
  
  # On conserve uniquement les heures où les personnes stationnent dans un lieu
  prez_long <- filter(prez_long, value == TRUE)  
  
  # Supprimer les "doublons" de la variable temporelle 
  # (respect du principe selon lequel un individu ne peut être présent dans 2 lieux distincts à la même heure)
  # supprime aussi les individus comptés deux fois à H et dans un même secteur
  prez_long <- prez_long %>%
    mutate(idh = paste(ID_IND, HOUR, sep="_"))

  doublonIDH  <- prez_long %>%
    filter(duplicated(idh))
  doublon <- prez_long %>%
    select(idh, CODE_SEC, DUREE) %>%
    filter(idh %in% doublonIDH$idh) %>%
    group_by(idh) %>%
    mutate(toRm = case_when(DUREE == max(DUREE) ~ "oui")) %>%
    ungroup() %>%
    filter(toRm == "oui") %>%
    mutate(idp = paste(idh, CODE_SEC, DUREE, sep="_"))

  prez_long <- prez_long %>%
    mutate(idp = paste(idh, CODE_SEC, DUREE, sep="_")) %>%
    filter(!idp %in% doublon$idp) %>%
    select(-idh, -idp)
  

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
  
  # rectifier la longueur de MOTIF
  prez_long <- prez_long %>% 
    mutate(MOTIF = as.numeric(MOTIF),
           MOTIF = as.character(MOTIF))
  
  # select var utile
  if(enquete=="IDF"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, DEP, ZONAGE,
             EDUC, EDUCMEN, CSP, CSPMEN, OCC, 
             REV, STRM, QPV, RES, HOUR)
  }
  if(enquete=="ANNECY"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, ZONAGE,
             EDUC, EDUCMEN, CSP, CSPMEN, OCC, 
             STRM, RES, HOUR)
  }
  if(ctry=="FR" & !enquete%in%c("IDF", "ANNECY")){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, ZONAGE,
             EDUC, EDUCMEN, CSP, CSPMEN, OCC, 
             STRM, QPV, RES, HOUR)
  }
  if(ctry=="CA"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_SEC, 
             OCC, REV, STRM, RES, HOUR)
  }
  if(enquete=="BOGOTA"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, RES_SSE, ZONAGE,
             EDUC, EDUCMEN, CSO, REV, OCC, INFORMAL,
             STRM, RES, LOG, HOUR)
  }
  if(enquete=="SANTIAGO"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, ZONAGE,
             EDUC, EDUCMEN, CSO, REV, OCC, 
             STRM, RES, LOG, HOUR)
  }
  if(enquete=="SAO PAULO"){
    prez_long <- prez_long %>% 
      select(PAYS, ENQUETE, ID_IND, W_IND, 
             CODE_ZF, CODE_COM, CODE_SEC,
             MOTIF, MODE_ARR, SEX, KAGE,
             RES_ZF, RES_SEC, RES_COG, ZONAGE,
             EDUC, EDUCMEN, CSO, REV, OCC, INFORMAL, 
             STRM, RES, LOG, HOUR)
  }
  
  # Transfo en type numeric toutes les variables suivantes
  v <- c("MOTIF", "MODE_ARR", "SEX", "KAGE", "REV", "DEP",
         "EDUC", "EDUCMEN", "CSO", "CSP", "CSPMEN", "OCC", 
         "STRM", "RES_SSE", "LOG, RES")

  prez_long <- prez_long %>% 
    mutate_at(vars(matches(v)), as.numeric)
  
  # save
  saveRDS(prez_long, paste0(chemin, "presence_utile_", transChr(enquete), ".RDS"))
  
}
