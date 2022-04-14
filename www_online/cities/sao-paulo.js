// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'SAO PAULO';
// Nom de la ville centre
var nomVC = 'São Paulo';
// Année de fin d'enquête
var anneeED = '2017';

// Source des données
var dataSource = "Pesquisa Origem e Destino (OD) - São Paulo/Région métropolitaine de São Paulo, <a href=http://www.metro.sp.gov.br/pesquisa-od/ target=_blank>Companhia do Metrô de São Paulo</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-23.6, -46.54];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9,
minZoom = 9,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = 'd080';
var nameSec = "SÃO PAULO SÉ";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [280000, 150000, 50000, 1000],
datasetFlow = [210000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [13, 1000, 5000, 14200];

// Déclaration des bornes de classes pour chaque modalité (load.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [10, 760, 2500, 4600, 6700, 9000, 11000, 17000, 76800];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 20, 40, 60, 80, 100];
var colDom_res2 = [0, 20, 40, 60, 80, 100];

//Méthode des quintiles
var colDom_age1 = [3, 15, 17, 20, 22, 47];
var colDom_age2 = [5, 16, 18, 20, 22, 47];
var colDom_age3 = [26, 48, 50, 52, 55, 72];
var colDom_age4 = [1, 8, 10, 11, 14, 23];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 76];
var colDom_sex2 = [24, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_strm1 = [0, 4, 6, 7, 10, 31];
var colDom_strm2 = [13, 37, 41, 44, 49, 73];
var colDom_strm3 = [0, 7, 11, 14, 17, 41];
var colDom_strm4 = [3, 20, 24, 28, 33, 58];
var colDom_strm5 = [0, 6, 9, 12, 15, 30];

//Méthode des quintiles
var colDom_cleduc1 = [1, 13, 19, 24, 29, 57];
var colDom_cleduc2 = [2, 12, 15, 18, 21, 40];
var colDom_cleduc3 = [15, 39, 43, 46, 50, 76];
var colDom_cleduc4 = [0, 8, 11, 16, 25, 70];

//Méthode des quintiles
var colDom_educmen1 = [0, 5, 7, 10, 14, 35];
var colDom_educmen2 = [0, 5, 7, 9, 12, 34];
var colDom_educmen3 = [12, 43, 50, 55, 62, 88];
var colDom_educmen4 = [0, 16, 22, 31, 43, 86];

//Méthode en amplitude égale
var colDom_rev1 = [0, 14, 27, 41, 55, 69];
var colDom_rev2 = [6, 22, 38, 54, 70, 86];
var colDom_rev3 = [0, 10, 21, 31, 41, 51];
var colDom_rev4 = [0, 10, 19, 29, 39, 49];
var colDom_rev5 = [0, 10, 19, 29, 39, 49];

//Méthode des quintiles
var colDom_cso1 = [0, 9, 12, 16, 19, 46];
var colDom_cso2 = [6, 30, 35, 39, 45, 77];
var colDom_cso3 = [7, 24, 30, 35, 41, 75];
var colDom_cso4 = [0, 8, 11, 15, 22, 65];

//Méthode des quintiles
var colDom_inf1 = [11, 53, 59, 65, 72, 94];
var colDom_inf2 = [6, 28, 35, 41, 47, 89];

//Méthode des quintiles
var colDom_occ1 = [26, 47, 52, 57, 64, 91];
var colDom_occ2 = [0, 3, 5, 6, 7, 25];
var colDom_occ3 = [0, 8, 13, 16, 19, 37];
var colDom_occ4 = [2, 11, 13, 15, 17, 31];
var colDom_occ5 = [0, 6, 9, 11, 14, 30];

//Méthode selon les seuils naturels (Fisher)
var colDom_zona1 = [0, 5, 43, 82, 95, 100];
var colDom_zona2 = [0, 13, 36, 65, 89, 100];
var colDom_zona3 = [0, 8, 29, 59, 85, 100];
var colDom_zona4 = [0, 14, 39, 60, 83, 100];

//Méthode des quintiles
var colDom_log1 = [1, 17, 20, 23, 26, 48];
var colDom_log2 = [0, 11, 15, 18, 22, 54];
var colDom_log3 = [26, 54, 59, 63, 68, 96];

//Seuils naturels (fisher)
var colDom_act1 = [0, 40, 59, 76, 90, 100];
var colDom_act2 = [0, 7, 18, 30, 47, 89];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];
var colDom_act6 = [0, 2, 6, 14, 49, 85];

//Méthode des quintiles
var colDom_mod1 = [5, 30, 37, 42, 48, 79];
var colDom_mod2 = [8, 26, 32, 36, 42, 79];
var colDom_mod3 = [0, 18, 23, 28, 35, 74];
