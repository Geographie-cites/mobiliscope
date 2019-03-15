// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "BORDEAUX";

	// Nom de la ville centre
	var nomVC = "Bordeaux";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Bordeaux - 2009, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-0.7, 44.835],
		scaleProj = 60000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.6,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [22000, 10000, 2500, 100],
		datasetFlow = [15000, 7000, 2000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 11, 14, 18],
		colDom_age2 = [0, 8, 11, 14, 18],
		colDom_age3 = [0, 45, 51, 55, 61],
		colDom_age4 = [0, 13, 17, 21, 26];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 4, 6, 10, 14],
		colDom_cleduc2 = [0, 34, 40, 46, 51],
		colDom_cleduc3 = [0, 21, 24, 27, 31],
		colDom_cleduc4 = [0, 13, 18, 24, 31];

	var colDom_educmen1 = [0, 5, 8, 13, 18],
		colDom_educmen2 = [0, 40, 48, 53, 57],
		colDom_educmen3 = [0, 17, 21, 25, 30],
		colDom_educmen4 = [0, 7, 11, 16, 24];

	var colDom_cs1 = [0, 3, 4, 5, 8],
		colDom_cs2 = [0, 9, 13, 16, 21],
		colDom_cs3 = [0, 27, 31, 34, 37],
		colDom_cs4 = [0, 22, 27, 30, 34],
		colDom_cs5 = [0, 11, 16, 20, 26];

	var colDom_cspmen1 = [0, 5, 8, 11, 14],
		colDom_cspmen2 = [0, 14, 18, 23, 31],
		colDom_cspmen3 = [0, 29, 32, 36, 39],
		colDom_cspmen4 = [0, 17, 22, 26, 30],
		colDom_cspmen5 = [0, 5, 7, 11, 16];

	var colDom_occ1 = [0, 40, 48, 53, 59],
		colDom_occ2 = [0, 6, 8, 11, 15],
		colDom_occ3 = [0, 3, 4, 6, 8],
		colDom_occ4 = [0, 20, 25, 30, 34],
		colDom_occ5 = [0, 2, 4, 6, 7];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 9, 14, 20, 30],
		colDom_mod2 = [0, 50, 69, 79, 86],
		colDom_mod1 = [0, 3, 8, 12, 19];



