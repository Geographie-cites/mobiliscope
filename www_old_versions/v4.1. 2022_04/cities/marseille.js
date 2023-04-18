// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'MARSEILLE';
// Nom de la ville centre
var nomVC = 'Marseille';
// Année de fin d'enquête
var anneeED = '2009';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2009 - Marseille / Bouches-du-Rhône, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.37, 5.45];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[43.092960677116295, 4.3231201171875],
//north east
[43.98491011404692, 6.17706298828125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "MARSEILLE BELSUNCE, CHAPITRE (1ER)";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [43000, 22000, 10000, 100],
datasetFlow = [28000, 14000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [30, 500, 1000, 3300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 200, 610, 1700, 3200, 5200, 9600, 17000, 38500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 10, 13, 16, 50];
var colDom_age2 = [1, 8, 11, 13, 16, 31];
var colDom_age3 = [18, 45, 49, 53, 58, 72];
var colDom_age4 = [8, 18, 22, 26, 29, 53];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [3, 12, 15, 18, 23, 51];
var colDom_strmfr2 = [10, 25, 29, 31, 35, 52];
var colDom_strmfr3 = [3, 15, 19, 22, 27, 48];
var colDom_strmfr4 = [2, 25, 30, 33, 38, 63];

//Méthode des quintiles
var colDom_cleduc1 = [0, 6, 9, 12, 17, 48];
var colDom_cleduc2 = [19, 44, 50, 55, 61, 80];
var colDom_cleduc3 = [1, 12, 16, 19, 22, 36];
var colDom_cleduc4 = [1, 10, 15, 20, 27, 56];

//Méthode des quintiles
var colDom_educmen1 = [1, 9, 13, 17, 22, 52];
var colDom_educmen2 = [20, 50, 54, 59, 65, 86];
var colDom_educmen3 = [1, 9, 13, 16, 20, 33];
var colDom_educmen4 = [0, 5, 9, 14, 19, 50];

//Méthode des quintiles
var colDom_cs1 = [0, 6, 8, 10, 12, 31];
var colDom_cs2 = [1, 9, 13, 16, 21, 38];
var colDom_cs3 = [13, 27, 31, 34, 39, 63];
var colDom_cs4 = [5, 19, 24, 28, 32, 51];
var colDom_cs5 = [0, 9, 13, 18, 23, 42];

//Méthode des quintiles
var colDom_cspmen1 = [2, 10, 14, 18, 23, 51];
var colDom_cspmen2 = [1, 12, 17, 23, 28, 60];
var colDom_cspmen3 = [14, 27, 32, 35, 40, 68];
var colDom_cspmen4 = [1, 13, 17, 21, 27, 48];
var colDom_cspmen5 = [0, 4, 6, 10, 14, 29];

//Méthode des quintiles
var colDom_occ1 = [19, 40, 45, 48, 52, 86];
var colDom_occ2 = [0, 4, 7, 8, 12, 59];
var colDom_occ3 = [0, 3, 5, 6, 9, 18];
var colDom_occ4 = [9, 23, 28, 32, 37, 58];
var colDom_occ5 = [0, 5, 7, 9, 12, 29];

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
var colDom_mod1 = [0, 2.3, 5, 9, 17, 46];
var colDom_mod2 = [17, 55, 68, 76, 82, 96];
var colDom_mod3 = [3, 13, 18, 23, 30, 68];
