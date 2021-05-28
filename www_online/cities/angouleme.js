// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'ANGOULEME';
// Nom de la ville centre
var nomVC = 'Angoulême';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2012 - Angoulême / Bassin de vie de l'Angoumois, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.64, 0.18];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ANGOULEME PLATEAU, CHAMP DE MARS";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [11000, 6000, 2000, 100],
datasetFlow = [7000, 4000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 250, 500, 1200];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 120, 330, 560, 970, 1900, 3200, 4700, 7700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [1, 8, 10, 12, 18, 30];
var colDom_age2 = [2, 10, 11, 13, 16, 23];
var colDom_age3 = [30, 45, 50, 54, 57, 67];
var colDom_age4 = [11, 19, 22, 25, 29, 37];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [2, 8, 10, 12, 14, 23];
var colDom_cleduc2 = [30, 41, 46, 49, 52, 61];
var colDom_cleduc3 = [23, 34, 38, 43, 49, 61];
var colDom_cleduc4 = [0, 0, 0, 0.5, 1.2, 10];

//Méthode des quintiles
var colDom_educmen1 = [3, 8, 10, 12, 14, 23];
var colDom_educmen2 = [35, 43, 48, 51, 55, 66];
var colDom_educmen3 = [21, 32, 36, 40, 48, 58];
var colDom_educmen4 = [0, 0, 0, 0.4, 1.1, 10];

//Méthode des quintiles
var colDom_cs1 = [0, 3, 4, 5, 7, 12];
var colDom_cs2 = [3, 11, 13, 16, 18, 24];
var colDom_cs3 = [32, 41, 44, 45, 48, 56];
var colDom_cs4 = [7, 16, 18, 19, 23, 42];
var colDom_cs5 = [3, 12, 15, 17, 20, 29];

//Méthode des quintiles
var colDom_cspmen1 = [1, 3, 4, 6, 8, 13];
var colDom_cspmen2 = [4, 12, 14, 17, 20, 27];
var colDom_cspmen3 = [33, 41, 42, 45, 48, 57];
var colDom_cspmen4 = [9, 16, 18, 19, 23, 39];
var colDom_cspmen5 = [4, 11, 14, 16, 19, 28];

//Méthode des quintiles
var colDom_occ1 = [36, 48, 51, 53, 56, 66];
var colDom_occ2 = [1, 5, 8, 10, 14, 27];
var colDom_occ3 = [0, 2.4, 4, 6, 9, 16];
var colDom_occ4 = [12, 24, 27, 29, 34, 48];
var colDom_occ5 = [0, 2.2, 3, 3, 5, 10];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [61, 69, 77, 85, 92, 100];
var colDom_qpv2 = [0, 8, 15, 23, 31, 39];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 1.5, 4, 6, 8, 16];
var colDom_mod2 = [44, 71, 78, 82, 86, 93];
var colDom_mod3 = [7, 11, 13, 17, 21, 48];
