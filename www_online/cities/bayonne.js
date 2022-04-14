// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BAYONNE';
// Nom de la ville centre
var nomVC = 'Bayonne';
// Année de fin d'enquête
var anneeED = '2010';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2010 - Bayonne / Côte Basco-Landaise, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.49, -1.47];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[42.837709559849614, -2.318115234375],
//north east
[43.957236472025635, -0.24444580078125003]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "BAYONNE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [50, 250, 500, 1100];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 80, 240, 510, 950, 2200, 3500, 5400, 9700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 6, 8, 10, 12, 26];
var colDom_age2 = [2, 8, 10, 12, 14, 25];
var colDom_age3 = [30, 47, 52, 54, 57, 69];
var colDom_age4 = [14, 22, 25, 28, 33, 52];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [7, 12, 16, 19, 24, 41];
var colDom_strmfr2 = [15, 27, 30, 32, 35, 47];
var colDom_strmfr3 = [2, 16, 19, 22, 26, 43];
var colDom_strmfr4 = [10, 24, 28, 31, 35, 50];

//Méthode des quintiles
var colDom_cleduc1 = [1, 7, 10, 13, 20, 38];
var colDom_cleduc2 = [23, 38, 41, 44, 49, 75];
var colDom_cleduc3 = [6, 19, 23, 27, 31, 48];
var colDom_cleduc4 = [3, 13, 17, 19, 22, 37];

//Méthode des quintiles
var colDom_educmen1 = [1, 9, 13, 17, 23, 37];
var colDom_educmen2 = [27, 41, 45, 49, 54, 77];
var colDom_educmen3 = [4, 16, 20, 24, 29, 44];
var colDom_educmen4 = [0, 8, 11, 14, 18, 32];

//Méthode des quintiles
var colDom_cs1 = [0, 4, 6, 7, 9, 17];
var colDom_cs2 = [5, 10, 13, 17, 21, 36];
var colDom_cs3 = [15, 29, 33, 36, 40, 52];
var colDom_cs4 = [11, 23, 26, 30, 33, 49];
var colDom_cs5 = [2, 10, 13, 16, 19, 40];

//Méthode des quintiles
var colDom_cspmen1 = [2, 7, 10, 13, 17, 34];
var colDom_cspmen2 = [5, 15, 19, 24, 28, 57];
var colDom_cspmen3 = [15, 30, 35, 38, 42, 56];
var colDom_cspmen4 = [6, 15, 18, 23, 28, 46];
var colDom_cspmen5 = [0, 5, 7, 9, 11, 31];

//Méthode des quintiles
var colDom_occ1 = [23, 41, 47, 50, 54, 63];
var colDom_occ2 = [0, 3, 5, 7, 9, 26];
var colDom_occ3 = [0, 3, 4, 5, 8, 16];
var colDom_occ4 = [15, 26, 30, 34, 39, 57];
var colDom_occ5 = [1, 6, 7, 9, 10, 23];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [59, 67, 76, 84, 92, 100];
var colDom_qpv2 = [0, 8, 16, 24, 33, 41];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.8, 2, 3, 5, 15];
var colDom_mod2 = [47, 75, 82, 85, 89, 97];
var colDom_mod3 = [1, 8, 12, 16, 21, 48];
