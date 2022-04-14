// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LA ROCHELLE';
// Nom de la ville centre
var nomVC = 'La Rochelle';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2011 - La Rochelle / Agglomération rochelaise, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.15, -1.1];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 11,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "LA ROCHELLE LES MINIMES";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [18000, 9000, 4000, 100],
datasetFlow = [12000, 6000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [74, 250, 500, 1500];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [80, 240, 400, 640, 1800, 2700, 3400, 6000, 10600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 9, 11, 13, 17, 54];
var colDom_age2 = [0, 6, 7, 9, 11, 24];
var colDom_age3 = [26, 46, 50, 54, 58, 70];
var colDom_age4 = [5, 18, 23, 28, 33, 46];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [6, 10, 15, 19, 23, 35];
var colDom_cleduc2 = [16, 26, 30, 33, 37, 47];
var colDom_cleduc3 = [9, 23, 26, 28, 32, 58];
var colDom_cleduc4 = [8, 17, 21, 24, 31, 45];

//Méthode des quintiles
var colDom_educmen1 = [5, 10, 16, 21, 23, 35];
var colDom_educmen2 = [17, 28, 32, 36, 39, 49];
var colDom_educmen3 = [9, 21, 24, 27, 30, 55];
var colDom_educmen4 = [8, 17, 20, 23, 30, 44];

//Méthode des quintiles
var colDom_cs1 = [0, 4, 5, 6, 8, 13];
var colDom_cs2 = [0, 4, 5, 6, 9, 19];
var colDom_cs3 = [26, 44, 47, 49, 52, 65];
var colDom_cs4 = [6, 13, 17, 19, 22, 32];
var colDom_cs5 = [7, 17, 20, 23, 24, 42];

//Méthode des quintiles
var colDom_cspmen1 = [1, 4, 5, 7, 9, 17];
var colDom_cspmen2 = [0, 4, 5, 7, 10, 20];
var colDom_cspmen3 = [25, 45, 49, 51, 54, 68];
var colDom_cspmen4 = [8, 13, 16, 18, 21, 30];
var colDom_cspmen5 = [6, 16, 19, 21, 23, 41];

//Méthode des quintiles
var colDom_occ1 = [25, 41, 46, 48, 54, 71];
var colDom_occ2 = [0, 5, 8, 10, 12, 54];
var colDom_occ3 = [0, 3, 5, 6, 10, 20];
var colDom_occ4 = [7, 24, 30, 34, 40, 53];
var colDom_occ5 = [0, 1.6, 3, 3, 4, 11];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [55, 65, 73, 82, 91, 100];
var colDom_qpv2 = [0, 9, 18, 27, 35, 45];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.2, 3, 5, 8, 21];
var colDom_mod2 = [32, 52, 62, 72, 78, 89];
var colDom_mod3 = [9, 19, 24, 32, 41, 66];
