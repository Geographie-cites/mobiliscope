// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "ANGOULEME";

	// Nom de la ville centre
	var nomVC = "Angoulême";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Angoulême / Bassin de vie de l'Angoumois - 2012, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [0.10, 45.65],
		scaleProj = 93000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.7,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [10000, 5000, 1000, 100],
		datasetFlow =  [7500, 4000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 8, 10, 12, 18],
		colDom_age2 = [0, 10, 11, 13, 16],
		colDom_age3 = [0, 45, 50, 54, 57],
		colDom_age4 = [0, 19, 22, 25, 28];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 8, 10, 12, 14],
		colDom_cleduc2 = [0, 41, 46, 49, 52],
		colDom_cleduc3 = [0, 34, 38, 43, 49],
		colDom_cleduc4 = [0, 0.5, 1, 1.5, 2];

	var colDom_educmen1 = [0, 8, 10, 12, 13],
		colDom_educmen2 = [0, 43, 48, 51, 55],
		colDom_educmen3 = [0, 32, 36, 40, 48],
		colDom_educmen4 = [0, 0.5, 1, 1.5, 2];

	var colDom_cs1 = [0, 3, 4, 5, 7],
		colDom_cs2 = [0, 11, 13, 16, 18],
		colDom_cs3 = [0, 41, 44, 45, 48],
		colDom_cs4 = [0, 16, 18, 19, 23],
		colDom_cs5 = [0, 12, 15, 17, 20];

	var colDom_cspmen1 = [0, 3, 4, 6, 8],
		colDom_cspmen2 = [0, 12, 14, 17, 20],
		colDom_cspmen3 = [0, 41, 42, 45, 48],
		colDom_cspmen4 = [0, 16, 18, 19, 23],
		colDom_cspmen5 = [0, 11, 14, 16, 19];

	var colDom_occ1 = [0, 48, 51, 53, 56],
		colDom_occ2 = [0, 5, 8, 10, 14],
		colDom_occ3 = [0, 2, 4, 6, 9],
		colDom_occ4 = [0, 24, 27, 29, 34],
		colDom_occ5 = [0, 2, 2.5, 3.5, 5];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 11, 13, 17, 21],
		colDom_mod2 = [0, 71, 78, 83, 86],
		colDom_mod1 = [0, 2, 4, 6, 8];


