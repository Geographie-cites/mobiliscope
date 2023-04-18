// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'STRASBOURG';
// Nom de la ville centre
var nomVC = 'Strasbourg';
// Année de fin d'enquête
var anneeED = '2009';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2009 - Strasbourg / Bas-Rhin, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.67, 7.55];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.76886840424207, 5.4437255859375],
//north east
[49.396675075193976, 9.151611328125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '037';
var nameSec = "STRASBOURG ELLIPSE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [35000, 18000, 8000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [53, 500, 1000, 3700];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [30, 140, 360, 960, 2000, 3800, 6200, 11000, 27000];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [1, 8, 11, 13, 17, 45];
var colDom_age2 = [3, 10, 14, 17, 20, 35];
var colDom_age3 = [16, 45, 49, 52, 56, 68];
var colDom_age4 = [5, 16, 19, 22, 26, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [2, 11, 14, 18, 24, 46];
var colDom_strmfr2 = [10, 24, 28, 31, 34, 48];
var colDom_strmfr3 = [8, 19, 23, 25, 30, 39];
var colDom_strmfr4 = [11, 24, 27, 30, 35, 53];

//Méthode des quintiles
var colDom_cleduc1 = [0, 9, 13, 17, 20, 33];
var colDom_cleduc2 = [17, 36, 43, 47, 52, 71];
var colDom_cleduc3 = [9, 19, 23, 26, 28, 40];
var colDom_cleduc4 = [1, 9, 12, 17, 24, 60];

//Méthode des quintiles
var colDom_educmen1 = [0, 13, 18, 23, 28, 44];
var colDom_educmen2 = [19, 40, 46, 51, 56, 78];
var colDom_educmen3 = [6, 14, 18, 21, 26, 36];
var colDom_educmen4 = [0, 5, 6, 10, 16, 54];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 5, 6, 8, 21];
var colDom_cs2 = [1, 14, 18, 22, 28, 46];
var colDom_cs3 = [14, 25, 28, 31, 34, 44];
var colDom_cs4 = [11, 24, 27, 30, 33, 52];
var colDom_cs5 = [1, 9, 12, 16, 21, 46];

//Méthode des quintiles
var colDom_cspmen1 = [0, 7, 9, 11, 15, 41];
var colDom_cspmen2 = [7, 20, 25, 31, 39, 60];
var colDom_cspmen3 = [12, 26, 29, 32, 37, 52];
var colDom_cspmen4 = [4, 15, 20, 24, 27, 41];
var colDom_cspmen5 = [0, 2.4, 5, 8, 11, 31];

//Méthode des quintiles
var colDom_occ1 = [31, 47, 50, 54, 58, 74];
var colDom_occ2 = [0, 5, 7, 9, 12, 47];
var colDom_occ3 = [0, 3, 4, 6, 8, 21];
var colDom_occ4 = [5, 21, 26, 31, 36, 56];
var colDom_occ5 = [0, 2.3, 4, 5, 7, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [0, 21, 41, 60, 80, 100];
var colDom_qpv2 = [0, 20, 40, 59, 79, 100];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 3, 5, 9, 17, 39];
var colDom_mod2 = [7, 49, 63, 72, 77, 93];
var colDom_mod3 = [5, 18, 23, 27, 34, 78];
