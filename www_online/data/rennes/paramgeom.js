// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête mobilité (EMC&sup2;) 2018 - Rennes / Ille-et-Vilaine, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.16, -1.68];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 8;

// stocker max bounds
var myBounds = [
//south west
[47.27177506640828, -3.7518310546875],
//north east
[48.91527985344383, -0.0439453125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "RENNES THABOR, FOUGERES, ALPHONSE GUERIN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [38000, 19000, 9000, 100],
datasetFlow = [26000, 13000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [86, 500, 1000, 4000];

