// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2013 - Quimper / Cornouaille, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.98, -4.02];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[47.535746978239125, -5.0262451171875],
//north east
[48.35989909002194, -3.17230224609375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '011';
var nameSec = "CHATEAULIN ; DINEAULT ; PLOMODIERN";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [18000, 9000, 4000, 100],
datasetFlow = [12000, 6000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [77, 250, 500, 1700];

