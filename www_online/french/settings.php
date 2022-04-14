<?php
//phpinfo();
$language = "fr";
$page = '';
$subpage = '';
$pageMeta = '';
$sectionName = '';
$pagePath = '';
$pageCrumbs = "<a href='/".$language."'>Accueil</a>";


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// list of cities
$cities = [
    'albi'=>'Albi et sa région',
    'angers'=>'Angers et sa région',
    'angouleme'=>'Angoulême et sa région',
    'beziers'=>'Béziers et sa région',
    'bordeaux'=>'Bordeaux et sa région',
    'caen'=>'Caen et sa région',
    'clermont-ferrand'=>'Clermont-Ferrand et sa région',
    'grenoble'=>'Grenoble et sa région',
    'la-rochelle'=>'La Rochelle et sa région',
    'lille'=>'Lille et sa région',
    'lyon'=>'Lyon et sa région',
    'marseille'=>'Marseille et sa région',
    'montpellier'=>'Montpellier et sa région',
    'montreal'=>'Montréal et sa région',
    'nancy'=>'Nancy et sa région',
    'nantes'=>'Nantes et sa région',
	'nimes'=>'Nîmes et sa région',
    'nice'=>'Nice',
    'ottawa-gatineau'=>'Ottawa-Gatineau et sa région',
    'idf'=>'Paris et sa région',
    'quebec'=>'Québec et sa région',
    'quimper'=>'Quimper et sa région',
    'rennes'=>'Rennes et sa région',
    'saguenay'=>'Saguenay et sa région',
    'saint-etienne'=>'Saint-Étienne et sa région',
    'sherbrooke'=>'Sherbrooke et sa région',
    'strasbourg'=>'Strasbourg et sa région',
    'toulouse'=>'Toulouse et sa région',
    'trois-rivieres'=>'Trois-Rivières et sa région',
    'valenciennes'=>'Valenciennes et sa région',
    'alencon'=>'Alençon',
    'amiens'=>'Amiens',
    'annecy'=>'Annecy',
    'annemasse'=>'Annemasse',
    'bayonne'=>'Bayonne',
    'besancon'=>'Besancon',
    'brest'=>'Brest',
    'carcassonne'=>'Carcassonne',
    'cherbourg'=>'Cherbourg',
    'creil'=>'Creil',
    'dijon'=>'Dijon',
    'douai'=>'Douai',
    'dunkerque'=>'Dunkerque',
    'la-reunion'=>'La Réunion',
    'longwy'=>'Longwy',
    'martinique'=>'Martinique',
    'metz'=>'Metz',
    'niort'=>'Niort',
    'poitiers'=>'Poitiers',
    'rouen'=>'Rouen',
    'saint-brieuc'=>'Saint-Brieuc',
    'thionville'=>'Thionville',
    'tours'=>'Tours',
    'valence'=>'Valence',
    'le-havre'=>'Le Havre',
    'valenciennes2011'=>'Valenciennes et sa région',
    'bogota'=>'Bogotá',
    'santiago'=>'Santiago',
    'sao-paulo'=>'São Paulo'
];


//Villes françaises
$frenchcities = [
    'albi'=>'Albi et sa région',
    'alencon'=>'Alençon St-Lô et la région',
    'amiens'=>'Amiens et sa région',
    'angers'=>'Angers et sa région',
    'angouleme'=>'Angoulême et sa région',
    'annecy'=>'Annecy et sa région',
    'annemasse'=>'Annemasse et sa région',
    'bayonne'=>'Bayonne et sa région',
    'besancon'=>'Besancon et sa région',
    'beziers'=>'Béziers et sa région',
    'bordeaux'=>'Bordeaux et sa région',
    'brest'=>'Brest et sa région',
    'caen'=>'Caen et sa région',
    'carcassonne'=>'Carcassonne et sa région',
    'cherbourg'=>'Cherbourg et sa région',
    'clermont-ferrand'=>'Clermont-Ferrand et sa région',
    'creil'=>'Creil et sa région',
    'dijon'=>'Dijon et sa région',
    'douai'=>'Douai et sa région',
    'dunkerque'=>'Dunkerque et sa région',
    'grenoble'=>'Grenoble et sa région',
    'la-reunion'=>'La Réunion',
    'la-rochelle'=>'La Rochelle et sa région',
    'le-havre'=>'Le Havre et sa région',
    'lille'=>'Lille et sa région',
    'longwy'=>'Longwy et sa région',
    'lyon'=>'Lyon et sa région',
    'marseille'=>'Marseille et sa région',
    'martinique'=>'Martinique',
    'metz'=>'Metz et sa région',
    'montpellier'=>'Montpellier et sa région',
    'nancy'=>'Nancy et sa région',
    'nantes'=>'Nantes et sa région',
    'nice'=>'Nice et sa région',
    'nimes'=>'Nîmes et sa région',
    'niort'=>'Niort et sa région',
    'idf'=>'Paris et sa région',
    'poitiers'=>'Poitiers et sa région',
    'quimper'=>'Quimper et sa région',
    'rennes'=>'Rennes et sa région',
    'rouen'=>'Rouen et sa région',
    'saint-brieuc'=>'Saint-Brieuc et sa région',
    'saint-etienne'=>'Saint-Étienne et sa région',
    'strasbourg'=>'Strasbourg et sa région',
    'thionville'=>'Thionville et sa région',
    'toulouse'=>'Toulouse et sa région',
    'tours'=>'Tours et sa région',
    'valence'=>'Valence et sa région',
    'valenciennes'=>'Valenciennes et sa région',
];

//Villes canadiennes
$cancities = [
    'montreal'=>'Montréal et sa région',
    'ottawa-gatineau'=>'Ottawa-Gatineau et sa région',
    'quebec'=>'Québec et sa région',
    'saguenay'=>'Saguenay et sa région',
    'sherbrooke'=>'Sherbrooke et sa région',
    'trois-rivieres'=>'Trois-Rivières et sa région'
];

//Villes sud-américaines
$ascities = [
    'bogota'=>'Bogotá et sa région',
    'santiago'=>'Santiago et sa région',
    'sao-paulo'=>'São Paulo et sa région'
];

 // List of pages and their titles
    $pages = [
        'about'=>'A propos',
        'methods'=>'Méthodes',
        'multitask-tool'=>'Un outil multifonction',
        'open' => "Un outil libre en évolution"
    ];

    $subpages = [
        'about'=>[
            'summary'=>'En quelques mots...',
            'team'=>'Équipe',
            'partners'=>'Partenaires',
			'publications'=>'Articles et communications',

        ],
        'methods'=>[
            'data'=>'Données',
            'indicators'=>'Indicateurs',
            'geovizualisation'=>'Géovisualisation',

        ],
        'multitask-tool'=>[
            'planning-tool'=>'Un outil d\'aménagement',
            'scientific-tool'=>'Un outil de recherche',
			'pedagogical-tool'=>'Un outil pédagogique',

        ],
        'open'=>[
            'license'=>'Codes, données et visuels libres',
            'evolution'=>'Historique des versions',
        ]

    ];

    // this description will be used by Google as the text under the title of the page
    // TITLE it should be max 70 char
    // META it should be max 230 char

      $pageSEO = [
      	//'about'=>['title'=>'Le Mobiliscope pour explorer la population des villes le jour et la nuit !','meta'=>'Les villes changent... Selon les heures et la mobilité quotidienne des populations, ce sont les quartiers de villes qui changent au fil des heures, mais aussi la mixité sociale et la ségrégation urbaine.'],
        'summary'=>['title'=>'Le Mobiliscope pour explorer la population des villes le jour et la nuit !','meta'=>'La mobilité quotidienne des populations occasionne des évolutions dans la compostion sociale des quartiers et dans la ségrégation des villes au cours des 24 heures de la journée. '],
		'team'=>['title'=>'Le Mobiliscope – un outil développé au laboratoire Géographie-cités','meta'=>'Un outil de géovisualisation sous la responsabilité de Julie Vallée et développé par Aurélie Douet et Constance Lecomte. Avec la participation de Guillaume Le Roux, Hadrien Commenges et Elisa Villard'],
        'partners'=>['title'=>'Le Mobiliscope – un labo de recherche, plusieurs partenaires','meta'=>'Développé dans le laboratoire Géographie-cités, le Mobiliscope est soutenu par le CNRS, l\'ANCT, le Cerema et le Labex DynamiTe.'],
        'publications'=>['title'=>'Articles et communications autour du Mobiliscope','meta'=>'En lien avec la géographie sociale, la géographie urbaine, la ‘time-geography’, la géomatique, la géovisualisation et la géographie de la santé.'],
        
        //'methods'=>['title'=>'Les méthodes du Mobiliscope','meta'=>'Une interface interactive pour explorer la coprésence des riches et des pauvres, des femmes et des hommes, des actifs et des retraités etc. au cours des 24 heures de la journée'],
        'data'=>['title'=>'Les données du Mobiliscope','meta'=>'Avec les enquêtes ménages déplacements (EMD, EDVM, EGT, EDGT, EMC²) du CEREMA (ex CERTU), le Mobiliscope enrichit les études urbaines traditionnellement basées sur les recensements de populations et les navettes domicile-travail.'],
        'indicators'=>['title'=>'Le Mobiliscope – quantifier et qualifier les populations présentes','meta'=>'Des cartes heure par heure des villes selon le profil démographique (sexe et âge) et social (niveau d\'éducation, catégorie socioprofessionnelle CSP) des individus, leur mode de transport (marche, vélo, transport en commun, voiture) etc.'],
        'geovizualisation'=>['title'=>'Des cartes animées des villes françaises - le Mobiliscope','meta'=>'L’interface a été développée avec la librairie d3.js. Elle propose des cartes animées (choroplèthes, en cercles proportionnels, en oursins) et des indices de ségrégation (Duncan) et d’autocorrélation spatiale (Moran) calculés heure par heure.'],
        
        //'news'=>['title'=>'Valorisation du Mobiliscope','meta'=>'Promouvoir une vision temporelle des villes auprès du grand public, des acteurs de l’aménagement, de la communauté scientifique et de la communauté pédagogique.'],
        //'events'=>['title'=>'Les événements du Mobiliscope','meta'=>'Fête de la science; Nuit de la Géographie ; Festival International de Géographie (FIG) ; Salon Innovativ SHS du CNRS ; ThéoQuant ; SAGEO ; Les mardis de Tempo territorial'],
        
        //'multitask-tool'=>['title'=>'Le Mobiliscope – un outil multifonction','meta'=>'Un outil spatio-temporel sur la ville pour  les acteurs de l’aménagement, la communauté scientifique, les enseignants, les élèves et le grand public.'],
        'planning-tool'=>['title'=>'Le Mobiliscope - un appui aux diagnostics territoriaux ','meta'=>'Comment agir "au bon endroit et au bon moment" ? Une réflexion à mener en lien avec les politiques temporelles (bureaux des temps), les pulsations urbaines, l’approche chronotopique etc.'],
        'pedagogical-tool'=>['title'=>'Le Mobiliscope - un outil pédagogique','meta'=>'A disposition des enseignants d\'histoire-géo pour faire découvrir la ville et ses divisions socio-spatiales à l\'école primaire, au collège, au lycée et à l\'université.'],
        'scientific-tool'=>['title'=>'Le Mobiliscope - un outil scientifique','meta'=>'Pour explorer les effets de lieu au quotidien. Pour sortir d\'une approche statique de la justice spatiale.'],
        

        'license'=>['title' => 'Le Mobiliscope - un outil avec du code, des données et des visuels libres','meta'=>'Dans l\'esprit d\'une science ouverte respectueuse des principes FAIR avec des données en open-data (licence ODbL). Des scripts sous licences AGPL sur un dépôt public Github, développés avec des technologies libres et open source (javascript, libraire D3.js)'],
        'evolution'=>['title'=>'Le Mobiliscope - un outil en constante évolution','meta'=>'Un outil en constante évolution depuis sa première mise en ligne en 2017. Des nouvelles villes et fonctionnalités sont régulièrement ajoutées.'],
    ];


    if($section == "info"){
        $page = (!empty($_GET['page']) && in_array($_GET['page'], array_keys($pages) ) ) ? $_GET['page']: 'about';
        $subpage = (!empty($_GET['subpage']) && in_array($_GET['subpage'], array_keys($subpages[$page]) ) ) ? $_GET['subpage']: '';
        $sectionName = "Info";
        $pagePath = "/".$section."/".$page."/".$subpage;
        $pageName = $subpages[$page][$subpage];
        $pageCrumbs .= "<i class='fas fa-chevron-right'></i>
                <span class=\"cur-bc-page\">".$pages[$page]."</span>
                <i class='fas fa-chevron-right'></i>
                <h1 class=\"cur-bc-subpage\">".$subpages[$page][$subpage]."</h1>";
    }

    if($section == "geoviz"){
        $page = (!empty($_GET['city']) && in_array($_GET['city'], array_keys($cities)))? $_GET['city']: 'albi';
        $sectionName = "Maps";
        $pagePath = "/".$section."/".$page;
        $pageName = !empty($pages[$page]) ? $pages[$page] : $cities[$page] ;
        $pageCrumbs = "";
    }



    if($section == 'home'){
        $pagePath = "";
        $pageName = ' La ville à toute heure';
        $pageCrumbs .= "";
        $pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Accueil</a>";
    }

    if($section == 'geoviz')
        $pageCrumbs = "";


    $pageSEODefaut = [
        'title'=>'Mobiliscope - ' .  $pageName . '',
        'meta'=> $pageName ." - le Mobiliscope, un outil cartographique interactif pour explorer la population présente, la composition sociale des quartiers et la ségrégation des villes au cours des 24 heures de la journée!",
    ];


    $titleSEO = ( !empty($subpage) && !empty($pageSEO[$subpage]) ) ? $pageSEO[$subpage]['title'] : ( !empty($pageSEO[$page]) ? $pageSEO[$page]['title'] : $pageSEODefaut['title'] ) ;
    $metaSEO  = ( !empty($subpage) && !empty($pageSEO[$subpage]) ) ? $pageSEO[$subpage]['meta']  : ( !empty($pageSEO[$page]) ? $pageSEO[$page]['meta'] :  $pageSEODefaut['meta'] );
    $pageTitle = !empty( $titleSEO ) ?  $titleSEO : $pageSEODefaut['title'];
    $pageMeta = !empty( $metaSEO ) ? $metaSEO : $pageSEODefaut['meta'];

    $curPage =  [
        'pagePath' => "/".$language.$pagePath,
        'pagePathNoLang' => $pagePath,
        'pageName' => $pageName,
        'pageCrumbs' => $pageCrumbs,
        'pageTitle' => $pageTitle,
        'pageMeta' => $pageMeta,
    ];


    //var_dump($curPage);
?>
