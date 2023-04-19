// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2017 - Rouen, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.46, 1.07];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[48.956777213851424, 0.032958984375],
//north east
[49.95828842806968, 2.10662841796875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "ROUEN HYPERCENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [23000, 12000, 5000, 100],
datasetFlow = [15000, 8000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 500, 1000, 2200];

