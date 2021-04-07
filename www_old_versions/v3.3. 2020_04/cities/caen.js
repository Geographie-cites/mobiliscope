// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "CAEN";
	
	// Nom de la ville centre
	var nomVC = "Caen";
	
	// Source des données
	var dataSource = "Source: Enquête Déplacements Grand Territoire (EDGT) 2011 - Caen / Calvados, CEREMA (prod.) - ADISP (distrib.)";
	
	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-0.5, 49.05],
		scaleProj = 32000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.7,
		centerZ_h = 3.1;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];
	
	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [26000, 15000, 5000, 100],
		datasetFlow = [21000, 10000, 3000, 100]; 

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000]; 
	
	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 7, 11, 13, 17],
		colDom_age2 = [0, 8, 11, 14, 19],
		colDom_age3 = [0, 45, 51, 56, 59],
		colDom_age4 = [0, 16, 19, 22, 27];
		
	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];
		
	var colDom_cleduc1 = [0, 8, 15, 25, 31],
		colDom_cleduc2 = [0, 29, 33, 36, 46],
		colDom_cleduc3 = [0, 17, 21, 25, 29],
		colDom_cleduc4 = [0, 12, 16, 21, 27];
		
	var colDom_educmen1 = [0, 12, 19, 25, 32],
		colDom_educmen2 = [0, 32, 36, 40, 49],
		colDom_educmen3 = [0, 15, 20, 23, 27],
		colDom_educmen4 = [0, 10, 14, 18, 23];
		
	var colDom_cs1 = [0, 3, 4, 5, 6],
		colDom_cs2 = [0, 9, 11, 14, 20],
		colDom_cs3 = [0, 33, 40, 45, 51],
		colDom_cs4 = [0, 19, 23, 27, 32],
		colDom_cs5 = [0, 8, 11, 14, 20];
		
	var colDom_cspmen1 = [0, 3, 5, 7, 9],
		colDom_cspmen2 = [0, 10, 13, 17, 26],
		colDom_cspmen3 = [0, 33, 39, 46, 52],
		colDom_cspmen4 = [0, 15, 20, 25, 29],
		colDom_cspmen5 = [0, 6, 8, 12, 15];
		
	var colDom_occ1 = [0, 44, 49, 52, 57],
		colDom_occ2 = [0, 5, 8, 10, 14],
		colDom_occ3 = [0, 3, 4, 6, 7],
		colDom_occ4 = [0, 22, 26, 31, 35],
		colDom_occ5 = [0, 3, 4, 5, 7];
		
	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];
		
	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];
		
	var colDom_mod3 = [0, 16, 20, 24, 32],
		colDom_mod2 = [0, 60, 70, 76, 80],
		colDom_mod1 = [0, 1, 4, 7, 11];


