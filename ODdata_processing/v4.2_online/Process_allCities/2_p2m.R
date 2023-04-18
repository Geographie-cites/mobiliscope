# ================================================================================#
#             Préparation des indicateurs à intégrer au Mobiliscope (v4-2)
#                                
# 
# avril 2018 - reprise du script de Constance lecomte
# rv en octobre 2020
# rv en jan. 2021 pour intégration Canada
# rv en juillet 2021 pour intégration Amérique du sud
# rv février 2022 : réécriture de p2m_fct
# juin 2022 : ajout fonction création fichiers menu.json par enquête
# aout 2022 : new out folders structure (remove dataSect files)
# oct 2022 : add paramgeom() function ; folder name in slug
# ================================================================================#



# load p2m functions ----
### pour palier des pb d'encodage dans le fichier (function menuJson)
source.utf8 <- function(f) {
  l <- readLines(f, encoding="UTF-8")
  eval(parse(text=l),envir=.GlobalEnv)
}
source.utf8("2_p2m_fct.R")


# sortir les data d'une enquête, exemple Nantes ----
nomEnq <-  "nantes"
p2m(nomEnq = nomEnq, 
    cheminIn ="data", 
    cheminOut = paste0("../../../www_online/data", nomEnq))



# sortir les data de plusieurs enquêtes ----
require(foreach)
require(doParallel)

# liste des enquêtes
Enq <- read_excel("data/ressources/dictionnaire_menu.xlsx", sheet = "ctry")
(Enq <- Enq %>% pull(cityKey))

## packages utilisés dans la fonction p2m
myPck <- as.vector(.packages())

## setup parallel backend to use many processors
cores <- detectCores()
cl <- makeCluster(cores[1]-3) # !!! not to overload your computer
registerDoParallel(cl)



T1<-Sys.time()

foreach(i = Enq, .packages = myPck) %dopar% {
  
  unlink(paste0("../../../www_online/data", i), recursive = TRUE) # remove previous data
  p2m(                                   
    nomEnq = i,   
    cheminIn = "data", 
    cheminOut = paste0("../../../www_online/data", i) 
      ) 
  
}

## stop cluster
stopCluster(cl)

T2<-Sys.time()
(Tdiff= difftime(T2, T1))

