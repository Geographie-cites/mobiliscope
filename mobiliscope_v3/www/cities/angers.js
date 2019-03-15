
// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "ANGERS";

	// Nom de la ville centre
	var nomVC = "Angers";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Angers / Pays Loire Angers - 2012, CEREMA (prod.), ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-0.55, 47.47],
		scaleProj = 65000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [20000, 10000, 2500, 100],
		datasetFlow = [10000, 5000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 10, 12, 14, 22],
		colDom_age2 = [0, 8, 11, 14, 17],
		colDom_age3 = [0, 45, 53, 56, 60],
		colDom_age4 = [0, 16, 18, 20, 23];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 8, 10, 12, 15],
		colDom_cleduc2 = [0, 33, 39, 44, 50],
		colDom_cleduc3 = [0, 23, 26, 29, 32],
		colDom_cleduc4 = [0, 12, 16, 22, 28];

	var colDom_educmen1 = [0, 9, 12, 16, 18],
		colDom_educmen2 = [0, 38, 43, 47, 53],
		colDom_educmen3 = [0, 19, 23, 26, 31],
		colDom_educmen4 = [0, 8, 12, 17, 23];

	var colDom_cs1 = [0, 2, 3, 4, 5],
		colDom_cs2 = [0, 11, 15, 19, 26],
		colDom_cs3 = [0, 31, 36, 40, 43],
		colDom_cs4 = [0, 18, 24, 28, 35],
		colDom_cs5 =  [0, 10, 12, 15, 20];

	var colDom_cspmen1 = [0, 2, 4, 5, 7],
		colDom_cspmen2 = [0, 15, 20, 26, 34],
		colDom_cspmen3 = [0, 32, 35, 38, 43],
		colDom_cspmen4 = [0, 15, 21, 27, 31],
		colDom_cspmen5 = [0, 4, 7, 10, 15];

	var colDom_occ1 = [0, 46, 51, 55, 60],
		colDom_occ2 = [0, 5, 8, 10, 15],
		colDom_occ3 = [0, 3, 4, 6, 8],
		colDom_occ4 =  [0, 20, 24, 26, 32],
		colDom_occ5 =   [0, 2, 3, 4, 5];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 14, 18, 23, 30],
		colDom_mod2 = [0, 60, 70, 77, 83],
		colDom_mod1 = [0, 2, 5, 7, 11];


