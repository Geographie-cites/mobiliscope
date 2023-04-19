// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2019 - Tours, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.26, 0.69];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "TOURS GRAMMONT";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [21000, 11000, 5000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 250, 500, 1900];

