// Déclaration des variables propres à l'enquete observée

	// Déclaration du nom de l'enquete pour guider le chemin vers les données (loads.js)
	var nomED = "MONTREAL";

	// Nom de la ville centre
	var nomVC = "Montreal";

	// Source des donnés
	var dataSource = "Source: Enquête Origine Destination 2013 - Montréal, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [-74, 45.55],
		scaleProj = 25000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.45,
		centerZ_h = 1.8;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 100];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [230000, 115000, 40000, 1000],
		datasetFlow = [220000, 100000, 50000, 1000];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité(loads.js)
	var colDom_age1 = [0, 10, 12, 14, 16],
		colDom_age2 = [0, 8, 9, 11, 13],
		colDom_age3 = [0, 50, 53, 55, 58],
		colDom_age4 = [0, 17, 21, 24, 28];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 46, 50, 54, 58],
		colDom_occ2 = [0, 8, 10, 12, 14],
		colDom_occ3 = [0, 3, 4, 5, 6],
		colDom_occ4 = [0, 22, 26, 30, 34],
		colDom_occ5 = [0, 2, 3, 4, 5];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 3, 5, 6, 10],
		colDom_mod2 = [0, 70, 80, 86, 90],
		colDom_mod1 = [0, 5, 10, 15, 22];

	var colDom_rev1 = [0, 8, 10, 14, 18],
		colDom_rev2 = [0, 22, 25, 28, 31],
		colDom_rev3 = [0, 23, 26, 28, 30],
		colDom_rev4 = [0, 9, 12, 14, 20],
		colDom_rev5 = [0, 17, 18, 20, 22]; //revenu "inconnu"


