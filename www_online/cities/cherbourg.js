// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'CHERBOURG';
// Nom de la ville centre
var nomVC = 'Cherbourg';
// Année de fin d'enquête
var anneeED = '2016';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2016 - Cherbourg / Pays du Cotentin, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.49, -1.51];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[48.98742700601184, -2.54608154296875],
//north east
[49.988318060767966, -0.472412109375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CHERBOURG CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [11000, 6000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 250, 500, 1300];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 50, 160, 420, 850, 1600, 2600, 3600, 5400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 9, 11, 15, 30];
var colDom_age2 = [4, 10, 11, 13, 15, 28];
var colDom_age3 = [35, 48, 51, 54, 57, 71];
var colDom_age4 = [8, 18, 22, 25, 30, 42];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [3, 9, 12, 15, 18, 29];
var colDom_cleduc2 = [23, 35, 39, 42, 45, 66];
var colDom_cleduc3 = [11, 23, 26, 30, 35, 45];
var colDom_cleduc4 = [2, 12, 16, 18, 23, 38];

//Méthode des quintiles
var colDom_educmen1 = [4, 9, 12, 14, 19, 31];
var colDom_educmen2 = [21, 36, 41, 44, 48, 65];
var colDom_educmen3 = [11, 22, 25, 29, 34, 47];
var colDom_educmen4 = [3, 11, 14, 17, 22, 34];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 3, 4, 5, 13];
var colDom_cs2 = [2, 11, 14, 16, 19, 28];
var colDom_cs3 = [22, 35, 38, 41, 43, 54];
var colDom_cs4 = [15, 26, 30, 33, 35, 47];
var colDom_cs5 = [1, 7, 9, 11, 13, 33];

//Méthode des quintiles
var colDom_cspmen1 = [1, 3, 3, 4, 6, 14];
var colDom_cspmen2 = [2, 12, 15, 17, 21, 30];
var colDom_cspmen3 = [25, 35, 38, 40, 43, 52];
var colDom_cspmen4 = [14, 26, 29, 31, 34, 45];
var colDom_cspmen5 = [1, 7, 9, 11, 14, 28];

//Méthode des quintiles
var colDom_occ1 = [30, 43, 50, 53, 57, 84];
var colDom_occ2 = [0, 3, 5, 7, 10, 29];
var colDom_occ3 = [1, 3, 5, 7, 8, 27];
var colDom_occ4 = [11, 23, 28, 32, 36, 52];
var colDom_occ5 = [1, 3, 4, 5, 6, 17];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [20, 37, 52, 68, 84, 100];
var colDom_qpv2 = [0, 16, 32, 48, 63, 80];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0.5, 1.4, 2.5, 5, 13];
var colDom_mod2 = [40, 65, 74, 80, 83, 94];
var colDom_mod3 = [5, 14, 18, 21, 30, 55];
