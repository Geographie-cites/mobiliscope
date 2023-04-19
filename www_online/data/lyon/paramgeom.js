// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2015 - Lyon / Aire métropolitaine lyonnaise, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.8, 4.91];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[44.715513732021336, 3.4716796874999996],
//north east
[46.86394700508323, 6.35009765625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "LYON CONFLUENT (2E)";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [35000, 18000, 8000, 100],
datasetFlow = [31000, 16000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [130, 500, 1000, 2300];

