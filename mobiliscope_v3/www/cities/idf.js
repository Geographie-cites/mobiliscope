// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "IDF";

	// Nom de la ville centre
	var nomVC = "Paris";

	// Source des données
	var dataSource = "Source: Enquête Globale Transport (EGT) - 2010, DRIEA-STIF-OMNIL (prod.), ADISP (distrib.) ";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [2.23, 48.65],
		scaleProj = 23000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.9,
		centerZ_h = 3.5;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "7501"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 100];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [270000, 140000, 50000, 1000],
		datasetFlow = [230000, 115000, 50000, 1000];

    // Seuils des liens (carte et légende flow)
    var sLink = [1000, 2000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 11, 13, 14],
		colDom_age2 = [0, 14, 16, 18, 20],
		colDom_age3 = [0, 50, 53, 55, 58],
		colDom_age4 = [0, 13, 15, 17, 20];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 10, 14, 18, 23],
		colDom_cleduc2 = [0, 17, 23, 28, 32],
		colDom_cleduc3 = [0, 23, 26, 28, 31],
		colDom_cleduc4 = [0, 19, 25, 32, 45];

	var colDom_educmen1 = [0, 14, 20, 26, 31],
		colDom_educmen2 = [0, 20, 26, 31, 35],
		colDom_educmen3 = [0, 21, 24, 27, 30],
		colDom_educmen4 = [0, 12, 16, 23, 37];

	var colDom_rev1 = [0, 18, 26, 34, 42],
		colDom_rev2 = [0, 23, 31, 39, 47],
		colDom_rev3 = [0, 12, 20, 28, 36],
		colDom_rev4 = [0, 8, 16, 24, 31];

	var colDom_cs1 = [0, 7, 8, 10, 13],
		colDom_cs2 = [0, 9, 12, 16, 20],
		colDom_cs3 = [0, 20, 24, 26, 29],
		colDom_cs4 = [0, 25, 27, 29, 32],
		colDom_cs5 = [0, 13, 18, 24, 32];

	var colDom_cspmen1 = [0, 11, 13, 16, 20],
		colDom_cspmen2 = [0, 12, 18, 22, 26],
		colDom_cspmen3 = [0, 21, 24, 27, 30],
		colDom_cspmen4 = [0, 20, 24, 28, 31],
		colDom_cspmen5 = [0, 6, 10, 13, 22];

	var colDom_occ1 = [0, 50, 54, 57, 60],
		colDom_occ2 = [0, 7, 8, 9, 11],
		colDom_occ3 = [0, 5, 6, 7, 9],
		colDom_occ4 = [0, 17, 20, 22, 25],
		colDom_occ5 = [0, 6, 7, 9, 11];

	var colDom_dep1 = [0, 7, 20, 60, 80],
		colDom_dep2 = [0, 7, 20, 60, 80],
		colDom_dep3 = [0, 7, 20, 60, 80],
		colDom_dep4 = [0, 7, 20, 60, 80],
		colDom_dep5 = [0, 7, 20, 70, 90];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 9, 12],
		colDom_act5 = [0, 3, 6, 9, 12];

	var colDom_mod3 = [0, 21, 26, 31, 39],
		colDom_mod2 = [0, 29, 46, 57, 66],
		colDom_mod1 = [0, 12, 17, 24, 32];


