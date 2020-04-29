// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "VALENCIENNES";

	// Nom de la ville centre
	var nomVC = "Valenciennes";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD) 2011 - Valenciennes / Valenciennois, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [3.4, 50.374],
		scaleProj = 83000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.5,
		centerZ_h = 1.9;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [14000, 7000, 3000, 100],
		datasetFlow = [10000, 5000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 12, 14, 16, 19],
		colDom_age2 = [0, 11, 14, 15, 18],
		colDom_age3 = [0, 46, 50, 53, 56],
		colDom_age4 = [0, 15, 17, 19, 22];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 7, 10, 13, 1117],
		colDom_cleduc2 = [0, 46, 51, 55, 60],
		colDom_cleduc3 = [0, 18, 22, 24, 28],
		colDom_cleduc4 = [0, 6, 8, 11, 16];

	var colDom_educmen1 = [0, 11, 15, 19, 24],
		colDom_educmen2 = [0, 50, 57, 63, 68],
		colDom_educmen3 = [0, 11, 14, 17, 22],
		colDom_educmen4 = [0, 3, 4, 5, 9];

	var colDom_cs1 = [0, 7, 10, 13, 18],
		colDom_cs2 = [0, 22, 27, 31, 35],
		colDom_cs3 = [0, 26, 29, 32, 37],
		colDom_cs4 = [0, 15, 18, 22, 27],
		colDom_cs5 = [0, 3, 4, 6, 10];

	var colDom_cspmen1 = [0, 14, 18, 25, 33],
		colDom_cspmen2 = [0, 28, 33, 38, 44],
		colDom_cspmen3 = [0, 19, 22, 26, 31],
		colDom_cspmen4 = [0, 7, 10, 14, 22],
		colDom_cspmen5 = [0, 0.5, 1.5, 2.5, 4];

	var colDom_occ1 = [0, 36, 40, 44, 50],
		colDom_occ2 = [0, 5, 8, 10, 12],
		colDom_occ3 = [0, 8, 10, 12, 14],
		colDom_occ4 = [0, 22, 24, 26, 29],
		colDom_occ5 = [0, 7, 9, 11, 14];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 3, 5, 8, 10],
		colDom_mod2 = [0, 63, 69, 74, 77],
		colDom_mod1 = [0, 17, 20, 24, 28];



