// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'QUIMPER';
// Nom de la ville centre
var nomVC = 'Quimper';
// Année de fin d'enquête
var anneeED = '2013';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2013 - Quimper / Cornouaille, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.98, -4.02];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.535746978239125, -5.0262451171875],
//north east
[48.35989909002194, -3.17230224609375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '011';
var nameSec = "CHATEAULIN ; DINEAULT ; PLOMODIERN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [18000, 9000, 4000, 100],
datasetFlow = [12000, 6000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 250, 500, 1700];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 70, 150, 270, 520, 1500, 2400, 4200, 7300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 6, 8, 9, 12, 37];
var colDom_age2 = [0, 5, 8, 10, 12, 27];
var colDom_age3 = [37, 50, 53, 57, 61, 74];
var colDom_age4 = [12, 21, 25, 28, 32, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [3, 8, 11, 12, 14, 21];
var colDom_cleduc2 = [35, 45, 52, 55, 57, 66];
var colDom_cleduc3 = [18, 28, 33, 37, 45, 57];
var colDom_cleduc4 = [0, 0, 0.3, 0.8, 1.3, 10];

//Méthode des quintiles
var colDom_educmen1 = [2, 9, 11, 13, 15, 24];
var colDom_educmen2 = [37, 48, 54, 57, 60, 71];
var colDom_educmen3 = [14, 24, 30, 35, 41, 55];
var colDom_educmen4 = [0, 0, 0.3, 0.7, 1.3, 10];

//Méthode des quintiles
var colDom_cs1 = [0, 1.4, 3, 4, 5, 10];
var colDom_cs2 = [5, 11, 14, 19, 21, 33];
var colDom_cs3 = [24, 35, 39, 42, 45, 59];
var colDom_cs4 = [9, 21, 24, 28, 34, 43];
var colDom_cs5 = [3, 8, 11, 13, 18, 35];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.8, 3, 4, 6, 11];
var colDom_cspmen2 = [6, 12, 16, 21, 25, 37];
var colDom_cspmen3 = [20, 35, 39, 42, 45, 63];
var colDom_cspmen4 = [9, 20, 23, 27, 30, 39];
var colDom_cspmen5 = [3, 7, 10, 12, 16, 29];

//Méthode des quintiles
var colDom_occ1 = [31, 44, 49, 53, 57, 74];
var colDom_occ2 = [0, 4, 5, 7, 10, 36];
var colDom_occ3 = [0, 2.3, 3, 4, 6, 12];
var colDom_occ4 = [15, 28, 31, 36, 42, 58];
var colDom_occ5 = [0, 1.4, 3, 4, 5, 10];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [61, 69, 77, 85, 92, 100];
var colDom_qpv2 = [0, 8, 15, 23, 31, 39];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.6, 1.7, 3, 5, 27];
var colDom_mod2 = [49, 74, 79, 82, 86, 94];
var colDom_mod3 = [6, 12, 15, 18, 23, 41];
