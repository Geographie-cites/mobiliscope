Les scripts R s'utilisent dans leur ordre de numérotation

1_bdm2presence.R : création de la table de présence 
	- en entrée : BD_mobiliscope_depl.RDS et BD_mobiliscope_pers.RDS
	- en sortie : BD_presence.RDS 
1_bdm2presence_fct.R : fonctions utilisées par le script du même nom

2_p2m : création des csv et geojson lus par l'application Mobiliscope
	- en entrée : BD_presence.RDS et SEC_59ED_W84.shp
	- en sortie : www/data/VILLE/... 
2_p2m_fct : fonctions utilisées par le script du même nom

le dossier "data" contient un extrait de la BD_presence (échantillon de 10 personnes)
le dossier "txt" contient la table de correspondance zone fine/qpv (utilisée dans 1_bdm2presence)