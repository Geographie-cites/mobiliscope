// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "OTTAWA GATINEAU";

	// Nom de la ville centre
	var nomVC = "Ottawa-Gatineau";

	// Source des données
	var dataSource = "Source: Enquête Origine-Destination 2011 - Ottawa-Gatineau, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [- 75.9, 45.4],
		scaleProj = 35000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.6,
		centerZ_h = 2.1;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 140];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [100000, 50000, 10000, 500],
		datasetFlow = [60000, 30000, 10000, 200];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 11, 13, 14, 15],
		colDom_age2 = [0, 9, 10, 12, 14],
		colDom_age3 = [0, 53, 55, 57, 60],
		colDom_age4 = [0, 15, 18, 20, 23];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 50, 52, 55, 58],
		colDom_occ2 = [0, 9, 10, 11, 13],
		colDom_occ3 = [0, 2, 3, 4, 5],
		colDom_occ4 = [0, 22, 26, 28, 30],
		colDom_occ5 = [0, 5, 6, 7, 8];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 4, 6, 8, 10],
		colDom_mod2 = [0, 72, 77, 83, 90],
		colDom_mod1 = [0, 7, 11, 15, 18];

	var colDom_rev1 = [0, 4, 7, 9, 10],
		colDom_rev2 = [0, 14, 16, 17, 19],
		colDom_rev3 = [0, 25, 26, 28, 29],
		colDom_rev4 = [0, 19, 23, 25, 28],
		colDom_rev5 = [0, 22, 24, 26, 27]; //revenu "inconnu"



