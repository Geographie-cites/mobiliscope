// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "LILLE";

	// Nom de la ville centre
	var nomVC = "Lille";

	// Source des données
	var dataSource = "Source: Enquête Déplacements Grand Territoire (EDGT) 2016 - Lille / Métropole Européenne de Lille, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [2.95, 50.65],
		scaleProj = 90000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.5,
		centerZ_h = 1.7;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [41000, 20000, 5000, 100],
		datasetFlow = [26000, 12500, 4000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 12, 14, 17, 24],
		colDom_age2 = [0, 14, 16, 19, 22],
		colDom_age3 = [0, 41, 46, 49, 53],
		colDom_age4 = [0, 12, 16, 19, 21];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 5, 7, 10, 14],
		colDom_cleduc2 = [0, 28, 35, 41, 47],
		colDom_cleduc3 = [0, 22, 25, 27, 30],
		colDom_cleduc4 = [0, 15, 21, 29, 40];

	var colDom_educmen1 = [0, 7, 10, 14, 19],
		colDom_educmen2 = [0, 33, 41, 49, 55],
		colDom_educmen3 = [0, 18, 21, 25, 28],
		colDom_educmen4 = [0, 9, 15, 22, 32];

	var colDom_cs1 = [0, 3, 5, 6, 10],
		colDom_cs2 = [0, 13, 19, 23, 29],
		colDom_cs3 = [0, 23, 27, 30, 34],
		colDom_cs4 = [0, 20, 25, 29, 33],
		colDom_cs5 = [0, 9, 13, 19, 26];

	var colDom_cspmen1 = [0, 7, 10, 12, 18],
		colDom_cspmen2 = [0, 18, 26, 30, 38],
		colDom_cspmen3 = [0, 22, 26, 29, 32],
		colDom_cspmen4 = [0, 14, 20, 24, 29],
		colDom_cspmen5 = [0, 4, 7, 11, 16];

	var colDom_occ1 = [0, 41, 47, 53, 56],
		colDom_occ2 = [0, 7, 10, 14, 19],
		colDom_occ3 = [0, 5, 8, 10, 14],
		colDom_occ4 = [0, 14, 20, 23, 26],
		colDom_occ5 = [0, 3, 4, 6, 8];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 17, 23, 28, 35],
		colDom_mod2 = [0, 43, 56, 67, 74],
		colDom_mod1 = [0, 6, 11, 15, 21];

