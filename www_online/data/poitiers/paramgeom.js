// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Poitiers, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.55, 0.35];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 10;

// stocker max bounds
var myBounds = [
//south west
[46.01794608850014, -0.6866455078125],
//north east
[47.07760411715964, 1.38702392578125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "POITIERS CENTRE-VILLE NORD";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [80, 250, 500, 1900];

