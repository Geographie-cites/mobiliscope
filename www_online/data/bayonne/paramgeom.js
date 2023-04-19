// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2010 - Bayonne / Côte Basco-Landaise, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.49, -1.47];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[42.837709559849614, -2.318115234375],
//north east
[43.957236472025635, -0.24444580078125003]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "BAYONNE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [50, 250, 500, 1100];

