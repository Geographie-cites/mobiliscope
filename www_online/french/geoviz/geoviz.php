<?php
$section = 'geoviz';
include ('../settings.php');
?>
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
	<title><?php echo $curPage['pageTitle']; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $curPage['pageMeta']; ?>" />
	<meta name="author" content="Aurélie Douet & Constance Lecomte">

<script type="text/javascript" charset="utf-8" src="/dist/scripts/jquery-3.6.0.js" ></script>

<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-selection.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-transition.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-zoom.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-drag.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-array.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-geo.v1.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://unpkg.com/d3-geo-scale-bar@0.2.0/build/d3-geo-scale-bar.min.js"></script>


<!-- <script src="http://d3js.org/d3.v3.min.js"></script> -->
<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-array.v1.min.js"></script>

<link rel="icon" href="/dist/assets/favicon.png">


<!-- leaflet -->
<!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" /> -->
<!-- <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script> -->
<script type="text/javascript" charset="utf-8" src="/dist/scripts/leaflet.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/leaflet-src.js"></script>
<script src="/dist/geoviz.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/L.D3SvgOverlay.min.js"></script>

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

<body onload = "age2_prop();" lang="<?php echo $language; ?>">

	<div id="container">

		<?php include('../topbar.php');?>

		<div class="container-top-info">

			<div id="city-name">
				<h2></h2>
			</div>

			<div id="menu-mobile" class="menu menu-sm">
				<?php include('accordeon-menu.php'); ?>
			</div>


			<div  class="container-timeline">
				<div id = "play" class="playB" data-tooltip="down 1000" aria-label=""></div>
				<div id="timeline">
					<div id="slider"></div><div id="timeAxis"></div>
				</div>
				<label class="" for="help-modal-control" data-tooltip="left 1000" aria-label="Aide sur l'application">
					<img class="ask" src="/dist/assets/ask.svg"/>
				</label>
			</div>

		</div>

		<div id= "menu" class="menu menu-lg">
			<?php include('accordeon-menu.php'); ?>
		</div>

		<div class = "cont" id = "mapTitleCont">
			<div class = "fittext1" id = "mapTitle" lab = ""></div>
			<div onclick="popup_mapTitle1()" data-tooltip="down 1000" aria-label="Informations" class="cont-picto">
				<span class="helpTitle"></span>
			</div>
			<a href="" id = "stacked-dowload" data-tooltip="down 1000" aria-label="Télécharger les données" class="cont-picto">
			</a>
		</div>

		<div id="map-container"></div>

		<div class="popup-container">
			<div id= "popup">
				<img id = "close" src ="/dist/assets/close-white.png"></img>
				<div id = "text"></div>
			</div>
		</div>

		<div class="menu-graphiques" >
			<div id="picto-graph-container" style="margin-left: 1em;" data-tooltip="down 1000" aria-label="Fermer graph.">
			<img  class="picto-graph" src='/dist/assets/close-graphiques.png'/>
			</div>
		</div>

		<div id = "graphiques">

			<div class="graphiques-bloc">
				<div id = "mainGr2Cont">
					<span id="mainGr2"></span>
					<img src='/dist/assets/download.svg' />
				</div>
				<div class="cont" id = "titleGr2Cont"><span class = "fittext1" id = "titleGr2"></span></div>
				<div id= "grSect"></div>
				<div id="altGr22"></div><div id="altGr12"></div>
			</div>
			<div class="graphiques-bloc">
				<div id = "mainGr1Cont">
					<span id = "mainGr1"></span>
					<a id = "segreg-dowload" class="mainGr1-tooltip" data-tooltip="down 1000" aria-label="Téléchargement">
				  	</a>
				</div>
				<div class = "cont" id = "titleGr1Cont"><span class = "fittext1" id = "titleGr1"></span></div>
				<div id= "grIDF"></div>
                <div id="altGr11"></div><div id="altGr21"></div>
			</div>
		</div>



	<script type="text/javascript" src="/cities/<?php echo $page; ?>.js"></script>
	<script type="text/javascript" src='/dist/scripts/loads.js'></script>
	<script type="text/javascript" src='/dist/scripts/text-fr.js'></script>
	<script type="text/javascript" src='/dist/scripts/load.js'></script>
	<script type="text/javascript" src='/dist/scripts/popups-fr.js'></script>
	<script type="text/javascript" src="/dist/scripts/typeahead.bundle.min.js"></script><script type="text/javascript" src="/dist/scripts/menu.js"></script>


</body>
</html>
