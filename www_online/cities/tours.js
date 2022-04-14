// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'TOURS';
// Nom de la ville centre
var nomVC = 'Tours';
// Année de fin d'enquête
var anneeED = '2019';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2019 - Tours, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.26, 0.69];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "TOURS GRAMMONT";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [21000, 11000, 5000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 250, 500, 1900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [0, 70, 230, 730, 1700, 3300, 5100, 7200, 10800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 10, 13, 18, 51];
var colDom_age2 = [2, 9, 12, 14, 17, 29];
var colDom_age3 = [21, 42, 47, 51, 55, 66];
var colDom_age4 = [5, 20, 24, 27, 30, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [6, 15, 18, 22, 29, 56];
var colDom_strmfr2 = [7, 25, 31, 35, 39, 56];
var colDom_strmfr3 = [4, 12, 14, 17, 20, 31];
var colDom_strmfr4 = [9, 24, 28, 32, 36, 54];

//Méthode des quintiles
var colDom_cleduc1 = [0, 6, 8, 10, 13, 27];
var colDom_cleduc2 = [13, 32, 36, 40, 44, 54];
var colDom_cleduc3 = [14, 26, 29, 32, 35, 46];
var colDom_cleduc4 = [1, 15, 19, 23, 30, 55];

//Méthode des quintiles
var colDom_educmen1 = [0, 6, 9, 11, 14, 29];
var colDom_educmen2 = [15, 34, 38, 43, 49, 62];
var colDom_educmen3 = [9, 25, 28, 31, 34, 43];
var colDom_educmen4 = [0, 13, 17, 20, 26, 51];

//Méthode des quintiles
var colDom_cs1 = [0, 0.8, 1.9, 3, 5, 16];
var colDom_cs2 = [0, 11, 14, 17, 21, 39];
var colDom_cs3 = [24, 34, 38, 41, 46, 64];
var colDom_cs4 = [7, 20, 25, 28, 31, 42];
var colDom_cs5 = [0, 9, 12, 16, 22, 44];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.1, 3, 4, 7, 21];
var colDom_cspmen2 = [2, 13, 16, 19, 24, 44];
var colDom_cspmen3 = [21, 34, 39, 42, 48, 65];
var colDom_cspmen4 = [5, 18, 22, 26, 30, 40];
var colDom_cspmen5 = [0, 8, 10, 13, 17, 34];

//Méthode des quintiles
var colDom_occ1 = [22, 40, 45, 49, 53, 64];
var colDom_occ2 = [0, 5, 7, 10, 15, 54];
var colDom_occ3 = [0, 4, 5, 8, 11, 24];
var colDom_occ4 = [6, 26, 30, 35, 39, 57];
var colDom_occ5 = [0, 1.6, 2.5, 3, 4, 20];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [0, 20, 40, 60, 80, 100];
var colDom_qpv2 = [0, 20, 40, 60, 80, 100];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.6, 4, 7, 14, 39];
var colDom_mod2 = [18, 49, 69, 77, 80, 96];
var colDom_mod3 = [4, 16, 20, 26, 34, 68];
