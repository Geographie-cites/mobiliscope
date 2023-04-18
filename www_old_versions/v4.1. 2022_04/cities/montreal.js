// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'MONTREAL';
// Nom de la ville centre
var nomVC = 'Montréal';
// Année de fin d'enquête
var anneeED = '2013';

// Source des données
var dataSource = "Enquête Origine-Destination 2013 - Montréal, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.62, -73.79];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 8,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.53175879707938, -75.8880615234375],
//north east
[46.68713141244413,-71.69677734375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "MONTREAL : CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [240000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [33, 1000, 5000, 11000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [0, 170, 460, 1000, 1700, 2800, 4500, 8800, 65800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [3, 12, 14, 15, 17, 48];
var colDom_age2 = [0, 12, 14, 15, 17, 33];
var colDom_age3 = [34, 48, 50, 53, 55, 70];
var colDom_age4 = [2, 14, 18, 20, 23, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmqc1 = [2, 9, 11, 15, 18, 36];
var colDom_strmqc2 = [45, 56, 59, 61, 63, 72];
var colDom_strmqc3 = [10, 22, 25, 27, 30, 46];

//Méthode en amplitude égale
var colDom_rev1 = [2, 8, 14, 19, 25, 31];
var colDom_rev2 = [7, 14, 20, 26, 33, 39];
var colDom_rev3 = [11, 17, 22, 28, 33, 39];
var colDom_rev4 = [3, 11, 19, 26, 34, 42];
var colDom_rev5 = [10, 15, 20, 24, 29, 34];

//Méthode des quintiles
var colDom_occ1 = [32, 49, 53, 56, 61, 86];
var colDom_occ2 = [0, 9, 12, 13, 16, 49];
var colDom_occ3 = [0, 4, 4, 5, 6, 15];
var colDom_occ4 = [2, 19, 22, 25, 28, 45];
var colDom_occ5 = [0, 3, 3, 4, 5, 15];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 6, 10, 16, 24, 71];
var colDom_mod2 = [21, 68, 79, 85, 89, 99];
var colDom_mod3 = [0, 4, 5, 6, 10, 46];
