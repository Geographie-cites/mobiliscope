// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Le Havre, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.48, 0.4];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[48.97661158387714, -0.648193359375],
//north east
[49.97772150663492, 1.44744873046875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "LE HAVRE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [26000, 13000, 6000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [50, 500, 1000, 3300];

