// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Alençon-Saint Lô, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.8, -0.82];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 8;

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
var sLink = [120, 500, 1000, 2100];

