// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "QUIMPER";

	// Nom de la ville centre
	var nomVC = "Quimper";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Quimper / Cornouaille - 2013, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-4.06, 48],
		scaleProj = 45000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2.2,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [18000, 9000, 2000, 100],
		datasetFlow = [12000, 6000, 2500, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 6, 8, 9, 12],
		colDom_age2 = [0, 5, 8, 10, 12],
		colDom_age3 = [0, 50, 53, 57, 60],
		colDom_age4 = [0, 21, 25, 28, 32];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 8, 11, 12, 14],
		colDom_cleduc2 = [0, 45, 52, 55, 57],
		colDom_cleduc3 = [0, 28, 33, 37, 45],
		colDom_cleduc4 = [0, 0.5, 1, 1.5, 2.5];

	var colDom_educmen1 = [0, 9, 11, 13, 15],
		colDom_educmen2 = [0, 48, 54, 57, 60],
		colDom_educmen3 = [0, 24, 30, 35, 41],
		colDom_educmen4 = [0, 0.5, 1, 1.5, 2.5];

	var colDom_cs1 = [0, 1, 3, 4, 5],
		colDom_cs2 = [0, 11, 14, 19, 21],
		colDom_cs3 = [0, 35, 39, 42, 45],
		colDom_cs4 = [0, 21, 24, 28, 34],
		colDom_cs5 = [0, 8, 11, 13, 18];

	var colDom_cspmen1 = [0, 2, 3, 4, 6],
		colDom_cspmen2 = [0, 12, 16, 21, 25],
		colDom_cspmen3 = [0, 35, 39, 42, 45],
		colDom_cspmen4 = [0, 20, 23, 27, 30],
		colDom_cspmen5 = [0, 7, 10, 12, 16];

	var colDom_occ1 = [0, 44, 49, 53, 57],
		colDom_occ2 = [0, 4, 5, 7, 10],
		colDom_occ3 = [0, 2, 3, 4, 6],
		colDom_occ4 = [0, 28, 31, 36, 42],
		colDom_occ5 = [0, 1, 3, 4, 5];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 12, 15, 18, 23],
		colDom_mod2 = [0, 74, 79, 83, 86],
		colDom_mod1 = [0, 1, 2, 3, 5];


