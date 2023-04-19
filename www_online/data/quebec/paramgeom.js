// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Origine-Destination 2011 - Québec, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.81, -71.32];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "HAUTE-VILLE EST";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [33000, 17000, 8000, 100],
datasetFlow = [27000, 14000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [21, 500, 1000, 3000];

