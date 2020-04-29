# ================================================================================#
#   Estimation des heures d'arrivée des déplacements pour les enquêtes OD :
# Montréal / Québec / Trois-Rivières / Saguenay / Sherbrooke / Ottawa-Gatineau
#                 utilisé dans le script "1_prétraitements_QC.R"
# juin 2019 - EV
# ================================================================================#

hrearv <- function(BD_brute, LIB_ED){
  
# création d'une variable qui donne la méthode utilisée pour l'heure d'arrivée
# 1 : horaire issu de l'enquête OD ; 
# 2 : horaire modélisé par le ministère des transports ; 
# 3 : déplacement intra-secteur (horaire d'arrivée identique à l'horaire de départ) ; 
# 4 : horaire estimé à partir des moyennes des temps de déplacement inter-secteurs 
# 5 : horaire estimé à partir d'Arcgis
# 6 : horaire d'arivée > horaire de départ du déplacement suivant
  
  BD_brute <- BD_brute %>%
    mutate (meth_ha = NA,
            cledep = str_c(BD_brute$nolog, BD_brute$noper, BD_brute$nodep))
  
# 1 - création des variables heures et minutes
  BD_brute <- BD_brute %>% 
    mutate(hhdep = 0,
           mmdep = 0,
           hharv = 0,
           mmarv =0 )

  for (i in 1:nrow(BD_brute)){
  
  BD_brute$hhdep[i] = as.integer(ifelse(str_length(BD_brute$hredep[i]) == 4, substr(BD_brute$hredep[i], 1, 2), substr(BD_brute$hredep[i],1,1)))
  BD_brute$mmdep[i] = as.integer(ifelse(str_length(BD_brute$hredep[i]) == 4, substr(BD_brute$hredep[i], 3, 4), substr(BD_brute$hredep[i], 2, 3)))
  
  BD_brute$hharv[i] = as.integer(ifelse(str_length(BD_brute$hrearv[i]) == 4, substr(BD_brute$hrearv[i], 1, 2), substr(BD_brute$hrearv[i],1,1)))
  BD_brute$mmarv[i] = as.integer(ifelse(str_length(BD_brute$hrearv[i]) == 4, substr(BD_brute$hrearv[i], 3, 4), substr(BD_brute$hrearv[i], 2, 3)))
  } 

  
# pour les non répondants et les personnes ne s'étant pas déplacées, on affecte NA aux heures d'arrivée car celles qui sont présentes sont erronées
  BD_brute <- BD_brute %>%
    mutate(hrearv = ifelse(noper > 1 | mobil != 1 , NA, hrearv))

# Remplacement du code 9999 ou 0 ou 99 pour les minutes en NA ("refus/ne sait pas")
  BD_brute <- BD_brute %>% 
    mutate(hredep = ifelse(hredep == 0 | hredep == 9999 | substr(hredep, 2,3) == 99 | substr(hredep, 3,4) == 99 , NA, hredep),
           hrearv = ifelse(hrearv == 0 | hrearv == 9999 | substr(hrearv, 2,3) == 99 | substr(hrearv, 3,4) == 99 , NA, hrearv))


# création de la variable duree
  BD_brute <- BD_brute %>% 
     mutate(duree = as.numeric(hharv)*60 + as.numeric(mmarv) - (as.numeric(hhdep)*60 + as.numeric(mmdep)))

  

#suppression du secteur 999 et 0 pour Saguenay et Montréal (= refus/nsp)
  if (BD_brute$LIB_ED[1] %in% c("MONTREAL", "SAGUENAY")){
    BD_brute <- BD_brute %>% 
        mutate(smlog = ifelse(smlog == 999 | smlog == 0, NA, smlog),
               smori = ifelse(smori == 999 | smlog == 0, NA, smori),
               smdes = ifelse(smdes == 999 | smlog == 0, NA, smdes))
  }  
  

    
# 2 - pour les déplacements sans heure d'arrivée, qui s'effectuent dans le même secteur (origine et destination)
# on affecte la même heure que l'heure de départ puisque les déplacements seront ensuite agrégés heure par heure (meth_ha = 3)
   BD_brute <- BD_brute %>%
    mutate(meth_ha = ifelse(is.na(hrearv) & mobil == 1 & smori == smdes, 3, meth_ha))
   
   for (i in (1:nrow(BD_brute))){
    if(isTRUE(BD_brute$meth_ha[i] == 3)){
      BD_brute$hrearv[i] = BD_brute$hredep[i + 1]
      BD_brute$hharv[i] = as.integer(ifelse(str_length(BD_brute$hrearv[i]) == 4, substr(BD_brute$hrearv[i], 1, 2), substr(BD_brute$hrearv[i],1,1)))
      BD_brute$mmarv[i] = as.integer(ifelse(str_length(BD_brute$hrearv[i]) == 4, substr(BD_brute$hrearv[i], 3, 4), substr(BD_brute$hrearv[i], 2, 3)))
    }
  } 

   BD_brute <- BD_brute %>% 
     mutate(duree = as.numeric(hharv)*60 + as.numeric(mmarv) - (as.numeric(hhdep)*60 + as.numeric(mmdep)))
   
# 3-  heures d'arrivée pour les déplacements inter-secteurs des non répondants (meth_ha = 4)
# création des matrices pour les 3 types de modes, à partir des déplacements des répondants
  BD_rep <- filter(BD_brute, noper == 1)
  BD_sm <- filter(BD_brute, !is.na(smori) & !is.na(smdes) & smori!= 0 & smdes != 0)
  mat_mode1 <- matrix(data = NA, nrow = length(unique(BD_sm$smori)), ncol = length(unique(BD_sm$smdes)), byrow = FALSE)
  rownames(mat_mode1) <- unique(as.numeric(BD_sm$smori))
  colnames(mat_mode1) <- unique(as.numeric(BD_sm$smdes))

  mat_mode2 <- matrix(data = NA, nrow = length(unique(BD_sm$smori)), ncol = length(unique(BD_sm$smdes)), byrow = FALSE)
  rownames(mat_mode2) <- unique(as.numeric(BD_sm$smori))
  colnames(mat_mode2) <- unique(as.numeric(BD_sm$smdes))

  mat_mode3 <- matrix(data = NA, nrow = length(unique(BD_sm$smori)), ncol = length(unique(BD_sm$smdes)), byrow = FALSE)
  rownames(mat_mode3) <- unique(as.numeric(BD_sm$smori))
  colnames(mat_mode3) <- unique(as.numeric(BD_sm$smdes))

#remplissage des matrices : le temps de parcours entre deux lieux est la moyenne des temps de parcours entre ces mêmes lieux pour les heures d'arrivée existantes (biais, si il n'y a qu'un seul déplacement..)
  for (i in 1:length(unique(BD_sm$smori))){
  for (j in 1:length(unique(BD_sm$smdes))){
    mat_mode1[i,j] <- round(mean(BD_rep$duree[BD_brute$modep == 1][BD_brute$smori == as.numeric(rownames(mat_mode1)[i])][BD_brute$smdes == as.numeric(colnames(mat_mode1)[j])], na.rm = T))
    mat_mode2[i,j] <- round(mean(BD_rep$duree[BD_brute$modep == 2][BD_brute$smori == as.numeric(rownames(mat_mode2)[i])][BD_brute$smdes == as.numeric(colnames(mat_mode2)[j])], na.rm = T))
    mat_mode3[i,j] <- round(mean(BD_rep$duree[BD_brute$modep == 3][BD_brute$smori == as.numeric(rownames(mat_mode3)[i])][BD_brute$smdes == as.numeric(colnames(mat_mode3)[j])], na.rm = T))
    
    }
  }
  
# remplissage des cases vides dont le trajet existe dans l'autre sens (smori = smdes)
  for (i in 1:length(unique(BD_sm$smori))){
    for (j in 1:length(unique(BD_sm$smdes))){
      mat_mode1[i,j] = ifelse(is.na(mat_mode1[i,j]), mat_mode1[j,i],mat_mode1[i,j]) 
      mat_mode2[i,j] = ifelse(is.na(mat_mode2[i,j]), mat_mode2[j,i],mat_mode2[i,j]) 
      mat_mode3[i,j] = ifelse(is.na(mat_mode3[i,j]), mat_mode3[j,i],mat_mode2[i,j]) 
    }
  }
  

#remplissage des heures d'arrivée à partir des matrices 

 
   for (i in (1:nrow(BD_brute))){

    if (isTRUE(BD_brute$noper[i] > 1 & BD_brute$mobil[i] == 1 & BD_brute$smori[i] != BD_brute$smdes[i])){

      a = BD_brute$smori[i]
      b = BD_brute$smdes[i]
      if(!isTRUE(a == 0 | b == 0)){
        if (BD_brute$modep[i] == 1){
          BD_brute$duree[i] = mat_mode1[rownames(mat_mode1) == a, colnames(mat_mode1) == b]
        }else if (BD_brute$modep[i] == 2){
          BD_brute$duree[i] = mat_mode2[rownames(mat_mode2) == a, colnames(mat_mode2) == b]
        }else if (BD_brute$modep[i] == 3){
          BD_brute$duree[i] = mat_mode3[rownames(mat_mode3) == a, colnames(mat_mode3) == b]
        }

      BD_brute$hharv[i] = (BD_brute$hhdep[i] + (BD_brute$mmdep[i] + BD_brute$duree[i])%/%60)%%24
      BD_brute$mmarv[i] = (BD_brute$mmdep[i] + BD_brute$duree[i])%%60
      BD_brute$meth_ha[i] = 4
      BD_brute$hrearv[i] = str_c(BD_brute$hharv[i], BD_brute$mmarv[i])
      }
    }
  }


# 4 - pour Montréal, Ottawa et Trois Rivières : les heures d'arrivée manquantes sont obtenues suite à la modélisation avec Arcgis (meth_ha = 5)
  
  if (BD_brute$LIB_ED[1] %in% c("MONTREAL", "OTTAWA-GATINEAU")){
# chargement des temps de parcours modélisés
    
    #Montréal
    if (BD_brute$LIB_ED[1] == "MONTREAL"){
      load("2-prepa_data/data/temps_de_parcours/tps_voit_Mtl.RDS")
      load("2-prepa_data/data/temps_de_parcours/tps_pieds_Mtl.RDS")
      tps_voit <- tps_voit_Mtl
      tps_pieds <- tps_pieds_Mtl
    }
    
    #Ottawa - Gatineau
    if (BD_brute$LIB_ED[1] == "OTTAWA-GATINEAU"){
      load("2-prepa_data/data/temps_de_parcours/tps_voit_Ott.RDS")
      load("2-prepa_data/data/temps_de_parcours/tps_pieds_Ott.RDS")
    }

    
# création des durées et heures d'arrivées restantes à partir de la modélisation

    for (i in (1:nrow(BD_brute))){

      if(is.na(BD_brute$mmarv[i]) & BD_brute$mobil[i] == 1 & isTRUE(BD_brute$smori[i] != BD_brute$smdes[i])
         & BD_brute$smori[i] != 0  & BD_brute$smdes[i] != 0){
        a = BD_brute$smori[i]
        b = BD_brute$smdes[i]
        
        if (BD_brute$modep[i] %in% c(1,2)){
          BD_brute$duree[i] = tps_voit$durée[tps_voit$smori == a][tps_voit$smdes == b][1]
        }
        
        if (BD_brute$modep[i] == 3){
          BD_brute$duree[i] = tps_pieds$durée[tps_pieds$smori == a][tps_pieds$smdes == b][1]
        }
        
        BD_brute$hharv[i] = (BD_brute$hhdep[i] + (BD_brute$mmdep[i] + BD_brute$duree[i])%/%60)%%24
        BD_brute$mmarv[i] = (BD_brute$mmdep[i] + BD_brute$duree[i])%%60
        BD_brute$meth_ha[i] = 5
        BD_brute$hrearv[i] = str_c(BD_brute$hharv[i], BD_brute$mmarv[i])
      }
    }
  }
  
# 5 - on affecte 1 à la source des heures d'arrivée non modifiées
  
  BD_brute <- BD_brute %>%
    mutate (meth_ha = ifelse(is.na(BD_brute$meth_ha) & !is.na(BD_brute$hrearv), 1, meth_ha))
  
  
  return(BD_brute)
}
