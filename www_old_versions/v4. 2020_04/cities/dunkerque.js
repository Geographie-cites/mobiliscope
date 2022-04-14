// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'DUNKERQUE';
// Nom de la ville centre
var nomVC = 'Dunkerque';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2015 - Flandres-Dunkerque, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.95, 2.33];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "DUNKERQUE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [13000, 7000, 3000, 100],
datasetFlow = [9000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 250, 500, 1000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 110, 410, 900, 1500, 2400, 3500, 4500, 6400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [2, 9, 12, 14, 16, 33];
var colDom_age2 = [4, 12, 15, 16, 18, 24];
var colDom_age3 = [31, 47, 50, 53, 57, 65];
var colDom_age4 = [5, 15, 19, 21, 24, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 7, 10, 13, 16, 34];
var colDom_cleduc2 = [28, 41, 46, 52, 57, 69];
var colDom_cleduc3 = [11, 21, 25, 29, 33, 44];
var colDom_cleduc4 = [1, 8, 9, 13, 17, 40];

//Méthode des quintiles
var colDom_educmen1 = [2, 8, 12, 15, 20, 38];
var colDom_educmen2 = [28, 43, 55, 59, 64, 79];
var colDom_educmen3 = [7, 15, 20, 25, 31, 41];
var colDom_educmen4 = [0, 3, 5, 9, 12, 24];

//Méthode des quintiles
var colDom_cs1 = [0, 4, 5, 7, 10, 21];
var colDom_cs2 = [8, 20, 24, 30, 33, 44];
var colDom_cs3 = [18, 26, 30, 33, 37, 50];
var colDom_cs4 = [8, 21, 24, 27, 33, 51];
var colDom_cs5 = [0, 4, 5, 7, 12, 34];

//Méthode des quintiles
var colDom_cspmen1 = [1, 6, 10, 14, 19, 35];
var colDom_cspmen2 = [10, 24, 32, 37, 43, 62];
var colDom_cspmen3 = [14, 23, 27, 30, 34, 49];
var colDom_cspmen4 = [4, 11, 15, 22, 28, 46];
var colDom_cspmen5 = [0, 1.5, 3, 4, 7, 20];

//Méthode des quintiles
var colDom_occ1 = [23, 41, 46, 52, 56, 71];
var colDom_occ2 = [0, 4, 6, 8, 10, 23];
var colDom_occ3 = [1, 6, 8, 10, 13, 29];
var colDom_occ4 = [9, 20, 25, 28, 32, 60];
var colDom_occ5 = [0, 3, 6, 8, 11, 19];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [38, 51, 63, 76, 88, 100];
var colDom_qpv2 = [0, 12, 24, 37, 49, 62];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.4, 4, 5, 7, 21];
var colDom_mod2 = [46, 66, 72, 77, 81, 91];
var colDom_mod3 = [4, 15, 19, 24, 28, 47];
