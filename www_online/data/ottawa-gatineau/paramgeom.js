// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Ottawa-Gatineau, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.45, -75.81];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "OTTAWA CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [99000, 50000, 24000, 100],
datasetFlow = [79000, 40000, 19000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [27, 1000, 5000, 11100];

