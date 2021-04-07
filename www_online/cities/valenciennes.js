// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'VALENCIENNES';
// Nom de la ville centre
var nomVC = 'Valenciennes';
// Année de fin d'enquête
var anneeED = '2019';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMC&sup2;) 2019 - Valenciennes / Valenciennois, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.38, 3.47];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "VALENCIENNES CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [9000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [72, 250, 500, 1200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [60, 200, 410, 640, 1100, 1800, 2800, 5100, 11100];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 12, 14, 19, 43];
var colDom_age2 = [3, 11, 14, 16, 20, 32];
var colDom_age3 = [31, 44, 48, 51, 54, 67];
var colDom_age4 = [10, 16, 19, 21, 26, 38];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 6, 8, 10, 13, 23];
var colDom_cleduc2 = [28, 38, 44, 52, 56, 73];
var colDom_cleduc3 = [9, 24, 27, 31, 35, 45];
var colDom_cleduc4 = [2, 8, 11, 14, 20, 36];

//Méthode des quintiles
var colDom_educmen1 = [0, 7, 10, 12, 16, 32];
var colDom_educmen2 = [32, 43, 49, 55, 62, 79];
var colDom_educmen3 = [9, 19, 23, 27, 31, 42];
var colDom_educmen4 = [1, 5, 8, 10, 17, 30];

//Méthode des quintiles
var colDom_cs1 = [0, 4, 7, 9, 14, 27];
var colDom_cs2 = [8, 18, 21, 25, 28, 40];
var colDom_cs3 = [27, 38, 40, 44, 47, 61];
var colDom_cs4 = [5, 12, 16, 19, 23, 38];
var colDom_cs5 = [0, 4, 5, 8, 12, 21];

//Méthode des quintiles
var colDom_cspmen1 = [0, 7, 12, 15, 21, 35];
var colDom_cspmen2 = [13, 21, 25, 30, 33, 45];
var colDom_cspmen3 = [22, 35, 38, 40, 44, 59];
var colDom_cspmen4 = [3, 9, 12, 15, 18, 29];
var colDom_cspmen5 = [0, 1.8, 3, 5, 9, 18];

//Méthode des quintiles
var colDom_occ1 = [16, 33, 38, 42, 47, 59];
var colDom_occ2 = [0, 4, 6, 9, 12, 40];
var colDom_occ3 = [2, 10, 13, 15, 19, 36];
var colDom_occ4 = [13, 22, 25, 29, 32, 55];
var colDom_occ5 = [0, 5, 7, 10, 12, 24];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [35, 48, 61, 74, 87, 100];
var colDom_qpv2 = [0, 13, 26, 39, 52, 65];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.5, 4, 8, 12, 28];
var colDom_mod2 = [29, 60, 65, 72, 78, 91];
var colDom_mod3 = [8, 17, 22, 26, 32, 59];
