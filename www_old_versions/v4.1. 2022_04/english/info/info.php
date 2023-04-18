<?php
  $section = 'info';
  include ('../settings.php');

  //var_dump($curPage);
?>
<!DOCTYPE html>
<html lang="<?php echo $language; ?>">
<meta charset="utf-8">
<head>
    <title><?php echo $curPage['pageTitle']; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $curPage['pageMeta']; ?>" />
    <meta name="author" content="Constance Lecomte & Aurélie Douet">

    <script src="/dist/info.js"></script>
    <link rel="icon" href="/dist/assets/favicon.png">
  <!--  <link rel="stylesheet" type="text/css" href="/styles/style.css"> -->

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

<link rel='stylesheet'  href='/dist/info.bundle.css' type='text/css' media='all' />

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

    <div id="container" >

      <?php include('../topbar.php');?>

        <div class="page-container">
            <div class="row fullWidth" >
                <div id="menu">
                    <?php include('left-menu.php'); ?>
                </div>

                <div class="right-page">
                    <span id="page-loader">
                        <?php
                          if(!empty($subpage))
                            include('./subpages/'.$subpage.'.html');
                          else
                            include('./subpages/'.$page.'.html');
                        ?>
                    </span>
                </div>

            </div>
        </div>


    <?php include('../footer.php'); ?>

    </div>

<script type="text/javascript" src="/dist/scripts/jquery.min.js"></script>
<script type="text/javascript" src="/dist/scripts/jquery.sticky.js"></script>
<script type="text/javascript" src="/dist/scripts/typeahead.bundle.min.js"></script>
<script type="text/javascript" src="/dist/scripts/menu.js"></script>
<script type="text/javascript" src="/dist/scripts/left-menu.js"></script>


</body>

</html>
