<?php
$section = 'home';
include ('./settings.php');
//phpinfo();
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

<meta property="og:locale" content="fr_FR" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $curPage['pageTitle']; ?>" />
<meta property="og:description" content="<?php echo $curPage['pageMeta']; ?><?php echo $curPage['pageMeta']; ?>" />
<meta property="og:url" content="https://mobiliscope.cnrs.fr" />
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
          <div class="logo"><h1>LA VILLE À TOUTE HEURE</h1>
            <div >
              <?php if($section == 'geoviz'){ ?>
                <span class="top-city-name" id="cityName"><i class="fas fa-map-marker-alt"></i>&nbsp;<?php echo $curPage['pageName']?></span>
              <?php } ?>
              <span class = "top-search-container">
                <input placeholder="Rechercher un nom de ville, de commune..." type="search" id="search-box" class = "typeahead"  autocomplete="off" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home container">

      <div class="sectionTitle section" >

        <div class="row left-home-img">
          <h2 class="section-title first-title">LES POPULATIONS PRÉSENTES ET LEURS MOBILITÉS </br> AU COURS DE LA JOURNÉE</h2>
          <div class="col-sm-12 col-md-6"></div>

          <div class="col-sm-12 col-md-6 ">
            <section class="right-side">
              <h4>Les habitants d'une ville ne sont pas immobiles. Leurs déplacements quotidiens occasionnent des modifications dans l'organisation sociale et spatiale des villes.</br>
                </br>
                Le Mobiliscope est un outil de géovisualisation qui donne à voir l'évolution de la population présente dans les villes françaises et canadiennes au cours des 24 heures de la journée. Il permet ainsi d'étudier les changements de composition sociale des quartiers au fil des heures.</br>
              </h4>
              <div class="row hidden-sm">
                <button class="style-button mb50"><a href="/fr/info/about/summary">En savoir plus</a></button>
              </div>
            </section>
          </div>
        </div>

        <div class="row hidden-md hidden-lg left-home-img-mobile">
          <button class="style-button mt50"><a href="/fr/info/about/summary">En savoir plus</a></button>
        </div>

      </div>
    <div class="row sectionTitle section hidden-sm" >
      <div class="section-container">
        <div>
          <h2 class="section-title">UN OUTIL DE GÉOVISUALISATION ISSU DE GRANDES ENQUÊTES PUBLIQUES</h2>
          <div class="img-section-lg"><img src="/dist/assets/bandeau-violet-v4.png" /></div>
          <p>
            Issues de grandes enquêtes publiques, les données sur les déplacements quotidiens ont été mises en forme et analysées par un laboratoire public de recherche.</br>
            De ce travail est né le Mobiliscope qui permet d'explorer les villes et la répartition spatiale des populations au cours de la journée.
          </p>
        </div>
        <button class="section-link">  <a href="/fr/info/methods/data">Découvrir les données</a></button>
      </div>
    </div>

    <div class="row sectionTitle section hidden-lg hidden-md " >
      <div class="section-container">
        <div>
          <h2 class="section-title">UN OUTIL DE GÉOVISUALISATION ISSU DE GRANDES ENQUÊTES PUBLIQUES</h2>
          <div class="img-section"><span><img src="/dist/assets/footprint-v4.png" /></span></div>
          <div class="img-section"><span><img src="/dist/assets/people-v4.png" /></span></div>
          <div class="img-section"><span><img src="/dist/assets/location-v4.png" /></span></div>
          <p>
            Issues de grandes enquêtes publiques, les données sur les déplacements quotidiens ont été mises en forme et analysées par un laboratoire public de recherche.</br>
            De ce travail est né le Mobiliscope qui permet d'explorer les villes et la répartition spatiale des populations au cours de la journée.
        </p>
        </div>
        <button class="section-link">  <a href="/fr/info/methods/data">Découvrir les données</a></button>
      </div>
    </div>

<!--     <div class="row sectionTitle section">
      <div class="section-container whitebg fullwidth-section">
        <h2 class="section-title">COMMENT ÇA MARCHE?</h2>
        <div class="video-container">
          <div class="responsive-video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PUwmA3Q0_OE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div> -->



    <div class = "row section sectionTitle HomeMap">
    	<h2 class="section-title">Choisissez la ville à explorer</h2>
      <div>
        <div id="loader">
          <div class="spinner tertiary"></div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6"  style="padding:0;">
        <div id="map-container1" class="sectionMap"></div>
        <h2 class="map-title">en France</h2>
      </div>


      <div class="col-sm-12 col-md-6" style="padding:0;">


        <div id="map-container2" class="sectionMap"></div>
        <h2 class="map-title">au Québec, Canada</h2>

      </div>
    </div>

    <div class="section sectionTitle">
      <div class="section-container greybg fullwidth-section">
        <div class="card-container">
          <h2 class="section-title">LE MOBILISCOPE VU PAR NOS UTILISATEURS.RICES</h2>

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
          <h2 class="section-title">Les villes/régions du Mobiliscope</h2>
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

          <h3 class="section-subtitle">QUÉBEC (CANADA)</h3>
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
        retour = nombre[i]+' '+retour ;
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

    //Pattern (hachures)
    var pattern = svg.append("defs")
      .append("pattern")
        .attr({ id:"hash", width:"5", height:"5", patternUnits:"userSpaceOnUse", patternTransform:"rotate(45)"})
      .append("rect")
        .attr({ width:"2", height:"10", transform:"translate(0,0)", fill:"#e29424" });

    var europe = svg.append("g");
    var cadre = svg.append("g");
    var fdGuy = svg.append("g");
    var dom = svg.append("g");
    var region = svg.append("g");
    var ed = svg.append("g");
    var edPtBis = svg.append("g");
    var edPt = svg.append("g");
    var villes = svg.append("g");

    var infoBulle = d3.select("#map-container1").append("div")
    .attr("class", "infoBulle")
    .style("opacity", 0);
    //position infobulle selon navigateur
    var ua = navigator.userAgent.toLowerCase();
    if (ua.includes('chrome')) {
      myparam = 270;
    } else {
      myparam = 0 ;
    };

    // var source = d3.select("#map-container1").append("div")
    //  	.html("<h6>Source : CEREMA</h6>");

    europe.selectAll("path")
    .data(europeJson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "#edecec")
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
    .style("fill", "#bcc5d5")
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
    //.style("fill", "#e29424")
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
      + format(d.properties.nbrespondent) + " enquêtés")
      .style("top", (d3.event.clientY - 30) + "px")
      .style("position", "fixed")
      .style("background-color", "white")
      .style("display", "block")
      .style("width", "auto")
      //.style("left", (d3.event.layerX - d3.select(".infoBulle").node().getBoundingClientRect().width) - 90 + myparam + "px");
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
      document.location.href = "/fr/geoviz/" + minisculeED(enq);
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
    .text(function(d) { return d.properties.NAME_FR; }) ;

    var node = villes.selectAll("g.node")
    .data(villeseurJson.features)
    .enter()
    .append("g")
    .attr("class", "node");

    node.append("text")
    .attr("class", "labels")
    .attr("dy", -6)
    .style("font-size", 20 + "px")
    .attr("fill", "grey")
    .text(function(d) { return d.properties.NAME_FR; })
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

    //position infobulle selon navigateur
    var ua = navigator.userAgent.toLowerCase();
    if (ua.includes('chrome')) {
      myparam2 = 850;
    } else {
      myparam2 = 0 ;
    };

    // var source = d3.select("#map-container2").append("div")
    //  	.html("<h6>Source : Statistics Canada</h6>");

    usa.selectAll("path")
    .data(usaJson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "#edecec")
    .style("stroke", "white")
    .style("stroke-width", 0.4);

    canada.selectAll("path")
    .data(canadaJson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "#bcc5d5")
    .style("stroke", "white")
    .style("stroke-width", 0.4);

    eod.selectAll("path")
    .data(eodJson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "url(#hash)")
    //.style("fill", "#e29424")
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
      + format(d.properties.nbrespondent) + " enquêtés")
      .style("top", (d3.event.clientY - 30) + "px")
      .style("position", "fixed")
      .style("background-color", "white")
      .style("display", "block")
      .style("width", "auto")
      //.style("left", (d3.event.layerX - d3.select(".infoBulle2").node().getBoundingClientRect().width) - 90 + myparam2 + "px");
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
      document.location.href = "/fr/geoviz/" + minisculeED(enq);
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
