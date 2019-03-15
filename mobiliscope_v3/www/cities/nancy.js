// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "NANCY";

	// Nom de la ville centre
	var nomVC = "Nancy";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Nancy / Sud 54 - 2013, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [6.2, 48.72],
		scaleProj = 34000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 1.8;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [27000, 15000, 5000, 100],
		datasetFlow = [22000, 10000, 3000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 10, 12, 15, 23],
		colDom_age2 = [0, 10, 12, 14, 17],
		colDom_age3 = [0, 44, 49, 53, 56],
		colDom_age4 = [0, 15, 19, 21, 25];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 4, 7, 9, 13],
		colDom_cleduc2 = [0, 33, 40, 44, 50],
		colDom_cleduc3 = [0, 24, 27, 30, 34],
		colDom_cleduc4 = [0, 13, 17, 22, 28];

	var colDom_educmen1 = [0, 5, 9, 11, 14],
		colDom_educmen2 = [0, 37, 43, 49, 55],
		colDom_educmen3 = [0, 19, 25, 29, 33],
		colDom_educmen4 = [0, 9, 14, 17, 23];

	var colDom_cs1 = [0, 3, 5, 6, 8],
		colDom_cs2 = [0, 10, 12, 17, 22],
		colDom_cs3 = [0, 30, 36, 40, 48],
		colDom_cs4 = [0, 18, 22, 26, 30],
		colDom_cs5 = [0, 10, 13, 17, 22];

	var colDom_cspmen1 = [0, 5, 7, 9, 12],
		colDom_cspmen2 = [0, 11, 15, 20, 30],
		colDom_cspmen3 = [0, 29, 35, 41, 48],
		colDom_cspmen4 = [0, 15, 18, 22, 27],
		colDom_cspmen5 = [0, 6, 10, 13, 16];

	var colDom_occ1 = [0, 43, 47, 51, 56],
		colDom_occ2 = [0, 5, 8, 10, 20],
		colDom_occ3 = [0, 4, 5, 7, 9],
		colDom_occ4 = [0, 20, 25, 28, 33],
		colDom_occ5 = [0, 2, 4, 6, 7];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 17, 24, 29, 35],
		colDom_mod2 = [0, 52, 62, 68, 74],
		colDom_mod1 = [0, 4, 7, 10, 14];

