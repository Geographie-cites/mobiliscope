// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2016 - Lille / Métropole Européenne de Lille, Cerema, <a href=https://opendata.lillemetropole.fr/explore/dataset/enquete-deplacement-2016/information/ target=_blank>Licence Ouverte</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.65, 3.05];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11;
var minZoom = 10;

// stocker max bounds
var myBounds = [
//south west
[50.40501655606602, 2.530975341796875],
//north east
[50.89350536138496, 3.56781005859375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '101';
var nameSec = "LILLE CENTRE 2 GARES";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 130];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [41000, 21000, 10000, 100],
datasetFlow = [26000, 13000, 6000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [200, 500, 1000, 2700];

