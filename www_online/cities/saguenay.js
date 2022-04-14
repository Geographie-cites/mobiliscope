// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SAGUENAY';
// Nom de la ville centre
var nomVC = 'Saguenay';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Origine-Destination 2015 - Saguenay, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.44, -71.01];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "RIVIERE-DU-MOULIN, NOTRE-DAME, MURDOCK";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [13000, 7000, 3000, 100],
datasetFlow = [8000, 4000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [12, 250, 500, 800];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [3, 20, 120, 350, 630, 1000, 1500, 2000, 2600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [4, 9, 10, 12, 13, 25];
var colDom_age2 = [5, 11, 13, 14, 15, 21];
var colDom_age3 = [41, 47, 50, 52, 54, 60];
var colDom_age4 = [14, 21, 23, 26, 29, 44];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmqc1 = [8, 12, 13, 15, 20, 34];
var colDom_strmqc2 = [53, 57, 59, 61, 63, 73];
var colDom_strmqc3 = [11, 20, 23, 25, 28, 34];

//Méthode en amplitude égale
var colDom_rev1 = [8, 14, 21, 27, 33, 40];
var colDom_rev2 = [18, 22, 27, 31, 35, 40];
var colDom_rev3 = [14, 19, 23, 28, 32, 37];
var colDom_rev4 = [4, 9, 13, 17, 21, 26];
var colDom_rev5 = [10, 13, 16, 18, 21, 24];

//Méthode des quintiles
var colDom_occ1 = [36, 44, 47, 50, 54, 70];
var colDom_occ2 = [2, 6, 9, 10, 11, 27];
var colDom_occ3 = [1, 3, 3, 4, 5, 10];
var colDom_occ4 = [18, 27, 30, 33, 35, 52];
var colDom_occ5 = [3, 5, 6, 6, 7, 12];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.7, 3, 4, 5, 10];
var colDom_mod2 = [79, 88, 91, 93, 96, 99];
var colDom_mod3 = [0, 1.9, 3, 5, 7, 17];
