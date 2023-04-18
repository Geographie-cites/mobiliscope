// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SHERBROOKE';
// Nom de la ville centre
var nomVC = 'Sherbrooke';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Origine-Destination 2012 - Sherbrooke, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.38, -71.91];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[44.83639545410477, -72.95745849609375],
//north east
[45.91867663909007,-70.86181640625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [9000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [21, 250, 500, 1500];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [8, 50, 230, 550, 810, 1600, 2100, 2600, 4600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [4, 10, 12, 13, 15, 47];
var colDom_age2 = [7, 12, 14, 15, 18, 27];
var colDom_age3 = [28, 47, 50, 54, 57, 63];
var colDom_age4 = [9, 15, 19, 22, 25, 36];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmqc1 = [7, 12, 14, 19, 27, 50];
var colDom_strmqc2 = [39, 53, 55, 59, 62, 70];
var colDom_strmqc3 = [10, 19, 23, 26, 28, 37];

//Méthode en amplitude égale
var colDom_rev1 = [5, 13, 21, 28, 36, 44];
var colDom_rev2 = [12, 18, 24, 29, 35, 41];
var colDom_rev3 = [9, 14, 19, 24, 28, 34];
var colDom_rev4 = [2, 5, 8, 12, 15, 19];
var colDom_rev5 = [15, 19, 24, 28, 32, 37];

//Méthode des quintiles
var colDom_occ1 = [24, 45, 50, 56, 61, 68];
var colDom_occ2 = [1, 7, 9, 12, 17, 51];
var colDom_occ3 = [0, 1.8, 2.4, 3, 5, 10];
var colDom_occ4 = [11, 21, 24, 28, 33, 43];
var colDom_occ5 = [2, 4, 5, 6, 7, 11];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.6, 4, 6, 9, 29];
var colDom_mod2 = [53, 79, 88, 93, 95, 100];
var colDom_mod3 = [0, 1.6, 3, 8, 11, 29];
