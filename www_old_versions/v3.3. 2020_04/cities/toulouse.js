// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "TOULOUSE";

	// Nom de la ville centre
	var nomVC = "Toulouse";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD) 2013 - Toulouse / Grande agglomération toulousaine, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [1.27, 43.568],
		scaleProj = 55000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.5,
		centerZ_h = 2.4;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [41000, 20000, 5000, 100],
		datasetFlow = [30000, 15000, 5000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 12, 16, 22],
		colDom_age2 = [0, 10, 14, 17, 22],
		colDom_age3 = [0, 39, 45, 51, 57],
		colDom_age4 = [0, 14, 18, 21, 26];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];
		
	//var colDom_sex1 = [0, 39, 44, 48, 53],
		//colDom_sex2 = [0, 48, 53, 57, 62];

	var colDom_cleduc1 = [0, 3, 4, 7, 11],
		colDom_cleduc2 = [0, 23, 29, 35, 41],
		colDom_cleduc3 = [0, 25, 28, 30, 32],
		colDom_cleduc4 = [0, 21, 28, 35, 43];

	var colDom_educmen1 = [0, 4, 7, 10, 14],
		colDom_educmen2 = [0, 27, 35, 41, 49],
		colDom_educmen3 = [0, 24, 27, 30, 34],
		colDom_educmen4 = [0, 12, 20, 26, 34];

	var colDom_cs1 = [0, 2, 3, 5, 6],
		colDom_cs2 = [0, 7, 10, 14, 17],
		colDom_cs3 = [0, 22, 26, 29, 33],
		colDom_cs4 = [0, 25, 28, 31, 35],
		colDom_cs5 = [0, 16, 21, 28, 34];

	var colDom_cspmen1 = [0, 4, 6, 8, 11],
		colDom_cspmen2 = [0, 12, 16, 20, 25],
		colDom_cspmen3 = [0, 26, 30, 34, 38],
		colDom_cspmen4 = [0, 21, 25, 29, 32],
		colDom_cspmen5 = [0, 8, 12, 16, 22];

	var colDom_occ1 = [0, 43, 49, 54, 58],
		colDom_occ2 = [0, 6, 9, 12, 19],
		colDom_occ3 = [0, 3, 5, 7, 10],
		colDom_occ4 = [0, 17, 22, 26, 32],
		colDom_occ5 = [0, 2, 3, 4, 6];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 8, 13, 19, 29],
		colDom_mod2 = [0, 44, 66, 78, 85],
		colDom_mod1 = [0, 5, 9, 15, 26];


