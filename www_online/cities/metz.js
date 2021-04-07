// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'METZ';
// Nom de la ville centre
var nomVC = 'Metz';
// Année de fin d'enquête
var anneeED = '2017';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2017 - Metz Métropole, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.12, 6.18];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "METZ HYPERCENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [19000, 10000, 4000, 100],
datasetFlow = [12000, 6000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [100, 250, 500, 1200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 130, 320, 610, 1200, 2000, 2900, 5200, 10800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 8, 11, 13, 15, 51];
var colDom_age2 = [2, 10, 13, 15, 17, 25];
var colDom_age3 = [31, 47, 50, 53, 56, 66];
var colDom_age4 = [5, 18, 21, 24, 28, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 5, 7, 9, 11, 27];
var colDom_cleduc2 = [20, 31, 37, 43, 48, 61];
var colDom_cleduc3 = [13, 25, 28, 31, 34, 43];
var colDom_cleduc4 = [3, 15, 19, 24, 31, 51];

//Méthode des quintiles
var colDom_educmen1 = [1, 6, 9, 11, 14, 27];
var colDom_educmen2 = [26, 37, 44, 49, 53, 65];
var colDom_educmen3 = [11, 21, 25, 28, 31, 45];
var colDom_educmen4 = [1, 10, 15, 19, 24, 42];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 6, 8, 19];
var colDom_cs2 = [5, 15, 18, 23, 27, 47];
var colDom_cs3 = [15, 22, 27, 32, 37, 51];
var colDom_cs4 = [10, 23, 27, 30, 34, 47];
var colDom_cs5 = [1, 8, 12, 16, 20, 33];

//Méthode des quintiles
var colDom_cspmen1 = [0, 4, 6, 9, 12, 35];
var colDom_cspmen2 = [6, 20, 24, 29, 35, 47];
var colDom_cspmen3 = [10, 21, 28, 32, 37, 51];
var colDom_cspmen4 = [6, 19, 24, 27, 30, 42];
var colDom_cspmen5 = [1, 5, 8, 10, 14, 25];

//Méthode des quintiles
var colDom_occ1 = [19, 42, 47, 52, 55, 71];
var colDom_occ2 = [0, 5, 6, 9, 11, 54];
var colDom_occ3 = [0, 5, 7, 9, 12, 22];
var colDom_occ4 = [5, 23, 26, 29, 34, 53];
var colDom_occ5 = [0, 3, 5, 6, 9, 21];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [10, 29, 46, 64, 82, 100];
var colDom_qpv2 = [0, 18, 36, 54, 71, 90];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.3, 5, 8, 12, 32];
var colDom_mod2 = [24, 59, 68, 73, 78, 90];
var colDom_mod3 = [8, 17, 21, 25, 31, 67];
