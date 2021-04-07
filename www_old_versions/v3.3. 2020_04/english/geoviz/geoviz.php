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
	<meta name="author" content="Constance Lecomte & Aurélie Douet">

     <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-52XSNMZ');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52XSNMZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-dispatch.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-selection.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-transition.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-zoom.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-drag.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-array.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://d3js.org/d3-geo.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="https://unpkg.com/d3-geo-scale-bar@0.2.0/build/d3-geo-scale-bar.min.js"></script>

	<script type="text/javascript" charset="utf-8"src="/scripts/d3.v3.min.js"></script>
	<script type="text/javascript" charset="utf-8"src="https://d3js.org/d3-array.v1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/scripts/d3.slider.js"></script>
    <script type="text/javascript" charset="utf-8" src="/scripts/jquery.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/scripts/bowser.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />

    <link rel="icon" href="/pictos/favicon.png">

	<link rel="stylesheet" type="text/css" href="/scripts/d3.slider.css">

	<link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
    <link rel="stylesheet" type="text/css" href="/styles/style.css">
    <link rel="stylesheet" type="text/css" href="/scripts/style.css">

    <meta property="og:locale" content="en_EN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo $curPage['pageTitle']; ?>" />
    <meta property="og:description" content="<?php echo $curPage['pageMeta']; ?><?php echo $curPage['pageMeta']; ?>" />
    <meta property="og:url" content="https://mobiliscope.parisgeo.cnrs.fr/en" />
    <meta property="og:site_name" content="Mobiliscope" />
    <meta property="og:image" content="http://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-fb.png" />
    <meta property="og:image:secure_url" content="https://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-fb.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="<?php echo $curPage['pageTitle']; ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo $curPage['pageTitle']; ?>" />
    <meta name="twitter:description" content="<?php echo $curPage['pageMeta']; ?>" />
    <meta name="twitter:image" content="https://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-tw.png" />


</head>

<body onload = "age2_prop();" lang="<?php echo $language; ?>">

<div id="container">
	<?php
	include ('../topbar.php');
	?>

	<div id= "menu">
		<?php include('accordeon-menu.php'); ?>

	</div>

	<div id="play"><img id = "playB" src = "/pictos/player2.png"></img></div>
	<div id="timeline">
		<div id="slider"></div>
		<div id="timeAxis"></div>
	</div>

	<div id="hour"></div>

	<div class = "cont" id = "mapTitleCont"><span class = "fittext1" id = "mapTitle"></span></div>
	<div id="map-container">
		<div id="zoom"><div class= "zoomB" id="zoomIn" data-zoom="+1">+</div><div class= "zoomB" id="zoomOut" data-zoom="-1">-</div></div>

<?php if ($page != 'montreal' & $page != 'ottawa-gatineau' & $page != 'quebec' & $page != 'saguenay' & $page != 'sherbrooke' & $page != 'trois-rivieres')
{
echo '
		<div id="layers"><img style = "height : 100% ;" src = "/pictos/layers.png"/></div>';
}
?>

		<div id="layers2">
			<div id="reduce"><img style = "width : 100% ;" src = "/pictos/reduce.png"/></div>
			<div class="checkbox">
				<input type="checkbox" id="vc" checked />
				<label id="vc2" for="vc"></label>
			</div>
			<div class="checkbox">
				<input type="checkbox" id="routes"/>
				<label id="routes2" for="routes"></label>
			</div>
			<div class="checkbox">
				<input type="checkbox" id="hydro"/>
				<label id="hydro2" for="hydro"></label>
			</div>
			<div class="checkbox">
				<input type="checkbox" checked id="villes"/>
				<label id="villes2" for="villes"></label>
			</div>
		</div>
		<div id="legende"></div>
		<div id="echelle"></div>
		<div id="copyright"></div>
		<div id="source"></div>
	</div>


	<div id= "popup">
		<img id = "close" src = "/pictos/close.png"></img>
		<div id = "text"></div>
	</div>


	<div id = "graphiques">

		<div id = "mainGr1Cont"><span id = "mainGr1"></span></div>

		<div class = "cont" id = "titleGr1Cont"><span class = "fittext1" id = "titleGr1"></span></div>
		<div id= "grIDF"></div>
		<div id = "bloc1"></div><div id="altGr21" class= "altGr1"></div><div id="altGr11" class= "altGr2"></div>

		<div id = "mainGr2Cont"><span id="mainGr2"></span></div>
		<div class="cont" id = "titleGr2Cont"><span class = "fittext1" id = "titleGr2"></span></div>
		<div id= "grSect"></div>
		<div id = "bloc2"></div><div id="altGr22" class= "altGr1"></div><div id="altGr12" class= "altGr2"></div>

	</div>

</div>






<script type="text/javascript" src="/cities/<?php echo $page; ?>.js"></script>
<script type="text/javascript" src="/scripts/loads.js"></script>
<script type="text/javascript" src="/scripts/text-en.js"></script> <!--SPE -->
<script type="text/javascript" src="/scripts/load.js"></script>
<script type="text/javascript" src="/scripts/popups-en.js"></script> <!--SPE -->
<script type="text/javascript" src="/scripts/typeahead.bundle.min.js"></script>
<script type="text/javascript" src="/scripts/menu.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>




</body>

</html>
