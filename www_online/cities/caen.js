// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'CAEN';
// Nom de la ville centre
var nomVC = 'Caen';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2011 - Caen / Calvados, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49, -0.36];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "CAEN GARDIN-CHATEAU";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [26000, 13000, 6000, 100],
datasetFlow = [21000, 11000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [79, 500, 1000, 4200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 90, 310, 670, 1800, 3800, 5400, 7800, 18000];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 7, 11, 13, 17, 58];
var colDom_age2 = [1, 8, 11, 14, 19, 35];
var colDom_age3 = [24, 45, 51, 56, 59, 73];
var colDom_age4 = [3, 16, 19, 22, 27, 43];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 8, 15, 25, 31, 50];
var colDom_cleduc2 = [14, 29, 33, 36, 46, 71];
var colDom_cleduc3 = [6, 17, 21, 25, 29, 48];
var colDom_cleduc4 = [2, 12, 16, 21, 27, 47];

//Méthode des quintiles
var colDom_educmen1 = [1, 12, 19, 25, 32, 52];
var colDom_educmen2 = [16, 32, 36, 40, 49, 69];
var colDom_educmen3 = [4, 15, 20, 23, 27, 47];
var colDom_educmen4 = [2, 10, 14, 18, 23, 47];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 6, 20];
var colDom_cs2 = [2, 8, 11, 14, 20, 34];
var colDom_cs3 = [19, 33, 40, 45, 51, 66];
var colDom_cs4 = [5, 19, 23, 27, 32, 47];
var colDom_cs5 = [1, 8, 11, 14, 20, 31];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 5, 7, 9, 38];
var colDom_cspmen2 = [2, 10, 13, 17, 26, 49];
var colDom_cspmen3 = [19, 33, 39, 46, 52, 69];
var colDom_cspmen4 = [2, 15, 20, 25, 29, 52];
var colDom_cspmen5 = [0, 6, 8, 12, 15, 26];

//Méthode des quintiles
var colDom_occ1 = [24, 44, 48, 52, 57, 75];
var colDom_occ2 = [0, 5, 8, 10, 14, 57];
var colDom_occ3 = [0, 3, 4, 6, 7, 25];
var colDom_occ4 = [4, 22, 26, 31, 35, 54];
var colDom_occ5 = [0, 3, 4, 5, 7, 19];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [0, 20, 40, 60, 80, 100];
var colDom_qpv2 = [0, 20, 40, 60, 80, 100];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1, 4, 7, 11, 37];
var colDom_mod2 = [30, 60, 70, 76, 80, 91];
var colDom_mod3 = [6, 16, 20, 24, 32, 62];
