<?php
//phpinfo();
$language = "en";
$page = '';
$subpage = '';
$pageMeta = '';
$sectionName = '';
$pagePath = '';
$pageCrumbs = "<a href='/".$language."'>Home</a>";


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// list of cities
$cities = [
    'albi'=>'Albi region',
    'angers'=>'Angers region',
    'angouleme'=>'Angoulême region',
    'beziers'=>'Béziers region',
    'bordeaux'=>'Bordeaux region',
    'caen'=>'Caen region',
    'clermont-ferrand'=>'Clermont-Ferrand region',
    'grenoble'=>'Grenoble region',
    'la-rochelle'=>'La Rochelle region',
    'lille'=>'Lille region',
    'lyon'=>'Lyon region',
    'marseille'=>'Marseille region',
    'montpellier'=>'Montpellier region',
    'montreal' =>'Montreal region',
    'nancy'=>'Nancy region',
    'nantes'=>'Nantes region',
    'nice'=>'Nice',
	'nimes'=>'Nîmes region',
    'ottawa-gatineau' =>'Ottawa-Gatineau region',
    'idf'=>'Paris region',
    'quebec' =>'Québec region',
    'quimper'=>'Quimper region',
    'rennes'=>'Rennes region',
    'saguenay'=>'Saguenay region',
    'saint-etienne'=>'Saint-Étienne region',
    'sherbrooke'=>'Sherbrooke region',
    'strasbourg'=>'Strasbourg region',
    'toulouse'=>'Toulouse region',
    'trois-rivieres'=>'Trois-Rivières region',
    'valenciennes'=>'Valenciennes region',
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
    'bogota'=>'Bogotá region',
    'santiago'=>'Santiago region',
    'sao-paulo'=>'São Paulo region'
];

//French cities
$frenchcities = [
    'albi'=>'Albi region',
    'alencon'=>'Alençon & St-Lô region',
    'amiens'=>'Amiens region',
    'angers'=>'Angers region',
    'angouleme'=>'Angoulême region',
    'annecy'=>'Annecy region',
    'annemasse'=>'Annemasse region',
    'bayonne'=>'Bayonne region',
    'besancon'=>'Besancon region',
    'beziers'=>'Béziers region',
    'bordeaux'=>'Bordeaux region',
    'brest'=>'Brest region',
    'caen'=>'Caen region',
    'carcassonne'=>'Carcassonne region',
    'cherbourg'=>'Cherbourg region',
    'clermont-ferrand'=>'Clermont-Ferrand region',
    'creil'=>'Creil region',
    'dijon'=>'Dijon region',
    'douai'=>'Douai region',
    'dunkerque'=>'Dunkerque region',
    'grenoble'=>'Grenoble region',
    'la-reunion'=>'La Réunion',
    'la-rochelle'=>'La Rochelle region',
    'le-havre'=>'Le Havre region',
    'lille'=>'Lille region',
    'longwy'=>'Longwy region',
    'lyon'=>'Lyon region',
    'marseille'=>'Marseille region',
    'martinique'=>'Martinique',
    'metz'=>'Metz region',
    'montpellier'=>'Montpellier region',
    'nancy'=>'Nancy region',
    'nantes'=>'Nantes region',
    'nice'=>'Nice region',
	'nimes'=>'Nîmes region',
    'niort'=>'Niort region',
    'idf'=>'Paris region',
    'poitiers'=>'Poitiers region',
    'quimper'=>'Quimper region',
    'rennes'=>'Rennes region',
    'rouen'=>'Rouen region',
    'saint-brieuc'=>'Saint-Brieuc region',
    'saint-etienne'=>'Saint-Étienne region',
    'strasbourg'=>'Strasbourg region',
    'thionville'=>'Thionville region',
    'toulouse'=>'Toulouse region',
    'tours'=>'Tours region',
    'valence'=>'Valence region',
    'valenciennes'=>'Valenciennes region',
];

//Canadian cities
$cancities = [
    'montreal' =>'Montreal region',
    'ottawa-gatineau' =>'Ottawa-Gatineau region',
    'quebec' =>'Québec region',
    'saguenay'=>'Saguenay region',
    'sherbrooke'=>'Sherbrooke region',
    'trois-rivieres'=>'Trois-Rivières region'
];

//Villes sud-américaines
$ascities = [
    'bogota'=>'Bogotá region',
    'santiago'=>'Santiago region',
    'sao-paulo'=>'São Paulo region'
];

 // List of pages and their titles
    $pages = [
        'about'=>'About',
        'methods'=>'Methods',
        'multitask-tool'=>'A multitask tool',
        'open'=>'An open and evolving tool',
    ];

    $subpages = [
        'about'=>[
            'summary'=>'In summary',
            'team'=>'Team',
            'partners'=>'Partners',
            'publications'=>'Papers and communications',
        ],

        'methods'=>[
            'data'=>'Data',
            'indicators'=>'Indicators',
            'geovizualisation'=>'Geovizualisation',
        ],

        'multitask-tool'=>[
            'planning-tool'=>'A planning tool',
            'scientific-tool'=>'A scientific tool',
			'pedagogical-tool'=>'A pedagogical tool',
        ],

        'open'=>[
            'license'=>'Open-source and open-data',
            'evolution'=>'Version history',
        ]
    ];

    // this description will be used by Google as the text under the title of the page
    // TITLE it should be max 70 char with keywords
    // META it should be max 230 char with human readable text
    $pageSEO = [
        //'about'=>['title'=>'Mobiliscope – To explore daytime and nighttime population in cities !','meta'=>'Cities are not static over the 24h period...Neighborhoods, social mix and urban segregation change according to people daily mobility.'],
        'summary'=>['title'=>'Mobiliscope – To explore daytime and nighttime population in cities !','meta'=>'Cities are not static over the 24h period... Neighborhoods, social mix and urban segregation change according to people\'s daily mobility and their everyday geography.'],
        'team'=>['title'=>'Mobiliscope – made in Paris (France) in Géographie-cités lab','meta'=>'A web mapping platform supervised by Julie Vallée and developed by Aurélie Douet and Constance Lecomte. Also with Guillaume Le Roux, Hadrien Commenges and Elisa Villard.'],
        'partners'=>['title'=>'Mobiliscope – One public research lab, several institutional partners','meta'=>'Developed in Géographie-cités lab (Paris, France), the spatio-temporal interface is supported by public partners:  CNRS, ANCT, Cerema and Labex DynamiTe.'],
        'publications'=>['title'=>'Mobiliscope – Papers and communications','meta'=>'Various audience (national or local planners, scientific world, education community etc.) may be interested in relation with social and urban geography, daily mobility, spatial justice, segregation, time geography, neighborhood effects, health geography.'],
       
        //'methods'=>['title'=>'Mobiliscope – some methodological information','meta'=>'Daily time matters! In the Mobiliscope, city maps and graphs change over the 24h period to explore dynamically copresence between rich and poor, women and men, active and retired people etc.'],
        'data'=>['title'=>'Mobiliscope – data from origin-destination surveys','meta'=>'Using large public origin-destination surveys, the Mobiliscope expands traditional urban studies based on residential census and home-work commuting.'],
        'indicators'=>['title'=>'Mobiliscope –  crossing individual data in space and time','meta'=>'Let’s explore hourly present population in cities according to their demographic (sex, age) and social (education level, socioprofessional status) profile. Transportation mode is also available. '],
        'geovizualisation'=>['title'=>'Mobiliscope - animated maps over the 24h period ','meta'=>'Spatio-temporal interface has been developed with d3.js library. Choose a city region in France and explore change from animated maps and hourly segregation and spatial autocorrelation indices (Duncan and Moran).'],
       
        //'news'=>['title'=>'Mobiliscope - News','meta'=>'To promote temporal approach in urban inequalities for various audience (national or local planners, scientific world, education community etc.).'],
        //'events'=>['title'=>'Mobiliscope - Events','meta'=>'Regular participation in large french audience events (Fête de la science; Nuit de la Géographie ; Festival International de Géographie (FIG) ; Salon Innovativ (SHS) ; ThéoQuant ; SAGEO…).'],
       
        // 'multitask-tool'=>['title'=>'Le Mobiliscope – a multitask tool','meta'=>'An interactive tool available for all those interested in urban and social inequalities (urban planners, scientific community, teachers, students etc.).'],
        'planning-tool'=>['title'=>'Mobiliscope – a planning tool ','meta'=>'Where? ? When? Who ? How ? To do what ? These questions are frequent in urban planning. Policymakers can find some answers in the Mobiliscope using interactive platfom.'],
        'pedagogical-tool'=>['title'=>'Mobiliscope - a pedagogical tool','meta'=>'In elementary, middle or high schools let the students discover mobilities in urban areas and have fun.'],
        'scientific-tool'=>['title'=>'Mobiliscope – a scientific tool','meta'=>'To add a daycourse of place approach in scientific literature related to urban inequalities, neighborhood or place effects, and spatial justice.'],
        
        'license'=>['title' => 'Mobiliscope – open-source and open-data', 'meta'=> 'In the spirit of open science and FAIR principles. Open-data under ODbL licence. Developed with open source technologies (javascript, D3.js) and accesible under free and copyleft licence (AGPL) through a Github public repository.'],
        'evolution'=>['title'=>'Mobiliscope - an evolving platform','meta'=>'A open platform constantly evolving since it was first launched in 2017. New cities and features are regularly added.'],
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

    if($section == "home"){
        $pagePath =  "/";
        $pageName = ' Cities around the clock';
        $pageCrumbs .= "";
        $pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Home</a>";
    }



    $pageSEODefaut = [
        'title'=>'Mobiliscope - ' . $pageName . '',
        'meta'=> $pageName . ' - Mobiliscope, a free and open-source web mapping platform for the interactive exploration of neighborhood social composition and segregation around the clock in urban areas !'
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
