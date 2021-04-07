// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'MARTINIQUE';
// Nom de la ville centre
var nomVC = 'Fort-de-France';
// Année de fin d'enquête
var anneeED = '2014';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2014 - Fort-de-France / Martinique, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [14.65, -61.02];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '006';
var nameSec = "FORT-DE-FRANCE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [29000, 15000, 7000, 100],
datasetFlow = [20000, 10000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [180, 500, 1000, 4300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [60, 180, 260, 420, 680, 1000, 2100, 3000, 5700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [5, 11, 13, 14, 15, 26];
var colDom_age2 = [3, 11, 13, 14, 16, 21];
var colDom_age3 = [43, 50, 52, 54, 56, 67];
var colDom_age4 = [11, 17, 19, 21, 23, 32];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [6, 10, 13, 17, 20, 32];
var colDom_cleduc2 = [33, 46, 51, 55, 59, 72];
var colDom_cleduc3 = [9, 16, 19, 24, 28, 37];
var colDom_cleduc4 = [0, 5, 8, 12, 15, 27];

//Méthode des quintiles
var colDom_educmen1 = [10, 17, 20, 25, 35, 50];
var colDom_educmen2 = [39, 48, 52, 57, 62, 69];
var colDom_educmen3 = [3, 8, 13, 18, 20, 31];
var colDom_educmen4 = [0, 1.9, 4, 6, 8, 18];

//Méthode des quintiles
var colDom_cs1 = [2, 8, 10, 13, 17, 24];
var colDom_cs2 = [8, 13, 17, 19, 25, 34];
var colDom_cs3 = [23, 34, 36, 39, 44, 58];
var colDom_cs4 = [8, 20, 23, 26, 28, 35];
var colDom_cs5 = [0, 3, 5, 6, 9, 15];

//Méthode des quintiles
var colDom_cspmen1 = [11, 18, 21, 25, 30, 39];
var colDom_cspmen2 = [13, 19, 21, 26, 30, 43];
var colDom_cspmen3 = [16, 26, 31, 35, 40, 56];
var colDom_cspmen4 = [3, 13, 14, 16, 18, 30];
var colDom_cspmen5 = [0, 1, 2, 3, 4, 10];

//Méthode des quintiles
var colDom_occ1 = [22, 35, 38, 44, 48, 59];
var colDom_occ2 = [0, 6, 8, 11, 12, 24];
var colDom_occ3 = [8, 15, 19, 22, 25, 38];
var colDom_occ4 = [12, 20, 22, 24, 27, 38];
var colDom_occ5 = [1, 4, 5, 6, 7, 13];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [38, 51, 63, 75, 88, 100];
var colDom_qpv2 = [0, 12, 25, 37, 49, 62];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 6, 9, 12, 15, 24];
var colDom_mod2 = [55, 66, 75, 79, 83, 93];
var colDom_mod3 = [0, 8, 11, 14, 21, 35];
