// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'NICE';
// Nom de la ville centre
var nomVC = 'Nice';
// Année de fin d'enquête
var anneeED = '2009';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2009 - Nice / Alpes-Maritimes, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.66, 7.14];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[43.35314407444698, 6.04248046875],
//north east
[44.46319080919909, 8.11614990234375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "NICE VIEILLE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [18000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [25, 500, 1000, 3300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [4, 400, 1200, 2800, 4400, 6900, 11000, 17000, 34200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 6, 8, 10, 13, 39];
var colDom_age2 = [0, 6, 8, 10, 13, 24];
var colDom_age3 = [25, 42, 47, 51, 57, 71];
var colDom_age4 = [5, 24, 29, 34, 39, 64];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [5, 14, 19, 23, 28, 42];
var colDom_strmfr2 = [16, 28, 31, 35, 38, 60];
var colDom_strmfr3 = [1, 13, 17, 20, 23, 44];
var colDom_strmfr4 = [7, 21, 25, 29, 34, 53];

//Méthode des quintiles
var colDom_cleduc1 = [0, 8, 12, 15, 20, 45];
var colDom_cleduc2 = [8, 31, 36, 40, 47, 71];
var colDom_cleduc3 = [3, 17, 20, 23, 27, 50];
var colDom_cleduc4 = [0, 16, 22, 27, 34, 69];

//Méthode des quintiles
var colDom_educmen1 = [1, 10, 14, 18, 22, 49];
var colDom_educmen2 = [13, 34, 38, 43, 49, 70];
var colDom_educmen3 = [4, 17, 21, 24, 28, 48];
var colDom_educmen4 = [0, 11, 16, 22, 27, 55];

//Méthode des quintiles
var colDom_cs1 = [0, 5, 6, 7, 9, 20];
var colDom_cs2 = [1, 8, 11, 14, 17, 40];
var colDom_cs3 = [13, 27, 32, 36, 41, 64];
var colDom_cs4 = [8, 23, 26, 29, 33, 47];
var colDom_cs5 = [1, 11, 15, 18, 22, 55];

//Méthode des quintiles
var colDom_cspmen1 = [1, 8, 11, 14, 17, 36];
var colDom_cspmen2 = [2, 11, 17, 20, 26, 45];
var colDom_cspmen3 = [18, 30, 34, 38, 43, 67];
var colDom_cspmen4 = [1, 17, 21, 23, 27, 43];
var colDom_cspmen5 = [0, 5, 8, 10, 13, 34];

//Méthode des quintiles
var colDom_occ1 = [18, 37, 42, 46, 52, 77];
var colDom_occ2 = [0, 3, 5, 7, 9, 35];
var colDom_occ3 = [0, 2.4, 4, 5, 6, 16];
var colDom_occ4 = [7, 30, 36, 41, 45, 70];
var colDom_occ5 = [0, 4, 6, 7, 9, 26];

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
var colDom_mod1 = [0, 3, 6, 10, 15, 34];
var colDom_mod2 = [17, 45, 59, 69, 80, 96];
var colDom_mod3 = [0, 13, 23, 32, 42, 69];
