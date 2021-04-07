// fix for old browser
function myObjectValues(obj) {
    var res = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            res.push(obj[i]);
        }
    }
    return res;
}


// Nom de l'onglet
$("#nomOnglet").html("Mobiliscope: " + nomVC);

// BANDEAU ENTÊTE
$("#seg").html(subTitle);

// ACCORDION
// Init
$('.niv3').css('display', 'none') ;
$('.niv2').css('display', 'none') ;

var nextN1 = $('.niv1').eq(2) ;
$(".niv1").eq(1).nextUntil(nextN1, '.niv2').css('display', 'block') ;

var nextN2 = $('.niv2').eq(2) ;
$('.niv2').eq(1).nextUntil(nextN2, '.niv3').css('display', 'block') ;

$('.niv3').eq(3).css("background-color", "rgba(233, 98, 29, .1)") ;
$('.niv3').eq(3).children(":eq(2)").css("background-color", "grey") ;
$('.niv3').eq(3).children(":eq(2)").css("color", "white") ;

// $('.niv2').eq(1).next('.niv3').css("background-color", "rgba(233, 98, 29, .1)") ;
// $('.niv2').eq(1).next('.niv3').children("button:first").css("background-color", "grey") ;
// $('.niv2').eq(1).next('.niv3').children("button:first").css("color", "white") ;

$('.flow').eq(41).css("display", "none") ; // AUTO (à adapter au nombre de modalités)


// NIV1
$(".niv1").click(function() {

	$('.niv2, .niv3').css('display', 'none') ;

	var nextN1 = $(this).nextAll('.niv1').eq(0) ;
	$(this).nextUntil(nextN1, '.niv2').css('display', 'block') ;

	var nextN2 = $(this).nextAll('.niv2').eq(1) ;
	$(this).nextUntil(nextN2, '.niv3').css('display', 'block') ;

}) ;

// NIV2
$(".niv2").click(function() {

	$('.niv3, .niv4').css('display', 'none') ;

	var nextN2 = $(this).nextAll('.niv2').eq(0) ;
	$(this).nextUntil(nextN2, '.niv3').css('display', 'block') ;

}) ;

// Modalité "ville centre" du menu accordéon qui prend le nom de chacune des ED
$("#vcMenu").html(nomVC);

// Buttons
$(".nb:first").css("margin-right", "4em") ;
$(".part, .nb, .flow").click(function() {

	if(!isPlaying){

	// 1 : button aspect
	$("button").css("background-color", "#DDDCDD") ;
	$("button").css("color", "black") ;
	$(this).css("background-color", "grey") ;
	$(this).css("color", "white") ;

	// 2 : change background-color from border-left color
	$('div[class^= "niv3"]').css('background-color', 'white');
	$(this).closest($('div[class^= "niv3"]')).css('background-color', ($(this).closest($('div[class^= "niv3"]')).css("border-left-color")).replace('rgb', 'rgba').slice(0, -1) + ', 0.1)');
	$(this).closest($('div[class^= "niv3"]')).css('fill-opacity', $(this).closest($('div[class^= "niv3"]')).css("border-left-color"));
	}
}) ;


// MAP CONTAINER - Checkbox
$("#vc2").html(nomVC);
$("#routes2").html(layersName[0]);
$("#hydro2").html(layersName[1]);
$("#villes2").html(layersName[2]);

// MAP CONTAINER - copyright
$("#copyright").html(copy);

// MAP CONTAINER - source
if(nomED == 'MONTREAL' || nomED == 'QUEBEC' || nomED == 'SHERBROOKE' || nomED == 'SAGUENAY' || nomED == 'OTTAWA GATINEAU' || nomED == 'TROIS RIVIERES') {
	$("#source").html(dataSource + " <span class = 'help' style = 'font-size : 1em ;' onclick = 'popup_source_can()'>Q</span>");
}else{
	$("#source").html(dataSource + " <span class = 'help' style = 'font-size : 1em ;' onclick = 'popup_source_fr()'>Q</span>");
};

// HEADLINE AUTO SIZE
var fontSize ;
var textContainer ;

function update_fontsize(){

$( ".fittext1" ).each(function() {

	textContainer = $(this).closest(".cont") ;
	fontSize = parseInt(textContainer.height() * 0.5 ) + 'px';

	$(this).css('font-size', fontSize);
	$(this).css('line-height', textContainer.height() + 'px');

	var fontWidth = parseInt($(this).css("width")) ;
	var containerWidth = parseInt(textContainer.css("width")) ;

	if(fontWidth >= (containerWidth*0.96)){

		newfontSize = ( fontSize.slice(0, -2) * (containerWidth * 0.9) ) / fontWidth;

		$(this).css('font-size', newfontSize);
		$(this).css('line-height', textContainer.height() + 'px');

	}
}) ;
};

// TAB STYLES
var style1 = "background-color : white ; border : 1px solid #dadad9 ; border-top : none" ;
var style2 = "color : black ; background-color : #F0F1F1 ; border : none ; border-top : 1px solid #dadad9" ;
var style3 = "background-color : #f2f2f2 ; color : #dadad9 ; border : none ; border-top : 1px solid #dadad9" ;


// GEOVIZ
var width = 1066,
	height = 730;

var proj = d3.geo.mercator()
		.center(centerProj)
		.scale(scaleProj)
		.translate([width / 2, height / 2]);


var radius = d3.scale.sqrt()
	.domain([0, 1e6])
	.range([0, 50]);


var zoom = d3.behavior.zoom()
    .scaleExtent([1, 8])
	.center([width / centerZ_w, height / centerZ_h])
    .on("zoom", zoomed);

var svg = d3.select("#map-container").append("svg")
	.attr("width", width)
	.attr("height", height)
    .classed("svg-container", true)
	.attr("viewBox", "0 0 1066 730")
	.classed("svg-content-responsive", true);


var path = d3.geo.path()
	.projection(proj);

var fd = svg.append("g");
var g = svg.append("g");
var vc = svg.append("g");
var dep = svg.append("g");
var routes = svg.append("g");
var hydro = svg.append("g");
var fl = svg.append("g") ;
var villes = svg.append("g");
var gr = d3.select("#graphiques").append("g");



var countBySect = {};

var isPlaying = false ;

var slider ;
var	interval ;
var currentFrame = 14 ;
var xAxis ;

var typeGrIDF = "Duncan" ;
var typeGraph = "stacked" ;

var currSect ;
var nameSect ;

var radius = d3.scale.sqrt()
	.domain([0, 1e6])
	.range(radiusRange);

var currentZoom ;
var indic ;

svg.call(zoom)
    .call(zoom.event);

var info = d3.select("#map-container").append("div")
	.attr("class", "info")
	.style("opacity", 0);

var gammeCs = ["#008792", "#624f98", "#188e31", "#d69b01", "#ab0f31"] ;
var gammeSP = ["#4b6dac", "#17a97a", "#ec721b", "#c02767"] ;
var gammeAct = ["#17297c", "#76ad71", "#379fac", "#e7564d", "#7e3a61"] ;
var gammeDep = ["#9a2679", "#ee865c", "#58c2ef", "#167e88", "#2d365e"] ;
var gammeAge = ["#da0846", "#e9621d", "#67539b", "#816c53"] ;
var gammeOcc = ["#e4406e", "#97bc59", "#586aa3", "#957c60", "#f8bd08"] ;
var gammeSex = ["#4e3e8e", "#47b291"] ;
var gammeRev_fr = ["#348e89", "#7fb72c", "#fe7562", "#dc2c48"] ;
var gammeRev_can = ["#4b4443","#348e89", "#7fb72c", "#fe7562", "#dc2c48"] ;
var gammeMode = ["#008eaa", "#b44185", "#3d8966"] ;
var gammeRes = ["#005099", "#00998b", "#cb5f00"] ;

var chemin ;




function load(chemin, colDom, col){

	update_fontsize() ;

	$(window).resize(function() {
		update_fontsize();
	});

	// LOAD MAP
	displayMap(chemin) ;

	// Build IDF chart
	// Initialisation
	$("#mainGr1").html("<strong>" + titleGraph1 + "</strong>");
	d3.select("#grIDF").html("") ;
	$("#altGr21").html(titleAltGr1[0]);
	$("#altGr11").html(titleAltGr1[1]);
	$("#altGr22").html(titleAltGr2[0]);
	$("#altGr12").html(titleAltGr2[1]);

	var nameY = chemin.split('/')[3].split('_')[0].slice(0);

	displayGraphSegreg("#grIDF", // div d'insertion du graphique
				"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv", // chemin du fichier de données
				"hour", //valeurs de l'axe x
				nameY,//Object.keys(d)[1] // valeurs de l'axe y
				"" // domain de l'axe y
				);

		

	// CHANGE CHART FUNCTIONS
	$("#altGr11").on("click", function(d){

		if($(this).css("color") != "rgb(218, 218, 217)"){

		typeGrIDF = "Moran" ;

		$("#altGr11").css('cssText', style1);
		$("#altGr21").css('cssText', style2);


		d3.select("#grIDF").html('') ;

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Moran.csv",
			"hour", //valeurs de l'axe x
			nameY,  //Object.keys(d)[1] // valeurs de l'axe y
			"" // domain de l'axe y)
			);

		}

	}) ;

	$("#altGr21").on("click", function(d){

		if($(this).css("color") != "rgb(218, 218, 217)"){

		typeGrIDF = "Duncan" ;

		$("#altGr21").css('cssText', style1);
		$("#altGr11").css('cssText', style2);

		$("#grIDF").html('') ;

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv",
			"hour", //valeurs de l'axe x
			nameY, //Object.keys(d)[1] // valeurs de l'axe y
			"" // nom de l'axe y
			);
		}

	}) ;

	$("#altGr12").on("click", function(){

		if($(this).css("color") != "rgb(218, 218, 217)"){

		typeGraph = "stacked" ;

		// Initialisation
		$("#altGr12").css('cssText', style1);
		$("#altGr22").css('cssText', style2);

		$("#grSect").html('') ;

		// Display stackedchart
		stackedBarChart(currSect) ;

		}

	}) ;

	$("#altGr22").on("click", function(){

		if($(this).css("color") != "rgb(218, 218, 217)"){

		typeGraph = "simple" ;

		// Initialisation
		$("#altGr22").css('cssText', style1);
		$("#altGr12").css('cssText', style2);

		$("#grSect").html('') ;

		// Display simple chart
		$("#titleGr2").html(titleGr2) ;

		displayGraph("#grSect",
			"/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
			"hour",
			currSect,
			"") ;

		}

	}) ;

	// DISPLAY SECTOR CHARTS FROM SELECTION
	if(typeGrIDF == "Moran"){

		//  Initialisation
		$("#grIDF").html('') ;

		$("#altGr11").css('cssText', style1);
		$("#altGr21").css('cssText', style2);

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Moran.csv",
			"hour", //valeurs de l'axe x
			nameY, //Object.keys(d)[1] // valeurs de l'axe y
			"" // domain de l'axe y)
		);

	}

	if(typeGrIDF == "Duncan"){

		//  Initialisation
		$("#grIDF").html('') ;

		$("#altGr21").css('cssText', style1);
		$("#altGr11").css('cssText', style2);

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv",
			"hour", //valeurs de l'axe x
			nameY, //Object.keys(d)[1] // valeurs de l'axe y
			"" // nom de l'axe y
		);
	}

	if (currSect && typeGraph == "simple"){

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<span id = 'nameSect'></br>" + nameSect + "</span>");
		$("#titleGr2").html(titleGr2);

		$("#altGr12").css('cssText', style2);

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
			"/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
			"hour",
			currSect,
			"") ;
	}

	if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] != "pop0"){

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<span id = 'nameSect'></br>" + nameSect + "</span>");

		$("#altGr12").css('cssText', style1);
		$("#altGr22").css('cssText', style2);

		d3.select("#grSect").html("") ;

		// Build sector chart
		stackedBarChart(currSect) ;

	}

	if (currSect && (chemin.split('/')[3].split('_')[0] == "pop0" || (chemin.split('/')[3]).split('_')[1] == "flow")){


		if(chemin.split('/')[3].split('_')[0] == "pop0"){
			$("#altGr12").css('cssText', style3);
		}
		$("#altGr11").css('cssText', style3);
		$("#altGr21").css('cssText', style3);

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

	}

	if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] == "pop0"){

		typeGraph = "simple" ;

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<span id = 'nameSect'></br>" + nameSect + "</span>");
		$("#titleGr2").html(titleGr2);

		$("#altGr11").css('cssText', style3);
		$("#altGr21").css('cssText', style3);
		$("#altGr22").css('cssText', style1);

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
		"/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
		"hour",
		currSect,
		"") ;

	}

	if(!currSect && (chemin.split('/')[3].split('_')[0] == "pop0" || (chemin.split('/')[3]).split('_')[1] == "flow")){

		$("#altGr11").css('cssText', style3);
		$("#altGr21").css('cssText', style3);

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

	}

	if (!currSect) {

		// Initialisation
		$("#mainGr2").html("");
		$("#titleGr2").html("");

		$("#altGr12").css('cssText', style3);
		$("#altGr22").css('cssText', style3);

		$("#grSect").html("<p id='message'>"+ graph2Message + "</p>") ;

	}

	// Création de la slidebar
	createSlider() ;

	// Activation de la fonction d'animation
	d3.select("#play")
	  .attr("title","Play animation")
	  .on("click",function(){
		if ( !isPlaying ){
		  isPlaying = true;
		  d3.select(this).classed("pause",true).attr("title","Pause animation");
		  d3.select("#play").html('<img id = "playB" src = "/pictos/pause.png">') ;
		  animate();
		} else {
		  isPlaying = false;
		  d3.select(this).classed("pause",false).attr("title","Play animation");
		  d3.select("#play").html('<img id = "playB" src = "/pictos/player2.png">') ;
		  clearInterval( interval );
		}
		
		
	  	});




	// FONCTIONS

	// Fonction pour afficher les valeurs avec un séparateur de milliers
	function format(nbr) {
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		return retour;
	}

	// Fonction graphiques ségrégation
	function displayGraphSegreg(div, csvSegreg, varX, varY){

		// Definition du format du graphique
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 380 ,
			height = 178;
		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValue).rangePoints([0, width], .5);
		var	y = d3.scale.linear().range([height, 1]);

		// Gammes de couleur
		var gamme ;
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cs'){
			gamme = gammeCs ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cspmen'){
			gamme = gammeCs ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cleduc'){
			gamme = gammeSP ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'educmen'){
			gamme = gammeSP ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'act'){
			gamme = gammeAct ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'resarea'){
			gamme = gammeRes ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'age'){
			gamme = gammeAge ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'occ'){
			gamme = gammeOcc ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'sex'){
			gamme = gammeSex ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'mode'){
			gamme = gammeMode ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'dep'){
			gamme = gammeDep ;
		}
		
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'rev'){
			if (nomED == "IDF"){
			gamme = gammeRev_fr ;
			} else {
			gamme = gammeRev_can ;
			}
		}
		
		var color = d3.scale.ordinal().range(gamme);

		//Set the axis of x (les heures)
		var xAxis = d3.svg.axis().scale(x)
			.tickValues(Xgraph)
			.orient("bottom");

		//Define the line (la courbe des valeurs de l'IS)
		var valueline = d3.svg.line()
			.interpolate("monotone")
			.x(function(d) { return x(d[varX]); })  // colone 'hour' dans les data
			.y(function(d) { return y(d.y); });     //

		var stack = d3.layout.stack()
			.values(function(d) { return d.values; });

		// Define the graph
		var gr = d3.select(div).append("svg")
			.attr("width", width)
			.attr("height", height);

		// Responsive
		gr.classed("svg-container", true)
			.attr("viewBox", "-25 -12 430 210")
			.classed("svg-content-responsive", true);

		// Get the data
		d3.csv(csvSegreg, function(error, data) {

			if (error) throw error;

			var tform ; // format of axis
			var domY ; // domain of y axis

			//Set the axis
			// Find the min and max of segreg indice pour définir domY
			var valMin = d3.min(data, function(d){
			var reduced_data = JSON.parse(JSON.stringify(d));
			delete reduced_data.hour;
			var mymin = d3.min(myObjectValues(reduced_data).map(x => Number(x)));
			return mymin;
			});

			var valMax = d3.max(data, function(d){
			var reduced_data = JSON.parse(JSON.stringify(d));
			delete reduced_data.hour;
			var mymax = d3.max(myObjectValues(reduced_data).map(x => Number(x)));
			return mymax;
			});

			if(csvSegreg.split("/")[4].split("_")[1] == "Duncan.csv" && typeGrIDF == "Duncan" && (chemin.split('/')[3]).split('_')[1] != "flow"){
				tform = '.2f' ;
				domY = [valMin * 0.8, valMax * 1.1] ;
				$("#titleGr1").html(titleDuncan);

				// Check if difference between min and max is > 0.4
				if((valMax * 1.1) - (valMin * 0.8) < 0.4){
					var downVal = valMin ;
					var topVal = valMax * 1.1 ;
					var diff = 0.4 - (topVal - downVal) ; // compute difference with 0.4
					if(Number(downVal) - Number(diff/2) < 0){
						domY = [0, 0.4] ;
					}
					else{
						domY = [Number(downVal) - Number(diff/2), Number(topVal) + Number(diff/2)] ; // else add the difference
					}
				}
			}

			if(csvSegreg.split("/")[4].split("_")[1] == "Moran.csv" && typeGrIDF == "Moran" && (chemin.split('/')[3]).split('_')[1] != "flow"){
				tform = '.2f' ;
				domY = [valMin * 0.8, valMax * 1.1] ;
				$("#titleGr1").html(titleMoran) ;

				// Check if difference between min and max is > 0.4
				if((valMax * 1.1) - (valMin * 0.8) < 0.4){
					var downVal = valMin ;
					var topVal = valMax * 1.1 ;
					var diff = 0.4 - (topVal - downVal) ; // compute difference with 0.4
					domY = [Number(downVal) - Number(diff/2), Number(topVal) + Number(diff/2)] ; // else add the difference
				}
			}

			update_fontsize() ;

			//Tickformat must depend on values of y
			var yAxis = d3.svg.axis().scale(y)
				.orient("left")
				.tickFormat(d3.format(tform))
				.innerTickSize(-width)
				.outerTickSize(0);

			//Définir le domain de y
			y.domain(domY);

			// Add shadow line with current hour     // TRAD
			var dayTime ;

			if(slider.value() >= 4 & slider.value() <= 12){
				dayTime = slider.value() + "am" ;
			}
			if(slider.value() > 12 & slider.value() <= 24){
				dayTime = (slider.value() - 12) + "pm" ;
			}
			if(slider.value() > 24){
				dayTime = (slider.value() - 24) + "am" ;
			}

			// shadow line style et attributs
			gr.append("line")
				.attr("class", "shadow")
			    .attr("x1", (x(dayTime)))
			    .attr("x2", (x(dayTime)))
			    .attr("y1", y.range()[0])
			    .attr("y2", y.range()[1])
			    .style("stroke", "black")
			    .style("stroke-width", 10)
			    .style("stroke-opacity", .2);


			// Afficher les indices
			color.domain(d3.keys(data[0]).filter(function(key) { return key !== "hour" ; }));
		
			var indices = stack(color.domain().map(function(name) {
				return {
					name : name,
					values : data.map(function(d){
						return {hour : d.hour, y : d[name]};
					})
				};
			}));


			// Add lines
			var lines = gr.selectAll(".line")
				.data(indices)
				.enter().append("g")
				.attr("class", "line")
				.style("stroke", function(d) {return color(d.name)})
				// .style("stroke-dasharray", function(d) {
				// 	if(d.name != (chemin.split('/')[3]).split('_')[0]){
				// 		return 4 ;
				// 	}
				// })
				.style("stroke-opacity" , function(d) {
					if(d.name == (chemin.split('/')[3]).split('_')[0]){
						return 1 ;
					}
					else{
						return 0.45 ;
					}
				})
				.attr("z-index", function(d){
					if(d.name == (chemin.split('/')[3]).split('_')[0]){
						return 10 ;
					}
					else{
						return 5 ;
					}});

			lines.append("path")
				.attr("class", "line")
				.attr("d", function(d) {return valueline(d.values); });

			/////////////////////////////////////
			///// OLD DOTS
			// Add dots
			// var dots = gr.selectAll('.name')
			// 	.data(indices, function(d) {
			// 		return d.name;
			// 	});

			// var lE = dots.enter()
			// 	.append('g')
			// 	.attr('class', 'name');

			// lE.selectAll("dots")
			// 	.data(function(d){
			// 		return d.values
			// 	})
			// 	.enter()
			// 	.append("circle")
			// 	.attr("r", 2.5)
			// 	.attr("cx", valueline.x())
			// 	.attr("cy", valueline.y())
			// 	.attr("stroke", function(d){return color(d3.select(this.parentNode).datum().name);})
			// 	.style("fill", "white")
			// 	.style("stroke-opacity", 0.8 )
			// 	.style("stroke-width", 0.5)
			// 	.attr("z-index", function(d){
			// 		if(d.name == chemin.split('/')[3].split('_')[0].slice(0)){
			// 			return 10 ;
			// 		}
			// 		else{
			// 			return "auto" ;
			// 		}})
			// 	;
			//////////////////////////////////////////

			// Add dots for the selected modalité
			gr.selectAll("dot")
				.data(data)
			  	.enter().append("circle")
				.attr("r", 2.5)
				.attr("class", "dots")
				.attr("cx", function(d) { return x(d[varX]); })
				.attr("cy", function(d) { return y(d[varY]); })
				.style("stroke", col[4])
				.style("fill", "white");

			// graph
			// Add the X Axis
			gr.append("g")
			  .attr("transform", "translate(0," + height + ")")
			  .attr("class", "axis")
			  .call(xAxis);
			// Add the Y Axis
			gr.append("g")
			  .attr("class", "axis")
			  .call(yAxis);



			// Affichage des valeurs au survol de la souris
			var focus2 = gr.append("g")
			  .attr("class", "focus2")
			  .style("display", "none");

			focus2.append("circle")
			  .attr("r", 2.5)
			  .style("fill", col[4])
			  .style("stroke", col[4]);

			focus2.append("rect")
			  .attr("x", 0)
			  .attr("y", "-2em")
			  .attr("height", "1.5em")
			  .attr("width", 100)
			  .style("fill", "white");

			focus2.append("text")
			  .attr("x", 0)
			  .attr("dy", "-.5em");

			gr.append("rect")
			  .attr("class", "overlay")
			  .attr("width", width)
			  .attr("height", height)
			  .on("mouseover", function() {
				focus2.style("display", null);
			  })
			  .on("mouseout", function() {
				focus2.style("display", "none");
			  })
			  .on("mousemove", mousemove2);

			var tickPos = x.range();

			function mousemove2(d){

			  	var m = d3.mouse(this),
				  	lowDiff = 1e99;
				  	// xI = null;

			  	for (var i = 0; i < tickPos.length; i++){
					var diff = Math.abs(m[0] - tickPos[i]);

					if (diff < lowDiff){
						lowDiff = diff;
						xI = i;
					}
			  	}

			  	var yVal = data[xI][varY];
				var vFoc = (Math.round(yVal*100)/100).toFixed(2) ;

					if (vFoc > 0){
						vFoc = vFoc ;
					}
					if(vFoc == 0){
						vFoc = "" ;
					}

				focus2.select('text')
					.text(vFoc)
					.style("font-size", "1.5em");

				// update the rect width
				focus2.select('rect')
					.attr("width", focus2.select('text').node().getBBox()["width"]) ;

				focus2.attr("transform","translate(" + tickPos[xI] + "," + y(data[xI][varY]) + ")");

			}

			});

			
			/////////////////////////////////////////////////////////////
			///// OLD MOUSEOVER
			// // Tooltip
			// // append a g for all the mouse over nonsense
			// var mouseG3 = gr.append("g")
			// 	.attr("class", "mouse-over-effects");

			// // this is the vertical line
			// mouseG3.append("path")
			// 	.attr("class", "mouse-line")
			// 	.style("stroke", "black")
			// 	.style("stroke-width", "1px")
			// 	.style("opacity", "0");
			// here's a g for each circle and text on the line
			// var mousePerLine3 = mouseG3.selectAll('.mouse-per-line3')
			// 	.data(indices, function(d){
			// 			return d.name;
			// 	})
			// 	.enter()
			// 	.append("g")
			// 	.attr("class", "mouse-per-line3");

			// the circle
			// mousePerLine3.append("circle")
			// 	.attr("r", 2.5)
			// 	.style("fill", function(d) {return color(d.name)})
			// 	.style("stroke-width", "1px")
			// 	.style("opacity", "0");

			// // the rectangle
			// mousePerLine3.append("rect")
			// 	.attr("height", "12px")
			// 	.style("fill", "white")
			// 	.style("opacity", "0.8")
			// 	.attr("x", "10px")
			// 	.attr("y", "-8px");

			// // the text
			// mousePerLine3.append("text")
			// 	.style("font-size", "1.5em")
			// 	.attr("transform", "translate(10,3)");

			// // rect to capture mouse movements
			// mouseG3.append('svg:rect')
			// 	.attr('width', width)
			// 	.attr('height', height)
			// 	.attr('fill', 'none')
			// 	.attr('pointer-events', 'all')
			// 	.on('mouseout', function() { // on mouse out hide line, circles and text
			// 		d3.select(".mouse-line")
			// 		  .style("opacity", "0");
			// 		d3.selectAll(".mouse-per-line3 circle")
			// 		  .style("opacity", "0");
			// 		d3.selectAll(".mouse-per-line3 text")
			// 		  .style("opacity", "0")
			// 		d3.selectAll(".mouse-per-line3 rect")
			// 		  .style("opacity", "0");
			// 	})
			// 	.on('mouseover', function() { // on mouse in show line, circles and text
			// 		d3.select(".mouse-line")
			// 		  .style("opacity", "1");
			// 		d3.selectAll(".mouse-per-line3 circle")
			// 		  .style("opacity", "1");
			// 		d3.selectAll(".mouse-per-line3 text")
			// 		  .style("opacity", "1")
			// 		d3.selectAll(".mouse-per-line3 rect")
			// 		  .style("opacity", "1");
			// 	})
			// 	.on('mousemove', mousemove3) ;

			// 	var tickPos = x.range();
			// 	var xI = null ;

			// function mousemove3() { // mouse moving over canvas

			// 		var m = d3.mouse(this),
			// 			  lowDiff = 1e99;

			// 		for (var i = 0; i < tickPos.length; i++){
			// 			var diff = Math.abs(m[0] - tickPos[i]);

			// 			if (diff < lowDiff){
			// 				lowDiff = diff;
			// 				xI = i;
			// 			}
			// 		}

			// 		// position the circle and text
			// 		d3.selectAll(".mouse-per-line3")
			// 			.attr("transform", function(d, i) {

			// 		//var orY = myObjectValues(indices[0])[1][xI].y ;
			// 		var vFoc = (Math.round(myObjectValues(d)[1][xI].y*100)/100).toFixed(2) ;

			// 		if (vFoc > 0){
			// 			vFoc = vFoc ;
			// 		}
			// 		if(vFoc == 0){
			// 			vFoc = "" ;
			// 		}
			// 		// update the text with y value
			// 		d3.select(this).select('text')
			// 			.text(vFoc);

			// 		// update the rect width
			// 		d3.select(this).select('rect')
			// 			.attr("width", d3.select(this).select('text').node().getBBox()["width"]) ;

			// 		// return position
			// 		return "translate(" + tickPos[xI] + "," +  y(myObjectValues(d)[1][xI].y) + ")";

			// 		});
			// 	}
			//////////////////////////////////////////////////////////////
				
	};
	
	// Fonction graphique simple
	function displayGraph(div, csvGr, varX, varY, nameY){

		// Definition du format
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 380 ,
			height = 178;

		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValue).rangePoints([0, width], .5);
		var	y = d3.scale.linear().range([height, 1]);

		// Set the axis
		var xAxis = d3.svg.axis().scale(x)
			.tickValues(Xgraph)
			.orient("bottom");

		// define the line
		var valueline = d3.svg.line()
			.x(function(d) { return x(d[varX]); })
			.y(function(d) { return y(d[varY]); });

		var gr = d3.select(div).append("svg")
			.attr("width", width)
			.attr("height", height);

		// Responsive
		gr.classed("svg-container", true)
			.attr("viewBox", "-25 -12 430 210")
			.classed("svg-content-responsive", true);

		// add the tooltip area to the webpage
		var tooltip = d3.select(div).append("div")
			.attr("class", "tooltip")
			.style("opacity", 0);

		// Get the data
		d3.csv(csvGr, function(error, data) {
		  if (error) throw error;

			var tform ; // format of axis
			var domY ; // domain of y axis

			if (csvGr.split("/")[5] == "dataSect.csv" && (chemin.split('/')[3]).split('_')[1] == "choro"){
				tform = '.0f' ;
				var valMin = Number(data[0][nomCol]) ;
				var valMax = Number(data[1][nomCol]) ;
				domY = [valMin * 0.8, 100];
			}

			if(csvGr.split("/")[5] == "dataSect.csv" && ((chemin.split('/')[3]).split('_')[1] == "prop" || (chemin.split('/')[3]).split('_')[1] == "flow")){
				tform = '.2s' ;
				var valMin = Number(data[0][nomCol]) ;
				var valMax = Number(data[1][nomCol]) ;
				domY = [valMin * 0.8, valMax * 1.1];
			}

			update_fontsize() ;

			// Redefine data without min and max as value (cf Duncan and Moran)
			data = data.filter(function(x) { return x.hour != "min" & x.hour != "max" }) ;

		  	// Tickformat must depend on values of y
			var yAxis = d3.svg.axis().scale(y)
				.orient("left")
				.tickFormat(d3.format(tform))
				.innerTickSize(-width)
				.outerTickSize(0);

			// Définir le domain de y
			y.domain(domY);

			// Add the valueline path.
			gr.append("path")
			  .data([data])
			  .attr("class", "line")
			  .attr("d", valueline)
			  .style("stroke", col[4]);

			// Add shadow line with current hour
			var dayTime ;

			if(slider.value() >= 4 & slider.value() <= 12){
				dayTime = slider.value() + "am" ;
			}
			if(slider.value() > 12 & slider.value() <= 24){
				dayTime = (slider.value() - 12) + "pm" ;
			}
			if(slider.value() > 24){
				dayTime = (slider.value() - 24) + "am" ;
			}

			gr.append("line")
				.attr("class", "shadow")
			   .attr("x1", (x(dayTime)))
			   .attr("x2", (x(dayTime)))
			   .attr("y1", y.range()[0])
			   .attr("y2", y.range()[1])
			   .style("stroke", "black")
			   .style("stroke-width", 10)
			   .style("stroke-opacity", .2) ;

			// Add the scatterplot
			gr.selectAll("dot")
				.data(data)
			  .enter().append("circle")
				.attr("r", 2.5)
				.attr("class", "dots")
				.attr("cx", function(d) { return x(d[varX]); })
				.attr("cy", function(d) { return y(d[varY]); })
				.style("stroke", col[4])
				.style("fill", "white");

			// Add the X Axis
			gr.append("g")
			  .attr("transform", "translate(0," + height + ")")
			  .attr("class", "axis")
			  .call(xAxis);

			// Add the Y Axis
			gr.append("g")
			  .attr("class", "axis")
			  .call(yAxis);

			// Add Y Axis name in grIDF
			gr.append("text")
				// .attr("transform", "rotate(-90)")
				.attr("y", -margin.top)
				.attr("x", margin.left + 1)
				.attr("dy", "10px")
				.style("text-anchor", "middle")
				.text(nameY)
				.style("font-size", "1.25em")
				.style("fill", "#393939");

			// Add mouseover event
			var yVal = data.map(function(d) {
				  return d[varY]
				});

			var focus = gr.append("g")
			  .attr("class", "focus")
			  .style("display", "none");

			focus.append("circle")
			  .attr("r", 2.5)
			  .style("fill", col[4])
			  .style("stroke", col[4]);

			focus.append("rect")
			  .attr("x", 0)
			  .attr("y", "-2em")
			  .attr("height", "1.5em")
			  .attr("width", 100)
			  .style("fill", "white");

			focus.append("text")
			  .attr("x", 0)
			  .attr("dy", "-.5em");

			gr.append("rect")
			  .attr("class", "overlay")
			  .attr("width", width)
			  .attr("height", height)
			  .on("mouseover", function() {
				focus.style("display", null);
			  })
			  .on("mouseout", function() {
				focus.style("display", "none");
			  })
			  .on("mousemove", mousemove);

			var tickPos = x.range();

			function mousemove(d){
			  var m = d3.mouse(this),
				  lowDiff = 1e99,
				  xI = null;

			  for (var i = 0; i < tickPos.length; i++){
				var diff = Math.abs(m[0] - tickPos[i]);

				if (diff < lowDiff){
					lowDiff = diff;
					xI = i;
				}
			  }

				var vFoc ;

				if (csvGr.split("/")[5] == "dataSect.csv" && (chemin.split('/')[3]).split('_')[1] == "choro"){
					vFoc = (Math.round(yVal[xI]*10)/10).toFixed(1) ;
				}

				if (csvGr.split("/")[5] == "dataSect.csv" && ((chemin.split('/')[3]).split('_')[1] == "prop"
					|| (chemin.split('/')[3]).split('_')[1] == "flow")){
					vFoc = format(Math.round(yVal[xI])) ;
				}

			  focus
				.select('text')
				.text(vFoc)
				.style("font-size", "1.5em");

				// update the rect width
				focus.select('rect')
					.attr("width", focus.select('text').node().getBBox()["width"]) ;

			  focus
				.attr("transform","translate(" + tickPos[xI] + "," + y(data[xI][varY]) + ")");
			}

		});

	};

	function stackedBarChart(currSect){

		// Set title
		$("#titleGr2").html('') ;

		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cs"){
			$("#titleGr2").html(titleStacked[0]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cs"){
			$("#titleGr2").html(titleStacked[1]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cs"){
			$("#titleGr2").html(titleStacked[2]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cspmen"){
			$("#titleGr2").html(titleStacked[3]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cspmen"){
			$("#titleGr2").html(titleStacked[4]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cspmen"){
			$("#titleGr2").html(titleStacked[5]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cleduc"){
			$("#titleGr2").html(titleStacked[6]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cleduc"){
			$("#titleGr2").html(titleStacked[7]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "cleduc"){
			$("#titleGr2").html(titleStacked[8]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "educmen"){
			$("#titleGr2").html(titleStacked[9]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "educmen"){
			$("#titleGr2").html(titleStacked[10]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "educmen"){
			$("#titleGr2").html(titleStacked[11]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "act"){
			$("#titleGr2").html(titleStacked[12]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "act"){
			$("#titleGr2").html(titleStacked[13]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "act"){
			$("#titleGr2").html(titleStacked[14]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "resarea"){
			$("#titleGr2").html(titleStacked[15]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "resarea"){
			$("#titleGr2").html(titleStacked[16]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "resarea"){
			$("#titleGr2").html(titleStacked[17]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "age"){
			$("#titleGr2").html(titleStacked[18]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "age"){
			$("#titleGr2").html(titleStacked[19]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "age"){
			$("#titleGr2").html(titleStacked[20]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "occ"){
			$("#titleGr2").html(titleStacked[21]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "occ"){
			$("#titleGr2").html(titleStacked[22]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "occ"){
			$("#titleGr2").html(titleStacked[23]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "sex"){
			$("#titleGr2").html(titleStacked[24]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "sex"){
			$("#titleGr2").html(titleStacked[25]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "sex"){
			$("#titleGr2").html(titleStacked[26]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "mode"){
			$("#titleGr2").html(titleStacked[27]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "mode"){
			$("#titleGr2").html(titleStacked[28]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "mode"){
			$("#titleGr2").html(titleStacked[29]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "rev"){
			$("#titleGr2").html(titleStacked[30]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "rev"){
			$("#titleGr2").html(titleStacked[31]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "rev"){
			$("#titleGr2").html(titleStacked[32]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "prop" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "dep"){
			$("#titleGr2").html(titleStacked[33]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "choro" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "dep"){
			$("#titleGr2").html(titleStacked[34]) ;
		}
		if((chemin.split('/')[3]).split('_')[1] == "flow" & ((chemin.split('/')[3]).split('_')[0]).slice(0,-1) == "dep"){
			$("#titleGr2").html(titleStacked[35]) ;
		}

		// Definition du format
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 380 ,
			height = 178;

		var	x = d3.scale.ordinal();
		var	y = d3.scale.linear().range([height, 1]);

		// Gamme de couleur
		var gamme ;
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cs'){
			gamme = gammeCs ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cspmen'){
			gamme = gammeCs ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'cleduc'){
			gamme = gammeSP ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'educmen'){
			gamme = gammeSP ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'act'){
			gamme = gammeAct ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'resarea'){
			gamme = gammeRes ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'age'){
			gamme = gammeAge ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'occ'){
			gamme = gammeOcc ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'sex'){
			gamme = gammeSex ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'mode'){
			gamme = gammeMode ;
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'rev'){
			if (nomED == "IDF"){
			gamme = gammeRev_fr ;
			} else {
			gamme = gammeRev_can ;
			}
		}
		if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'dep'){
			gamme = gammeDep ;
		}

		var color = d3.scale.ordinal().range(gamme);

		var area = d3.svg.area()
		    .interpolate("monotone")
			.x(function(d) { return x(d.hour); })
			.y0(function(d) { return y(d.y0); })
			.y1(function(d) { return y(d.y0 + d.y); });

		var line = d3.svg.line()
			.interpolate("monotone")
			.x(function(d) { return x(d.hour); })
			.y(function(d) { return y(d.y0 + d.y); });

		var stack = d3.layout.stack()
			.values(function(d) { return d.values; });

		var gr = d3.select("#grSect").append("svg")
			.attr("width", width)
			.attr("height", height);

		gr.classed("svg-container", true)
			.attr("viewBox", "-30 -12 430 210")
			.classed("svg-content-responsive", true);

		d3.csv("/data/" + nomED + "/stacked/" + (chemin.split('/')[3].split('_')[0]).slice(0, -1) + '_'
			+ (chemin.split('/')[3]).split('_')[1] + "_stacked.csv", function(error, data) {

			color.domain(d3.keys(data[0]).filter(function(key) { return key !== "hour" && key !== "district"; }));
			data.forEach(function(d) {
				d.hour = d.hour;
			});

			if (error) throw error;

			// Filter data by district code
			data = data.filter(function(row){
			return row["district"] == currSect ;
			}) ;

			var browsers = stack(color.domain().map(function(name) {
			return {
			  name: name,
			  values: data.map(function(d) {
				return {hour: d.hour, y: d[name] * 1};
			  })
			};
			}));

			
			var browser = gr.selectAll(".browser")
				.data(browsers)
				.enter().append("g")
				.attr("class", "browser");

			//Set the axis
			// Find the value of the day with highest total value
			var valMax = d3.max(data, function(d){
				var vals = d3.keys(d).map(function(key){ return key !== "hour"  && key !== "district" ? d[key] : 0 });
				return d3.sum(vals);
			});

			if (valMax > 1000){
				tform = '.2s' ;
			}
			else { tform = '.0f' ;}

			var xAxis = d3.svg.axis().scale(x)
				.tickValues(Xgraph)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.tickFormat(d3.format(tform));

			// Set domains for axes
			x.domain(sliderValue).rangePoints([0, width], .5);
			y.domain([0, valMax]);

			// Display axis
			gr.append("g")
			  .attr("class", "x axis")
			  .attr("transform", "translate(0," + height + ")")
			  .call(xAxis);

			gr.append("g")
			  .attr("class", "y axis")
			  .call(yAxis);

			// Add shadow line with current hour
			var dayTime ;

			if(slider.value() >= 4 & slider.value() <= 12){
				dayTime = slider.value() + "am" ;
			}
			if(slider.value() > 12 & slider.value() <= 24){
				dayTime = (slider.value() - 12) + "pm" ;
			}
			if(slider.value() > 24){
				dayTime = (slider.value() - 24) + "am" ;
			}

			gr.append("line")
				.attr("class", "shadow")
			   .attr("x1", (x(dayTime)))
			   .attr("x2", (x(dayTime)))
			   .attr("y1", y.range()[0])
			   .attr("y2", y.range()[1])
			   .style("stroke", "black")
			   .style("stroke-width", 10)
			   .style("stroke-opacity", .2);


			//Pattern
			var pattern = browser.append("defs")
				.append("pattern")
				.attr('id', function(d) {return ('hash_' + d.name);})
					.attr({ width:"8", height:"8", patternUnits:"userSpaceOnUse", patternTransform:"rotate(45)"})

			pattern.append("rect")
					.attr("width", 4)
					.attr("height", 8)
					.attr("fill", function(d) {return color(d.name);});

			// Append areas
			browser.append("path")
			  .attr("class", "area")
			  .attr("d", function(d) { return area(d.values); })
			  .style("fill" , function(d) {
					if(d.name == (chemin.split('/')[3]).split('_')[0]){
						return color(d.name) ;
					}
					else{
						return "url(#hash_" + d.name + ")" ;
					}
				})
				.style("opacity" , function(d) {
					if(d.name == nameY){
						return 0.75 ;
					}
					else{
						return 0.3 ;
					}
				});

			// Add lines
			var lines = gr.selectAll(".line")
			  .data(browsers)
				.enter().append("g")
			  .attr("class", "line")
			  .style("stroke", function(d) {return color(d.name)}) ;

			lines.append("path")
				.attr("class", "line")
				.attr("d", function(d) {return line(d.values); })

			// Add dots
			var dots = gr.selectAll('.name')
			  .data(browsers, function(d) {
				return d.name;
			  });

			var lE = dots.enter()
				.append('g')
				.attr('class', 'name');

			lE.selectAll("dots")
				.data(function(d){
					return d.values
				})
				.enter()
				.append("circle")
				.attr("r", 2.5)
				.attr("cx", line.x())
				.attr("cy", line.y())
				.attr("stroke", function(d){
					return color(d3.select(this.parentNode).datum().name);
				  })
				.style("fill", "white") ;

			


			// Tooltip
			// append a g for all the mouse over nonsense
			var mouseG = gr.append("g")
			  .attr("class", "mouse-over-effects");

			// this is the vertical line
			mouseG.append("path")
			  .attr("class", "mouse-line")
			  .style("stroke", "black")
			  .style("stroke-width", "1px")
			  .style("opacity", "0");

			// here's a g for each circle and text on the line
			var mousePerLine = mouseG.selectAll('.mouse-per-line')
			  .data(browsers)
			  .enter()
			  .append("g")
			  .attr("class", "mouse-per-line");

			// the circle
			mousePerLine.append("circle")
			  .attr("r", 2.5)
			  .style("fill", function(d) {return color(d.name)})
			  .style("stroke-width", "1px")
			  .style("opacity", "0");

			// the rectangle
			mousePerLine.append("rect")
				.attr("height", "12px")
				.style("fill", "white")
				.style("opacity", "0.8")
				.attr("x", "10px")
				.attr("y", "-8px");

			// the text
			mousePerLine.append("text")
			  .style("font-size", "1.5em")
			  .attr("transform", "translate(10,3)");

			var tickPos = x.range();
			var xI = null ;

			// rect to capture mouse movements
			mouseG.append('svg:rect')
			  .attr('width', width)
			  .attr('height', height)
			  .attr('fill', 'none')
			  .attr('pointer-events', 'all')
			  .on('mouseout', function() { // on mouse out hide line, circles and text
				d3.select(".mouse-line")
				  .style("opacity", "0");
				d3.selectAll(".mouse-per-line circle")
				  .style("opacity", "0");
				d3.selectAll(".mouse-per-line text")
				  .style("opacity", "0")
				d3.selectAll(".mouse-per-line rect")
				  .style("opacity", "0");
			  })
			  .on('mouseover', function() { // on mouse in show line, circles and text
				d3.select(".mouse-line")
				  .style("opacity", "1");
				d3.selectAll(".mouse-per-line circle")
				  .style("opacity", "1");
				d3.selectAll(".mouse-per-line text")
				  .style("opacity", "1")
				d3.selectAll(".mouse-per-line rect")
				  .style("opacity", "1");
			  })
			  .on('mousemove', mousemove2) ;

			  function mousemove2() { // mouse moving over canvas

			  	var m = d3.mouse(this),
					lowDiff = 1e99;

					for (var i = 0; i < tickPos.length; i++){
						var diff = Math.abs(m[0] - tickPos[i]);

						if (diff < lowDiff){
							lowDiff = diff;
							xI = i;
						}

					}

				//position the circle and text
				d3.selectAll(".mouse-per-line")
				  .attr("transform", function(d, i) {

					var orY = myObjectValues(browsers[0])[1][xI].y ;
					var vFoc ;

					if ((chemin.split('/')[3]).split('_')[1] == "choro" && typeGraph !== "Duncan") {
						vFoc = (Math.round(myObjectValues(d)[1][xI].y * 10)/10).toFixed(1) ;
					}
					if ((chemin.split('/')[3]).split('_')[1] == "prop" || (chemin.split('/')[3]).split('_')[1] == "flow"){
						vFoc = format(Math.round(myObjectValues(d)[1][xI].y)) ;
					}
					if (vFoc > 0){
						vFoc = vFoc ;
					}
					if(vFoc == 0){
						vFoc = "" ;
					}
					// update the text with y value
					d3.select(this).select('text')
					  .text(vFoc);

					// update the rect width
					d3.select(this).select('rect')
						.attr("width", d3.select(this).select('text').node().getBBox()["width"]) ;

					// return position
					return "translate(" + tickPos[xI] + "," +  y(myObjectValues(d)[1][xI].y0 + myObjectValues(d)[1][xI].y) + ")";

				});

			}

		});

	};


	function displayMap(chemin){



		// Shape fond de carte (France et pays limitrophes)
		//Pattern
		var pattern = svg.append("defs")
			.append("pattern")
				.attr({ id:"hash", width:"10", height:"10", patternUnits:"userSpaceOnUse", patternTransform:"rotate(70)"})
			.append("rect")
				.attr({ width:"1", height:"10", transform:"translate(0,0)", fill:"#e5e0d7" });


		d3.json("/data/a_fdcarte/fdcarte.geojson", function(json){
				fd.selectAll("path")
					.data(json.features)
					.enter()
					.append("path")
					.attr("d", path)
					.style("fill", "url(#hash)")
					.style("stroke", "white")
					.style("stroke-width", 2 / currentZoom);



		});



		if ((chemin.split('/')[3]).split('_')[1] == "choro"){           // CARTE CHORO

			d3.json(chemin, function(json) {

				d3.select(".filtre").remove() ;

				//Arguments pour la construction de la légende
				var ext_color_domain =  colDom ;
				var color_domain = ext_color_domain.slice(1, ext_color_domain.length + 1)

				var legend_labels = [ext_color_domain[1] + "% "+ textLeg[1],
									ext_color_domain[1] + textLeg[2] + ext_color_domain[2] + "%",
									ext_color_domain[2] + textLeg[2] +  ext_color_domain[3] + "%",
									ext_color_domain[3] + textLeg[2] +  ext_color_domain[4] + "%",
									ext_color_domain[4] + "%" + textLeg[3]]

				var color = d3.scale.threshold()
					.domain(color_domain)
					.range(col);

				var hour = Math.trunc(slider.value()) ;
				indic = (chemin.split('/')[3]).split('_')[0] + "_h" + hour ;

				// Choro
				var color = d3.scale.threshold()
					.domain(color_domain)
					.range(col);

				var secteurs = json.features;

				var densities = secteurs
					  .map(function(d) { return d.properties.indic ; })
					  .sort(function(a, b) { return a - b; });


				g.selectAll(".legende").remove() ;
				g.selectAll("g").remove() ;
				fl.selectAll("circle, path").remove() ;

				g.append("g")
					  .attr("class", "secteurs")
					.selectAll("path")
					  .data(secteurs)
					.enter().append("path")
					  .style("fill", function(d) { return color(d.properties[indic]); })
					  .style("stroke", "white")
					  .style("stroke-width", 0.5 / currentZoom)
					  .attr("d", path) ;

				// Add selected sector if a sector was already clicked
				if(currSect){
					var chemins = secteurs.map(function (d){
						if(d.properties.Secteur_EM == currSect){
							return path(d) ;
						}
					});

					d3.select(".filtre").remove() ;

					var clickedSect = chemins.filter(function(i){return i != null ;}) ;
				}

				g.append("path")
					.attr("class", "filtre")
					.attr("d", clickedSect)
					.style({'fill' : 'none' , 'stroke-width' : '1px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
					 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

				// Mouseover and onclick functions
				g.selectAll("path").on("mouseover", function(d){

					var sectover = d3.select(this).attr("d") ;

					g.append("path")
						.attr("class", "sectover")
						.attr("d", sectover)
						.style({'fill' : 'none' , 'stroke-width' : '1px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
						 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

					d3.select(this).style({'cursor' :'pointer'}) ;

					info.transition()
						   .duration(200)
						   .style("opacity", .8);
					info.text(d.properties.LIB)
						.style("left", (d3.event.layerX + 15) + "px")
						.style("top", (d3.event.layerY + 15) + "px")
						.style("background-color", "white")
						.style("display", "block");

					 })
					.on("mouseout", function(d){

						$(".sectover").css('display', 'none') ;

						info.transition()
						   .duration(500)
						   .style("opacity", 0 );

					})
					.on("click", function(d){

						$("#titleGr2").html('');
						d3.select("#grSect").selectAll("svg").remove() ;

						$("#grSect").html('') ;

						nameSect = d.properties.LIB ;
						d3.select("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<span id = 'nameSect'></br>" + nameSect + "</span>");

						// DISPLAY SECTOR CHARTS FROM SELECTION
						currSect = d.properties.Secteur_EM ;
						if (currSect && typeGraph == "simple"){

							// Initialisation
							$("#titleGr2").html(titleGr2);
							$("#titleGr2").css("font-size", $("#titleGr1").css("font-size")) ;

							// Build sector chart
							displayGraph("#grSect",
								"/data/" + nomED + "/"  + chemin.split('/')[3] + "/data/dataSect.csv",
								"hour",
								currSect,
								"") ;
						}

						if (currSect && typeGraph == "stacked" && chemin != "/data/" + nomED + "/pop0_prop/geo/secteursData.geojson"){

							// Build sector chart
							stackedBarChart(currSect) ;

							$("#altGr22").css('cssText', style2);
							$("#altGr12").css('cssText', style1);

						}

						currSect = d.properties.Secteur_EM ;

						// Selected sector
						d3.select(".filtre").remove() ;

						g.append("path")
							.attr("class", "filtre")
							.attr("d", d3.select(this).attr("d"))
							.style({'fill' : 'none' , 'stroke-width' : '2px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
							 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;


					});

				// LEGEND
				svg.selectAll(".legendbloc, .legendbloc2, .lgchoro, .lgprop, .lgflow").remove() ;
				d3.selectAll(".notabene").remove() ;


				var legendGroup = svg.append("g") ;

				legendGroup.append("rect")
					.attr("width", "192px")
					.attr("height", "235px")
					.attr("x", "2px")
					.attr("y",(height - 250 - (height * 0.04))+"px")
					.attr("class", "legendbloc");

				// Notabene
				legendGroup.append('foreignObject')
					.attr("width", "175px")
					.attr("height", "100px")
					.attr('x', "12px")
					.attr('y', "600px")
					.append("xhtml:div")
					.html('<div class="notabene">' + textLegChoro + '</div>');

				var lgchoro = legendGroup.selectAll("g.lgchoro")
					.data(ext_color_domain)
					.enter().append("g")
					.attr("class", "lgchoro");

				var ls_w = 25, ls_h = 25;

				lgchoro.append("rect")
					.attr("x", 12)
					.attr("y", function(d, i){ return height - (i*ls_h) - 2*ls_h - 120 ;})
					.attr("width", ls_w)
					.attr("height", ls_h)
					.style("fill", function(d, i) { return color(d); })
					.style("opacity", 1);

				lgchoro.append("text")
					.attr("x", 50)
					.attr("y", function(d, i){ return height - (i*ls_h) - ls_h - 127;})
					.text(function(d, i){ return legend_labels[i]; });

			});

		}


		if ((chemin.split('/')[3]).split('_')[1] == "prop"){                // CARTE PROP

			var circles = fl.append("svg:g")
			.attr("id", "circles")
			.attr("class", "bubble")
			.attr("fill", col[4]) ;

			var cells = fl.append("g")
				.attr("id", "cells");

			d3.json(chemin, function(json) {

				g.selectAll(".secteurs").remove() ;

				d3.select(".filtre").remove() ;

				var hour = Math.trunc(slider.value()) ;
				indic = (chemin.split('/')[3]).split('_')[0] + "_h" + hour ;

				g.selectAll(".secteurs").remove() ;

				// Définition du fond de carte
				g.append("g")
					.attr("class", "secteurs")
					.selectAll("path")
					.data(json.features)
					.enter()
					.append("path")
					.attr("d", path)
					.style("stroke", "white")
					.style("stroke-width", 0.5  / currentZoom) ;

				// Add selected sector if a sector was already clicked
				if(currSect){
					var chemins = json.features.map(function (d){
						if(d.properties.Secteur_EM == currSect){
							return path(d) ;
						}
					});

					d3.select(".filtre").remove() ;
					var clickedSect = chemins.filter(function(i){return i != null ;}) ;

				}

				g.append("path")
					.attr("class", "filtre")
					.attr("d", clickedSect)
					.style({'fill' : 'none' , 'stroke-width' : '1px/ currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
						'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

				var hour = "h" + Math.trunc(slider.value()) ;

				g.selectAll("circle").remove() ;
				fl.selectAll("circle").remove() ;
				fl.selectAll("path").remove() ;
				d3.select("#legende").selectAll(".legende").remove() ;

				// Filter on hour
				var linksByOrigin = {},
				locationBySect = {},
				positions = [];

				json.features = json.features
					  .sort(function(a, b) { return b.properties[indic] - a.properties[indic]; }) ;

				sectct = json.features.filter(function(sectEGT) {
					var loc = [+sectEGT.properties.CENTROID_X, +sectEGT.properties.CENTROID_Y];
					locationBySect[sectEGT.properties.Secteur_EM] = loc;
					positions.push(proj(loc));
					return true;
				});

				var mapccl = cells.selectAll("g")
					.data(json.features)
					.enter().append("svg:g");

				mapccl.append("path")
					.attr("class", "cell")
					.attr("d", path)
					.on("mouseover", function(d) {

						var sectover = d3.select(this).attr("d") ;

						g.append("path")
							.attr("class", "sectover")
							.attr("d", sectover)
							.style({'fill' : 'none' , 'stroke-width' : '1px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
							 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

						d3.select(this).style({'cursor' :'pointer'}) ;

						info.transition()
							   .duration(200)
							   .style("opacity", .8);

						info.text(d.properties.LIB)
							.style("left", (d3.event.layerX + 15) + "px")
							.style("top", (d3.event.layerY + 15) + "px")
							.style("background-color", "white")
							.style("display", "block");

					})
					.on("mouseout", function(d){

						$(".sectover").css('display', 'none') ;

						info.transition()
						   .duration(500)
						   .style("opacity", 0 );

					})
					.on("click", function(d){

						currSect = d.properties.Secteur_EM ;

						$("#grSect").html('') ;

						nameSect = d.properties.LIB ;
						d3.select("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<span id = 'nameSect'></br>" + nameSect + "</span>");

						// DISPLAY SECTOR CHARTS FROM SELECTION
						if (currSect && typeGraph == "simple"){

							// Initialisation
							$("#titleGr2").html(titleGr2);
							$("#titleGr2").css("font-size", $("#titleGr1").css("font-size")) ;

							// Build sector chart
							displayGraph("#grSect",
								"/data/" + nomED + "/"  + chemin.split('/')[3] + "/data/dataSect.csv",
								"hour",
								currSect,
								"") ;
						}

						if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] != "pop0"){

							// Build sector chart
							stackedBarChart(currSect) ;

							$("#altGr22").css('cssText', style2);
							$("#altGr12").css('cssText', style1);

						}

						if(currSect && chemin.split('/')[3].split('_')[0] == "pop0"){

							$("#altGr22").css('cssText', style1);
							$("#altGr12").css('cssText', style3);

							// Build sector chart
							displayGraph("#grSect",
								"/data/" + nomED + "/"  + chemin.split('/')[3] + "/data/dataSect.csv",
								"hour",
								currSect,
								"") ;
						}

						// Selected sector
						d3.select(".filtre").remove() ;

						g.append("path")
							.attr("class", "filtre")
							.attr("d", d3.select(this).attr("d"))
							.style({'fill' : 'none' , 'stroke-width' : '2px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
							 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

					}) ;

				circles.selectAll("circle")
					.data(json.features)
				  .enter().append("circle")
					.attr("cx", function(d, i) { return positions[i][0] ; })
					.attr("cy", function(d, i) { return positions[i][1] ; })
					.attr("r", function(d) { return radius(d.properties[indic])/currentZoom; })
					.style("stroke-width",  .5 / currentZoom) ;


				// PROPOSITION D'UNE LEGENDE UNIQUE
				// DESSIN DE LA LEGENDE
				// Stockage des valeurs min, max et moyenne de l'indicateur pour la légende des cercles proportionnels
				var valMax = 0 ;
				var valMin = 1000000000 ;
				var lengthI = (indic.split('_')[0]).length - 1 ;
				var val1000 = 1000 ;

				for (var i = 0; i < json.features.length; i++){

					var values = json.features[i].properties ;

					for (j in values){
						if(j.substring(0, lengthI) == indic.substring(0, lengthI)){

							if (Number(values[j]) > valMax ){
								valMax = Number(values[j]) ;
							}
							if (Number(values[j]) < valMin && Number(values[j]) != 0){
								valMin = Number(values[j]) ;
							}
						}
					}
				}
				var valMed = (valMax + valMin)/2 ;

				// Dessin de la légende

				svg.selectAll(".legendbloc, .legendbloc2, .lgchoro, .lgprop, .lgflow").remove() ;
				d3.selectAll(".notabene").remove() ;

				var legendGroup = svg.append("g") ;

				legendGroup.append("rect")
					.attr("width", "290px")
					.attr("height", "200px")
					.attr("x", "2px")
					.attr("y",(height - 220 - (height * 0.04))+"px")
					.attr("class", "legendbloc");

				// Notabene
				svg.append('foreignObject')
					.attr("width", "270px")
					.attr("height", "100px")
					.attr('x', "12px")
					.attr('y', "620px")
					.append("xhtml:div")
					.html('<div class="notabene">'+ textLegProp + '</div>') ;

				var lgprop = legendGroup.selectAll("g.lgprop")
					.data(datasetProp)
					.enter().append("g")
					.attr("class", "lgprop");

				var ls_w = 25, ls_h = 25;

				lgprop.append("circle")
					.attr("cx", 62)
					.attr("cy", function(d){return 600 - radius(d) ;})
					.attr("r", function(d) {return radius(d) ;})
					.style("fill", "none")
					.style("stroke", "black");

				lgprop.append("text")
					.attr("x", 67 + radius(datasetProp[0]))
					.attr("y", function(d){return 605 - (2*radius(d)) ; })
					.text(function (d) { return format(Math.floor(d)); })
					.style("font-size", "0.8rem");

				lgprop.append("text")
					.attr("x", 190)
					.attr("y", 530)
					.text("Max.: "+format(Math.floor(valMax)))
					.style("fill", col[4]);

				lgprop.append("text")
					.attr("x", 190)
					.attr("y", 550)
					.text(textLeg[0] + " " + format(Math.floor(valMed)))
					.style("fill", col[4]);

				lgprop.append("text")
					.attr("x", 190)
					.attr("y", 570)
					.text("Min.: "+format(Math.floor(valMin)))
					.style("fill", col[4]);

				// Update height
				var newy = 600 - 30 - (radius(datasetProp[0])*2) ;
				d3.select(".legendbloc").attr("y", newy +"px") ;
				d3.select(".legendbloc").attr("height", (height - newy - (height * 0.04))+"px");

			}) ;

		}


		if((chemin.split('/')[3]).split('_')[1] == "flow"){                 // CARTE FLOW

			var circles = fl.append("svg:g")
				.attr("id", "circles")
				.attr("class", "bubble")
				.attr("fill", col[4]) ;

			var cells = fl.append("g")
				.attr("id", "cells");

			d3.json(chemin, function(json) {

				g.selectAll(".secteurs").remove() ;

				d3.select(".filtre").remove() ;

				var hour = Math.trunc(slider.value()) ;
				indic = (chemin.split('/')[3]).split('_')[0] + "_h" + hour ;

				g.selectAll(".secteurs").remove() ;

				// Définition du fond de carte
				g.append("g")
					.attr("class", "secteurs")
					.selectAll("path")
					.data(json.features)
					.enter()
					.append("path")
					.attr("d", path)
					.style("stroke", "white")
					.style("stroke-width", 0.5  / currentZoom) ;

				// Add selected sector if a sector was already clicked
				if(currSect){
					var chemins = json.features.map(function (d){
						if(d.properties.Secteur_EM == currSect){
							return path(d) ;
						}
					});

					d3.select(".filtre").remove() ;
					var clickedSect = chemins.filter(function(i){return i != null ;}) ;

				}

				g.append("path")
					.attr("class", "filtre")
					.attr("d", clickedSect)
					.style({'fill' : 'none' , 'stroke-width' : '1px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
					 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;


			}) ;

			d3.csv("/data/" + nomED + "/"  + chemin.split('/')[3] + "/geo/flowData.csv", function(flux) {

				var hour = "h" + Math.trunc(slider.value()) ;

				// Filter on hour
				flux = flux.filter(function(x) { return x.variable == hour}) ;
				var linksByOrigin = {},
				locationBySect = {},
				positions = [];

				countBySect = {} ;

				var arc = d3.geo.greatArc()
					.source(function(d) { return locationBySect[d.source]; })
					.target(function(d) { return locationBySect[d.target]; });

				flux.forEach(function(flight) {
					var origin = flight.CODE_SEC,
					destination = flight.RES_SEC,
					poids = flight.W_IND,
					links = linksByOrigin[origin] || (linksByOrigin[origin] = []);
					links.push({source: origin, target: destination, poids});
					countBySect[origin] = (countBySect[origin] || 0) + 1;
					//countBySect[destination] = (countBySect[destination] || 0) + 1;

				});

				d3.json(chemin, function(json) {

					g.selectAll("circle").remove() ;
					fl.selectAll("circle").remove() ;
					fl.selectAll("path").remove() ;
					d3.select("#legende").selectAll(".legende").remove() ;

					json.features = json.features
						.sort(function(a, b) { return b.properties[indic] - a.properties[indic]; }) ;

					sectct = json.features.filter(function(sectEGT) {
						var loc = [+sectEGT.properties.CENTROID_X, +sectEGT.properties.CENTROID_Y];
						locationBySect[sectEGT.properties.Secteur_EM] = loc;
						positions.push(proj(loc));
						return true;
					});

					var flowmap = cells.selectAll("g")
						.data(json.features)
						.enter().append("svg:g");

					flowmap.append("path")
						.attr("class", "cell")
						.attr("d", path)
						.on("mouseover", function(d) {

							var sectover = d3.select(this).attr("d") ;

							g.append("path")
								.attr("class", "sectover")
								.attr("d", sectover)
								.style({'fill' : 'none' , 'stroke-width' : '1px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
								 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;

							d3.select(this).style({'cursor' :'pointer'}) ;

							info.transition()
								   .duration(200)
								   .style("opacity", .8);

							info.text(d.properties.LIB)
								.style("left", (d3.event.layerX + 15) + "px")
								.style("top", (d3.event.layerY + 15) + "px")
								.style("background-color", "white")
								.style("display", "block");

						})
						.on("mouseout", function(d){

							$(".sectover").css('display', 'none') ;

							info.transition()
							   .duration(500)
							   .style("opacity", 0 );

						})
						.on("click", function(d){

							currSect = d.properties.Secteur_EM ;

							$("#grSect").html('') ;

							nameSect = d.properties.LIB ;
							d3.select("#mainGr2").html("<strong>" + titleGraph2 + "</strong>"  + "<span id = 'nameSect'></br>" + nameSect + "</span>");

							// DISPLAY SECTOR CHARTS FROM SELECTION
							if (currSect && typeGraph == "simple"){

								// Initialisation
								$("#titleGr2").html(titleGr2);
								$("#titleGr2").css("font-size", $("#titleGr1").css("font-size")) ;

								// Build sector chart
								displayGraph("#grSect",
									"/data/" + nomED + "/"  + chemin.split('/')[3] + "/data/dataSect.csv",
									"hour",
									currSect,
									"") ;

							}

							if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] != "pop0"){

								// Build sector chart
								stackedBarChart(currSect) ;

								$("#altGr22").css('cssText', style2);
								$("#altGr12").css('cssText', style1);

							}

							if(currSect && chemin.split('/')[3].split('_')[0] == "pop0"){

								$("#altGr22").css('cssText', style1);
								$("#altGr12").css('cssText', style3);

							// Build sector chart
							displayGraph("#grSect",
								"/data/" + nomED + "/"  + chemin.split('/')[3] + "/data/dataSect.csv",
								"hour",
								currSect,
								"") ;
							}

							// Selected sector
							d3.select(".filtre").remove() ;

							g.append("path")
								.attr("class", "filtre")
								.attr("d", d3.select(this).attr("d"))
								.style({'fill' : 'none' , 'stroke-width' : '2px / currentZoom' , 'stroke' : 'black', 'stroke-opacity' : '0.8',
								 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'}) ;


						}) ;

					flowmap.selectAll("path.arc")
						.data(function(d) { return linksByOrigin[d.properties.Secteur_EM] || []; })
					  .enter().append("path")
						.attr("class", "arc")
						.attr("d", function(d) { return path(arc(d)); })
						.attr("stroke-width", function(d){
							var poids = d.poids ;
							if(poids < sLink[0]){
								return 0.25 / currentZoom;
							}
							if(poids >= sLink[0] && poids < sLink[1]){
								return 1 / currentZoom;
							}
							if(poids >= sLink[1]){
								return 3 / currentZoom ;
							}
						}) ;

					circles.selectAll("circle")
						.data(json.features)
					  .enter().append("svg:circle")
						.attr("cx", function(d, i) { return positions[i][0]; })
						.attr("cy", function(d, i) { return positions[i][1]; })
						.attr("r", function(d) { return radius(d.properties[indic])/currentZoom ; })
						.style("stroke-width",  .5 / currentZoom) ;


					// DESSIN DE LA LEGENDE
					// Stockage des valeurs min, max et moyenne de l'indicateur pour la légende des cercles proportionnels

					var valMax = 0 ;
					var valMin = 1000000000 ;
					var lengthI = (indic.split('_')[0]).length - 1 ;

					for (var i = 0; i < json.features.length; i++){

						var values = json.features[i].properties ;

						for (j in values){
							if(j.substring(0, lengthI) == indic.substring(0, lengthI)){

								if (Number(values[j]) > valMax ){
									valMax = Number(values[j]) ;
								}
								if (Number(values[j]) < valMin && Number(values[j]) != 0){
									valMin = Number(values[j]) ;
								}
								if (Number(values[j]) == valMax){
									valMin = Number(values[j]) ;
								}
							}
						}
					}


					// Dessin de la légende
					var valMed = (valMax + valMin)/2 ;


					svg.selectAll(".legendbloc, .legendbloc2, .lgchoro, .lgprop, .lgflow").remove() ;
					d3.selectAll(".notabene").remove() ;

					var legendGroup = svg.append("g") ;

					legendGroup.append("rect")
						.attr("width", "290px")
						.attr("height", "310px")
						.attr("x", "2px")
						.attr("y", (height - 330 - (height * 0.04))+"px")
						.attr("class", "legendbloc2");

					// Notabene 1 (links)
					svg.append('foreignObject')
						.attr('x', "12px")
						.attr('y', "630px")
						.attr("width", "270px")
						.attr("height", "100px")
						.append("xhtml:div")
						.html('<div class="notabene">' + textLegFlow[1] + '</div>') ;

					// Links
					datasetLiens = [
					{y : 585, strk : 0.25, txt : "< " + sLink[0]},
					{y : 600, strk : 1, txt : sLink[0] + "-" + sLink[1]},
					{y : 615, strk : 3, txt : "> " + sLink[1]}] ;

					var lgflow = legendGroup.selectAll("g.lgflow")
						.data(datasetFlow)
						.enter().append("g")
						.attr("class", "lgflow");

					var liens = lgflow.selectAll("line")
						.data(datasetLiens)
						.enter()
						.append("line") ;

					var liensAtt = liens
						.attr("x1", 20)
						.attr("y1", function(d){return d.y })
						.attr("x2", 45)
						.attr("y2", function(d){return d.y })
						.attr("stroke-width", function(d){ return d.strk })
						.attr("stroke", "black") ;

					var text2 = lgflow.selectAll(".textL")
						.attr("class", "textL")
						.data(datasetLiens)
						.enter()
						.append("text") ;

					var textLabels2 = text2
						.attr("x", 60)
						.attr("y", function(d){return d.y })
						.text(function(d){return d.txt })
						.style("font-size", "0.8rem") ;

					// Circles
					// Notabene 2 (circles)
					svg.append('foreignObject')
						.attr('x', "12px")
						.attr('y', "500px")
						.attr("width", "270px")
						.attr("height", "100px")
						.append("xhtml:div")
						.html('<div class="notabene">' + textLegFlow[0] + '</div>') ;

					var ls_w = 25, ls_h = 25;

					lgflow.append("circle")
						.attr("cx", 62)
						.attr("cy", function(d){return 485 - radius(d) ;})
						.attr("r", function(d) {return radius(d) ;})
						.style("fill", "none")
						.style("stroke", "black");

					lgflow.append("text")
						.attr("x", 67 + radius(datasetFlow[0]))
						.attr("y", function(d){return 490 - (2*radius(d)) ; })
						.text(function (d) { return format(Math.floor(d)); })
						.style("font-size", "0.8rem");

					lgflow.append("text")
						.attr("x", 180)
						.attr("y", 420)
						.text("Max.: "+format(Math.floor(valMax)))
						.style("fill", col[4]);

					lgflow.append("text")
						.attr("x", 180)
						.attr("y", 440)
						.text(textLeg[0] + " " +format(Math.floor(valMed)))
						.style("fill", col[4]);

					lgflow.append("text")
						.attr("x", 180)
						.attr("y", 460)
						.text("Min.: "+format(Math.floor(valMin)))
						.style("fill", col[4]);

					// Update height
					var newy = 485 - 30 - (radius(datasetFlow[0])*2) ;
					d3.select(".legendbloc2").attr("y", newy+"px") ;
					d3.select(".legendbloc2").attr("height", (height - newy - (height * 0.04))+"px") ;

				}) ;

			});

		}

	};





	function createSlider() {

		d3.select("#slider").html("") ;
		d3.select("#timeAxis").html("") ;

		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValue)
			.rangePoints([0, 957], .5);

		var xb = d3.scale.linear().domain([4, 27]).range([4, 376]) ;

		//Set the axis
		xAxis = d3.svg.axis().scale(x)
			.tickValues(sliderValue)
			.orient("bottom");

		var val = slider ? slider.value() : 14;

		slider = d3.slider()
				.min(4).max(27).step(1)
				/*.axis(d3.svg.axis()
					.orient("bottom")
					.ticks(23))*/
			.on("slide",function(event,value){
			  if ( isPlaying ){
				clearInterval(interval);
			  }
			  currentFrame = value;
			  displayMap(chemin) ;

			var currHour = xAxis.tickValues()[(slider.value()-4)] ;

			d3.select("#hour").text(currHour) ;

			if (chemin != "/data/" + nomED + "/pop0_prop/geo/secteursData.geojson"){
				d3.select("#graphiques").selectAll(".shadow").remove() ;

				d3.select("#graphiques").selectAll("svg").insert("line", ".dots")
					.attr("class", "shadow")
				   .attr("x1", xb(currentFrame))
				   .attr("x2", xb(currentFrame))
				   .attr("y1", d3.scale.linear().range([178, 1]).range()[0])
				   .attr("y2", d3.scale.linear().range([178, 1]).range()[1])
				   .style("stroke", "black")
				   .style("stroke-width", 10)
				   .style("stroke-opacity", .2);

			}
			if (chemin == "/data/" + nomED + "/pop0_prop/geo/secteursData.geojson"){
				d3.select("#graphiques").selectAll(".shadow").remove() ;

				d3.select("#grSect").selectAll("svg").insert("line", ".dots")
					.attr("class", "shadow")
				   .attr("x1", xb(currentFrame))
				   .attr("x2", xb(currentFrame))
				   .attr("y1", d3.scale.linear().range([178, 1]).range()[0])
				   .attr("y2", d3.scale.linear().range([178, 1]).range()[1])
				   .style("stroke", "black")
				   .style("stroke-width", 10)
				   .style("stroke-opacity", .2);

			}
			})
			.on("slideend",function(){
			  if ( isPlaying ) animate();
			})
		.value(val);

		//Tickformat must depend on values of y
		var timeAxis = d3.select("#timeAxis")
			.append("svg")
			.attr("width", 957)
			.attr("height", 15)
			.classed("svg-container", true)
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr("viewBox", "0 0 958 25")
			.classed("svg-content-responsive", true)
			.call(xAxis) ;

		d3.select("#hour").text(xAxis.tickValues()[(slider.value()-4)]) ;

		d3.select("#slider")
			.append("div")
			.call(slider);

	}

	function animate() {

		interval = setInterval(function(){

			currentFrame++ ;

			if (currentFrame == 28) currentFrame = 4 ;

			slider.value(currentFrame) ;

			d3.select("#hour").text(xAxis.tickValues()[(slider.value()-4)]) ;

			displayMap(chemin) ;

			// Add shadow line with current hour
			var xb = d3.scale.linear().domain([4, 27]).range([4, 376]) ;

			if (chemin != "/data/" + nomED + "pop0_prop/geo/secteursData.geojson"){
			d3.select("#graphiques").selectAll(".shadow").remove() ;
			d3.select("#graphiques").selectAll("svg").insert("line", ".dots")
				.attr("class", "shadow")
				.attr("x1", xb(currentFrame))
				.attr("x2", xb(currentFrame))
				.attr("y1", d3.scale.linear().range([178, 1]).range()[0])
				.attr("y2", d3.scale.linear().range([178, 1]).range()[1])
				.style("stroke", "black")
				.style("stroke-width", 10)
				.style("stroke-opacity", .2);
			}
			if (chemin == "/data/" + nomED + "pop0_prop/geo/secteursData.geojson"){
				d3.select("#graphiques").selectAll(".shadow").remove() ;

				d3.select("#grSect").selectAll("svg").insert("line", ".dots")
					.attr("class", "shadow")
				   .attr("x1", xb(currentFrame))
				   .attr("x2", xb(currentFrame))
				   .attr("y1", d3.scale.linear().range([178, 1]).range()[0])
				   .attr("y2", d3.scale.linear().range([178, 1]).range()[1])
				   .style("stroke", "black")
				   .style("stroke-width", 10)
				   .style("stroke-opacity", .2);

			}

			if (currentFrame == 28){

			isPlaying = false ;
			d3.select("#play").classed("pause",false).attr("title","Jouer l'animation");
			clearInterval( interval );
			return;

			}

		}, 1000) ;

	}

}



// ADD VC BY DEFAULT
d3.json("/data/" + nomED + "/LAYERS/vc.geojson", function(json){
	vc.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill", "none")
				.style("stroke", "#575756")
				.style("stroke-dasharray", "2")
				.style("stroke-width", 2 / currentZoom);
}) ;

// ADD MAIN CITIES BY DEFAULT
d3.json("/data/" + nomED + "/LAYERS/commSectPrinc.geojson", function(json){

	villes.selectAll(".centroid")
		.data(json.features)
		.enter()
		.append("circle")
		.attr("class", "centroid")
		.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
		.attr("r", (2/currentZoom)+"px")
		.style("fill", "black") ;

	var node = villes.selectAll("g.node")
		.data(json.features)
		.enter()
		.append("g")
		.attr("class", "node")

	// the rectangle
	node.append("rect")
		.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
		.attr("y", -18 / currentZoom)
		.attr("height", 14 / currentZoom)
		.attr("width", 12 / currentZoom)
		.style("fill", "white")
		.style("opacity", ".8") ;

	// the toponyme
	node.append("text")
		.attr("class", "labels")
		.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
		.attr("dy", -6 / currentZoom)
		.style("font-size", (14/currentZoom) + "px")
		.text(function(d) { return d.properties.LIBGEO ; }) ;

	node.selectAll('rect')
		.attr("width", function(d) {return this.parentNode.getBBox().width;})

}) ;

// DISPLAY LAYERS ON CLICK
$('#layers').on("click", function(){
	$('#layers').css('display', 'none') ;
	$('#layers2').css('display', 'block') ;
}) ;

$('#reduce').on("click", function(){
	$('#layers2').css('display', 'none') ;
	$('#layers').css('display', 'block') ;
}) ;


// Display ville-centre
$('input[id="vc"]').on("click", function(){
	if ( $(this).is(':checked') ) {
		d3.json("/data/" + nomED + "/LAYERS/vc.geojson", function(json){
			vc.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill", "none")
				.style("stroke", "#575756")
				.style("stroke-dasharray", "2")
				.style("stroke-width", 2 / currentZoom);
		}) ;
	}
	else{
		vc.selectAll("path").remove() ;
	}
}) ;

// Display routes
$('input[id="routes"]').on("click", function(){
	if ( $(this).is(':checked') ) {
		d3.json("/data/" + nomED + "/LAYERS/road_simpl.geojson", function(json){
			routes.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill", "none")
				.style("stroke", "rgba(0, 0, 0, .65)")
				.style("stroke-width", 1.5 / currentZoom);
		}) ;
	}
	else{
		routes.selectAll("path").remove() ;
	}
}) ;

// Display hydro
$('input[id="hydro"]').on("click", function(){
	if ( $(this).is(':checked') ) {
		d3.json("/data/" + nomED + "/LAYERS/river_simpl.geojson", function(json){
			hydro.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill", "none")
				.style("stroke", "rgba(149, 197, 255, 1)")
				.style("stroke-width", 1.5 / currentZoom);
		}) ;
	}
	else{
		hydro.selectAll("path").remove() ;
	}
}) ;

// Display cities
$('input[id="villes"]').on("click", function(){
	if ( $(this).is(':checked') ) {
		d3.json("/data/" + nomED + "/LAYERS/commSectPrinc.geojson", function(json){

			villes.selectAll(".centroid")
				.data(json.features)
				.enter()
				.append("circle")
				.attr("class", "centroid")
				.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
				.attr("r", (2/currentZoom)+"px")
				.style("fill", "black") ;

			var node = villes.selectAll("g.node")
				.data(json.features)
				.enter()
				.append("g")
				.attr("class", "node")

			// the rectangle
			node.append("rect")
				.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
				.attr("y", -18 / currentZoom)
				.attr("height", 14 / currentZoom)
				.attr("width", 12 / currentZoom)
				.style("fill", "white")
				.style("opacity", ".8") ;

			// the toponyme
			node.append("text")
				.attr("class", "labels")
				.attr("transform", function(d) { return "translate(" + proj(d.geometry.coordinates) + ")"; })
				.attr("dy", -6 / currentZoom)
				.style("font-size", (14/currentZoom) + "px")
				.text(function(d) { return d.properties.LIBGEO ; }) ;

			node.selectAll('rect')
				.attr("width", function(d) {return this.parentNode.getBBox().width;})

		}) ;
	}
	else{
		villes.selectAll("circle").remove() ;
		villes.selectAll(".node").remove() ;
	}
}) ;


// Activation zoom buttons
d3.selectAll("div[data-zoom]")
    .on("click", clicked);

function clicked() {

  svg.call(zoom.event); // https://github.com/mbostock/d3/issues/2387

  // Record the coordinates (in data space) of the center (in screen space).
  var center0 = zoom.center(), translate0 = zoom.translate(), coordinates0 = coordinates(center0);
  zoom.scale(zoom.scale() * Math.pow(2, +this.getAttribute("data-zoom")));

  // Translate back to the center.
  var center1 = point(coordinates0);
  zoom.translate([translate0[0] + center0[0] - center1[0], translate0[1] + center0[1] - center1[1]]);

  svg.transition().duration(750).call(zoom.event);

}

function coordinates(point) {
	var scale = zoom.scale(), translate = zoom.translate();
	return [(point[0] - translate[0]) / scale, (point[1] - translate[1]) / scale];
}

function point(coordinates) {
	var scale = zoom.scale(), translate = zoom.translate();
	return [coordinates[0] * scale + translate[0], coordinates[1] * scale + translate[1]];
}

function zoomed(){

	currentZoom = zoom.scale();

	fd.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	vc.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	routes.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	hydro.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	villes.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");

	fl.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");

	fd.selectAll("path")
		.style("stroke-width", 2 / currentZoom) ;

	g.select(".secteurs").selectAll("path")
		.style("stroke-width", .5 / currentZoom) ;

	vc.selectAll("path")
		.style("stroke-width", 2 / currentZoom) ;

	dep.selectAll("path")
		.style("stroke-width", .5 / currentZoom) ;

	routes.selectAll("path")
		.style("stroke-width", 1.5 / currentZoom) ;

	hydro.selectAll("path")
		.style("stroke-width", 1.5 / currentZoom) ;

	villes.selectAll(".centroid")
		.attr("r", (2/currentZoom)+"px") ;

	villes.selectAll(".node").selectAll("text")
		.style("font-size", (14/currentZoom) + "px")
		.attr("dy", -6 / currentZoom) ;

	villes.selectAll(".node").selectAll("rect")
		.attr("y", -18 / currentZoom)
		.attr("height", 14 / currentZoom)
		.attr("width", 12 / currentZoom)
		.attr("width", function(d) {return this.parentNode.getBBox().width ;}) ;

	fl.selectAll("circle")
		.attr("r",  function(d) { return radius(d.properties[indic])/currentZoom; })
		.style("stroke-width", 0.5 /currentZoom) ;

	fl.selectAll("path")
		.attr("stroke-width", function(d){
			var poids = d.poids ;
			if(poids < sLink[0]){
				return 0.25 /currentZoom;
			}
			if(poids >= sLink[0] && poids < sLink[1]){
				return 1 / currentZoom;
			}
			if(poids >= sLink[1]){
				return 3 / currentZoom ;
			}
		}) ;

	g.selectAll("circle")
		.attr("r", function(d, i) { return radius(d.properties[indic])/currentZoom; })
		.style("stroke-width", 0.5 /currentZoom) ;

}
