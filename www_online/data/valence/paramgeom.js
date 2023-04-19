// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2014 - Valence / Grand Rovaltain, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [44.95, 5.03];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[44.402391829093915, 3.9935302734375],
//north east
[45.49287107405929, 6.06719970703125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "VALENCE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [16000, 8000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [130, 250, 500, 1900];

