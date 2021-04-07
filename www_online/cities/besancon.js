// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BESANCON';
// Nom de la ville centre
var nomVC = 'Besançon';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2018 - Besançon, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.26, 5.92];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '114';
var nameSec = "BESANCON REPUBLIQUE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [20000, 10000, 5000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [94, 250, 500, 1300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 110, 530, 1300, 2400, 4100, 5800, 8300, 11000];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 12, 16, 24, 49];
var colDom_age2 = [1, 10, 13, 15, 18, 26];
var colDom_age3 = [25, 40, 46, 51, 54, 65];
var colDom_age4 = [4, 17, 21, 24, 29, 41];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 6, 7, 10, 21];
var colDom_cleduc2 = [8, 28, 34, 38, 45, 63];
var colDom_cleduc3 = [12, 24, 28, 30, 33, 42];
var colDom_cleduc4 = [6, 19, 25, 30, 37, 68];

//Méthode des quintiles
var colDom_educmen1 = [0, 4, 7, 9, 12, 26];
var colDom_educmen2 = [10, 32, 38, 43, 50, 64];
var colDom_educmen3 = [7, 23, 26, 28, 31, 40];
var colDom_educmen4 = [4, 15, 21, 27, 33, 68];

//Méthode des quintiles
var colDom_cs1 = [0, 1.1, 2.3, 3, 5, 16];
var colDom_cs2 = [2, 10, 13, 16, 21, 43];
var colDom_cs3 = [18, 32, 35, 38, 41, 53];
var colDom_cs4 = [7, 20, 24, 27, 31, 47];
var colDom_cs5 = [1, 13, 16, 20, 25, 53];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.7, 3, 5, 8, 21];
var colDom_cspmen2 = [2, 12, 15, 20, 26, 43];
var colDom_cspmen3 = [18, 32, 36, 40, 43, 57];
var colDom_cspmen4 = [8, 18, 22, 25, 29, 45];
var colDom_cspmen5 = [0, 9, 12, 15, 21, 50];

//Méthode des quintiles
var colDom_occ1 = [25, 41, 44, 48, 53, 63];
var colDom_occ2 = [0, 6, 9, 12, 21, 50];
var colDom_occ3 = [0, 4, 7, 8, 10, 28];
var colDom_occ4 = [6, 21, 27, 30, 36, 58];
var colDom_occ5 = [0, 1.7, 3, 4, 6, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];

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
var colDom_mod1 = [0, 3, 9, 14, 18, 27];
var colDom_mod2 = [16, 42, 54, 69, 79, 91];
var colDom_mod3 = [9, 16, 22, 32, 42, 69];
