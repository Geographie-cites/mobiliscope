// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Origine-Destination 2013 - Montréal, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.62, -73.79];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 8;

// stocker max bounds
var myBounds = [
//south west
[44.53175879707938, -75.8880615234375],
//north east
[46.68713141244413,-71.69677734375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "MONTREAL : CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [240000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [33, 1000, 5000, 11000];

