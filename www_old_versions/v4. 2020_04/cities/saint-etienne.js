// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SAINT ETIENNE';
// Nom de la ville centre
var nomVC = 'Saint-Étienne';
// Année de fin d'enquête
var anneeED = '2010';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2010 - Saint-Étienne / Bassin de vie stéphanois, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.4, 4.24];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.966741217055315, 3.44696044921875],
//north east
[45.83071305019327, 5.12786865234375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "SAINT-ETIENNE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [24000, 12000, 6000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [53, 250, 500, 1600];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [8, 90, 260, 630, 1400, 2500, 5200, 9100, 16300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 8, 10, 12, 14, 38];
var colDom_age2 = [2, 9, 11, 13, 15, 23];
var colDom_age3 = [27, 45, 50, 55, 58, 69];
var colDom_age4 = [12, 19, 23, 26, 30, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 7, 10, 12, 15, 25];
var colDom_cleduc2 = [33, 48, 52, 56, 59, 71];
var colDom_cleduc3 = [11, 19, 22, 25, 28, 39];
var colDom_cleduc4 = [2, 8, 10, 12, 16, 35];

//Méthode des quintiles
var colDom_educmen1 = [2, 9, 12, 15, 20, 33];
var colDom_educmen2 = [35, 55, 59, 63, 67, 85];
var colDom_educmen3 = [4, 14, 17, 19, 23, 38];
var colDom_educmen4 = [0, 3, 4, 6, 9, 32];

//Méthode des quintiles
var colDom_cs1 = [1, 3, 4, 6, 8, 18];
var colDom_cs2 = [8, 20, 24, 29, 34, 47];
var colDom_cs3 = [14, 23, 26, 29, 32, 43];
var colDom_cs4 = [10, 24, 28, 33, 38, 59];
var colDom_cs5 = [0, 5, 8, 10, 12, 22];

//Méthode des quintiles
var colDom_cspmen1 = [1, 5, 8, 11, 15, 30];
var colDom_cspmen2 = [15, 31, 35, 40, 45, 60];
var colDom_cspmen3 = [13, 21, 24, 28, 31, 44];
var colDom_cspmen4 = [4, 15, 20, 24, 29, 57];
var colDom_cspmen5 = [0, 1.5, 3, 4, 6, 12];

//Méthode des quintiles
var colDom_occ1 = [26, 40, 46, 50, 54, 63];
var colDom_occ2 = [0, 5, 6, 8, 11, 36];
var colDom_occ3 = [0, 3, 4, 6, 8, 14];
var colDom_occ4 = [16, 28, 31, 34, 37, 52];
var colDom_occ5 = [0, 4, 5, 7, 9, 18];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [52, 62, 72, 81, 91, 100];
var colDom_qpv2 = [0, 9, 19, 28, 38, 48];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.4, 3, 6, 13, 29];
var colDom_mod2 = [27, 56, 71, 77, 83, 93];
var colDom_mod3 = [6, 14, 19, 23, 31, 52];
