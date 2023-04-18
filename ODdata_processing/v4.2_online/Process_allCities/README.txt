Les scripts R s'utilisent dans leur ordre de numérotation

1_bdm2presence.R : création de la table des présences 
	- en entrée : BD_mobiliscope_depl.RDS et BD_mobiliscope_pers.RDS
	- en sortie : BD_presence.RDS et BD_presence_utile_[ville].RDS
1_bdm2presence_fct.R : fonctions utilisées par le script du même nom


2_p2m : création des csv et geojson lus par l'application Mobiliscope
	- en entrée : BD_presence_uile_[ville].RDS, SEC_59ED_W84.shp, dictionnaire_menu.xlsx et paramgeom.xlsx
	- en sortie : www/data/[ville]/... 
2_p2m_fct : fonctions utilisées par le script du même nom



le dossier "data" contient les données produites et lues par les scripts R
versionsInfo.png : versions de R et des packages utilisés