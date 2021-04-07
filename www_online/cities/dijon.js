// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'DIJON';
// Nom de la ville centre
var nomVC = 'Dijon';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Grand Dijon, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.3, 5.05];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "DIJON CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [24000, 12000, 6000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 500, 1000, 2300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 240, 760, 1600, 2400, 4100, 6300, 9800, 14600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [2, 9, 12, 15, 20, 51];
var colDom_age2 = [2, 11, 13, 15, 19, 32];
var colDom_age3 = [27, 43, 48, 51, 55, 67];
var colDom_age4 = [6, 16, 19, 22, 27, 39];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 6, 8, 11, 18];
var colDom_cleduc2 = [14, 24, 32, 39, 45, 61];
var colDom_cleduc3 = [11, 25, 31, 35, 38, 53];
var colDom_cleduc4 = [7, 15, 21, 28, 34, 59];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 7, 10, 13, 24];
var colDom_educmen2 = [17, 30, 37, 45, 50, 73];
var colDom_educmen3 = [8, 24, 29, 34, 39, 53];
var colDom_educmen4 = [2, 11, 16, 20, 26, 53];

//Méthode des quintiles
var colDom_cs1 = [0, 1.3, 1.9, 3, 4, 12];
var colDom_cs2 = [2, 7, 11, 15, 20, 33];
var colDom_cs3 = [21, 32, 38, 42, 48, 62];
var colDom_cs4 = [8, 15, 20, 26, 31, 41];
var colDom_cs5 = [4, 14, 17, 22, 27, 41];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.7, 3, 5, 7, 21];
var colDom_cspmen2 = [1, 11, 16, 22, 29, 41];
var colDom_cspmen3 = [21, 36, 40, 43, 49, 62];
var colDom_cspmen4 = [5, 12, 16, 23, 27, 39];
var colDom_cspmen5 = [1, 7, 11, 14, 18, 37];

//Méthode des quintiles
var colDom_occ1 = [24, 42, 49, 52, 58, 71];
var colDom_occ2 = [0, 6, 9, 11, 15, 52];
var colDom_occ3 = [0, 3, 6, 8, 11, 27];
var colDom_occ4 = [7, 21, 26, 29, 36, 54];
var colDom_occ5 = [0, 1.2, 1.9, 3, 4, 11];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [17, 34, 51, 67, 84, 100];
var colDom_qpv2 = [0, 16, 33, 49, 66, 83];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 6, 10, 14, 18, 33];
var colDom_mod2 = [21, 47, 59, 69, 75, 88];
var colDom_mod3 = [9, 15, 21, 27, 35, 59];
