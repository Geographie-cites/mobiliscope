// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "STRASBOURG";

	// Nom de la ville centre
	var nomVC = "Strasbourg";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Strasbourg / Bas-Rhin - 2009, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [7.3, 48.59],
		scaleProj = 28000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.4,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [40000, 20000, 5000, 100],
		datasetFlow = [17000, 8000, 2000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 8, 11, 13, 17],
		colDom_age2 = [0, 10, 14, 17, 20],
		colDom_age3 = [0, 45, 49, 52, 56],
		colDom_age4 = [0, 16, 19, 22, 26];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 9, 13, 17, 20],
		colDom_cleduc2 = [0, 36, 43, 47, 52],
		colDom_cleduc3 = [0, 19, 23, 26, 28],
		colDom_cleduc4 = [0, 9, 12, 17, 24];

	var colDom_educmen1 = [0, 13, 18, 23, 28],
		colDom_educmen2 = [0, 40, 46, 51, 56],
		colDom_educmen3 = [0, 14, 18, 21, 26],
		colDom_educmen4 = [0, 5, 6, 10, 17];

	var colDom_cs1 = [0, 3, 5, 6, 8],
		colDom_cs2 = [0, 14, 18, 22, 28],
		colDom_cs3 = [0, 25, 28, 31, 34],
		colDom_cs4 = [0, 24, 27, 30, 33],
		colDom_cs5 = [0, 9, 12, 16, 21];

	var colDom_cspmen1 = [0, 7, 9, 11, 15],
		colDom_cspmen2 = [0, 20, 25, 31, 39],
		colDom_cspmen3 = [0, 26, 29, 32, 37],
		colDom_cspmen4 = [0, 15, 20, 24, 27],
		colDom_cspmen5 = [0, 2, 5, 8, 11];

	var colDom_occ1 = [0, 47, 50, 54, 58],
		colDom_occ2 = [0, 5, 7, 9, 12],
		colDom_occ3 = [0, 3, 4, 6, 8],
		colDom_occ4 = [0, 21, 26, 31, 36],
		colDom_occ5 = [0, 2, 4, 5, 7];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 18, 23, 27, 34],
		colDom_mod2 = [0, 49, 63, 73, 77],
		colDom_mod1 = [0, 3, 5, 9, 17];



