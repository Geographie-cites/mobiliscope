// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'BREST';
// Nom de la ville centre
var nomVC = 'Brest';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2018 - Pays de Brest, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.38, -4.35];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.8666165573186, -5.386047363281249],
//north east
[48.89000369970676, -3.3123779296875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "BREST ST-MARTIN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [15000, 8000, 3000, 100],
datasetFlow = [11000, 6000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [56, 250, 500, 1800];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 100, 380, 900, 1600, 3400, 5100, 7500, 10400];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 7, 10, 14, 18, 58];
var colDom_age2 = [2, 7, 10, 13, 17, 32];
var colDom_age3 = [24, 45, 51, 55, 60, 71];
var colDom_age4 = [5, 17, 21, 24, 29, 49];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 6, 7, 10, 30];
var colDom_cleduc2 = [16, 33, 38, 41, 46, 61];
var colDom_cleduc3 = [12, 26, 30, 33, 37, 50];
var colDom_cleduc4 = [6, 15, 18, 21, 27, 60];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 6, 8, 11, 34];
var colDom_educmen2 = [19, 36, 41, 45, 50, 65];
var colDom_educmen3 = [13, 25, 28, 32, 36, 50];
var colDom_educmen4 = [5, 11, 14, 18, 25, 50];

//Méthode des quintiles
var colDom_cs1 = [0, 1.1, 3, 4, 5, 17];
var colDom_cs2 = [1, 7, 10, 12, 16, 26];
var colDom_cs3 = [27, 42, 47, 51, 56, 69];
var colDom_cs4 = [7, 15, 17, 19, 23, 39];
var colDom_cs5 = [3, 12, 15, 18, 23, 46];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.6, 3, 5, 7, 18];
var colDom_cspmen2 = [2, 9, 13, 15, 20, 34];
var colDom_cspmen3 = [31, 43, 48, 51, 56, 67];
var colDom_cspmen4 = [2, 12, 16, 19, 21, 36];
var colDom_cspmen5 = [3, 9, 12, 15, 19, 38];

//Méthode des quintiles
var colDom_occ1 = [21, 42, 47, 51, 56, 83];
var colDom_occ2 = [0, 4, 7, 10, 14, 60];
var colDom_occ3 = [0, 3, 5, 6, 10, 26];
var colDom_occ4 = [7, 24, 29, 33, 40, 68];
var colDom_occ5 = [0, 1.2, 2.1, 3, 5, 12];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [29, 43, 57, 72, 86, 100];
var colDom_qpv2 = [0, 14, 28, 43, 57, 71];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.2, 3, 6, 10, 31];
var colDom_mod2 = [33, 61, 72, 76, 81, 96];
var colDom_mod3 = [1, 15, 20, 23, 29, 58];
