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
                echo "<h3>French cities / regions";
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
                echo "<h3>Canadian cities / regions";
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
                <a data-tooltip="down 1000" aria-label="Home" class="main-title" href="/<?php echo $language; ?>">
                      <img class = "logo-title lg" src="/dist/assets/logo-title.svg"/>
                      <img class = "logo-title sm" src="/dist/assets/logo-mobile.svg"/>
                </a>
            </div>
        </div>


        <div class=" right-part">
            <span >

                <input placeholder="Search for a city, a municipality..." id="topbar-search"  class = "typeahead" type="search" name="search" autocomplete="off">
                <div class="search-input-btn"></div>
            </span>

            <div class="dropLang">
                <div onclick="myFunction()" ></div>
                <div id="myDropdown" class="dropdown-content">
                    <a class="langchoice" href="/fr<?php echo $curPage['pagePathNoLang'];?>" class="<?php echo $language == 'fr'?'cur-lang':''; ?>"></a>
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
      <input placeholder="Search for a city, a municipality..." id="topbar-search-mobile"  class = "typeahead" type="search" name="search">
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


    <h3 class="section">Help to use the Mobiliscope</h3>

    <div class="help-card-container">

       <h5><b>1) Preliminary notes</b></h5>

        <p class="section">
            Initial data come from French and Canadian Origin-Destination surveys (from 2009 to 2019).<br/><br/>

            Only trips occurring <b>weekdays</b> (Monday-Friday) have been considered. Number and proportion of present population aggregated by district and hour have been estimated from survey data. They are therefore subject to a <b>statistical margin of error</b>.<br/> <br/>

            55 city regions are included in the actual version of the Mobiliscope (v4.0).</br>
            To access city region, use magnify tool <img src="/dist/assets/search-black.svg" width="20px" height= "20px"/>. You can also select city region in the drop-down menu <img src="/dist/assets/menu-icon.svg" width="50px" height= "50px"/>.
        </p>

       <h5><b>2) Select a map</b></h5>

        <p class="section">
            In the left-hand menu, you can choose one indicator and the map representation, eitheir as a<button class ="part">%</button>of the total population, or in number<button class ="nb">nb</button> or in flows<button class="flow2" style = "font-size : 1em ;" >✴</button>.<br/>
            To get informations about indicators, click <span class = "helpAcc2"></span> button on the right side.<br/><br/>
              <img src="/dist/assets/accordeonmenu-en.png" alt="accordeonmenu" width="300"/><br/><br/>

            With flows maps <button class="flow2" style = "font-size : 1em ;" >✴</button> you get number of non-resident people at district level. With links (on mouseover), you can know their main district of residence. This mode is not available on touch screens.<br/><br/>
            <img src="/dist/assets/oursins-en.png" alt="oursins" width="600"/>

        </p>

        <h5><b>3) Change hours</b></h5>

        <p class="section">
            At the top of the screen, click play button in the timeline to scroll through the hours.<br/><br/>
              <img src="/dist/assets/timeline-en.png" alt="timeline" />
        </p>

        <h5><b>4) Explore a specific district</b></h5>

        <p class="section">
            Select one district by clicking on the map and have a look on the chart at the top right corner of your screen.<br/><br/>
            <img src="/dist/assets/select-secteur-en.png" alt="select-secteur" width="600"/><br/><br/>
            With this chart, you can follow daily evolution in the selected district (for the selected indicator).<br/><br/>
            <img src="/dist/assets/graph-simple-en.png" alt="graph-simple" width="500"/><br/><br/>
            By clicking on 'stacked' mode, you can see all groups of the selected indicator.<br/><br/>
            <img src="/dist/assets/graph-empile-en.png" alt="graph-empile" width="500"/><br/><br/>
            Colors on maps and charts have the same color code than the left-hand indicator menu. In the above picture, public transportation are in blue, private motor vehicule are in pink and soft mobility in green.
        </p>

        <h5><b>5) Explore spatial segregation</b></h5>

        <p class="section">
            At the lower right corner, the chart give information about segregation level in the whole region for the selected indicator.<br/><br/>
            <img src="/dist/assets/graph-segreg-en.png" alt="select-secteur" width="500"/><br/><br/>
            To get informations about the two available indexes (Duncan et Moran), click <span class = "helpAcc2" style = "font-size : 1em ;"></span> button on the right side.
        </p>

        <h5><b>6) Change map background</b></h5>

        <p class="section">
            <!-- <span class="leaflet-control-layers-toggle" display="inline !important"></span> -->Two OpenStreetMap layers can be displayed: a simple information layer and a more detailed one (by clicking in the <img src="/src/styles/images/layers2.png" width="20px" height= "20px"/>) :<br/><br/>
            <img src="/dist/assets/osm-simple-en.png" alt="osm-simple" width="400" margin-right="5"/><img src="/dist/assets/osm-detail-en.png" alt="osm-simple" width="400"/><br/><br/>

            In French city regions, you can also display the layer of 'Poverty Areas' via the layers menu <img src="/src/styles/images/layers2.png" width="20px" height= "20px"/>. <br/><br/>
            <img src="/dist/assets/qpv-en.png" alt="osm-simple" width="400"/><br/><br/>
        </p>

        <h5><b>7) Download data</b></h5>

        <p class="section">
            By clicking on the <img src="/dist/assets/download.svg" width="20px" height="20px"/> button above the central map, you can download data agregated data by district and by hour. By clicking on the <img src="/dist/assets/download.svg" width="20px" height="20px"/></span> button next to the bottom graph, you can also download segregation data (Duncan's or Moran's index) in the whole region over the 24 hours period.
        </p>

        <h5><b>To go further</b></h5>
        <p class="section">
             To get more information about geovisualition platform, indicators and data which are currently used and displayed in the Mobiliscope, you can read <a href="/en/info/methods/data">Data</a>, <a href="/en/info/methods/indicators">Indicators</a> or <a href="/en/info/methods/geovizualisation">Geovizualisation</a> pages.
        </p>
        <p class="section">
            Enjoy!
        </p>

        <div class="close-help">
            <label for="help-modal-control" class="" > <i class="fas fa-times"></i><b>&nbsp;Close help window</b></label>
        </div>
   </div>
  </div>
</div>
