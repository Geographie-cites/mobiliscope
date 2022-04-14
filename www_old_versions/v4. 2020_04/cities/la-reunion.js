// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LA REUNION';
// Nom de la ville centre
var nomVC = 'Saint-Denis';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Saint-Denis / La Réunion, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-21.13, 55.53];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "SAINT-DENIS BARACHOIS, JARDIN DE L'ETAT";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [16000, 8000, 4000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [60, 250, 500, 1400];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 200, 420, 760, 1300, 2400, 3800, 5700, 9500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 13, 16, 18, 21, 43];
var colDom_age2 = [1, 12, 15, 17, 19, 34];
var colDom_age3 = [35, 50, 53, 56, 59, 73];
var colDom_age4 = [3, 10, 12, 13, 16, 25];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 13, 16, 18, 22, 36];
var colDom_cleduc2 = [20, 40, 45, 50, 56, 69];
var colDom_cleduc3 = [6, 17, 21, 24, 28, 45];
var colDom_cleduc4 = [0, 6, 9, 13, 18, 45];

//Méthode des quintiles
var colDom_educmen1 = [2, 20, 25, 29, 34, 53];
var colDom_educmen2 = [23, 42, 47, 51, 56, 71];
var colDom_educmen3 = [1, 10, 14, 18, 22, 40];
var colDom_educmen4 = [0, 3, 5, 8, 12, 32];

//Méthode des quintiles
var colDom_cs1 = [1, 9, 12, 15, 20, 39];
var colDom_cs2 = [1, 11, 16, 20, 26, 39];
var colDom_cs3 = [17, 31, 36, 40, 49, 69];
var colDom_cs4 = [4, 16, 19, 22, 26, 45];
var colDom_cs5 = [0, 3, 5, 7, 10, 26];

//Méthode des quintiles
var colDom_cspmen1 = [1, 15, 22, 27, 34, 55];
var colDom_cspmen2 = [2, 14, 21, 26, 32, 54];
var colDom_cspmen3 = [9, 23, 28, 35, 48, 70];
var colDom_cspmen4 = [2, 9, 12, 15, 19, 49];
var colDom_cspmen5 = [0, 0.8, 2, 3, 5, 16];

//Méthode des quintiles
var colDom_occ1 = [11, 34, 39, 43, 48, 71];
var colDom_occ2 = [0, 6, 9, 11, 14, 41];
var colDom_occ3 = [4, 16, 21, 25, 30, 43];
var colDom_occ4 = [3, 11, 13, 15, 18, 33];
var colDom_occ5 = [1, 7, 9, 11, 14, 29];

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
var colDom_mod1 = [0, 3, 5, 8, 11, 25];
var colDom_mod2 = [30, 60, 67, 73, 78, 96];
var colDom_mod3 = [2, 15, 20, 25, 32, 53];
