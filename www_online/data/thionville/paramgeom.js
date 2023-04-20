// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2012 - Thionville / Fensch, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.37, 6.1];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11;
var minZoom = 11;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "THIONVILLE CENTRE-VILLE, GARE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [12000, 6000, 3000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [87, 250, 500, 1000];
