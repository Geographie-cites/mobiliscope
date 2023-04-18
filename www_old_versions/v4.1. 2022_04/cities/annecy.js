// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ANNECY';
// Nom de la ville centre
var nomVC = 'Annecy';
// Année de fin d'enquête
var anneeED = '2017';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2017 - Annecy / Haute-Savoie, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.97, 6.48];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '301';
var nameSec = "ANNECY VIEILLE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [15000, 8000, 3000, 100],
datasetFlow = [10000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [140, 250, 500, 1900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 60, 180, 460, 1400, 2400, 4000, 6100, 9500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 6, 9, 11, 14, 36];
var colDom_age2 = [3, 12, 14, 16, 18, 25];
var colDom_age3 = [33, 47, 51, 54, 57, 63];
var colDom_age4 = [10, 19, 21, 23, 27, 46];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [7, 14, 16, 19, 25, 38];
var colDom_strmfr2 = [18, 25, 28, 31, 35, 45];
var colDom_strmfr3 = [3, 11, 14, 18, 21, 35];
var colDom_strmfr4 = [9, 28, 33, 37, 42, 51];

//Méthode des quintiles
var colDom_cleduc1 = [1, 5, 7, 8, 10, 18];
var colDom_cleduc2 = [18, 31, 34, 37, 42, 58];
var colDom_cleduc3 = [14, 26, 30, 32, 35, 47];
var colDom_cleduc4 = [2, 18, 23, 27, 31, 52];

//Méthode des quintiles
var colDom_educmen1 = [1, 7, 8, 10, 12, 22];
var colDom_educmen2 = [21, 34, 38, 44, 48, 65];
var colDom_educmen3 = [14, 24, 28, 31, 35, 44];
var colDom_educmen4 = [2, 13, 17, 20, 26, 40];

//Méthode des quintiles
var colDom_cs1 = [0, 0.9, 2, 3, 4, 10];
var colDom_cs2 = [4, 14, 17, 20, 24, 44];
var colDom_cs3 = [18, 26, 28, 31, 35, 49];
var colDom_cs4 = [21, 29, 33, 36, 40, 53];
var colDom_cs5 = [2, 8, 11, 14, 19, 40];

//Méthode des quintiles
var colDom_cspmen1 = [0, 0.9, 3, 5, 8, 17];
var colDom_cspmen2 = [7, 18, 23, 26, 29, 46];
var colDom_cspmen3 = [16, 26, 29, 32, 37, 50];
var colDom_cspmen4 = [7, 26, 30, 33, 37, 48];
var colDom_cspmen5 = [0, 6, 7, 9, 12, 31];

//Méthode des quintiles
var colDom_occ1 = [33, 52, 56, 60, 64, 74];
var colDom_occ2 = [0, 3, 5, 6, 8, 30];
var colDom_occ3 = [0, 2.1, 3, 5, 7, 14];
var colDom_occ4 = [13, 24, 25, 28, 32, 57];
var colDom_occ5 = [0, 2.3, 3, 4, 5, 12];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.6, 4, 6, 9, 26];
var colDom_mod2 = [20, 60, 66, 74, 81, 91];
var colDom_mod3 = [5, 14, 22, 28, 35, 69];
