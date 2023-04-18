<?php

include(__DIR__.'/data/translation.php');
$_t = $translation['backTranslation'];

$the_menu_json = file_get_contents(__DIR__."/data/" . $page . "/menu.json");


$the_menu_array = json_decode($the_menu_json, true);
// var_dump($the_menu_array);

foreach ($the_menu_array['niv1'] as $key1 => $val1) {
    // echo "<li class='niv1 current-page opened-item'>\n";
    echo "<li><a class='niv1'>" . $_t[$val1['label']][$language] . "</a>\n";
    echo "<ul class='niv1-content'>\n";
    foreach ($val1['niv2'] as $key2 => $val2) {
        echo "<li><a class='niv2'>". $_t[$val2['indicateur']][$language] . "      <span data-indicateur='" . $val2['indicateur'] . "' class='helpAcc helpAcc-".$val2['indicateur']."'></span></a>\n";
        echo "<ul class='niv2-content'>\n";
        foreach ($val2['niv3'] as $key3 => $val3) {

            $label3 = $_t[ $val2['indicateur'] . $val3['modalite'] ][$language];
            $dynamicVariable = preg_grep('/^#[^ !@#$%^&*(),.?":{}|<>]*#$/',array($label3) );

            if( !empty($dynamicVariable) ){
                $dynamicVariableContent = substr($dynamicVariable[0], 1, strlen($dynamicVariable[0])-2);
                $label3 = $city[$page][$dynamicVariableContent];
            }

            echo "      <li data-color='". $val3['color'] ."' class='niv3' style = \"border-left : 10px solid ". $val3['color'] ."\";'>" . "\n" ;
            echo "      <p style = \"color : ". $val3['color'] ."\">"  . $label3 . "</p>\n";
            echo "      <span data-color='". $val3['color'] ."' class='niv-logo'>\n";
            foreach ($val3['mode_de_representation'] as $key4 => $val4) {
                $iduphp = $val2['indicateur'] . $val3['modalite'] . "_" . $val4['action'];
                echo "      <button data-color='". $val3['color'] ."' data-m1='". ($key1 + 1) ."' data-m2='". ($key2 + 1) ."' data-m3='". ($key3 + 1) ."'  data-iduphp='". $iduphp ."' data-mode ='". $val4['class']  ."'  class ='". $val4['class']  ."' style = \"color : ". $val3['color'] ."\" >" . ( ($val4["label"] == '*')? '' : $val4["label"] ). "</button>\n";
            }
            echo "</span>\n";
            echo "</li>\n";
        }
        echo "</ul>\n";
        echo "</li>\n";
    }
    echo "</ul>\n";
    echo "</li>\n"; 
}
?>

