// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "NIMES";

	// Nom de la ville centre
	var nomVC = "Nîmes";

	// Source des données
	var dataSource = "Source: Enquête Ménages Déplacements (EMD), Nîmes Métropole - 2015, CEREMA (prod.)";

	// Centrer la projection sur la ville centre (load.js)
	var //centerProj = [4.36, 43.84],
		centerProj = [4.36, 43.8],
		//scaleProj = 44000;
		scaleProj = 60000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [22000, 10000, 2500, 100],
		datasetFlow = [17000, 8000, 2000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 10, 12, 14, 18],
		colDom_age2 = [0, 10, 12, 15, 18],
		colDom_age3 = [0, 43, 48, 51, 55],
		colDom_age4 = [0, 18, 22, 24, 27];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 4, 7, 10, 14],
		colDom_cleduc2 = [0, 38, 42, 46, 50],
		colDom_cleduc3 = [0, 21, 25, 29, 33],
		colDom_cleduc4 = [0, 12, 16, 20, 25];

	var colDom_educmen1 = [0, 6, 10, 15, 21],
		colDom_educmen2 = [0, 43, 49, 52, 57],
		colDom_educmen3 = [0, 16, 22, 25, 30],
		colDom_educmen4 = [0, 6, 9, 12, 18];

	var colDom_cs1 = [0, 4, 6, 9, 14],
		colDom_cs2 = [0, 14, 17, 21, 26],
		colDom_cs3 = [0, 26, 30, 34, 38],
		colDom_cs4 = [0, 19, 25, 29, 32],
		colDom_cs5 = [0, 7, 10, 13, 19];

	var colDom_cspmen1 = [0, 7, 11, 18, 22],
		colDom_cspmen2 = [0, 18, 25, 29, 32],
		colDom_cspmen3 = [0, 25, 29, 34, 40],
		colDom_cspmen4 = [0, 14, 19, 22, 25],
		colDom_cspmen5 = [0, 3, 4, 5, 10];

	var colDom_occ1 = [0, 36, 40, 47, 53],
		colDom_occ2 = [0, 5, 7, 10, 12],
		colDom_occ3 = [0, 6, 9, 11, 16],
		colDom_occ4 = [0, 22, 26, 29, 32],
		colDom_occ5 = [0, 4, 6, 8, 11];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 50, 70, 80, 90],
		colDom_act2 = [0, 5, 10, 15, 20],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 13, 17, 24, 36],
		colDom_mod2 = [0, 48, 69, 79, 83],
		colDom_mod1 = [0, 2, 5, 7, 11];


