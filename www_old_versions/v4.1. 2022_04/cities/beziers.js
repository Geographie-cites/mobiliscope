// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BEZIERS';
// Nom de la ville centre
var nomVC = 'Béziers';
// Année de fin d'enquête
var anneeED = '2014';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2014 - Béziers / Biterrois et nord-ouest Hérault, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.44, 3.06];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[42.87797684287408, 2.340087890625],
//north east
[43.99676629896825, 3.779296875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "BEZIERS GARE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [7000, 3500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 250, 500, 900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [8, 70, 140, 300, 1100, 2500, 3900, 5300, 7700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 9, 10, 12, 34];
var colDom_age2 = [1, 9, 10, 12, 14, 22];
var colDom_age3 = [35, 46, 49, 51, 53, 64];
var colDom_age4 = [16, 25, 28, 30, 33, 41];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [13, 22, 25, 30, 34, 52];
var colDom_strmfr2 = [10, 24, 27, 30, 32, 49];
var colDom_strmfr3 = [3, 12, 15, 17, 20, 38];
var colDom_strmfr4 = [12, 21, 24, 28, 32, 44];

//Méthode des quintiles
var colDom_cleduc1 = [6, 11, 12, 14, 16, 22];
var colDom_cleduc2 = [29, 37, 40, 43, 47, 64];
var colDom_cleduc3 = [14, 24, 28, 31, 33, 39];
var colDom_cleduc4 = [4, 12, 14, 17, 19, 28];

//Méthode des quintiles
var colDom_educmen1 = [7, 11, 13, 15, 17, 25];
var colDom_educmen2 = [29, 39, 42, 45, 49, 65];
var colDom_educmen3 = [13, 22, 25, 29, 33, 42];
var colDom_educmen4 = [3, 11, 13, 15, 18, 31];

//Méthode des quintiles
var colDom_cs1 = [0, 2.4, 3, 4, 5, 11];
var colDom_cs2 = [2, 9, 11, 13, 15, 28];
var colDom_cs3 = [34, 43, 46, 50, 53, 65];
var colDom_cs4 = [9, 19, 23, 25, 29, 42];
var colDom_cs5 = [3, 9, 11, 12, 14, 19];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 4, 5, 6, 13];
var colDom_cspmen2 = [5, 10, 13, 14, 16, 30];
var colDom_cspmen3 = [34, 43, 46, 50, 53, 66];
var colDom_cspmen4 = [8, 18, 21, 24, 28, 45];
var colDom_cspmen5 = [3, 8, 10, 11, 13, 17];

//Méthode des quintiles
var colDom_occ1 = [25, 36, 41, 45, 50, 68];
var colDom_occ2 = [0, 2.4, 4, 6, 8, 28];
var colDom_occ3 = [1, 6, 8, 10, 14, 29];
var colDom_occ4 = [19, 31, 35, 38, 42, 53];
var colDom_occ5 = [1, 3, 4, 5, 6, 11];

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
var colDom_mod1 = [0, 0.8, 2, 3, 6, 22];
var colDom_mod2 = [32, 61, 65, 68, 75, 88];
var colDom_mod3 = [10, 21, 29, 33, 36, 56];
