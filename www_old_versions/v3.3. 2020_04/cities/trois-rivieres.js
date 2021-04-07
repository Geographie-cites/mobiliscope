// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "TROIS RIVIERES";

	// Nom de la ville centre
	var nomVC = "Trois-Rivières";

	// Source des données
	var dataSource = "Source: Enquête Origine-Destination 2011 - Trois-Rivières, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [- 72.65, 46.37],
		scaleProj = 50000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 2,
		centerZ_h = 1.8;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [15000, 8000, 3000, 100],
		datasetFlow = [8000, 4000, 1000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 11, 13, 14],
		colDom_age2 = [0, 9, 10, 11, 12],
		colDom_age3 = [0, 49, 53, 57, 59],
		colDom_age4 = [0, 18, 21, 25, 30];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 41, 46, 49, 53],
		colDom_occ2 = [0, 7, 9, 10, 12],
		colDom_occ3 = [0, 2, 3, 4, 5],
		colDom_occ4 = [0, 26, 30, 34, 38],
		colDom_occ5 = [0, 5, 6, 7, 8];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 3, 5, 7, 9],
		colDom_mod2 = [0, 86, 91, 93, 96],
		colDom_mod1 = [0, 1, 2, 3, 5];

	var colDom_rev1 = [0, 17, 21, 23, 27],
		colDom_rev2 = [0, 26, 29, 31, 35],
		colDom_rev3 = [0, 16, 19, 22, 25],
		colDom_rev4 = [0, 4, 5, 7, 9],
		colDom_rev5 = [0, 18, 19, 20, 21]; //revenu "inconnu"



