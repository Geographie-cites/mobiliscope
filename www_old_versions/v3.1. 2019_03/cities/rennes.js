// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "RENNES";

	// Nom de la ville centre
	var nomVC = "Rennes";

	// Source des données
	var dataSource = "Source: Enquête mobilité EMC&sup2;, Rennes / Île-et-Vilaine - 2018, CEREMA (prod.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-1.9, 48.1],
		scaleProj = 22000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.7,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [37000, 20000, 5000, 100],
		datasetFlow = [26000, 12500, 4000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 7, 10, 14, 18],
		colDom_age2 = [0, 10, 13, 15, 19],
		colDom_age3 = [0, 46, 50, 54, 59],
		colDom_age4 = [0, 15, 18, 22, 27];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 4, 5, 7, 10],
		colDom_cleduc2 = [0, 29, 34, 39, 45],
		colDom_cleduc3 = [0, 27, 30, 33, 37],
		colDom_cleduc4 = [0, 16, 21, 25, 34];

	var colDom_educmen1 = [0, 4, 6, 7, 10],
		colDom_educmen2 = [0, 30, 36, 42, 48],
		colDom_educmen3 = [0, 26, 29, 33, 37],
		colDom_educmen4 = [0, 14, 18, 23, 30];

	var colDom_cs1 = [0, 0.5, 1, 3, 4],
		colDom_cs2 = [0, 11, 16, 20, 26],
		colDom_cs3 = [0, 25, 31, 34, 39],
		colDom_cs4 = [0, 24, 28, 32, 37],
		colDom_cs5 = [0, 9, 13, 17, 22];

	var colDom_cspmen1 = [0, 1, 2, 4, 6],
		colDom_cspmen2 = [0, 13, 18, 23, 28],
		colDom_cspmen3 = [0, 26, 32, 36, 41],
		colDom_cspmen4 = [0, 24, 27, 32, 35],
		colDom_cspmen5 = [0, 7, 10, 13, 18];

	var colDom_occ1 = [0, 45, 50, 55, 60],
		colDom_occ2 = [0, 4, 7, 10, 14],
		colDom_occ3 = [0, 4, 6, 8, 10],
		colDom_occ4 = [0, 20, 25, 29, 35],
		colDom_occ5 = [0, 1, 2, 3, 4];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 18, 23, 28, 33],
		colDom_mod2 = [0, 58, 67, 72, 77],
		colDom_mod1 = [0, 2, 4, 7, 13];


