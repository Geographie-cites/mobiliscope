// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "SAGUENAY";

	// Nom de la ville centre
	var nomVC = "Saguenay";

	// Source des données
	var dataSource = "Source: Enquête Origine-Destination 2015 - Saguenay, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-71.1, 48.42],
		scaleProj = 43000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 2;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001";

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 300];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [14000, 7000, 2500, 200],
		datasetFlow = [9000, 4000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 10, 11, 13],
		colDom_age2 = [0, 8, 9, 10, 12],
		colDom_age3 = [0, 49, 51, 54, 57],
		colDom_age4 = [0, 21, 26, 28, 32];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 42, 45, 47, 51],
		colDom_occ2 = [0, 7, 8, 9, 10],
		colDom_occ3 = [0, 2, 3, 4, 5],
		colDom_occ4 = [0, 29, 34, 37, 39],
		colDom_occ5 = [0, 4, 5, 6, 7];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 2, 3, 4, 6],
		colDom_mod2 = [0, 91, 93, 95, 97],
		colDom_mod1 = [0, 1, 2, 3, 4];

	var colDom_rev1 = [0, 13, 14, 16, 19],
		colDom_rev2 = [0, 24, 27, 29, 33],
		colDom_rev3 = [0, 24, 27, 29, 31],
		colDom_rev4 = [0, 9, 11, 12, 14],
		colDom_rev5 = [0, 14, 15, 16, 18]; //revenu "inconnu"

