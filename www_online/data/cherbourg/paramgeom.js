// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2016 - Cherbourg / Pays du Cotentin, Cerema";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.49, -1.51];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[48.98742700601184, -2.54608154296875],
//north east
[49.988318060767966, -0.472412109375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "CHERBOURG CENTRE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [14000, 7000, 3000, 100],
datasetFlow = [11000, 6000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [110, 250, 500, 1300];

