// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2009 - Marseille / Bouches-du-Rhône, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.37, 5.45];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[43.092960677116295, 4.3231201171875],
//north east
[43.98491011404692, 6.17706298828125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "MARSEILLE BELSUNCE, CHAPITRE (1ER)";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [43000, 22000, 10000, 100],
datasetFlow = [28000, 14000, 7000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [30, 500, 1000, 3300];

