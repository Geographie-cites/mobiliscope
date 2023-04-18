<!DOCTYPE html>
<html lang="fr">
<meta charset="utf-8">
<head>
    <title>Test du menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="load.js"></script>
    <!--<link rel='stylesheet'  href='https://mobiliscope.parisgeo.cnrs.fr/dist/geoviz.bundle.css' type='text/css' media='all' />-->
    <link rel="stylesheet" type="text/css" href="style.css" media='all'>
</head>

<body>


<?php
//http://dev.mobilitest.parisgeo.cnrs.fr/menu.php



echo '<h1>Test menu mobiliscope </h1><br>';

$string = file_get_contents("./data/albi/menu.json");



echo '<br><br>---------<br><br>';

$array = json_decode($string, true);
//var_dump($array);
//echo '<br><br>---------<br><br>';

$niv3ButtonLabel = [
    'part' => '%',
    'part' => '%',
    'part' => '%',
];
echo "<div id='menu' class='menu menu-lg'>";

foreach ($array['niv1'] as $key1 => $val1) {
    echo "<div class='niv1 current-page opened-item'>\n";
    echo "<span class='niv1-item'>" . $val1['label'] . "</span>\n";
    foreach ($val1['niv2'] as $key2 => $val2) {
        echo "<div class='niv2'>\n";
        echo "   <p>" . $val2['label']."\n";
        echo "  --- <span class='helpAcc' onclick='popup(\"" . $val2['indicateur'] . "0\");' > help </span>\n";
        echo "   </p>\n";
        echo "</div>\n";

        foreach ($val2['niv3'] as $key3 => $val3) {
            echo "   <div class='niv3' style = \"border-left : 10px solid ". $val3['color'] ."\";'>\n";
            echo "      <p>" . $val3['label'] . "</p>\n";
            echo "      <div class='niv-logo'>\n";
            foreach ($val3['mode_de_representation'] as $key4 => $val4) {
                echo "      <button class ='". $val4['label']  ."' onclick = 'popup(\"" . $val2['indicateur'] . $val3['modalite'] . "_" . $val4['action'] . "()\");' >" . $val4["label"] . "</button>\n";
            }
            echo "      </div>\n";
            echo "   </div>\n";
        }


    }
    echo "</div>";

}

echo "</div>";



?>
</body>
</html>
