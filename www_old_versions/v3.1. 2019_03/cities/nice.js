// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "NICE";

	// Nom de la ville centre
	var nomVC = "Nice";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Nice / Alpes-Maritimes - 2009, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [6.9, 43.903],
		scaleProj = 32500;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.4,
		centerZ_h = 1.35;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [22000, 10000, 2500, 100],
		datasetFlow = [17000, 8000, 2000, 100]; 

    // Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 6, 8, 10, 14],
		colDom_age2 = [0, 6, 8, 10, 13],
		colDom_age3 = [0, 41, 46, 50, 57],
		colDom_age4 = [0, 23, 28, 34, 40];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 7, 11, 14, 18],
		colDom_cleduc2 = [0, 30, 36, 41, 48],
		colDom_cleduc3 = [0, 16, 19, 23, 27],
		colDom_cleduc4 = [0, 16, 23, 28, 35];

	var colDom_educmen1 = [0, 8, 13, 17, 22],
		colDom_educmen2 = [0, 33, 38, 43, 51],
		colDom_educmen3 = [0, 16, 20, 24, 28],
		colDom_educmen4 = [0, 10, 16, 22, 28];

	var colDom_cs1 = [0, 4, 6, 7, 9],
		colDom_cs2 = [0, 9, 12, 14, 19],
		colDom_cs3 = [0, 26, 30, 35, 39],
		colDom_cs4 = [0, 23, 27, 30, 34],
		colDom_cs5 = [0, 11, 15, 18, 23];

	var colDom_cspmen1 = [0, 9, 11, 14, 17],
		colDom_cspmen2 = [0, 13, 17, 21, 27],
		colDom_cspmen3 = [0, 28, 33, 36, 41],
		colDom_cspmen4 = [0, 16, 20, 24, 28],
		colDom_cspmen5 = [0, 4, 7, 10, 13];

	var colDom_occ1 = [0, 37, 42, 47, 52],
		colDom_occ2 = [0, 3, 5, 7, 10],
		colDom_occ3 = [0, 2, 3, 4, 6],
		colDom_occ4 = [0, 28, 35, 40, 45],
		colDom_occ5 = [0, 4, 6, 7, 9];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 12, 22, 31, 41],
		colDom_mod2 = [0, 44, 59, 72, 83],
		colDom_mod1 = [0, 3, 7, 11, 15];


