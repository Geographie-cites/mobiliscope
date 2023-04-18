<?php
$section = 'geoviz';
include ('../settings.php');
?>
<!DOCTYPE html>
<html lang="<?php echo $language; ?>">
<meta charset="utf-8"/>
<head>
	<title><?php echo $curPage['pageTitle']; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $curPage['pageMeta']; ?>" />
	<meta name="author" content="Aurélie Douet & Constance Lecomte">
	<link rel="icon" href="/dist/assets/favicon.png">


<script src="/dist/geoviz.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/geostats.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/leaflet.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/leaflet-src.js"></script>
<script type="text/javascript" charset="utf-8" src="/dist/scripts/L.D3SvgOverlay.min.js"></script>

<meta property="og:locale" content="es_ES" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $curPage['pageTitle']; ?>" />
<meta property="og:description" content="<?php echo $curPage['pageMeta']; ?><?php echo $curPage['pageMeta']; ?>" />
<meta property="og:url" content="https://mobiliscope.cnrs.fr/es" />
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

<link rel='stylesheet'  href='/dist/geoviz.bundle.css' type='text/css' media='all' />
<script type="text/javascript">
<?php
	include('../../data/translation.php');
	$_t = $translation['frontTranslation'];
	echo "var translation = " . json_encode($_t) ;
?>
</script>
<script type="text/javascript">
	<?php 
		echo "const city = '" . $page . "'"; 
	?>
</script>
<script type="text/javascript">
<?php
	echo "var paramCity = " . json_encode($city) ;
?>
</script>
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

<body>

	<div id="container">

		<?php include('../topbar.php');?>

		<div id="geoviz-container">

			<div id="city-name">
				<h2><?php echo $city[$page]['htmlName'][$language];?></h2>
			</div>

			<div  id="container-timeline">
				<div id = "play" class="playB" data-tooltip="down 1000" aria-label=""></div>
				<div id="timeline">
					<div id="slider"></div><div id="timeAxis"></div>
				</div>
				<label for="help-modal-control" data-tooltip="left 1000" aria-label="Ayuda para la aplicación">
					<img class="ask" src="/dist/assets/ask.svg"/>
				</label>
				<label for="share-modal-control" data-tooltip="left 1000" aria-label="Comparte esta página">
					<img class="ask" src="/dist/assets/share.svg"/>
				</label>
			</div>

			<ul id= "geoviz-menu">
				<?php include('../../geoviz_menu.php'); ?>
			</ul>

			<div id="geoviz-map-title">

				<div class = "cont" id = "mapTitleCont">
					<div class = "fittext1" id = "mapTitle" lab = ""></div>
					<div onclick="popup_mapTitle1()" data-tooltip="down 1000" aria-label="Información" class="cont-picto">
						<span class="helpTitle"></span>
					</div>
					<a href="" id = "stacked-dowload" data-tooltip="down 1000" aria-label="Descargar los datos" class="cont-picto">
					</a>
				</div>

				<div id="map-container"></div>

			</div>

			<div class="popup-container">
				<div id= "popup">
					<img id = "close" src ="/dist/assets/close-white.png"></img>
					<div id = "text"></div>
				</div>
			</div>

			<div id="geoviz-charts">
				
				<div class="menu-graphiques" >
					<div id="picto-graph-container" style="margin-left: 1em;" data-tooltip="down 1000" aria-label="Cerrar gráficos">
					<img  class="picto-graph" src='/dist/assets/close-graphiques.png'/>
					</div>
				</div>

				<div id = "graphiques">

					<div class="graphiques-bloc1">
						<div id = "mainGr1Cont">
							<span id = "mainGr1"></span>
							<a id = "segreg-dowload" class="mainGr1-tooltip" data-tooltip="down 1000" aria-label="Descargar"></a>
						</div>
						<div class = "cont" id = "titleGr1Cont"><span class = "fittext1" id = "titleGr1"></span></div>
						<div id= "grIDF"></div>
		        <div class="alt"><div id="altGr11"></div><div id="altGr21"></div></div>
					</div>

					<div class="graphiques-bloc2">
						<div id = "mainGr2Cont">
							<span id="mainGr2"></span>
							<img src='/dist/assets/download.svg' />
						</div>
						<div class="cont" id = "titleGr2Cont"><span class = "fittext1" id = "titleGr2"></span></div>
						<div id= "grSect"></div>
						<div class="alt"><div id="altGr22"></div><div id="altGr12"></div></div>
					</div>
					
				</div>

			</div>
		</div>

	<script type="text/javascript" src="/data/<?php echo $page; ?>/paramgeom.js"></script> 
	<script type="text/javascript" src='/data/colors.js'></script>
	<script type="text/javascript" src='/dist/scripts/load.js'></script>
	<script type="text/javascript" src='/dist/scripts/controller.js'></script>
	<script type="text/javascript" src='/dist/scripts/view.js'></script>
	<script type="text/javascript" src='/dist/scripts/popups.js'></script>
	<script type="text/javascript" src="/dist/scripts/typeahead.bundle.min.js"></script>
	<script type="text/javascript" src="/dist/scripts/get-param.js"></script>

</body>
</html>
