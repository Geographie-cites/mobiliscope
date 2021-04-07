// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'TOULOUSE';
// Nom de la ville centre
var nomVC = 'Toulouse';
// Année de fin d'enquête
var anneeED = '2013';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2013 - Toulouse / Grande agglomération toulousaine, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.58, 1.38];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[43.153101551466385, 0.37353515625],
//north east
[44.044167353572185, 2.22747802734375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '002';
var nameSec = "TOULOUSE CAPITOLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [41000, 21000, 10000, 100],
datasetFlow = [30000, 15000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 500, 1000, 3300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 300, 750, 1500, 2700, 4700, 7100, 12000, 31200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 9, 12, 16, 22, 66];
var colDom_age2 = [1, 10, 14, 17, 22, 34];
var colDom_age3 = [19, 39, 45, 51, 57, 69];
var colDom_age4 = [2, 14, 18, 21, 26, 46];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 3, 4, 7, 11, 27];
var colDom_cleduc2 = [3, 23, 29, 35, 41, 57];
var colDom_cleduc3 = [7, 25, 28, 30, 32, 43];
var colDom_cleduc4 = [9, 21, 28, 35, 43, 70];

//Méthode des quintiles
var colDom_educmen1 = [1, 4, 7, 10, 14, 35];
var colDom_educmen2 = [4, 27, 35, 41, 49, 64];
var colDom_educmen3 = [8, 23, 27, 30, 34, 47];
var colDom_educmen4 = [4, 12, 20, 26, 34, 61];

//Méthode des quintiles
var colDom_cs1 = [0, 2.3, 3, 5, 6, 21];
var colDom_cs2 = [1, 7, 10, 14, 17, 37];
var colDom_cs3 = [6, 22, 26, 29, 33, 46];
var colDom_cs4 = [6, 25, 28, 31, 35, 47];
var colDom_cs5 = [2, 16, 21, 28, 34, 57];

//Méthode des quintiles
var colDom_cspmen1 = [0, 4, 6, 8, 11, 37];
var colDom_cspmen2 = [1, 12, 16, 20, 25, 36];
var colDom_cspmen3 = [11, 26, 30, 34, 38, 55];
var colDom_cspmen4 = [2, 21, 25, 29, 32, 48];
var colDom_cspmen5 = [0, 8, 12, 16, 22, 40];

//Méthode des quintiles
var colDom_occ1 = [20, 43, 49, 54, 58, 83];
var colDom_occ2 = [0, 6, 9, 12, 19, 69];
var colDom_occ3 = [0, 3, 5, 7, 10, 26];
var colDom_occ4 = [3, 17, 22, 26, 32, 53];
var colDom_occ5 = [0, 2.3, 3, 4, 6, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [10, 28, 46, 64, 82, 100];
var colDom_qpv2 = [0, 18, 36, 54, 72, 90];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 5, 9, 15, 26, 54];
var colDom_mod2 = [9, 44, 66, 78, 85, 97];
var colDom_mod3 = [3, 8, 13, 19, 29, 72];
