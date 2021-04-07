// GLOBAL OVERVIEW
// Present population

function pop0_prop2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/pop0_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
			var colDom = "" ;

			$("#mapTitle").html(titleMap[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
			+ modalite[0] + "</span> " + titleMap[3]) ;

			$("#titleGr1").html("") ;

			titleGr2 = titleUnique[0] + " " + modalite[0];

			d3.select("#grIDF").selectAll("svg").remove() ;
			d3.select("#grSect").selectAll("svg").remove() ;

			load(chemin, colDom, col) ;
			d3.select("#next").style('display', 'none') ;
			d3.select("#next2").style('display', 'none') ;
			d3.select("#return2").style('display', 'none') ;
		}

function pop0_prop(){

	if(!isPlaying){
		pop0_prop2();		
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		pop0_prop2();
	}

}

function pop0_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/pop0_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[15] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[49] + "</span> "+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " " + modalite[0];

	load(chemin, colDom, col) ;
}

function pop0_flow(){

	if(!isPlaying){
		pop0_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		pop0_flow2();
	}
}

// DEMOGRAPHIC PROFILE
// Age groups
function age1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[1] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[1] + "</span>" ;

	load(chemin, colDom, col) ;
}

function age1_choro(){

	if(!isPlaying){
		age1_choro2();
	
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age1_choro2();
	}

}

function age1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[1] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[1] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age1_prop(){

	if(!isPlaying){
		age1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age1_prop2()
	}
}

function age1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[1] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[1] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age1_flow(){

	if(!isPlaying){
		age1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age1_flow2();
	}

}

function age2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[2] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[2] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age2_choro(){

	if(!isPlaying){
		age2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age2_choro2();
	}

}

function age2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[2] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[2] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age2_prop(){

	if(!isPlaying){
		age2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age2_prop2();
	}
}

function age2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[2] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[2] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age2_flow(){

	if(!isPlaying){
		age2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age2_flow2();
	}

}

function age3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[3] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[3] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age3_choro(){

	if(!isPlaying){
		age3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age3_choro2()
	}

}

function age3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[3] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[3] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age3_prop(){

	if(!isPlaying){
		age3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age3_prop2();
	}
}

function age3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[3] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[3] + "</span>" ;

	load(chemin, colDom, col) ;
}

function age3_flow(){

	if(!isPlaying){
		age3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age3_flow2();
	}

}

function age4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[4] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[4] + "</span>" ;

	load(chemin, colDom, col) ;
}

function age4_choro(){

	if(!isPlaying){
		age4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age4_choro2();
	}

}

function age4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[4] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[4] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age4_prop(){

	if(!isPlaying){
		age4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age4_prop2();
	}
}

function age4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[4] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[4] + "</span>" ;

	load(chemin, colDom, col) ;
}
function age4_flow(){

	if(!isPlaying){
		age4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		age4_flow2();
	}

}


// Sex
function sex1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_sex1; // array comprenant les bornes de classes pour la carte
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[5] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[14] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[5] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex1_choro(){

	if(!isPlaying){
		sex1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex1_choro2();
	}

}


function sex1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[17] + "<span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[5] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[15] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[5] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex1_prop(){

	if(!isPlaying){
		sex1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex1_prop2();
	}
}

function sex1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[5] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[5] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex1_flow(){

	if(!isPlaying){
		sex1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex1_flow2();
	}

}

function sex2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_sex2; // array comprenant les bornes de classes pour la carte
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[7] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[6] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[5] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[6] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex2_choro(){

	if(!isPlaying){
		sex2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex2_choro2();
	}

}

function sex2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[1] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[6] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[0] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[6] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex2_prop(){

	if(!isPlaying){
		sex2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex2_prop2();
	}
}

function sex2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[6] + "</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[6] + "</span>" ;

	load(chemin, colDom, col) ;
}
function sex2_flow(){

	if(!isPlaying){
		sex2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		sex2_flow2();
	}

}

// SOCIAL PROFILE
// Educational level (individual)
function cleduc1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[7] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[7] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc1_choro(){

	if(!isPlaying){
		cleduc1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc1_choro2();
	}
}

function cleduc1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[7] +
	"</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[7] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc1_prop(){

	if(!isPlaying){
		cleduc1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc1_prop2();
	}
}

function cleduc1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[7] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[7] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc1_flow(){

	if(!isPlaying){
		cleduc1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc1_flow2();
	}

}

function cleduc2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[8] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[8] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc2_choro(){

	if(!isPlaying){
		cleduc2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc2_choro2();
	}
}

function cleduc2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[8] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[8] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc2_prop(){

	if(!isPlaying){
		cleduc2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc2_prop2();
	}
}

function cleduc2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[8] +
	"</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[8] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc2_flow(){

	if(!isPlaying){
		cleduc2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc2_flow2();
	}

}

function cleduc3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[9] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[9] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc3_choro(){

	if(!isPlaying){
		cleduc3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc3_choro2();
	}
}

function cleduc3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[9] +
	"</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[9] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc3_prop(){

	if(!isPlaying){
		cleduc3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc3_prop2();
	}

}

function cleduc3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[9] +
	"</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[9] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc3_flow(){

	if(!isPlaying){
		cleduc3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc3_flow2();
	}

}

function cleduc4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[10] + "</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[10] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc4_choro(){

	if(!isPlaying){
		cleduc4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc4_choro2();
	}

}

function cleduc4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[10] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[10] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc4_prop(){

	if(!isPlaying){
		cleduc4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc4_prop2();
	}
}

function cleduc4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[10] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[10] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cleduc4_flow(){

	if(!isPlaying){
		cleduc4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cleduc4_flow2();
	}

}

// Educational level (household)
function educmen1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] +
	"</span> " + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen1_choro(){

	if(!isPlaying){
		educmen1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen1_choro2();
	}
}

function educmen1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen1_prop(){

	if(!isPlaying){
		educmen1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen1_prop2();
	}
}

function educmen1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] +
	"</span> " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[11] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen1_flow(){

	if(!isPlaying){
		educmen1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen1_flow2();
	}

}

function educmen2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen2_choro(){

	if(!isPlaying){
		educmen2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen2_choro2();
	}
}

function educmen2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen2_prop(){

	if(!isPlaying){
		educmen2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen2_prop2();
	}
}

function educmen2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[12] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen2_flow(){

	if(!isPlaying){
		educmen2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen2_flow2();
	}

}

function educmen3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen3_choro(){

	if(!isPlaying){
		educmen3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen3_choro2();
	}
}

function educmen3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen3_prop(){

	if(!isPlaying){
		educmen3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen3_prop2();
	}

}

function educmen3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen3_flow(){

	if(!isPlaying){
		educmen3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen3_flow2();
	}

}

function educmen4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[14] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[14] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen4_choro(){

	if(!isPlaying){
		educmen4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen4_choro2();
	}

}

function educmen4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[9] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[14] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[14] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen4_prop(){

	if(!isPlaying){
		educmen4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen4_prop2();
	}
}

function educmen4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[13] + "</span> "
	+ titleMap[4] ) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[14] + "</span>" ;

	load(chemin, colDom, col) ;
}
function educmen4_flow(){

	if(!isPlaying){
		educmen4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		educmen4_flow2();
	}

}

// Household income
function rev1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span>" ;

	load(chemin, colDom, col) ;	
}
function rev1_choro(){
	
	if(!isPlaying){
		rev1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev1_choro2();
	}	

}
function rev1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span>" ;

	load(chemin, colDom, col) ;	
}
function rev1_prop(){
	
	if(!isPlaying){
		rev1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev1_prop2();
	}	
}

function rev1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span> "
	+ titleMap[4] ) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[41] + "</span>" ;

	load(chemin, colDom, col) ;
}
function rev1_flow(){
	
	if(!isPlaying){
		rev1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev1_flow2();
	}
}

function rev2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev2_choro(){
	
	if(!isPlaying){
		rev2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev2_choro2();
	}	

}

function rev2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev2_prop(){
	
	if(!isPlaying){
		rev2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev2_prop2();
	}	
}

function rev2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span> "
	+ titleMap[4] ) ; 

	$("#titleGr1").html("") ;
	
	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[42] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function rev2_flow(){
	
	if(!isPlaying){
		rev2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev2_flow2();
	}
}

function rev3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];
	
	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev3_choro(){
	
	if(!isPlaying){
		rev3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev3_choro2();
	}	

}

function rev3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev3_prop(){
	
	if(!isPlaying){
		rev3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev3_prop2();
	}	
}

function rev3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span> "
	+ titleMap[4] ) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[43] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function rev3_flow(){
	
	if(!isPlaying){
		rev3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev3_flow2();
	}
}

function rev4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev4_choro(){
	
	if(!isPlaying){
		rev4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev4_choro2();
	}	

}

function rev4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span>" ;

	load(chemin, colDom, col) ;	
}
function rev4_prop(){
	
	if(!isPlaying){
		rev4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev4_prop2();
	}	
}

function rev4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span> "
	+ titleMap[4] ) ;
	
	$("#titleGr1").html("") ; 

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[44] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function rev4_flow(){
	
	if(!isPlaying){
		rev4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev4_flow2();
	}
}

function rev5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev5; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[8] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[11] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function rev5_choro(){
	
	if(!isPlaying){
		rev5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev5_choro2();
	}	

}

function rev5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[9]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[6] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span>" ;

	load(chemin, colDom, col) ;	
}
function rev5_prop(){
	
	if(!isPlaying){
		rev5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev5_prop2();
	}	
}

function rev5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[10] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span> "
	+ titleMap[4] ) ;
	
	$("#titleGr1").html("") ; 

	titleGr2 = titleUnique[7] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[50] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function rev5_flow(){
	
	if(!isPlaying){
		rev5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		rev5_flow2();
	}
}

// Socioprofessional status
function cs1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[15] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[14] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[15] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cs1_choro(){

	if(!isPlaying){
		cs1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs1_choro2();
	}

}

function cs1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[17] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[15] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[15] + "<span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[15] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cs1_prop(){

	if(!isPlaying){
		cs1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs1_prop2();
	}
}

function cs1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[15] + "</span> "
	+ titleMap[11] + " " + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[15] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cs1_flow(){

	if(!isPlaying){
		cs1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs1_flow2();
	}

}

function cs2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[18] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[16] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs2_choro(){

	if(!isPlaying){
		cs2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs2_choro2();
	}

}

function cs2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[19]+ "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[17] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs2_prop(){

	if(!isPlaying){
		cs2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs2_prop2();
	}

}

function cs2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] +" <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[18] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[16] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs2_flow(){

	if(!isPlaying){
		cs2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs2_flow2();
	}

}

function cs3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[18]  + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs3_choro(){

	if(!isPlaying){
		cs3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs3_choro2();
	}
}

function cs3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[19] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[17] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs3_prop(){

	if(!isPlaying){
		cs3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs3_prop2();
	}
}

function cs3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] +" <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[18] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[17] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs3_flow(){

	if(!isPlaying){
		cs3_flow2();	
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs3_flow2();
	}

}

function cs4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[21] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[19] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs4_choro(){

	if(!isPlaying){
		cs4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs4_choro2();
	}
}

function cs4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[22]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[20] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs4_prop(){

	if(!isPlaying){
		cs4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs4_prop2();
	}
}

function cs4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[23] +" <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[21] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[18] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs4_flow(){

	if(!isPlaying){
		cs4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs4_flow2();
	}

}

function cs5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs5; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[24] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[22] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs5_choro(){

	if(!isPlaying){
		cs5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs5_choro2();
	}
}

function cs5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[25] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[23] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs5_prop(){

	if(!isPlaying){
		cs5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs5_prop2();
	}
}

function cs5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[24] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[19] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cs5_flow(){

	if(!isPlaying){
		cs5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cs5_flow2();
	}

}


// Socioprofessional status (household)
function cspmen1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[20] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[14] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[20] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cspmen1_choro(){

	if(!isPlaying){
		cspmen1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen1_choro2();
	}

}

function cspmen1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[17] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[20] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[15] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[20] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cspmen1_prop(){

	if(!isPlaying){
		cspmen1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen1_prop2();
	}
}

function cspmen1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[20] + "</span> "
	+ titleMap[11] + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[20] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function cspmen1_flow(){

	if(!isPlaying){
		cspmen1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen1_flow2();
	}

}

function cspmen2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[18]  + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen2_choro(){

	if(!isPlaying){
		cspmen2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen2_choro2();
	}

}

function cspmen2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[19] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[17] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen2_prop(){

	if(!isPlaying){
		cspmen2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen2_prop2();
	}

}

function cspmen2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[18] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[21] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen2_flow(){

	if(!isPlaying){
		cspmen2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen2_flow2();
	}

}

function cspmen3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[18]+ "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[16] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen3_choro(){

	if(!isPlaying){
		cspmen3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen3_choro2();
	}
}

function cspmen3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[19] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[17] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen3_prop(){

	if(!isPlaying){
		cspmen3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen3_prop2();
	}
}

function cspmen3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[18] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[22] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen3_flow(){

	if(!isPlaying){
		cspmen3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen3_flow2();
	}

}

function cspmen4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[21] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[19] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen4_choro(){

	if(!isPlaying){
		cspmen4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen4_choro2();
	}
}

function cspmen4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[22] +" <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span> "
	+ titleMap[3] ) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[20] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen4_prop(){

	if(!isPlaying){
		cspmen4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen4_prop2();
	}
}

function cspmen4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[23] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[21] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[23] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen4_flow(){

	if(!isPlaying){
		cspmen4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen4_flow2();
	}

}

function cspmen5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen5; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[24] +" <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[22] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen5_choro(){

	if(!isPlaying){
		cspmen5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen5_choro2();
	}
}

function cspmen5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[25] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[23] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen5_prop(){

	if(!isPlaying){
		cspmen5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen5_prop2();
	}
}

function cspmen5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[20] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[24] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[24] + "</span>" ;

	load(chemin, colDom, col) ;
}
function cspmen5_flow(){

	if(!isPlaying){
		cspmen5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		cspmen5_flow2();
	}

}


// Occupational status
function occ1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ1; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[26]+ "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[25] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[25] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[25] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ1_choro(){

	if(!isPlaying){
		 occ1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		 occ1_choro2();
	}

}

function occ1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[27] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[25] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[26] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[25] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ1_prop(){

	if(!isPlaying){
		occ1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ1_prop2();
	}
}

function occ1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[25] + "</span> "
	+ titleMap[11] + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[25] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ1_flow(){

	if(!isPlaying){
		occ1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ1_flow2();
	}

}

function occ2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ2; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[26] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[25] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span>" ;

	load(chemin, colDom, col) ;
}
function occ2_choro(){

	if(!isPlaying){
		occ2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ2_choro2();
	}

}

function occ2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[27]+ "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[26] + "<span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span>" ;

	load(chemin, colDom, col) ;
}
function occ2_prop(){

	if(!isPlaying){
		occ2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ2_prop2();
	}
}

function occ2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[26] + "</span>" ;

	load(chemin, colDom, col) ;
}
function occ2_flow(){

	if(!isPlaying){
		occ2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ2_flow2();
	}
}

function occ3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ3; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[28] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[27] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[27] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[27] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ3_choro(){

	if(!isPlaying){
		occ3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ3_choro2();
	}

}

function occ3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[29] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[27] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[28] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[27] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ3_prop(){

	if(!isPlaying){
		occ3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ3_prop2();
	}
}

function occ3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[27] + "</span> "
	+ titleMap[11] + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[27] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ3_flow(){

	if(!isPlaying){
		occ3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ3_flow2();
	}
}

function occ4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ4; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[7] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[28] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[5] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[28] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ4_choro(){

	if(!isPlaying){
		occ4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ4_choro2();
	}

}

function occ4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[1]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[28] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[0] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[28] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ4_prop(){

	if(!isPlaying){
		occ4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ4_prop2();
	}
}

function occ4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[28] + "</span> "
	+ titleMap[11] + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[28] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ4_flow(){

	if(!isPlaying){
		occ4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ4_flow2();
	}
}

function occ5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ5; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[26] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[29] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[25] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[29] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ5_choro(){

	if(!isPlaying){
		occ5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ5_choro2();
	}

}

function occ5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[27] + "<span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[29] + "</span> "
	+ titleMap[11] + titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[26] + "<span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[29] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ5_prop(){

	if(!isPlaying){
		occ5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ5_prop2();
	}
}

function occ5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[2] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[29] + "</span> "
	+ titleMap[11] + titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[1] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[29] + "</span> " + titleUnique[12];

	load(chemin, colDom, col) ;
}
function occ5_flow(){

	if(!isPlaying){
		occ5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		occ5_flow2();
	}
}


// RESIDENTIAL AREA
// Departement of residence
function dep1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep1; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"] ; //array comprenant les 5 codes couleurs pour la carte
	
	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ; 
	
	load(chemin, colDom, col) ;	
}
function dep1_choro(){
	
	if(!isPlaying){
		dep1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep1_choro2();
	}	

}

function dep1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep1_prop(){
	
	if(!isPlaying){
		dep1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep1_prop2();
	}	
}

function dep1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] +  nomVC + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function dep1_flow(){
	
	if(!isPlaying){
		dep1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep1_flow2();
	}

}

function dep2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep2; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span>" ;

	load(chemin, colDom, col) ;	
}
function dep2_choro(){
	
	if(!isPlaying){
		dep2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep2_choro2();
	}	

}

function dep2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep2_prop(){
	
	if(!isPlaying){
		dep2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep2_prop2();
	}	
}

function dep2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[6]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[45] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function dep2_flow(){
	
	if(!isPlaying){
		dep2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep2_flow2();
	}

}

function dep3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep3; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep3_choro(){
	
	if(!isPlaying){
		dep3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep3_choro2();
	}	

}

function dep3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep3_prop(){
	
	if(!isPlaying){
		dep3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep3_prop2();
	}	
}

function dep3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[6]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[46] + "</span>" ;

		
	load(chemin, colDom, col) ;
}
function dep3_flow(){
	
	if(!isPlaying){
		dep3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep3_flow2();
	}

}

function dep4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep4; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep4_choro(){
	
	if(!isPlaying){
		dep4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep4_choro2();
	}	

}

function dep4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep4_prop(){
	
	if(!isPlaying){
		dep4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep4_prop2();
	}	

	
}

function dep4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[6]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[47] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function dep4_flow(){
	
	if(!isPlaying){
		dep4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep4_flow2();
	}

}

function dep5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep5; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep5_choro(){
	
	if(!isPlaying){
		dep5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep5_choro2();
	}	

}

function dep5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span>" ;
	
	load(chemin, colDom, col) ;	
}
function dep5_prop(){
	
	if(!isPlaying){
		dep5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep5_prop2();
	}	
}

function dep5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;
	
	$("#mapTitle").html(titleMap[6]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ; 
	
	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[48] + "</span>" ;
		
	load(chemin, colDom, col) ;
}
function dep5_flow(){
	
	if(!isPlaying){
		dep5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		dep5_flow2();
	}

}


// Residential rings
function resarea3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_resarea3; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea3_choro(){

	if(!isPlaying){
		resarea3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea3_choro2();
	}

}

function resarea3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] +  nomVC + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea3_prop(){

	if(!isPlaying){
		resarea3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea3_prop2();
	}
}

function resarea3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] +  nomVC + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[30] + nomVC + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea3_flow(){

	if(!isPlaying){
		resarea3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea3_flow2();
	}

}

function resarea2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_resarea2; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea2_choro(){

	if(!isPlaying){
		resarea2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea2_choro2();
	}

}

function resarea2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea2_prop(){

	if(!isPlaying){
		resarea2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea2_prop2();
	}
}

function resarea2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[31] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea2_flow(){

	if(!isPlaying){
		resarea2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea2_flow2();
	}

}

function resarea1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_resarea1; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea1_choro(){

	if(!isPlaying){
		resarea1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea1_choro2();
	}

}

function resarea1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea1_prop(){

	if(!isPlaying){
		resarea1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea1_prop2();
	}
}

function resarea1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"]   ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[32] + "</span>" ;

	load(chemin, colDom, col) ;
}
function resarea1_flow(){

	if(!isPlaying){
		resarea1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		resarea1_flow2();
	}

}



// ACTIVITY / TRAVEL BEHAVIOR
// Activity type
function act1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	//["#fef7e1", "#8fbee8", "#6998ca", "#4273af", "#005099"]

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act1_choro(){

	if(!isPlaying){
		act1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act1_choro2();
	}

}

function act1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act1_prop(){

	if(!isPlaying){
		act1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act1_prop2();
	}
}

function act1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[33] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act1_flow(){

	if(!isPlaying){
		act1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act1_flow2();
	}

}

function act2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act2_choro(){

	if(!isPlaying){
		act2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act2_choro2();
	}

}

function act2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act2_prop(){

	if(!isPlaying){
		act2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act2_prop2();
	}
}

function act2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[34] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act2_flow(){

	if(!isPlaying){
		act2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act2_flow2();
	}

}

function act3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act3_choro(){

	if(!isPlaying){
		act3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act3_choro2();
	}

}

function act3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act3_prop(){

	if(!isPlaying){
		act3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act3_prop2();
	}
}

function act3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[35] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act3_flow(){

	if(!isPlaying){
		act3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act3_flow2();
	}

}

function act4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act4_choro(){

	if(!isPlaying){
		act4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act4_choro2();
	}

}

function act4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act4_prop(){

	if(!isPlaying){
		act4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act4_prop2();
	}
}

function act4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[36] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act4_flow(){

	if(!isPlaying){
		act4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act4_flow2();
	}

}

function act5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act5; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[0]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[2] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act5_choro(){

	if(!isPlaying){
		act5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act5_choro2();
	}

}

function act5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[5]+ " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2];

	titleGr2 = titleUnique[3] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act5_prop(){

	if(!isPlaying){
		act5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act5_prop2();
	}
}

function act5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[6] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[4] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[37] + "</span>" ;

	load(chemin, colDom, col) ;
}
function act5_flow(){

	if(!isPlaying){
		act5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		act5_flow2();
	}

}

// Travel mode

function mode3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[12] + titleMap[30] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[38] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[8] + titleUnique[29] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[38] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode3_choro(){

	if(!isPlaying){
		mode3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode3_choro2();
	}

}

function mode3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[13]  + titleMap[30] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[38] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[13] + titleUnique[29] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[38] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode3_prop(){

	if(!isPlaying){
		mode3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode3_prop2();
	}
}

function mode3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[14] + titleMap[30] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[38] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[9] + titleUnique[29] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[38] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode3_flow(){

	if(!isPlaying){
		mode3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode3_flow2();
	}

}

function mode2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[12] + titleMap[31] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[39] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[8] + titleUnique[30] + " <span style='font-weight : bold ; color:" + col[4] +"'>" + modalite[39] +
	"</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode2_choro(){

	if(!isPlaying){
		mode2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode2_choro2();
	}

}

function mode2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"]   ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[13] + titleMap[31] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[39] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[13] + titleUnique[30] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[39] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode2_prop(){

	if(!isPlaying){
		mode2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode2_prop2();
	}
}

function mode2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[14] + titleMap[31] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[39] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[9] + titleUnique[30] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[39] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode2_flow(){

	if(!isPlaying){
		mode2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode2_flow2();
	}

}

function mode1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").html(titleMap[12] + titleMap[32] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[40] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2]  ;

	titleGr2 = titleUnique[8] + titleUnique[31] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[40] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode1_choro(){

	if(!isPlaying){
		mode1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode1_choro2();
	}

}

function mode1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[13] + titleMap[32] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[40] + "</span> "
	+ titleMap[3]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;

	titleGr2 = titleUnique[13] + titleUnique[31] + " <span  style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[40] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode1_prop(){

	if(!isPlaying){
		mode1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode1_prop2();
	}
}

function mode1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").html(titleMap[14] + titleMap[32] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + modalite[40] + "</span> "
	+ titleMap[4]) ;

	$("#titleGr1").html("") ;

	titleGr2 = titleUnique[9] + titleUnique[31] + " <span style='font-weight : bold ; color:" + col[4] +"'>"
	+ modalite[40] + "</span> " + titleUnique[10];

	load(chemin, colDom, col) ;
}
function mode1_flow(){

	if(!isPlaying){
		mode1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
		d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		clearInterval(interval);
		mode1_flow2();
	}

}


