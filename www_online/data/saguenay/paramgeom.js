// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Origine-Destination 2015 - Saguenay, Ministère des transports du Québec";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.44, -71.01];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "RIVIERE-DU-MOULIN, NOTRE-DAME, MURDOCK";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [13000, 7000, 3000, 100],
datasetFlow = [8000, 4000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [12, 250, 500, 800];

