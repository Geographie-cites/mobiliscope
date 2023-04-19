// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Encuesta Origen – Destino de Hogares (EODH) 2019 - Bogotá /Aire métropolitaine de Bogotá, SDM-Steer-CNC (prod.), <a href=https://www.simur.gov.co/encuestas-de-movilidad target=_blank>Simur (distrib.)</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [4.66, -74.15];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 11;
var minZoom = 10;

// stocker max bounds
var myBounds = [
//south west
[3.5956599859799567, -75.399169921875],
//north east
[5.6679180749727625, -72.7789306640625]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = 'UTAM100';
var nameSec = "BOGOTÁ GALERIAS";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [220000, 150000, 50000, 1000],
datasetFlow = [190000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [6, 1000, 5000, 33100];

