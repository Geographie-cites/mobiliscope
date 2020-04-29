<?php
//phpinfo();
$language = "fr";
$page = '';
$subpage = '';
$pageMeta = '';
$sectionName = '';
$pagePath = '';
$pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Accueil</a>";


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
    'nancy'=>'Nancy et sa région',
    'nantes'=>'Nantes et sa région',
    // 'nice'=>'Nice',
    'idf'=>'Paris et sa région',
    'quimper'=>'Quimper et sa région',
    'rennes'=>'Rennes et sa région',
    'saint-etienne'=>'Saint-Étienne et sa région',
    'strasbourg'=>'Strasbourg et sa région',
    'toulouse'=>'Toulouse et sa région',
    'valenciennes'=>'Valenciennes et sa région',
];

 // List of pages and their titles
    $pages = [
        'about'=>'À propos',
        'methods'=>'Méthodes',
        'news'=>'Actualités',
        'multitask-tool'=>'Un outil multifonction'
    ];

    $subpages = [
        'about'=>[
            'team'=>'Équipe',
            'partners'=>'Partenaires',
            'license'=>'Licence',
            #'contact'=>'Contact'
        ],
        'methods'=>[
            'data'=>'Données',
            'indicators'=>'Indicateurs',
            'geovizualisation'=>'Géovisualisation',
            #'help'=>'Help',
        ],
        'news'=>[
            'events'=>'Événements',
            'publications'=>'Publications',
            #'web-review'=>'Sur le web',
        ],
        'multitask-tool'=>[
            'planning-tool'=>'Un outil d\'aménagement',
            'scientific-tool'=>'Un outil scientifique',
			'pedagogical-tool'=>'Un outil pédagogique',
            #'fun-tool'=>'A fun tool',
        ]
    ];

    // this description will be used by Google as the text under the title of the page
    // TITLE it should be max 70 char
    // META it should be max 230 char

      $pageSEO = [
        'about'=>['title'=>'Le Mobiliscope pour explorer la population des villes le jour et la nuit !','meta'=>'Les villes changent... Selon les heures et la mobilité quotidienne des populations, ce sont les quartiers de villes qui changent au fil des heures, mais aussi la mixité sociale et la ségrégation urbaine.'],
        'team'=>['title'=>'Le Mobiliscope – un outil développé au laboratoire Géographie-cités','meta'=>'Un outil de géovisualisation sous la responsabilité de Julie Vallée et développé par Aurélie Douet et Constance Lecomte. Avec la participation de Guillaume Le Roux et d’Hadrien Commenges.'],
        'partners'=>['title'=>'Le Mobiliscope – un labo de recherche, trois partenaires','meta'=>'Développé dans le laboratoire Géographie-cités, le Mobiliscope a reçu le soutien du  CNRS, du CGET et du Labex DynamiTe.'],
        'license'=>['title'=>'Le Mobiliscope, un outil libre de géovisualisation','meta'=>'Développé avec des technologies libres et open source (javascript, libraire D3.js), proposé sous licence libre (GNU GPL v3.0) et reproductible à partir des scripts déposés sur github'],
        'methods'=>['title'=>'Les méthodes du Mobiliscope','meta'=>'Une interface interactive pour explorer la coprésence des riches et des pauvres, des femmes et des hommes, des actifs et des retraités etc. au cours des 24 heures de la journée'],
        'data'=>['title'=>'Les données du Mobiliscope','meta'=>'Avec les enquêtes ménages déplacements (EMD, EDVM, EGT, EDGT, EMC²) du CEREMA (ex CERTU), le Mobiliscope enrichit les études urbaines traditionnellement basées sur les recensements de populations et les navettes domicile-travail.'],
        'indicators'=>['title'=>'Le Mobiliscope – des données individuelles dans le temps et l’espace','meta'=>'Des cartes heure par heure des villes selon le profil démographique (sexe et âge) et social (niveau d\'éducation, catégorie socioprofessionnelle CSP) des individus, leur mode de transport (marche, vélo, transport en commun, voiture) etc.'],
        'geovizualisation'=>['title'=>'Des  cartes animées des villes françaises - le Mobiliscope','meta'=>'L’interface a été développée avec la librairie d3.js. Elle propose des cartes animées (choroplèthes, en cercles proportionnels, en oursins) et des indices de ségrégation (Duncan) et d’autocorrélation spatiale (Moran) calculés heure par heure.'],
        'news'=>['title'=>'Les actualités du Mobiliscope','meta'=>'Promouvoir une vision temporelle des villes auprès du grand public, des acteurs de l’aménagement et de la communauté scientifique.'],
        'events'=>['title'=>'Les événements du Mobiliscope','meta'=>'Fête de la science; Nuit de la Géographie ; Festival International de Géographie (FIG) ; Salon Innovativ SHS du CNRS ; ThéoQuant ; SAGEO ; Les mardis de Tempo territorial'],
        'publications'=>['title'=>'Les publications du Mobiliscope','meta'=>'En lien avec la géographie sociale, la géographie urbaine, la ‘time-geography’, la géomatique, la géovisualisation et la géographie de la santé.'],
        'multitask-tool'=>['title'=>'Le Mobiliscope – un outil multifonction','meta'=>'Un outil spatio-temporel sur la ville pour  les acteurs de l’aménagement, la communauté scientifique, les enseignants, les élèves et le grand public.'],
        'planning-tool'=>['title'=>'Le Mobiliscope - un appui aux diagnostics territoriaux ','meta'=>'Comment agir "au bon endroit et au bon moment" ? Une réflexion à mener en lien avec les politiques temporelles (bureaux des temps), les pulsations urbaines, l’approche chronotopique etc.'],
        'pedagogical-tool'=>['title'=>'Le Mobiliscope  - un outil pédagogique','meta'=>'A disposition des enseignants d’histoire-géo pour faire découvrir la ville et ses divisions socio-spatiales à l’école primaire, au collège, au lycée et à l’université.'],
        'scientific-tool'=>['title'=>'Le Mobiliscope  - un outil scientifique','meta'=>'Pour explorer les rythmes quotidiens des espaces (le daycourse of place) et les effets de lieu au quotidien. Pour sortir d’une approche statique de la justice spatiale.'],
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
        $pageName = ' la ville à toute heure';
        $pageCrumbs .= "";
    }

    if($section == 'home')
        $pageCrumbs = "<i class='fas fa-chevron-right'></i><a href='/".$language."'>Home</a>";

    if($section == 'geoviz')
        $pageCrumbs = "";


    $pageSEODefaut = [
        'title'=>'Mobiliscope : ' .  $pageName . '',
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
