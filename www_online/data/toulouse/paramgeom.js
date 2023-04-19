// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2013 - Toulouse / Grande agglomération toulousaine, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.58, 1.38];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 10;

// stocker max bounds
var myBounds = [
//south west
[43.153101551466385, 0.37353515625],
//north east
[44.044167353572185, 2.22747802734375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '002';
var nameSec = "TOULOUSE CAPITOLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [41000, 21000, 10000, 100],
datasetFlow = [30000, 15000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [74, 500, 1000, 3300];

