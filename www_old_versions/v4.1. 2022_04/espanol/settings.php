<?php
//phpinfo();
$language = "es";
$page = '';
$subpage = '';
$pageMeta = '';
$sectionName = '';
$pagePath = '';
$pageCrumbs = "<a href='/".$language."'>Inicio</a>";


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// list of cities
$cities = [
    'albi'=>'Albi y su región',
    'angers'=>'Angers y su región',
    'angouleme'=>'Angoulême y su región',
    'beziers'=>'Béziers y su región',
    'bordeaux'=>'Bordeaux y su región',
    'caen'=>'Caen y su región',
    'clermont-ferrand'=>'Clermont-Ferrand y su región',
    'grenoble'=>'Grenoble y su región',
    'la-rochelle'=>'La Rochelle y su región',
    'lille'=>'Lille y su región',
    'lyon'=>'Lyon y su región',
    'marseille'=>'Marseille y su región',
    'montpellier'=>'Montpellier y su región',
    'montreal'=>'Montréal y su región',
    'nancy'=>'Nancy y su región',
    'nantes'=>'Nantes y su región',
	'nimes'=>'Nîmes y su región',
    'nice'=>'Nice',
    'ottawa-gatineau'=>'Ottawa-Gatineau y su región',
    'idf'=>'Paris y su región',
    'quebec'=>'Québec y su región',
    'quimper'=>'Quimper y su región',
    'rennes'=>'Rennes y su región',
    'saguenay'=>'Saguenay y su región',
    'saint-etienne'=>'Saint-Étienne y su región',
    'sherbrooke'=>'Sherbrooke y su región',
    'strasbourg'=>'Strasbourg y su región',
    'toulouse'=>'Toulouse y su región',
    'trois-rivieres'=>'Trois-Rivières y su región',
    'valenciennes'=>'Valenciennes y su región',
    'alencon'=>'Alençon y St-Lô',
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
    'valenciennes2011'=>'Valenciennes y su región',
    'bogota'=>'Bogotá',
    'santiago'=>'Santiago',
    'sao-paulo'=>'São Paulo'
];


//Villes françaises
$frenchcities = [
    'albi'=>'Albi y su región',
    'alencon'=>'Alençon St-Lô y su región',
    'amiens'=>'Amiens y su región',
    'angers'=>'Angers y su región',
    'angouleme'=>'Angoulême y su región',
    'annecy'=>'Annecy y su región',
    'annemasse'=>'Annemasse y su región',
    'bayonne'=>'Bayonne y su región',
    'besancon'=>'Besancon y su región',
    'beziers'=>'Béziers y su región',
    'bordeaux'=>'Bordeaux y su región',
    'brest'=>'Brest y su región',
    'caen'=>'Caen y su región',
    'carcassonne'=>'Carcassonne y su región',
    'cherbourg'=>'Cherbourg y su región',
    'clermont-ferrand'=>'Clermont-Ferrand y su región',
    'creil'=>'Creil y su región',
    'dijon'=>'Dijon y su región',
    'douai'=>'Douai y su región',
    'dunkerque'=>'Dunkerque y su región',
    'grenoble'=>'Grenoble y su región',
    'la-reunion'=>'La Réunion',
    'la-rochelle'=>'La Rochelle y su región',
    'le-havre'=>'Le Havre y su región',
    'lille'=>'Lille y su región',
    'longwy'=>'Longwy y su región',
    'lyon'=>'Lyon y su región',
    'marseille'=>'Marseille y su región',
    'martinique'=>'Martinique',
    'metz'=>'Metz y su región',
    'montpellier'=>'Montpellier y su región',
    'nancy'=>'Nancy y su región',
    'nantes'=>'Nantes y su región',
    'nice'=>'Nice y su región',
    'nimes'=>'Nîmes y su región',
    'niort'=>'Niort y su región',
    'idf'=>'Paris y su región',
    'poitiers'=>'Poitiers y su región',
    'quimper'=>'Quimper y su región',
    'rennes'=>'Rennes y su región',
    'rouen'=>'Rouen y su región',
    'saint-brieuc'=>'Saint-Brieuc y su región',
    'saint-etienne'=>'Saint-Étienne y su región',
    'strasbourg'=>'Strasbourg y su región',
    'thionville'=>'Thionville y su región',
    'toulouse'=>'Toulouse y su región',
    'tours'=>'Tours y su región',
    'valence'=>'Valence y su región',
    'valenciennes'=>'Valenciennes y su región',
];

//Villes canadiennes
$cancities = [
    'montreal'=>'Montréal y su región',
    'ottawa-gatineau'=>'Ottawa-Gatineau y su región',
    'quebec'=>'Québec y su región',
    'saguenay'=>'Saguenay y su región',
    'sherbrooke'=>'Sherbrooke y su región',
    'trois-rivieres'=>'Trois-Rivières y su región'
];

//Villes sud-américaines
$ascities = [
    'bogota'=>'Bogotá y su región',
    'santiago'=>'Santiago y su región',
    'sao-paulo'=>'São Paulo y su región'
];

 // List of pages and their titles
    $pages = [
        'about'=>'Sobre nosotros',
        'methods'=>'Métodos',
        'multitask-tool'=>'Una herramienta multifuncional',
        'open' => "Una herramienta libre en evolución"
    ];

    $subpages = [
        'about'=>[
            'summary'=>'En pocas palabras...',
            'team'=>'Equipo',
            'partners'=>'Colaboradores',
			'publications'=>'Artículos y comunicaciones',

        ],
        'methods'=>[
            'data'=>'Datos',
            'indicators'=>'Indicadores',
            'geovizualisation'=>'Geovisualización',

        ],
        'multitask-tool'=>[
            'planning-tool'=>'Una herramienta de planificación',
            'scientific-tool'=>'Una herramienta de investigación',
			'pedagogical-tool'=>'Una herramienta pedagógica',

        ],
        'open'=>[
            'license'=>'Códigos, datos y visuales libres',
            'evolution'=>'Histórico de las versiones',
        ]

    ];

    // this description will be used by Google as the text under the title of the page
    // TITLE it should be max 70 char
    // META it should be max 230 char

      $pageSEO = [
      	//'about'=>['title'=>'Le Mobiliscope pour explorer la population des villes le jour et la nuit !','meta'=>'Les villes changent... Selon les heures et la mobilité quotidienne des populations, ce sont les quartiers de villes qui changent au fil des heures, mais aussi la mixité sociale et la ségrégation urbaine.'],
        'summary'=>['title'=>'Mobiliscope para explorar la población de las ciudades de día y de noche !','meta'=>'La movilidad diaria de la población provoca cambios en la composición social de los barrios y en la segregación de las ciudades durante las 24 horas del día. '],
		'team'=>['title'=>'Mobiliscope – una herramienta desarrollada en el laboratorio Géographie-cités','meta'=>'Una herramienta de geovisualización bajo la responsabilidad de Julie Vallée y desarrollada por Aurélie Douet y Constance Lecomte. Con la participación de Guillaume Le Roux, Hadrien Commenges y Elisa Villard'],
        'partners'=>['title'=>'Mobiliscope – un laboratorio de investigación, varios colaboradores','meta'=>'Desarrollado en el laboratorio Géographie-cités, Mobiliscope cuenta con el apoyo de CNRS, ANCT, INED, Cerema y Labex DynamiTe.'],
        'publications'=>['title'=>'Artículos y comunicaciones sobre Mobiliscope','meta'=>'En relación con la geografía social, la geografía urbana, la ‘time-geography’, la geomática, la geovisualización y la geografía de la salud.'],
        
        //'methods'=>['title'=>'Les méthodes du Mobiliscope','meta'=>'Une interface interactive pour explorer la coprésence des riches et des pauvres, des femmes et des hommes, des actifs et des retraités etc. au cours des 24 heures de la journée'],
        'data'=>['title'=>'Los datos Mobiliscope','meta'=>'Con las encuestas de viajes de los hogares (EMD, EDVM, EGT, EDGT, EMC²) del CEREMA (ex CERTU), el Mobiliscope enriquece los estudios urbanos tradicionalmente basados en los censos de población y los viajes domicilio-trabajo.'],
        'indicators'=>['title'=>'Mobiliscope – cuantificar y calificar las poblaciones presentes','meta'=>'Mapas hora a hora de las ciudades según el perfil demográfico (sexo y edad) y social (nivel de estudios, categoría socioprofesional) de las personas, su modo de transporte (a pie, en bicicleta, en transporte público, en coche), etc.'],
        'geovizualisation'=>['title'=>'Mapas animados de ciudades francesas, canadienses y latinoamericanas  - Mobiliscope','meta'=>'La interfaz se ha desarrollado con la biblioteca d3.js. Propone mapas animados (coropletas, círculos proporcionales, erizos) e índices de segregación (Duncan) y autocorrelación espacial (Moran) calculados hora a hora.'],
        
        //'news'=>['title'=>'Valorisation du Mobiliscope','meta'=>'Promouvoir une vision temporelle des villes auprès du grand public, des acteurs de l’aménagement, de la communauté scientifique et de la communauté pédagogique.'],
        //'events'=>['title'=>'Les événements du Mobiliscope','meta'=>'Fête de la science; Nuit de la Géographie ; Festival International de Géographie (FIG) ; Salon Innovativ SHS du CNRS ; ThéoQuant ; SAGEO ; Les mardis de Tempo territorial'],
        
        //'multitask-tool'=>['title'=>'Le Mobiliscope – un outil multifonction','meta'=>'Un outil spatio-temporel sur la ville pour  les acteurs de l’aménagement, la communauté scientifique, les enseignants, les élèves et le grand public.'],
        'planning-tool'=>['title'=>'Mobiliscope - apoyo a los diagnósticos territoriales ','meta'=>'¿Cómo actuar "en el lugar y el momento adecuados"? Una reflexión a realizar en relación con las políticas temporales (oficinas del tiempo), las pulsaciones urbanas, el enfoque cronotópico, etc.'],
        'pedagogical-tool'=>['title'=>'Mobiliscope - una herramienta pedagógica','meta'=>'A disposición de los docentes de historia y geografía para ayudarles a descubrir la ciudad y sus divisiones socioespaciales en las escuelas primarias, secundarias y universitarias.'],
        'scientific-tool'=>['title'=>'Mobiliscope - una herramienta científica','meta'=>'Explorar los efectos del lugar en la vida cotidiana. Abandonar el enfoque estático de la justicia espacial.'],
        

        'license'=>['title' => 'Mobiliscope - una herramienta con código, datos y visuales libres','meta'=>'En el espíritu de la ciencia abierta respetando los principios FAIR con datos abiertos (licencia ODbL). Scripts bajo licencias AGPL en un repositorio público de Github, desarrollados con tecnologías libres y de código abierto (javascript, biblioteca D3.js)'],
        'evolution'=>['title'=>'Mobiliscope - una herramienta en constante evolución','meta'=>'Una herramienta que ha estado en constante evolución desde que se lanzó por primera vez en 2017. Se añaden regularmente nuevas ciudades y funciones.'],
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
        $pageName = ' La ciudad a todas horas';
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
