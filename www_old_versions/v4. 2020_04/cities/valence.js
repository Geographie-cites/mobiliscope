// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'VALENCE';
// Nom de la ville centre
var nomVC = 'Valence';
// Année de fin d'enquête
var anneeED = '2014';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2014 - Valence / Grand Rovaltain, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [44.95, 5.03];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.402391829093915, 3.9935302734375],
//north east
[45.49287107405929, 6.06719970703125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "VALENCE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [16000, 8000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [130, 250, 500, 1900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 80, 160, 350, 850, 1400, 2800, 5800, 9100];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 10, 12, 14, 35];
var colDom_age2 = [2, 11, 13, 14, 16, 28];
var colDom_age3 = [30, 48, 51, 54, 56, 68];
var colDom_age4 = [10, 20, 22, 24, 27, 36];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 6, 7, 9, 12, 20];
var colDom_cleduc2 = [28, 37, 42, 45, 48, 62];
var colDom_cleduc3 = [14, 27, 30, 32, 35, 45];
var colDom_cleduc4 = [7, 13, 16, 19, 22, 32];

//Méthode des quintiles
var colDom_educmen1 = [1, 7, 9, 11, 14, 31];
var colDom_educmen2 = [30, 42, 48, 52, 55, 67];
var colDom_educmen3 = [12, 23, 26, 28, 32, 42];
var colDom_educmen4 = [1, 8, 11, 14, 17, 27];

//Méthode des quintiles
var colDom_cs1 = [0, 1.7, 3, 4, 6, 16];
var colDom_cs2 = [8, 14, 17, 19, 23, 34];
var colDom_cs3 = [14, 28, 31, 34, 40, 50];
var colDom_cs4 = [13, 25, 27, 29, 32, 53];
var colDom_cs5 = [2, 11, 13, 16, 19, 34];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 5, 8, 10, 30];
var colDom_cspmen2 = [10, 18, 24, 28, 32, 53];
var colDom_cspmen3 = [14, 27, 31, 34, 40, 51];
var colDom_cspmen4 = [7, 19, 23, 26, 30, 41];
var colDom_cspmen5 = [1, 6, 8, 10, 13, 20];

//Méthode des quintiles
var colDom_occ1 = [22, 47, 51, 54, 57, 69];
var colDom_occ2 = [0, 4, 6, 7, 9, 32];
var colDom_occ3 = [0, 5, 6, 8, 10, 18];
var colDom_occ4 = [10, 24, 28, 31, 35, 45];
var colDom_occ5 = [0, 1.7, 3, 5, 7, 18];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [45, 57, 68, 78, 89, 100];
var colDom_qpv2 = [0, 11, 22, 32, 43, 55];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.9, 3, 4, 7, 20];
var colDom_mod2 = [37, 68, 74, 80, 84, 95];
var colDom_mod3 = [5, 13, 18, 23, 29, 48];
