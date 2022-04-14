// Récrire tMap pour le overflow
function replaceStr(str, find, replace) {
	    for (var i = 0; i < find.length; i++) {
	        str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
	    }
	    return str;
	}
var find = ["<strong>","</strong>", "<span style = 'font-size : .7em'>", "</span>"];
var replace = ['','', '', ''];

// Résolution écran
//console.log(screen.width);
// écran de la dev :
val = 1536;

// GLOBAL OVERVIEW
// Present population
function pop0_choro2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/pop0_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#e6e1d0", "#cfcad2", "#b7b4d3", "#9f9ed3", "#8788d4", "#6e71d5", "#525ad7", "#000093", "#ffffff00"]
			var colDom = colDom_dens; // array comprenant les bornes de classes pour la carte

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[0]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[0] + spanPopup[0];

			load(chemin, colDom, col) ;
		}
function pop0_choro(){
	if(!isPlaying) {
		pop0_choro2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		pop0_choro2();
	}
}

function pop0_prop2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/pop0_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
			var colDom = "" ;

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[1]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[1] + spanPopup[0];

			/*d3.select("#grIDF").selectAll("svg").remove() ;
			d3.select("#grSect").selectAll("svg").remove() ;*/

			load(chemin, colDom, col) ;
			/*d3.select("#next").style('display', 'none') ;
			d3.select("#next2").style('display', 'none') ;
			d3.select("#return2").style('display', 'none') ;*/
		}

function pop0_prop(){
	if(!isPlaying) {
		pop0_prop2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		pop0_prop2();
	}
}

function pop0_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/pop0_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#eef4fe", "#b9d2dd", "#93bbc7", "#6aa5b1", "#000093"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[2].length;
	// console.log(len);

	if (screen.width<1440  && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[2], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[2]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[2] + spanPopup[0];

	load(chemin, colDom, col) ;
}

function pop0_flow(){
	if(!isPlaying){
		pop0_flow2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		pop0_flow2();
	}
}

// Resident population
function res2_choro2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/res2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"] ;
			var colDom = colDom_res2; // array comprenant les bornes de classes pour la carte

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[3]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[3] + spanPopup[0];

			load(chemin, colDom, col) ;
		}
function res2_choro(){
	if(!isPlaying){
		res2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		res2_choro2();
	}
}

function res2_prop2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/res2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
			var colDom = "" ;

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[4]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[4] + spanPopup[0];

			load(chemin, colDom, col) ;
		}
function res2_prop(){
	if(!isPlaying){
		res2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		res2_prop2();
	}
}

function res1_choro2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/res1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"];
			var colDom = colDom_res1; // array comprenant les bornes de classes pour la carte

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[5]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[5] + spanPopup[0];

			load(chemin, colDom, col) ;
		}

function res1_choro(){

	if(!isPlaying){
		res1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		res1_choro2();
	}
}

function res1_prop2(){
			// Définition des variables pour les fonctions de création de la carte et des graphiques
			chemin = "/data/" + nomED + "/res1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
			var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
			var colDom = "" ;

			$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
			$("#mapTitle").html(tMap[6]) ;

			$("#titleGr1").html("") ;

			titleGr2 = tUnique[6] + spanPopup[0];

			load(chemin, colDom, col) ;
		}

function res1_prop(){

	if(!isPlaying){
		res1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		res1_prop2();
	}

}


// DEMOGRAPHIC PROFILE
// Age groups
function age4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[7]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[7] + spanPopup[0] ;

	load(chemin, colDom, col) ;
}
function age4_choro(){
	if(!isPlaying) {
		age4_choro2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age4_choro2();
	}
}

function age4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[8]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2]  ;

	titleGr2 = tUnique[8] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age4_prop(){

	if(!isPlaying){
		age4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age4_prop2();
	}
}

function age4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[9], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[9]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[9] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age4_flow(){

	if(!isPlaying){
		age4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age4_flow2();
	}

}
function age3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[10]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[10] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age3_choro(){

	if(!isPlaying){
		age3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true)
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age3_choro2()
	}

}

function age3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[11]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[11] + spanPopup[0];

	load(chemin, colDom, col) ;

}
function age3_prop(){

	if(!isPlaying){
		age3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age3_prop2();
	}
}

function age3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val  && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[12], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[12]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[12] + spanPopup[0];

	load(chemin, colDom, col) ;
}

function age3_flow(){

	if(!isPlaying){
		age3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age3_flow2();
	}

}
function age2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[13]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[13] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age2_choro(){

	if(!isPlaying){
		age2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age2_choro2();
	}

}

function age2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[14]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[14] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age2_prop(){

	if(!isPlaying){
		age2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		// d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age2_prop2();
	}
}

function age2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val  && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[15], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[15]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[15] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age2_flow(){

	if(!isPlaying){
		age2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age2_flow2();
	}

}
function age1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_age1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[16]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[16] + spanPopup[0];

	load(chemin, colDom, col) ;
}

function age1_choro(){

	if(!isPlaying){
		age1_choro2();

	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age1_choro2();
	}

}

function age1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[17]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[0] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[17] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age1_prop(){

	if(!isPlaying){
		age1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age1_prop2()
	}
}

function age1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/age1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[18], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[18]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[18] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function age1_flow(){

	if(!isPlaying){
		age1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		age1_flow2();
	}

}



// Sex
function sex2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_sex2; // array comprenant les bornes de classes pour la carte
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[19]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[19] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex2_choro(){

	if(!isPlaying){
		sex2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex2_choro2();
	}

}

function sex2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[20]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[20] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex2_prop(){

	if(!isPlaying){
		sex2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex2_prop2();
	}
}

function sex2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#a5a5a5", "#cccccc", "#d5e8ce", "#add6b9", "#47b291"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[21], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[21]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[21] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex2_flow(){

	if(!isPlaying){
		sex2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex2_flow2();
	}

}

function sex1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_sex1; // array comprenant les bornes de classes pour la carte
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[22]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[22] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex1_choro(){

	if(!isPlaying){
		sex1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex1_choro2();
	}

}


function sex1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[23]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[1] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[23] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex1_prop(){

	if(!isPlaying){
		sex1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex1_prop2();
	}
}

function sex1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/sex1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#7f7f7f", "#a5a5a5", "#d9dadb", "#a199b8", "#4e3e8e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[24], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[24]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[24] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function sex1_flow(){

	if(!isPlaying){
		sex1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		sex1_flow2();
	}

}

// SOCIAL PROFILE
// Educational level (individual)
function cleduc4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[25]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[25] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc4_choro(){

	if(!isPlaying){
		cleduc4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc4_choro2();
	}

}

function cleduc4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[26]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[26] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc4_prop(){

	if(!isPlaying){
		cleduc4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc4_prop2();
	}
}

function cleduc4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[27], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[27]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[27] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc4_flow(){

	if(!isPlaying){
		cleduc4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc4_flow2();
	}

}

function cleduc3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[28]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[28] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc3_choro(){

	if(!isPlaying){
		cleduc3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc3_choro2();
	}
}

function cleduc3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[29]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[29] + spanPopup[0];

	load(chemin, colDom, col) ;
}

function cleduc3_prop(){

	if(!isPlaying){
		cleduc3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		cleduc3_prop2();
	}

}

function cleduc3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[30], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[30]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[30] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc3_flow(){

	if(!isPlaying){
		cleduc3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc3_flow2();
	}

}

function cleduc2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte


	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[31]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[31] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc2_choro(){

	if(!isPlaying){
		cleduc2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc2_choro2();
	}
}

function cleduc2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[32]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[32] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc2_prop(){

	if(!isPlaying){
		cleduc2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc2_prop2();
	}
}

function cleduc2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[33].length;
	// // console.log(len);

	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[33], find, replace));
	} else if (screen.width<=1920  && screen.width>1024 && len>=205) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[33], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[33]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[33] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc2_flow(){

	if(!isPlaying){
		cleduc2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc2_flow2();
	}

}

function cleduc1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cleduc1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[34]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[34] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc1_choro(){

	if(!isPlaying){
		cleduc1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc1_choro2();
	}
}

function cleduc1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[35]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[2] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[35] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc1_prop(){

	if(!isPlaying){
		cleduc1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc1_prop2();
	}
}

function cleduc1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cleduc1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[36], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[36]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[36] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cleduc1_flow(){

	if(!isPlaying){
		cleduc1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cleduc1_flow2();
	}

}


// Educational level (household)
function educmen4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[37]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[37] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen4_choro(){

	if(!isPlaying){
		educmen4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen4_choro2();
	}

}

function educmen4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[38]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[38] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen4_prop(){

	if(!isPlaying){
		educmen4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen4_prop2();
	}
}

function educmen4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[39].length;
	// // console.log(len);

	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[39], find, replace));
	} else if (screen.width<=1920 && screen.width>1024 && len>=211) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[39], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[39]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[39] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen4_flow(){

	if(!isPlaying){
		educmen4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen4_flow2();
	}

}

function educmen3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[40]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[40] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen3_choro(){

	if(!isPlaying){
		educmen3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen3_choro2();
	}
}

function educmen3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[41]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[41] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen3_prop(){

	if(!isPlaying){
		educmen3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen3_prop2();
	}

}

function educmen3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[42].length;
	// // console.log(len);
	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[42], find, replace));
	} else if (screen.width<=1920 && screen.width>1024 && len>=206) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[42], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[42]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[42] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen3_flow(){

	if(!isPlaying){
		educmen3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen3_flow2();
	}

}

function educmen2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[43]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[43] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen2_choro(){

	if(!isPlaying){
		educmen2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen2_choro2();
	}
}

function educmen2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[44]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[44] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen2_prop(){

	if(!isPlaying){
		educmen2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen2_prop2();
	}
}

function educmen2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[45].length;
	// // console.log(len);
	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[45], find, replace));
	} else if (screen.width<=1920 && screen.width>1024 && len>=214) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[45], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[45]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[45] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen2_flow(){

	if(!isPlaying){
		educmen2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen2_flow2();
	}

}

function educmen1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_educmen1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[46]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[46] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen1_choro(){

	if(!isPlaying){
		educmen1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen1_choro2();
	}
}

function educmen1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[47]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[3] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[47] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen1_prop(){

	if(!isPlaying){
		educmen1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen1_prop2();
	}
}

function educmen1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/educmen1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[48].length;
	// // console.log(len);

	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[48], find, replace));
	} else if (screen.width<=1920 && screen.width>1024 && len>=207) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[48], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[48]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[48] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function educmen1_flow(){

	if(!isPlaying){
		educmen1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		educmen1_flow2();
	}

}



// Household income
function rev4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[49]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[49] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev4_choro(){

	if(!isPlaying){
		rev4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev4_choro2();
	}

}

function rev4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[50]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[50] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev4_prop(){

	if(!isPlaying){
		rev4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev4_prop2();
	}
}

function rev4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[51], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[51]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[51] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev4_flow(){

	if(!isPlaying){
		rev4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev4_flow2();
	}
}

function rev3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[52]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[52] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev3_choro(){

	if(!isPlaying){
		rev3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev3_choro2();
	}

}

function rev3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[53]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[53] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev3_prop(){

	if(!isPlaying){
		rev3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev3_prop2();
	}
}

function rev3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[54], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[54]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[54] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev3_flow(){

	if(!isPlaying){
		rev3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev3_flow2();
	}
}

function rev2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[55]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[55] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev2_choro(){

	if(!isPlaying){
		rev2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev2_choro2();
	}

}

function rev2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[56]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[56] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev2_prop(){

	if(!isPlaying){
		rev2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev2_prop2();
	}
}

function rev2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[57], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[57]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[57] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev2_flow(){

	if(!isPlaying){
		rev2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev2_flow2();
	}
}

function rev1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[58]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[58] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev1_choro(){

	if(!isPlaying){
		rev1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev1_choro2();
	}

}
function rev1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[59]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[59] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev1_prop(){

	if(!isPlaying){
		rev1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev1_prop2();
	}
}

function rev1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[60], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[60]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[60] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev1_flow(){

	if(!isPlaying){
		rev1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev1_flow2();
	}
}
//revenu inconnu
function rev5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_rev5; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[61]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[61] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev5_choro(){

	if(!isPlaying){
		rev5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev5_choro2();
	}

}

function rev5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[62]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[10] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[62] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev5_prop(){

	if(!isPlaying){
		rev5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev5_prop2();
	}
}

function rev5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/rev5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[63], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[63]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[63] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function rev5_flow(){

	if(!isPlaying){
		rev5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		rev5_flow2();
	}
}



// Socioprofessional status
function cs5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs5; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[64]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[64] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs5_choro(){

	if(!isPlaying){
		cs5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs5_choro2();
	}
}

function cs5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[65]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[65] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs5_prop(){

	if(!isPlaying){
		cs5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs5_prop2();
	}
}

function cs5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[66], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[66]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[66] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs5_flow(){

	if(!isPlaying){
		cs5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs5_flow2();
	}

}

function cs4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[67]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[67] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs4_choro(){

	if(!isPlaying){
		cs4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs4_choro2();
	}
}

function cs4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[68]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[68] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs4_prop(){

	if(!isPlaying){
		cs4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs4_prop2();
	}
}

function cs4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[69], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[69]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[69] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs4_flow(){

	if(!isPlaying){
		cs4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs4_flow2();
	}

}

function cs3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[70]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[70] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs3_choro(){

	if(!isPlaying){
		cs3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs3_choro2();
	}
}

function cs3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[71]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[71] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs3_prop(){

	if(!isPlaying){
		cs3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs3_prop2();
	}
}

function cs3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[72].length;
	// // console.log(len);
	if (screen.width<val && screen.width>1024 && len<=173) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[72], find, replace));
	} else if (screen.width<=val && screen.width>1024 && len>173){
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[72], find, replace));
	} else if (screen.width=1920 && screen.width>1024 && len>=204){
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[72], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[72]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[72] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs3_flow(){

	if(!isPlaying){
		cs3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs3_flow2();
	}

}

function cs2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[73]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[73] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs2_choro(){

	if(!isPlaying){
		cs2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs2_choro2();
	}

}

function cs2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[74]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[74] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs2_prop(){

	if(!isPlaying){
		cs2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs2_prop2();
	}

}

function cs2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[75].length;
	// // console.log(len);
	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[75], find, replace));
	} else if (screen.width<=val && screen.width>1024 && len>173){
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[72], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[75]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[75] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs2_flow(){

	if(!isPlaying){
		cs2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs2_flow2();
	}

}
function cs1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cs1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[76]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[76] + spanPopup[0];


	load(chemin, colDom, col) ;
}
function cs1_choro(){

	if(!isPlaying){
		cs1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs1_choro2();
	}

}

function cs1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[77]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[4] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[77] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs1_prop(){

	if(!isPlaying){
		cs1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs1_prop2();
	}
}

function cs1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cs1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[78], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[78]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[78] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cs1_flow(){

	if(!isPlaying){
		cs1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cs1_flow2();
	}

}



// Socioprofessional status (household)
function cspmen5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen5; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[79]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[79] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen5_choro(){

	if(!isPlaying){
		cspmen5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen5_choro2();
	}
}

function cspmen5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[80]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[80] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen5_prop(){

	if(!isPlaying){
		cspmen5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen5_prop2();
	}
}

function cspmen5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[81].length;
	// // console.log(len);
	if (screen.width<1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[81], find, replace));
	} else if (screen.width=1920 && screen.width>1024 && len>=211) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[81], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[81]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[81] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen5_flow(){

	if(!isPlaying){
		cspmen5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen5_flow2();
	}

}
function cspmen4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen4; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"]; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[82]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[82] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen4_choro(){

	if(!isPlaying){
		cspmen4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen4_choro2();
	}
}

function cspmen4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[83]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[83] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen4_prop(){

	if(!isPlaying){
		cspmen4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen4_prop2();
	}
}

function cspmen4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=1920 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[84], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[84]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[84] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen4_flow(){

	if(!isPlaying){
		cspmen4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen4_flow2();
	}

}

function cspmen3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen3; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[85]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[85] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen3_choro(){

	if(!isPlaying){
		cspmen3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen3_choro2();
	}
}

function cspmen3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[86]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[86] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen3_prop(){

	if(!isPlaying){
		cspmen3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen3_prop2();
	}
}

function cspmen3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[87].length;
	// // console.log(len);
	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[87], find, replace));
	} else if (screen.width>val && screen.width>1024 && len>=207) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[87], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[87]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[87] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen3_flow(){

	if(!isPlaying){
		cspmen3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen3_flow2();
	}

}

function cspmen2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen2; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[88]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[88] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen2_choro(){

	if(!isPlaying){
		cspmen2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen2_choro2();
	}

}

function cspmen2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[89]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[89] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen2_prop(){

	if(!isPlaying){
		cspmen2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen2_prop2();
	}

}

function cspmen2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[90], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[90]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[90] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen2_flow(){

	if(!isPlaying){
		cspmen2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen2_flow2();
	}

}

function cspmen1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_cspmen1; // array comprenant les bornes de classes pour la carte
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[91]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[91] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen1_choro(){

	if(!isPlaying){
		cspmen1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen1_choro2();
	}

}

function cspmen1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[92]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[5] + "</strong>" + titleSegreg[2];

    titleGr2 = tUnique[92] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen1_prop(){

	if(!isPlaying){
		cspmen1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen1_prop2();
	}
}

function cspmen1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/cspmen1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[93], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[93]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[93] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function cspmen1_flow(){

	if(!isPlaying){
		cspmen1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		cspmen1_flow2();
	}

}




// Occupational status
function occ5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ5; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[94]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[94] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ5_choro(){

	if(!isPlaying){
		occ5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ5_choro2();
	}

}

function occ5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[95]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[95] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ5_prop(){

	if(!isPlaying){
		occ5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ5_prop2();
	}
}

function occ5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[96], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[96]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[96] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ5_flow(){

	if(!isPlaying){
		occ5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ5_flow2();
	}
}
function occ4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ4; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[97]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[97] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ4_choro(){

	if(!isPlaying){
		occ4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ4_choro2();
	}

}

function occ4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[98]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

    titleGr2 = tUnique[98] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ4_prop(){

	if(!isPlaying){
		occ4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ4_prop2();
	}
}

function occ4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[99], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[99]) ;

	$("#titleGr1").html("") ;

    titleGr2 = tUnique[99] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ4_flow(){

	if(!isPlaying){
		occ4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ4_flow2();
	}
}
function occ3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ3; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[100]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2]  ;

    titleGr2 = tUnique[100] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ3_choro(){

	if(!isPlaying){
		occ3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ3_choro2();
	}

}

function occ3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[101]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[101] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ3_prop(){

	if(!isPlaying){
		occ3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ3_prop2();
	}
}

function occ3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[102].length;
	// console.log(len);
	if (screen.width<val && screen.width>1024 && len<=176) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[102], find, replace));
	} else if (screen.width<=val && screen.width>1024 && len>176){
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[102], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[102]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[102] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ3_flow(){

	if(!isPlaying){
		occ3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ3_flow2();
	}
}

function occ2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ2; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[103]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[103] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ2_choro(){

	if(!isPlaying){
		occ2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ2_choro2();
	}

}

function occ2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[104]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[104] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ2_prop(){

	if(!isPlaying){
		occ2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ2_prop2();
	}
}

function occ2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[105], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[105]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[105] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ2_flow(){

	if(!isPlaying){
		occ2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ2_flow2();
	}
}

function occ1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_occ1; // array comprenant les bornes de classes pour la carte
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[106]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[106] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ1_choro(){

	if(!isPlaying){
		 occ1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		 occ1_choro2();
	}

}

function occ1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[107]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[6] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[107] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ1_prop(){

	if(!isPlaying){
		occ1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ1_prop2();
	}
}

function occ1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/occ1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<1440 && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[108], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[108]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[108] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function occ1_flow(){

	if(!isPlaying){
		occ1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		occ1_flow2();
	}

}




// RESIDENTIAL AREA
// Departement of residence
function dep5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep5; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[109]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[109] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep5_choro(){

	if(!isPlaying){
		dep5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep5_choro2();
	}

}

function dep5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[110]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[110] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep5_prop(){

	if(!isPlaying){
		dep5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep5_prop2();
	}
}

function dep5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[111], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[111]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[111] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep5_flow(){

	if(!isPlaying){
		dep5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep5_flow2();
	}

}
function dep4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep4; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[112]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[112] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep4_choro(){

	if(!isPlaying){
		dep4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep4_choro2();
	}

}

function dep4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[113]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[113] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep4_prop(){

	if(!isPlaying){
		dep4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep4_prop2();
	}


}

function dep4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[114], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[114]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[114] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep4_flow(){

	if(!isPlaying){
		dep4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep4_flow2();
	}

}

function dep3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep3; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[115]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[115] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep3_choro(){

	if(!isPlaying){
		dep3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep3_choro2();
	}

}

function dep3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[116]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[116] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep3_prop(){

	if(!isPlaying){
		dep3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep3_prop2();
	}
}

function dep3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[117], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[117]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[117] + spanPopup[0];


	load(chemin, colDom, col) ;
}
function dep3_flow(){

	if(!isPlaying){
		dep3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep3_flow2();
	}

}

function dep2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep2; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[118]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[118] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep2_choro(){

	if(!isPlaying){
		dep2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep2_choro2();
	}

}

function dep2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[119]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[119] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep2_prop(){

	if(!isPlaying){
		dep2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep2_prop2();
	}
}

function dep2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[120], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[120]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[120] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep2_flow(){

	if(!isPlaying){
		dep2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep2_flow2();
	}

}

function dep1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_dep1; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[121]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[121] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep1_choro(){

	if(!isPlaying){
		dep1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep1_choro2();
	}

}

function dep1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[122]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[1];
	titleMoran =  titleSegreg[0] + " <strong>" + indicator[11] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[122] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep1_prop(){

	if(!isPlaying){
		dep1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep1_prop2();
	}
}

function dep1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/dep1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[123], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[123]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[123] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function dep1_flow(){

	if(!isPlaying){
		dep1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		dep1_flow2();
	}

}



// Residential rings
function resarea3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	if(nomED == "BESANCON" || nomED == "CARCASSONNE"){
		chemin = "/data/" + nomED + "/resarea2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
		var colDom = colDom_resarea2; // array comprenant les bornes de classes pour la carte
	}else{
		chemin = "/data/" + nomED + "/resarea3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
		var colDom = colDom_resarea3; // array comprenant les bornes de classes pour la carte
	}

	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[124] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + tMap[125]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2]  ;

	titleGr2 = tUnique[124]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea3_choro(){
	if (!isPlaying) {
		resarea3_choro2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea3_choro2();
	}
}

function resarea3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	if(nomED == "BESANCON" || nomED == "CARCASSONNE"){
		chemin = "/data/" + nomED + "/resarea2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	}else{
		chemin = "/data/" + nomED + "/resarea3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	}
	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[126] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + tMap[127]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[125]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea3_prop(){
	if (!isPlaying) {
		resarea3_prop2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea3_prop2();
	}
}

function resarea3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	if(nomED == "BESANCON" || nomED == "CARCASSONNE"){
		chemin = "/data/" + nomED + "/resarea2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	}else{
		chemin = "/data/" + nomED + "/resarea3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	}
	var col = ["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[128], find, replace) + nomVC + replaceStr(tMap[129], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[128] + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + tMap[129]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[126]  + " <span  style='font-weight : bold ; color:" + col[4] +"'>" + nomVC + "</span> " + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea3_flow(){
	if (!isPlaying) {
		resarea3_flow2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		resarea3_flow2();
	}
}

function resarea2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_resarea2; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[130]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[127] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea2_choro(){
	if (!isPlaying) {
		resarea2_choro2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea2_choro2();
	}
}

function resarea2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ;
	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[131]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[128] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea2_prop(){
	if (!isPlaying) {
		resarea2_prop2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea2_prop2();
	}
}

function resarea2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = "" ;

	var col = ["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"]  ; //array comprenant les 5 codes couleurs pour la carte

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[132], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[132]) ;

	titleGr2 = tUnique[129] + spanPopup[0];

	$("#titleGr1").html("") ;

	load(chemin, colDom, col) ;
}
function resarea2_flow(){
	if (!isPlaying) {
		resarea2_flow2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea2_flow2();
	}
}

function resarea1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_resarea1; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[133]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2]  ;

	titleGr2 = tUnique[130] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea1_choro(){

	if(!isPlaying){
		resarea1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea1_choro2();
	}

}

function resarea1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[134]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[7] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[131] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea1_prop(){

	if(!isPlaying){
		resarea1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea1_prop2();
	}
}

function resarea1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/resarea1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"]   ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[135], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[135]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[132] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function resarea1_flow(){

	if(!isPlaying){
		resarea1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		resarea1_flow2();
	}

}


//QPV
function qpv2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_qpv2; // array comprenant les bornes de classes pour la carte
	var col = ["#fef6df", "#fecc8d", "#f9ad6c", "#f28e47", "#e77000"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[136]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[1];
	// dlDuncan = "<a href=" + "data.zip" + " download='" + nomED +"_QPV_duncan.zip'><img src='/dist/assets/download.svg'/></a>";

	titleMoran = titleSegreg[3] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[133] + spanPopup[0];

	load(chemin, colDom, col) ;
	//layerControl.addOverlay(qpvOverlay, overlayName[2]);
}
function qpv2_choro(){

	if(!isPlaying){
		qpv2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv2_choro2();
	}

}

function qpv2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#fecc8d", "#f9ad6c", "#f28e47", "#e77000"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[137]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[1];
	// dlDuncan = "<a href=" + "/data/" + nomED + "/indice_segreg/qpv_Duncan.csv" + " download='" + nomED +"_QPV_duncan.csv'><img src='/dist/assets/download.svg'/></a>";

	titleMoran = titleSegreg[3] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[2] ;
	// dlMoran = "<a href=" + "/data/" + nomED + "/indice_segreg/qpv_Moran.csv" + " download='" + nomED +"_QPV_Moran.csv'><img src='/dist/assets/download.svg'/></a>";

	titleGr2 = tUnique[134] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function qpv2_prop(){

	if(!isPlaying){
		qpv2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv2_prop2();
	}
}

function qpv2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef6df", "#fecc8d", "#f9ad6c", "#f28e47", "#e77000"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[138], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[138]) ;

	$("#titleGr1").html("") ;
	// dlDuncan = '';
	// dlMoran = '';

	titleGr2 = tUnique[135] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function qpv2_flow(){

	if(!isPlaying){
		qpv2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv2_flow2();
	}

}

function qpv1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_qpv1; // array comprenant les bornes de classes pour la carte
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[139]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[2];

	titleGr2 = tUnique[136] + spanPopup[0];

	load(chemin, colDom, col) ;
	//layerControl.addOverlay(qpvOverlay, overlayName[2]);
}
function qpv1_choro(){

	if(!isPlaying){
		qpv1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv1_choro2();
	}

}

function qpv1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[140]) ;

	titleDuncan =  titleSegreg[0] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[1];

	titleMoran = titleSegreg[3] + " <strong>" + indicator[12] + "</strong>" + titleSegreg[2] ;

	titleGr2 = tUnique[137] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function qpv1_prop(){

	if(!isPlaying){
		qpv1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv1_prop2();
	}
}

function qpv1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/qpv1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[141], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[141]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[138] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function qpv1_flow(){

	if(!isPlaying){
		qpv1_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		qpv1_flow2();
	}

}


// ACTIVITY / TRAVEL BEHAVIOR
// Activity type
function act5_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act5; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[142]) ;

	$("#titleGr1").html("") ;

	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[139] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act5_choro(){

	if(!isPlaying){
		act5_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act5_choro2();
	}

}

function act5_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[143]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2];*/

	titleGr2 = tUnique[140] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act5_prop(){

	if(!isPlaying){
		act5_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act5_prop2();
	}
}

function act5_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act5_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[144].length;
	// console.log(len);
	if (screen.width<=val && screen.width>1024 && len>174) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[144], find, replace));
	} else if (screen.width<val && screen.width>1024 && len==174) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[144], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[144]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[141] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act5_flow(){

	if(!isPlaying){
		act5_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act5_flow2();
	}

}

function act4_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act4; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[145]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[142] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act4_choro(){

	if(!isPlaying){
		act4_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act4_choro2();
	}

}

function act4_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[146]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[143] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act4_prop(){

	if(!isPlaying){
		act4_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act4_prop2();
	}
}

function act4_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act4_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[147].length;
	// console.log(len);

	if (screen.width<=val && screen.width>1024 && len>172) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[147], find, replace));
	} else if (screen.width<val && screen.width>1024 && len==172) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[147], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[147]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[144] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act4_flow(){

	if(!isPlaying){
		act4_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act4_flow2();
	}

}

function act3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[148]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[145] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act3_choro(){

	if(!isPlaying){
		act3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act3_choro2();
	}

}

function act3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[149]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[146] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act3_prop(){

	if(!isPlaying){
		act3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act3_prop2();
	}
}

function act3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[150].length;
	// console.log(len);

	if (screen.width<=val && screen.width>1024 && len>172) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[150], find, replace));
	} else if (screen.width<val && screen.width>1024 && len==172) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[150], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[150]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[147] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act3_flow(){

	if(!isPlaying){
		act3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act3_flow2();
	}

}

function act2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[151]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[148] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act2_choro(){

	if(!isPlaying){
		act2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act2_choro2();
	}

}

function act2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[152]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[149] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act2_prop(){

	if(!isPlaying){
		act2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act2_prop2();
	}
}

function act2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	var len = tMap[153].length;
	// console.log(len);

	if (screen.width<=val && screen.width>1024 && len>171) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[153], find, replace));
	} else if (screen.width<val && screen.width>1024 && len==171) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[153], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[153]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[150] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act2_flow(){

	if(!isPlaying){
		act2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act2_flow2();
	}

}

function act1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_act1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	//["#fef7e1", "#8fbee8", "#6998ca", "#4273af", "#005099"]

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[154]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2]  ;*/

	titleGr2 = tUnique[151] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act1_choro(){

	if(!isPlaying){
		act1_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act1_choro2();
	}

}

function act1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/act1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[155]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[8] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[152] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function act1_prop(){

	if(!isPlaying){
		act1_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		act1_prop2();
	}
}



// Travel mode
function mode3_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod3; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[156]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[153] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode3_choro(){

	if(!isPlaying){
		mode3_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode3_choro2();
	}

}

function mode3_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[157]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[154] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode3_prop(){

	if(!isPlaying){
		mode3_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode3_prop2();
	}
}

function mode3_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode3_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[158], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[158]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[155] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode3_flow(){

	if(!isPlaying){
		mode3_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode3_flow2();
	}

}

function mode2_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod2; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[159]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2]  ;*/

	titleGr2 = tUnique[156] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode2_choro(){

	if(!isPlaying){
		mode2_choro2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode2_choro2();
	}

}

function mode2_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"]   ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[160]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;*/

	titleGr2 = tUnique[157] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode2_prop(){

	if(!isPlaying){
		mode2_prop2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode2_prop2();
	}
}

function mode2_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode2_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"]  ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[161], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};

	$("#mapTitle").html(tMap[161]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[158] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode2_flow(){

	if(!isPlaying){
		mode2_flow2();
	}
	else{
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode2_flow2();
	}
}

function mode1_choro2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_choro/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var colDom = colDom_mod1; // array comprenant les bornes de classes pour la carte
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[162]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2]  ;*/

	titleGr2 = tUnique[159] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode1_choro(){
	if(!isPlaying) {
		mode1_choro2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode1_choro2();
	}
}

function mode1_prop2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_prop/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	$("#mapTitle").html(tMap[163]) ;

	$("#titleGr1").html("") ;
	/*titleDuncan =  titleSegreg[0] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[1];
	titleMoran = titleSegreg[3] + " <strong>" + indicator[9] + "</strong> " + titleSegreg[2] ;
*/
	titleGr2 = tUnique[160] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode1_prop(){
	if(!isPlaying){
		mode1_prop2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode1_prop2();
	}
}

function mode1_flow2(){
	// Définition des variables pour les fonctions de création de la carte et des graphiques
	chemin = "/data/" + nomED + "/mode1_flow/geo/secteursData.geojson"; // localisation du fichier geojson départ
	var col = ["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"] ; //array comprenant les 5 codes couleurs pour la carte
	var colDom = "" ;

	if (screen.width<=val && screen.width>1024) {
		$("#mapTitle").css('cursor', 'pointer');
		$("#mapTitle").attr('lab', replaceStr(tMap[164], find, replace));
	} else {
		$("#mapTitle").attr('lab', '').css('cursor', 'text') ;
	};
	$("#mapTitle").html(tMap[164]) ;

	$("#titleGr1").html("") ;

	titleGr2 = tUnique[161] + spanPopup[0];

	load(chemin, colDom, col) ;
}
function mode1_flow(){
	if(!isPlaying) {
		mode1_flow2();
	} else {
		isPlaying = false ;
		d3.select("#play").classed("pauseB",false).classed("playB",true);
		d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
		clearInterval(interval);
		mode1_flow2();
	}
}
