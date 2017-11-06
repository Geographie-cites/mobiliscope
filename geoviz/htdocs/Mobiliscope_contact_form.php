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

<title>Mobiliscope - Contact form</title>

</head>

<script type="text/javascript">

// Limitation du nombre de case à cocher
function checkboxLim(f_name, nbr_limit){
	var nbr=0;
	var nbr_check=0;
	
	nm=document.getElementById('MBS_contact_form').elements[f_name];
	nbr_check=nm.length;
	
	for(i=0;i<nbr_check;i++){
		if(nm[i].checked==true)
		nbr++;
	}
	if(nbr>=nbr_limit){
		for(i=0;i<nbr_check;i++){
			if(nm[i].checked==false)
			nm[i].disabled=true;
		}
	}
		else{
			for(i=0;i<nbr_check;i++){
				if(nm[i].checked==false)
				nm[i].disabled=false;
			}
			}
			}
</script>

<body>

<div id="container">

	<div id="titre">
		<div class="cont" id="main"><span class="fittext1" id="mainTitle">MOBILISCOPE</span></div>
        
	<div class="cont" id="subtitle"><span class="fittext1" id="seg">Contact Form</span></div>
    		
		<div id="picto"> 
			<img id="home" src = "Pictos/home2.png" title = "Maps & Graphs"></img>
			<img id="moreinfo" src = "Pictos/menu2.png" title = "Infos"  onclick = "window.location.href='info.html';"></img>
			<img id="contact" src = "Pictos/contact.png" title = "Contact form"></img>
		</div>
    
	</div>
		
    <div class = "corps" id="text1" style="margin-left : 17% ; ">
  
<p>PLEASE FILL OUT THE FORM BELOW TO STAY UP TO DATE WITH THE MOBILISCOPE</p>
<p>Email address and country are required fields and are marked with a star.</p>

<form name="MBS_contact_form" id="MBS_contact_form" method="post" action="Submit.php">
<p>
Email Address*: <input name="Email_1" type="text" required/>[at]<input name="Email_2" type="text" required/>
</p>
<p>
Country*: <select name="Country" size="1" required>
<?php
$answ=$bdd->query('SELECT ID_country, Name_c_En FROM countries ORDER BY ID_country');
while ($countries=$answ->fetch())
{
?>
<option value="<?php echo $countries['Name_c_En'];?>"><?php echo $countries['Name_c_En'];?></option>
<?php
}
$answ->closeCursor();
?>
</select>
</p>
<p>
City: <input name="City" type="text"/>
</p>
<p>
Profile: <select name="Profile" size="1">
<option>
<option>Researcher or Professor
<option>Student
<option>Policymaker or practitioners
<option>NGO
<option>Private sector
<option>Media
<option>Ordinary citizen
<option>Other
</option>
</select>
</p>
<p>
How did you hear of Mobiliscope?
</p>
<p>
<input type="checkbox" name="HDYH_01" value="Social Media"/> Social Media
<input type="checkbox" name="HDYH_02" value="Mailing list"/> Mailing list
<input type="checkbox" name="HDYH_03" value="Academic journals"/> Academic journals
<input type="checkbox" name="HDYH_04" value="Colleagues or Friends"/>Colleagues or Friends
<input type="checkbox" name="HDYH_05" value="Search on internet"/> Search on internet
<input type="checkbox" name="HDYH_06" value="Other"/> Other
</p>
Please feel free to let us a comment or suggestion:
<p>
<textarea name="Comments" rows="4" cols="60"></textarea>
</p>
<p>You can also send us an email: <span style = "font-weight : bold ;">mobiliscope[at]parisgeo.cnrs.fr</span></p>
<p>
Can we email you with new information about the Mobiliscope?
</p>
<p>
<input type="checkbox" name="Info[]" value="Yes" onclick="checkboxLim(this.name,1);"/> Yes
<input type="checkbox" name="Info[]" value="No"onclick="checkboxLim(this.name,1);"/> No
</select>
</p>
<p>
Which language do you prefer?
</p>
<input type="checkbox" name="Lang[]" value="English" onclick="checkboxLim(this.name,1);"/> English
<input type="checkbox" name="Lang[]" value="French"onclick="checkboxLim(this.name,1);"/> French
</select>

<input type="hidden" name="Hidden" value=""/>
<p>
<input type="submit" name="Submit" value="SUBMIT"/>	<input type="reset" name="Reset" value="RESET"/>
</p>
</form>

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