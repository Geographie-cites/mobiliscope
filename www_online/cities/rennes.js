// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'RENNES';
// Nom de la ville centre
var nomVC = 'Rennes';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Rennes / Ille-et-Vilaine, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.16, -1.68];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 8,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.27177506640828, -3.7518310546875],
//north east
[48.91527985344383, -0.0439453125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "RENNES THABOR, FOUGERES, ALPHONSE GUERIN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [38000, 19000, 9000, 100],
datasetFlow = [26000, 13000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [140, 500, 1000, 4000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 80, 230, 570, 1200, 3500, 5900, 9400, 20200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 10, 14, 18, 43];
var colDom_age2 = [0, 10, 13, 15, 19, 33];
var colDom_age3 = [22, 46, 50, 54, 59, 72];
var colDom_age4 = [4, 15, 18, 22, 27, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 5, 7, 10, 23];
var colDom_cleduc2 = [12, 29, 34, 39, 45, 65];
var colDom_cleduc3 = [12, 27, 30, 33, 37, 48];
var colDom_cleduc4 = [5, 16, 21, 25, 34, 63];

//Méthode des quintiles
var colDom_educmen1 = [0, 4, 6, 7, 10, 23];
var colDom_educmen2 = [13, 30, 36, 42, 48, 69];
var colDom_educmen3 = [9, 26, 29, 33, 37, 49];
var colDom_educmen4 = [5, 14, 18, 23, 30, 59];

//Méthode des quintiles
var colDom_cs1 = [0, 0.4, 1.2, 3, 4, 14];
var colDom_cs2 = [3, 11, 16, 20, 26, 38];
var colDom_cs3 = [13, 25, 31, 34, 40, 57];
var colDom_cs4 = [12, 24, 28, 32, 37, 50];
var colDom_cs5 = [1, 9, 13, 17, 22, 48];

//Méthode des quintiles
var colDom_cspmen1 = [0, 0.6, 1.7, 4, 6, 18];
var colDom_cspmen2 = [3, 13, 18, 23, 28, 41];
var colDom_cspmen3 = [14, 26, 32, 36, 41, 61];
var colDom_cspmen4 = [11, 24, 27, 32, 35, 46];
var colDom_cspmen5 = [1, 7, 10, 13, 18, 39];

//Méthode des quintiles
var colDom_occ1 = [22, 45, 50, 55, 60, 77];
var colDom_occ2 = [0, 4, 7, 10, 14, 43];
var colDom_occ3 = [0, 4, 6, 8, 10, 27];
var colDom_occ4 = [6, 20, 25, 29, 35, 56];
var colDom_occ5 = [0, 0.8, 2.2, 3, 4, 10];

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
var colDom_mod1 = [0, 1.8, 4, 7, 13, 38];
var colDom_mod2 = [15, 58, 66, 71, 77, 92];
var colDom_mod3 = [7, 18, 23, 28, 33, 62];
