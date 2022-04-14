<?php
  $section = 'info';
  include ('../settings.php');

  if(!empty($subpage))
    echo file_get_contents('./subpages/'.$subpage.'.html');
  else
    echo file_get_contents('./subpages/'.$page.'.html');
exit;
?>

