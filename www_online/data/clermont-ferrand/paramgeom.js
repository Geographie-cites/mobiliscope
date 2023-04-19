// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2012 - Clermont-Ferrand / Val d'Allier, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.77, 3.15];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[44.68427737181225, 1.1480712890624998],
//north east
[46.83389173208538, 5.295410156249999]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "CLERMONT FERRAND PLATEAU CENTRAL";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [31000, 16000, 7000, 100],
datasetFlow = [21000, 11000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [120, 500, 1000, 3400];

