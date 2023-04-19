// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2012 - Saint-Brieuc / Agglomération Baie d'Armor, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [48.5, -2.77];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11;
var minZoom = 11;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '022';
var nameSec = "SAINT-BRIEUC CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [10000, 5000, 2000, 100],
datasetFlow = [6000, 3000, 1000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [54, 250, 500, 1000];

