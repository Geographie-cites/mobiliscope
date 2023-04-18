// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'LILLE';
// Nom de la ville centre
var nomVC = 'Lille';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Lille / Métropole Européenne de Lille, Cerema, <a href=https://opendata.lillemetropole.fr/explore/dataset/enquete-deplacement-2016/information/ target=_blank>Licence Ouverte</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.65, 3.05];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11,
minZoom = 10,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[50.40501655606602, 2.530975341796875],
//north east
[50.89350536138496, 3.56781005859375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "LILLE CENTRE 2 GARES";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [41000, 21000, 10000, 100],
datasetFlow = [26000, 13000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [200, 500, 1000, 2700];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [200, 810, 1700, 2800, 3800, 5000, 7100, 11000, 22800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [4, 12, 14, 17, 24, 64];
var colDom_age2 = [7, 14, 16, 19, 22, 39];
var colDom_age3 = [17, 41, 46, 49, 53, 63];
var colDom_age4 = [3, 12, 16, 19, 21, 37];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [8, 14, 17, 21, 26, 56];
var colDom_strmfr2 = [8, 20, 24, 27, 30, 41];
var colDom_strmfr3 = [5, 15, 18, 22, 25, 37];
var colDom_strmfr4 = [7, 29, 33, 36, 40, 53];

//Méthode des quintiles
var colDom_cleduc1 = [0, 5, 7, 10, 14, 31];
var colDom_cleduc2 = [8, 28, 35, 41, 47, 68];
var colDom_cleduc3 = [12, 22, 25, 27, 30, 43];
var colDom_cleduc4 = [5, 15, 21, 29, 40, 67];

//Méthode des quintiles
var colDom_educmen1 = [0, 7, 10, 14, 19, 35];
var colDom_educmen2 = [12, 33, 41, 49, 55, 71];
var colDom_educmen3 = [4, 18, 21, 24, 28, 43];
var colDom_educmen4 = [1, 9, 15, 21, 32, 62];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 5, 6, 10, 20];
var colDom_cs2 = [1, 13, 19, 23, 29, 44];
var colDom_cs3 = [12, 23, 27, 30, 34, 45];
var colDom_cs4 = [10, 20, 25, 29, 33, 50];
var colDom_cs5 = [2, 9, 13, 19, 26, 53];

//Méthode des quintiles
var colDom_cspmen1 = [0, 7, 10, 12, 18, 37];
var colDom_cspmen2 = [2, 18, 26, 31, 38, 56];
var colDom_cspmen3 = [10, 22, 26, 29, 32, 47];
var colDom_cspmen4 = [2, 14, 20, 24, 29, 50];
var colDom_cspmen5 = [0, 4, 7, 11, 16, 43];

//Méthode des quintiles
var colDom_occ1 = [22, 41, 47, 53, 56, 74];
var colDom_occ2 = [0, 7, 10, 14, 19, 60];
var colDom_occ3 = [0, 5, 8, 10, 14, 27];
var colDom_occ4 = [3, 14, 20, 23, 26, 42];
var colDom_occ5 = [0, 3, 4, 6, 9, 20];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [0, 20, 40, 60, 80, 100];
var colDom_qpv2 = [0, 20, 40, 60, 80, 100];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 6, 11, 15, 21, 46];
var colDom_mod2 = [14, 43, 56, 67, 74, 92];
var colDom_mod3 = [3, 17, 23, 28, 35, 68];
