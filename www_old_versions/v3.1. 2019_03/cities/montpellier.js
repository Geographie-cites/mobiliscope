// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "MONTPELLIER";

	// Nom de la ville centre
	var nomVC = "Montpellier";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Montpellier / Aire métropolitaine montpelliéraine - 2014, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [3.55, 43.63],
		scaleProj = 44000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.25,
		centerZ_h = 1.9;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [22000, 10000, 2500, 100],
		datasetFlow = [17000, 8000, 2000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 8, 11, 13, 20],
		colDom_age2 = [0, 11, 13, 16, 19],
		colDom_age3 = [0, 43, 48, 52, 56],
		colDom_age4 = [0, 16, 20, 22, 26];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 2, 5, 7, 10],
		colDom_cleduc2 = [0, 26, 32, 38, 45],
		colDom_cleduc3 = [0, 26, 29, 32, 35],
		colDom_cleduc4 = [0, 17, 23, 30, 39];

	var colDom_educmen1 = [0, 4, 6, 10, 14],
		colDom_educmen2 = [0, 32, 40, 46, 53],
		colDom_educmen3 = [0, 23, 27, 31, 35],
		colDom_educmen4 = [0, 23, 27, 31, 35];

	var colDom_cs1 = [0, 3, 4, 6, 8],
		colDom_cs2 = [0, 8, 11, 14, 17],
		colDom_cs3 = [0, 25, 29, 32, 36],
		colDom_cs4 = [0, 26, 29, 32, 35],
		colDom_cs5 = [0, 13, 17, 22, 28];

	var colDom_cspmen1 = [0, 6, 8, 10, 14],
		colDom_cspmen2 = [0, 12, 16, 19, 25],
		colDom_cspmen3 = [0, 27, 32, 35, 40],
		colDom_cspmen4 = [0, 20, 24, 28, 32],
		colDom_cspmen5 = [0, 7, 10, 13, 17];

	var colDom_occ1 = [0, 39, 46, 50, 54],
		colDom_occ2 = [0, 5, 7, 10, 16],
		colDom_occ3 = [0, 5, 8, 10, 12],
		colDom_occ4 = [0, 19, 25, 28, 33],
		colDom_occ5 = [0, 4, 5, 6, 8];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 16, 21, 27, 34],
		colDom_mod2 = [0, 50, 65, 72, 78],
		colDom_mod1 = [0, 2, 5, 10, 18];


