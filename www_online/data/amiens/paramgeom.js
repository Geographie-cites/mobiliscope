// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2010 - Amiens / Grand Amiénois, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.93, 2.25];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[49.43062632296463, 1.2139892578125],
//north east
[50.42251884281916, 3.28765869140625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "AMIENS CENTRE-VILLE SUD";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [17000, 9000, 4000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [50, 250, 500, 1400];

