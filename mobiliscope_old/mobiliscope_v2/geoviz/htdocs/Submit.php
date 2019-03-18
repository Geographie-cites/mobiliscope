<?php
try
{
$bdd=new PDO('mysql:host=localhost;dbname=data_mbs_cf', 'Mobiliscope','uwG4bLYFRp2vDDE2');
}
catch(Exception $e)
{
	die('Error: '.$e->getMessage());
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8959-1" />
<meta name="author" content="S&eacute;bastien Haule (UMR 8504 G&eacute;ographie-cit&eacute;s)" />
	<script type="text/javascript" src="js/jquery.min.js"></script> 
	<script src="js/loads.js"></script>
	<script src="js/popups.js"></script>
<meta name="description" content="Mobiliscope is a free and open-source web mapping platform for the interactive exploration of neighborhood social composition around the clock in metropolitan areas" />

<link rel="icon" href="Pictos/favicon.png">
<link rel="stylesheet" type="text/css" href="style2.css">

<title>Mobiliscope - Registration confirmation</title>

</head>

<body>
<div id="container">

	<div id= "titre">
		<div class = "cont" id = "main"><span class = "fittext1" id = "mainTitle">MOBILISCOPE</span></div>
		
		<div class = "cont" id = "subtitle"><span class = "fittext1" id = "seg">Registration confirmation</span></div>
		<div id="picto"> 
			<img id="home" src = "Pictos/home2.png" title = "Maps & Graphs"  onclick = "window.location.href='index.html';"></img>
			<img id="moreinfo" src = "Pictos/menu2.png" title = "Infos"  onclick = "window.location.href='info.html';"></img>
			<img id="contact" src = "Pictos/contact.png" title = "Contact form"  onclick = "window.open('http://mobiliscope.parisgeo.cnrs.fr/contact_form.php', '_blank');"></img>
		</div>
  </div>
  <div class = "corps" id="text1" style="margin-left : 17% ; ">
<h2><?php
// Message d'accueil

if(in_array('Yes', $_POST['Info']))
{echo 'Thank you for your newsletter subscrition!';}
else
{echo 'Thanks for your registration!';}
?>
</h2>
<?php
//Enregistrement dans la base de donnée data_mbs_cf

//1)Récupération des données saisies

$Email=$_POST['Email_1'].'@'.$_POST['Email_2'];

$Country=$_POST['Country'];

$City=$_POST['City'];

$Profile=$_POST['Profile'];

if(array_key_exists('HDYH_01', $_POST)&& !empty($_POST['HDYH_01']))
{$HDYH_01=$_POST['HDYH_01'].'-';}
else
{$HDYH_01='';}

if(array_key_exists('HDYH_02', $_POST)&& !empty($_POST['HDYH_02']))
{$HDYH_02=$_POST['HDYH_02'].'-';}
else
{$HDYH_02='';}

if(array_key_exists('HDYH_03', $_POST)&& !empty($_POST['HDYH_03']))
{$HDYH_03=$_POST['HDYH_03'].'-';}
else
{$HDYH_03='';}

if(array_key_exists('HDYH_04', $_POST)&& !empty($_POST['HDYH_04']))
{$HDYH_04=$_POST['HDYH_04'].'-';}
else
{$HDYH_04='';}

if(array_key_exists('HDYH_05', $_POST)&& !empty($_POST['HDYH_05']))
{$HDYH_05=$_POST['HDYH_05'].'-';}
else
{$HDYH_05='';}

if(array_key_exists('HDYH_06', $_POST)&& !empty($_POST['HDYH_06']))
{$HDYH_06=$_POST['HDYH_06'].'-';}
else
{$HDYH_06='';}

$H_d_y_h_mbs=$HDYH_01.''.$HDYH_02.''.$HDYH_03.''.$HDYH_04.''.$HDYH_05.''.$HDYH_06;

$Comments=$_POST['Comments'];

if(array_key_exists('0', $_POST['Info'])&& !empty($_POST['Info']))
{$Mailing_list_sub=$_POST['Info'][0];}
else
{$Mailing_list_sub='';}

if(array_key_exists('0', $_POST['Lang'])&& !empty($_POST['Lang']))
{$Lang=$_POST['Lang'][0];}
else
{$Lang='';}

$Registration_date=date("Y-m-d H:i:s");

$Hidden=$_POST['Hidden'];//champ caché anti robot

//2)Insertion des données saisies dans la base de donnée à l'aide d'une requète préparée après vérification du champ caché ou déconnexion de la base si le champ caché a été compléré
	
if(empty($_POST['Hidden'])||$_POST['Hidden']==''){

$req=$bdd->prepare('INSERT INTO mbs_contact_list(Email, Country, City, Profile, H_d_y_h_mbs, Comments, Mailing_list_sub, Lang, Registration_date) VALUES (:Email, :Country, :City, :Profile, :H_d_y_h_mbs, :Comments, :Mailing_list_sub, :Lang, :Registration_date)');

$req->execute(array(
'Email'=>$Email,
'Country'=>$Country,
'City'=>$City,
'Profile'=>$Profile,
'H_d_y_h_mbs'=>$H_d_y_h_mbs,
'Comments'=>$Comments,
'Mailing_list_sub'=>$Mailing_list_sub,
'Lang'=>$Lang,
'Registration_date'=>$Registration_date
));


// Envoi d'un fichier csv à l'adresse mail du projet

ini_set("SMTP", "localhost");
ini_set("smtp_port", 25 );

$recipient = 'mobiliscope@parisgeo.cnrs.fr ';
$subject = 'New contact form registration';
$message = $Email.';'.$Country.';'.$City.';'.$Profile.';'.$H_d_y_h_mbs.';'.$Comments.';'.$Mailing_list_sub.';'.$Lang.';'.$Registration_date;
$header = 'From: "Mobiliscope"<http://mobiliscope.parisgeo.cnrs.fr/>'."\r\n\r\n";             
                 
mail($recipient, $subject, $message, $header);

// Déconnexion de la base de données par destruction de l'objet PDO

$bdd=null;
}
else
{$bdd=null;}
?>
</h2>
  </div>
    </div>
    <script>
// INIT
$('.niv1:first').css('background-color', '#514d47') ;
$('.niv1:first').css('color', 'white') ;

// BEHAVIOUR
$('.niv1').click(function(){
	$('.niv1').css('background-color', '#f2f2f2') ;
	$('.niv1').css('color', 'black') ;
	$(this).css('background-color', '#514d47') ;
	$(this).css('color', 'white') ;
}) ;

// TEXT
$(".corps").css('display', 'none') ; 
$("#text1").css('display', 'block') ; 

$('#txt1').click(function(){$(".corps").css('display', 'none') ; $("#text1").css('display', 'block') ;  }) ; 
$('#txt2').click(function(){$(".corps").css('display', 'none') ; $("#text2").css('display', 'block') ;  }) ; 
$('#txt3').click(function(){$(".corps").css('display', 'none') ; $("#text3").css('display', 'block') ;  }) ;
$('#txt4').click(function(){$(".corps").css('display', 'none') ; $("#text4").css('display', 'block') ;  }) ; 
$('#txt5').click(function(){$(".corps").css('display', 'none') ; $("#text5").css('display', 'block') ;  }) ; 
$('#txt6').click(function(){$(".corps").css('display', 'none') ; $("#text6").css('display', 'block') ;  }) ; 
$('#txt7').click(function(){$(".corps").css('display', 'none') ; $("#text7").css('display', 'block') ;  }) ; 

// HEADLINE AUTO SIZE
	var fontSize ; 
var textContainer ;

var update_fontsize = function(){
	
	$( ".fittext1" ).each(function(  ) {
		
		textContainer = $(this).closest(".cont") ; 	
		fontSize = parseInt(textContainer.height() * 0.5 ) + 'px';		

		$(this).css('font-size', fontSize);
		$(this).css('line-height', textContainer.height() + 'px');
		
		var fontWidth = parseInt($(this).css("width")) ;
		var containerWidth = parseInt(textContainer.css("width")) ;
			
		if(fontWidth >= containerWidth){

			newfontSize = ( fontSize.slice(0, -2) * (containerWidth * 0.9) ) / fontWidth; 

			$(this).css('font-size', newfontSize);
			$(this).css('line-height', textContainer.height() + 'px');

		}			
	}) ;		
};

$(window).resize(function() {
	update_fontsize();			
});

$(document).ready(function() {
	update_fontsize();
});
</script>
</body>
</html>