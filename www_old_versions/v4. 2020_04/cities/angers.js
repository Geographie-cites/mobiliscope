// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ANGERS';
// Nom de la ville centre
var nomVC = 'Angers';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2012 - Angers / Pays Loire, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.46, -0.47];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ANGERS ST-JEAN, VOLTAIRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [21000, 11000, 5000, 100],
datasetFlow = [11000, 6000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 500, 1000, 2800];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 100, 290, 820, 1500, 2800, 4100, 6400, 10700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 10, 12, 14, 22, 54];
var colDom_age2 = [0, 8, 11, 14, 17, 23];
var colDom_age3 = [26, 45, 53, 56, 60, 68];
var colDom_age4 = [6, 16, 18, 20, 23, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 8, 10, 12, 15, 30];
var colDom_cleduc2 = [21, 33, 39, 44, 50, 61];
var colDom_cleduc3 = [15, 23, 26, 29, 32, 41];
var colDom_cleduc4 = [2, 12, 16, 22, 28, 40];

//Méthode des quintiles
var colDom_educmen1 = [4, 9, 12, 16, 18, 30];
var colDom_educmen2 = [22, 38, 43, 47, 53, 65];
var colDom_educmen3 = [12, 19, 23, 26, 31, 42];
var colDom_educmen4 = [1, 8, 12, 17, 23, 42];

//Méthode des quintiles
var colDom_cs1 = [0, 1.6, 3, 3, 5, 12];
var colDom_cs2 = [2, 11, 15, 19, 26, 39];
var colDom_cs3 = [22, 31, 36, 40, 43, 57];
var colDom_cs4 = [8, 18, 24, 29, 35, 54];
var colDom_cs5 = [3, 10, 12, 15, 20, 37];

//Méthode des quintiles
var colDom_cspmen1 = [0, 2, 4, 5, 7, 15];
var colDom_cspmen2 = [5, 15, 20, 26, 34, 52];
var colDom_cspmen3 = [22, 32, 35, 38, 43, 60];
var colDom_cspmen4 = [2, 15, 21, 27, 31, 54];
var colDom_cspmen5 = [0, 4, 7, 10, 15, 32];

//Méthode des quintiles
var colDom_occ1 = [30, 46, 51, 55, 60, 70];
var colDom_occ2 = [0, 5, 8, 10, 15, 51];
var colDom_occ3 = [0, 3, 4, 6, 8, 26];
var colDom_occ4 = [8, 20, 24, 27, 32, 65];
var colDom_occ5 = [0, 2, 3, 4, 5, 10];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [22, 38, 53, 69, 84, 100];
var colDom_qpv2 = [0, 16, 31, 47, 62, 78];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2, 5, 7, 11, 23];
var colDom_mod2 = [24, 60, 70, 77, 83, 91];
var colDom_mod3 = [6, 14, 18, 23, 30, 57];
