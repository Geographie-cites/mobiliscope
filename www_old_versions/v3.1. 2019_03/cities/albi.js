
    // Déclaration des variables propres à l'enquête observée

    // Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
    var nomED = "ALBI";

    // Nom de la ville centre
    var nomVC = "Albi";

    // Source des données
    var dataSource = "Source: Enquête Ménages Déplacements (EMD), Albi / Grand Albigeois - 2011, CEREMA (prod.), ADISP (distrib.)";

    // Centrer la projection sur la ville centre (load.js)
    var centerProj = [2.13, 43.897],
        scaleProj = 165000;
    // Centrer le zoom sur la ville centre (load.js)
    var centerZ_w = 1.9,
        centerZ_h = 3.1;

    // Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
    var nomCol = "001"

    // Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
    var radiusRange = [0, 400];

    // Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
    var datasetProp = [10000, 5000, 1000, 100],
        datasetFlow = [5000, 2500, 1000, 100];

    // Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

    // Déclaration des bornes de classes pour chaque modalité (loads.js)
    var colDom_age1 = [0, 8, 11, 14, 19],
        colDom_age2 = [0, 6, 7, 9, 11],
        colDom_age3 = [0, 47, 50, 53, 58],
        colDom_age4 = [0, 22, 26, 28, 31];

    var colDom_sex1 = [0, 35, 40, 50, 55],
        colDom_sex2 = [0, 45, 50, 60, 65];

    var colDom_cleduc1 = [0, 9, 10, 12, 16],
        colDom_cleduc2 = [0, 32, 36, 38, 43],
        colDom_cleduc3 = [0, 29, 31, 34, 36],
        colDom_cleduc4 = [0, 11, 16, 21, 27];

    var colDom_educmen1 = [0, 8, 10, 12, 16],
        colDom_educmen2 = [0, 34, 38, 42, 46],
        colDom_educmen3 = [0, 26, 30, 32, 35],
        colDom_educmen4 = [0, 10, 15, 19, 23];

    var colDom_cs1 = [0, 3, 4, 5, 7],
        colDom_cs2 = [0, 4, 6, 8, 10],
        colDom_cs3 = [0, 52, 55, 57, 59],
        colDom_cs4 = [0, 14, 17, 19, 22],
        colDom_cs5 = [0, 10, 13, 16, 19];

    var colDom_cspmen1 = [0, 3, 4, 5, 7],
        colDom_cspmen2 = [0, 4, 7, 8, 11],
        colDom_cspmen3 = [0, 53, 56, 58, 61],
        colDom_cspmen4 = [0, 12, 16, 17, 20],
        colDom_cspmen5 = [0, 9, 12, 15, 19];

    var colDom_occ1 = [0, 41, 45, 48, 53],
        colDom_occ2 = [0, 5, 2, 12, 15],
        colDom_occ3 = [0, 1, 2, 4, 7],
        colDom_occ4 = [0, 29, 32, 35, 38],
        colDom_occ5 = [0, 3, 5, 6, 7];

    var colDom_resarea3 = [0, 3, 10, 20, 30],
        colDom_resarea2 = [0, 3, 10, 20, 30],
        colDom_resarea1 = [0, 3, 10, 20, 30];

    var colDom_act1 = [0, 40, 55, 70, 85],
        colDom_act2 = [0, 6, 15, 30, 45],
        colDom_act3 = [0, 3, 6, 12, 18],
        colDom_act4 = [0, 3, 6, 12, 18],
        colDom_act5 = [0, 3, 6, 12, 18];

    var colDom_mod3 = [0, 12, 17, 26, 35],
        colDom_mod2 = [0, 61, 71, 78, 87],
        colDom_mod1 = [0, 1, 1.5, 2.5, 5];


