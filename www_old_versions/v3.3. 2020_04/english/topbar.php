<div class="topbar">

    <div class = "row full-menu">
        <div class = "col-sm-10 col-sm-offset-1">
            <div class = "row">
                <i class="far fa-times-circle toggle-nav menu-close"></i>
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
                echo "<h3>List of French city regions</h3>";
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
     
            <?php
                echo "<h3>List of Canadian city regions</h3>";
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
                <?php if($section=='geoviz') echo "<label class='tooltip bottom' for='help-modal-control' aria-label='Help !'><i class='far fa-question-circle' title='help !'></i></label>"; ?>
                <label class='tooltip bottom' aria-label='Homepage'><a href="/<?php echo $language; ?>"><i class='fas fa-home' title='Homepage !'></i></a></label>
                <label class='tooltip bottom top-search' aria-label='Search'><i class="fas fa-search"></i></label>
                <span class="top-lang-container hidden-md hidden-lg">
                        <span class = "lang-ctrl"><a href="/fr/<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>">fr</a>&nbsp;/&nbsp;<a href="/en<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'en'?'cur-lang':''; ?>">en</a></span>
                </span>
            </span>
        </div>

        <div class = "col-sm-12 top-menu-container hidden-md hidden-lg">
            <span class="">
                <?php if($section=='geoviz') echo "<label class='tooltip bottom' for='help-modal-control' aria-label='Help !'><i class='far fa-question-circle' title='help !'></i></label>"; ?>
                <label class='tooltip bottom' aria-label='Homepage'><a href="/<?php echo $language; ?>"><i class='fas fa-home' title='Homepage !'></i></a></label>
                <label class='tooltip bottom top-search' aria-label='Search' ><i class="fas fa-search"></i></label>
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
                <input placeholder="Search for a city..." type="search" id="search-bar" class = "typeahead">
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
    <h3 class="section">Help to use geovisualisation platform</h3>

	<h4>1) Preliminary notes</h4>

    <p class="section">
		Data which are used in the Mobislicope come from Origin-Destination surveys (from 2009 to 2018).<br /><br />
		Only trips occurring <b>weekdays</b> (Monday-Friday) have been considered. <br /><br />
		Number and proportion of present population by district and hour have been estimated from survey data. They are therefore subject to a <b>statistical margin of error</b>.<br /><br />
    </p>

    <h4>2) Select a map</h4>

    <p class="section">
        In the left-hand menu, you can choose one indicator and the map representation, eitheir as a<button class ="part2">%</button>of the total population, or in number<button class="nb2">nb</button>or in flows<button class="flow2">✴</button><br /><br />
          <img src="/logos/accordeonmenu-en.png" alt="accordeonmenu-en" width="300"/><br /><br />
        To get informations about indicators and their composing groups, click <span class = "help" style = "font-size : 1.2em ;">Q</span> button on the right side.<br /><br /></br>

		With flows maps<button class="flow2">✴</button> you get number of non resident people at district level.
		With links (on mouseover), you can know their district of residence.<br />
		<img src="/logos/oursins.png" alt="oursins" width="400"/><br /><br/>
    </p>

    <h4>3) Map at different times of the day</h4>

    <p class="section">
        At the top of the screen, click play buton in the timeline to scroll through the hours.<br /><br />
          <img src="/logos/timeline-en.png" alt="timeline" /><br /><br />
    </p>

    <h4>4) Explore one specific district</h4>

    <p class="section">
		Select one district by clicking on the map and have a look on the chart at the lower right corner of your screen.<br /><br />
        <img src="/logos/select-secteur-en.png" alt="select-secteur" width="400"/><br /><br />
        With this  chart, you can follow daily evolution of selected indicator in the selected district.<br /><br />
        <img src="/logos/graph-simple-en.png" alt="graph-simple" width="400"/><br /><br />
        By clicling on "stacked" mode, you can see all groups of selected indicators.<br /><br />
        <img src="/logos/graph-empile-en.png" alt="graph-empile" width="400"/><br /><br />
        Colors on maps and charts have the same color code than the lef-hand indicator menu. In the above picture, public transportation are in blue, private motor vehicule are in pink and soft mobility in green. <br /><br />
    </p>

    <h4>5) Explore spatial segregation</h4>

    <p class="section">
        Ar the top right corner, the chart give information about daily evolution of spatial distribution of people in the whole region for the selected indictaors.<br /><br />
        <img src="/logos/graph-segreg-en.png" alt="select-secteur" width="400"/><br /><br />
        To get informations about the two available indexes (Duncan et Moran), click <span class = "help" style = "font-size : 1.2em ;">Q</span> button on the right side.<br /><br />
    </p>

    <h4>6) Explore another city region</h4>

    <p class="section">
        29 city regions are included in the actual version of the Mobiliscope(2020). To access another city region, use magnify tool <i class="fas fa-search"></i><br /><br />
    </p>

    <h4>To go further</h4>
    <p>
        By reading <a href="/en/info/methods">methods</a> pages, you can get more information about geovisualition platform, indicators and data which are currently used in the Mobiliscope.
    </p>
    <p>
        Enjoy !
    </p>
    <div class="close-help">
        <label for="help-modal-control" class="" > <i class="fas fa-times"></i>&nbsp;Close</label>
    </div>
  </div>

</div>



