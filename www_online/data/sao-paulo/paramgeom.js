// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Pesquisa Origem e Destino (OD) - São Paulo/Région métropolitaine de São Paulo, <a href=http://www.metro.sp.gov.br/pesquisa-od/ target=_blank>Companhia do Metrô de São Paulo</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [-23.6, -46.54];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = 'd080';
var nameSec = "SÃO PAULO SÉ";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 65];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [280000, 150000, 50000, 1000],
datasetFlow = [210000, 120000, 50000, 1000];

// Seuils des liens (carte et légende flow)
var sLink = [13, 1000, 5000, 14200];

