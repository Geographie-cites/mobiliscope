// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'POITIERS';
// Nom de la ville centre
var nomVC = 'Poitiers';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Poitiers, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.55, 0.35];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[46.01794608850014, -0.6866455078125],
//north east
[47.07760411715964, 1.38702392578125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "POITIERS CENTRE-VILLE NORD";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [80, 250, 500, 1900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 60, 170, 620, 1100, 2800, 4400, 7600, 10200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 10, 13, 21, 48];
var colDom_age2 = [2, 9, 11, 13, 16, 26];
var colDom_age3 = [22, 46, 49, 52, 56, 64];
var colDom_age4 = [4, 18, 21, 25, 28, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 6, 7, 9, 12, 18];
var colDom_cleduc2 = [11, 29, 31, 34, 39, 48];
var colDom_cleduc3 = [18, 27, 30, 33, 37, 49];
var colDom_cleduc4 = [12, 20, 24, 27, 31, 62];

//Méthode des quintiles
var colDom_educmen1 = [0, 6, 8, 10, 12, 19];
var colDom_educmen2 = [11, 30, 33, 37, 40, 49];
var colDom_educmen3 = [15, 27, 30, 33, 37, 44];
var colDom_educmen4 = [11, 18, 22, 26, 30, 57];

//Méthode des quintiles
var colDom_cs1 = [0, 0.9, 1.9, 3, 4, 10];
var colDom_cs2 = [0, 4, 6, 8, 11, 23];
var colDom_cs3 = [34, 48, 51, 54, 57, 69];
var colDom_cs4 = [9, 16, 19, 22, 25, 35];
var colDom_cs5 = [5, 13, 15, 18, 23, 33];

//Méthode des quintiles
var colDom_cspmen1 = [0, 0.7, 2.1, 3, 4, 10];
var colDom_cspmen2 = [0, 4, 7, 9, 12, 25];
var colDom_cspmen3 = [35, 48, 51, 54, 58, 70];
var colDom_cspmen4 = [9, 15, 19, 22, 25, 36];
var colDom_cspmen5 = [4, 10, 13, 16, 22, 35];

//Méthode des quintiles
var colDom_occ1 = [31, 43, 50, 55, 59, 69];
var colDom_occ2 = [0, 4, 6, 10, 17, 46];
var colDom_occ3 = [0, 2.1, 3, 4, 6, 15];
var colDom_occ4 = [6, 22, 28, 32, 37, 58];
var colDom_occ5 = [0, 0.8, 1.7, 3, 3, 10];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [65, 73, 80, 86, 93, 100];
var colDom_qpv2 = [0, 7, 14, 20, 27, 35];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0, 1.6, 4, 9, 24];
var colDom_mod2 = [25, 63, 75, 80, 84, 92];
var colDom_mod3 = [7, 13, 18, 21, 26, 65];
