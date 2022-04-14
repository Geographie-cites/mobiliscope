// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'CARCASSONNE';
// Nom de la ville centre
var nomVC = 'Carcassonne';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2015 - Carcassonne, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.24, 2.41];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CARCASSONNE CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [10000, 5000, 2000, 100],
datasetFlow = [7000, 3500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [72, 250, 500, 900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [8, 40, 110, 230, 1200, 2600, 3500, 5100, 8500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 5, 7, 8, 13, 29];
var colDom_age2 = [2, 9, 12, 13, 16, 27];
var colDom_age3 = [33, 48, 51, 54, 57, 68];
var colDom_age4 = [13, 21, 24, 27, 31, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [5, 9, 11, 13, 14, 19];
var colDom_cleduc2 = [14, 29, 33, 36, 40, 46];
var colDom_cleduc3 = [22, 30, 33, 35, 39, 54];
var colDom_cleduc4 = [7, 15, 19, 22, 24, 31];

//Méthode des quintiles
var colDom_educmen1 = [5, 9, 11, 13, 15, 21];
var colDom_educmen2 = [14, 30, 33, 38, 43, 51];
var colDom_educmen3 = [20, 29, 31, 35, 39, 55];
var colDom_educmen4 = [7, 14, 18, 21, 24, 29];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 7, 13];
var colDom_cs2 = [6, 11, 13, 16, 20, 27];
var colDom_cs3 = [21, 36, 39, 42, 45, 58];
var colDom_cs4 = [15, 25, 28, 31, 34, 42];
var colDom_cs5 = [3, 7, 8, 11, 14, 20];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 5, 6, 7, 16];
var colDom_cspmen2 = [6, 13, 15, 17, 21, 30];
var colDom_cspmen3 = [20, 37, 40, 43, 46, 57];
var colDom_cspmen4 = [14, 23, 27, 30, 32, 42];
var colDom_cspmen5 = [3, 6, 8, 10, 13, 18];

//Méthode des quintiles
var colDom_occ1 = [26, 39, 43, 47, 54, 68];
var colDom_occ2 = [0, 2.1, 3, 5, 7, 27];
var colDom_occ3 = [2, 7, 8, 10, 12, 22];
var colDom_occ4 = [17, 25, 29, 33, 38, 52];
var colDom_occ5 = [1, 5, 7, 8, 10, 19];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [41, 53, 65, 76, 88, 100];
var colDom_qpv2 = [0, 12, 24, 35, 47, 59];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.5, 1.7, 3, 3, 12];
var colDom_mod2 = [40, 64, 69, 76, 83, 94];
var colDom_mod3 = [5, 16, 22, 27, 34, 56];
