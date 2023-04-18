BASE DE DONNEES GEOGRAPHIQUES DU MOBILISCOPE - EXTRAIT

Il s'agit d'un extrait de la Base de Données géographiques


La couche est stockée au format esri shape en WGS 84 (epsg: 4326) et encodée en utf8.


Table attributaire :

Elle contient 14 variables :
 - PAYS = "CA" pour Canada, "FR" pour France et "AS" pour l'Amérique latine
 - LIB_ED = libellé unique de l'enquête (Nom de l'enquête, ANNEE)
 - ID_SEC = identifiant unique des secteurs (NOM DE L'ENQUÊTE_ANNEE_CODE DU SECTEUR)
 - ENQUETE = nom de l'enquête (nom de la ville centre de la zone enquêtée) en majuscule sans caractères spéciaux
 - ANNEE = année de fin de l'enquête
 - CODE_SEC = code du secteur
 - LENGTH = Périmètre du secteur en mètre*
 - AREA = surface du secteur en mètre*
 - X_W84 = centroïde X du secteur en dégré**
 - Y_W84 = centroïde Y du secteur en degré**
 - LIB = libellé des secteurs
 - ZONAGE_SEC = Code de zonage d'appartenance des secteurs 
 

* Les calculs de surface et de périmètre ont été effectués dans la projection de référence des zones enquêtées, à savoir :
Lambert 93 pour la France métropolitaine (epsg: 2154), 
UTM40 sud pour La réunion (epsg: 2975),  
RGAF09 (epsg: 5490) pour la Martinique, 
NAD83 / Canada Atlas Lambert (epsg: 3978),
Bogota 1975 / Colombia Bogota zone (epsg: 21897), 
Corrego Alegre 1970-72 / UTM zone 23S (epsg: 22523) pour Sao Paulo, 
WGS84/UTM zone 19S (epsg: 32719) pour Santiago.

** Pour les besoins de la géovisualisation, les centroïdes ont été calculés après reprojection de tous les secteurs en WGS 84 et sur le polygone le plus large


3/ Liste des enquêtes extraites de la BU géographique (52 ED) :

 [1] "Bogotá, 2019"           "Santiago, 2012"         "São Paulo, 2017"       
 [4] "Albi, 2011"             "Alençon, 2018"          "Amiens, 2010"          
 [7] "Angers, 2012"           "Angoulême, 2012"        "Annecy, 2017"          
[10] "Annemasse, 2016"        "Bayonne, 2010"          "Besançon, 2018"        
[13] "Béziers, 2014"          "Bordeaux, 2009"         "Brest, 2018"           
[16] "Caen, 2011"             "Carcassonne, 2015"      "Cherbourg, 2016"       
[19] "Clermont-Ferrand, 2012" "Creil, 2017"            "Dijon, 2016"           
[22] "Douai, 2012"            "Dunkerque, 2015"        "Fort-de-France, 2014"  
[25] "Grenoble, 2010"         "La Rochelle, 2011"      "Le Havre, 2018"        
[28] "Lille, 2016"            "Longwy, 2014"           "Lyon, 2015"            
[31] "Marseille, 2009"        "Metz, 2017"             "Montpellier, 2014"     
[34] "Nancy, 2013"            "Nantes, 2015"           "Nice, 2009"            
[37] "Nîmes, 2015"            "Niort, 2016"            "Paris, 2010"           
[40] "Poitiers, 2018"         "Quimper, 2013"          "Rennes, 2018"          
[43] "Rouen, 2017"            "Saint-Brieuc, 2012"     "Saint-Denis, 2016"     
[46] "Saint-Étienne, 2010"    "Strasbourg, 2009"       "Thionville, 2012"      
[49] "Toulouse, 2013"         "Tours, 2019"            "Valence, 2014"         
[52] "Valenciennes, 2019"