// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "SHERBROOKE";

	// Nom de la ville centre
	var nomVC = "Sherbrooke";
  
	// Source des données
	var dataSource = "Source: Enquête Origine-Destination 2012 - Sherbrooke, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-72, 45.35],
		scaleProj = 45000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2.4;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [15000, 8000, 3000, 100],
		datasetFlow = [8000, 4000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 10, 13, 16, 22],
		colDom_age2 = [0, 11, 12, 13, 15],
		colDom_age3 = [0, 40, 50, 53, 56],
		colDom_age4 = [0, 15, 20, 23, 27];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 39, 46, 52, 58],
		colDom_occ2 = [0, 8, 10, 15, 23],
		colDom_occ3 = [0, 1, 2, 3, 4],
		colDom_occ4 = [0, 22, 25, 29, 35],
		colDom_occ5 = [0, 4, 5, 6, 7];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 2, 3, 7, 11],
		colDom_mod2 = [0, 80, 88, 92, 95],
		colDom_mod1 = [0, 2, 4, 7, 10];
		
	var colDom_rev1 = [0, 12, 14, 20, 26],
		colDom_rev2 = [0, 21, 27, 29, 32],
		colDom_rev3 = [0, 16, 20, 22, 26],
		colDom_rev4 = [0, 4, 6, 9, 12],
		colDom_rev5 = [0, 20, 22, 25, 28]; //revenu "inconnu"



