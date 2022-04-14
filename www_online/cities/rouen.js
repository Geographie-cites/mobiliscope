// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ROUEN';
// Nom de la ville centre
var nomVC = 'Rouen';
// Année de fin d'enquête
var anneeED = '2017';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2017 - Rouen, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.46, 1.07];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[48.956777213851424, 0.032958984375],
//north east
[49.95828842806968, 2.10662841796875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ROUEN HYPERCENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [23000, 12000, 5000, 100],
datasetFlow = [15000, 8000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 500, 1000, 2200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 140, 440, 990, 1800, 3100, 4800, 9200, 18400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 10, 12, 14, 17, 68];
var colDom_age2 = [3, 12, 14, 15, 18, 29];
var colDom_age3 = [14, 44, 48, 52, 55, 63];
var colDom_age4 = [5, 17, 20, 22, 25, 52];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [4, 12, 16, 19, 25, 56];
var colDom_strmfr2 = [13, 24, 30, 32, 36, 60];
var colDom_strmfr3 = [6, 14, 17, 20, 23, 32];
var colDom_strmfr4 = [10, 26, 30, 33, 38, 49];

//Méthode des quintiles
var colDom_cleduc1 = [0, 5, 8, 12, 15, 36];
var colDom_cleduc2 = [11, 37, 43, 47, 51, 65];
var colDom_cleduc3 = [5, 22, 25, 28, 30, 47];
var colDom_cleduc4 = [0, 11, 15, 19, 26, 65];

//Méthode des quintiles
var colDom_educmen1 = [1, 7, 11, 15, 19, 41];
var colDom_educmen2 = [17, 44, 49, 54, 58, 74];
var colDom_educmen3 = [3, 17, 21, 25, 28, 43];
var colDom_educmen4 = [0, 6, 9, 12, 17, 58];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 8, 27];
var colDom_cs2 = [3, 18, 23, 27, 31, 45];
var colDom_cs3 = [12, 25, 29, 31, 34, 50];
var colDom_cs4 = [8, 20, 26, 29, 33, 47];
var colDom_cs5 = [0, 7, 10, 13, 18, 45];

//Méthode des quintiles
var colDom_cspmen1 = [0, 5, 7, 10, 15, 41];
var colDom_cspmen2 = [5, 26, 31, 37, 42, 57];
var colDom_cspmen3 = [14, 23, 26, 30, 33, 46];
var colDom_cspmen4 = [4, 13, 19, 23, 29, 48];
var colDom_cspmen5 = [0, 3, 5, 7, 11, 36];

//Méthode des quintiles
var colDom_occ1 = [19, 42, 47, 51, 56, 69];
var colDom_occ2 = [0, 5, 8, 10, 14, 70];
var colDom_occ3 = [0, 5, 7, 9, 11, 26];
var colDom_occ4 = [6, 22, 26, 29, 33, 60];
var colDom_occ5 = [0, 2.2, 3, 5, 7, 18];

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
var colDom_mod1 = [0, 3, 6, 10, 14, 37];
var colDom_mod2 = [21, 57, 70, 80, 87, 98];
var colDom_mod3 = [1, 9, 14, 18, 30, 67];
