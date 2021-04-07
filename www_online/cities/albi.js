// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ALBI';
// Nom de la ville centre
var nomVC = 'Albi';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2011 - Albi / Grand Albigeois, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.91, 2.15];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 11,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ALBI CENTRE, VIGAN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [10000, 5000, 2000, 100],
datasetFlow = [5000, 2500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [52, 250, 500, 1000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [40, 150, 350, 700, 1100, 1900, 2700, 3700, 5500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 11, 14, 19, 34];
var colDom_age2 = [0, 6, 7, 9, 11, 17];
var colDom_age3 = [36, 47, 50, 53, 58, 70];
var colDom_age4 = [12, 22, 26, 28, 31, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [4, 9, 10, 12, 16, 21];
var colDom_cleduc2 = [17, 31, 36, 38, 43, 56];
var colDom_cleduc3 = [18, 29, 31, 34, 36, 52];
var colDom_cleduc4 = [2, 11, 16, 21, 27, 38];

//Méthode des quintiles
var colDom_educmen1 = [5, 8, 10, 12, 16, 21];
var colDom_educmen2 = [21, 34, 38, 42, 46, 58];
var colDom_educmen3 = [16, 26, 30, 32, 36, 52];
var colDom_educmen4 = [2, 10, 15, 19, 23, 41];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 7, 11];
var colDom_cs2 = [0, 4, 6, 8, 10, 23];
var colDom_cs3 = [27, 52, 55, 57, 59, 68];
var colDom_cs4 = [6, 14, 17, 19, 22, 37];
var colDom_cs5 = [5, 10, 13, 16, 19, 29];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 4, 5, 7, 11];
var colDom_cspmen2 = [1, 4, 7, 8, 11, 25];
var colDom_cspmen3 = [28, 53, 56, 58, 61, 69];
var colDom_cspmen4 = [6, 12, 16, 17, 20, 35];
var colDom_cspmen5 = [3, 9, 12, 15, 19, 29];

//Méthode des quintiles
var colDom_occ1 = [29, 41, 45, 48, 53, 62];
var colDom_occ2 = [0, 5, 9, 12, 15, 30];
var colDom_occ3 = [0, 1.4, 2.4, 4, 7, 19];
var colDom_occ4 = [19, 29, 32, 35, 38, 52];
var colDom_occ5 = [0, 3, 5, 5, 7, 13];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [69, 75, 81, 88, 94, 100];
var colDom_qpv2 = [0, 6, 12, 19, 25, 31];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.9, 1.6, 2.3, 5, 15];
var colDom_mod2 = [38, 61, 71, 78, 87, 94];
var colDom_mod3 = [6, 12, 17, 26, 35, 58];
