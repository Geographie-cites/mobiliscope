<?php
  $section = 'home';
  include ('./settings.php');
?>
<!DOCTYPE html>
<meta charset="utf-8">

<head>

	<title><?php echo $curPage['pageTitle']; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $curPage['pageMeta']; ?>" />
	<meta name="author" content="Julie Vallée, Constance Lecomte & Aurélie Douet">


   <script src="/dist/index.js"></script>
	<link rel="icon" href="/dist/assets/favicon.png">

<meta property="og:locale" content="en_EN" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $curPage['pageTitle']; ?>" />
<meta property="og:description" content="<?php echo $curPage['pageMeta']; ?><?php echo $curPage['pageMeta']; ?>" />
<meta property="og:url" content="https://mobiliscope.cnrs.fr/en" />
<meta property="og:site_name" content="Mobiliscope" />
<meta property="og:image" content="https://mobiliscope.cnrs.fr/dist/assets/mobiliscope-fb.png" />
<meta property="og:image:secure_url" content="https://mobiliscope.cnrs.fr/dist/assets/mobiliscope-fb.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="<?php echo $curPage['pageTitle']; ?>" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $curPage['pageTitle']; ?>" />
<meta name="twitter:description" content="<?php echo $curPage['pageMeta']; ?>" />
<meta name="twitter:image" content="https://mobiliscope.cnrs.fr/dist/assets/mobiliscope-tw.png" />

<!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://analyseweb.huma-num.fr/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '325']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
</head>

<body lang="<?php echo $language; ?>">

  <div id="container">

    <?php include ('./topbar.php'); ?>

    <div class="row sectionHeader section" >
      <div class="text-block">
        <div class="inner">
          <img src="/dist/assets/cnrs.png" alt="cnrs" width="70"/>
          <div class="logo"><h1>CITIES AROUND THE CLOCK</h1>
            <div >
              <?php if($section == 'geoviz'){ ?>
                <span class="top-city-name" id="cityName"><i class="fas fa-map-marker-alt"></i>&nbsp;<?php echo $curPage['pageName']?></span>
              <?php } ?>
              <span class = "top-search-container">
                <input placeholder="Search for a city, a municipality..." type="search" id="search-box" class = "typeahead" autocomplete="off">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home container">

      <div class="sectionTitle section" >

        <div class="row left-home-img">
          <h2 class="section-title first-title">MAPPING HOURLY DYNAMICS ACCORDING TO POPULATIONS</br>AND THEIR DAILY MOBILITY</h2>
          <div class="col-sm-12 col-md-6"></div>

          <div class="col-sm-12 col-md-6 ">
            <section class="right-side">
              <h4>The inhabitants of a city are not immobile: their daily movements cause changes in the social and spatial organization of cities. </br>
                </br>
                The Mobiliscope is a geovisualization tool that shows the evolution of the population present in French and Canadian cities during the 24 hours of the day. It thus makes it possible to study the changes in the social composition of neighborhoods over the hours. </br>
              </h4>
              <div class="row hidden-sm">
                <button class="style-button mb50"><a href="/en/info/about/summary">Learn more</a></button>
                <div class = "row hidden-sm hidden-lg">
                  <div class="sectionSpacerSmall"></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="row hidden-md hidden-lg left-home-img-mobile">
          <button class="style-button mt50"><a href="/fr/info/about/summary">Learn more</a> </button>
        </div>

      </div>

      <div class="row sectionTitle section hidden-sm" >
        <div class="section-container">
          <div>
            <h2 class="section-title">A GEOVIZUALIZATION TOOL RESULTING FROM LARGE PUBLIC TRANSPORTATION SURVEYS</h2>
            <div class="img-section-lg"><img src="/dist/assets/bandeau-violet-en-v4.png" /></div>
            <p>
              Stemming from major public transportation surveys, the data on daily trips were edited and analyzed by a public research laboratory.
              From this work was born the Mobiliscope which allows everyone to explore the spatial distribution of populations and the social segregation not only at night but also during the day.
            </p>
          </div>
          <button class="section-link">  <a href="/en/info/methods/data">Discover the data</a></button>
        </div>
      </div>

      <div class="row sectionTitle section hidden-lg hidden-md " >
        <div class="section-container">
          <div>
            <h2 class="section-title">A GEOVIZUALIZATION TOOL RESULTING FROM LARGE PUBLIC TRANSPORTATION SURVEYS</h2>
            <div class="img-section"><span><img src="/dist/assets/footprint-en-v4.png" /></span></div>
            <div class="img-section"><span><img src="/dist/assets/people-en-v4.png" /></span></div>
            <div class="img-section"><span><img src="/dist/assets/location-en-v4.png" /></span></div>
            <p>
              Stemming from major public surveys, the data on daily trips were edited and analyzed by a public research laboratory.
              From this work was born the Mobiliscope which allows everyone to explore the spatial distribution of populations and the social segregation not only at night but also during the day. </p>
          </div>
          <button class="section-link">  <a href="/en/info/methods/data">Discover the data</a></button>
        </div>
      </div>

      <!-- <div class="row sectionTitle section">
        <div class="section-container whitebg fullwidth-section">
          <h2 class="section-title">HOW IT WORKS?</h2>
          <div class="video-container">
            <div class="responsive-video-container">
              <iframe src="https://player.vimeo.com/video/58880979" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div> -->

      <div class = "row section sectionTitle HomeMap">
        <h2 class="section-title">Choose a city</h2>
        <div>
          <div id="loader">
            <div class="spinner tertiary"></div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6"  style="padding:0;">
          <div id="map-container1" class="sectionMap"></div>
          <h2 class="map-title">in France</h2>
        </div>
        <div class="col-sm-12 col-md-6" style="padding:0;">
          <div class = "row hidden-sm hidden-md hidden-lg">
            <div class="sectionSpacerSmall">
            </div>
          </div>
          <div id="map-container2" class="sectionMap"></div>
          <h2 class="map-title">... or in Quebec, Canada</h2>
        </div>
      </div>

      <div class="section sectionTitle">
        <div class="section-container greybg fullwidth-section">
          <div class="card-container">
            <h2 class="section-title">THE MOBILISCOPE SEEN BY OUR USERS</h2>

            <?php
            $section = 'home';
            include ('./bloc-temoignages.php');
            ?>


          </div>
        </div>
      </div>

      <div class="row">
        <div class = "sectionCitiesList ">
          <div class="section-container whitebg fullwidth-section">
            <h2 class="section-title">Mobiliscope cities / regions</h2>
            <h3 class="section-subtitle">FRANCE</h3>


            <div class = "row">
              <?php
              $len = sizeof($frenchcities);
              $numpercol = (int) ($len / 4) + 1;


              for($i = 0; $i < 4; $i++){
                echo "<div class='col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-5 col-md-5 col-lg-offset-0 col-lg-3'><section>";
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

            <div class="sectionSpacerSmallMobile"></div>

            <h3 class="section-subtitle">QUEBEC, CANADA</h3>
            <div class = "row">
            <?php
            $len = sizeof($cancities);
            $numpercol = (int) ($len / 4) + 1;


            for($i = 0; $i < 3; $i++){
              echo "<div class='col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-4'><section>";
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
          </div>
        </div>

    </div>



    <?php include('./footer.php'); ?>



    <script type="text/javascript" src="/dist/scripts/typeahead.bundle.min.js"></script>
    <script type="text/javascript" src="/dist/scripts/slideshow.js"></script>
    <script type="text/javascript" src="/dist/scripts/menu.js"></script>
    <script>

    function minisculeED(enq) {
      if(enq.includes(" ")){
        var str = enq.split(" ");
        var word1 = str[0].toLowerCase();
        var word2 = str[1].toLowerCase();
        return newStr = word1 + "-" + word2 ;

      } else{

          return enq.toLowerCase() ;
      }

    }

    function format(nbr) {
          var nombre = ''+nbr;
          var retour = '';
          var count=0;
          for(var i=nombre.length-1 ; i>=0 ; i--)
          {
            if(count!=0 && count % 3 == 0)
            retour = nombre[i]+','+retour ;
            else
            retour = nombre[i]+retour ;
            count++;
          }
          return retour;
    }

    function printMap1(){

      var width = 1066,
      height = 830;

      var projection =  d3.geo.mercator()
      .center([1.85, 46.3])
      .scale(3000)
      .translate([width / 2, height / 2]);

      var path = d3.geo.path()
      .projection(projection);

      var svg = d3.select("#map-container1").append("svg")
      .attr("id", "svg")
      .attr("width", width/1.2)
      .attr("height", height/1.2)
      .classed("svg-container", true)
      .attr("viewBox", "180 0 700 780")
      .classed("svg-content-responsive", true);

      var europe = svg.append("g");
      var cadre = svg.append("g");
      var fdGuy = svg.append("g");
      var dom = svg.append("g");
      var region = svg.append("g");
      var ed = svg.append("g");
      var edPtBis = svg.append("g");
      var edPt = svg.append("g");
      var villes = svg.append("g");

      //Pattern (hachures)
      var pattern = svg.append("defs")
      .append("pattern")
        .attr({ id:"hash", width:"5", height:"5", patternUnits:"userSpaceOnUse", patternTransform:"rotate(45)"})
      .append("rect")
        .attr({ width:"2", height:"10", transform:"translate(0,0)", fill:"#e29424" });

      var infoBulle = d3.select("#map-container1").append("div")
      .attr("class", "infoBulle")
      .style("opacity", 0);

      europe.selectAll("path")
      .data(europeJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", " #edecec")
      .style("stroke", "white")
      .style("stroke-width", 0.2);

      cadre.selectAll("path")
      .data(cadreJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "#dff2ff")
      .style("stroke", "white")
      .style("stroke-width", 1);

      fdGuy.selectAll("path")
      .data(fdGuyJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "#edecec")
      .style("stroke", "white")
      .style("stroke-width", 0.2);

      region.selectAll("path")
      .data(regJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", " #bcc5d5")
      .style("stroke", "white")
      .style("stroke-width", 0.4);

      dom.selectAll("path")
      .data(domJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "#bcc5d5")
      .style("stroke", "white")
      .style("stroke-width", 0.4);

      ed.selectAll("path")
      .data(edJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "url(#hash)")
      .style("fill-opacity", 1);

      edPtBis.selectAll(".centroid")
      .data(edptJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 8 + "px")
      .style("fill", "none")
      .style("stroke", "#e29424")
      .style("stroke-width", 4);

      edPt.selectAll(".centroid")
      .data(edptJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 8 + "px")
      .style("fill", "#e29424")
      .style("stroke", "white")
      .style("stroke-width", 2)
      .on("mouseover", function(d) {
        d3.select(this).attr("r", 10 + "px");
        d3.select(this).style({"cursor" : "pointer"}) ;
        infoBulle.transition()
        .duration(100)
        .style("opacity", .8);
        infoBulle.html("<span style = 'font-family: OpenSans, sans-serif; font-size: 1.5em; line-height: 1em;'>"
        + d.properties.NAME_ED + "</span><br/>" + "(" + d.properties.DATE_ED + ")<br/>"
        + format(d.properties.nbrespondent) + " respondents")
        .style("top", (d3.event.clientY - 30) + "px")
        .style("position", "fixed")
        .style("background-color", "white")
        .style("display", "block")
        .style("width", "auto")
        //.style("left", (d3.event.layerX - d3.select(".infoBulle").node().getBoundingClientRect().width) - 90 + "px");
        .style("left", (d3.event.clientX + 30) + "px");
      })
      .on("mouseout", function(d) {
        d3.select(this).attr("r", 8 + "px");
        infoBulle.transition()
        .duration(500)
        .style("opacity", 0 );
      })
      .on("click", function(d){
        var enq = d.properties.enquete;
        document.location.href = "/en/geoviz/" + minisculeED(enq);
      });

      villes.selectAll(".centroid")
      .data(villeseurJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 2 + "px")
      .style("stroke", "grey")
      .style("stroke-width", 4);

      villes.selectAll("g")
      .data(villeseurJson.features)
      .enter()
      .append("text")
      .attr("class", "labels")
      .attr("dy", -6)
      .style("font-size", 14 + "px")
      .text(function(d) { return d.properties.NAME_EN; }) ;

      var node = villes.selectAll("g.node")
      .data(villeseurJson.features)
      .enter()
      .append("g")
      .attr("class", "node")

      node.append("text")
      .attr("class", "labels")
      .attr("dy", -6)
      .style("font-size", 20 + "px")
      .attr("fill", "grey")
      .text(function(d) { return d.properties.NAME_EN; })
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; });

      $('#loader').hide();

    }

    function printMap2(){

      var width = 1060,
      height = 730;

      var projection =  d3.geo.mercator()
      .center([-71.85, 45])
      .scale(3500)
      .translate([width / 1.8, height / 1.5]);

      var path = d3.geo.path()
      .projection(projection);

      var svg = d3.select("#map-container2").append("svg")
      .attr("id", "svg")
      .attr("width", width/1.2)
      .attr("height", height/1.2)
      .classed("svg-container", true)
      .attr("viewBox", "100 0 800 780")
      .classed("svg-content-responsive", true);

      var usa = svg.append("g");
      var canada = svg.append("g");
      var eod = svg.append("g");
      var eodPtBis = svg.append("g");
      var eodPt = svg.append("g");
      var villes = svg.append("g");

      var infoBulle2 = d3.select("#map-container2").append("div")
      .attr("class", "infoBulle2")
      .style("opacity", 0);

      // var source = d3.select("#map-container2").append("div")
      //  	.html("<h6>Source : Statistics Canada</h6>");

      usa.selectAll("path")
      .data(usaJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", " #edecec")
      .style("stroke", "white")
      .style("stroke-width", 0.4);

      canada.selectAll("path")
      .data(canadaJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", " #bcc5d5")
      .style("stroke", "white")
      .style("stroke-width", 0.4);

      eod.selectAll("path")
      .data(eodJson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "url(#hash)")
      .style("fill-opacity", 1);

      eodPtBis.selectAll(".centroid")
      .data(eodptJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 8 + "px")
      .style("fill", "none")
      .style("stroke", "#e29424")
      .style("stroke-width", 4);

      eodPt.selectAll(".centroid")
      .data(eodptJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 8 + "px")
      .style("fill", "#e29424")
      .style("stroke", "white")
      .style("stroke-width", 2)
      .on("mouseover", function(d) {
        d3.select(this).attr("r", 10 + "px");
        d3.select(this).style({"cursor" : "pointer"}) ;
        infoBulle2.transition()
        .duration(100)
        .style("opacity", .8);
        infoBulle2.html("<span style = 'font-family: OpenSans, sans-serif; font-size: 1.5em; line-height: 1em;'>"
        + d.properties.NAME_ED + "</span><br/>" + "(" + d.properties.DATE_ED + ")<br/>"
        + format(d.properties.nbrespondent) + " respondents")
        .style("top", (d3.event.clientY - 30) + "px")
        .style("position", "fixed")
        .style("background-color", "white")
        .style("display", "block")
        .style("width", "auto")
        //.style("left", (d3.event.layerX - d3.select(".infoBulle2").node().getBoundingClientRect().width) - 90 + "px");
        .style("left", (d3.event.clientX + 30) + "px");
      })
      .on("mouseout", function(d) {
        d3.select(this).attr("r", 8 + "px");
        infoBulle2.transition()
        .duration(500)
        .style("opacity", 0 );
      })
      .on("click", function(d){
        var enq = d.properties.enquete;
        document.location.href = "/en/geoviz/" + minisculeED(enq);
      });

      villes.selectAll(".centroid")
      .data(villesusaJson.features)
      .enter()
      .append("circle")
      .attr("class", "centroid")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("r", 2 + "px")
      .style("stroke", "grey")
      .style("stroke-width", 4);

      villes.selectAll("g")
      .data(villesusaJson.features)
      .enter()
      .append("text")
      .attr("class", "labels")
      .attr("dy", -6)
      .style("font-size", 14 + "px")
      .text(function(d) { return d.properties.enquete ; }) ;

      var node = villes.selectAll("g.node")
      .data(villesusaJson.features)
      .enter()
      .append("g")
      .attr("class", "node")

      node.append("text")
      .attr("class", "labels")
      .attr("dy", -6)
      .style("font-size", 20 + "px")
      .attr("fill", "grey")
      .text(function(d) { return d.properties.enquete ; })
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; });

      $('#loader').hide();

    }

  </script>


</body>

</html>
