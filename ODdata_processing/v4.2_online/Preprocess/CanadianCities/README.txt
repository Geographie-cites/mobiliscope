Les scripts R s'utilisent dans leur ordre de numérotation

1_pretraitements_QC.R : nettoyage, imputation, compilation des données brutes 
	- en entrée : données brutes des 6 EOD du Québec
	- en sortie : BD_eod_meth_ha.RDS

2_creationBD_mobil_QC.R : création d'une BD standardisée avec une table déplacement et une table personne 
	- en entrée : BD_eod_meth_ha.RDS
	- en sortie : BD_mobiliscope_depl_can.RDS et BD_mobiliscope_pers_can.RDS

Les données canadiennes ne sont pas librement accessibles