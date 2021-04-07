<div class="topbar">

    <div class = "row full-menu">
        <div class = "col-sm-10 col-sm-offset-1">
            <div class = "row">
                <i id="close-menu-btn" class="far fa-times-circle toggle-nav menu-close"></i>
                <?php
                    foreach ($pages as $key => $value) {
                        echo "<div class = 'col-sm-6 col-md-3'>
                    <h3><a href='/" . $language . "/info/".$key."'>" . $value . "</a></h3>
                    <ul>";

                        foreach ($subpages[$key] as $subkey => $subvalue) {

                            echo "<li><a href='/" . $language . '/info/' . $key . '/' . $subkey . "'>" . $subvalue . "</a></li>";

                        }
                        echo "</ul>
                </div>";
                    }
                ?>
            </div>
            <br>
            <br>

            <div class = "row">
            <?php
                echo "<h3>Liste des villes/régions françaises";
            ?>
            </div>

            <div class = "row">

                <?php
                    $len = sizeof($frenchcities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'>";
                            echo "<ul>";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($frenchcities)[$numpercol*$i+$j]) ? array_values($frenchcities)[$numpercol*$i+$j] : '';
                                $frenchcitiesSlugs = array_keys($frenchcities);
                                if(!empty($theCity))
                                    echo "<li><a href='/" . $language . '/geoviz/' . $frenchcitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($frenchcities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</div>";
                    }
                ?>
            </div>

            <div class = "row">
            <?php
                echo "<h3>Liste des villes/régions canadiennes";
            ?>
            </div>

            <div class = "row">

                <?php
                    $len = sizeof($cancities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'>";
                            echo "<ul>";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($cancities)[$numpercol*$i+$j]) ? array_values($cancities)[$numpercol*$i+$j] : '';
                                $cancitiesSlugs = array_keys($cancities);
                                if(!empty($theCity))
                                    echo "<li><a href='/" . $language . '/geoviz/' . $cancitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($cancities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</div>";
                    }
                ?>
            </div>
        </div>
    </div>


    <div class = "row top-menu">

        <div class = "col-sm-12 col-md-4 col-lg-4 top-menu-container">

            <span class="toggle-nav"><i class="fas fa-bars"></i>&nbsp;MENU&nbsp;&nbsp;&nbsp;</span>

            <span class="hidden-sm">
                <?php if($section=='geoviz') echo "<label class='tooltip bottom' for='help-modal-control' aria-label='Aide'><i class='far fa-question-circle' title='help !'></i></label>"; ?>
                <label class='tooltip bottom' aria-label='Accueil'><a href="/<?php echo $language; ?>"><i class='fas fa-home' title='Homepage !'></i></a></label>
                <label class='tooltip bottom top-search' aria-label='Rechercher'><i class="fas fa-search"></i></label>
                <span class="top-lang-container hidden-md hidden-lg">
                        <span class = "lang-ctrl"><a href="/fr/<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>">fr</a>&nbsp;/&nbsp;<a href="/en<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'en'?'cur-lang':''; ?>">en</a></span>
                </span>
            </span>
        </div>

        <div class = "col-sm-12 top-menu-container hidden-md hidden-lg">
            <span class="">
                <?php if($section=='geoviz') echo "<label class='tooltip bottom' for='help-modal-control' aria-label='Aide !'><i class='far fa-question-circle' title='help !'></i></label>"; ?>
                <label class='tooltip bottom' aria-label='Accueil'><a href="/<?php echo $language; ?>"><i class='fas fa-home' title='Homepage !'></i></a></label>
                <label class='tooltip bottom top-search' aria-label='Rechercher' ><i class="fas fa-search"></i></label>
                <span class="top-lang-container hidden-md">
                        <span class = "lang-ctrl"><a href="/fr/<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>">fr</a>&nbsp;/&nbsp;<a href="/en<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'en'?'cur-lang':''; ?>">en</a></span>
                </span>
            </span>
        </div>


        <div class="col-sm-12 col-md-3 col-lg-4 top-city-name-container">
            <?php if($section == 'geoviz'){ ?>
                <span class="top-city-name" id="cityName"><i class="fas fa-map-marker-alt"></i>&nbsp;<?php echo $curPage['pageName']?></span>
            <?php } ?>
            <span class = "top-search-container">
                <input placeholder="Rechercher une ville..." type="search" id="search-bar" class = "typeahead">
            </span>
        </div>




        <div class="col-sm-12 col-md-5 col-lg-4 main-title-container">

                    <span class="top-lang-container hidden-sm">
                            <span class = "lang-ctrl"><a href="/fr/<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>">fr</a>&nbsp;/&nbsp;<a href="/en<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'en'?'cur-lang':''; ?>">en</a></span>
                    </span>
                    <span class = "top-main-title-container">
                        <a class="main-title" href="/<?php echo $language; ?>">MOBILISCOPE</a>
                    </span>


        </div>

    </div>

    <?php
    if(!empty($page) && !empty($curPage['pageCrumbs'])) { ?>
    <div class = "row breadcrumb">
        <div class="col-sm-11">
            <?php
                echo $curPage['pageCrumbs'];
            ?>
        </div>
        <div class="col-sm-1">
            <div class="full-screen">
                <?php if($section=='geoviz') echo "<i class='fas fa-external-link-alt'></i>"; ?>
            </div>
        </div>
    </div>
    <?php } ?>

</div>

<input type="checkbox" id="help-modal-control" class="modal">
<div>
  <div class="card help-card">
    <label for="help-modal-control" class="modal-close" ></label>

    <h3 class="section">Aide sur l'utilisation de l'interface</h3>

	<h4>1) Précisions </h4>
	<p class="section">
	Les données utilisées dans le Mobiliscope proviennent des Enquêtes Ménages Déplacements dont les plus anciennes datent de 2009 et la plus récente de 2018.<br /><br />
	Seuls les déplacements qui ont eu lieu un <b>jour de semaine</b> (lundi au vendredi) sont pris en compte et agrégés pour figurer un jour ‘fictif ‘ de semaine.<br /><br />
	Les proportions/nombres de personnes par secteur et par heure sont des estimations. Elles sont donc soumises à une <b> marge d’erreur statistique</b> .<br /><br />
    </p>

   <h4>2) Sélectionner une carte</h4>

    <p class="section">
        Dans le menu à gauche, choisissez un indicateur et sélectionnez une carte en pourcentage<button class ="part2">%</button>, en stock<button class ="nb2">nb</button> ou en oursins<button class="flow2">✴</button><br /><br />
		Pour obtenir des détails sur les indicateurs, cliquez sur le bouton d'aide <span class = "help" style = "font-size : 1em ;">Q</span> situé en regard du nom de l'indicateur.<br /><br />
          <img src="/logos/accordeonmenu-fr.png" alt="accordeonmenu" width="300"/><br /><br />

		La carte en oursins<button class="flow2">✴</button> permet de connaitre de nombre de personnes présentes par secteur et qui résident dans un autre secteur (inclus dans le périmètre d'enquête).</br>
		Des liens (qui s'affichent au passage de la souris) relient le secteur de présence aux secteurs de résidence.<br /><br />
		<img src="/logos/oursins.png" alt="oursins" width="400"/><br /><br/>

    </p>

    <h4>3) Observer l'évolution de la carte au fil de la journée</h4>

    <p class="section">
        Cliquer sur le bouton play de la timeline pour faire défiler les heures.<br /><br />
          <img src="/logos/timeline.png" alt="timeline" /><br /><br />
    </p>

    <h4>4) Observer un secteur en particulier</h4>

    <p class="section">
        Sélectionnez un secteur par un clic sur la carte et regardez le graphique qui s'affiche en bas à droite votre écran.<br /><br />
        <img src="/logos/select-secteur.png" alt="select-secteur" width="400"/><br /><br />
        Ce graphique permet de suivre l'évolution du groupe observé dans le secteur sélectionné au fil de la journée.<br /><br />
        <img src="/logos/graph-simple.png" alt="graph-simple" width="400"/><br /><br />
        En cliquant sur l'onglet "empilé", vous pouvez voir l'évolution de l'ensemble des groupes d'un même indicateur.<br /><br />
        <img src="/logos/graph-empile.png" alt="graph-empile" width="400"/><br /><br />
        La légende des graphiques suit le même code couleur que celui du menu. Sur le graphique ci-dessus, les transports publics sont représentés en bleu, les véhicules privés motorisés en rose et la mobilité douce en vert.<br /><br />
    </p>

    <h4>5) Etudier la ségrégation spatiale</h4>

    <p class="section">
        Sur l'interface, le graphique du haut présente l'évolution de la répartition spatiale du groupe sélectionné dans l'ensemble des secteurs de la carte.<br /><br />
        <img src="/logos/graph-segreg.png" alt="select-secteur" width="400"/><br /><br />
        Pour obtenir des informations sur les deux indices utilisés (Duncan et Moran), cliquez sur le bouton d'aide <span class = "help" style = "font-size : 1em ;">Q</span> situé à côté du nom de l'indice.<br /><br />
    </p>


    <h4>6) Observer une autre ville</h4>

    <p class="section">
        29 villes et leur périphérie sont incluses dans la version actuelle du Mobiliscope (2020). Pour observer une autre ville, utlisez l'outil loupe <i class="fas fa-search"></i><br /><br />
    </p>

    <h4>Pour aller plus loin</h4>
    <p>
        En consultant les pages  <a href="/fr/info/methods">Méthodes</a>, vous obtiendrez davantage d'information sur l'interface, les indicateurs et les données mobilisées pour la création du Mobiliscope.
    </p>
    <p>
        Bonne visite !
    </p>
    <div class="close-help">
        <label for="help-modal-control" class="" > <i class="fas fa-times"></i>&nbsp;Fermer</label>
    </div>
  </div>
</div>



