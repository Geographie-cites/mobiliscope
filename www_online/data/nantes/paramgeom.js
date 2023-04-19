// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Grand Territoire (EDGT) 2015 - Loire-Atlantique, Cerema, <a href=https://www.data.gouv.fr/fr/datasets/enquete-deplacements-en-loire-atlantique-2/ target=_blank>Licence Ouverte</a>";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [47.36, -1.68];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 9;
var minZoom = 9;

// stocker max bounds
var myBounds = [
//south west
[46.64189395892872, -2.99102783203125],
//north east
[48.06706753191901, -0.37078857421875]
];

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "NANTES COMMERCE, CHATEAU";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 195];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [27000, 14000, 6000, 100],
datasetFlow = [20000, 10000, 5000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [130, 500, 1000, 2500];

