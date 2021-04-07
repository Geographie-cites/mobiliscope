// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "GRENOBLE";

	// Nom de la ville centre
	var nomVC = "Grenoble";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD) 2010 - Grenoble / Grande région grenobloise, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [5.5, 45.115],
		scaleProj = 34000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.6,
		centerZ_h = 2.4;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [20000, 10000, 2500, 100],
		datasetFlow = [18000, 9000, 2000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 7, 10, 12, 16],
		colDom_age2 = [0, 8, 11, 14, 17],
		colDom_age3 = [0, 45, 51, 55, 61],
		colDom_age4 = [0, 17, 21, 24, 28];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 5, 8, 10, 14],
		colDom_cleduc2 = [0, 34, 41, 46, 52],
		colDom_cleduc3 = [0, 20, 23, 26, 29],
		colDom_cleduc4 = [0, 13, 18, 24, 33];

	var colDom_educmen1 = [0, 6, 10, 13, 19],
		colDom_educmen2 = [0, 40, 47, 53, 59],
		colDom_educmen3 = [0, 15, 20, 24, 28],
		colDom_educmen4 = [0, 7, 11, 16, 23];

	var colDom_cs1 = [0, 3, 4, 5, 7],
		colDom_cs2 = [0, 11, 16, 20, 26],
		colDom_cs3 = [0, 21, 25, 29, 33],
		colDom_cs4 = [0, 23, 28, 32, 37],
		colDom_cs5 = [0, 10, 15, 19, 28];

	var colDom_cspmen1 = [0, 6, 8, 10, 13],
		colDom_cspmen2 = [0, 15, 23, 28, 34],
		colDom_cspmen3 = [0, 23, 27, 30, 35],
		colDom_cspmen4 = [0, 18, 22, 27, 32],
		colDom_cspmen5 = [0, 4, 6, 10, 17];

	var colDom_occ1 = [0, 44, 49, 53, 57],
		colDom_occ2 = [0, 4, 7, 9, 13],
		colDom_occ3 = [0, 2, 4, 5, 7],
		colDom_occ4 = [0, 22, 27, 31, 36],
		colDom_occ5 = [0, 3, 4, 6, 8];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 13, 17, 22, 31],
		colDom_mod2 = [0, 52, 68, 76, 83],
		colDom_mod1 = [0, 2, 6, 11, 19];



