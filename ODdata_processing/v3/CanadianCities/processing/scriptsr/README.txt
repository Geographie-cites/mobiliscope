Les scripts R s'utilisent dans leur ordre d'apparition dans le dossier (exemple pour les données de Montréal) :

	- 1_prétraitements_QC.R : nettoyage des données brutes et création de nouvelles variables
		- en entrée : mtl13_niveau_2.csv
		- en sortie : BD_Mtl.RDS

	- 1b_hrearv.R : fonction utilisée par le script "1_prétraitements_QC.R" pour créer les heures d'arrivées manquantes

	- 2_creationBD_mobil_QC : création de la BD mobiliscope standardisée : tables de déplacements et d'individus
		- en entrée : BD_Mtl.RDS
		- en sortie : BD_mobiliscope_depl_MONTREAL.RDS et 	BD_mobiliscope_pers_MONTREAL.RDS

	- 3_deplToPresence.R : création de la table de présence
		 - en entrée : BD_mobiliscope_depl_MONTREAL.RDS et 		BD_mobiliscope_pers_MONTREAL.RDS
		 - en sortie : table_presence.RDS

	- 3_deplToPresence_fct.R : fonctions utilisées par le script du même nom

	- 4_p2m.R : création des csv et geojson lus par l'application Mobiliscope
		 - en entrée : table_presence.RDS
		 - en sortie : www/data/MONTREAL/...

	- 4_p2m_fct.R : fonctions utilisées par le script du même nom

	- 6_listComSearch_QC : actualisation de la liste des communes incluses dans le Mobiliscope pour l'outil "Search" avec l'intégration des municipalités incluses dans les enquêtes québécoises


Warning : 
Penser à fermer R entre chaque grande étape et charger seulement les "library" du script concerné, sinon certaines fonctions sont cachées des "library" et le script renvoie une erreur.
