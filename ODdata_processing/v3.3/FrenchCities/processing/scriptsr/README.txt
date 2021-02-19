Les scripts R s'utilisent dans leur ordre d'apparition dans le dossier :

	- 1_text2r.R : transformation des données sources au format R
		- en entrée : EDGT34_TOTAL_DEPLACEMENTS.txt et EDGT34_TOTAL_PERSONNES.txt
		- en sortie : BD_brute_depl.RDS et BD_brute_pers.RDS

	- 2_createBDmobil.R : création de la BD mobiliscope (nettoyage des données brutes et création de nouvelles variables)
		- en entrée : BD_brute_depl.RDS et BD_brute_pers.RDS
		- en sortie : BD_mobiliscope_depl.RDS et BD_mobiliscope_pers.RDS

	- 2b_zonage_residentialArea.R : préparation de l'indicateur "Residential Area"

	- 3_deplToPresence.R : création de la table de présence
		- en entrée : BD_mobiliscope_depl.RDS et BD_mobiliscope_pers.RDS
		- en sortie : table_presence.RDS

	- 3_deplToPresence_fct.R : fonctions utilisées par le script du même nom

	- 4_p2m.R : création des csv et geojson lus par l'application Mobiliscope
		- en entrée : table_presence.RDS
		- en sortie : www/data/MONTPELLIER/...

	- 4_p2m_fct.R : fonctions utilisées par le script du même nom

	- listComSearch.R : création de la liste des communes inclues dans les périmètres d'enquête