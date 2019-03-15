// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "SAINT ETIENNE";

	// Nom de la ville centre
	var nomVC = "Saint-Étienne";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Saint-Etienne / Bassin de vie stéphanois - 2010, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [4.2, 45.365],
		scaleProj = 37000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.6,
		centerZ_h = 2.4;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [25000, 15000, 5000, 100],
		datasetFlow = [14000, 7000, 2000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 8, 10, 12, 14],
		colDom_age2 = [0, 9, 11, 13, 15],
		colDom_age3 = [0, 45, 50, 55, 58],
		colDom_age4 = [0, 19, 23, 26, 30];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 7, 10, 12, 15],
		colDom_cleduc2 = [0, 48, 52, 56, 59],
		colDom_cleduc3 = [0, 19, 22, 25, 28],
		colDom_cleduc4 = [0, 8, 10, 12, 16];

	var colDom_educmen1 = [0, 9, 12, 15, 20],
		colDom_educmen2 = [0, 55, 59, 63, 67],
		colDom_educmen3 = [0, 14, 17, 19, 23],
		colDom_educmen4 = [0, 3, 4, 6, 9];

	var colDom_cs1 = [0, 3, 4, 6, 8],
		colDom_cs2 = [0, 20, 24, 29, 34],
		colDom_cs3 = [0, 23, 26, 29, 32],
		colDom_cs4 = [0, 24, 28, 33, 38],
		colDom_cs5 = [0, 5, 8, 10, 12];

	var colDom_cspmen1 = [0, 5, 8, 11, 15],
		colDom_cspmen2 = [0, 31, 35, 40, 45],
		colDom_cspmen3 = [0, 21, 24, 28, 31],
		colDom_cspmen4 = [0, 15, 20, 24, 29],
		colDom_cspmen5 = [0, 2, 3, 4, 6];

	var colDom_occ1 = [0, 40, 46, 50, 54],
		colDom_occ2 = [0, 5, 6, 8, 11],
		colDom_occ3 = [0, 3, 4, 6, 8],
		colDom_occ4 = [0, 27, 31, 34, 37],
		colDom_occ5 = [0, 4, 5, 7, 9];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 14, 19, 23, 31],
		colDom_mod2 = [0, 57, 71, 77, 83],
		colDom_mod1 = [0, 1, 3, 6, 13];



