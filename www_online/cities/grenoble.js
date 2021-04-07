// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'GRENOBLE';
// Nom de la ville centre
var nomVC = 'Grenoble';
// Année de fin d'enquête
var anneeED = '2010';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2010 - Grenoble / Grande région grenobloise, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.09, 5.7];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "GRENOBLE HYPER-CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [21000, 11000, 5000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [43, 500, 1000, 2200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [5, 110, 330, 920, 2100, 4100, 6700, 11000, 23300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 10, 12, 16, 62];
var colDom_age2 = [0, 8, 11, 14, 17, 34];
var colDom_age3 = [21, 45, 51, 55, 61, 77];
var colDom_age4 = [1, 17, 21, 24, 28, 48];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 5, 8, 10, 14, 36];
var colDom_cleduc2 = [13, 34, 41, 46, 52, 77];
var colDom_cleduc3 = [9, 20, 23, 25, 29, 43];
var colDom_cleduc4 = [1, 13, 18, 24, 33, 62];

//Méthode des quintiles
var colDom_educmen1 = [0, 6, 10, 13, 19, 44];
var colDom_educmen2 = [20, 40, 47, 53, 59, 82];
var colDom_educmen3 = [2, 15, 20, 24, 28, 42];
var colDom_educmen4 = [0, 7, 11, 16, 23, 53];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 7, 25];
var colDom_cs2 = [1, 11, 16, 20, 26, 43];
var colDom_cs3 = [7, 21, 25, 29, 33, 50];
var colDom_cs4 = [6, 23, 28, 32, 37, 54];
var colDom_cs5 = [0, 10, 15, 19, 28, 61];

//Méthode des quintiles
var colDom_cspmen1 = [0, 6, 8, 10, 13, 44];
var colDom_cspmen2 = [2, 15, 23, 28, 34, 57];
var colDom_cspmen3 = [8, 23, 27, 30, 35, 52];
var colDom_cspmen4 = [2, 18, 22, 27, 32, 49];
var colDom_cspmen5 = [0, 4, 6, 10, 17, 48];

//Méthode des quintiles
var colDom_occ1 = [25, 44, 49, 53, 57, 81];
var colDom_occ2 = [0, 4, 7, 9, 13, 67];
var colDom_occ3 = [0, 2, 4, 5, 7, 21];
var colDom_occ4 = [3, 22, 27, 31, 36, 58];
var colDom_occ5 = [0, 3, 4, 6, 8, 22];

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
var colDom_mod1 = [0, 2.3, 6, 11, 19, 55];
var colDom_mod2 = [14, 51, 68, 75, 83, 98];
var colDom_mod3 = [2, 13, 17, 23, 31, 66];
