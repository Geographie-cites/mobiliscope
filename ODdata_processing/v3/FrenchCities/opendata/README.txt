Fichiers sous licence ODbL mis à disposition par Montpellier Méditérranée Métropole :
- EDGT 34 - TOTAL - Dico - 17112014.xls
- EDGT34_TOTAL_PERSONNES.TXT
- EDGT34_TOTAL_DEPLACEMENTS.TXT
- secteur_tirage.shp

http://data.montpellier3m.fr/dataset/enquete-menages-deplacements

Téléchargés le 12 mars 2019

L'équipe du Mobiliscope met à disposition un script R (1_txt2r.R) pour transformer les données brutes (fichiers .txt "déplacements" et "personnes")
au format RDS qui est le format utilisé pour toutes les préparations des données du Mobiliscope.



Les données géographiques ont également nécessité une préparation avant leur utilisation sous R:
- dissociation des secteurs de l'enquête de Montpellier (EDGT, 2104) de ceux de Béziers (EDVM, 2014)
- vérification du codage des secteurs (type et longueur)
- calcul des centroïdes (x et y) des secteurs en WGS84
- standardisation des variables de la table attributaire (nombre, nom et ordre)
- création des libellés des secteurs
