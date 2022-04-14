// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'AMIENS';
// Nom de la ville centre
var nomVC = 'Amiens';
// Année de fin d'enquête
var anneeED = '2010';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2010 - Amiens / Grand Amiénois, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.93, 2.25];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[49.43062632296463, 1.2139892578125],
//north east
[50.42251884281916, 3.28765869140625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "AMIENS CENTRE-VILLE SUD";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [17000, 9000, 4000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [50, 250, 500, 1400];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 70, 280, 760, 1800, 3900, 5400, 7800, 14100];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 8, 11, 14, 21, 48];
var colDom_age2 = [1, 11, 14, 16, 20, 34];
var colDom_age3 = [21, 44, 50, 53, 57, 70];
var colDom_age4 = [6, 14, 18, 21, 24, 35];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 7, 11, 14, 16, 29];
var colDom_cleduc2 = [23, 43, 49, 53, 58, 76];
var colDom_cleduc3 = [7, 20, 23, 27, 30, 42];
var colDom_cleduc4 = [0, 0.7, 9, 17, 23, 49];

//Méthode des quintiles
var colDom_educmen1 = [0, 8, 13, 16, 19, 28];
var colDom_educmen2 = [27, 49, 54, 57, 60, 79];
var colDom_educmen3 = [3, 16, 21, 24, 28, 39];
var colDom_educmen4 = [0, 0.5, 5, 11, 18, 44];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 6, 8, 21];
var colDom_cs2 = [4, 11, 15, 19, 24, 41];
var colDom_cs3 = [17, 33, 37, 40, 43, 60];
var colDom_cs4 = [5, 20, 23, 26, 31, 43];
var colDom_cs5 = [1, 8, 11, 14, 18, 40];

//Méthode des quintiles
var colDom_cspmen1 = [0, 5, 6, 8, 13, 36];
var colDom_cspmen2 = [4, 14, 20, 26, 33, 47];
var colDom_cspmen3 = [11, 31, 35, 39, 44, 59];
var colDom_cspmen4 = [1, 15, 20, 23, 29, 40];
var colDom_cspmen5 = [0, 5, 7, 9, 13, 25];

//Méthode des quintiles
var colDom_occ1 = [22, 43, 48, 51, 56, 79];
var colDom_occ2 = [0, 4, 6, 9, 15, 46];
var colDom_occ3 = [0, 3, 5, 6, 8, 28];
var colDom_occ4 = [8, 20, 25, 28, 33, 50];
var colDom_occ5 = [1, 4, 6, 8, 10, 26];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [8, 27, 45, 63, 82, 100];
var colDom_qpv2 = [0, 18, 37, 55, 73, 92];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.7, 3, 6, 11, 24];
var colDom_mod2 = [25, 56, 67, 73, 79, 93];
var colDom_mod3 = [4, 17, 22, 28, 37, 66];
