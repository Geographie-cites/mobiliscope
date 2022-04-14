// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'IDF';
// Nom de la ville centre
var nomVC = 'Paris';
// Année de fin d'enquête
var anneeED = '2010';

// Source des données
var dataSource = "Enquête Globale Transport (EGT) 2010 - Paris / Ile-de-France, DRIEA-STIF-OMNIL (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.71, 2.5];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 8,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.879512933970496, 0.4449462890625],
//north east
[49.50380954152213, 4.15283203125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '7501';
var nameSec = "PARIS CENTRE, RIVE DROITE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [270000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [320, 1000, 5000, 13900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [30, 590, 1700, 3300, 5500, 9000, 16000, 25000, 44400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [3, 9, 11, 13, 14, 23];
var colDom_age2 = [5, 14, 16, 18, 20, 34];
var colDom_age3 = [36, 50, 53, 55, 58, 70];
var colDom_age4 = [5, 13, 15, 17, 20, 36];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 3, 6, 8, 12, 24];
var colDom_cleduc2 = [6, 24, 32, 37, 44, 62];
var colDom_cleduc3 = [13, 23, 26, 28, 31, 45];
var colDom_cleduc4 = [6, 19, 25, 32, 45, 72];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 9, 12, 17, 29];
var colDom_educmen2 = [8, 29, 38, 44, 49, 74];
var colDom_educmen3 = [9, 21, 24, 27, 30, 53];
var colDom_educmen4 = [2, 12, 16, 23, 37, 69];

//Méthode en amplitude égale
var colDom_rev1 = [5, 15, 24, 34, 43, 53];
var colDom_rev2 = [15, 25, 35, 44, 54, 64];
var colDom_rev3 = [3, 11, 19, 27, 34, 43];
var colDom_rev4 = [0, 9, 19, 28, 38, 48];

//Méthode des quintiles
var colDom_cs1 = [1, 7, 8, 10, 13, 32];
var colDom_cs2 = [1, 9, 12, 16, 20, 34];
var colDom_cs3 = [11, 20, 23, 26, 29, 45];
var colDom_cs4 = [9, 25, 27, 29, 32, 48];
var colDom_cs5 = [5, 13, 18, 23, 33, 53];

//Méthode des quintiles
var colDom_cspmen1 = [2, 11, 13, 16, 20, 39];
var colDom_cspmen2 = [1, 12, 18, 22, 26, 44];
var colDom_cspmen3 = [11, 21, 24, 27, 29, 44];
var colDom_cspmen4 = [5, 20, 24, 28, 31, 52];
var colDom_cspmen5 = [0, 6, 10, 13, 22, 44];

//Méthode des quintiles
var colDom_occ1 = [32, 51, 55, 58, 61, 82];
var colDom_occ2 = [1, 7, 8, 9, 11, 22];
var colDom_occ3 = [0, 5, 6, 7, 9, 17];
var colDom_occ4 = [6, 18, 20, 22, 26, 44];
var colDom_occ5 = [0, 4, 5, 7, 8, 21];

//Méthode jenks
var colDom_dep1 = [0, 4, 17, 50, 87, 100];
var colDom_dep2 = [0, 4, 17, 50, 87, 100];
var colDom_dep3 = [0, 4, 17, 50, 87, 100];
var colDom_dep4 = [0, 4, 17, 50, 87, 100];
var colDom_dep5 = [0, 4, 17, 50, 87, 100];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [21, 37, 53, 69, 84, 100];
var colDom_qpv2 = [0, 16, 31, 47, 63, 79];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [1, 12, 17, 24, 32, 74];
var colDom_mod2 = [6, 29, 46, 57, 65, 84];
var colDom_mod3 = [11, 21, 26, 31, 39, 58];
