// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LYON';
// Nom de la ville centre
var nomVC = 'Lyon';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2015 - Lyon / Aire métropolitaine lyonnaise, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.8, 4.91];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.715513732021336, 3.4716796874999996],
//north east
[46.86394700508323, 6.35009765625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "LYON CONFLUENT (2E)";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [35000, 18000, 8000, 100],
datasetFlow = [31000, 16000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [160, 500, 1000, 2300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 240, 770, 1900, 3900, 6800, 11000, 17000, 40300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 10, 13, 15, 19, 68];
var colDom_age2 = [0, 11, 14, 17, 20, 34];
var colDom_age3 = [13, 43, 48, 52, 57, 70];
var colDom_age4 = [2, 15, 18, 21, 24, 40];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 6, 8, 11, 26];
var colDom_cleduc2 = [7, 26, 33, 39, 45, 64];
var colDom_cleduc3 = [13, 26, 29, 32, 35, 47];
var colDom_cleduc4 = [4, 15, 20, 27, 37, 65];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 7, 10, 14, 33];
var colDom_educmen2 = [7, 30, 38, 43, 50, 73];
var colDom_educmen3 = [6, 25, 29, 32, 36, 49];
var colDom_educmen4 = [1, 11, 15, 21, 29, 61];

//Méthode des quintiles
var colDom_cs1 = [0, 1.6, 3, 4, 7, 23];
var colDom_cs2 = [0, 8, 12, 16, 22, 37];
var colDom_cs3 = [9, 25, 30, 36, 48, 66];
var colDom_cs4 = [2, 18, 22, 26, 31, 47];
var colDom_cs5 = [1, 12, 17, 23, 29, 56];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 5, 8, 12, 45];
var colDom_cspmen2 = [0, 10, 15, 20, 30, 53];
var colDom_cspmen3 = [10, 26, 30, 37, 50, 70];
var colDom_cspmen4 = [2, 15, 19, 23, 28, 48];
var colDom_cspmen5 = [0, 8, 11, 15, 22, 47];

//Méthode des quintiles
var colDom_occ1 = [21, 46, 51, 55, 60, 84];
var colDom_occ2 = [0, 5, 8, 11, 16, 73];
var colDom_occ3 = [0, 3, 5, 7, 10, 22];
var colDom_occ4 = [3, 19, 23, 26, 30, 48];
var colDom_occ5 = [0, 1.9, 3, 5, 7, 20];

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
var colDom_mod1 = [0, 4, 9, 17, 28, 54];
var colDom_mod2 = [6, 36, 61, 71, 78, 94];
var colDom_mod3 = [2, 14, 19, 25, 34, 63];
