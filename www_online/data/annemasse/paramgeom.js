// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Annemasse / Franco Valdo Genevois, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [46.16, 6.22];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[45.623642598278074, 5.18280029296875],
//north east
[46.69089949154197, 7.2564697265625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "ANNEMASSE CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [17000, 9000, 4000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [150, 250, 500, 1900];

