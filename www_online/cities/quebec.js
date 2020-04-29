// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "QUEBEC";

	// Nom de la ville centre
	var nomVC = "Québec";

	// Source des données
	var dataSource = "Source: Enquête Origine-Destination 2011 - Québec, Ministère des transports du Québec";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [- 71.4, 46.88],
		scaleProj = 35000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.8,
		centerZ_h = 1.6;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "001"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 200];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [30000, 15000, 5000, 100],
		datasetFlow = [26000, 13000, 4000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [500, 1000];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 9, 13, 14, 15],
		colDom_age2 = [0, 10, 12, 13, 16],
		colDom_age3 = [0, 50, 54, 57, 60],
		colDom_age4 = [0, 13, 18, 21, 26];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_occ1 = [0, 47, 53, 57, 63],
		colDom_occ2 = [0, 7, 9, 11, 13],
		colDom_occ3 = [0, 1, 2, 3, 4],
		colDom_occ4 = [0, 21, 26, 31, 36],
		colDom_occ5 = [0, 3, 4, 5, 6];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 2, 4, 6, 10],
		colDom_mod2 = [0, 78, 85, 90, 94],
		colDom_mod1 = [0, 4, 6, 10, 13];

	var colDom_rev1 = [0, 7, 10, 12, 16],
		colDom_rev2 = [0, 22, 25, 27, 30],
		colDom_rev3 = [0, 22, 25, 28, 30],
		colDom_rev4 = [0, 7, 9, 11, 15],
		colDom_rev5 = [0, 22, 24, 25, 28]; //revenu "inconnu"



