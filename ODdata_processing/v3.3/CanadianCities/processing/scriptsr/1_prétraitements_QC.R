# ================================================================================#
#                         Traitements EOD Québec niveau 2 :
#   Montréal / Québec / Trois-Rivières / Saguenay / Sherbrooke / Ottawa-Gatineau
#
#       Homogénéisation des tables / Nettoyage / Création des variables manquantes
#                       
# avril 2019 - EV
# ================================================================================#


# Library
library(readr)
library(dplyr)
library(stringr)



# Chargement des données brutes des 6 enquêtes OD

BD_Mtl <- read_csv2("1-données_source/données/mtl13_niveau_2.csv", col_names = TRUE)
BD_Qbc <- read_csv2("1-données_source/données/que11_niveau_2.csv", col_names = TRUE)
BD_Sag <- read_csv2("1-données_source/données/sag15_niveau_2.csv", col_names = TRUE)
BD_Trv <- read_csv2("1-données_source/données/trv11_niveau_2.csv", col_names = TRUE)
BD_She <- read_csv2("1-données_source/données/she12_niveau_2.csv", col_names = TRUE)
BD_Out <- read_csv2("1-données_source/données/out11_niveau_2.csv", col_names = TRUE)

# Le script est à faire tourner indépendamment pour chaque enquête, en séléctionnant seulement les étapes qui correspondent à la ville

# 1 - Chargement de l'enquête choisie

nomEnq<-"MONTREAL"

BD_brute <- BD_Mtl
rm(BD_Mtl)

BD_brute <- BD_Qbc
rm(BD_Qbc)

BD_brute <- BD_Sag
rm(BD_Sag)

BD_brute <- BD_Trv
rm(BD_Trv)

BD_brute <- BD_She
rm(BD_She)

BD_brute <- BD_Out
rm(BD_Out)


# 2 - Création de la colonne "clepersonne" seulement pour Ottawa-Gatineau

BD_brute <- BD_brute %>% 
  mutate(clepersonne = str_c(BD_brute$nolog, BD_brute$noper))

# 3 Sélection des + de 16 ans 

BD_brute <- filter(BD_brute, grpage >= 4)


# 4 - Transformation des modes des EOD en modes 1 à 3 (voir la table de correspondance) ; choisir l'enquête


# Montréal  
BD_brute <- BD_brute %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                   c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode4 = plyr::mapvalues(mode4, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode5 = plyr::mapvalues(mode5, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode6 = plyr::mapvalues(mode6, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)),
         mode7 = plyr::mapvalues(mode7, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18), 
                                 c(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1, 1, NA, NA)))

# Ottawa-Gatineau
BD_brute <- BD_brute %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode4 = plyr::mapvalues(mode4, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode5 = plyr::mapvalues(mode5, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)))
# Québec
BD_brute <- BD_brute %>% 
  mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)),
         mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), 
                                 c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, NA)))

# Trois Rivières / Sherbrooke
BD_brute <- BD_brute %>% 
    mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)))


# Saguenay
BD_brute <- BD_brute %>% 
    mutate(mode1 = plyr::mapvalues(mode1, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode2 = plyr::mapvalues(mode2, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)),
           mode3 = plyr::mapvalues(mode3, c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16), 
                                  c(2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, NA)))



# 5 - Création du mode principal de chaque déplacement pour toutes les enquêtes

# Création de la fonction qui attribue le mode principal au déplacement
# =on prend le mode 2 en priorité, puis 1 puis 3 (véhicule privé motorisé :2 / transport public : 1 / mobilités douces : 3)

modep <- function(x){
  if (c(BD_brute$mode1[[x]],BD_brute$mode2[[x]],BD_brute$mode3[[x]],BD_brute$mode4[[x]],BD_brute$mode5[[x]],
        BD_brute$mode6[[x]],BD_brute$mode7[[x]], na.rm = T) %in% '2'){
    modep = 2
  }else if (c(BD_brute$mode1[[x]],BD_brute$mode2[[x]],BD_brute$mode3[[x]],BD_brute$mode4[[x]],BD_brute$mode5[[x]],
             BD_brute$mode6[[x]],BD_brute$mode7[[x]], na.rm = T) %in% '1'){
    modep = 1
  }else{
    modep = 3
  }
  return(modep)
}

# Remplissage de la colonne des modes principaux

BD_brute <- BD_brute %>% 
  mutate(modep = 0)

for (i in 1:nrow(BD_brute)){
  BD_brute$modep[i] = modep(i)
}

# Suppression des colonnes modeX
# Enlever mode6 et mode7 pour Ottawa-Gatineau et de mode4 à mode9 pour les autres sauf Montréal

BD_brute <- BD_brute %>% 
  select(- mode1,- mode2, - mode3, - mode4,- mode5, - mode6,- mode7, - mode8, - mode9)

       


# 6 - Création du motif d'origine de chaque déplacement pour toutes les enquêtes

# Création de la fonction qui détermine le motif d'origine
# si c'est le premier déplacement de la personne, on lui assigne le motif destination du dernier deplacement de sa journée (boucle)

motifO <- function(i){ 
  
  n = max(BD_brute$nodep[BD_brute$clepersonne == BD_brute$clepersonne[i]], na.rm=TRUE)
  
#c'est le premier déplacement
  if (isTRUE(BD_brute$nodep[i] == 1)){
    motifO = BD_brute$motif[BD_brute$clepersonne == BD_brute$clepersonne[i] & BD_brute$nodep == n][1]
  
#ce n'est pas le premier déplacement 
  }else if(isTRUE(BD_brute$nodep[i] > 1)){
    motifO = BD_brute$motif[i-1]
  
#la personne ne s'est pas déplacée : sera indiquée comme étant "à la maison" dans la création des tables de présence
  }else{
    motifO = NA
  }
  return(motifO)
}

# Remplissage de la colonne motif_O

BD_brute <- BD_brute %>%
  mutate(motif_O = 0)

for (i in 1:nrow(BD_brute)){
  BD_brute$motif_O[i] = motifO(i)
}


# 7 - Création des classes de revenus

# création rev_aj = médiane de la tranche de revenu divisée par la racine de la taille du ménage (ou NA si non renseigné)



# faire cette étape en chargeant tour à tour chaque enquête (décommenter la ligne tot_enq si c'est pour étudier les 6 enquêtes et déterminer les seuils)

if(nomEnq == "MONTREAL" | nomEnq == "TROIS-RIVIERES"){
  BD_brute <- BD_brute %>%
        mutate(rev_med = plyr::mapvalues(revenu, c(1,2,3,4,5,6,7,8),
                      c( 15000, 45000, 75000, 105000, 135000, 165000, NA, NA)))
        
  BD_brute <- BD_brute %>%
    mutate(rev_aj = ifelse(!is.na(rev_med), rev_med/sqrt(nbper), NA))
  
  BD_brute <- BD_brute %>% 
    select( - rev_med)
  
  BD_brute <- BD_brute %>% 
    mutate(LIB_ED = nomEnq)
  
  enq <- BD_brute
  
  enq <- enq %>% 
    transmute(LIB_ED, nbper, revenu, clepersonne, rev_aj)
  
}


if(nomEnq == "OTTAWA-GATINEAU" | nomEnq == "SHERBROOKE" | nomEnq == "QUEBEC" | nomEnq == "SAGUENAY"){
  BD_brute <- BD_brute %>%
    mutate(rev_med = plyr::mapvalues(revenu, c(1,2,3,4,5,6,7,8,9),
                                     c( 15000, 45000, 75000, 105000, 135000, 165000, 195000, 225000, NA)))
  
  BD_brute <- BD_brute %>%
    mutate(rev_aj = ifelse(!is.na(rev_med), rev_med/sqrt(nbper), NA))
  
  BD_brute <- BD_brute %>% 
    select( - rev_med)
  
  BD_brute <- BD_brute %>% 
    mutate(LIB_ED = nomEnq)
  
  enq <- BD_brute
  
  enq <- enq %>% 
    transmute(LIB_ED, nbper, revenu, clepersonne, rev_aj)
  
}


# création REVENU

BD_brute <- BD_brute %>%
  mutate(REVENU = ifelse((rev_aj <= 19669), 1,
                         ifelse(rev_aj > 19669 &  rev_aj <= 39337, 2,
                                       ifelse(rev_aj > 39337 & rev_aj < 68839.7  , 3,
                                                            ifelse(rev_aj >= 68839.75, 4,
                                                                   NA)))))
BD_brute <- BD_brute %>%
  mutate(REVENU = ifelse(is.na(REVENU), 0, REVENU))



# 8 - Durée du déplacement et standardisation des heures/minutes de départ et d'arrivée pour toutes les enquêtes

# création d'un libellé pour l'enquête choisie
BD_brute <- BD_brute %>% 
  mutate(LIB_ED = nomEnq)


# chargement du script de création des heures d'arrivée manquantes
suppressWarnings(source("2-prepa_data/scriptsr/1b_hrearv.R"))

BD_brute <- hrearv(BD_brute, LIB_ED)


#vérification que l'heure d'arrivée d'un déplacement soit bien inférieure à l'heure de départ du déplacement suivant pour une personne
#sinon on affecte l'heure d'arrivée = heure de départ du déplacement suivant et meth_ha = 6
#ssi le déplacement suivant est effectué par la meme personne

for (i in (1:dim(BD_brute)[1])){
  if (isTRUE(BD_brute$clepersonne[i + 1] == BD_brute$clepersonne[i])){
    ha <- BD_brute$hharv[i]
    ma <- BD_brute$mmarv[i]
    hd <- BD_brute$hhdep[i+1]
    md <- BD_brute$mmdep[i+1]
    
    if (isTRUE(ha > hd) | isTRUE((ha == hd & ma > md))){
        ha <- hd
        ma <- md
        BD_brute$hrearv[i] = str_c(as.character(BD_brute$hharv[i]), as.character(BD_brute $mmarv[i]))
        BD_brute$duree[i] = ha*60 + ma - (BD_brute$hhdep[i]*60 + BD_brute$mmdep[i])
        BD_brute$meth_ha[i] = 6 
    }
  }
} 


# suppression des colonnes inutiles pour le Mobiliscope (choisir selon l'enquête)

BD_brute <- BD_brute %>% 
  select( - srlog, - sdrlog, -srori, - sdrori, - srdes, - sdrdes,  - tper, - percond, - mode1, - mode2, - mode3, - lieudes, - nbveh,
          - provenance, - tlog, - jour, - passetc,  - lieuori- typeconducteur, - nbjonc, - lieujct1, - srjct1, - sdrjct1, - smjct1, - typejct1,
         - lieujct2, - srjct2, - sdrjct2, - smjct2, - typejct2)


#9 - Enregistrement de la BD modifiée au format .RDS ; choisir l'enquête
 
#Montreal
save(BD_brute, file = "2-prepa_data/data/BD_Mtl.RDS", ascii = TRUE)

#Québec
save(BD_brute, file = "2-prepa_data/data/BD_Qbc.RDS", ascii = TRUE)

#Saguenay
save(BD_brute, file = "2-prepa_data/data/BD_Sag.RDS", ascii = TRUE)

#Trois Rivières
save(BD_brute, file = "2-prepa_data/data/BD_Trv.RDS", ascii = TRUE)

#Sherbrooke
save(BD_brute, file = "2-prepa_data/data/BD_She.RDS", ascii = TRUE)

#Ottawa-Gatineau
save(BD_brute, file = "2-prepa_data/data/BD_Out.RDS", ascii = TRUE)
