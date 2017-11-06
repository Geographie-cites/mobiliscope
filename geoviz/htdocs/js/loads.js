// GLOBAL OVERVIEW
// Present population
function pop0_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "pop0_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> people </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	$("#titleGr1").html("") ; 

	titleGr2 = "Estimated number  of people" ; 
	
	d3.select("#grIDF").selectAll("svg").remove() ;
	d3.select("#grSect").selectAll("svg").remove() ;
	
	rayon = function(d) { return (radius(d.properties[indic])/2)/ currentZoom } ;

	load(chemin, colDom, col) ;
	d3.select("#next").style('display', 'none') ;
	d3.select("#next2").style('display', 'none') ;
	d3.select("#return2").style('display', 'none') ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function pop0_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "pop0_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class= 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> people </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}


// DEMOGRAPHIC PROFILE
// Age groups
function age1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 6, 9, 13, 17]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion  <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function age1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function age1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 17 to 24 </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function age2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 10, 15, 20, 25]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function age2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function age2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 25 to 34 </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function age3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 46, 52, 58, 64]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function age3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function age3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 35 to 64 </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function age4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 12, 18, 24, 30]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function age4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function age4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "age4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> aged 65 and more </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

// Sex
function sex1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 41, 45, 49, 53]; // array comprenant les bornes de classes pour la carte
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> men </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> men </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function sex1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> men </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> men </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function sex1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> men </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function sex2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 46, 50, 55, 60]; // array comprenant les bornes de classes pour la carte
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> women </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> women </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function sex2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> women </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> women </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function sex2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "sex2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> women </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}


// SOCIAL PROFILE
// Educational level
function cleduc1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 15, 22, 29, 35]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational level </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cleduc2_choro(){
	
	if(!isPlaying){	
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 20, 27, 34, 41]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc2_prop(){
	
	if(!isPlaying){	
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-low educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-low educational level </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cleduc3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 17, 22, 27, 32]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cleduc3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-high educational level </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cleduc4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 10, 20, 30, 40]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cleduc4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high educational level </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high educational level </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high educational level </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cleduc4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  high educational level </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  high educational level </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

// Household income
function rev1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 18, 26, 34, 42]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function rev1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function rev1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span style='font-weight : bold ; color:" + col[4] +"'> low household income </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function rev2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 23, 31, 39, 47]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function rev2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function rev2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-low household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low household income </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function rev3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 12, 20, 28, 36]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function rev3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function rev3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  middle-high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high household income </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function rev4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 8, 16, 24, 31]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function rev4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high household income </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high household income </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high household income </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function rev4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "rev4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'>  high household income </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span style='font-weight : bold ; color:" + col[4] +"'> high household income </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

// Socioprofessional status
function cs1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 10, 15, 20, 25]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function cs1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function cs1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cs2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 14, 22, 30, 38]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>" ;

	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cs2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
	
}

function cs2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cs3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 15, 20, 25, 30]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function cs3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cs3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cs4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 16, 22, 28, 34]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cs4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cs4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function cs5_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 14, 21, 28]; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cs5_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people with <span style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function cs5_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

// Occupational status
function occ1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 40, 50, 60, 70]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> active </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> active </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> active </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> active </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function occ1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> active </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> active </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> active </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> active </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function occ1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'>  active </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> active </span>people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function occ2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 5, 8, 12, 16]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> students </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> students </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> students </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> students </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function occ2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> students </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> students </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> students </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> students </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function occ2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'>  students </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> students </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function occ3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 5, 7, 9, 11]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function occ3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> unemployed </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function occ3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'>  unemployed </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function occ4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 14, 21, 28, 35]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> retired </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> retired </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> retired </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> retired </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function occ4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> retired </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> retired </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> retired </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> retired </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function occ4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'>  retired </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> retired </span>people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}

function occ5_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 5, 9, 12, 15]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> inactive </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> inactive </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> inactive </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> inactive </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function occ5_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of <span  style='font-weight : bold ; color:" + col[4] +"'> inactive </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;

	titleDuncan =  "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> inactive </span> people : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of <span style='font-weight : bold ; color:" + col[4] +"'> inactive </span> people : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of <span  style='font-weight : bold ; color:" + col[4] +"'> inactive </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function occ5_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "occ5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident <span  style='font-weight : bold ; color:" + col[4] +"'>  inactive </span>people at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident <span  style='font-weight : bold ; color:" + col[4] +"'> inactive </span>people" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}
}


// RESIDENTIAL AREA
// Departement of residence
function dep1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 20, 60, 80]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"] ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function dep1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function dep1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Paris </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function dep2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 20, 60, 80]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function dep2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function dep2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Seine-Saint-Denis </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function dep3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 20, 60, 80]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function dep3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function dep3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Val-de-Marne </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function dep4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 20, 60, 80]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function dep4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

	
}

function dep4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> living in Hauts-de-Seine </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function dep5_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 20, 70, 90]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function dep5_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function dep5_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "dep5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> living in greater Paris </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

// ACTIVITY
// Activity
function act1_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 22, 44, 66, 88]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at home </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at home </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function act1_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at home </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at home </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function act1_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> at home </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function act2_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 12, 25, 37, 50]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at work </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at work </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function act2_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at work </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> at work </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function act2_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> at work </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function act3_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 5, 7.5, 10, 12.5]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> studying </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> studying </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function act3_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> studying </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> studying </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function act3_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> studying </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function act4_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 5, 6, 7, 8]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> shopping </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> shopping </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function act4_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> shopping </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> shopping </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function act4_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> shopping </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}

function act5_choro(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 6, 10, 15, 20]; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Estimated proportion <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> on leisure </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> on leisure </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated proportion  (%) of people <span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	

}

function act5_prop(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of people <span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>at district level <span class = 'help' onclick = 'popup4()'>I</span>") ;
	
	titleDuncan =  "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> on leisure </span> : Duncan index <span class = 'help' onclick = 'popup5()'>I</span>";
	titleMoran = "Spatial distribution of people<span style='font-weight : bold ; color:" + col[4] +"'> on leisure </span> : Moran index <span class = 'help' onclick = 'popup5()'>I</span>" ;
	titleGr2 = "Estimated number  of people <span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing indicator") ;
	}	
}

function act5_flow(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "act5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Estimated number <span class = 'help' onclick = 'popup3()'>I</span> of non resident people<span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>at district level <span class = 'help' onclick = 'popup4()'>I</span> & flows from their districts of residence<span style = 'font-size : .6em'> (on mouseover)</span>") ;
	$("#titleGr1").html("") ; 
	
	titleGr2 = "Estimated number  of non resident people <span  style='font-weight : bold ; color:" + col[4] +"'> on leisure </span>" ;
		
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing indicator") ;
	}

}
