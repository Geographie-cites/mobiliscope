

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


//city-name-geoviz
var currentPathname = window.location.pathname;
var res = currentPathname.slice(11);

// langage
var version = currentPathname.slice(1,3);

function capitalizeFirstLetter(x) {
  if(res.includes("-")){
    var str = res.split("-");
    var word1 = str[0].charAt(0).toUpperCase() + str[0].slice(1);
    var word2 = str[1].charAt(0).toUpperCase() + str[1].slice(1);
    return newStr = word1 + "-" + word2 + endof ;

  } else{

      return x.charAt(0).toUpperCase() + x.slice(1) + endof ;
  }

}

if (nomED == "LA REUNION") {
  $( "#city-name h2" ).html("La Réunion" + '<p>' + " (" + anneeED + ")" + '<p>');
} else if (nomED == "MARTINIQUE") {
  $( "#city-name h2" ).html("Martinique" + '<p>' +" (" + anneeED + ")" + '<p>');
} else if (nomED == "ALENCON" && version == "fr") {
  $( "#city-name h2" ).html(nomVC + " " + '<p>' + 'et la région' + " (" + anneeED + ")" + '<p>');
} else {
  $( "#city-name h2" ).html(nomVC + " " + '<p>' + endof + " (" + anneeED + ")" + '<p>');
}

var tmaplab;
//size-graphiques-geoviz
$("#graphiques").css("display","block");
$("#mapTitleCont").css("width","49.5%");   //49.5vw
//$("#map-container").ready(function(){InitialiserCarte()});
//$("#map-container").width($("#mapTitleCont").width());
$("#map-container").css("width","49.7%");



$(".menu-graphiques").click(function() {
   if($("#graphiques").css("display")==="none"){
     $(".picto-graph").attr("src","/dist/assets/close-graphiques.png");
     $("#picto-graph-container").attr("aria-label", alClose);
     $("#graphiques").css("display","inherit");
     $(".menu-graphiques").css("width","31.6%");  //31.7vw
     $("#mapTitleCont").css("width","49.5%");     //49.5vw
     $("#mapTitle").css('cursor', 'pointer').attr('lab', tmaplab);
     $(window).on("resize", function() {
    	//$("#map-container").width($("#mapTitleCont").width());
    	$("#map-container").css("width","49.7%");
    	leafletMap.invalidateSize();
	}).trigger("resize");
    } else{
     $(".picto-graph").attr("src","/dist/assets/arrow-graphiques.png");
     $("#picto-graph-container").attr("aria-label",alDisplay);
     $("#graphiques").css("display","none");
     $(".menu-graphiques").css("width","6.3%");
     $("#mapTitleCont").css("width","75%");
     $("#mapTitle").attr('lab', '').css('cursor', 'text') ;
     $(window).on("resize", function() {
      //$("#map-container").width($("#mapTitleCont").width());
    	$("#map-container").css("width","81.6%"); //81.6vw
    	leafletMap.invalidateSize();
	}).trigger("resize");
   }
})





//svg-rayon-menu-geoviz
function svgPath(color){return "<div><svg class='svg-path' style='vertical-align: middle; height: 1.5em;' width='100%' height='100%' viewBox='0 0 567 567' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;'><path d='M261.6,262L261.6,92.8C261.6,89.28 264.48,86.4 268,86.4C271.52,86.4 274.4,89.28 274.4,92.8L274.4,261.75L400.26,135.89C402.75,133.4 406.83,133.4 409.32,135.88C411.81,138.37 411.81,142.44 409.32,144.93L283.45,270.8L452.4,270.8C455.92,270.8 458.8,273.68 458.8,277.2C458.8,280.72 455.92,283.6 452.4,283.6L283.2,283.6L402.91,403.31C405.4,405.8 405.4,409.87 402.91,412.36C400.42,414.85 396.35,414.85 393.86,412.36L274.4,292.9L274.4,461.6C274.4,465.12 271.52,468 268,468C264.48,468 261.6,465.12 261.6,461.6L261.6,292.65L148.53,405.72C146.04,408.21 141.97,408.21 139.48,405.72C136.99,403.23 136.99,399.16 139.48,396.67L252.55,283.6L83.6,283.6C80.08,283.6 77.2,280.72 77.2,277.2C77.2,273.68 80.08,270.8 83.6,270.8L252.3,270.8L133.08,151.58C130.6,149.09 130.6,145.02 133.08,142.53C135.57,140.04 139.64,140.04 142.13,142.53L261.6,262Z'style='fill-rule:nonzero;stroke:"+color+";stroke-width:25px;'/></svg></div>" }

// Nom de l'onglet
$("#nomOnglet").html("Mobiliscope: " + nomVC);


/*console.log($('.nb').height());
console.log($('.flow').height());*/

const hauteur = $('.nb').height();

$('.flow').height(hauteur);
$('.flow').width(hauteur);
$('.flow').css("position","absolute");


/*console.log($('.nb').height());
console.log($('.flow').position())*/


// ACCORDION MENU
var canED = ['MONTREAL', 'QUEBEC', 'SHERBROOKE', 'SAGUENAY', 'OTTAWA GATINEAU', 'TROIS RIVIERES'];
var asED = ['BOGOTA', 'SANTIAGO', 'SAO PAULO'];

$('.niv3').css('display', 'none') ;
$('.niv2').css('display', 'none') ;

//Alignement des boutons
$("#menu .nb").eq(1).css("margin-right", "3em") ;
$('#menu .nb').eq(2).css('margin-right', '3em');
if(nomED == 'IDF') {
  $('#menu .nb').eq(54).css('margin-right', '3em');
} else if (canED.includes(nomED)){
  $('#menu .nb').eq(26).css('margin-right', '3em');
} else if (nomED == 'CARCASSONNE' || nomED == 'BESANCON'){
  $('#menu .nb').eq(44).css('margin-right', '3em');
} else if (nomED == 'ANNECY'){
  $('#menu .nb').eq(43).css('margin-right', '3em');
} else if (nomED == 'BOGOTA'){
  $('#menu .nb').eq(54).css('margin-right', '3em');
} else if (nomED == 'SANTIAGO'){
  $('#menu .nb').eq(48).css('margin-right', '3em');
} else if (nomED == 'SAO PAULO'){
  $('#menu .nb').eq(50).css('margin-right', '3em');
} else {
  $('#menu .nb').eq(45).css('margin-right', '3em');
}

//Affichage par défaut

/*var nextN1 = $('#menu .niv1').eq(2) ;
$("#menu .niv1").eq(1).nextUntil(nextN1, '#menu .niv2').css('display', 'block') ;
var nextN2 = $('#menu .niv2').eq(2) ;
$('#menu .niv2').eq(1).nextUntil(nextN2, '#menu .niv3').css('display', 'block') ;*/
//$( "<div style='display:none' class='borderNiv3'><div>" ).insertAfter( ".niv3" ); //ajout bordure niv3

$('#menu').find('.niv1').eq(1).addClass('opened-item current-page');
var nextN1 = $('#menu .niv1').eq(2);
$("#menu .niv1").eq(1).nextUntil(nextN1, '#menu .niv2').css('display', 'block');
var nextN2 = $('#menu .niv2').eq(3);
$('#menu .niv2').eq(1).nextUntil(nextN2, '#menu .niv3').css('display', 'table');
$('#menu .niv2').eq(1).nextUntil(nextN2, '#menu .borderNiv3').css('display', 'flex');
$('#menu .niv3').eq(1).css('display', 'none') ;
$('#menu .niv3').eq(2).css('display', 'none') ;
$('#menu .niv3').eq(5).css("background-color", "rgba(233, 98, 29, 1)") ; //couleur de fd de la modalité
$(".fittext1").css("color","rgba(233, 98, 29, 1)"); // couleur du titre de la carte

$('#menu .niv3').each(function( index ) {
  var coloris = $(this).css("border-left-color");
  $(this).find('button').css("background-color", "white") ; //couleur de fd des boutons
  $(this).find('p').css("color",coloris); //couleur du texte des modalités hors '25-34 ans'
  $(this).find('button').css("color",coloris); //couleur des % nb
  $(this).find('.part').attr('data-tooltip', 'down 1000');
  $(this).find('.part').attr('aria-label', tooltipProp);
  $(this).find('.nb').attr('data-tooltip', 'down 1000');
  $(this).find('.nb').attr('aria-label', tooltipNb);
  $(this).find('.flow').attr('data-tooltip', 'down 1000');
  $(this).find('.flow').attr('aria-label', tooltipFlux);
  $(this).find('.flow').append(svgPath(coloris)) //couleur des *
  $('#menu .niv3').eq(5).find('p').css("color","white"); //couleur du texte '25-34 ans'
  $('#menu .niv3').eq(5).find('.nb').css("background-color","rgba(233, 98, 29, 1)"); //aspect cliqué
  $('#menu .niv3').eq(5).find('.nb').css("color","white"); //aspect cliqué
  $('#menu .niv3').eq(5).find('.nb').css("border","1px solid white"); //aspect cliqué
});

//Comportement du menu
$("#menu .niv1").click(function() {
  $( ".niv1" ).removeClass( "opened-item" )
  $(this).toggleClass('opened-item');
  $('.borderNiv3').css('display', 'none') ;
  if($(this).next("#menu .niv2").css("display")==="block"){
  //  $('#menu .niv2,#menu .niv3').css('display', 'none') ;
  //  var nextN1 = $(this).nextAll('#menu .niv1').eq(0) ;
  //  $(this).nextUntil(nextN1, '#menu .niv2').css('display', 'none') ;
  //  var nextN2 = $(this).nextAll('#menu .niv2').eq(1) ;
  //  $(this).nextUntil(nextN2, '#menu .niv3').css('display', 'none') ;
  //  $(this).nextUntil(nextN2, '#menu .borderNiv3').css('display', 'none') ;
  } else{
    $('#menu .niv2,#menu  .niv3').css('display', 'none') ;
    var nextN1 = $(this).nextAll('#menu .niv1').eq(0) ;
    $(this).nextUntil(nextN1, '#menu .niv2').css('display', 'block') ;
    var nextN2 = $(this).nextAll('#menu .niv2').eq(1) ;
    $(this).nextUntil(nextN2, '#menu .niv3').css('display', 'table') ;
    $(this).nextUntil(nextN2, '#menu .borderNiv3').css('display', 'flex') ;
  }

  if($(this).next().css("display")==="none"){
    $(this).removeClass( "opened-item" )
  }

}) ;

// NIV2

$("#menu .niv2").eq(1).find("img").attr("src", "/dist/assets/arrow-top-accordeon.png");

$("#menu .niv2").click(function(e) {
  $("#menu .niv3").css('display',"none")
    var arrowImgsmall = $(this).closest($("#menu .niv2")).find("img");
    var nextN2 = $(this).nextAll('#menu .niv2').eq(0) ;
   if($(this).nextUntil("#menu .niv2").css('display')==="none"){
    $(this).nextUntil(nextN2, '#menu .niv3').css('display', 'table');
  arrowImgsmall.attr("src", "/dist/assets/arrow-top-accordeon.png");  }else{
    $(this).nextUntil(nextN2, '#menu .niv3').css('display', 'none') ;
  arrowImgsmall.attr("src", "/dist/assets/arrow-bottom-accordeon.png");
  }
}) ;


// MOBILE

/*$("#menu-mobile .nb").eq(1).css("margin-right", "2.8em") ;
$('#menu-mobile .nb').eq(2).css('margin-right', '2.8em');
if(nomED == 'IDF') {
  $('#menu-mobile .nb').eq(50).css('margin-right', '2.8em');
} else if (canED.includes(nomED)){
  $('#menu-mobile .nb').eq(23).css('margin-right', '2.8em');
} else if (nomED == 'CARCASSONNE' || nomED == 'BESANCON'){
  $('#menu-mobile .nb').eq(40).css('margin-right', '2.8em');
} else if (nomED == 'ANNECY'){
  $('#menu-mobile .nb').eq(39).css('margin-right', '2.8em');
} else {
  $('#menu-mobile .nb').eq(41).css('margin-right', '2.8em');
}*/

var nextN1_mobile = $('#menu-mobile .niv1').eq(2) ;
$("#menu-mobile .niv1").eq(1).nextUntil(nextN1_mobile, '#menu-mobile .niv2').css('display', 'block') ;
var nextN2_mobile = $('#menu-mobile .niv2').eq(3) ;
$('#menu-mobile .niv2').eq(1).nextUntil(nextN2_mobile, '#menu-mobile .niv3').css('display', 'table') ;
$('#menu-mobile .niv3').eq(1).css('display', 'none') ;
$('#menu-mobile .niv3').eq(2).css('display', 'none') ;
$('#menu-mobile .niv3').eq(5).css("background-color", "rgba(233, 98, 29, 1)") ; //couleur de fd de la modalité
$('#menu-mobile .niv3').each(function( index ) {
  var coloris = $(this).css("border-left-color");
  $(this).find('button').css("background-color", "white") ; //couleur de fd des boutons
  $(this).find('p').css("color",coloris); //couleur du texte des modalités hors '25-34 ans'
  $(this).find('button').css("color",coloris); //couleur des % nb
  $(this).find('.part').attr('data-tooltip', 'down 1000');
  $(this).find('.part').attr('aria-label', tooltipProp);
  $(this).find('.nb').attr('data-tooltip', 'down 1000');
  $(this).find('.nb').attr('aria-label', tooltipNb);
  $(this).find('.flow').attr('data-tooltip', 'down 1000');
  $(this).find('.flow').attr('aria-label', tooltipFlux);
  $(this).find('.flow').append(svgPath(coloris)) //couleur des *
  $('#menu-mobile .niv3').eq(5).find('p').css("color","white"); //couleur du texte '25-34 ans'
  $('#menu-mobile .niv3').eq(5).find('.nb').css("background-color","rgba(233, 98, 29, 1)"); //aspect cliqué
  $('#menu-mobile .niv3').eq(5).find('.nb').css("color","white"); //aspect cliqué
  $('#menu-mobile .niv3').eq(5).find('.nb').css("border","1px solid white"); //aspect cliqué
});


$("#menu-mobile .niv1").click(function() {
  $( ".niv1" ).removeClass( "opened-item" )
  $(this).toggleClass('opened-item');
  if($(this).next("#menu-mobile .niv2").css("display")==="block"){
    $('#menu-mobile .niv2,#menu-mobile .niv3').css('display', 'none') ;
    var nextN1_mobile = $(this).nextAll('#menu-mobile .niv1').eq(0) ;
    $(this).nextUntil(nextN1_mobile, '#menu-mobile .niv2').css('display', 'none') ;
    var nextN2_mobile = $(this).nextAll('#menu-mobile .niv2').eq(1) ;
    $(this).nextUntil(nextN2_mobile, '#menu-mobile .niv3').css('display', 'none') ;
  } else{
    $('#menu-mobile .niv2,#menu-mobile  .niv3').css('display', 'none') ;
    var nextN1_mobile = $(this).nextAll('#menu-mobile .niv1').eq(0) ;
    $(this).nextUntil(nextN1_mobile, '#menu-mobile .niv2').css('display', 'block') ;
    var nextN2_mobile = $(this).nextAll('#menu-mobile .niv2').eq(1) ;
    $(this).nextUntil(nextN2_mobile, '#menu-mobile .niv3').css('display', 'table') ;
  }

  if($(this).next().css("display")==="none"){
    $(this).removeClass( "opened-item" )
  }


}) ;

// NIV2
$("#menu-mobile .niv2").eq(1).find("img").attr("src", "/dist/assets/arrow-top-accordeon.png");

$("#menu-mobile .niv2").click(function(e) {
    $("#menu-mobile .niv3").css('display',"none")
    var arrowImgsmall = $(this).closest($("#menu-mobile .niv2")).find("img");
    var nextN2_mobile = $(this).nextAll('#menu-mobile .niv2').eq(0) ;
   if($(this).nextUntil("#menu-mobile .niv2").css('display')==="none"){
    $(this).nextUntil(nextN2_mobile, '#menu-mobile .niv3').css('display', 'table');
  arrowImgsmall.attr("src", "/dist/assets/arrow-top-accordeon.png");  }else{
    $(this).nextUntil(nextN2_mobile, '#menu-mobile .niv3').css('display', 'none') ;
  arrowImgsmall.attr("src", "/dist/assets/arrow-bottom-accordeon.png");
  }
}) ;


// FIN MOBILE


// Modalité "ville centre" du menu accordéon qui prend le nom de chacune des ED
if(nomED!="ALENCON"){
  $("#menu #vcMenu").html(nomVC);
  $("#menu-mobile #vcMenu").html(nomVC);
} else {
  $("#menu #vcMenu").html('Alençon');
  $("#menu-mobile #vcMenu").html('Alençon');
}


// tooltip densité
$("#menu .part:first").attr('data-tooltip', 'down 1000').attr('aria-label', tooltipDens);
$("#menu-mobile .part:first").attr('data-tooltip', 'down 1000').attr('aria-label', tooltipDens);


// Buttons
$(".part, .nb, .flow").click(function() {
  $(".niv1").removeClass("current-page")
  $(this).parents(".niv3").prevAll(".niv1:first").addClass("current-page")
  //console.log($(this).parents(".niv3").prevAll(".niv1:first"));
  //console.log("j");

  $('.niv3').each(function( index ) {
     $(this).find('button').css("border","1px solid #d2d2d2");
  });


  if(!isPlaying){

  // 1 : button aspect

  $("button").css("background-color", "white") ;

  var checkColor = $(this).closest($('div[class^= "niv3"]')).css("border-left-color");
  $(this).css("background-color", checkColor) ;

  var checDiv = $(this).closest($('div[class^= "niv3"]'));

  $(".fittext1").css("color",checkColor);
  $('#mapTitleCont').css("border-left-color",checkColor);
  $("#mainGr1Cont").css("border-left-color",checkColor);
  $("#mainGr2Cont").css("border-left-color",checkColor);

  $('.niv3').each(function( index ) {
    var coloris = $(this).css("border-left-color");
    $(this).find('p').css("color",coloris);
    checDiv.find('p').css("color","white");
    checDiv.find('button').css("border","1px solid white");
    checDiv.find('button').css("padding-top","1.5px");
    $(this).find('button').css("color",coloris);
    $(this).find("svg path").css("stroke",coloris)
  });


  $(this).closest($("button")).find("svg path").css("stroke",'white')
  $(this).closest($("button")).css("color","white");
  $('div[class^= "niv3"]').css('background-color', 'white');
  $(this).closest($('div[class^= "niv3"]')).css('background-color', ($(this).closest($('div[class^= "niv3"]')).css("border-left-color")).replace('rgb', 'rgba').slice(0, -1) + ', 1)');
  $(this).closest($('div[class^= "niv3"]')).css('fill-opacity', $(this).closest($('div[class^= "niv3"]')).css("border-left-color"));
  }
}) ;






// MAP CONTAINER

// HEADLINE AUTO SIZE
var fontSize ;
var textContainer ;

function update_fontsize(){

  $( ".fittext1" ).each(function() {

    textContainer = $(this).closest(".cont") ;
    fontSize = '14px';

    $(this).css('font-size', fontSize);
    $(this).css('line-height', textContainer.height() + 'px');

    var fontWidth = parseInt($(this).css("width")) ;
    var containerWidth = parseInt(textContainer.css("width")) ;

    if(fontWidth >= (containerWidth*0.96)){

      newfontSize = ( fontSize.slice(0, -2) * (containerWidth * 0.9) ) / fontWidth;

      $(this).css('font-size', newfontSize);
      $(this).css('line-height', textContainer.height() + 'px');

    }
  });
};


//data sources
if(canED.includes(nomED)) {
	var source = dataSource + " <span class = 'help' onclick = 'popup_source_can()'></span>";
}else if (asED.includes("BOGOTA")){
    var source = dataSource + " <span class = 'help' onclick = 'popup_source_bo()'></span>";
}else if (asED.includes("SANTIAGO")){
    var source = dataSource + " <span class = 'help' onclick = 'popup_source_sa()'></span>";
}else if (asED.includes("SAO PAULO")){
    var source = dataSource + " <span class = 'help' onclick = 'popup_source_sp()'></span>";
}else{
	var source = dataSource + " <span class = 'help' onclick = 'popup_source_fr()'></span>";
};


function isMobileDevice() {
 if( navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}



// LEAFLET
// Create base map with osm tiles
/*var leafletMap;
function InitialiserCarte() {}*/
leafletMap = L.map('map-container', {
      center: setview,
      //center: setview(getCenter()),
      zoom: zoom,
      // dragging: false,
      attributionControl:false,
      zoomControl: false
    }),
leafletLink = '<a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a>';
var c = leafletMap.getCenter();
leafletMap.setView(c);

// Preventing users from leaving the map extend (setMaxBounds())
/*var lmbounds = leafletMap.getBounds();
console.log(lmbounds);*/
var edWmyBounds = ['CLERMONT FERRAND', 'LYON', 'TOULOUSE', 'MARSEILLE', "NICE", 'NANTES', 'QUIMPER', 'RENNES',
                   'SAINT ETIENNE', 'LILLE', 'STRASBOURG', 'IDF', 'BEZIERS', 'BORDEAUX', 'MONTPELLIER', 'NANCY',
                   'ALENCON', 'AMIENS', 'ANNEMASSE', 'BAYONNE', 'BREST', 'CHERBOURG', 'DOUAI', 'ROUEN', 'VALENCE',
                   'LE HAVRE', 'MONTREAL', 'SHERBROOKE', 'TROIS RIVIERES', 'BOGOTA', 'SANTIAGO'];
if (edWmyBounds.includes(nomED)) {
  var bounds = myBounds;
  //var bounds = leafletMap.getBounds();
} else {
  var bounds = leafletMap.getBounds();
};
leafletMap.setMaxBounds(bounds);

// osm tiles
osmLink = '<a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>';
var tilesOSM = L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          minZoom: minZoom,
          // maxZoom: maxZoom
          attribution: copy + ' | ' + source +  '<br/>' + leafletLink + ' | &copy; ' + osmLink 
          });

// CARTO tiles
cartoLink = '&copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>';
var tilesCARTO = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      subdomains: 'abcd',
      minZoom: minZoom,
      attribution: copy + ' | ' + source + '<br/>' +  leafletLink + ' | ' + cartoLink + ' &copy; ' + osmLink + ' Contributors' 
      });

var tilesDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
  subdomains: 'abcd',
  minZoom: minZoom,
  attribution: copy + ' | ' + source + '<br/>' + leafletLink + ' | ' + cartoLink + ' &copy; ' + osmLink + ' Contributors' 
});


// jawg
/*jawgLink = '&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank"><b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
var tilesDark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token={accessToken}', {
  attribution: copy + ' | ' + source + '<br/>' + leafletLink + ' | '+ jawgLink,
  minZoom: minZoom,
  maxZoom: 22,
  subdomains: 'abcd',
  accessToken: 'xtYElRwCyD34E9z9idkNn8wWINxydCie5By3zvFf89X2pm219gKuLx2CBVp6L5aN'
});*/


// GeoportailFrance_orthos
GPLink = '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail</a> France';
var tilesGP = L.tileLayer(
  'https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
  bounds: [[-75, -180], [81, 180]],
  minZoom: minZoom,
  maxZoom: 19,
  apikey: 'choisirgeoportail',
  format: 'image/jpeg',
  style: 'normal',
  attribution: copy + ' | ' + source + '<br/>' + leafletLink + ' | '+ GPLink 
});

// ESRI tiles
EsriLink = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
var tilesEsri = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
   minZoom: minZoom,
   attribution: copy + ' | ' + source + '<br/>' + leafletLink + ' | '+ EsriLink 
});

if(canED.includes(nomED) || asED.includes(nomED)){
  var satellTiles = tilesEsri;
} else {
  var satellTiles = tilesGP;
}

// Add attribution and source
/*L.control.attribution({ position: 'bottomleft' }).setPrefix(copy + ' | ' + leafletLink + ' ; &copy; ' + osmLink + ' Contributors ; ' +
  cartoLink + '<br/>' + source).addTo(leafletMap);*/
var attrib = L.control.attribution({ position: 'bottomleft' }).setPrefix('');


// Add tiles to map
if (isMobileDevice()===false) {
  tilesCARTO.addTo(leafletMap);
  attrib.addTo(leafletMap);
}
// pour une raison mystérieuse, répéter le setMaxBounds ici pour stoper les vibrations :
leafletMap.setMaxBounds(bounds);


// Add div for legend
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (leafletMap) {var div = L.DomUtil.create('div', 'legend'); return div};
legend.addTo(leafletMap);

new L.Control.Zoom({ position: 'topright' }).addTo(leafletMap);

// Add div for info pane (secteur names)
var info = L.control({position: 'topleft'});
info.onAdd = function(leafletMap) {var div = L.DomUtil.create('div', 'info'); return div};
info.addTo(leafletMap);

// Add scale bar
L.control.scale({position: 'bottomright'}).addTo(leafletMap);


// test
/*leafletMap.createPane('labels');
leafletMap.getPane('labels').style.zIndex = 650;
leafletMap.getPane('labels').style.pointerEvents = 'none';
var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(leafletMap);*/

// to stock layers of Mobiliscope map
var mobiMap = [];

// Add more layer (d'habillage)
// QPV
var qpvJson = [];

var qpvOverlay = L.d3SvgOverlay(function(sel, proj) {

  //Pattern (hachures)
  var pattern = sel.selectAll('pattern').data(qpvJson);
      pattern.enter()
        .append("pattern")
        .attr({ id:"hash", width:"2", height:"2", patternUnits:"userSpaceOnUse", patternTransform:"rotate(45)"})
        .append("rect")
        .attr('d', proj.pathFromGeojson)
        .attr({ width: "1", height: '5', fill: '#4c4c4c' });

  var upd = sel.selectAll('path').data(qpvJson);

    upd.enter()
      .append('path')
      .attr('id', 'qpv')
      .attr('d', proj.pathFromGeojson);

    upd.attr('fill', '#4c4c4c95')
    // upd.style('fill', 'url(#hash)')
      .style('stroke', '#4c4c4c');

    d3.selectAll('#qpv').style('stroke-width', .8/proj.scale);

});


// limites communales (AL)
var muniJson = [];

var muniOverlay = L.d3SvgOverlay(function(sel, proj) {

  var upd = sel.selectAll('path').data(muniJson);

      upd.enter()
          .append('path')
          .attr('id', 'comuna')
          .attr('d', proj.pathFromGeojson);

        upd.attr('stroke', '#3d3d3d')
          .attr('fill', 'none');

      d3.selectAll('#comuna')
          .attr('stroke-width', .4 / proj.scale);
});

// transmilenio (Bogota)
var tmJson = [];

var tmOverlay = L.d3SvgOverlay(function(sel, proj) {

  var upd = sel.selectAll('path').data(tmJson);

  upd.enter()
  .append('path')
  .attr('id', 'transm')
  .attr('d', proj.pathFromGeojson);

  upd.attr('stroke', 'black')
  .attr('stroke-dasharray', '3, 1, 1')
  .attr('fill', 'none');

  d3.selectAll('#transm')
  .attr('stroke-width', 1/proj.scale);

});

// Couronnes centre/pérphérie (AL - zonage METAL)
var mrJson = [];

var mrOverlay = L.d3SvgOverlay(function(sel, proj) {

  var upd = sel.selectAll('path').data(mrJson);

      upd.enter()
          .append('path')
          .attr('id', 'metal')
          .attr('d', proj.pathFromGeojson);

        upd.attr('stroke', '#4c4c4c95')
          .attr('fill', 'none');

      d3.selectAll('#metal')
          .attr('stroke-width', 1.5 / proj.scale);

  var pt = sel.selectAll('text').data(mrJson);

      pt.enter()
        .append('text')
        .attr('id', 'mrlab')
        .style('text-anchor', 'middle')
        .style('fill', '#4c4c4c95')
        .style('font-weight', 'bold')
        .attr('dx', function(d) { return proj.latLngToLayerPoint(d.latLng).x; })
        .attr('dy', function(d) { return proj.latLngToLayerPoint(d.latLng).y; });

  if (version==="fr"){
    pt.text(function(d) { return d.properties.LIBFR; }) ;
  } else if (version==="es"){
    pt.text(function(d) { return d.properties.LIBES; }) ;
  } else {
    pt.text(function(d) { return d.properties.LIBEN; }) ;
  };


      d3.selectAll('#mrlab')
          .style('font-size', 10/proj.scale + 'px');


});

var mrOverlay2 = L.d3SvgOverlay(function(sel, proj) {

  //Pattern (hachures)
  var pattern = sel.selectAll('pattern').data(mrJson);
      pattern.enter()
        .append("pattern")
        .attr({ id:"hash", width:"10", height:"10", patternUnits:"userSpaceOnUse", patternTransform:"rotate(45)"})
        .append("rect")
        .attr('d', proj.pathFromGeojson)
        .attr({ width: "1", height: '10', fill: '#787878' });

  var color = d3.scale.ordinal()
        .domain([1, 2, 3, 4])
        .range(["none", "url(#hash)", "#c2c2c2", "#787878"]);

  var upd = sel.selectAll('path').data(mrJson);

  upd.enter()
    .append('path')
    .attr('id', 'metal')
    .attr('d', proj.pathFromGeojson);

  upd.style('fill', function(d) { return color(d.properties.ZONAGE_SEC); });


});



// control layers
// Modify control layers
var lc = L.Control.Layers.extend({
  onAdd: function () {

    var className = 'leaflet-control-layers',
      container = L.DomUtil.create('div', className),
      form = L.DomUtil.create('form', className + '-list');

  //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
  container.setAttribute('aria-haspopup', true);

  if (!L.Browser.touch) {

    L.DomEvent
        .disableClickPropagation(container)
        .disableScrollPropagation(container);

    var close = L.DomUtil.create('span', className + '-close', container);
      close.innerHTML = '<img src="/dist/assets/close-graphiques.png" />';

      L.DomEvent.on(close, 'click', function(e){
        L.DomEvent.stop(e);
        this._collapse();
      }, this);


  } else {
      L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
  }

  if (this.options.collapsed) {

    if (!L.Browser.android) {

      L.DomEvent
        .on(container, 'click', this._expand, this);

    }

    var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
        link.href = '#';
        link.title = lcHover[0];
    if (L.Browser.touch) {
      L.DomEvent
        .on(link, 'click', L.DomEvent.stop)
        .on(link, 'click', this._expand, this);
    } else {

        L.DomEvent.on(link, 'focus', this._expand, this)
    }

    //Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
    /*L.DomEvent.on(form, 'click', function () {
        setTimeout(L.bind(this._onInputClick, this), 0);
      }, this);*/

    this._map.on('click', this._collapse, this);

    } else {
      this._expand();
    }

    if (isMobileDevice()===false) {
      if(canED.includes(nomED) || nomED == 'ANNECY') {
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" checked/>' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' + 
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' + '</form>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>';
      } else if (nomED == 'BOGOTA'){
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" checked/>' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="muni" type="checkbox" />' + overlayName[3] + '</label></form>' +
                          '<label><input id="mr" type="checkbox" />' + overlayName[5] + '</label></form>' +
                          '<label><input id="tm" type="checkbox" />' + 'TransMilenio' + '</label></form>';
      } else if (asED.includes(nomED) && nomED != 'BOGOTA'){
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" checked/>' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="mr" type="checkbox" />' + overlayName[5] + '</label></form>' +
                          '<label><input id="muni" type="checkbox" />' + overlayName[3] + '</label></form>' ;
      } else {
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" checked/>' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="qp" type="checkbox" />' + overlayName[2] + '</label></form>';
      };
    } else if (isMobileDevice()===true) {
        if(canED.includes(nomED) || nomED == 'ANNECY') {
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" />' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' + 
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' + '</form>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>';
      } else if (nomED == 'BOGOTA'){
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" checked/>' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="muni" type="checkbox" />' + overlayName[3] + '</label></form>' +
                          '<label><input id="mr" type="checkbox" />' + overlayName[5] + '</label></form>' +
                          '<label><input id="tm" type="checkbox" />' + 'TransMilenio' + '</label></form>';
      } else if (asED.includes(nomED) && nomED != 'BOGOTA') {
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" />' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="mr" type="checkbox" />' + overlayName[5] + '</label></form>' +
                          '<label><input id="muni" type="checkbox" />' + overlayName[3] + '</label></form>';
      } else {
        form.innerHTML += '<form><label><input id="bm0" class="bm" type="checkbox" />' + overlayName[0] + '</label>' +
                          '<label><input id="bm1" class="bm" type="checkbox" />' + overlayName[1] + '</label>' +
                          // '<label><input id="bm3" class="bm" type="checkbox" />' + overlayName[7] + '</label>' +
                          '<label><input id="bm2" class="bm" type="checkbox" />' + overlayName[6] + '</label>' +
                          '<div class="'+ className + '-separator" ></div>' +
                          '<label><input id="mmap" type="checkbox" checked/>' + overlayName[4] + '</label></form>' +
                          '<label><input id="qp" type="checkbox" />' + overlayName[2] + '</label></form>' ;
      };
    }

    container.appendChild(form);
    return container;

    }
});


// add control layer to map
leafletMap.addControl(new lc());


// function display only one osm
$('.bm').change(function() {
    var c= $(this).is(':checked');
    $(".bm").prop('checked',false);
      if(c) {
        $(this).prop('checked',true);
    }
});
$('.bm').click(function(){
  if(bm0.checked == false && bm1.checked == false && bm2.checked == false){
    attrib.setPrefix(copy + ' | ' + source + ' | ' + leafletLink);
  } else {
    attrib.setPrefix('');
  }
})
$('#bm0').click(function() {
  if (bm0.checked) {
    tilesCARTO.addTo(leafletMap);
    leafletMap.removeLayer(tilesOSM);
    leafletMap.removeLayer(satellTiles);
    // leafletMap.removeLayer(tilesDark);
  } else {
    leafletMap.removeLayer(tilesCARTO);
  };
});
$('#bm1').click(function() {
  if (bm1.checked) {
    tilesOSM.addTo(leafletMap);
    leafletMap.removeLayer(tilesCARTO);
    leafletMap.removeLayer(satellTiles);
    // leafletMap.removeLayer(tilesDark);
  } else {
    leafletMap.removeLayer(tilesOSM);
  };
});
$('#bm2').click(function() {
  if (bm2.checked) {
    satellTiles.addTo(leafletMap);
    leafletMap.removeLayer(tilesOSM);
    leafletMap.removeLayer(tilesCARTO);
    // leafletMap.removeLayer(tilesDark);
  } else {
    leafletMap.removeLayer(satellTiles);
  };
});
/*$('#bm3').click(function() {
  if (bm3.checked) {
    tilesDark.addTo(leafletMap);
    leafletMap.removeLayer(tilesOSM);
    leafletMap.removeLayer(tilesCARTO);
    leafletMap.removeLayer(satellTiles);
    $(tilesDark.getContainer()).attr('id', 'tilesDark');
  } else {
    leafletMap.removeLayer(tilesDark);
  };
});*/


// load and display data on click in control layer
// QPV load in displayMap function
// limites communales (AL)
$("#muni").click(function(){

  if (muni.checked) {
    // load data
    d3.json('/data/comunasAL.geojson', function(json) {
      muniJson = json.features.filter(function(d) {
        return d.properties.ENQUETE == nomED;
      });
      muniOverlay.addTo(leafletMap);
    });
    } else {
      leafletMap.removeLayer(muniOverlay);
    };

});
// transmilenio
$("#tm").click(function(){

  if (tm.checked) {
    // load data
    d3.json('/data/transmilenio.geojson', function(json) {
      tmJson = json.features;
      tmOverlay.addTo(leafletMap);
    });
    } else {
      leafletMap.removeLayer(tmOverlay);
    };

});
// Couronnes centre/pérphérie (AL - zonage METAL)
/*$("#mr").click(function(){

  if (mr.checked) {
    // load data
    d3.json('/data/metalrings.geojson', function(json) {
      mrJson = json.features.filter(function(d) {
        return d.properties.ENQUETE == nomED;
      });
        mrJson.map(function(d){
            d.latLng = [+d.properties.Y_W84,+d.properties.X_W84];
            return d;
          });
      mrOverlay2.addTo(leafletMap);
      mrOverlay.addTo(leafletMap);
    });
    } else {
      leafletMap.removeLayer(mrOverlay);
      leafletMap.removeLayer(mrOverlay2);
    };

});*/





// GEOVIZ - GLOBAL VAR
var gr = d3.select('#graphiques').append('g');

var countBySect = {};

var isPlaying = false ;

var slider ;
var	interval ;
var currentFrame = 14 ;
var xAxis ;


var typeGrIDF = 'Duncan';
var typeGraph = 'stacked';

// var currSect = [nomCol, nameSec];
var currSect = [];

if (currSect[0] === undefined) {
  currSect[0] = nomCol;
}

// console.log(currSect);


var radius = d3.scale.sqrt()
	.domain([0, 1e6])
	.range(radiusRange);

var indic;

var gammePop = ["#000093"],
    gammeRespop = ["#f8bd08", "#97bc59"],
    gammeCs = ["#008792", "#624f98", "#188e31", "#d69b01", "#ab0f31"],
    gammeSP = ["#4b6dac", "#17a97a", "#ec721b", "#c02767"],
    gammeAct = ["#17297c", "#76ad71", "#379fac", "#e7564d", "#7e3a61", "#e4406e"],
    gammeDep = ["#9a2679", "#ee865c", "#58c2ef", "#167e88", "#2d365e"],
    gammeAge = ["#da0846", "#e9621d", "#67539b", "#816c53"],
    gammeOcc = ["#e4406e", "#97bc59", "#586aa3", "#957c60", "#f8bd08"],
    gammeSex = ["#4e3e8e", "#47b291"],
    gammeRev_fr = ["#348e89", "#7fb72c", "#fe7562", "#dc2c48"],
    gammeRev_can = ["#4b4443","#348e89", "#7fb72c", "#fe7562", "#dc2c48"],
    gammeRev_as = ["#348e89", "#7fb72c", "#fe7562", "#dc2c48", "#7a1828"],
    gammeMode = ["#008eaa", "#b44185", "#3d8966"],
    gammeRes = ["#005099", "#00998b", "#cb5f00"],
    gammeRes_2moda = ["#005099", "#cb5f00"],
    gammeQpv = ["#58c2ef", "#e77000"],
    gammeCso = ["#624f98", "#008791", "#d69b01", "#ab0f31"],
    gammeInf = ["#9a2679", "#7fb72c"],
    gammeZona = ["#9a2679", "#ec7646", "#58c2ef", "#167e88"],
    gammeMode_b = ["#f8bd08", "#008eaa", "#b44185", "#3d8966"];
    gammeLog = ["#7e3a61", "#67539b", "#fe7562"];
    gammeStrm = ["#7fb72c", "#f37fbc", "#e81c58", "#58c2ef", "#4c6fad"] ;
    gammeStrmfr = ["#7fb72c", "#f37fbc", "#e81c58", "#4c6fad"] ;
    gammeStrmqc = ["#7fb72c", "#e81c58", "#4c6fad"] ;

var chemin;


// variables dico et licence pour zip
if(version=="fr") {
  var licence_pdf = "data/ODbL_FR/LicenceODbL_Mobiliscope_" + nomED +".pdf";
} else if (version=="es") {
  var licence_pdf = "data/ODbL_ES/LicenceODbL_Mobiliscope_" + nomED +".pdf";
} else if (version=="en") {
  var licence_pdf = "data/ODbL_EN/LicenceODbL_Mobiliscope_" + nomED +".pdf";
}

var dico_csv = "data/dictionnaire.ods",
    sec_gjson = "data/" + nomED + "/stacked/secteurs.geojson";


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

  /*// pas de bouton téléchargement pour le Canada
  if(canED.includes(nomED)) {
    $(".mainGr1-tooltip").html('');
    $("#stacked-dowload.cont-picto").remove();
  } else {
    $(".mainGr1-tooltip").html('<img src="/dist/assets/download.svg" />');
    $("#stacked-dowload.cont-picto").html('<span class="downloadTitle"></span>');
  }*/

  $(".mainGr1-tooltip").html('<img src="/dist/assets/download.svg" />');
  $("#stacked-dowload.cont-picto").html('<span class="downloadTitle"></span>');

  // POUR ZIP
  // csv pop = chemin vers les data à télécharger depuis la carte pop totale
  if(chemin.split('/')[3] == 'pop0_choro'){
    var csvpop = "/data/" + nomED + "/pop0_choro/data/dataSect.csv";
  } else if (chemin.split('/')[3] == 'pop0_prop'){
    var csvpop = "/data/" + nomED + "/pop0_prop/data/dataSect.csv";
  } else if (chemin.split('/')[3] == 'pop0_flow'){
    var csvpop = "/data/" + nomED + "/pop0_flow/data/dataSect.csv";
  };
  // csvStacked = chemin vers les data à télécharger depuis la carte autres indicateurs
  var csvStacked = "/data/" + nomED + "/stacked/" + (chemin.split('/')[3].split('_')[0]).slice(0, -1) + '_'
      + (chemin.split('/')[3]).split('_')[1] + "_stacked.csv" ;
  //console.log(csvStacked);
  if ((chemin.split('/')[3].split('_')[0]).slice(0, -1) == 'pop'){
    $('#stacked-dowload').attr('href','/zip-streamer.php?files=.' + csvpop + ',./'+ sec_gjson + ',./' + dico_csv + ',./' + licence_pdf)
  } else {
    $('#stacked-dowload').attr('href','/zip-streamer.php?files=.' + csvStacked + ',./'+ sec_gjson + ',./' + dico_csv + ',./' + licence_pdf)
  }

  // d3.select("#grIDF").html("") ;
	$("#altGr21").html(titleAltGr1[0]);
	$("#altGr11").html(titleAltGr1[1]);
  $("#altGr12").html(titleAltGr2[1]);
	$("#altGr22").html(titleAltGr2[0]);


	var nameY = chemin.split('/')[3].split('_')[0].slice(0);
  var indicateur = (chemin.split('/')[3]).split('_')[0].slice(0, -1);
  if ( indicateur != 'pop' && indicateur != 'res' && (chemin.split('/')[3]).split('_')[1] != "flow") {
    displayGraphSegreg("#grIDF", // div d'insertion du graphique
        "/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv", // chemin du fichier de données
        "hour", //valeurs de l'axe x
        nameY,//Object.keys(d)[1] // valeurs de l'axe y
        "" // domain de l'axe y
        );
  }


	// CHANGE CHART FUNCTIONS
	$("#altGr11").on("click", function(d){

		typeGrIDF = "Moran" ;

		$("#altGr11").attr('class', 'style1');
		$("#altGr21").attr('class', 'style2');

		d3.select("#grIDF").html('') ;

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Moran.csv",
			"hour", //valeurs de l'axe x
			nameY,  //Object.keys(d)[1] // valeurs de l'axe y
			"" // domain de l'axe y)
			);

	}) ;

	$("#altGr21").on("click", function(d){

		typeGrIDF = "Duncan" ;

		$("#altGr21").attr('class', 'style1');
		$("#altGr11").attr('class', 'style2');

		$("#grIDF").html('') ;

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv",
			"hour", //valeurs de l'axe x
			nameY, //Object.keys(d)[1] // valeurs de l'axe y
			"" // nom de l'axe y
			);

	}) ;

	$("#altGr12").on("click", function(){

		typeGraph = "stacked" ;

		// Initialisation
		$("#altGr12").attr('class', 'style1');
		$("#altGr22").attr('class', 'style2');


		$("#grSect").html('') ;

		// Display stackedchart
		stackedBarChart(currSect) ;

	}) ;

	$("#altGr22").on("click", function(){

    if(chemin.split('/')[3].split('_')[0] != "pop0"){

      typeGraph = "simple" ;

      // Initialisation
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');

      $("#grSect").html('') ;

      // Display simple chart
      $("#titleGr2").html(titleGr2) ;

      displayGraph("#grSect",
        "/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
        "hour",
        currSect[0],
        "") ;
      }

      if(chemin.split('/')[3].split('_')[0] == "pop0"){

      typeGraph = "simple" ;

      // Initialisation
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style3');

      $("#grSect").html('') ;

      // Display simple chart
      $("#titleGr2").html(titleGr2) ;

      displayGraph("#grSect",
        "/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
        "hour",
        currSect[0],
        "") ;
      }


	}) ;

	// DISPLAY SECTOR CHARTS FROM SELECTION
	if(typeGrIDF == "Moran"){

		//  Initialisation
		$("#grIDF").html('') ;
		$("#altGr11").attr('class', 'style1');
		$("#altGr21").attr('class', 'style2');

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

		$("#altGr21").attr('class', 'style1');
		$("#altGr11").attr('class', 'style2');
    if ( indicateur != 'pop' && indicateur != 'res' && (chemin.split('/')[3]).split('_')[1] != "flow") {
  		displayGraphSegreg("#grIDF", // div d'insertion du graphique
  			"/data/" + nomED + "/indice_segreg/" + chemin.split('/')[3].split("_")[0].slice(0, -1) + "_Duncan.csv",
  			"hour", //valeurs de l'axe x
  			nameY, //Object.keys(d)[1] // valeurs de l'axe y
  			"" // nom de l'axe y
  		);
    }
	}


  // Comportement du graphique simple selon indicateur
	if (currSect && typeGraph == "simple"){

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong></br>"  + "<span id = 'nameSect'>" + currSect[1] + "</span>");
		$("#titleGr2").html(titleGr2);

    if (chemin.split('/')[3].split('_')[0] == "pop0"){
      $("#altGr21").attr('class', 'style3');
      $("#altGr11").attr('class', 'style3');
      $("#altGr12").attr('class', 'style3');
      $("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;
    } else if (chemin.split('/')[3].split('_')[0].slice(0, -1) == "res"){
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');
      $("#altGr21").attr('class', 'style3');
      $("#altGr11").attr('class', 'style3');
      $("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;
    } else if(chemin.split('/')[3].split('_')[0] != "pop0" || chemin.split('/')[3].split('_')[0].slice(0, -1) != "res"){
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');
    };

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
			"/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
			"hour",
			currSect[0],
			"") ;
	}

  // Comportement du graphique empilé pour tous les indicateurs sauf pop totale
	if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] != "pop0"){

		// Initialisation
    if (currSect[0] === nomCol) {
      currSect[1] = nameSec;
    } else {
      currSect[1];
    }

		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong></br>" + "<span id = 'nameSect'>" + currSect[1] + "</span>");

    $("#altGr12").attr('class', 'style1');
    $("#altGr22").attr('class', 'style2');

		d3.select("#grSect").html("") ;

		// Build sector chart
		stackedBarChart(currSect) ;

	}

  // Retirer le graphique ségrégation pour certains indicateurs et mode flow
	if (currSect && (chemin.split('/')[3].split('_')[0] == "pop0" || chemin.split('/')[3].split('_')[0].slice(0, -1) == "res" ||
    chemin.split('/')[3].split('_')[0].slice(0, -1) == "act" || chemin.split('/')[3].split('_')[0].slice(0, -1) == "mode" ||
    chemin.split('/')[3].split('_')[1] == "flow")){

    $(".mainGr1-tooltip").html('');

		$("#altGr11").attr('class', 'style3');
		$("#altGr21").attr('class', 'style3');

    $("#titleGr1").html("") ;
    titleDuncan = "";
    titleMoran = "";

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

	}


  // Comportement du graphique empilé pour l'indicateur pop totale
	if (currSect && typeGraph == "stacked" && chemin.split('/')[3].split('_')[0] == "pop0"){

		typeGraph = "simple" ;

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong></br>" + "<span id = 'nameSect'>" + currSect[1] + "</span>");
		$("#titleGr2").html(titleGr2);

    $("#altGr12").attr('class', 'style3');
		$("#altGr22").attr('class', 'style1');

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
		"/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv",
		"hour",
		currSect[0],
		"") ;

	}


	if(!currSect && (chemin.split('/')[3].split('_')[0] == "pop0" || (chemin.split('/')[3]).split('_')[1] == "flow")){

		$("#altGr11").attr('class', 'style3');
		$("#altGr21").attr('class', 'style3');

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

	}

	if (!currSect) {

		// Initialisation
		$("#mainGr2").html("");
		$("#titleGr2").html("");

		$("#altGr12").attr('class', 'style3');
		$("#altGr22").attr('class', 'style3');

		$("#grSect").html("<p id='message'>"+ graph2Message + "</p>") ;

	}



	// Création de la slidebar
	createSlider() ;

    //tooltip-play
    $('#play').attr('aria-label', tooltipPlay);

	// Activation de la fonction d'animation

    d3.select("#play")
		.on("click",function(){
			if ( !isPlaying ){
			    isPlaying = true;
        d3.select("#play").attr("class", "pauseB");
        $('#play').attr('aria-label', tooltipPause);
        animate();
			} else {
			    isPlaying = false;
        d3.select("#play").attr("class", "playB");
        $('#play').attr('aria-label', tooltipPlay);
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
        if (version==="fr" || version==="es"){
          retour = nombre[i]+' '+retour ;
        }else{
				retour = nombre[i]+','+retour ;
        }
			else
				retour = nombre[i]+retour ;
			count++;
		}
		return retour;
	}

	// Fonction graphiques ségrégation
	function displayGraphSegreg(div, csvSegreg, varX, varY){

    // csvSegreg = chemin du csv à download depuis le graphique du bas
    //console.log(csvSegreg);
    $('#segreg-dowload').attr('href', '/zip-streamer.php?files=.' + csvSegreg + ',./' + dico_csv + ',./' + licence_pdf);

		// Definition du format du graphique
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 430 ,
			height = 178;
		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValueDomX).rangePoints([0, width], .5);
		var	xb = d3.scale.ordinal().domain(sliderValue).rangePoints([0, width], .5);
		var	y = d3.scale.linear().range([height, 1]);

		// Gammes de couleur
		var gamme ;
    var indicateur = (chemin.split('/')[3].split('_')[0]).slice(0, -1) ;
    if ( indicateur == 'res'){
      gamme = gammeRespop ;
    }
		if (indicateur == 'cs'){
			gamme = gammeCs ;
		}
		if (indicateur == 'cspmen'){
			gamme = gammeCs ;
		}
		if (indicateur == 'cleduc'){
			gamme = gammeSP ;
		}
		if (indicateur == 'educmen'){
			gamme = gammeSP ;
		}
		if (indicateur == 'act'){
			gamme = gammeAct ;
		}
		if (indicateur == 'resarea'){
      if(nomED == "BESANCON" || nomED == "CARCASSONNE"){
        gamme = gammeRes_2moda ;
      }else{
        gamme = gammeRes ;
      }
		}
		if (indicateur == 'age' || indicateur == 'ageb'){
			gamme = gammeAge ;
		}
		if (indicateur == 'occ'){
			gamme = gammeOcc ;
		}
		if (indicateur== 'sex'){
			gamme = gammeSex ;
		}
		if (indicateur == 'mode'){
      if(nomED=='BOGOTA'){
        gamme = gammeMode_b ;
      }else {
        gamme = gammeMode ;
      }
		}
		if (indicateur == 'dep'){
			gamme = gammeDep ;
		}
		if (indicateur == 'qpv'){
			gamme = gammeQpv ;
		}
		if (indicateur == 'rev'){
			if (nomED == "IDF"){
			  gamme = gammeRev_fr ;
			}else if(asED.includes(nomED)){
        gamme = gammeRev_as ;
      }else{
			  gamme = gammeRev_can ;
			}
		}
    if (indicateur == 'cso'){
      gamme = gammeCso ;
    }
    if (indicateur == 'inf'){
      gamme = gammeInf ;
    }
    if (indicateur == 'zona'){
      gamme = gammeZona ;
    }
    if (indicateur == 'sse'){
      gamme = gammeRev_fr ;
    }
    if (indicateur == 'strm'){
      gamme = gammeStrm ;
    }
    if (indicateur == 'log'){
      gamme = gammeLog ;
    }
    if (indicateur == 'strmfr'){
      gamme = gammeStrmfr ;
    }
    if (indicateur == 'strmqc'){
      gamme = gammeStrmqc ;
    }


		var color = d3.scale.ordinal().range(gamme);

		//Set the axis of x (les heures)
		var xAxis = d3.svg.axis().scale(xb)
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
			.attr("viewBox", "-25 -7 460 205") //-25 -12 400 210
			.classed("svg-content-responsive", true);

		// Get the data
		d3.csv(csvSegreg, function(error, data) {

			if (error) throw error;

			var tform ; // format of axis
			var domY ; // domain of y axis

			//Set the axis
			// Find the min and max of segreg indice to define domY
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

			if(csvSegreg.split("/")[4].split("_")[1] == "Duncan.csv" && typeGrIDF == "Duncan" &&
        (chemin.split('/')[3]).split('_')[1] != "flow"){
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
        if(valMin<0){
          domY = [valMin * 1.1, valMax * 1.1]
        } else {
          domY = [valMin * 0.8, valMax * 1.1] ;
        }
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
				.style("stroke-opacity" , function(d) {
					if (d.name == (chemin.split('/')[3]).split('_')[0]) {
						return 1 ;
					} else {
						return 0.45 ;
					}
				  })
				.attr("z-index", function(d){
					if (d.name == (chemin.split('/')[3]).split('_')[0]) {
						return 10 ;
					} else {
						return 5 ;
					}
          });

			lines.append("path")
				.attr("class", "line")
				.attr("d", function(d) {return valueline(d.values); });

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
			  .attr("height", height + 10)
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

	};

	// Fonction graphique simple
	function displayGraph(div, csvGr, varX, varY, nameY){
		// Definition du format
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 430,
			height = 178;

		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValueDomX).rangePoints([0, width], .5);
		var	xb = d3.scale.ordinal().domain(sliderValue).rangePoints([0, width], .5);
		var	y = d3.scale.linear().range([height, 1]);

		// Set the axis
		var xAxis = d3.svg.axis().scale(xb)
			.tickValues(Xgraph)
			.orient("bottom");

		// define the line
		var valueline = d3.svg.line()
			.x(function(d) { return x(d[varX]); })
			.y(function(d) { return y(d[varY]); });

		var gr = d3.select(div).append("svg")
      .attr('id', 'gr')
			.attr("width", width)
			.attr("height", height);

		// Responsive
		gr.classed("svg-container", true)
			.attr("viewBox", "-25 -7 460 205") //-25 -12 400 210
			.classed("svg-content-responsive", true);

		// add the tooltip area to the webpage
		var tooltip = d3.select(div).append("div")
			.attr("class", "tooltip")
			.style("opacity", 0);

		// Get the data
		d3.csv(csvGr, function(error, data) {
		  if (error) throw error;

      // on retire min et max => modifier script R : désormais calcul du min et max en js
      // data = data.filter(function(x) { return x.hour != "min" & x.hour != "max"}) ;

			var tform ; // format of axis
			var domY ; // domain of y axis

      //Set the axis
      // Find the min and max of the day to define domY
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

      if (chemin.split('/')[3].split('_')[0] != "pop0") {
        // domY en %
        if (csvGr.split("/")[5] == "dataSect.csv" && (chemin.split('/')[3]).split('_')[1] == "choro"){
          tform = '.0f' ;
          domY = [valMin * 0.8, 100];
        }
      } else {
        //modalité densité
        tform = '.2s' ;
        domY = [valMin * 0.8, valMax * 1.1];
      }

			if(csvGr.split("/")[5] == "dataSect.csv" && ((chemin.split('/')[3]).split('_')[1] == "prop" ||
        (chemin.split('/')[3]).split('_')[1] == "flow")){
        // domY en millier
				tform = '.2s' ;
				domY = [valMin * 0.8, valMax * 1.1];
			}

			update_fontsize() ;


		  // Tickformat must depend on values of y
			var yAxis = d3.svg.axis().scale(y)
				.orient("left")
				.tickFormat(d3.format(tform))
				.innerTickSize(-width)
				.outerTickSize(0);

			// Définir le domain de y
			y.domain(domY);

      if (chemin.split('/')[3] == "pop0_choro") {
        var myCol = col[7];
      } else {
        var myCol = col[4];
      }
			// Add the valueline path.
			gr.append("path")
			  .data([data])
			  .attr("class", "line")
			  .attr("d", valueline)
			  .style("stroke", myCol);

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
				.style("stroke", myCol)
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
			  .style("fill", myCol)
			  .style("stroke", myCol);

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
			  .attr("height", height + 20)
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
					|| (chemin.split('/')[3]).split('_')[1] == "flow" || (chemin.split('/')[3]) == "pop0_choro")){
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
    var indicateur = ((chemin.split('/')[3]).split('_')[0]).slice(0,-1),
        modeRepr = (chemin.split('/')[3]).split('_')[1];

		if(modeRepr == "choro" & indicateur == "cs"){
			$("#titleGr2").html(titleStacked[0]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "cs"){
			$("#titleGr2").html(titleStacked[1]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "cs"){
			$("#titleGr2").html(titleStacked[2]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "cspmen"){
			$("#titleGr2").html(titleStacked[3]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "cspmen"){
			$("#titleGr2").html(titleStacked[4]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "cspmen"){
			$("#titleGr2").html(titleStacked[5]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "cleduc"){
			$("#titleGr2").html(titleStacked[6]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "cleduc"){
			$("#titleGr2").html(titleStacked[7]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "cleduc"){
			$("#titleGr2").html(titleStacked[8]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "educmen"){
			$("#titleGr2").html(titleStacked[9]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "educmen"){
			$("#titleGr2").html(titleStacked[10]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "educmen"){
			$("#titleGr2").html(titleStacked[11]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "act"){
			$("#titleGr2").html(titleStacked[12]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "act"){
			$("#titleGr2").html(titleStacked[13]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "act"){
			$("#titleGr2").html(titleStacked[14]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "resarea"){
			$("#titleGr2").html(titleStacked[15]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "resarea"){
			$("#titleGr2").html(titleStacked[16]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "resarea"){
			$("#titleGr2").html(titleStacked[17]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "age"){
			$("#titleGr2").html(titleStacked[18]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "age"){
			$("#titleGr2").html(titleStacked[19]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "age"){
			$("#titleGr2").html(titleStacked[20]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "occ"){
			$("#titleGr2").html(titleStacked[21]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "occ"){
			$("#titleGr2").html(titleStacked[22]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "occ"){
			$("#titleGr2").html(titleStacked[23]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "sex"){
			$("#titleGr2").html(titleStacked[24]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "sex"){
			$("#titleGr2").html(titleStacked[25]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "sex"){
			$("#titleGr2").html(titleStacked[26]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "mode"){
			$("#titleGr2").html(titleStacked[27]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "mode"){
			$("#titleGr2").html(titleStacked[28]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "mode"){
			$("#titleGr2").html(titleStacked[29]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "rev"){
			$("#titleGr2").html(titleStacked[30]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "rev"){
			$("#titleGr2").html(titleStacked[31]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "rev"){
			$("#titleGr2").html(titleStacked[32]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "dep"){
			$("#titleGr2").html(titleStacked[33]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "dep"){
			$("#titleGr2").html(titleStacked[34]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "dep"){
			$("#titleGr2").html(titleStacked[35]+spanPopup[0]) ;
		}
		if(modeRepr == "choro" & indicateur == "qpv"){
			$("#titleGr2").html(titleStacked[36]+spanPopup[0]) ;
		}
		if(modeRepr == "prop" & indicateur == "qpv"){
			$("#titleGr2").html(titleStacked[37]+spanPopup[0]) ;
		}
		if(modeRepr == "flow" & indicateur == "qpv"){
			$("#titleGr2").html(titleStacked[38]+spanPopup[0]) ;
		}
    if(modeRepr == "choro" & indicateur == "res"){
      $("#titleGr2").html(titleStacked[39]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "res"){
      $("#titleGr2").html(titleStacked[40]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "ageb"){
      $("#titleGr2").html(titleStacked[41]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "ageb"){
      $("#titleGr2").html(titleStacked[42]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "ageb"){
      $("#titleGr2").html(titleStacked[43]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "cso"){
      $("#titleGr2").html(titleStacked[59]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "cso"){
      $("#titleGr2").html(titleStacked[60]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "cso"){
      $("#titleGr2").html(titleStacked[61]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "inf"){
      $("#titleGr2").html(titleStacked[45]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "inf"){
      $("#titleGr2").html(titleStacked[44]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "inf"){
      $("#titleGr2").html(titleStacked[46]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "zona"){
      $("#titleGr2").html(titleStacked[48]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "zona"){
      $("#titleGr2").html(titleStacked[47]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "zona"){
      $("#titleGr2").html(titleStacked[49]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "sse"){
      $("#titleGr2").html(titleStacked[51]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "sse"){
      $("#titleGr2").html(titleStacked[50]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "sse"){
      $("#titleGr2").html(titleStacked[52]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "strm" || indicateur == "strmfr" || indicateur == "strmqc"){
      $("#titleGr2").html(titleStacked[53]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "strm" || indicateur == "strmfr" || indicateur == "strmqc"){
      $("#titleGr2").html(titleStacked[54]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "strm" || indicateur == "strmfr" || indicateur == "strmqc"){
      $("#titleGr2").html(titleStacked[55]+spanPopup[0]) ;
    }
    if(modeRepr == "choro" & indicateur == "log"){
      $("#titleGr2").html(titleStacked[56]+spanPopup[0]) ;
    }
    if(modeRepr == "prop" & indicateur == "log"){
      $("#titleGr2").html(titleStacked[57]+spanPopup[0]) ;
    }
    if(modeRepr == "flow" & indicateur == "log"){
      $("#titleGr2").html(titleStacked[58]+spanPopup[0]) ;
    }



		// Definition du format
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 430 ,
			height = 178;

		var	x = d3.scale.ordinal();
		var	xb = d3.scale.ordinal();
		var	y = d3.scale.linear().range([height, 1]);

		// Gamme de couleur
		var gamme ;
    var indicateur = (chemin.split('/')[3].split('_')[0]).slice(0, -1) ;
    if ( indicateur == 'res'){
      gamme = gammeRespop ;
    }
		if (indicateur == 'cs'){
			gamme = gammeCs ;
		}
		if (indicateur == 'cspmen'){
			gamme = gammeCs ;
		}
		if (indicateur == 'cleduc'){
			gamme = gammeSP ;
		}
		if (indicateur == 'educmen'){
			gamme = gammeSP ;
		}
		if (indicateur == 'act'){
			gamme = gammeAct ;
		}
		if (indicateur == 'resarea'){
      if(nomED == "BESANCON" || nomED == "CARCASSONNE"){
        gamme = gammeRes_2moda ;
      }else{
        gamme = gammeRes ;
      }
		}
		if (indicateur == 'age' || indicateur == 'ageb'){
			gamme = gammeAge ;
		}
		if (indicateur == 'occ'){
			gamme = gammeOcc ;
		}
		if (indicateur == 'sex'){
			gamme = gammeSex ;
		}
		if (indicateur == 'mode'){
      if(nomED=='BOGOTA'){
        gamme = gammeMode_b ;
      }else {
        gamme = gammeMode ;
      }
    }
		if (indicateur == 'rev'){
			if (nomED == "IDF"){
			  gamme = gammeRev_fr ;
			}else if (asED.includes(nomED)){
        gamme = gammeRev_as ;
      }else {
			  gamme = gammeRev_can ;
			}
		}
		if (indicateur == 'dep'){
			gamme = gammeDep ;
		}
		if (indicateur == 'qpv'){
			gamme = gammeQpv ;
		}
    if (indicateur == 'cso'){
      gamme = gammeCso ;
    }
    if (indicateur == 'inf'){
      gamme = gammeInf ;
    }
    if (indicateur == 'zona'){
      gamme = gammeZona ;
    }
    if (indicateur == 'sse'){
      gamme = gammeRev_fr ;
    }
    if (indicateur == 'strm'){
      gamme = gammeStrm ;
    }
    if (indicateur == 'log'){
      gamme = gammeLog ;
    }
    if (indicateur == 'strmfr'){
      gamme = gammeStrmfr ;
    }
    if (indicateur == 'strmqc'){
      gamme = gammeStrmqc ;
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
			.attr("viewBox", "-25 -7 460 205") //-30 -12 400 210
			.classed("svg-content-responsive", true);


		d3.csv(csvStacked, function(error, data) {

			color.domain(d3.keys(data[0]).filter(function(key) { return key !== "hour" && key !== "district"; }));
			data.forEach(function(d) {
				d.hour = d.hour;
			});

			if (error) throw error;

			// Filter data by district code
			data = data.filter(function(row){
			return row["district"] == currSect[0] ;
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

			// Set domains for axes
			x.domain(sliderValueDomX).rangePoints([0, width], .5);
			xb.domain(sliderValue).rangePoints([0, width], .5);
			y.domain([0, valMax]);

			var xAxis = d3.svg.axis().scale(xb)
				.tickValues(Xgraph)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.tickFormat(d3.format(tform));



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
				.attr('class', 'dots');

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
			  .attr('height', height + 10)
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

          /*console.log('orY: ' + orY);
          var bibi = myObjectValues(d)[1][xI].y0;
          var bibi2 = myObjectValues(d)[1][xI].y;
          console.log('y0: ' + bibi + ' / y: ' + bibi2)*/

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



    if ((chemin.split('/')[3]).split('_')[1] == 'choro'){           // CARTE CHORO



      var ext_color_domain = colDom;

      if(chemin != '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){
        var color_domain = ext_color_domain.slice(1, ext_color_domain.length - 1);
        //Arguments pour la construction de la légende
        var legend_labels = [ext_color_domain[0] + textLeg[2] + ext_color_domain[1] + '% ',
                  ext_color_domain[1] + textLeg[2] + ext_color_domain[2] + '%',
                  ext_color_domain[2] + textLeg[2] + ext_color_domain[3] + '%',
                  ext_color_domain[3] + textLeg[2] + ext_color_domain[4] + '%',
                  ext_color_domain[4] + textLeg[2] + ext_color_domain[5] + '%'];
      }

      if(chemin == '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){
          var color_domain = ext_color_domain.slice(1, ext_color_domain.length + 1);
          //Arguments pour la construction de la légende
          var legend_labels = [ext_color_domain[0],
                    ext_color_domain[1],
                    ext_color_domain[2],
                    ext_color_domain[3],
                    ext_color_domain[4],
                    ext_color_domain[5],
                    ext_color_domain[6],
                    ext_color_domain[7],
                    ext_color_domain[8],
                    ext_color_domain[9]];
      }


			var color = d3.scale.threshold()
				.domain(color_domain)
				.range(col);

			var hour = Math.trunc(slider.value()),
				indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;


			// draw overlay
			var secteursOverlay = L.d3SvgOverlay(function(sel, proj) {

				d3.select('.filtre').remove() ;

				// secteurs
				var upd = sel.selectAll('path').data(choroJson);

				upd.enter()
				    .append('path')
				    .attr('id', 'secteurs')
				    .attr('d', proj.pathFromGeojson)
				    .style('fill', function(d) { return color(d.properties[indic]); })
				    .style('stroke', 'white')
				    .style('fill-opacity', '0.75');

				// Add selected sector if a sector was already clicked
				if(currSect){
					var chemins = choroJson.map(function (d){
						if(d.properties.Secteur_EM == currSect[0]){
							return proj.pathFromGeojson(d) ;
						}
					});

					d3.select('.filtre').remove() ;

					var clickedSect = chemins.filter(function(i){return i != null ;}) ;
				}

				var filtre = sel.append('path')
					.attr('class', 'filtre')
					.attr('d', clickedSect)
					.style({'fill': 'none' , 'stroke' : 'black',
					 'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
					.attr('stroke-width', 1.2 / proj.scale);


				var sectover = sel.selectAll('cell').data(choroJson);

					sectover.enter()
						.append('path')
					    .attr('class', 'sectover')
					    // .attr('class', 'cell')
					    .attr('d', proj.pathFromGeojson)
					    .attr('pointer-events','visible');

					// Mouseover and onclick functions
					sectover.on('mouseover', function(d){

						var info = d3.select('.info.leaflet-control').append('svg')
					        .attr('id', 'info')
					        .attr('height', '20px')
					        .attr('width', '450px');

            var v = (Math.round(d.properties[indic]*100)/100).toFixed(1) ;
            if(chemin == '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){
              v = v + "/km²]";
            } else {
              v = v + "%]";
            }

               info.append('text')
					        .text(d.properties.LIB + " - [" +  v)
					        .attr('x', '5px')
								  .attr('y', '15px')
								  .style('font-size', '0.6rem');

						})
						.on('mouseout', function(d){

							d3.selectAll('#info').remove();

						})
						.on('click', function(d){

							// selected secteur
							d3.select('.filtre').remove();

							var filtre = sel.append('path')
								.attr('class', 'filtre')
								.attr('d', d3.select(this).attr('d'))
								.style({'fill' : 'none' , 'stroke' : 'black',
							 			'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
								.attr('stroke-width', 1.2 / proj.scale);

							$('#titleGr2').html('');
							d3.select('#grSect').selectAll('svg').remove() ;

							$('#grSect').html('') ;

							currSect[1] = d.properties.LIB ;
							d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong></br>' + '<span id = "nameSect">' + currSect[1] + '</span>');

							// DISPLAY SECTOR CHARTS FROM SELECTION
							currSect[0] = d.properties.Secteur_EM ;
							if (currSect && typeGraph == 'simple'){

								// Initialisation
								$('#titleGr2').html(titleGr2);
								$('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

								// Build sector chart
								displayGraph('#grSect',
									'/data/' + nomED + '/'  + chemin.split('/')[3] + '/data/dataSect.csv',
									'hour',
									currSect[0],
									'') ;
							}

							if (currSect && typeGraph == 'stacked' && chemin != '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){

								// Build sector chart
								stackedBarChart(currSect) ;

							}

				});

				d3.selectAll('#secteurs')
					.attr('stroke-width', 0.8 / proj.scale);

				d3.selectAll('.sectover')
					.attr('stroke-width', 1 / proj.scale);

			},{
			zoomHide: true
			});

			// load data
			d3.json(chemin, function(json) {

				// remove old layers
				d3.selectAll('.leaflet-zoom-hide').remove();
				d3.selectAll('#legend, #info').remove();
        leafletMap.removeLayer(mrOverlay2);

				// data
				choroJson = json.features;

  			// secteursOverlay.addTo(leafletMap);
        mobiMap = L.layerGroup([secteursOverlay]);

        // régles d'affichage (superposition) des layers
        $("#mmap").click(function(){
          leafletMap.removeLayer(mrOverlay2);
          if (mmap.checked) {
            // mobiMap.addTo(leafletMap);
            if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
          } else {
            leafletMap.removeLayer(mobiMap);
          };
        });

        // appel des qpv sous la carte :
        $("#qp").click(function(){

          if (qp.checked) {
            // load data
            d3.json('/data/qpv.geojson', function(json) {
              qpvJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
              if($('#mmap').is(':checked')){
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
                mobiMap.addTo(leafletMap);
              } else {
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
              }
            });
            } else {
              leafletMap.removeLayer(qpvOverlay);
            };

        });
        // Couronnes centre/pérphérie (AL - zonage METAL)
        $("#mr").click(function(){

          if (mr.checked) {
            // load data
            d3.json('/data/metalrings.geojson', function(json) {
              mrJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
                mrJson.map(function(d){
                    d.latLng = [+d.properties.Y_W84,+d.properties.X_W84];
                    return d;
                  });
              if($('#mmap').is(':checked')){
                // leafletMap.removeLayer(mrOverlay2);
                leafletMap.removeLayer(mobiMap);
                leafletMap.removeLayer(mrOverlay);
                mobiMap.addTo(leafletMap);
                mrOverlay.addTo(leafletMap);
              } else {
                leafletMap.removeLayer(mobiMap);
                // mrOverlay2.addTo(leafletMap);
                mrOverlay.addTo(leafletMap);
              }
            });
            } else {
              // leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(mrOverlay);
            };

        });

        // rappel des règles pour maintien des layers au-dessus de la carte quand timeline en action:
        if($('#mmap').is(':checked')){
          leafletMap.removeLayer(mrOverlay2);
          if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
        }





  			// LEGEND
        var indicateur = (chemin.split('/')[3]).split('_')[0].slice(0, -1);

    		var ls_w = 20, ls_h = 20;
        var hour = Math.trunc(slider.value()) ;
        // stock current hour
        var dayTime ;
        var heure;
        if(slider.value() >= 4 & slider.value() <= 12){
          dayTime = slider.value() + "am" ;
          heure = hour;
        }
        if(slider.value() > 12 & slider.value() < 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = hour;
        }
        if(slider.value() == 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = (slider.value() - 24);
        }
        if(slider.value() > 24){
          dayTime = (slider.value() - 24) + "am" ;
          heure = (slider.value() - 24);
        }

        // construction légende %
  			if(chemin != '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){

          // calcul taux moyen
          // load csv stock stacked
          var csvStackedProp = "/data/" + nomED + "/stacked/" + indicateur + "_prop_stacked.csv" ;

          d3.csv(csvStackedProp, function(error, data) {
            if (error) throw error;

            // on filtre une heure
            data = data.filter(function(x) { return x.hour == dayTime}) ;

            // calcul pop total de l'ensemble des secteurs
            var popTot = d3.sum(data, function(d){
              var vals = d3.keys(d).map(function(key){ return key !== "hour"  && key !== "district" ? d[key] : 0 });
              // console.log(vals);
              return d3.sum(vals);
            });

            // calcul sous-pop total (le groupe observé) de l'ensemble des secteurs
            var colMod = d3.map(data, function(d, name){ return(d[nameY])}).keys();
            /*var colMod = data.map(function(d, name) {
                return {
                  name: nameY,
                  values: d[nameY]
                }
              });*/

            var popMod = d3.sum(colMod);

            // calcul du taux moyen
            var txMoy = Math.round(popMod*100/popTot);


            if(version==="es" && indicateur=='act'){
                var height = 10*ls_h;
            } else if(version==="es" && indicateur!='act'){
                var height = 9.3*ls_h;
            } else if(version==="fr" && (indicateur=='rev' || indicateur=='zona' || indicateur=='dep' || indicateur=='resarea' || indicateur=='qpv' || indicateur=='act')){
              var height = 9.7*ls_h;
            } else if(version==="en" && (indicateur=='res' || indicateur=='sex')){
                var height = 8.5*ls_h;
            } else {
              var height = 9*ls_h;
            }

    				var legendGroup = d3.select('.legend.leaflet-control').append('svg')
  				    .attr('id', 'legend')
  				    .attr('width', 7.5*ls_w)
  				    .attr('height', height)
              //.attr('height', 'auto')
  				    .attr('class', 'legendbloc');

  					var lgchoro = legendGroup.selectAll('g.lgchoro')
  						.data(ext_color_domain)
  						.enter().append('g')
  						.attr('class', 'lgchoro');

  					lgchoro.append('rect')
  						.attr('y', function(d, i){ return 4*ls_h - (i*ls_h) ; })
  						.attr('width', ls_w)
  						.attr('height', ls_h)
  						.style('fill', function(d, i) { return color(d); })
  						.style('opacity', 0.75);

  					lgchoro.append('text')
  						.attr('x', 1.5*ls_w)
  						.attr('y', function(d, i){ return 4*ls_h - (i*ls_h) + .7*ls_h; })
  						.text(function(d, i){ return legend_labels[i]; })
  						.style('font-size', '10px');


            // Ajout de la méthode de discrétisation en légende selon l'indicateur
            // var indicateur = (chemin.split('/')[3]).split('_')[0].slice(0, -1);
            var indic_quintile = ['age', 'cleduc', 'educmen', 'cs', 'cspmen', 'occ', 'mode', 'strm', 'strmfr', 'strmqc', 'log', 'cso', 'inf', 'sse'];
            var indic_manuelle = ['sex', 'resarea'];
            var indic_ampl = ['rev', 'qpv', 'res'];
            var indic_seuilNat = ['act', 'dep', 'zona'];

            if (indic_quintile.includes(indicateur)) {
              var text1 = discretMethod[0];
            } else if (indic_manuelle.includes(indicateur)){
              var text1 = discretMethod[1];
            } else if (indic_ampl.includes(indicateur)){
              var text1 = discretMethod[2];
            } else if (indic_seuilNat.includes(indicateur)){
              var text1 = discretMethod[3];
            }

            // Ajout info comparabilité
            var indic_compareAllED = ['sex', 'act', 'res'];
            var indic_compareAllEDModalite = ['resarea'];

            if (indic_compareAllED.includes(indicateur)) {
              var text2 = text1 + textLegChoro[2];
            } else if (indic_compareAllEDModalite.includes(indicateur)) {
              var text2 = text1 + textLegChoro[3];
            } else if (indicateur == 'dep') {
              var text2 = text1 + textLegChoro[4];
            } else if (indicateur == 'zona') {
              var text2 = text1 + textLegChoro[5];
            } else {
              var text2 = text1 + textLegChoro[0];
            }

            if (version==="fr"){
              var textTxMoy = "Moyenne à " + heure + "h : " + txMoy + "%";
            } else if (version==="es") {
              var textTxMoy = "Media a las " + heure + " horas: " + txMoy + "%";
            } else if (version==="en") {
              var textTxMoy = "Mean at " + dayTime + ": " + txMoy + "%";
            }


            // Notabene
            legendGroup.append('foreignObject')
              .attr('width', '100%')
              .attr('height', '5%')
              .attr('overflow', 'visible')
              .attr('y', 5.5*ls_h )
              .append('xhtml:div')
              .html('<div class="notabene2">' + textTxMoy + '</div>');


  					// Notabene
  					legendGroup.append('foreignObject')
  						.attr('width', '100%')
  						.attr('height', '5%')
              .attr('overflow', 'visible')
  						.attr('y', 6*ls_h )
  						.append('xhtml:div')
  						.html('<div class="notabene">' + text2 + '</div>');

            });
    			}


    			if(chemin == '/data/' + nomED + '/pop0_choro/geo/secteursData.geojson'){

            if(version==="es"){
              var height = 253;
            } else {
              var height = 245;
            }

    				var legendGroup = d3.select('.legend.leaflet-control').append('svg')
  				        .attr('id', 'legend')
  				        .attr('width', 6*ls_w)
  				        .attr('height', height)
  				        .attr('class', 'legendbloc');

    				var lgchoro = legendGroup.selectAll('g.lgchoro')
    						.data(ext_color_domain)
    						.enter().append('g')
    						.attr('class', 'lgchoro');

    				lgchoro.append('rect')
    						.attr('y', function(d, i){ return 7.5*ls_h - (i*ls_h) ; })
    						.attr('width', ls_w)
    						.attr('height', ls_h)
    						.style('fill', function(d, i) { return color(d); });
    						// .style('opacity', 1);

    					// lgchoro.append('text')
    					// 	.attr('x', 1.5*ls_w)
    					// 	.attr('y', function(d, i){ return 7*ls_h - (i*ls_h) + .7*ls_h; })
    					// 	.text(function(d, i){ return legend_labels[i]; })
    					// 	.style('font-size', '10px');

    				lgchoro.append('text')
    						.attr('x', 1.5*ls_w)
    						.attr('y', function(d, i){ return 7.5*ls_h - (i*ls_h) + 1.15*ls_h; })
    						.text(function(d, i){ return format(legend_labels[i]); })
    						.style('font-size', '9px');

    				// Notabene
    				legendGroup.append('foreignObject')
    						.attr('width', '100%')
    						.attr('height', '5%')
                .attr('overflow', 'visible')
    						.attr('y', 9.5*ls_h )
    						.append('xhtml:div')
    						.html('<div class="notabene">' + textLegChoro[1] + '</div>');
    				}

			});


		}



		if ((chemin.split('/')[3]).split('_')[1] == 'prop'){                // CARTE PROP


			// draw overlay
			var secteursOverlay = L.d3SvgOverlay(function(sel, proj) {

				d3.select('.filtre').remove();

				// secteurs
				var upd = sel.selectAll('path').data(secteurs);

				upd.enter()
				    .append('path')
				    .attr('id', 'secteurs')
				    .attr('class', 'secteurs')
				    .attr('d', proj.pathFromGeojson)
				    .attr('pointer-events','visible');

				d3.selectAll('#secteurs')
					.attr('stroke-width', .8 / proj.scale);

			},{
			zoomHide: true
			});

			// draw overlay
			var circlesOverlay = L.d3SvgOverlay(function(sel, proj) {

				// circles
				var hour = Math.trunc(slider.value()) ;
					indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;

				var upd = sel.selectAll('circle').data(propJson);

					upd.enter()
					   .append('circle')
					   .attr('id', 'circles')
					   .attr('class', 'bubble')
					   .style('fill', col[4]);

					upd.attr('cx', function(d) { return proj.latLngToLayerPoint(d.latLng).x;  })
						.attr('cy', function(d) { return proj.latLngToLayerPoint(d.latLng).y; })
						.attr('r', function(d) { return radius(d.properties[indic])/proj.scale; })
						.attr('stroke-width', .5/proj.scale);

				// sectover
				var sectover = sel.selectAll('cell').data(propJson);

				sectover.enter()
				    .append('path')
				    .attr('class', 'sectover')
				    // .attr('class', 'cell')
				    .attr('d', proj.pathFromGeojson)
				    .attr('pointer-events','visible');

        // Add selected sector if a sector was already clicked
        if(currSect){
          var chemins = secteurs.map(function (d){
            if(d.properties.Secteur_EM == currSect[0]){
              return proj.pathFromGeojson(d) ;
            }
          });
          d3.select('.filtre').remove() ;
          var clickedSect = chemins.filter(function(i){return i != null ;}) ;
        }

        var filtre = sel.append('path')
          .attr('class', 'filtre')
          .attr('d', clickedSect)
          .attr({'fill': 'none' ,  'stroke' : 'black',
              'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
          .attr('stroke-width', 1.5 / proj.scale)

				// Mouseover and onclick functions
				sectover.on('mouseover', function(d){

					var info = d3.select('.info.leaflet-control').append('svg')
				    .attr('id', 'info')
				    .attr('width', '450px')
				    .attr('height', '20px');

          var v = Math.round(d.properties[indic]);
              v = format(v);

				  info.append('text')
                  .text(d.properties.LIB + " - [" +  v + "]")
                  .attr('x', '5px')
                  .attr('y', '15px')
                  .style('font-size', '0.6rem');

					})
					.on('mouseout', function(d){

						d3.selectAll('#info').remove();

					})
					.on('click', function(d){

						// selected secteur
						var filtre = sel.append('path')
							.attr('class', 'filtre')
							.attr('d', d3.select(this).attr('d'))
							.attr({'fill' : 'none' , 'stroke' : 'black',
						 			'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
							.attr('stroke-width', 1.5 / proj.scale);

						d3.select('.filtre').remove();

            $('#grSect').html('') ;

						currSect[1] = d.properties.LIB ;
						d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong></br>' + '<span id = "nameSect">' + currSect[1] + '</span>');

						// DISPLAY SECTOR CHARTS FROM SELECTION
            currSect[0] = d.properties.Secteur_EM ;
						if (currSect && typeGraph == 'simple'){

							// Initialisation
							$('#titleGr2').html(titleGr2);
							$('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

							// Build sector chart
							displayGraph('#grSect',
								'/data/' + nomED + '/'  + chemin.split('/')[3] + '/data/dataSect.csv',
								'hour',
								currSect[0],
								'') ;
						}

						if (currSect && typeGraph == 'stacked' && chemin.split('/')[3].split('_')[0] != 'pop0'){

							// Build sector chart
							stackedBarChart(currSect) ;

						}



					});

				d3.selectAll('.sectover')
					.attr('stroke-width', 1 / proj.scale);

			},{
			zoomHide: true
			});


			d3.json(chemin, function(json) {

				// remove old layers
				d3.selectAll('.leaflet-zoom-hide').remove();
				d3.selectAll('#legend, #info').remove();
        // leafletMap.removeLayer(mobiMap);

				// data
				secteurs = json.features;
				propJson = json.features.map(function(d){
    				d.latLng = [+d.properties.CENTROID_Y,+d.properties.CENTROID_X];
    				return d;
  				});

        mobiMap = L.layerGroup([secteursOverlay, circlesOverlay]);

        // add layers to the map
        /*secteursOverlay.addTo(leafletMap);
        circlesOverlay.addTo(leafletMap);*/

        // régles d'affichage (superposition) des layers
        $("#mmap").click(function(){
          if (mmap.checked) {
            // mobiMap.addTo(leafletMap);
            if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
          } else {
            leafletMap.removeLayer(mobiMap);
          };
        });

        // appel des qpv sous la carte :
        $("#qp").click(function(){

          if (qp.checked) {
            // load data
            d3.json('/data/qpv.geojson', function(json) {
              qpvJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
              if($('#mmap').is(':checked')){
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
                mobiMap.addTo(leafletMap);
              } else {
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
              }
            });
            } else {
              leafletMap.removeLayer(qpvOverlay);
            };

        });
        // Couronnes centre/pérphérie (AL - zonage METAL)
        $("#mr").click(function(){

          if (mr.checked) {
            // load data
            d3.json('/data/metalrings.geojson', function(json) {
              mrJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
                mrJson.map(function(d){
                    d.latLng = [+d.properties.Y_W84,+d.properties.X_W84];
                    return d;
                  });
              if($('#mmap').is(':checked')){
                leafletMap.removeLayer(mobiMap);
                mrOverlay2.addTo(leafletMap);
                mobiMap.addTo(leafletMap);
                mrOverlay.addTo(leafletMap);
              } else {
                mrOverlay2.addTo(leafletMap);
                leafletMap.removeLayer(mobiMap);
                mrOverlay.addTo(leafletMap);
              }
            });
            } else {
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
            };

        });

        // rappel des règles pour maintien des layers au-dessus de la carte quand timeline en action:
        if($('#mmap').is(':checked')){
          if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
        }






				// LEGENDE
				var hour = Math.trunc(slider.value()) ;
					indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;

        // Stock current hour
        var dayTime ;
        var heure;
        if(slider.value() >= 4 & slider.value() <= 12){
          dayTime = slider.value() + "am" ;
          heure = hour;
        }
        if(slider.value() > 12 & slider.value() < 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = hour;
        }
        if(slider.value() == 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = (slider.value() - 24);
        }
        if(slider.value() > 24){
          dayTime = (slider.value() - 24) + "am" ;
          heure = (slider.value() - 24);
        }

				// Stockage des valeurs min, max et moyenne de l'indicateur pour la légende les cercles proportionnels
        var csv = "/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv" ;

        d3.csv(csv, function(error, data) {
          if (error) throw error;

          /*var valMin = Number(data[0][nomCol]) ;
          var valMax = Number(data[1][nomCol]) ;
          console.log(valMin);
          console.log(valMax);*/

          // on filtre une heure
          data = data.filter(function(x) { return x.hour == dayTime}) ;
          // on retire min et max
          data = data.filter(function(x) { return x.hour != "min" & x.hour != "max"}) ;
          // console.log(data);

          // calcul pop moyenne ensemble secteur-heure
          var valMoy = d3.mean(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : d[key] });
            vals = vals.map((i) => Number(i));
            // console.log(vals);
            return d3.mean(vals);
          });

          /*var valMed = d3.median(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : d[key] });
            // console.log(vals);
            return d3.median(vals);
          });
          console.log(valMed);*/

          var valMin = d3.min(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : d[key] });
            vals = vals.map((i) => Number(i));
            return d3.min(vals);
          });

          var valMax = d3.max(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : 0 });
            vals = vals.map((i) => Number(i));
            // console.log(d3.max(vals));
            return d3.max(vals);
          });
          // console.log(valMax);
          // console.log(valMin);


          // build legend
          if(version==="es"){
            var height = 2*radius(datasetProp[0]) + 51;
          } else {
            var height = 2*radius(datasetProp[0]) + 43;
          }
          var legendGroup = d3.select('.legend.leaflet-control').append('svg')
            .attr('id', 'legend')
            //.attr('width', 2*radius(datasetProp[0]) + 135)
            .attr('width', 202)
            .attr('height', height)
            .attr('class', 'legendbloc');


          var lgprop = legendGroup.selectAll('g.lgprop')
            .data(datasetProp)
            .enter().append('g')
            .attr('class', 'lgprop');

          lgprop.append('circle')
            .attr('cx', radius(datasetProp[0]) + 1)
            .attr('cy', function(d){ return 2*radius(datasetProp[0]) - radius(d) + 5; })
            .attr('r', function(d) { return radius(d); })
            .style('fill', 'none')
            .style('stroke', 'black');

          lgprop.append('text')
            .attr('x', 2.2*radius(datasetProp[0]))
            .attr('y', function(d){ return (2*radius(datasetProp[0]) - 2*radius(d)) + 10; })
            .text(function (d) { return format(Math.floor(d)); });

          // resume stat
          if (version==="fr"){
              var textH = "À " + heure + "h : ";
            } else if (version==="es") {
              var textH = "A las " + heure + "h: ";
            } else if (version==="en") {
              var textH = "At " + dayTime + ": ";
            }
          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]))
            .text(textH);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 13)
            .text('Max.: ' + format(Math.floor(valMax)))
            .style('fill', col[4]);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 26)
            .text(textLeg[0] + ' ' + format(Math.floor(valMoy)))
            .style('fill', col[4]);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 39)
            .text('Min.: ' + format(Math.floor(valMin)))
            .style('fill', col[4]);

          // Notabene
          legendGroup.append('foreignObject')
            .attr('width', '100%')
            .attr('height', '5%')
            .attr('overflow', 'visible')
            .attr('y', function(d){ return 2*radius(datasetProp[0]) + 20; })
            .append('xhtml:div')
            .html('<div class="notabene">' + textLegProp + '</div>');

        });

			});

		}


		if((chemin.split('/')[3]).split('_')[1] == 'flow'){                 // CARTE FLOW

			// draw overlay
			var secteursOverlay = L.d3SvgOverlay(function(sel, proj) {

				d3.select('.filtre').remove() ;

				// secteurs
				var upd = sel.selectAll('path').data(flowJson);

				upd.enter()
				    .append('path')
				    .attr('id', 'secteurs')
				    .attr('class', 'secteurs')
				    .attr('d', proj.pathFromGeojson)
				    .attr('pointer-events','none');

				d3.selectAll('#secteurs')
					.attr('stroke-width', .8 / proj.scale);

			},{
			zoomHide: true
			});


			// draw overlay
			var circlesOverlay = L.d3SvgOverlay(function(sel, proj) {

				var hour = Math.trunc(slider.value()) ;
					indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;

				var upd = sel.selectAll('circle').data(flowJson);

					upd.enter()
					   .append('circle')
					   .attr('id', 'circles')
					   .attr('class', 'bubble')
					   .style('fill', col[4]);

					upd.attr('cx', function(d) { return proj.latLngToLayerPoint(d.latLng).x;  })
						.attr('cy', function(d) { return proj.latLngToLayerPoint(d.latLng).y; })
						.attr('r', function(d) { return radius(d.properties[indic])/proj.scale; })
						.attr('stroke-width', .5 / proj.scale);

			},{
			zoomHide: true
			});

      var hour = Math.trunc(slider.value()) ;
          indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;

			var flowOverlay = L.d3SvgOverlay(function(sel, proj) {

				// build flows in mouseover function
				var mouseover = function(d){

					d3.csv('/data/' + nomED + '/'  + chemin.split('/')[3] + '/geo/flowData.csv', function(flux) {

						// Filter on hour
						var h = 'h' + Math.trunc(slider.value());
						flux = flux.filter(function(x) { return x.HOUR == h});

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
						});

							/*var hour = Math.trunc(slider.value()) ;
								indic = (chemin.split('/')[3]).split('_')[0] + '_h' + hour ;*/

							flowJson = flowJson
								.sort(function(a, b) { return b.properties[indic] - a.properties[indic]; }) ;
							sectct = flowJson.filter(function(sectEGT) {
								var loc = [+sectEGT.properties.CENTROID_X, +sectEGT.properties.CENTROID_Y];
								locationBySect[sectEGT.properties.Secteur_EM] = loc;
								positions.push(proj.pathFromGeojson(loc));
								return true;
							});


							var cells = sel.append('svg:g')
									.attr('id', 'cells');

							var flowmap = cells.selectAll('g')
									.data(flowJson)
									.enter().append('g');

							flowmap.append('path')
									.attr('class', 'sectover')
									.attr('d', proj.pathFromGeojson)
									.attr('pointer-events','visible');

							flowmap.on('mouseover', function(d){

								var info = d3.select('.info.leaflet-control').append('svg')
								  .attr('id', 'info')
								  .attr('width', '450px')
								  .attr('height', '20px');

                var v = Math.round(d.properties[indic]);
                    v = format(v);

							  info.append('text')
                  .text(d.properties.LIB + " - [" +  v + "]")
                  .attr('x', '5px')
                  .attr('y', '15px')
                  .style('font-size', '0.6rem');

									})
									.on('mouseout', function(d){
										d3.selectAll('#info').remove();
									})
									.on('click', function(d){

										d3.select('.filtre').remove() ;

										// selected secteur
										var filtre = sel.append('path')
											.attr('class', 'filtre')
											.attr('d', proj.pathFromGeojson(d))
											.attr({'fill' : 'none' , 'stroke' : 'black',
										 			'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
											.attr('stroke-width', 1.5/proj.scale);

										// display charts
										currSect[0] = d.properties.Secteur_EM ;

										$('#grSect').html('') ;

										currSect[1] = d.properties.LIB ;
										d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong></br>'  + '<span id = "nameSect">' + currSect[1] + '</span>');

										// DISPLAY SECTOR CHARTS FROM SELECTION
										if (currSect && typeGraph == 'simple'){

											// Initialisation
											$('#titleGr2').html(titleGr2);
											$('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

											// Build sector chart
											displayGraph('#grSect',
												'/data/' + nomED + '/'  + chemin.split('/')[3] + '/data/dataSect.csv',
												'hour',
												currSect[0],
												'') ;

										}

										if (currSect && typeGraph == 'stacked' && chemin.split('/')[3].split('_')[0] != 'pop0'){

											// Build sector chart
											stackedBarChart(currSect) ;

										}

									});

							flowmap.selectAll('path.arc')
								.data(function(d) { return linksByOrigin[d.properties.Secteur_EM] || []; })
							  	.enter().append('path')
								.attr('class', 'arc')
								.attr('d', function(d) { return proj.pathFromGeojson(arc(d)); })
								.attr('stroke-width', function(d){
									// var poids = d.poids ;
									if(d.poids < sLink[1]){
										return .3 / proj.scale;
									}
									if(d.poids >= sLink[1] && d.poids < sLink[2]){
										return 1.5 / proj.scale;
									}
									if(d.poids >= sLink[2]){
										return 3.5 / proj.scale ;
									}
								}) ;

						d3.selectAll('.sectover')
							.attr('stroke-width', 1 / proj.scale);

					});
				};

				var mouseout = function(d) {
					// Remove links
					// d3.selectAll('#cells').remove();
					// d3.selectAll('path.arc').remove();
					d3.selectAll('#info').remove();
				};

				// Update flows
				var upd = sel.selectAll('cell').data(flowJson);

					upd.enter()
						.append('path')
						.attr('class', 'flow')
						.attr('d', proj.pathFromGeojson)
						.style('fill', 'none');

        // Add selected sector if a sector was already clicked
        if(currSect){
          var chemins = flowJson.map(function (d){
            if(d.properties.Secteur_EM == currSect[0]){
              return proj.pathFromGeojson(d) ;
            }
          });

          d3.select('.filtre').remove() ;

          var clickedSect = chemins.filter(function(i){return i != null ;}) ;
        }

        var filtre = sel.append('path')
          .attr('class', 'filtre')
          .attr('d', clickedSect)
          .attr({'fill': 'none' , 'stroke' : 'black',
           'stroke-linejoin' : 'round', 'stroke-linecap': 'round', 'cursor' :'pointer'})
          .attr('stroke-width', 1.5/proj.scale);

			  	upd.attr('pointer-events','visible')
						.on('mouseover', mouseover)
						.on('mouseout', mouseout);

			},{
			zoomHide: true
			});




			// load data
			d3.json(chemin, function(json) {

				// remove old layers
				d3.selectAll('.leaflet-zoom-hide').remove();
				d3.selectAll('#legend').remove();

				// data use by overlay
				flowJson = json.features.map(function(d){
    				d.latLng = [+d.properties.CENTROID_Y,+d.properties.CENTROID_X];
    				return d;
  				});

				// add data to the map - old
				/*secteursOverlay.addTo(leafletMap);
				circlesOverlay.addTo(leafletMap);
				flowOverlay.addTo(leafletMap);*/

        mobiMap = L.layerGroup([secteursOverlay, circlesOverlay, flowOverlay]);

        // régles d'affichage (superposition) des layers
        $("#mmap").click(function(){
          if (mmap.checked) {
            // mobiMap.addTo(leafletMap);
            if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
          } else {
            leafletMap.removeLayer(mobiMap);
          };
        });

        // appel des qpv sous la carte :
        $("#qp").click(function(){

          if (qp.checked) {
            // load data
            d3.json('/data/qpv.geojson', function(json) {
              qpvJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
              if($('#mmap').is(':checked')){
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
                mobiMap.addTo(leafletMap);
              } else {
                leafletMap.removeLayer(mobiMap);
                qpvOverlay.addTo(leafletMap);
              }
            });
            } else {
              leafletMap.removeLayer(qpvOverlay);
            };

        });
        // Couronnes centre/pérphérie (AL - zonage METAL)
        $("#mr").click(function(){

          if (mr.checked) {
            // load data
            d3.json('/data/metalrings.geojson', function(json) {
              mrJson = json.features.filter(function(d) {
                return d.properties.ENQUETE == nomED;
              });
                mrJson.map(function(d){
                    d.latLng = [+d.properties.Y_W84,+d.properties.X_W84];
                    return d;
                  });
              if($('#mmap').is(':checked')){
                leafletMap.removeLayer(mobiMap);
                mrOverlay2.addTo(leafletMap);
                mobiMap.addTo(leafletMap);
                mrOverlay.addTo(leafletMap);
              } else {
                leafletMap.removeLayer(mobiMap);
                mrOverlay2.addTo(leafletMap);
                mrOverlay.addTo(leafletMap);
              }
            });
            } else {
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
            };

        });

        // rappel des règles pour maintien des layers au-dessus de la carte quand timeline en action:
        if($('#mmap').is(':checked')){
          if($('#muni').is(':checked') && !$('#tm').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
            } else if($('#tm').is(':checked') && !$('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && !$('#tm').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#muni').is(':checked') && !$('#mr').is(':checked')){
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#tm').is(':checked') && $('#mr').is(':checked') && !$('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
            } else if ($('#muni').is(':checked') && $('#mr').is(':checked') && !$('#tm').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else if ($('#mr').is(':checked') && $('#tm').is(':checked') && $('#muni').is(':checked')){
              leafletMap.removeLayer(mrOverlay);
              leafletMap.removeLayer(mrOverlay2);
              leafletMap.removeLayer(muniOverlay);
              leafletMap.removeLayer(tmOverlay);
              leafletMap.removeLayer(mobiMap);
              mrOverlay2.addTo(leafletMap);
              mobiMap.addTo(leafletMap);
              muniOverlay.addTo(leafletMap);
              tmOverlay.addTo(leafletMap);
              mrOverlay.addTo(leafletMap);
            } else {
              mobiMap.addTo(leafletMap);
            }
        }




				// LEGENDE
        // Stock current hour
        var dayTime ;
        var heure;
        if(slider.value() >= 4 & slider.value() <= 12){
          dayTime = slider.value() + "am" ;
          heure = hour;
        }
        if(slider.value() > 12 & slider.value() < 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = hour;
        }
        if(slider.value() == 24){
          dayTime = (slider.value() - 12) + "pm" ;
          heure = (slider.value() - 24);
        }
        if(slider.value() > 24){
          dayTime = (slider.value() - 24) + "am" ;
          heure = (slider.value() - 24);
        }

				// Stockage des valeurs min, max et moyenne de l'indicateur pour la légende des cercles proportionnels
        var csv = "/data/" + nomED + "/" + chemin.split('/')[3] + "/data/dataSect.csv" ;

        d3.csv(csv, function(error, data) {
          if (error) throw error;

          // on filtre une heure
          data = data.filter(function(x) { return x.hour == dayTime}) ;
          // on retire min et max
          data = data.filter(function(x) { return x.hour != "min" & x.hour != "max"}) ;
          // console.log(data);

          // calcul pop moyenne ensemble secteur-heure
          var valMoy = d3.mean(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : d[key] });
            vals = vals.map((i) => Number(i));
            // console.log(vals);
            return d3.mean(vals);
          });

          var valMin = d3.min(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : d[key] });
            vals = vals.map((i) => Number(i));
            return d3.min(vals);
          });

          var valMax = d3.max(data, function(d){
            var vals = d3.keys(d).map(function(key){ return key !== "hour" ? d[key] : 0 });
            vals = vals.map((i) => Number(i));
            return d3.max(vals);
          });

          if (screen.width>1024) {

            // build legend
            var legendGroup = d3.select('.legend.leaflet-control').append('svg')
              .attr('id', 'legend')
              //.attr('width', 2*radius(datasetFlow[0]) + 160)
              .attr('width', 222)
              .attr('height', 2*radius(datasetFlow[0]) + 125)
              //.attr('height', 'auto')
              .attr('class', 'legendbloc');

            // circles
            var lgflow = legendGroup.selectAll('g.lgflow')
              .data(datasetFlow)
              .enter().append('g')
              .attr('class', 'lgflow');

            lgflow.append('circle')
              .attr('cx', radius(datasetFlow[0]) + 1)
              .attr('cy', function(d){ return 2*radius(datasetFlow[0]) - radius(d) + 5; })
              .attr('r', function(d) { return radius(d); })
              .style('fill', 'none')
              .style('stroke', 'black');

            lgflow.append('text')
              .attr('x', 2.2*radius(datasetFlow[0]))
              .attr('y', function(d){ return (2*radius(datasetFlow[0]) - 2*radius(d)) + 10; })
              .text(function (d) { return format(Math.floor(d)); });

            // resume stat
            if (version==="fr"){
                var textH = "À " + heure + "h : ";
              } else if (version==="es") {
                var textH = "A las " + heure + "h: ";
              } else if (version==="en") {
                var textH = "At " + dayTime + ": ";
              }
            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]))
              .text(textH);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) +13)
              .text('Max.: ' + format(Math.floor(valMax)))
              .style('fill', col[4]);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) + 26)
              .text(textLeg[0] + ' ' + format(Math.floor(valMoy)))
              .style('fill', col[4]);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) + 39)
              .text('Min.: ' + format(Math.floor(valMin)))
              .style('fill', col[4]);


            // Notabene circle
            legendGroup.append('foreignObject')
              .attr('width', '100%')
              .attr('height', '5%')
              .attr('overflow', 'visible')
              .attr('y', function(d){ return 2*radius(datasetFlow[0]) + 15; })
              .append('xhtml:div')
              .html('<div class="notabene">' + textLegFlow[0] + '</div>');

            //Links
            datasetLiens = [
            {y : 2*radius(datasetFlow[0]) + 60, strk : .3, txt : sLink[0] + '-' + format(sLink[1])},
            {y : 2*radius(datasetFlow[0]) + 70, strk : 1.5, txt : format(sLink[1]) + '-' + format(sLink[2])},
            {y : 2*radius(datasetFlow[0]) + 80, strk : 3.5, txt : format(sLink[2]) + '-' + format(sLink[3])}
            ] ;

            var liens = lgflow.selectAll('line')
              .data(datasetLiens)
              .enter()
              .append('line') ;

            var liensAtt = liens
              .attr('x1', 1)
              .attr('y1', function(d){return d.y })
              .attr('x2', 61)
              .attr('y2', function(d){return d.y })
              .attr('stroke-width', function(d){ return d.strk })
              .attr('stroke', 'black') ;

            var text2 = lgflow.selectAll('.textL')
              .attr('class', 'textL')
              .data(datasetLiens)
              .enter()
              .append('text') ;

            var textLabels2 = text2
              .attr('x', 75)
              .attr('y', function(d){return d.y })
              .text(function(d){return d.txt });

            // Notabene link
            legendGroup.append('foreignObject')
              .attr('width', '100%')
              .attr('height', '5%')
              .attr('overflow', 'visible')
              .attr('y', 2*radius(datasetFlow[0]) + 95)
              .append('xhtml:div')
              .html('<div class="notabene">' + textLegFlow[1] + '</div>');

          } else {

            // build legend
            var legendGroup = d3.select('.legend.leaflet-control').append('svg')
              .attr('id', 'legend')
              .attr('width', 2*radius(datasetFlow[0]) + 148)
              .attr('height', 2*radius(datasetFlow[0]) + 40)
              .attr('class', 'legendbloc');

            // circles
            var lgflow = legendGroup.selectAll('g.lgflow')
              .data(datasetFlow)
              .enter().append('g')
              .attr('class', 'lgflow');

            lgflow.append('circle')
              .attr('cx', radius(datasetFlow[0]) + 1)
              .attr('cy', function(d){ return 2*radius(datasetFlow[0]) - radius(d) + 5; })
              .attr('r', function(d) { return radius(d); })
              .style('fill', 'none')
              .style('stroke', 'black');

            lgflow.append('text')
              .attr('x', 2.2*radius(datasetFlow[0]))
              .attr('y', function(d){ return (2*radius(datasetFlow[0]) - 2*radius(d)) + 10; })
              .text(function (d) { return format(Math.floor(d)); });

            // resume stat
            if (version==="fr"){
                var textH = "À " + heure + "h : ";
              } else if (version==="es") {
                var textH = "A las " + heure + "h: ";
              } else if (version==="en") {
                var textH = "At " + dayTime + ": ";
              }
            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]))
              .text(textH);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) +13)
              .text('Max.: ' + format(Math.floor(valMax)))
              .style('fill', col[4]);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) + 26)
              .text(textLeg[0] + ' ' + format(Math.floor(valMoy)))
              .style('fill', col[4]);

            lgflow.append('text')
              .attr('x', 4.5*radius(datasetFlow[0]))
              .attr('y', radius(datasetFlow[2]) + 39)
              .text('Min.: ' + format(Math.floor(valMin)))
              .style('fill', col[4]);

            // Notabene circle
            legendGroup.append('foreignObject')
              .attr('width', '100%')
              .attr('height', '23%')
              .attr('y', function(d){ return 2*radius(datasetFlow[0]) + 15; })
              .append('xhtml:div')
              .html('<div class="notabene">' + textLegFlow[0] + '</div>');

          };
        });
			});
		}

	};



	function createSlider() {

		d3.selectAll("#slider").html("") ;
		d3.selectAll("#slider-mobile").html("") ;
		d3.selectAll("#timeAxis").html("") ;
    d3.selectAll("#timeAxis-mobile").html("") ;

		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValue)
			.rangePoints([0, 957], .5);

		var xb = d3.scale.linear().domain([4, 27]).range([4, 426]) ;

		//Set the axis
		xAxis = d3.svg.axis().scale(x)
			.tickValues(sliderValue)
			.innerTickSize(5)
			.orient("bottom");

		var val = slider ? slider.value() : 14;

		slider = d3.slider()
			.min(4).max(27).step(1)
			// .scale(d3.scale.linear().domain([4, 27]))
			// .axis(d3.svg.axis().orient("top").ticks(24))
			.on("slide",function(event,value){

			  	if ( isPlaying ){
					clearInterval(interval);
			  	}

			  	currentFrame = value;

          displayMap(chemin) ;

			  	d3.select('#handle-one').selectAll('svg').remove();
			  	var hour = d3.select('#handle-one').append('svg')
			  		.attr('width', 30)
			  		.attr('height', 30)
					 .attr('overflow', 'visible');

				hour.append('line')
					.attr('x1', 11)
					.attr('x2', 11)
					.attr('y1', 0)
					.attr('y2', -8)
					.style('stroke', '#fea11c')
					.style('stroke-width', 2);

				hour.append('text')
        			.attr('x', -8)
        			.attr('y', -12)
        			.attr('font-weight', '900')
              .attr('font-size', '18px')
        			.text(xAxis.tickValues()[(slider.value()-4)]);

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
		var timeAxis = d3.selectAll("#timeAxis")
			.append("svg")
			.attr("width", 957)
			.attr("height", 15)
			.classed("svg-container", true)
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr("viewBox", "0 0 958 1")
			.classed("svg-content-responsive", true)
			.call(xAxis);

		d3.selectAll("#slider-mobile")
			.append("div")
			.call(slider);

		d3.selectAll("#slider")
			.append("div")
			.call(slider);


		//Display current hour above slider
		var hour = d3.selectAll('#handle-one').append('svg')
				// .attr('id', 'hour')
				.attr('width', 30)
			  	.attr('height', 30)
				.attr('overflow', 'visible');

			hour.append('line')
				.attr('x1', 11)
				.attr('x2', 11)
				.attr('y1', 0)
				.attr('y2', -8)
				.style('stroke', '#fea11c')
				.style('stroke-width', 2);

			hour.append('text')
        		.attr('x', -8)
        		.attr('y', -12)
        		.attr('font-weight', 'bold')
        		.text(xAxis.tickValues()[(slider.value()-4)]);

	}



	function animate() {


		interval = setInterval(function(){

      /*if (currentFrame == 9) {
        clearInterval( interval );
        return;
      }*/

			currentFrame++ ;

			if (currentFrame == 28) currentFrame = 4 ;

			slider.value(currentFrame) ;

      displayMap(chemin) ;

			// Add shadow line with current hour
			var xb = d3.scale.linear().domain([4, 27]).range([4, 426]) ;

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
			d3.select("#play").classed("pauseB",false).classed("playB",true);
			clearInterval( interval );
			return;

			}

			//Display current hour above slider
			d3.select('#handle-one').selectAll('svg').remove();
			var hour = d3.select('#handle-one').append('svg')
				.attr('width', 30)
			  	.attr('height', 30)
				.attr('overflow', 'visible');

			hour.append('line')
				.attr('x1', 11)
				.attr('x2', 11)
				.attr('y1', 0)
				.attr('y2', -8)
				.style('stroke', '#fea11c')
				.style('stroke-width', 2);


			hour.append('text')
        		.attr('x', -8)
        		.attr('y', -12)
        		.attr('font-weight', 'bold')
        		.text(xAxis.tickValues()[(slider.value()-4)]);


		}, 1400) ;

    setTimeout(function( ) {
      clearInterval( interval );
      d3.select("#play").attr("class", "playB");
      $('#play').attr('aria-label', tooltipPlay);
    }, 35000); //stop after 25h

	}

}



