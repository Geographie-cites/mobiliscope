// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'CREIL';
// Nom de la ville centre
var nomVC = 'Creil';
// Année de fin d'enquête
var anneeED = '2017';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2017 - Creil / Sud de l’Oise, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.26, 2.53];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CREIL RIVE DROITE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [11000, 6000, 2000, 100],
datasetFlow = [5000, 2500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [93, 250, 500, 700];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 120, 290, 560, 1000, 1600, 3100, 4500, 6400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 11, 13, 16, 33];
var colDom_age2 = [3, 10, 13, 14, 17, 32];
var colDom_age3 = [34, 48, 52, 55, 58, 68];
var colDom_age4 = [6, 16, 19, 20, 25, 46];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [6, 12, 14, 16, 18, 24];
var colDom_strmfr2 = [9, 20, 26, 30, 34, 50];
var colDom_strmfr3 = [7, 16, 18, 20, 23, 35];
var colDom_strmfr4 = [16, 32, 37, 39, 44, 56];

//Méthode des quintiles
var colDom_cleduc1 = [3, 7, 8, 10, 14, 25];
var colDom_cleduc2 = [13, 29, 34, 38, 42, 60];
var colDom_cleduc3 = [18, 27, 30, 33, 37, 50];
var colDom_cleduc4 = [4, 13, 19, 23, 32, 47];

//Méthode des quintiles
var colDom_educmen1 = [3, 7, 8, 11, 16, 31];
var colDom_educmen2 = [15, 29, 35, 41, 45, 65];
var colDom_educmen3 = [12, 25, 29, 32, 35, 51];
var colDom_educmen4 = [3, 12, 17, 22, 28, 46];

//Méthode des quintiles
var colDom_cs1 = [0, 1.9, 3, 4, 7, 18];
var colDom_cs2 = [0, 6, 9, 12, 15, 27];
var colDom_cs3 = [31, 44, 48, 53, 57, 68];
var colDom_cs4 = [3, 10, 12, 15, 19, 33];
var colDom_cs5 = [0, 12, 17, 21, 28, 42];

//Méthode des quintiles
var colDom_cspmen1 = [0, 2.2, 3, 5, 9, 23];
var colDom_cspmen2 = [1, 7, 11, 13, 16, 26];
var colDom_cspmen3 = [32, 44, 49, 53, 57, 69];
var colDom_cspmen4 = [3, 9, 12, 14, 18, 34];
var colDom_cspmen5 = [0, 11, 15, 19, 28, 40];

//Méthode des quintiles
var colDom_occ1 = [26, 45, 51, 56, 60, 67];
var colDom_occ2 = [0, 4, 7, 8, 11, 31];
var colDom_occ3 = [0, 4, 5, 7, 10, 21];
var colDom_occ4 = [7, 21, 24, 27, 31, 54];
var colDom_occ5 = [0, 2.3, 3, 5, 7, 22];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [7, 26, 44, 63, 81, 100];
var colDom_qpv2 = [0, 19, 37, 56, 74, 93];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 3, 7, 9, 13, 25];
var colDom_mod2 = [33, 55, 63, 72, 78, 90];
var colDom_mod3 = [7, 16, 21, 28, 32, 48];
