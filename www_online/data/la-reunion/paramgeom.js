// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Saint-Denis / La Réunion, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-21.13, 55.53];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 10;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "SAINT-DENIS BARACHOIS, JARDIN DE L'ETAT";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 220];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [16000, 8000, 4000, 100],
datasetFlow = [13000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [60, 250, 500, 1400];

