// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LONGWY';
// Nom de la ville centre
var nomVC = 'Longwy';
// Année de fin d'enquête
var anneeED = '2014';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2014 - Longwy / Nord 54 et Pays-Haut Val d’Alzette, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.33, 5.81];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '120';
var nameSec = "LONGWY BAS";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [9000, 5000, 2000, 100],
datasetFlow = [3000, 1500, 500, 100];

// Seuils des liens (carte et légende flow)
var sLink = [100, 250, 500, 900];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 70, 130, 230, 490, 690, 1300, 2100, 3200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [2, 9, 10, 12, 14, 30];
var colDom_age2 = [5, 12, 13, 15, 16, 22];
var colDom_age3 = [33, 45, 48, 50, 53, 60];
var colDom_age4 = [17, 21, 24, 27, 31, 41];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [10, 14, 17, 19, 21, 30];
var colDom_strmfr2 = [19, 29, 31, 33, 35, 46];
var colDom_strmfr3 = [10, 17, 19, 20, 24, 34];
var colDom_strmfr4 = [11, 26, 29, 32, 35, 41];

//Méthode des quintiles
var colDom_cleduc1 = [8, 16, 18, 20, 23, 35];
var colDom_cleduc2 = [23, 39, 43, 45, 48, 59];
var colDom_cleduc3 = [10, 21, 24, 27, 30, 36];
var colDom_cleduc4 = [2, 7, 10, 12, 17, 30];

//Méthode des quintiles
var colDom_educmen1 = [8, 16, 18, 21, 24, 35];
var colDom_educmen2 = [30, 42, 45, 48, 50, 59];
var colDom_educmen3 = [8, 19, 23, 25, 28, 34];
var colDom_educmen4 = [1, 6, 9, 11, 15, 26];

//Méthode des quintiles
var colDom_cs1 = [3, 6, 7, 9, 11, 17];
var colDom_cs2 = [12, 21, 25, 28, 32, 42];
var colDom_cs3 = [24, 41, 44, 47, 50, 58];
var colDom_cs4 = [1, 9, 10, 12, 16, 24];
var colDom_cs5 = [1, 6, 8, 9, 12, 18];

//Méthode des quintiles
var colDom_cspmen1 = [3, 6, 8, 9, 11, 17];
var colDom_cspmen2 = [14, 23, 27, 30, 35, 51];
var colDom_cspmen3 = [23, 39, 43, 46, 49, 56];
var colDom_cspmen4 = [0, 8, 9, 11, 14, 22];
var colDom_cspmen5 = [1, 5, 7, 9, 11, 14];

//Méthode des quintiles
var colDom_occ1 = [23, 36, 42, 45, 51, 59];
var colDom_occ2 = [0, 3, 5, 7, 9, 26];
var colDom_occ3 = [2, 5, 7, 9, 10, 18];
var colDom_occ4 = [19, 26, 28, 31, 36, 53];
var colDom_occ5 = [5, 9, 10, 12, 14, 26];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [65, 72, 79, 86, 93, 100];
var colDom_qpv2 = [0, 7, 14, 21, 28, 35];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.3, 3, 4, 6, 20];
var colDom_mod2 = [52, 64, 71, 75, 78, 89];
var colDom_mod3 = [8, 18, 22, 25, 30, 46];
