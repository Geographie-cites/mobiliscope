// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "LA ROCHELLE";

	// Nom de la ville centre
	var nomVC = "La Rochelle";

	// Source des données
	var dataSource = "Source: Enquête Déplacements Ville Moyenne (EDVM) 2011, La Rochelle / Agglomération rochelaise, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-1.158, 46.155],
		scaleProj = 130000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [18000, 9000, 4000, 100],
		datasetFlow = [12000, 6000, 2500, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 11, 13, 17],
		colDom_age2 = [0, 5, 7, 9, 11],
		colDom_age3 = [0, 46, 50, 54, 58],
		colDom_age4 = [0, 18, 23, 28, 33];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 10, 15, 19, 23],
		colDom_cleduc2 = [0, 26, 30, 33, 37],
		colDom_cleduc3 = [0, 23, 26, 28, 32],
		colDom_cleduc4 = [0, 17, 21, 24, 31];

	var colDom_educmen1 = [0, 10, 16, 21, 23],
		colDom_educmen2 = [0, 28, 32, 36, 39],
		colDom_educmen3 = [0, 21, 24, 27, 30],
		colDom_educmen4 = [0, 17, 20, 23, 30];

	var colDom_cs1 = [0, 4, 5, 6, 8],
		colDom_cs2 = [0, 4, 5, 6, 9],
		colDom_cs3 = [0, 44, 47, 49, 52],
		colDom_cs4 = [0, 13, 16, 19, 22],
		colDom_cs5 = [0, 17, 20, 23, 25];

	var colDom_cspmen1 = [0, 4, 5, 7, 9],
		colDom_cspmen2 = [0, 4, 5, 7, 10],
		colDom_cspmen3 = [0, 45, 49, 51, 54],
		colDom_cspmen4 = [0, 13, 16, 18, 21],
		colDom_cspmen5 = [0, 16, 19, 21, 23];

	var colDom_occ1 = [0, 41, 46, 49, 54],
		colDom_occ2 = [0, 5, 8, 10, 12],
		colDom_occ3 = [0, 3, 5, 6, 10],
		colDom_occ4 = [0, 24, 30, 34, 40],
		colDom_occ5 = [0, 1.5, 2.5, 3.5, 4.5];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 19, 24, 32, 41],
		colDom_mod2 = [0, 52, 62, 72, 78],
		colDom_mod1 = [0, 2, 3, 5, 8];


