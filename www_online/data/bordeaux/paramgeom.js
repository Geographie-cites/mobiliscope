// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2009 - Bordeaux / Gironde, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [44.83, -0.58];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 8;

// stocker max bounds
var myBounds = [
//south west
[43.72744458647464, -2.6531982421875],
//north east
[45.91294412737392, 1.494140625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "BORDEAUX VIEILLE VILLE EST";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [42000, 21000, 10000, 100],
datasetFlow = [16000, 8000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [79, 500, 1000, 7000];

