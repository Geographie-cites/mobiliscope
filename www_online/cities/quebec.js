// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'QUEBEC';
// Nom de la ville centre
var nomVC = 'Québec';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Québec, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.81, -71.32];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "HAUTE-VILLE EST";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [33000, 17000, 8000, 100],
datasetFlow = [27000, 14000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [21, 500, 1000, 3000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [4, 80, 360, 780, 1300, 1900, 3000, 5400, 14200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [2, 9, 11, 13, 15, 49];
var colDom_age2 = [4, 12, 14, 16, 20, 32];
var colDom_age3 = [23, 46, 50, 54, 58, 71];
var colDom_age4 = [3, 14, 18, 21, 27, 38];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode en amplitude égale
var colDom_rev1 = [2, 9, 15, 21, 28, 34];
var colDom_rev2 = [12, 17, 22, 28, 33, 39];
var colDom_rev3 = [10, 16, 22, 28, 33, 40];
var colDom_rev4 = [2, 8, 13, 18, 24, 30];
var colDom_rev5 = [16, 20, 23, 27, 30, 33];

//Méthode des quintiles
var colDom_occ1 = [28, 47, 54, 58, 64, 86];
var colDom_occ2 = [1, 7, 9, 11, 13, 58];
var colDom_occ3 = [0, 1, 1.4, 1.9, 3, 10];
var colDom_occ4 = [5, 21, 26, 30, 35, 48];
var colDom_occ5 = [0, 3, 4, 4, 5, 11];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 3, 6, 9, 13, 33];
var colDom_mod2 = [37, 76, 85, 90, 94, 100];
var colDom_mod3 = [0, 2, 4, 6, 10, 41];
