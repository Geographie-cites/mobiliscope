<?php
  $section = 'info';
  include ('../settings.php');

  if(!empty($subpage))
    include('./subpages/'.$subpage.'.php');
  else
    include('./subpages/'.$page.'.php');
exit;
?>

