// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2017 - Creil / Sud de l’Oise, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.26, 2.53];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 10;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CREIL RIVE DROITE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [11000, 6000, 2000, 100],
datasetFlow = [5000, 2500, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [93, 250, 500, 700];

