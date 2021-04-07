// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "CLERMONT FERRAND";

	// Nom de la ville centre
	var nomVC = "Clermont-Ferrand";

	// Source des données
	var dataSource = "Source: Enquête Déplacements Grand Territoire (EDGT) 2012 - Clermont-Ferrand / Val d'Allier, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [3.0849, 45.72],
		scaleProj = 27000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2.4;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange =  [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [30000, 15000, 5000, 100],
		datasetFlow = [20000, 10000, 3000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 8, 10, 12, 14],
		colDom_age2 = [0, 8, 11, 13, 16],
		colDom_age3 = [0, 47, 52, 56, 59],
		colDom_age4 = [0, 17, 21, 24, 28];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 5, 8, 14, 18],
		colDom_cleduc2 = [0, 33, 38, 43, 49],
		colDom_cleduc3 = [0, 24, 26, 30, 33],
		colDom_cleduc4 = [0, 11, 16, 20, 26];

	var colDom_educmen1 = [0, 7, 11, 15, 20],
		colDom_educmen2 = [0, 37, 42, 49, 56],
		colDom_educmen3 = [0, 20, 25, 28, 31],
		colDom_educmen4 = [0, 8, 11, 15, 20];

	var colDom_cs1 = [0, 2, 3, 4, 6],
		colDom_cs2 = [0, 9, 12, 16, 21],
		colDom_cs3 = [0, 30, 35, 46, 52],
		colDom_cs4 = [0, 17, 23, 27, 31],
		colDom_cs5 = [0, 9, 12, 17, 21];

	var colDom_cspmen1 = [0, 3, 4, 6, 9],
		colDom_cspmen2 = [0, 11, 15, 22, 29],
		colDom_cspmen3 = [0, 29, 37, 47, 54],
		colDom_cspmen4 = [0, 15, 19, 23, 27],
		colDom_cspmen5 = [0, 6, 8, 11, 15];

	var colDom_occ1 = [0, 44, 50, 53, 57],
		colDom_occ2 = [0, 4, 6, 9, 12],
		colDom_occ3 = [0, 2, 4, 5, 7],
		colDom_occ4 = [0, 24, 29, 32, 36],
		colDom_occ5 = [0, 2, 3, 5, 6];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 15, 20, 23, 30],
		colDom_mod2 = [0, 65, 73, 78, 81],
		colDom_mod1 = [0, 1, 3, 5, 8];



