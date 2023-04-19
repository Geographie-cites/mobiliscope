// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2009 - Strasbourg / Bas-Rhin, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.67, 7.55];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[47.76886840424207, 5.4437255859375],
//north east
[49.396675075193976, 9.151611328125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '037';
var nameSec = "STRASBOURG ELLIPSE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 160];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [35000, 18000, 8000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [53, 500, 1000, 3700];

