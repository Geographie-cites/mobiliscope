// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'NIMES';
// Nom de la ville centre
var nomVC = 'Nîmes';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2015 - Nîmes Métropole, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.78, 4.33];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ECUSSON";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [15000, 8000, 3000, 100],
datasetFlow = [12000, 6000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [84, 250, 500, 1200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [30, 190, 660, 1800, 3100, 6300, 8900, 11000, 20800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 10, 12, 14, 18, 34];
var colDom_age2 = [2, 10, 12, 15, 18, 26];
var colDom_age3 = [34, 43, 48, 51, 55, 61];
var colDom_age4 = [7, 18, 22, 24, 27, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 7, 10, 14, 40];
var colDom_cleduc2 = [25, 38, 42, 47, 50, 62];
var colDom_cleduc3 = [11, 21, 25, 29, 33, 43];
var colDom_cleduc4 = [2, 12, 16, 20, 25, 40];

//Méthode des quintiles
var colDom_educmen1 = [0, 6, 10, 15, 21, 59];
var colDom_educmen2 = [26, 43, 49, 52, 57, 68];
var colDom_educmen3 = [4, 16, 22, 25, 29, 39];
var colDom_educmen4 = [0, 6, 9, 12, 18, 32];

//Méthode des quintiles
var colDom_cs1 = [0, 4, 6, 9, 14, 35];
var colDom_cs2 = [4, 14, 17, 21, 26, 45];
var colDom_cs3 = [13, 26, 30, 34, 38, 49];
var colDom_cs4 = [7, 19, 25, 29, 32, 43];
var colDom_cs5 = [0, 7, 10, 13, 19, 35];

//Méthode des quintiles
var colDom_cspmen1 = [3, 7, 11, 18, 22, 63];
var colDom_cspmen2 = [6, 18, 25, 29, 32, 43];
var colDom_cspmen3 = [6, 25, 29, 34, 40, 47];
var colDom_cspmen4 = [2, 14, 19, 22, 25, 39];
var colDom_cspmen5 = [0, 3, 3, 5, 10, 24];

//Méthode des quintiles
var colDom_occ1 = [16, 36, 41, 47, 53, 68];
var colDom_occ2 = [0, 6, 7, 10, 12, 27];
var colDom_occ3 = [2, 6, 9, 12, 16, 31];
var colDom_occ4 = [8, 22, 26, 29, 32, 50];
var colDom_occ5 = [1, 4, 6, 8, 11, 34];

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
var colDom_mod1 = [0, 3, 6, 8, 12, 30];
var colDom_mod2 = [16, 48, 68, 78, 82, 94];
var colDom_mod3 = [2, 13, 17, 24, 36, 77];
