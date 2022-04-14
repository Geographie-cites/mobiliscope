// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'NANCY';
// Nom de la ville centre
var nomVC = 'Nancy';
// Année de fin d'enquête
var anneeED = '2013';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2013 - Nancy / Sud 54, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.65, 6.25];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[48.13859959165873, 5.2130126953125],
//north east
[49.15656228453343, 7.28668212890625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "NANCY CENTRE GARE, CHARLES III";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [27000, 14000, 6000, 100],
datasetFlow = [22000, 11000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [89, 500, 1000, 2100];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 120, 340, 840, 1900, 3300, 6000, 8900, 23300];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 10, 12, 15, 23, 49];
var colDom_age2 = [3, 10, 12, 14, 17, 29];
var colDom_age3 = [27, 44, 49, 53, 56, 70];
var colDom_age4 = [4, 15, 19, 21, 25, 41];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 7, 9, 13, 24];
var colDom_cleduc2 = [11, 33, 40, 44, 50, 77];
var colDom_cleduc3 = [12, 24, 27, 30, 34, 45];
var colDom_cleduc4 = [3, 13, 17, 22, 28, 63];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 9, 11, 14, 30];
var colDom_educmen2 = [14, 37, 43, 49, 55, 80];
var colDom_educmen3 = [7, 19, 25, 29, 33, 43];
var colDom_educmen4 = [0, 9, 14, 17, 23, 57];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 5, 6, 8, 17];
var colDom_cs2 = [1, 10, 12, 17, 22, 35];
var colDom_cs3 = [18, 30, 36, 40, 48, 65];
var colDom_cs4 = [8, 18, 22, 26, 30, 56];
var colDom_cs5 = [0, 10, 13, 17, 22, 39];

//Méthode des quintiles
var colDom_cspmen1 = [0, 5, 7, 9, 12, 26];
var colDom_cspmen2 = [4, 11, 15, 20, 30, 54];
var colDom_cspmen3 = [16, 29, 35, 41, 48, 65];
var colDom_cspmen4 = [6, 15, 18, 22, 27, 46];
var colDom_cspmen5 = [0, 6, 10, 13, 16, 28];

//Méthode des quintiles
var colDom_occ1 = [26, 43, 47, 51, 56, 74];
var colDom_occ2 = [0, 5, 8, 10, 20, 50];
var colDom_occ3 = [0, 4, 5, 7, 9, 29];
var colDom_occ4 = [5, 20, 25, 28, 33, 51];
var colDom_occ5 = [0, 2.5, 4, 6, 7, 14];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [8, 27, 45, 64, 82, 100];
var colDom_qpv2 = [0, 18, 36, 55, 73, 92];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 4, 7, 10, 14, 33];
var colDom_mod2 = [21, 52, 62, 68, 75, 93];
var colDom_mod3 = [4, 17, 24, 29, 35, 69];
