// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Globale Transport (EGT) 2010 - Paris / Ile-de-France, DRIEA-STIF-OMNIL (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.71, 2.5];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 8;

// stocker max bounds
var myBounds = [
//south west
[47.879512933970496, 0.4449462890625],
//north east
[49.50380954152213, 4.15283203125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '7501';
var nameSec = "PARIS CENTRE, RIVE DROITE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [270000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [320, 1000, 5000, 13900];

