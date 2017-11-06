// Present population
function map11(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "pop_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html("Number (n) of <span  style='font-weight : bold ; color:" + col[4] +"'> people</span><span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("") ; 

	titleGr2 = "Number (n) of people" ; 
	
	d3.select("#grIDF").selectAll("svg").remove() ;
	d3.select("#grSect").selectAll("svg").remove() ;
	
	rayon = function(d) { return (radius(d.properties[indic])/2)/ currentZoom } ;

	load(chemin, colDom, col) ;
	d3.select("#next").style('display', 'none') ;
	d3.select("#next2").style('display', 'none') ;
	d3.select("#return2").style('display', 'none') ;
	}
	else{
		alert("Press pause before changing social category") ;
	}

}

// Socioprofessional status
function map21(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 10, 15, 20, 25]; // array comprenant les bornes de classes pour la carte
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people") ; 
	titleGr2 = "Proportion (%) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing social category") ;
	}	

}

function map21b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people") ; 
	titleGr2 = "Number (n) of <span  style='font-weight : bold ; color:" + col[4] +"'> unemployed </span>people" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing social category") ;
	}	
}

function map22(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 14, 22, 30, 38]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefaee", "#d7cee2", "#b1a4d5", "#8d7ac8", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>" ;

	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing social category") ;
	}

}

function map22b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefaee", "#d7cee2", "#b1a4d5", "#8d7ac8", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;	
	}
	else{
		alert("Press pause before changing social category") ;
	}	
	
}

function map23(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 15, 20, 25, 30]; // array comprenant les bornes de classes pour la carte
	var col = ["#fee9cb", "#cdd8a7", "#9bbf82", "#66a65c", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}	
}

function map23b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fee9cb", "#cdd8a7", "#9bbf82", "#66a65c", "#198e32"]   ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map24(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 16, 22, 28, 34]; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbf1", "#f8e2c6", "#efc999", "#e4b266", "#d79b00"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map24b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbf1", "#f8e2c6", "#efc999", "#e4b266", "#d79b00"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map25(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 7, 14, 21, 28]; // array comprenant les bornes de classes pour la carte
	var col = ["#fef2f4", "#f2bdc3", "#e08892", "#c85363", "#ac0030"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map25b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cs5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef2f4", "#f2bdc3", "#e08892", "#c85363", "#ac0030"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high socioprofessional status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}



// EDUCATIONAL STATUS
function map31(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 15, 22, 29, 35]; // array comprenant les bornes de classes pour la carte
	var col = ["#f1f6fe", "#c9d2e9", "#a0afd4", "#788ebf", "#4c6ead"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map31b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f1f6fe", "#c9d2e9", "#a0afd4", "#788ebf", "#4c6ead"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> low educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map32(){
	
	if(!isPlaying){	
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 20, 27, 34, 41]; // array comprenant les bornes de classes pour la carte
	var col = ["#f1fffa", "#c6eada", "#98d5ba", "#65c19b", "#00ad7b"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map32b(){
	
	if(!isPlaying){	
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f1fffa", "#c6eada", "#98d5ba", "#65c19b", "#00ad7b"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-low educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map33(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 17, 22, 27, 32]; // array comprenant les bornes de classes pour la carte
	var col = ["#fedbc0", "#ffc0a0", "#fca67d", "#f78c56", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}

function map33b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#fedbc0", "#ffc0a0", "#fca67d", "#f78c56", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> middle-high educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}

}

function map34(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = [0, 10, 20, 30, 40]; // array comprenant les bornes de classes pour la carte
	var col = ["#fecce0", "#f2a6c1", "#e380a2", "#d35884", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Proportion (%) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>") ; 
	titleGr2 = "Proportion (%) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}

}

function map34b(){
	
	if(!isPlaying){
	
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "cleduc4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#fecce0", "#f2a6c1", "#e380a2", "#d35884", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html("Number (n) of people with <span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>people<span class = 'help' onclick = 'popup3()'>&nbsp;(i)&nbsp;</span>by EGT districts <span class = 'help' onclick = 'popup4()'>(i)</span>") ;
	$("#titleGr1").html("Segregation index <span class = 'help' onclick = 'popup5()'>(i)</span> according to<span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>") ; 
	titleGr2 = "Number (n) of people with<span  style='font-weight : bold ; color:" + col[4] +"'> high educational status </span>" ; 
	
	load(chemin, colDom, col) ;
	}
	else{
		alert("Press pause before changing social category") ;
	}
}