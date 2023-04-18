<!-- TOP BAR -->
<div class="topbar">

    <!-- Begin full menu-->
    <div class = "row full-menu">

        <div id="scrolling-down">
            <img src="/dist/assets/scroll.svg" />
        </div>

        <div class = "col-sm-10 col-sm-offset-1">
            <div class = "row">
                <i id="close-menu-btn" class="btn-close-full-menu"></i>
                <?php
                    foreach ($pages as $key => $value) {
                        echo "<div class = 'col-sm-6 col-md-3'>
                                <h3>" . $value . "</h3>
                                <ul>";
                                    foreach ($subpages[$key] as $subkey => $subvalue) {

                                        echo "<li><i class='arrow right'></i><a href='/" . $language . '/info/' . $key . '/' . $subkey . "'>" . $subvalue . "</a></li>";

                                    }
                                    echo "</ul>
                            </div>";
                    }
                ?>
            </div>
            <br>

            <div class = "row">
                <h3>Liste des villes/régions françaises<h3>
            </div>

            <div class = "row col-order-4">

                <?php

                    $frenchcities = [];
                    $cancities = [];
                    $ascities = [];

                    foreach( $city as $key=>$val ){

                        if( $val['zoneGeo'] == 'FR' )
                            $frenchcities[$key] = $val["longName"][$language];

                        if( $val['zoneGeo'] == 'CA' )
                            $cancities[$key] = $val["longName"][$language];

                        if( $val['zoneGeo'] == 'AS' )
                            $ascities[$key] = $val["longName"][$language];
                    }

                    $len = sizeof($frenchcities);
                    $numpercol = (int) ($len / 4) +1 ;

                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($frenchcities)[$numpercol*$i+$j]) ? array_values($frenchcities)[$numpercol*$i+$j] : '';
                                $frenchcitiesSlugs = array_keys($frenchcities);
                                if(!empty($theCity)){
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $frenchcitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($frenchcities)[$numpercol*$i+$j] . "</a></li>  ";
                                }
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>

            <div class = "row">
                <h3>Liste des villes/régions canadiennes<h3>
            </div>

            <div class = "row col-order-3">

                <?php
                    $len = sizeof($cancities);
                    $numpercol = (int) ($len / 4) +1 ;



                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($cancities)[$numpercol*$i+$j]) ? array_values($cancities)[$numpercol*$i+$j] : '';
                                $cancitiesSlugs = array_keys($cancities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $cancitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($cancities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>

            <div class = "row">
                <h3>Liste des villes/régions latino-américaines</h3>
            </div>

            <div class = "row col-order-3">

                <?php
                    $len = sizeof($ascities);
                    $numpercol = (int) ($len / 4) +1 ;

                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($ascities)[$numpercol*$i+$j]) ? array_values($ascities)[$numpercol*$i+$j] : '';
                                $ascitiesSlugs = array_keys($ascities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $ascitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($ascities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>
        </div>
        <div id="scrolling-up">
          <img src="/dist/assets/scroll.svg" />
        </div>

    </div>
    <!-- END full menu-->


    <div class="topbar-container">

        <div class="left-part">
            <div style="height:100%">
              <a data-tooltip="down 1000" aria-label="Accueil" class="main-title" href="/<?php echo $language; ?>">
                  <img class = "logo-title lg" src="/dist/assets/logo-title.svg"/>
                  <img class = "logo-title sm" src="/dist/assets/logo-mobile.svg"/>
                </a>
            </div>
        </div>


        <div class=" right-part">
            <span>

                <input placeholder="Rechercher un nom de ville, de commune..." id="topbar-search"  class = "typeahead" type="search" name="search" autocomplete="off">
                <div class="search-input-btn"></div>
            </span>

            <div class="dropLang">
                 <div id="myDropdown" class="dropdown-content">
                    <a class="langchoice" href="/en<?php echo $curPage['pagePathNoLang'];?>"></a>
                    <a class="langchoice2" href="/es<?php echo $curPage['pagePathNoLang'];?>"></a>
                 </div>
            </div>


            <div class="toggle-nav menu">
                <img src="/dist/assets/menu-icon.svg" />
            </div>

            <div class="toggle-nav menu-mobile">
                <div class="container-menu-bars">
                    <div class="menu-bars"></div>
                    <div class="menu-bars"></div>
                    <div class="menu-bars"></div>
                </div>
            </div>

        </div>

    </div>

    <div>
      <input placeholder="Rechercher une ville ou une commune..." id="topbar-search-mobile"  class = "typeahead" type="search" name="search">
    </div>



</div>
<!-- End topbar -->



<!-- Breadcrumbs -->
<?php
    if(!empty($page) && !empty($curPage['pageCrumbs'])) { ?>
    <div class = "row breadcrumb">
        <div class="col-sm-11">
            <div class = "breadcrumb-container">

            </div>
        </div>
        <div class="col-sm-1">
            <div class="full-screen">
                <?php if($section=='geoviz') echo "<i class='fas fa-external-link-alt'></i>"; ?>
            </div>
        </div>
    </div>
<?php } ?>


<!-- MODAL BOXES  -->

<!-- SHARE modal boxes  -->
<input type="checkbox" id="share-modal-control" class="modal">
<div>
    <div class="card share-card">

    <label for="share-modal-control" id="label-modal">
      <img class="modal-close"  src="/dist/assets/close-white.png" />
    </label>

    <h3 class="section">Partager cette vue</h3>
    <div class="share-card-container">

        <label class="share-container" for="share-mail" id="share-mail">
            <img class="ask" src="/dist/assets/mail.svg" /><span>Partager par mail</span>
        </label>

        <label class="share-container" for="share-tw" id="share-tw">
            <img class="ask"   src="/dist/assets/twitter.svg" /><span>Partager sur Twitter</span>
        </label>

        <label class="share-container" for="share-fb" id="share-fb">
            <img class="ask"   src="/dist/assets/facebook.svg" /><span>Partager sur Facebook</span>
        </label>
    <!--
        <label class="share-container" for="share-lk" id="share-lk" >
            <img class="ask"   src="/dist/assets/lk.svg" /><span>Partager sur LinkedIn</span>
        </label>
    -->
        <label class="share-container" for="share-link" id="share-link" >
            <img class="ask"   src="/dist/assets/link.svg" /><span>Copier l'url de la page</span>
        </label>

    </div>
    <div class="close-share">
        <label for="share-modal-control" class="" ><i class="fas fa-times"></i><b>&nbsp;Fermer</b></label>
    </div>
    </div>
</div>

<!-- HELP modal boxes  -->
<input type="checkbox" id="help-modal-control" class="modal">
<div>
  <div class="card help-card">

    <div class="help-card-header">
        <label for="help-modal-control" id="label-modal">
          <img class="modal-close"  src="/dist/assets/close-white.png" />
        </label>

        <h3 class="section">Aide sur l'utilisation de l'interface</h3>
    </div>
    <div class="help-card-container">

	   <h5><b>1) Précisions </b></h5>

    	<p class="section">
        	Les données utilisées dans le Mobiliscope proviennent de grandes enquêtes publiques sur les déplacements quotidiens. Les plus anciennes datent de 2009 et les plus récentes de 2019. Une fois transformées, ces données sont utilisées pour estimer la population présente dans chaque secteur <b>à chaque heure "pile"</b> (4h00, 5h00 etc.) un jour "moyen" de semaine (lundi-vendredi).<br/><br/>

            Les proportions/nombres de personnes présentes par secteur et par heure affichées dans le Mobiliscope sont des estimations : elles sont soumises à une marge d’erreur statistique.<br/><br/>

            <b>58 villes et leur périphérie</b> (réparties dans 5 pays) sont incluses dans la version actuelle du Mobiliscope (v4.2). Pour choisir la ville à observer, vous pouvez utiliser le menu déroulant <img src="/dist/assets/menu-icon.svg" width="60px" height= "60px"/> ou effectuer une recherche par nom de commune via l'outil loupe <img src="/dist/assets/search-black.svg" width="25px" height= "25px"/>.  
        </p>

       <h5><b>2) Sélectionner un indicateur à afficher sur la carte centrale et les graphiques</b></h5>

        <p class="section">
            Dans le menu à gauche de la carte, choisissez un indicateur et sélectionnez un affichage en pourcentage<button class ="part">%</button>, en stock<button class ="nb">nb</button> ou en oursins<button class="flow2" style = "font-size : 1em ;" >✴</button>.<br/>
    		Pour obtenir des détails sur les différents indicateurs (et les modalités qui les composent), cliquez sur le bouton d'aide <span class = "helpAcc2"></span> situé en regard du nom de l'indicateur.<br/><br/>
              <img src="/dist/assets/accordeonmenu-fr.png" alt="accordeonmenu" width="300"/><br/><br/>

    		Le mode dit "en oursins"<button class="flow2" style = "font-size : 1em ;" >✴</button>permet de connaître heure par heure le nombre de personnes présentes dans un secteur qui résident dans un autre secteur (inclus dans le périmètre d'enquête). Sur la carte, les liens qui s'affichent au survol de la souris relient le secteur de présence aux principaux secteurs de résidence (ce mode "survol" n'est pas disponible sur les écrans tactiles).<br/><br/>
    		<img src="/dist/assets/oursins-fr.png" alt="oursins" width="600"/>

        </p>

        <h5><b>3) Observer l'évolution au fil des heures de la journée</b></h5>

        <p class="section">
            Cliquer sur le bouton play à gauche de la "ligne des heures" pour animer la carte et les graphiques selon les 24 heures de la journée.<br/><br/>
              <img src="/dist/assets/timeline-fr.png" alt="timeline" />
        </p>

         <h5><b>4) Observer un secteur en particulier</b></h5>

        <p class="section">

            Sélectionnez un secteur par un clic sur la carte.<br/><br/>
            <img src="/dist/assets/select-secteur-fr.png" alt="select-secteur" width="600"/><br/><br/>

            Regardez le graphique intitulé "<b>Dans le secteur sélectionné</b>"&nbsp;: il permet de connaître au fil des 24 heures de la journée l'évolution de la population présente dans ce secteur (et pour chacun des groupes qui composent l'indicateur choisi dans le menu).<br/>
            La légende des graphiques suit le même code couleur que celui du menu. Ici, les populations présentes ayant utilisées comme dernier mode de déplacement des transports publics sont représentés en bleu, des véhicules privés motorisés en rose et des modes doux en vert&nbsp;:<br/><br/>
            <img src="/dist/assets/graph-empile-fr.png" alt="graph-empile" width="500"/><br/><br/>

            En cliquant sur l'onglet "simple", vous pouvez voir l'évolution d'un groupe de population en particulier&nbsp;:<br/><br/>
            <img src="/dist/assets/graph-simple-fr.png" alt="graph-simple" width="500"/><br/>
        </p>

         <h5><b>5) Étudier la ségrégation spatiale</b></h5>

        <p class="section">
            Le bloc de graphiques intitulé "<b>Dans l'ensemble de la région</b>" présente deux indices statistiques calculés dans l'ensemble des secteurs de la région pour chaque heure de la journée.<br/><br/>

            <b>L'indice de Duncan</b> (appellé aussi 'Dissimilarity index') mesure l'intensité de la ségrégation de chaque groupe d'un indicateur&nbsp;:<br/><br/>
            <img src="/dist/assets/duncan-fr.png" alt="duncan" width="500"/><br/><br/>
           
            L'exemple ci-dessus affiche, heure par heure, l'indice de Duncan (Paris et sa région - 2010) selon l'indicateur QPV qui distingue deux sous-groupes de population : les personnes résidant dans les quartiers prioritaires en politique de la ville et celles résidant en dehors de ces quartiers prioritaires. L'indice de Duncan, compris entre 0 et 1, mesure l'écart à une situation d'équirépartition. Si l'indice vaut 0, cela signifie que tous les secteurs de la région accueillent les deux sous-groupes de populations dans les mêmes proportions que celles de l'ensemble de la région&nbsp;; à l'inverse, si l'indice vaut 1, cela signifie que chacun des secteurs de la région accueille exclusivement un seul des deux groupes. Dans notre cas, la valeur la plus élevée se situe entre 20h et 7h, indiquant une ségrégation plus forte la nuit (on s'éloigne davantage de l'équirépartition)&nbsp;: cela correspond au moment où la plupart des individus des deux groupes sont à domicile ou dans leur secteur de résidence. En revanche, en journée, la valeur de l'indice diminue. Cela signifie que, du fait de leur mobilité, les personnes résidant dans les quartiers prioritaires en politique de la ville et celles résidant en dehors se "mélangent" dans l'ensemble des secteurs de la région (situation plus proche de l'équirépartition). <br/><br/>

            En cliquant sur le bouton "Moran" s'affiche un second graphique présentant l'<b>indice de Moran</b> qui mesure la ressemblance des profils de la population présente pour les secteurs voisins&nbsp;:<br/><br/>
            <img src="/dist/assets/moran-fr.png" alt="moran" width="500"/><br/><br/>

            L'indice de Moran varie de -1 à +1&nbsp;: plus sa valeur est proche de 1, plus les secteurs qui sont spatialement proches se  ressemblent (ont des caractéristiques similaires du point de vue de l'indicateur choisi)&nbsp;; plus sa valeur s'approche de -1, plus les secteurs qui sont spatialement proches sont dissemblables (ont des caractéristiques différentes du point de vue de l'indicateur choisi). Lorsque que l'indice de Moran vaut 0, aucune structure de ressemblance/dissemblance entre secteurs voisins n'apparaît sur l'ensemble de la région. Dans notre exemple, l'indice est positif et augmente pendant le jour. Cela signifie que des blocs de secteurs semblables (selon le nombre d'habitants des quartiers prioritaires qui y sont présents) se forment au cours de la journée. Ce résultat ne contredit pas l'indice de Duncan mais le complète&nbsp;: le jour, les habitants des quartiers prioritaires fréquentent d'autres secteurs que leur secteur de résidence (leur répartition spatiale au sein des secteurs de la région est plus équibrée) mais ont tendance à être présents dans des secteurs qui sont à proximité les uns des autres.<br/><br/>
            
            A noter que lorsqu'un indicateur est composé de deux groupes (homme/femme, habitant en QPV/hors QPV), les valeurs des indices sont les mêmes pour l'un ou l'autre groupe et donc les courbes se superposent. Pour obtenir d'autres informations sur les deux indices utilisés, cliquez sur le bouton d'aide <span class = "helpAcc2" style = "font-size : 1em ;"></span> situé à côté du nom de l'indice.
        </p>

         <h5><b>6) Changer de fond de carte</b></h5>

        <p class="section">
            Au clic dans le menu <img src="/dist/assets/layers2.png" width="25px" height= "25px"/>, plusieurs fonds de carte sont proposés pour se repérer plus facilement dans la carte interactive&nbsp;: un fond de carte simple (affiché par défaut), un fond de carte plus détaillé (OpenStreetMap) et un fond constitué d'images aériennes. <br/><br/>
            <img src="/dist/assets/osm-simple-fr.png" alt="osm-simple" width="360" margin-right="5"/>
            <img src="/dist/assets/osm-detail-fr.png" alt="osm-details" width="360" margin-right="5"/>
            <img src="/dist/assets/satellite-fr.png" alt="satellite" width="360"/><br/><br/>

            Ce menu contient d'autres couches d'information spécifiques à certaines villes. Vous pouvez par exemple afficher le périmètre des quartiers prioritaires (QPV) des villes françaises ou les couronnes centre/périphérie des villes latino-américaines.<br/><br/>
            <img src="/dist/assets/qpv-fr.png" alt="qpv" width="400" margin-right="5"/>
            <img src="/dist/assets/couronne-fr.png" alt="couronne" width="400"/>
        </p>


        <h5><b>7) Télécharger des données</b></h5>

        <p class="section">
            Les données agrégées affichées dans l'outil sont sous <b>licence libre ODbL</b>. Elles sont librement réutilisables tant qu'elles demeurent sous licence libre et que les sources sont mentionnées.<br/><br/>

            En cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/> au dessus de la carte centrale, vous pouvez télécharger les données de présence par secteur et par heure. En cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> à côté du graphique présentant les valeurs horaires des indices de ségrégation (indices de Duncan ou de Moran), vous pouvez télécharger les données associées.

        </p>

        <h5><b>8) Partager une vue particulière</b></h5>

        <p class="section">
            En cliquant sur le bouton <img src="/dist/assets/share.svg" width="25px" height= "25px"/>, vous pouvez copier l'URL de votre carte ou bien la partager directement par mail ou sur les réseaux sociaux. L'URL enregistre votre choix d'indicateur ainsi que le secteur et l'heure sélectionnés.
        </p>


         <h5><b>Pour aller plus loin</b></h5>
        <p class="section">
            En consultant les pages <a href="/fr/info/methods/data">Données</a>, <a href="/fr/info/methods/indicators">Indicateurs</a> ou <a href="/fr/info/methods/geovizualisation">Géovisualisation</a> vous obtiendrez davantage d'information sur les méthodes utilisées dans le Mobiliscope.
        </p>
        <p class="section">
            Bonne visite !
        </p>

   </div>
  </div>
</div>
