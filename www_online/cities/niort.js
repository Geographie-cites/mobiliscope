// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'NIORT';
// Nom de la ville centre
var nomVC = 'Niort';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2016 - Niort, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.27, -0.5];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "NIORT CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [9000, 5000, 2000, 100],
datasetFlow = [5000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 250, 500, 800];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 50, 200, 390, 760, 1700, 2300, 3900, 5500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [2, 7, 9, 11, 15, 28];
var colDom_age2 = [0, 7, 10, 13, 15, 22];
var colDom_age3 = [36, 48, 52, 55, 59, 68];
var colDom_age4 = [10, 19, 22, 25, 28, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [5, 11, 16, 20, 27, 47];
var colDom_strmfr2 = [12, 26, 30, 34, 37, 59];
var colDom_strmfr3 = [5, 12, 15, 17, 19, 29];
var colDom_strmfr4 = [10, 27, 31, 35, 39, 48];

//Méthode des quintiles
var colDom_cleduc1 = [2, 6, 8, 9, 11, 20];
var colDom_cleduc2 = [19, 30, 34, 38, 44, 58];
var colDom_cleduc3 = [16, 26, 30, 33, 37, 52];
var colDom_cleduc4 = [6, 14, 20, 25, 29, 40];

//Méthode des quintiles
var colDom_educmen1 = [2, 6, 8, 9, 11, 21];
var colDom_educmen2 = [18, 31, 36, 40, 45, 60];
var colDom_educmen3 = [14, 26, 30, 33, 37, 49];
var colDom_educmen4 = [7, 14, 19, 24, 28, 39];

//Méthode des quintiles
var colDom_cs1 = [0, 1.3, 3, 3, 5, 10];
var colDom_cs2 = [4, 10, 13, 15, 18, 36];
var colDom_cs3 = [25, 34, 37, 40, 42, 52];
var colDom_cs4 = [14, 29, 33, 35, 38, 46];
var colDom_cs5 = [0, 6, 8, 11, 15, 23];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.3, 3, 4, 6, 12];
var colDom_cspmen2 = [6, 12, 14, 16, 21, 36];
var colDom_cspmen3 = [22, 34, 36, 39, 41, 53];
var colDom_cspmen4 = [14, 28, 31, 34, 37, 47];
var colDom_cspmen5 = [1, 5, 8, 11, 14, 20];

//Méthode des quintiles
var colDom_occ1 = [24, 47, 52, 56, 60, 77];
var colDom_occ2 = [0, 5, 7, 8, 11, 24];
var colDom_occ3 = [1, 3, 5, 6, 8, 16];
var colDom_occ4 = [12, 24, 27, 31, 35, 59];
var colDom_occ5 = [0, 1.2, 2.1, 3, 5, 12];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [2, 22, 42, 61, 81, 100];
var colDom_qpv2 = [0, 19, 39, 58, 78, 98];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1, 2.2, 4, 7, 19];
var colDom_mod2 = [35, 62, 72, 78, 83, 94];
var colDom_mod3 = [5, 14, 19, 25, 32, 58];
