// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ALENCON';
// Nom de la ville centre
var nomVC = 'Alençon';
// Année de fin d'enquête
var anneeED = '2018';

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Alençon-Saint Lô, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.8, -0.82];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 8,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[47.77625204393233, -2.8948974609375],
//north east
[49.80608653412716, 1.25244140625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '601';
var nameSec = "ALENCON CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [9000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 500, 1000, 2100];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 30, 50, 90, 340, 760, 1300, 2100, 4600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [0, 6, 8, 10, 13, 28];
var colDom_age2 = [0, 7, 9, 12, 14, 20];
var colDom_age3 = [33, 46, 49, 52, 55, 66];
var colDom_age4 = [12, 25, 28, 30, 34, 47];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [3, 9, 12, 14, 16, 31];
var colDom_cleduc2 = [23, 34, 38, 40, 44, 60];
var colDom_cleduc3 = [14, 25, 28, 31, 34, 46];
var colDom_cleduc4 = [7, 13, 16, 19, 22, 40];

//Méthode des quintiles
var colDom_educmen1 = [3, 9, 13, 15, 17, 30];
var colDom_educmen2 = [22, 36, 40, 43, 46, 61];
var colDom_educmen3 = [13, 24, 27, 30, 33, 44];
var colDom_educmen4 = [5, 11, 14, 17, 21, 47];

//Méthode des quintiles
var colDom_cs1 = [0, 1.1, 2, 3, 5, 12];
var colDom_cs2 = [5, 15, 19, 22, 25, 40];
var colDom_cs3 = [19, 27, 30, 33, 36, 53];
var colDom_cs4 = [14, 31, 36, 39, 42, 55];
var colDom_cs5 = [1, 5, 7, 9, 11, 19];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.1, 2.3, 3, 5, 18];
var colDom_cspmen2 = [4, 16, 21, 24, 28, 42];
var colDom_cspmen3 = [16, 27, 30, 33, 36, 54];
var colDom_cspmen4 = [13, 29, 34, 38, 41, 56];
var colDom_cspmen5 = [1, 5, 6, 8, 10, 20];

//Méthode des quintiles
var colDom_occ1 = [26, 43, 48, 51, 55, 69];
var colDom_occ2 = [0, 1.4, 3, 5, 8, 21];
var colDom_occ3 = [0, 3, 4, 5, 8, 18];
var colDom_occ4 = [15, 32, 35, 39, 43, 59];
var colDom_occ5 = [0, 1, 2, 3, 6, 12];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [35, 48, 61, 74, 87, 100];
var colDom_qpv2 = [0, 13, 26, 39, 52, 65];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 0, 0.8, 1.9, 4, 17];
var colDom_mod2 = [45, 72, 78, 82, 84, 92];
var colDom_mod3 = [7, 15, 17, 20, 25, 51];
