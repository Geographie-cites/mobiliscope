<?php
//phpinfo();
$language = "en";
$page = '';
$subpage = '';
$pageMeta = '';
$sectionName = '';
$pagePath = '';
$pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Home</a>";


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
    'nancy'=>'Nancy region',
    'nantes'=>'Nantes region',
    // 'nice'=>'Nice',
    'idf'=>'Paris region',
    'quimper'=>'Quimper region',
    'rennes'=>'Rennes region',
    'saint-etienne'=>'Saint-Étienne region',
    'strasbourg'=>'Strasbourg region',
    'toulouse'=>'Toulouse region',
    'valenciennes'=>'Valenciennes region'
];

 // List of pages and their titles
    $pages = [
        'about'=>'About the project',
        'methods'=>'Methods',
        'news'=>'News',
        'multitask-tool'=>'A multitask tool'
    ];

    $subpages = [
        'about'=>[
            'team'=>'Team',
            'partners'=>'Partners',
            'license'=>'License',
            #'contact'=>'Contact'
        ],
        'methods'=>[
            'data'=>'Data',
            'indicators'=>'Indicators',
            'geovizualisation'=>'Geovizualisation',
            #'help'=>'Help',
        ],
        'news'=>[
            'events'=>'Events',
            'publications'=>'Publications',
            #'web-review'=>'Web review',
        ],
        'multitask-tool'=>[
            'planning-tool'=>'A planning tool',
            'scientific-tool'=>'A scientific tool',
			#'pedagogical-tool'=>'A pedagogical tool',
            #'fun-tool'=>'A fun tool',
        ]
    ];

    // this description will be used by Google as the text under the title of the page
    // TITLE it should be max 70 char
    // META it should be max 230 char
    $pageSEO = [
        'about'=>['title'=>'Mobiliscope – To explore daytime and nighttime population in cities !','meta'=>'Cities are not static over the 24h period...Neighborhoods, social mix and urban segregation change according to people daily mobility.'],
        'team'=>['title'=>'Mobiliscope - made in Paris (France) in Géographie-cités lab','meta'=>'A web mapping platform supervised by Julie Vallée and developed by Aurélie Douet and Constance Lecomte. Also with Guillaume Le Roux and Hadrien Commenges.'],
        'partners'=>['title'=>'Mobiliscope – One research lab, three french institutional  partners','meta'=>'Developed in Géographie-cités lab (Paris, France), this spatio-temporal interface is supported by three public partners:  CNRS, CGET and Labex DynamiTe.'],
        'license'=>['title'=>'Mobiliscope - an open-source geovisualization tool ','meta'=>'A free and open-source web mapping platform licensed under the GNU GPLv3 license (a free, copyleft license). Scripts are available on Github.'],
        'methods'=>['title'=>'Mobiliscope – some methodological information','meta'=>'Daily time matters! In the Mobiliscope, city maps and graphs change over the 24h period to explore dynamically copresence between rich and poor, women and men, active and retired people etc.'],
        'data'=>['title'=>'Mobiliscope – data from origin-destination surveys','meta'=>'Using large public origin-destination surveys, the Mobiliscope expands traditional urban studies based on residential census and home-work commuting.'],
        'indicators'=>['title'=>'Mobiliscope –  crossing individual data in space and time','meta'=>'Let’s explore hourly present population in cities according to their demographic (sex, age) and social (education level, socioprofessional status) profile. Transportation mode is also available. '],
        'geovizualisation'=>['title'=>'Mobiliscope - animated maps over the 24h period ','meta'=>'Spatio-temporal interface has been developed with d3.js library. Choose a city region in France and explore change from animated maps and hourly segregation and spatial autocorrelation indices (Duncan and Moran).'],
        'news'=>['title'=>'Mobiliscope - News','meta'=>'To promote temporal approach in urban inequalities for various audience (national or local planners, scientific world, education community etc.).'],
        'events'=>['title'=>'Mobiliscope - Events','meta'=>'Regular participation in large french audience events (Fête de la science; Nuit de la Géographie ; Festival International de Géographie (FIG) ; Salon Innovativ (SHS) ; ThéoQuant ; SAGEO…).'],
        'publications'=>['title'=>'Mobiliscope – Publications','meta'=>'In relation with social and urban geography, daily mobility, spatial justice, segregation, time geography, neighborhood effects, health geography.'],
        'multitask-tool'=>['title'=>'Le Mobiliscope – a multitask tool','meta'=>'An interactive tool available for all those interested in urban and social inequalities (urban planners, scientific community, teachers, students etc.).'],
        'planning-tool'=>['title'=>'Le Mobiliscope – a planning tool ','meta'=>'Where? Which neighborhood? When? What time? These questions are frequent in urban planning. Policymakers can find some answers in the Mobiliscope using its interactive platfom.'],
        'pedagogical-tool'=>['title'=>'','meta'=>''],
        'scientific-tool'=>['title'=>'Le Mobiliscope  - a scientific tool','meta'=>'To add a daycourse of place approach in scientific literature related to urban inequalities, neighborhood or place effects, and spatial justice.'],
    ];




    if($section == "info"){
        $page = (!empty($_GET['page']) && in_array($_GET['page'], array_keys($pages) ) ) ? $_GET['page']: 'about';
        $subpage = (!empty($_GET['subpage']) && in_array($_GET['subpage'], array_keys($subpages[$page]) ) ) ? $_GET['subpage']: '';
        $sectionName = "Info";
    }

    if($section == "geoviz"){
        $page = (!empty($_GET['city']) && in_array($_GET['city'], array_keys($cities)))? $_GET['city']: 'albi';
        $sectionName = "Maps";
    }



    if(!empty($subpages[$page][$subpage])){
        $pagePath = "/".$section."/".$page."/".$subpage;
        $pageName = $subpages[$page][$subpage];
        $pageCrumbs .= "<i class='fas fa-chevron-right'></i>
                <a href='/".$language."/".$section."/".$page."'>".$pages[$page]."</a>
                <i class='fas fa-chevron-right'></i>
                <h1>".$subpages[$page][$subpage]."</h1>";
    } else if(!empty($page)) {
        $pagePath = "/".$section."/".$page;
        $pageName = !empty($pages[$page]) ? $pages[$page] : $cities[$page] ;
        $pageCrumbs .= "<i class='fas fa-chevron-right'></i><h1>".$pageName."</h1>";
    } else {
        $pagePath = "";
        $pageName = ' Cities around the clock';
        $pageCrumbs .= "";
    }

    if($section == 'home')
        $pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Home</a>";

    if($section == 'geoviz')
        $pageCrumbs = "";

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
