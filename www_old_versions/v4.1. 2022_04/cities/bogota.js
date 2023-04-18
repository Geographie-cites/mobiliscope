// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BOGOTA';
// Nom de la ville centre
var nomVC = 'Bogotá';
// Année de fin d'enquête
var anneeED = '2019';

// Source des données
var dataSource = "Encuesta Origen – Destino de Hogares (EODH) 2019 - Bogotá /Aire métropolitaine de Bogotá, SDM-Steer-CNC (prod.), <a href=https://www.simur.gov.co/encuestas-de-movilidad target=_blank>Simur (distrib.)</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [4.66, -74.15];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 10,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[3.5956599859799567, -75.399169921875],
//north east
[5.6679180749727625, -72.7789306640625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = 'UTAM100';
var nameSec = "BOGOTÁ GALERIAS";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [220000, 150000, 50000, 1000],
datasetFlow = [190000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [6, 1000, 5000, 33100];

// Déclaration des brones de classes pour chaque modalité (load.js
// Moyennes emboîtées, 8 classes
var colDom_dens = [200, 4300, 8000, 11000, 14000, 16000, 20000, 26000, 76300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [4, 15, 18, 20, 24, 68];
var colDom_age2 = [3, 16, 18, 20, 23, 45];
var colDom_age3 = [21, 43, 45, 47, 49, 66];
var colDom_age4 = [0, 10, 13, 16, 19, 35];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strm1 = [0, 4, 5, 6, 9, 26];
var colDom_strm2 = [12, 26, 30, 34, 38, 72];
var colDom_strm3 = [1, 14, 16, 19, 23, 38];
var colDom_strm4 = [1, 15, 18, 20, 25, 40];
var colDom_strm5 = [0, 16, 21, 25, 30, 53];

//Méthode des quintiles
var colDom_cleduc1 = [2, 11, 19, 27, 36, 53];
var colDom_cleduc2 = [0, 22, 29, 33, 37, 67];
var colDom_cleduc3 = [7, 17, 21, 24, 27, 53];
var colDom_cleduc4 = [1, 7, 14, 24, 40, 74];

//Méthode des quintiles
var colDom_educmen1 = [0, 3, 6, 10, 14, 31];
var colDom_educmen2 = [0, 13, 20, 28, 36, 66];
var colDom_educmen3 = [0, 21, 27, 30, 35, 57];
var colDom_educmen4 = [2, 16, 29, 43, 60, 100];

//Méthode en amplitude égale
var colDom_rev1 = [0, 14, 29, 43, 57, 72];
var colDom_rev2 = [0, 12, 24, 36, 48, 60];
var colDom_rev3 = [0, 10, 19, 29, 38, 48];
var colDom_rev4 = [0, 10, 20, 29, 39, 49];
var colDom_rev5 = [0, 16, 33, 49, 65, 82];

//Méthode des quintiles
var colDom_cso1 = [0, 12, 17, 22, 29, 55];
var colDom_cso2 = [3, 21, 25, 29, 34, 76];
var colDom_cso3 = [1, 19, 25, 30, 37, 80];
var colDom_cso4 = [0, 7, 15, 24, 41, 81];

//Méthode des quintiles
var colDom_inf1 = [12, 39, 48, 58, 69, 95];
var colDom_inf2 = [5, 31, 42, 52, 61, 88];

//Méthode des quintiles
var colDom_occ1 = [20, 48, 53, 57, 62, 89];
var colDom_occ2 = [1, 8, 9, 11, 13, 69];
var colDom_occ3 = [0, 3, 4, 5, 7, 27];
var colDom_occ4 = [0, 2.4, 4, 6, 8, 24];
var colDom_occ5 = [2, 15, 21, 25, 31, 50];

//Méthode selon les seuils naturels (Fisher)
var colDom_zona1 = [0, 5, 43, 82, 95, 100];
var colDom_zona2 = [0, 13, 36, 65, 89, 100];
var colDom_zona3 = [0, 8, 29, 59, 85, 100];
var colDom_zona4 = [0, 14, 39, 60, 83, 100];

//Méthode des quintiles
var colDom_sse1 = [0, 1.3, 5, 9, 21, 100];
var colDom_sse2 = [0, 10, 22, 38, 72, 100];
var colDom_sse3 = [0, 4, 16, 30, 58, 100];
var colDom_sse4 = [0, 0.1, 0.9, 6, 38, 100];

//Méthode des quintiles
var colDom_log1 = [6, 23, 25, 28, 30, 45];
var colDom_log2 = [3, 24, 28, 31, 35, 69];
var colDom_log3 = [16, 38, 42, 46, 50, 85];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];
var colDom_act6 = [0, 2, 6, 14, 49, 85];

//Méthode des quintiles
var colDom_mod1 = [3, 17, 21, 25, 29, 64];
var colDom_mod2 = [0, 14, 19, 24, 30, 90];
var colDom_mod3 = [0, 25, 34, 42, 50, 75];
var colDom_mod4 = [0, 8, 13, 18, 23, 58];
