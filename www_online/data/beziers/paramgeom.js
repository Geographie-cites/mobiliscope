// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2014 - Béziers / Biterrois et nord-ouest Hérault, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.44, 3.06];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[42.87797684287408, 2.340087890625],
//north east
[43.99676629896825, 3.779296875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "BEZIERS GARE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [7000, 3500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 250, 500, 900];

