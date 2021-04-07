// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'OTTAWA GATINEAU';
// Nom de la ville centre
var nomVC = 'Ottawa-Gatineau';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Ottawa-Gatineau, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.45, -75.81];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "OTTAWA CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [99000, 50000, 24000, 100],
datasetFlow = [79000, 40000, 19000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [27, 1000, 5000, 11100];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [7, 150, 570, 1100, 1600, 2500, 4900, 12000, 33400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [4, 13, 15, 16, 17, 28];
var colDom_age2 = [6, 13, 15, 17, 19, 33];
var colDom_age3 = [40, 48, 50, 54, 57, 67];
var colDom_age4 = [3, 12, 15, 17, 20, 25];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode en amplitude égale
var colDom_rev1 = [2, 9, 14, 20, 25, 32];
var colDom_rev2 = [9, 14, 18, 22, 27, 31];
var colDom_rev3 = [17, 22, 26, 30, 34, 38];
var colDom_rev4 = [6, 12, 18, 23, 29, 35];
var colDom_rev5 = [19, 24, 28, 32, 36, 41];

//Méthode des quintiles
var colDom_occ1 = [44, 52, 54, 58, 62, 93];
var colDom_occ2 = [2, 10, 11, 13, 14, 32];
var colDom_occ3 = [0, 1.9, 2.3, 3, 3, 10];
var colDom_occ4 = [4, 18, 21, 24, 27, 34];
var colDom_occ5 = [0, 5, 5, 6, 7, 13];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [3, 7, 11, 17, 21, 44];
var colDom_mod2 = [35, 69, 75, 81, 89, 96];
var colDom_mod3 = [0, 3, 6, 9, 11, 47];
