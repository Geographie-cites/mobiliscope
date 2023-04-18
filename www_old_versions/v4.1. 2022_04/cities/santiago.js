// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SANTIAGO';
// Nom de la ville centre
var nomVC = 'Santiago';
// Année de fin d'enquête
var anneeED = '2012';

// Source des données
var dataSource = "Encuesta Origen – Destino de Viajes (EOD) 2012 - Santiago/Région métropolitaine de Santiago, <a href=http://www.sectra.gob.cl/biblioteca/detalle1.asp?mfn=3253 target=_blank>Sectra</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-33.55, -70.86];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 9,
maxZoom = 15;

// stocker max bounds
var myBounds = [
//south west
[-34.411441643272425, -71.89727783203125],
//north east
[-32.67868463225378, -69.8236083984375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '050';
var nameSec = "SANTIAGO PARQUE ALMAGRO";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [250000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [75, 1000, 5000, 15300];

// Déclaration des brones de classes pour chaque modalité (load.js
// Moyennes emboîtées, 8 classes
var colDom_dens = [20, 1300, 4200, 6300, 8100, 10000, 13000, 22000, 129600];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [3, 13, 16, 19, 22, 47];
var colDom_age2 = [2, 14, 17, 19, 23, 46];
var colDom_age3 = [23, 42, 47, 50, 53, 73];
var colDom_age4 = [1, 10, 13, 17, 21, 55];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strm1 = [0, 3, 5, 8, 12, 42];
var colDom_strm2 = [10, 27, 32, 37, 43, 76];
var colDom_strm3 = [0, 6, 10, 15, 20, 50];
var colDom_strm4 = [1, 14, 18, 22, 27, 64];
var colDom_strm5 = [0, 13, 18, 24, 32, 70];

//Méthode des quintiles
var colDom_cleduc1 = [2, 20, 30, 39, 50, 85];
var colDom_cleduc2 = [5, 28, 34, 39, 45, 72];
var colDom_cleduc3 = [0, 8, 14, 19, 25, 49];
var colDom_cleduc4 = [0, 1.9, 5, 8, 20, 68];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 11, 16, 23, 59];
var colDom_educmen2 = [0, 24, 33, 41, 52, 77];
var colDom_educmen3 = [0, 17, 22, 29, 36, 74];
var colDom_educmen4 = [0, 5, 10, 19, 36, 96];

//Méthode en amplitude égale
var colDom_rev1 = [0, 17, 34, 51, 67, 85];
var colDom_rev2 = [0, 12, 23, 35, 47, 59];
var colDom_rev3 = [0, 10, 20, 29, 38, 48];
var colDom_rev4 = [0, 9, 18, 26, 35, 44];
var colDom_rev5 = [0, 16, 33, 49, 65, 82];

//Méthode des quintiles
var colDom_cso1 = [0, 10, 15, 20, 27, 60];
var colDom_cso2 = [1, 31, 41, 48, 55, 82];
var colDom_cso3 = [0, 13, 18, 23, 31, 83];
var colDom_cso4 = [0, 2.3, 6, 12, 25, 79];

//Méthode des quintiles
var colDom_occ1 = [13, 44, 50, 55, 61, 91];
var colDom_occ2 = [0, 7, 10, 12, 15, 52];
var colDom_occ3 = [0, 1.2, 3, 4, 6, 24];
var colDom_occ4 = [0, 7, 10, 13, 17, 55];
var colDom_occ5 = [2, 13, 18, 21, 26, 53];

//Méthode selon les seuils naturels (Fisher)
var colDom_zona1 = [0, 5, 43, 82, 95, 100];
var colDom_zona2 = [0, 13, 36, 65, 89, 100];
var colDom_zona3 = [0, 8, 29, 59, 85, 100];
var colDom_zona4 = [0, 14, 39, 60, 83, 100];

//Méthode des quintiles
var colDom_log1 = [6, 23, 28, 31, 36, 77];
var colDom_log2 = [0, 6, 9, 12, 18, 52];
var colDom_log3 = [23, 50, 57, 62, 67, 89];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];
var colDom_act6 = [0, 2, 6, 14, 49, 85];

//Méthode des quintiles
var colDom_mod1 = [9, 35, 42, 48, 55, 82];
var colDom_mod2 = [0, 16, 21, 26, 34, 84];
var colDom_mod3 = [1, 20, 26, 32, 39, 85];
