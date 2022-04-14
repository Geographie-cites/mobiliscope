Les scripts R s'utilisent dans leur ordre de numérotation

1_bdm2presence.R : création de la table de présence (Attention script utilisé sur le serveur humanum)
	- en entrée : BD_mobiliscope_depl.RDS, BD_mobiliscope_depl_can.RDS et BDU_mobiliscope_pers.RDS et BDU_mobiliscope_pers_can.RDS
	- en sortie : BD_presence_humanum.RDS 
1_bdm2presence_fct.R : fonctions utilisées par le script du même nom

2_qpv : dossier contenant le rmd et les données Insee et de l'IGN utilisés pour la construction de l'indicateur QPV
	- en entrée : BD_presence_humanum.RDS
	- en sortie : BD_presence.RDS

3_p2m : création des csv et geojson lus par l'application Mobiliscope
	- en entrée : BD_presence.RDS
	- en sortie : www/data/VILLE/... 
3_p2m_fct : fonctions utilisées par le script du même nom