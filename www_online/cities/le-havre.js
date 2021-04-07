// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LE HAVRE';
// Nom de la ville centre
var nomVC = 'Le Havre';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Le Havre, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.48, 0.4];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[48.97661158387714, -0.648193359375],
//north east
[49.97772150663492, 1.44744873046875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "LE HAVRE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [26000, 13000, 6000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [55, 500, 1000, 3300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 100, 300, 820, 2000, 4100, 5800, 10000, 17100];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 11, 13, 17, 40];
var colDom_age2 = [1, 9, 11, 14, 17, 29];
var colDom_age3 = [22, 45, 50, 53, 57, 70];
var colDom_age4 = [6, 18, 22, 25, 29, 43];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [2, 6, 9, 11, 13, 27];
var colDom_cleduc2 = [14, 36, 41, 45, 50, 67];
var colDom_cleduc3 = [13, 24, 27, 32, 35, 48];
var colDom_cleduc4 = [3, 10, 14, 18, 23, 54];

//Méthode des quintiles
var colDom_educmen1 = [2, 6, 9, 11, 15, 30];
var colDom_educmen2 = [16, 39, 44, 49, 54, 72];
var colDom_educmen3 = [9, 21, 26, 30, 34, 45];
var colDom_educmen4 = [3, 9, 12, 15, 20, 53];

//Méthode des quintiles
var colDom_cs1 = [0, 1, 1.9, 3, 6, 15];
var colDom_cs2 = [4, 13, 17, 21, 25, 38];
var colDom_cs3 = [23, 37, 40, 43, 47, 60];
var colDom_cs4 = [6, 17, 22, 25, 28, 42];
var colDom_cs5 = [1, 7, 11, 13, 17, 33];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1, 3, 5, 8, 28];
var colDom_cspmen2 = [5, 16, 20, 25, 29, 46];
var colDom_cspmen3 = [26, 36, 39, 43, 47, 62];
var colDom_cspmen4 = [5, 15, 20, 24, 27, 38];
var colDom_cspmen5 = [1, 5, 7, 10, 13, 30];

//Méthode des quintiles
var colDom_occ1 = [19, 39, 44, 49, 53, 84];
var colDom_occ2 = [0, 4, 7, 9, 12, 36];
var colDom_occ3 = [0, 4, 6, 9, 13, 26];
var colDom_occ4 = [10, 24, 28, 33, 38, 54];
var colDom_occ5 = [0, 2.1, 3, 6, 8, 18];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [12, 30, 48, 65, 83, 100];
var colDom_qpv2 = [0, 17, 35, 52, 70, 88];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.5, 4, 8, 13, 34];
var colDom_mod2 = [27, 58, 67, 74, 81, 94];
var colDom_mod3 = [4, 14, 20, 25, 33, 66];
