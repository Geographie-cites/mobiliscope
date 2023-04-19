// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Trois-Rivières, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.38, -72.54];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[45.84602106744843, -73.31451416015625],
//north east
[46.90899838277448,-71.7681884765625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CENTRE-VILLE, SAINT-PHILIPPE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [13000, 7000, 3000, 100],
datasetFlow = [8000, 4000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [15, 250, 500, 1100];

