// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2012 - Douai / Grand Douaisis, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.38, 3.18];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11;
var minZoom = 10;

// stocker max bounds
var myBounds = [
//south west
[50.13378405461423, 2.66143798828125],
//north east
[50.62507306341435, 3.698272705078125]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "DOUAI CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [9000, 5000, 2000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [93, 250, 500, 800];

