// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BORDEAUX';
// Nom de la ville centre
var nomVC = 'Bordeaux';
// Année de fin d'enquête
var anneeED = '2009';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2009 - Bordeaux / Gironde, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [44.83, -0.58];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 8,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[43.72744458647464, -2.6531982421875],
//north east
[45.91294412737392, 1.494140625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "BORDEAUX VIEILLE VILLE EST";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [42000, 21000, 10000, 100],
datasetFlow = [16000, 8000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [79, 500, 1000, 7000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [7, 140, 550, 1300, 2300, 3600, 6300, 11000, 29700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 11, 14, 18, 54];
var colDom_age2 = [1, 9, 12, 14, 18, 39];
var colDom_age3 = [24, 45, 51, 54, 60, 79];
var colDom_age4 = [2, 14, 18, 21, 26, 51];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 8, 12, 17, 34];
var colDom_cleduc2 = [18, 34, 39, 45, 50, 66];
var colDom_cleduc3 = [6, 20, 23, 26, 30, 48];
var colDom_cleduc4 = [1, 14, 18, 24, 30, 61];

//Méthode des quintiles
var colDom_educmen1 = [0, 6, 11, 15, 19, 43];
var colDom_educmen2 = [18, 38, 45, 51, 55, 71];
var colDom_educmen3 = [6, 17, 21, 25, 29, 50];
var colDom_educmen4 = [0, 9, 12, 17, 24, 56];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 7, 15];
var colDom_cs2 = [1, 8, 11, 14, 19, 43];
var colDom_cs3 = [13, 29, 33, 37, 46, 64];
var colDom_cs4 = [7, 20, 24, 28, 32, 47];
var colDom_cs5 = [1, 10, 15, 19, 24, 52];

//Méthode des quintiles
var colDom_cspmen1 = [0, 4, 6, 9, 13, 30];
var colDom_cspmen2 = [1, 11, 15, 21, 28, 57];
var colDom_cspmen3 = [13, 30, 35, 39, 48, 67];
var colDom_cspmen4 = [3, 16, 20, 24, 28, 53];
var colDom_cspmen5 = [0, 6, 8, 11, 15, 43];

//Méthode des quintiles
var colDom_occ1 = [20, 43, 48, 52, 58, 91];
var colDom_occ2 = [0, 6, 8, 11, 15, 59];
var colDom_occ3 = [0, 3, 4, 6, 7, 20];
var colDom_occ4 = [3, 20, 26, 30, 35, 55];
var colDom_occ5 = [0, 3, 4, 6, 8, 23];

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
var colDom_mod1 = [0, 2.3, 5, 10, 17, 43];
var colDom_mod2 = [9, 56, 71, 78, 85, 98];
var colDom_mod3 = [1, 10, 15, 21, 29, 68];
