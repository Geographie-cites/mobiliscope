// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'THIONVILLE';
// Nom de la ville centre
var nomVC = 'Thionville';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2012 - Thionville / Fensch, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.37, 6.1];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 11,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "THIONVILLE CENTRE-VILLE, GARE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [12000, 6000, 3000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [87, 250, 500, 1000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [50, 180, 470, 770, 1100, 1400, 2500, 3700, 5300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 10, 12, 14, 16, 33];
var colDom_age2 = [1, 9, 11, 13, 16, 22];
var colDom_age3 = [34, 46, 49, 52, 55, 66];
var colDom_age4 = [12, 19, 22, 25, 29, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [5, 9, 12, 14, 17, 25];
var colDom_cleduc2 = [30, 45, 47, 52, 57, 72];
var colDom_cleduc3 = [13, 26, 31, 36, 42, 61];
var colDom_cleduc4 = [0, 0.8, 1.6, 2.3, 3, 10];

//Méthode des quintiles
var colDom_educmen1 = [5, 10, 12, 15, 17, 25];
var colDom_educmen2 = [34, 47, 51, 55, 59, 75];
var colDom_educmen3 = [11, 24, 28, 33, 38, 58];
var colDom_educmen4 = [0, 0.7, 1.3, 2.2, 4, 10];

//Méthode des quintiles
var colDom_cs1 = [1, 4, 5, 7, 9, 20];
var colDom_cs2 = [1, 12, 16, 19, 22, 32];
var colDom_cs3 = [34, 45, 48, 51, 54, 63];
var colDom_cs4 = [5, 10, 11, 13, 18, 26];
var colDom_cs5 = [2, 9, 11, 14, 17, 33];

//Méthode des quintiles
var colDom_cspmen1 = [1, 5, 6, 8, 10, 20];
var colDom_cspmen2 = [1, 13, 17, 20, 24, 35];
var colDom_cspmen3 = [31, 45, 48, 51, 54, 64];
var colDom_cspmen4 = [4, 9, 11, 13, 18, 28];
var colDom_cspmen5 = [2, 7, 10, 13, 16, 28];

//Méthode des quintiles
var colDom_occ1 = [25, 40, 47, 51, 56, 68];
var colDom_occ2 = [0, 6, 8, 10, 12, 28];
var colDom_occ3 = [0, 3, 5, 7, 8, 14];
var colDom_occ4 = [13, 24, 27, 31, 36, 52];
var colDom_occ5 = [1, 3, 5, 7, 9, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [1, 21, 41, 61, 80, 100];
var colDom_qpv2 = [0, 20, 39, 59, 79, 99];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 3, 6, 7, 10, 16];
var colDom_mod2 = [41, 60, 68, 73, 79, 86];
var colDom_mod3 = [8, 16, 20, 25, 32, 53];
