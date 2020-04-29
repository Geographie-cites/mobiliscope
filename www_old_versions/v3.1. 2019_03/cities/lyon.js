// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "LYON";

	// Nom de la ville centre
	var nomVC = "Lyon";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Lyon / Aire métropolitaine lyonnaise - 2015, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [4.82, 45.79],
		scaleProj = 28000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 1.9;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [35000, 20000, 5000, 100],
		datasetFlow = [30000, 15000, 5000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 10, 13, 15, 19],
		colDom_age2 = [0, 11, 14, 17, 20],
		colDom_age3 = [0, 43, 48, 52, 57],
		colDom_age4 = [0, 15, 18, 21, 24];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 4, 6, 8, 11],
		colDom_cleduc2 = [0, 26, 33, 39, 45],
		colDom_cleduc3 = [0, 26, 29, 32, 35],
		colDom_cleduc4 = [0, 15, 20, 27, 37];

	var colDom_educmen1 = [0, 5, 7, 10, 14],
		colDom_educmen2 = [0, 30, 38, 43, 50],
		colDom_educmen3 = [0, 25, 29, 32, 36],
		colDom_educmen4 = [0, 11, 15, 21, 29];

	var colDom_cs1 = [0, 2, 3, 4, 7],
		colDom_cs2 = [0, 8, 12, 16, 22],
		colDom_cs3 = [0, 25, 30, 36, 48],
		colDom_cs4 = [0, 18, 22, 26, 31],
		colDom_cs5 = [0, 12, 17, 23, 29];

	var colDom_cspmen1 = [0, 3, 5, 8, 12],
		colDom_cspmen2 = [0, 10, 15, 20, 30],
		colDom_cspmen3 = [0, 26, 30, 37, 50],
		colDom_cspmen4 = [0, 15, 19, 23, 28],
		colDom_cspmen5 = [0, 8, 11, 15, 22];

	var colDom_occ1 = [0, 46, 51, 55, 60],
		colDom_occ2 = [0, 5, 8, 11, 16],
		colDom_occ3 = [0, 3, 5, 7, 10],
		colDom_occ4 = [0, 19, 23, 26, 30],
		colDom_occ5 = [0, 2, 3, 5, 7];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 14, 19, 25, 34],
		colDom_mod2 = [0, 36, 62, 71, 78],
		colDom_mod1 = [0, 4, 9, 17, 28];



