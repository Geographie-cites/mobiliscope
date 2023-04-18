// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'TROIS RIVIERES';
// Nom de la ville centre
var nomVC = 'Trois-Rivières';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Trois-Rivières, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.38, -72.54];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[45.84602106744843, -73.31451416015625],
//north east
[46.90899838277448,-71.7681884765625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CENTRE-VILLE, SAINT-PHILIPPE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [13000, 7000, 3000, 100],
datasetFlow = [8000, 4000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [15, 250, 500, 1100];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [8, 20, 80, 280, 580, 950, 1400, 1800, 3400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [4, 9, 11, 12, 14, 36];
var colDom_age2 = [7, 13, 14, 15, 17, 22];
var colDom_age3 = [34, 45, 51, 53, 56, 64];
var colDom_age4 = [12, 16, 20, 24, 27, 39];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmqc1 = [7, 11, 13, 15, 20, 42];
var colDom_strmqc2 = [46, 59, 62, 64, 66, 72];
var colDom_strmqc3 = [11, 17, 20, 23, 26, 31];

//Méthode en amplitude égale
var colDom_rev1 = [8, 16, 24, 31, 38, 46];
var colDom_rev2 = [19, 24, 30, 35, 40, 46];
var colDom_rev3 = [11, 16, 21, 25, 30, 35];
var colDom_rev4 = [1, 4, 7, 9, 12, 15];
var colDom_rev5 = [13, 16, 18, 21, 23, 26];

//Méthode des quintiles
var colDom_occ1 = [29, 43, 48, 52, 57, 68];
var colDom_occ2 = [1, 6, 8, 9, 12, 40];
var colDom_occ3 = [1, 3, 4, 4, 5, 16];
var colDom_occ4 = [17, 23, 27, 32, 34, 48];
var colDom_occ5 = [2, 5, 6, 7, 8, 13];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.5, 2, 4, 6, 18];
var colDom_mod2 = [67, 86, 90, 93, 95, 100];
var colDom_mod3 = [0, 4, 5, 6, 9, 26];
