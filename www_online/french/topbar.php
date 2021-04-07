<div class="topbar">

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
            <?php
                echo "<h3>Liste des villes/régions françaises";
            ?>
            </div>

            <div class = "row col-order-4">

                <?php
                    $len = sizeof($frenchcities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($frenchcities)[$numpercol*$i+$j]) ? array_values($frenchcities)[$numpercol*$i+$j] : '';
                                $frenchcitiesSlugs = array_keys($frenchcities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $frenchcitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($frenchcities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>

            <div class = "row">
            <?php
                echo "<h3>Liste des villes/régions canadiennes";
            ?>
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
        </div>
        <div id="scrolling-up">
          <img src="/dist/assets/scroll.svg" />
        </div>

    </div>


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
                 <div onclick="myFunction()" ></div>
                 <div id="myDropdown" class="dropdown-content">
                    <a class="langchoice" href="/en<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>"></a>
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

<input type="checkbox" id="help-modal-control" class="modal">

<div>
  <div class="card help-card">

    <label for="help-modal-control" id="label-modal">
      <img class="modal-close"  src="/dist/assets/close-white.png" />
    </label>

    <h3 class="section">Aide sur l'utilisation de l'interface</h3>

    <div class="help-card-container">

	   <h5><b>1) Précisions </b></h5>

    	<p class="section">
        	Les données utilisées dans le Mobiliscope proviennent de grandes enquêtes publiques sur les déplacements quotidiens. Les plus anciennes datent de 2009 et les plus récentes de 2019.<br/>
        	Seuls les déplacements qui ont eu lieu un <b>jour de semaine</b> (lundi au vendredi) sont pris en compte pour figurer un jour "fictif" de semaine.<br/><br/>

        	Les proportions/nombres de personnes par secteur et par heure affichées dans le Mobiliscope sont des estimations. Elles sont donc soumises à une <b>marge d’erreur statistique</b>.<br/><br/>

            55 villes et leur périphérie sont incluses dans la version actuelle du Mobiliscope (v4.0).<br/>
            Pour observer une autre ville, utlisez l'outil loupe <img src="/dist/assets/search-black.svg" width="20px" height= "20px"/> pour taper le nom de la ville ou commune que vous recherchez. Vous pouvez aussi sélectionner une région via le menu déroulant <img src="/dist/assets/menu-icon.svg" width="50px" height= "50px"/>. <!-- <span class="search-input-btn"></span> -->
        </p>

       <h5><b>2) Sélectionner un indicateur à afficher sur la carte centrale et les graphiques</b></h5>

        <p class="section">
            Dans le menu à gauche, choisissez un indicateur et sélectionnez un affichage en pourcentage<button class ="part">%</button>, en stock<button class ="nb">nb</button> ou en oursins<button class="flow2" style = "font-size : 1em ;" >✴</button>.<br/>
    		Pour obtenir des détails sur les indicateurs, cliquez sur le bouton d'aide <span class = "helpAcc2"></span> situé en regard du nom de l'indicateur.<br/><br/>
              <img src="/dist/assets/accordeonmenu-fr.png" alt="accordeonmenu" width="300"/><br/><br/>

    		Le mode dit "en oursins" <button class="flow2" style = "font-size : 1em ;" >✴</button> permet de connaître le nombre de personnes présentes dans un secteur qui résident dans un autre secteur (inclus dans le périmètre d'enquête). Sur la carte, les liens qui s'affichent au passage de la souris relient le secteur de présence aux principaux secteurs de résidence. Ce mode n'est pas disponible sur les écrans tactiles.<br/><br/>
    		<img src="/dist/assets/oursins-fr.png" alt="oursins" width="600"/>

        </p>

        <h5><b>3) Observer l'évolution de la carte au fil de la journée</b></h5>

        <p class="section">
            Cliquer sur le bouton play à gauche de la "ligne des heures" pour animer la carte selon les 24 heures de la journée.<br/><br/>
              <img src="/dist/assets/timeline-fr.png" alt="timeline" />
        </p>

         <h5><b>4) Observer un secteur en particulier</b></h5>

        <p class="section">
            Sélectionnez un secteur par un clic sur la carte et regardez le graphique qui s'affiche en haut à droite de votre écran.<br/><br/>
            <img src="/dist/assets/select-secteur-fr.png" alt="select-secteur" width="600"/><br/><br/>
            Ce graphique permet de suivre l'évolution du groupe observé dans le secteur sélectionné au fil de la journée.<br/><br/>
            <img src="/dist/assets/graph-simple-fr.png" alt="graph-simple" width="500"/><br/><br/>
            En cliquant sur l'onglet "empilé", vous pouvez voir l'évolution de l'ensemble des groupes d'un même indicateur.<br/><br/>
            <img src="/dist/assets/graph-empile-fr.png" alt="graph-empile" width="500"/><br/><br/>
            La légende des graphiques suit le même code couleur que celui du menu. Sur le graphique ci-dessus, les transports publics sont représentés en bleu, les véhicules privés motorisés en rose et la mobilité douce en vert.
        </p>

         <h5><b>5) Etudier la ségrégation spatiale</b></h5>

        <p class="section">
            Sur l'interface, le graphique du bas présente l'intensité de la ségrégation du groupe sélectionné dans l'ensemble des secteurs de la carte et son évolution au fil des heures.<br/><br/>
            <img src="/dist/assets/graph-segreg-fr.png" alt="select-secteur" width="500"/><br/><br/>
            Pour obtenir des informations sur les deux indices utilisés (Duncan et Moran), cliquez sur le bouton d'aide <span class = "helpAcc2" style = "font-size : 1em ;"></span> situé à côté du nom de l'indice.
        </p>

         <h5><b>6) Changer de fond de carte</b></h5>

        <p class="section">
            <!-- <span class="leaflet-control-layers-toggle" display="inline !important"></span> -->Deux fonds de carte OpenStreetMap peuvent être affichés pour se répérer plus facilement dans l'espace : une couche d'information simple et une autre plus détaillée - au clic dans le menu <img src="/src/styles/images/layers2.png" width="20px" height= "20px"/> :<br/><br/>
            <img src="/dist/assets/osm-simple-fr.png" alt="osm-simple" width="400" margin-right="5"/><img src="/dist/assets/osm-detail-fr.png" alt="osm-simple" width="400"/><br/><br/>

            Il est aussi possible d'afficher la couche des quartiers prioritaires (QPV) via le menu <img src="/src/styles/images/layers2.png" width="20px" height= "20px"/>. <br/><br/>
            <img src="/dist/assets/qpv-fr.png" alt="osm-simple" width="400"/><br/><br/>
        </p>


         <h5><b>7) Télécharger des données</b></h5>

        <p class="section">
            	En cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/> au dessus de la carte centrale, vous pouvez télécharger les données de présence par secteur et par heure. En cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> à côté du graphique du bas, vous pouvez télécharger les données concernant l'ampleur de la ségregation (indice de Duncan ou de Moran) heure par heure dans la région.
        </p>


         <h5><b>Pour aller plus loin</b></h5>
        <p class="section">
            En consultant les pages <a href="/fr/info/methods/data">Données</a>, <a href="/fr/info/methods/indicators">Indicateurs</a> ou <a href="/fr/info/methods/geovizualisation">Géovisualisation</a> vous obtiendrez davantage d'information sur les méthodes utilisées dans le Mobiliscope.
        </p>
        <p class="section">
            Bonne visite !
        </p>

        <div class="close-help">
            <label for="help-modal-control" class="" > <i class="fas fa-times"></i><b>&nbsp;Fermer la fenêtre d'aide</b></label>
        </div>
   </div>
  </div>
</div>
