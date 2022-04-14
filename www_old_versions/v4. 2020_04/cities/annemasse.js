// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ANNEMASSE';
// Nom de la ville centre
var nomVC = 'Annemasse';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Annemasse / Franco Valdo Genevois, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.16, 6.22];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[45.623642598278074, 5.18280029296875],
//north east
[46.69089949154197, 7.2564697265625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "ANNEMASSE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [17000, 9000, 4000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 250, 500, 1900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 100, 240, 530, 1200, 2400, 3900, 7000, 11700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 11, 12, 14, 27];
var colDom_age2 = [1, 12, 15, 17, 20, 31];
var colDom_age3 = [36, 49, 52, 55, 58, 68];
var colDom_age4 = [10, 15, 17, 19, 22, 35];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 4, 6, 8, 10, 19];
var colDom_cleduc2 = [15, 30, 35, 40, 44, 64];
var colDom_cleduc3 = [16, 26, 29, 32, 35, 45];
var colDom_cleduc4 = [6, 17, 22, 26, 32, 51];

//Méthode des quintiles
var colDom_educmen1 = [1, 5, 8, 9, 13, 20];
var colDom_educmen2 = [19, 33, 39, 44, 50, 71];
var colDom_educmen3 = [11, 24, 27, 31, 34, 44];
var colDom_educmen4 = [6, 14, 18, 22, 27, 45];

//Méthode des quintiles
var colDom_cs1 = [0, 0.9, 1.8, 3, 4, 10];
var colDom_cs2 = [0, 8, 11, 14, 20, 37];
var colDom_cs3 = [19, 31, 39, 50, 57, 71];
var colDom_cs4 = [4, 14, 17, 21, 28, 39];
var colDom_cs5 = [3, 13, 16, 20, 24, 40];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.2, 2.4, 4, 6, 14];
var colDom_cspmen2 = [1, 10, 14, 19, 28, 59];
var colDom_cspmen3 = [18, 33, 40, 51, 59, 73];
var colDom_cspmen4 = [4, 12, 15, 18, 24, 38];
var colDom_cspmen5 = [3, 9, 12, 14, 18, 31];

//Méthode des quintiles
var colDom_occ1 = [34, 51, 56, 60, 64, 72];
var colDom_occ2 = [0, 4, 6, 7, 9, 26];
var colDom_occ3 = [0, 4, 6, 8, 12, 28];
var colDom_occ4 = [13, 18, 22, 24, 28, 50];
var colDom_occ5 = [0, 3, 4, 6, 7, 15];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [63, 71, 78, 85, 93, 100];
var colDom_qpv2 = [0, 7, 15, 22, 29, 37];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.7, 3, 6, 8, 21];
var colDom_mod2 = [36, 61, 70, 77, 82, 89];
var colDom_mod3 = [7, 14, 20, 25, 32, 61];
