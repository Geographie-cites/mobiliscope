// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SAINT BRIEUC';
// Nom de la ville centre
var nomVC = 'Saint-Brieuc';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2012 - Saint-Brieuc / Agglomération Baie d'Armor, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.5, -2.77];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 11,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '022';
var nameSec = "SAINT-BRIEUC CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [10000, 5000, 2000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [54, 250, 500, 1000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [30, 170, 310, 680, 1200, 2000, 2800, 3800, 7300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 7, 11, 15, 17, 40];
var colDom_age2 = [0, 4, 6, 9, 12, 23];
var colDom_age3 = [33, 50, 53, 57, 61, 71];
var colDom_age4 = [12, 19, 22, 24, 28, 46];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [5, 8, 9, 11, 13, 25];
var colDom_cleduc2 = [20, 28, 35, 39, 43, 64];
var colDom_cleduc3 = [15, 29, 32, 35, 37, 49];
var colDom_cleduc4 = [5, 14, 17, 20, 25, 41];

//Méthode des quintiles
var colDom_educmen1 = [5, 8, 9, 11, 13, 25];
var colDom_educmen2 = [20, 30, 36, 41, 45, 57];
var colDom_educmen3 = [19, 28, 31, 33, 38, 47];
var colDom_educmen4 = [2, 13, 16, 19, 24, 41];

//Méthode des quintiles
var colDom_cs1 = [1, 3, 4, 5, 6, 12];
var colDom_cs2 = [1, 5, 6, 8, 10, 16];
var colDom_cs3 = [33, 47, 51, 55, 59, 72];
var colDom_cs4 = [7, 15, 18, 21, 23, 31];
var colDom_cs5 = [1, 12, 15, 18, 21, 26];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 4, 5, 7, 15];
var colDom_cspmen2 = [1, 5, 7, 8, 10, 18];
var colDom_cspmen3 = [32, 46, 52, 55, 61, 77];
var colDom_cspmen4 = [6, 14, 17, 20, 23, 33];
var colDom_cspmen5 = [1, 10, 14, 17, 21, 28];

//Méthode des quintiles
var colDom_occ1 = [24, 45, 49, 52, 58, 70];
var colDom_occ2 = [0, 4, 7, 9, 14, 35];
var colDom_occ3 = [0, 1.8, 3, 4, 5, 21];
var colDom_occ4 = [20, 26, 30, 33, 38, 65];
var colDom_occ5 = [0, 1.6, 2.2, 3, 4, 10];

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
var colDom_mod1 = [0, 1.5, 3, 4, 7, 15];
var colDom_mod2 = [42, 66, 72, 76, 81, 89];
var colDom_mod3 = [9, 16, 20, 24, 30, 53];
