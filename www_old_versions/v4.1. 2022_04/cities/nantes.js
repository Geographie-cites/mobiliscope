// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'NANTES';
// Nom de la ville centre
var nomVC = 'Nantes';
// Année de fin d'enquête
var anneeED = '2015';

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2015 - Loire-Atlantique, Cerema, <a href=https://www.data.gouv.fr/fr/datasets/enquete-deplacements-en-loire-atlantique-2/ target=_blank>Licence Ouverte</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.36, -1.68];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[46.64189395892872, -2.99102783203125],
//north east
[48.06706753191901, -0.37078857421875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "NANTES COMMERCE, CHATEAU";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [27000, 14000, 6000, 100],
datasetFlow = [20000, 10000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [130, 500, 1000, 2500];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 100, 320, 830, 1800, 3400, 5200, 9300, 28200];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [0, 8, 11, 14, 17, 57];
var colDom_age2 = [0, 11, 14, 17, 20, 38];
var colDom_age3 = [17, 42, 48, 52, 56, 68];
var colDom_age4 = [3, 16, 20, 22, 26, 72];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strmfr1 = [6, 13, 16, 19, 25, 57];
var colDom_strmfr2 = [15, 27, 31, 34, 38, 55];
var colDom_strmfr3 = [1, 11, 13, 16, 19, 34];
var colDom_strmfr4 = [0, 27, 32, 35, 40, 57];

//Méthode des quintiles
var colDom_cleduc1 = [0, 4, 6, 8, 11, 22];
var colDom_cleduc2 = [11, 32, 37, 40, 45, 69];
var colDom_cleduc3 = [12, 26, 30, 33, 36, 47];
var colDom_cleduc4 = [3, 15, 18, 22, 29, 65];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 7, 9, 12, 30];
var colDom_educmen2 = [13, 36, 41, 45, 50, 79];
var colDom_educmen3 = [9, 25, 29, 32, 35, 49];
var colDom_educmen4 = [1, 11, 14, 18, 23, 61];

//Méthode des quintiles
var colDom_cs1 = [0, 1.3, 2.3, 4, 5, 16];
var colDom_cs2 = [1, 12, 16, 21, 26, 45];
var colDom_cs3 = [8, 26, 30, 33, 36, 53];
var colDom_cs4 = [10, 27, 31, 33, 36, 52];
var colDom_cs5 = [0, 8, 12, 16, 22, 61];

//Méthode des quintiles
var colDom_cspmen1 = [0, 1.5, 3, 5, 9, 21];
var colDom_cspmen2 = [3, 16, 21, 27, 31, 53];
var colDom_cspmen3 = [11, 26, 30, 33, 37, 55];
var colDom_cspmen4 = [5, 23, 28, 31, 35, 51];
var colDom_cspmen5 = [0, 5, 7, 10, 14, 51];

//Méthode des quintiles
var colDom_occ1 = [16, 44, 49, 54, 61, 80];
var colDom_occ2 = [0, 4, 6, 8, 12, 55];
var colDom_occ3 = [0, 3, 5, 7, 10, 24];
var colDom_occ4 = [3, 22, 27, 30, 35, 72];
var colDom_occ5 = [0, 1.7, 3, 4, 5, 12];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [17, 34, 50, 67, 83, 100];
var colDom_qpv2 = [0, 17, 33, 50, 66, 83];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 2.1, 4, 8, 15, 44];
var colDom_mod2 = [10, 60, 74, 79, 84, 99];
var colDom_mod3 = [1, 12, 16, 19, 26, 67];
