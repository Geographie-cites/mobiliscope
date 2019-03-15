// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "MARSEILLE";

	// Nom de la ville centre
	var nomVC = "Marseille";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Marseille / Bouches-du-Rhône - 2009, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [5.25, 43.54],
		scaleProj = 36000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.5,
		centerZ_h = 1.2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [43000, 20000, 5000, 100],
		datasetFlow = [28000, 14000, 5000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 7, 10, 13, 16],
		colDom_age2 = [0, 9, 11, 13, 16],
		colDom_age3 = [0, 45, 49, 53, 58],
		colDom_age4 = [0, 18, 22, 25, 29];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 6, 9, 12, 17],
		colDom_cleduc2 = [0, 44, 50, 55, 60],
		colDom_cleduc3 = [0, 12, 16, 19, 22],
		colDom_cleduc4 = [0, 10, 15, 20, 27];

	var colDom_educmen1 = [0, 9, 13, 17, 22],
		colDom_educmen2 = [0, 50, 54, 59, 65],
		colDom_educmen3 = [0, 9, 13, 16, 20],
		colDom_educmen4 = [0, 5, 9, 14, 19];

	var colDom_cs1 = [0, 6, 8, 10, 12],
		colDom_cs2 = [0, 9, 13, 16, 21],
		colDom_cs3 = [0, 27, 31, 34, 39],
		colDom_cs4 = [0, 20, 24, 28, 32],
		colDom_cs5 = [0, 9, 13, 18, 23];

	var colDom_cspmen1 = [0, 10, 14, 18, 23],
		colDom_cspmen2 = [0, 12, 17, 23, 28],
		colDom_cspmen3 = [0, 27, 32, 35, 40],
		colDom_cspmen4 = [0, 13, 17, 21, 27],
		colDom_cspmen5 = [0, 4, 6, 10, 14];

	var colDom_occ1 = [0, 40, 45, 48, 53],
		colDom_occ2 = [0, 4, 7, 8, 12],
		colDom_occ3 = [0, 3, 5, 6, 9],
		colDom_occ4 = [0, 23, 28, 32, 37],
		colDom_occ5 = [0, 5, 7, 9, 12];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 13, 18, 23, 30],
		colDom_mod2 = [0, 55, 69, 76, 82],
		colDom_mod1 = [0, 2, 4, 9, 16];



