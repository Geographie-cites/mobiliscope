// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'DOUAI';
// Nom de la ville centre
var nomVC = 'Douai';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2012 - Douai / Grand Douaisis, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.38, 3.18];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 10,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[50.13378405461423, 2.66143798828125],
//north east
[50.62507306341435, 3.698272705078125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "DOUAI CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [9000, 5000, 2000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [93, 250, 500, 800];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [60, 220, 410, 630, 890, 1300, 2400, 4100, 8400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [2, 11, 13, 15, 17, 33];
var colDom_age2 = [7, 13, 15, 16, 18, 26];
var colDom_age3 = [32, 45, 48, 50, 53, 61];
var colDom_age4 = [12, 19, 20, 22, 24, 40];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [2, 9, 12, 15, 18, 28];
var colDom_cleduc2 = [27, 43, 49, 54, 62, 77];
var colDom_cleduc3 = [7, 18, 22, 25, 28, 42];
var colDom_cleduc4 = [1, 5, 7, 11, 17, 33];

//Méthode des quintiles
var colDom_educmen1 = [3, 12, 17, 21, 26, 39];
var colDom_educmen2 = [31, 47, 54, 61, 67, 81];
var colDom_educmen3 = [1, 11, 14, 18, 24, 45];
var colDom_educmen4 = [0, 1.6, 3, 5, 10, 27];

//Méthode des quintiles
var colDom_cs1 = [0, 6, 9, 12, 16, 25];
var colDom_cs2 = [7, 22, 27, 31, 36, 52];
var colDom_cs3 = [18, 28, 31, 33, 36, 50];
var colDom_cs4 = [5, 15, 18, 22, 26, 51];
var colDom_cs5 = [0, 3, 5, 7, 11, 25];

//Méthode des quintiles
var colDom_cspmen1 = [2, 13, 16, 21, 27, 40];
var colDom_cspmen2 = [13, 31, 35, 39, 45, 61];
var colDom_cspmen3 = [9, 20, 23, 28, 31, 42];
var colDom_cspmen4 = [0, 8, 12, 15, 21, 46];
var colDom_cspmen5 = [0, 0, 1, 1.8, 4, 20];

//Méthode des quintiles
var colDom_occ1 = [20, 36, 40, 43, 48, 62];
var colDom_occ2 = [0, 4, 7, 8, 10, 28];
var colDom_occ3 = [1, 8, 10, 12, 14, 23];
var colDom_occ4 = [14, 24, 26, 29, 32, 58];
var colDom_occ5 = [1, 7, 9, 11, 15, 24];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [46, 57, 68, 79, 89, 100];
var colDom_qpv2 = [0, 11, 21, 32, 43, 54];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.1, 4, 6, 9, 21];
var colDom_mod2 = [31, 65, 70, 75, 79, 91];
var colDom_mod3 = [7, 16, 20, 24, 29, 56];
