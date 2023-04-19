// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Encuesta Origen – Destino de Viajes (EOD) 2012 - Santiago/Région métropolitaine de Santiago, <a href=http://www.sectra.gob.cl/biblioteca/detalle1.asp?mfn=3253 target=_blank>Sectra</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-33.55, -70.86];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[-34.411441643272425, -71.89727783203125],
//north east
[-32.67868463225378, -69.8236083984375]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '050';
var nameSec = "SANTIAGO PARQUE ALMAGRO";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [250000, 150000, 50000, 1000],
datasetFlow = [230000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [75, 1000, 5000, 15300];

