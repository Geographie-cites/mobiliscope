// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'CLERMONT FERRAND';
// Nom de la ville centre
var nomVC = 'Clermont-Ferrand';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2012 - Clermont-Ferrand / Val d'Allier, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.77, 3.15];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.68427737181225, 1.1480712890624998],
//north east
[46.83389173208538, 5.295410156249999]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "CLERMONT FERRAND PLATEAU CENTRAL";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [31000, 16000, 7000, 100],
datasetFlow = [21000, 11000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 500, 1000, 3400];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 60, 200, 500, 1400, 2900, 6100, 12000, 25500];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 10, 12, 15, 58];
var colDom_age2 = [0, 8, 11, 13, 16, 26];
var colDom_age3 = [18, 47, 52, 56, 59, 72];
var colDom_age4 = [5, 17, 21, 24, 28, 43];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 5, 8, 14, 18, 35];
var colDom_cleduc2 = [18, 33, 38, 43, 49, 73];
var colDom_cleduc3 = [7, 24, 26, 30, 33, 43];
var colDom_cleduc4 = [4, 11, 16, 20, 26, 50];

//Méthode des quintiles
var colDom_educmen1 = [0, 7, 11, 15, 20, 35];
var colDom_educmen2 = [22, 37, 42, 49, 56, 83];
var colDom_educmen3 = [4, 20, 25, 28, 31, 42];
var colDom_educmen4 = [2, 8, 11, 15, 20, 44];

//Méthode des quintiles
var colDom_cs1 = [0, 2.4, 3, 4, 6, 20];
var colDom_cs2 = [3, 9, 12, 16, 21, 40];
var colDom_cs3 = [14, 30, 35, 46, 52, 67];
var colDom_cs4 = [7, 17, 23, 27, 31, 52];
var colDom_cs5 = [2, 9, 12, 17, 21, 34];

//Méthode des quintiles
var colDom_cspmen1 = [0, 3, 4, 6, 9, 30];
var colDom_cspmen2 = [4, 11, 15, 22, 29, 52];
var colDom_cspmen3 = [11, 29, 37, 47, 54, 67];
var colDom_cspmen4 = [4, 15, 19, 23, 27, 45];
var colDom_cspmen5 = [0, 6, 8, 11, 15, 25];

//Méthode des quintiles
var colDom_occ1 = [25, 44, 50, 53, 57, 75];
var colDom_occ2 = [0, 4, 6, 9, 12, 63];
var colDom_occ3 = [0, 2.2, 4, 5, 7, 15];
var colDom_occ4 = [5, 24, 29, 32, 36, 54];
var colDom_occ5 = [0, 2.4, 3, 5, 6, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [68, 74, 81, 87, 94, 100];
var colDom_qpv2 = [0, 6, 13, 19, 26, 32];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.8, 3, 5, 8, 30];
var colDom_mod2 = [23, 65, 72, 78, 81, 94];
var colDom_mod3 = [5, 15, 20, 23, 30, 66];
