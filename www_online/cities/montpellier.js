// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'MONTPELLIER';
// Nom de la ville centre
var nomVC = 'Montpellier';
// Année de fin d'enquête
var anneeED = '2014';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2014 - Montpellier / Montpellier Méditerranée Métropole, Cerema, <a href=https://data.montpellier3m.fr/dataset/enquete-menages-deplacements target=_blank>ODbL</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.60, 3.67];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[43.038783344984836, 2.63397216796875],
//north east
[44.15462243076731, 4.7076416015625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "MONTPELLIER PREFECTURE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [78, 500, 1000, 4000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 200, 570, 1500, 2600, 4700, 7400, 14000, 32200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 11, 13, 20, 66];
var colDom_age2 = [2, 11, 13, 16, 19, 33];
var colDom_age3 = [15, 43, 48, 52, 56, 73];
var colDom_age4 = [1, 16, 20, 22, 26, 43];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [5, 12, 15, 20, 29, 60];
var colDom_strmfr2 = [11, 23, 28, 30, 34, 50];
var colDom_strmfr3 = [1, 13, 17, 21, 24, 39];
var colDom_strmfr4 = [9, 25, 30, 35, 40, 59];

//Méthode des quintiles
var colDom_cleduc1 = [0, 2.5, 5, 7, 10, 30];
var colDom_cleduc2 = [12, 26, 32, 38, 45, 65];
var colDom_cleduc3 = [13, 26, 29, 32, 35, 47];
var colDom_cleduc4 = [2, 17, 23, 30, 39, 71];

//Méthode des quintiles
var colDom_educmen1 = [0, 4, 7, 10, 14, 48];
var colDom_educmen2 = [15, 32, 40, 46, 53, 71];
var colDom_educmen3 = [8, 23, 27, 31, 35, 48];
var colDom_educmen4 = [0, 10, 15, 20, 28, 56];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 6, 8, 23];
var colDom_cs2 = [1, 8, 11, 14, 17, 34];
var colDom_cs3 = [10, 25, 29, 32, 36, 57];
var colDom_cs4 = [8, 26, 29, 32, 35, 46];
var colDom_cs5 = [0, 13, 17, 22, 28, 52];

//Méthode des quintiles
var colDom_cspmen1 = [0, 6, 8, 10, 14, 46];
var colDom_cspmen2 = [4, 12, 16, 19, 25, 43];
var colDom_cspmen3 = [10, 27, 32, 36, 40, 58];
var colDom_cspmen4 = [1, 20, 24, 28, 32, 45];
var colDom_cspmen5 = [0, 7, 10, 13, 17, 35];

//Méthode des quintiles
var colDom_occ1 = [20, 39, 45, 50, 54, 80];
var colDom_occ2 = [0, 5, 7, 10, 16, 74];
var colDom_occ3 = [0, 5, 8, 10, 12, 26];
var colDom_occ4 = [1, 19, 25, 28, 33, 52];
var colDom_occ5 = [0, 4, 5, 6, 8, 27];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [9, 27, 46, 64, 82, 100];
var colDom_qpv2 = [0, 18, 36, 54, 73, 91];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.5, 5, 10, 18, 36];
var colDom_mod2 = [8, 50, 65, 72, 78, 90];
var colDom_mod3 = [6, 16, 21, 27, 34, 74];
