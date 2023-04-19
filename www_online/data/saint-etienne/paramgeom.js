// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2010 - Saint-Étienne / Bassin de vie stéphanois, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [45.4, 4.24];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[44.966741217055315, 3.44696044921875],
//north east
[45.83071305019327, 5.12786865234375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "SAINT-ETIENNE CENTRE-VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [24000, 12000, 6000, 100],
datasetFlow = [14000, 7000, 3000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [53, 250, 500, 1600];

