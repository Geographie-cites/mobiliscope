<!-- TOP BAR -->
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
                <h3>Canadian cities / regions</h3>
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
                <h3>Latin american cities / regions</h3>
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
    <!-- endfull menu-->

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
                <div id="myDropdown" class="dropdown-content">
                    <a class="langchoice" href="/fr<?php echo $curPage['pagePathNoLang'];?>"></a>
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
      <input placeholder="Search for a city, a municipality..." id="topbar-search-mobile"  class = "typeahead" type="search" name="search">
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

        <h3 class="section">Share this view</h3>
        <div class="share-card-container">


            <label class="share-container" for="share-mail" id="share-mail">
                <img class="ask" src="/dist/assets/mail.svg" /><span>Share by email</span>
            </label>

            <label class="share-container" for="share-tw" id="share-tw">
                <img class="ask"   src="/dist/assets/twitter.svg" /><span>Share on Twitter</span>
            </label>

            <label class="share-container" for="share-fb" id="share-fb">
                <img class="ask"   src="/dist/assets/facebook.svg" /><span>Share on Facebook</span>
            </label>
        <!--
            <label class="share-container" for="share-lk" id="share-lk" >
                <img class="ask"   src="/dist/assets/lk.svg" /><span>Share on LinkedIn</span>
            </label>
        -->

            <label class="share-container" for="share-link" id="share-link" >
                <img class="ask"   src="/dist/assets/link.svg" /><span>Copy page url</span>
            </label>

        </div>
        <div class="close-share">
            <label for="share-modal-control" class="" ><i class="fas fa-times"></i><b>&nbsp;Close</b></label>
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

        <h3 class="section">Help to use the Mobiliscope</h3>
    </div>
    <div class="help-card-container">

       <h5><b>1) Preliminary notes</b></h5>

        <p class="section">
            Initial data come from Origin-Destination surveys (from 2009 to 2019). Once transformed, these data have been used to estimate the ambient population in every district <b>at exact hours</b> (04.00, 05.00 etc.) during a <b>typical weekday</b> (Monday-Friday).<br/><br/>

            Number and proportion of ambient population aggregated by district and hour are estimation : they are subject to <b>statistical margins of error</b>.<br/><br/>

            <b>58 city regions</b> (spread over 5 countries) are included in the actual version of the Mobiliscope (v4.2).</br>
            To choose the city region you want to observe, please selection the city region in the drop-down menu <img src="/dist/assets/menu-icon.svg" width="50px" height= "50px"/> or use the magnify tool <img src="/dist/assets/search-black.svg" width="20px" height= "20px"/> from a search by name.
        </p>

       <h5><b>2) Select a map</b></h5>

        <p class="section">
            In the left-hand menu, you can choose indicator (classified into broad families such as demographic or social profile) and its map representation - eitheir as a<button class ="part">%</button>of the total population, or number<button class ="nb">nb</button> or flows<button class="flow2" style = "font-size : 1em ;" >✴</button>.<br/>
            To get informations about indicators, click <span class = "helpAcc2"></span> button on the right side.<br/><br/>
              <img src="/dist/assets/accordeonmenu-en.png" alt="accordeonmenu" width="300"/><br/><br/>

            With flows maps <button class="flow2" style = "font-size : 1em ;" >✴</button> you get number of non-resident people at district level. With links (displayed on mouseover), you can see their district of residence (not available on touch screens).<br/><br/>
            <img src="/dist/assets/oursins-en.png" alt="oursins" width="600"/>

        </p>

        <h5><b>3) Change hours</b></h5>

        <p class="section">
            At the top of the screen, click play button in the timeline to animate map and graphics according to the 24 hours of the day.<br/><br/>
              <img src="/dist/assets/timeline-en.png" alt="timeline" />
        </p>

        <h5><b>4) Explore a specific district</b></h5>

        <p class="section">
            
            Select one district by clicking on the map.<br/><br/>
            <img src="/dist/assets/select-secteur-en.png" alt="select-secteur" width="600"/><br/><br/>

            Have a look at the chart entitled <b>"In the selected district"</b> where you can follow hourly variations of ambient population (for each group of the selected indicator) in the district under consideration. Colours have the same colour code than in the indicator menu. Here, last transportation mode used by present population in the selected district was coloured in blue for public transportation, in pink for private motor vehicle and in green for soft mobility.<br/><br/>
            <img src="/dist/assets/graph-empile-en.png" alt="graph-empile" width="500"/><br/><br/>
            
            By clicking on 'Unique' mode, you can limit representation of the hourly variations for only one subgroup&nbsp;:<br/><br/>
             <img src="/dist/assets/graph-simple-en.png" alt="graph-simple" width="500"/><br/><br/>
        </p>

        <h5><b>5) Explore spatial segregation</b></h5>

        <p class="section">
            The block of graphs entitled <b>"In the whole region"</b> displays two segregation indices computed from every district of the region for each hour of the day.<br/><br/>

            <b>Duncan Index</b> (also called Dissimilarity Index) measures the evenness with which a specific population subgroup is distributed across districts in a whole region. This index score can be interpreted as the percentage of people belonging to the subgroup under consideration that would have to move to achieve an even distribution in the whole region. <br/><br/>

            <img src="/dist/assets/duncan-en.png" alt="duncan" width="500"/> <br/><br/>
            The example above displays, hour by hour, the Duncan Index (Paris region - 2010) for to ambient population residing in or outside 'Poverty Areas'. Duncan index range from 0 to 1. A Duncan Segregation Index value of 0 occurs when the share of ambient population residing in 'Poverty Areas' in every district is the same as the share of people residing in 'Poverty Areas' in the whole region. Conversely, a Duncan Segregation Index value of 1 occurs when each district gathers only one of the two population subgroups. In our example, Duncan value is found to be higher between 8pm and 7am, indicating a stronger segregation at night (further away from an even distribution): this corresponds to the hours when most of the individuals are at home or in their district of residence. The value of the index decreases during the day: because of their mobility, people residing in and outside of 'Poverty Areas' are more mixed (situation closer to even distribution).<br/><br/>

            By clicking on the "Moran" button, a second graph is displayed with the <b>Moran index</b> which measures the similarity in the profiles of the ambient population for neighbouring districts. <br/><br/>

            <img src="/dist/assets/moran-en.png" alt="moran" width="500"/><br/><br/>
            The Moran index values vary from -1 to +1: the closer its value is to 1, the more similar the spatially close districts are (with same distribution of the subgroup under consideration); the closer its value is to -1, the more dissimilar the spatially close districts are (with different distribution of the subgroup under consideration). When the Moran index value is 0, no similarity/dissimilarity pattern between neighbouring districts appears in the whole region. In our example, the Moran index values are positive and increase during the day: it means that spatial blocks of similar districts (according to the proportion of inhabitants of 'Poverty Areas') are formed during the day. This result does not contradict Duncan's index but complements it: people residing in 'Poverty Areas' visit during the day other districts than their residential district but tend to visit districts close to each other. And the same is true for people residing outside 'Poverty Areas'<br/><br/>

            It should be noted that in the case of an indicator subdivided into two groups (eg. male/female or people residing in/outside 'Poverty Areas'), Duncan and Moran values are the same for the two groups and therefore the curves are overlapping.<br/><br/>

            For more information on the two indices used (Duncan et Moran), click <span class = "helpAcc2" style = "font-size : 1em ;"></span> help button next to the index name.<br/><br/>
        </p>


        <h5><b>6) Change map backgrounds</b></h5>

        <p class="section">
            By clicking on the <img src="/dist/assets/layers2.png" width="20px" height= "20px"/> button in the central map, several layers can be displayed to make it easier to find your way around the interactive map: a simple base map (default layer), a more detailed one and aerial photos.<br/><br/>

            <img src="/dist/assets/osm-simple-en.png" alt="osm-simple" width="360" margin-right="5"/>
            <img src="/dist/assets/osm-detail-en.png" alt="osm-setail" width="360" margin-right="5"/>
            <img src="/dist/assets/satellite-en.png" alt="satellite" width="360"/>
            <br/><br/>

            According to the city region under consideration, some other layers can also be displayed such as 'Poverty Areas' in French cities or urban/peripheral rings in Latin American cities.<br/><br/>
            <img src="/dist/assets/qpv-en.png" alt="osm-simple" width="400"/>
            <img src="/dist/assets/couronne-en.png" alt="couronne" width="400"/>
            <br/><br/>
        </p>

        <h5><b>7) Download data</b></h5>

        <p class="section">
            Data displayed in the Mobiliscope are under <b>open license</b> (ODbL). Mobiliscope data are reusable as they remain under open license and that the sources are mentioned.<br/><br/>

            By clicking on the <img src="/dist/assets/download.svg" width="20px" height="20px"/> button above the central map, you can download data aggregated data by district and by hour. By clicking on the <img src="/dist/assets/download.svg" width="20px" height="20px"/></span> button in the bottom graph, you can also download data about hourly segregation values (Duncan's or Moran's index) computed for the whole region over the 24 hours period.
        </p>

        <h5><b>To go further</b></h5>
        <p class="section">
             To get more information about indicators and data which are currently used and displayed in the Mobiliscope, you can read <a href="/en/info/methods/data">Data</a>, <a href="/en/info/methods/indicators">Indicators</a> or <a href="/en/info/methods/geovizualisation">Geovizualisation</a> pages.
        </p>
        <p class="section">
            Enjoy!
        </p>

   </div>
  </div>
</div>
