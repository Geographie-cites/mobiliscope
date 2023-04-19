// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2014 - Montpellier / Montpellier Méditerranée Métropole, Cerema, <a href=https://data.montpellier3m.fr/dataset/enquete-menages-deplacements target=_blank>ODbL</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [43.60, 3.67];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[43.038783344984836, 2.63397216796875],
//north east
[44.15462243076731, 4.7076416015625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "MONTPELLIER PREFECTURE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [22000, 11000, 5000, 100],
datasetFlow = [17000, 9000, 4000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [78, 500, 1000, 4000];

