// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2017 - Annecy / Haute-Savoie, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.97, 6.48];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '301';
var nameSec = "ANNECY VIEILLE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [15000, 8000, 3000, 100],
datasetFlow = [10000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [140, 250, 500, 1900];

