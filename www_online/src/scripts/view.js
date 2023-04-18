function animateTimeline(state){
    if( state == "off"){
        console.log('animate off');
        isPlaying = false ;
        d3.select("#play").classed("pauseB",false).classed("playB",true);
        d3.select("#play-mobile").classed("pauseB",false).classed("playB",true);
        clearInterval(interval);
    } else {
        console.log('animate on TODO');
    }

}



//Alignement des boutons ICI
$("#geoviz-menu .nb").eq(1).css("margin-right", "3em") ;
$('#geoviz-menu .nb').eq(2).css('margin-right', '3em');
if(city == 'idf') {
  $('#geoviz-menu .nb').eq(54).css('margin-right', '3em');
} else if (ctry == 'CA'){
  $('#geoviz-menu .nb').eq(26).css('margin-right', '3em');
} else if (city == 'carcassonne' || city == 'besancon'){
  $('#geoviz-menu .nb').eq(44).css('margin-right', '3em');
} else if (city == 'annecy'){
  $('#geoviz-menu .nb').eq(43).css('margin-right', '3em');
} else if (city == 'bogota'){
  $('#geoviz-menu .nb').eq(54).css('margin-right', '3em');
} else if (city == 'santiago'){
  $('#geoviz-menu .nb').eq(48).css('margin-right', '3em');
} else if (city == 'sao-paulo'){
  $('#geoviz-menu .nb').eq(50).css('margin-right', '3em');
} else {
  $('#geoviz-menu .nb').eq(45).css('margin-right', '3em');
}


var alDisplay = translation['alDisplay'][version];
var alClose = translation['alClose'][version];
// Les graphiques disparaissent au clic sur la X
$(".menu-graphiques").click(function() {
  if($("#graphiques").css("display")==="none") {
    $(".picto-graph").attr("src","/dist/assets/close-graphiques.png");
    $("#picto-graph-container").attr("aria-label", alClose);
    $("#graphiques").css("display","flex");
    $("#geoviz-map-title").css("width","50%");
    $("#geoviz-charts").css("width","32%");
    $(window).on("resize", function() {
      $("#map-container").css("width","100%");
      leafletMap.invalidateSize();
    }).trigger("resize");
  } else {
    $(".picto-graph").attr("src","/dist/assets/arrow-graphiques.png");
    $("#picto-graph-container").attr("aria-label", alDisplay);
    $("#geoviz-charts").css("width","10%");
    $("#graphiques").css("display","none");
    $("#geoviz-map-title").css("width","72%");
    $(window).on("resize", function() {
      $("#map-container").css("width","114%");
      leafletMap.invalidateSize();
    }).trigger("resize");
  }
})
