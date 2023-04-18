/*************************** VARIABLES GLOBALES ***************************/

// Récupérartion des variables propres à chaque géoviz stockées dans city.php
var zoneGeo = paramCity[city]['zoneGeo'];
var ctry = paramCity[city]['ctry'];
var vcName = paramCity[city]['shortName'];


// langage
var currentPathname = window.location.pathname;
var version = currentPathname.slice(1,3);


// GLOBAL VAR - leaflet init
var leafletMap, leafletLink, attrib, copy,
    tilesOSM, tilesCARTO, satellTiles, tilesGP, tilesEsri,
    mobiMap, qpvJson, qpvOverlay,
    muniJson, muniOverlay,
    tmJson, tmOverlay,
    mrJson, mrJson2, mrOverlay, mrOverlay2,
    source;


// GLOBAL VAR - geoviz
var gr = d3.select('#graphiques').append('g');
var countBySect = {};
var isPlaying = false ;
var slider ;
var interval ;
var currentFrame = 14 ;
var xAxis ;
var typeGrIDF = 'Duncan';
var typeGraph = 'stacked';
var currSect = [];
var radius = d3.scale.sqrt()
  .domain([0, 1e6])
  .range(radiusRange);
var indic;
var idu;
var col;
var modrep;
var chemin;

// variables dico et licence pour zip 
var licence_pdf = "data/odbl/odbl_" + version + ".pdf";

var dico = "data/readme.md",
    sec_gjson = "data/" + city + "/geo/secteurs.geojson";



// variables des layers
var bgLayersControlVector = {'bm0':0,'bm1':0,'bm2':0,'bm3':0};  
var layersControlVector = {'mmap':0,'muni':0,'mr':0,'tm':0, 'qp':0};

// layers
var bgLayersControlMatrix = {
    '0000': [],
    '1000': [],
    '0100': ['tilesCARTO'],
    '0010': ['tilesOSM'],
    '0001': ['satellTiles'],
}

var layersControlMatrix = {

  'choro':{
    '00000': [],
    '10000': ['mobiMap'],

    // Amérique latine
    '01000': ['muniOverlay'],
    '00100': ['mrOverlay2', 'mrOverlay'],
    '00010': ['tmOverlay'],
    '11000': ['mobiMap', 'muniOverlay'],
    '10100': ['mobiMap', 'mrOverlay'],
    '10010': ['mobiMap', 'tmOverlay'],
    '11100': ['mobiMap', 'muniOverlay', 'mrOverlay'],
    '10110': ['mobiMap', 'tmOverlay', 'mrOverlay'],
    '11010': ['mobiMap', 'muniOverlay', 'tmOverlay'],
    '01100': ['mrOverlay2', 'muniOverlay', 'mrOverlay'],
    '01010': ['muniOverlay', 'tmOverlay'],
    '00110': ['mrOverlay2', 'tmOverlay', 'mrOverlay'],
    '01110': ['mrOverlay2', 'muniOverlay', 'tmOverlay', 'mrOverlay'],
    '11110': ['mobiMap', 'muniOverlay', 'tmOverlay', 'mrOverlay'],

    // France
    '10001': ['qpvOverlay','mobiMap'],
    '00001': ['qpvOverlay']
  },

  'prop':{
    '00000': [],
    '10000': ['mobiMap'],

    // Amérique latine
    '01000': ['muniOverlay'],
    '00100': ['mrOverlay2', 'mrOverlay'],
    '00010': ['tmOverlay'],
    '11000': ['mobiMap', 'muniOverlay'],
    '10100': ['mrOverlay2', 'mobiMap', 'mrOverlay'],
    '10010': ['mobiMap', 'tmOverlay'],
    '11100': ['mrOverlay2', 'mobiMap', 'muniOverlay', 'mrOverlay'],
    '10110': ['mrOverlay2', 'mobiMap', 'tmOverlay', 'mrOverlay'],
    '11010': ['mobiMap', 'muniOverlay', 'tmOverlay'],
    '01100': ['mrOverlay2', 'muniOverlay', 'mrOverlay'],
    '01010': ['muniOverlay', 'tmOverlay'],
    '00110': ['mrOverlay2', 'tmOverlay', 'mrOverlay'],
    '01110': ['mrOverlay2', 'muniOverlay', 'tmOverlay', 'mrOverlay'],
    '11110': ['mrOverlay2', 'mobiMap', 'muniOverlay', 'tmOverlay', 'mrOverlay'],

    // France
    '10001': ['qpvOverlay','mobiMap'],
    '00001': ['qpvOverlay']
  },

  'flow':{
    '00000': [],
    '10000': ['mobiMap'],

    // Amérique latine
    '01000': ['muniOverlay'],
    '00100': ['mrOverlay2', 'mrOverlay'],
    '00010': ['tmOverlay'],
    '11000': ['mobiMap', 'muniOverlay'],
    '10100': ['mrOverlay2', 'mobiMap', 'mrOverlay'],
    '10010': ['mobiMap', 'tmOverlay'],
    '11100': ['mrOverlay2', 'mobiMap', 'muniOverlay', 'mrOverlay'],
    '10110': ['mrOverlay2', 'mobiMap', 'tmOverlay', 'mrOverlay'],
    '11010': ['mobiMap', 'muniOverlay', 'tmOverlay'],
    '01100': ['mrOverlay2', 'muniOverlay', 'mrOverlay'],
    '01010': ['muniOverlay', 'tmOverlay'],
    '00110': ['mrOverlay2', 'tmOverlay', 'mrOverlay'],
    '01110': ['mrOverlay2', 'muniOverlay', 'tmOverlay', 'mrOverlay'],
    '11110': ['mrOverlay2', 'mobiMap', 'muniOverlay', 'tmOverlay', 'mrOverlay'],

    // France
    '10001': ['qpvOverlay','mobiMap'],
    '00001': ['qpvOverlay']
  }

}

// paramètres menu geoviz par défaut
// par défaut sex2_prop() car clé commune à toutes les enquêtes
var m11 = '2';
var m22 = '2';
var m33 = '1';
var m44 = 'nb'; 

/*************************** FIN VARIABLES GLOBALES ***************************/



// utilisée dans fonction graphique segreg - à creuser
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


// city en MAJ pour appel des pdf odbl //ICI
function capitalizeCharacter(x) {
  if(x.includes("-")){
    var str = city.split("-");
    var word1 = str[0].toUpperCase();
    var word2 = str[1].toUpperCase();
    return newStr = word1 + " " + word2;
  }else{
    return x.toUpperCase();
  }
}



//svg-rayon-menu-geoviz
function svgPath(color){
  return "<div><svg class='svg-path' style='vertical-align: middle; height: 1.5em;' width='100%' height='100%' viewBox='0 0 567 567' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;'><path d='M261.6,262L261.6,92.8C261.6,89.28 264.48,86.4 268,86.4C271.52,86.4 274.4,89.28 274.4,92.8L274.4,261.75L400.26,135.89C402.75,133.4 406.83,133.4 409.32,135.88C411.81,138.37 411.81,142.44 409.32,144.93L283.45,270.8L452.4,270.8C455.92,270.8 458.8,273.68 458.8,277.2C458.8,280.72 455.92,283.6 452.4,283.6L283.2,283.6L402.91,403.31C405.4,405.8 405.4,409.87 402.91,412.36C400.42,414.85 396.35,414.85 393.86,412.36L274.4,292.9L274.4,461.6C274.4,465.12 271.52,468 268,468C264.48,468 261.6,465.12 261.6,461.6L261.6,292.65L148.53,405.72C146.04,408.21 141.97,408.21 139.48,405.72C136.99,403.23 136.99,399.16 139.48,396.67L252.55,283.6L83.6,283.6C80.08,283.6 77.2,280.72 77.2,277.2C77.2,273.68 80.08,270.8 83.6,270.8L252.3,270.8L133.08,151.58C130.6,149.09 130.6,145.02 133.08,142.53C135.57,140.04 139.64,140.04 142.13,142.53L261.6,262Z'style='fill-rule:nonzero;stroke:"+color+";stroke-width:25px;'/></svg></div>"
}



// ACCORDION GEOVIZ MENU

function selectGeovizMenu(m1, m2, m3, m4){

  m1 = m1 -1
  m2 = m2 -1
  m3 = m3 -1

  let itemM1 = $('#geoviz-menu').find('.niv1').eq(m1);
  itemM1.toggleClass('opened-niv-content').addClass('active-map');

  let itemM2 = itemM1.next().find('.niv2').eq(m2);
  itemM2.toggleClass('opened-niv-content');

  let itemM3 = itemM2.next().find('.niv3').eq(m3);
  col = itemM3.data('color');
  itemM3.css("background-color", col).find('p').css('color', 'white');

  let itemM4 = itemM3.find( '.' + m4 )
  //thisCol = itemM4.data('color');
  itemM4.css("background-color", col);
  itemM4.addClass('clicked-button');

  $('#mapTitle').css('color', col);
  $('#mainGr2Cont').css('border-left-color', col);
  $('#mainGr1Cont').css('border-left-color', col);
  if( itemM4.hasClass('flow clicked-button') )
    itemM4.html(svgPath("white"));

  loadGeoviz(itemM4.data('iduphp'), itemM4.data('color'));

}

function initGeovizMenu(){
  console.log('initGeovizMenu');

  // Tooltips Translation
  var tooltipProp = translation['tooltipProp'][version],
      tooltipNb = translation['tooltipNb'][version],
      tooltipFlux = translation['tooltipFlux'][version],
      tooltipDens = translation['tooltipDens'][version];

  // tooltip % nb et *
  $('#geoviz-menu .part').attr('data-tooltip', 'down 1000').attr('aria-label', tooltipProp);
  $('#geoviz-menu .nb').attr('data-tooltip', 'down 1000').attr('aria-label', tooltipNb);
  $('#geoviz-menu .flow').attr('data-tooltip', 'down 1000').attr('aria-label', tooltipFlux);
  // tooltip densité
  $("#geoviz-menu .part:first").attr('data-tooltip', 'down 1000').attr('aria-label', tooltipDens);
  $("#geoviz-menu-mobile .part:first").attr('data-tooltip', 'down 1000').attr('aria-label', tooltipDens);

  // Titre carte dans la couleur
  col = $('#geoviz-menu li.niv3').eq(7).css("border-left-color"); //le vert de sex2 par défaut
  $('#mapTitle').css('color', col);

  // Ouverture groupe indicateur
  $('a.niv1').click(function() {
    // close all niv1
    $('.niv1').removeClass('opened-niv-content');
    $(this).toggleClass('opened-niv-content');

  });

  // Ouverture indicateur
  $('.niv2').click(function() {
    $('.niv2').removeClass('opened-niv-content');
    $(this).toggleClass('opened-niv-content');
  });

  $('button').each(function() {
      let coloris = $(this).parents('#geoviz-menu li.niv3').css("border-left-color");
      if( $(this).hasClass('flow') )
        $(this).html(svgPath(coloris));
    });

  // Aspect des boutons au clic
  $('button').click(function() {

    let thisCol = $(this).parents('#geoviz-menu li.niv3').css("border-left-color");
    // add active map class for orange chevron
    //$(this).closest("ul").siblings().find(".icon")
    $('.niv1').removeClass('active-map');
    $('.opened-niv-content').addClass('active-map');

    //$(this).parents('#geoviz-menu li.niv1').toggleClass('active-map')

    // colorise button
    $('button').each(function() {
      let coloris = $(this).parents('#geoviz-menu li.niv3').css("border-left-color");
      $(this).parents('#geoviz-menu li.niv3').css('background-color', 'white').find('p').css('color', coloris);
      $(this).removeClass('clicked-button').css('background-color', 'white').css('color', coloris).css('border', '1px solid rgb(210, 210, 210)'); 

      if( $(this).hasClass('flow') )
        $(this).html(svgPath(coloris));

    });

    $(this).addClass('clicked-button').css('background-color', thisCol);
    $('.clicked-button').css('background-color', thisCol);
    $(this).parents('#geoviz-menu li.niv3').css('background-color', thisCol).find('p').css('color', 'white');
    if( $(this).hasClass('flow') )
        $(this).html(svgPath("white"));


    $('#mapTitle').css('color', thisCol);
    // $('#mapTitleCont').css('border-left-color', thisCol);

    $('#mainGr2Cont').css('border-left-color', thisCol);
    $('#mainGr1Cont').css('border-left-color', thisCol);

    if(typeGraph === 'simple')
      $('#titleGr2').css('color', thisCol);
    else
      $('#titleGr2').css('color', 'black');


  });


};



// Ajustement de la taille des titres
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
function initLeafletMap() {

  // data source
  source = dataSource + " <span class = 'help' onclick = 'popup_source()'></span>";

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
  if (myBounds != undefined) {
    var bounds = myBounds;
  } else {
    var bounds = leafletMap.getBounds();
  };
  leafletMap.setMaxBounds(bounds);

  copy = translation['copy'][version];
  // osm tiles
  osmLink = '<a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>';

  tilesOSM = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: minZoom,
            // maxZoom: maxZoom
            attribution: copy + ' | ' + source +  '<br/>' + leafletLink + ' | &copy; ' + osmLink
            });

  // CARTO tiles
  cartoLink = '&copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>';

  tilesCARTO = L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        subdomains: 'abcd',
        minZoom: minZoom,
        attribution: copy + ' | ' + source + '<br/>' +  leafletLink + ' | ' + cartoLink + ' &copy; ' + osmLink + ' Contributors'
        });


  // GeoportailFrance_orthos
  GPLink = '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail</a> France';

  tilesGP = L.tileLayer(
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

  tilesEsri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
     minZoom: minZoom,
     attribution: copy + ' | ' + source + '<br/>' + leafletLink + ' | '+ EsriLink
  });

  if(ctry=='CA' || ctry=='CO' || ctry=='CL' || ctry=='BR'){
    satellTiles = tilesEsri;
  } else {
    satellTiles = tilesGP;
  }

  // var attribution and source
  attrib = L.control.attribution({ position: 'bottomleft' }).setPrefix('');
  // attrib.onAdd = function (leafletMap) {var div = L.DomUtil.create('div', 'attrib'); return div};
  // Add source to map
  if (isMobileDevice()===false) {
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


  // to stock layers of Mobiliscope map
  mobiMap = [];

  // Add more layer (d'habillage)
  // QPV
  qpvJson = [];

  d3.json('/data/qpv.geojson', function(json) {
    qpvJson = json.features.filter(function(d) {
      return d.properties.CITYKEY === city ;
    });

    qpvOverlay = L.d3SvgOverlay(function(sel, proj) {

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

  });


  // limites communales (AL)
  muniJson = [];

  d3.json('/data/comunasAL.geojson', function(json) {
    muniJson = json.features.filter(function(d) {
      return d.properties.CITYKEY == city;
    });

    muniOverlay = L.d3SvgOverlay(function(sel, proj) {

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

  });




  // transmilenio (Bogota)
  tmJson = [];

  d3.json('/data/transmilenio.geojson', function(json) {
    tmJson = json.features;

    tmOverlay = L.d3SvgOverlay(function(sel, proj) {

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

  });


  // Couronnes centre/pérphérie (AL - zonage METAL)
  mrJson = [];
  mrJson2 = [];
  d3.json('/data/metalrings.geojson', function(json) {
    mrJson = json.features.filter(function(d) {
      return d.properties.CITYKEY == city;
    });
    mrJson.map(function(d){
      d.latLng = [+d.properties.Y_W84,+d.properties.X_W84];
      return d;
    });
    mrJson2 = json.features.filter(function(d) {
      return d.properties.CITYKEY == city;
    });

    mrOverlay = L.d3SvgOverlay(function(sel, proj) {

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

    mrOverlay2 = L.d3SvgOverlay(function(sel, proj) {

      //Pattern (hachures)
      var pattern = sel.selectAll('pattern').data(mrJson2);
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
            link.title = translation['lcHover'][version];
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

      var overlayName = translation['overlayName'];

      if (isMobileDevice()===false) {
        form.innerHTML = '<label><input id="bm0" class="bm" type="radio" name="bm" />' + overlayName['bm0'][version] + '</label>' +
                         '<label><input id="bm1" class="bm" type="radio" name="bm" checked/>' + overlayName['bm1'][version] + '</label>' +
                         '<label><input id="bm2" class="bm" type="radio" name="bm" />' + overlayName['bm2'][version] + '</label>' +
                         '<label><input id="bm3" class="bm" type="radio" name="bm" />' + overlayName['bm3'][version] + '</label>' +
                         '<div class="'+ className + '-separator" ></div>';
      } else if (isMobileDevice()===true) { 
        form.innerHTML = '<label><input id="bm0" class="bm" type="radio" name="bm" checked/>' + overlayName['bm0'][version] + '</label>' +
                         '<label><input id="bm1" class="bm" type="radio" name="bm" />' + overlayName['bm1'][version] + '</label>' +
                         '<label><input id="bm2" class="bm" type="radio" name="bm" />' + overlayName['bm2'][version] + '</label>' +
                         '<label><input id="bm3" class="bm" type="radio" name="bm" />' + overlayName['bm3'][version] + '</label>' +
                         '<div class="'+ className + '-separator" ></div>';
      }

      if(ctry=='CA' || city == 'annecy') {
        form.innerHTML += '<label><input id="mmap" class="cl" type="checkbox" checked/>' + overlayName['mmap'][version] + '</label>';
      } else if (ctry=='CO'){
        form.innerHTML += '<label><input id="mmap" class="cl" type="checkbox" checked/>' + overlayName['mmap'][version] + '</label>' +
                          '<label><input id="muni" class="cl" type="checkbox" />' + overlayName['muni'][version] + '</label>' +
                          '<label><input id="mr" class="cl" type="checkbox" />' + overlayName['mr'][version] + '</label>' +
                          '<label><input id="tm" class="cl" type="checkbox" />' + 'TransMilenio' + '</label>';
      } else if (ctry=='CL' || ctry=='BR'){
        form.innerHTML += '<label><input id="mmap" class="cl" type="checkbox" checked/>' + overlayName['mmap'][version] + '</label>' +
                          '<label><input id="muni" class="cl" type="checkbox" />' + overlayName['muni'][version] + '</label>' +
                          '<label><input id="mr" class="cl" type="checkbox" />' + overlayName['mr'][version] + '</label>' ;
      } else {
        form.innerHTML += '<label><input id="mmap" class="cl" type="checkbox" checked/>' + overlayName['mmap'][version] + '</label>' +
                          '<label><input id="qp" class="cl" type="checkbox" />' + overlayName['qp'][version] + '</label>';
      };

      container.appendChild(form);
      return container;
    }

  });

  // add control layer to map
  leafletMap.addControl(new lc());

}

initCodeSec();
// Secteur cliqué par défaut
function initCodeSec(){
  $.getJSON( "/data/codenamesec.json", function( data ) {
    Object.keys(data).forEach(function(i){
      if( data[i].id == city && data[i].codesec == currSect[0] ){
        currSect[1]=data[i].libsec;
      }
    });
  });
}


// Chargement de la géoviz
function loadGeoviz(idu, col) {
  console.log('loadGeoviz');
  if(isPlaying)
    animateTimeline('off');

  chemin = "/data/" + city + "/geo/" + idu +".geojson";

  printMap(chemin, idu, col) ;

}


// Fonctions pour la gestion des calques
function boolToString(b){
  if(b)
    return '1';
  else
    return '0';
};

// créa de la chaine de caractères pour représenter l'état des controles des calques. Ex : 0100
function serializeControlsKey(vector){
  let serializedKey = '';
  for(let i in vector){
      serializedKey += boolToString(vector[i]);
  }
  return serializedKey;
};

// initialise l'état des controles des calques
function initControlsState(vector){
  let vectorOutput = vector;
  let inputs = $('.leaflet-control-layers-list label input');
  inputs.each(function(){
    if( typeof(vector[ $( this ).attr('id') ]) != 'undefined')
      vectorOutput[ $( this ).attr('id') ] = $( this ).prop('checked');
  });
  return vectorOutput;
};

// cache tous les calques
function removeAllLayers(){
  if(mrOverlay2)
    leafletMap.removeLayer(mrOverlay2);
  if(mrOverlay)
    leafletMap.removeLayer(mrOverlay);
  if(muniOverlay)
    leafletMap.removeLayer(muniOverlay);
  if(mobiMap)
    leafletMap.removeLayer(mobiMap);
  if(tmOverlay)
    leafletMap.removeLayer(tmOverlay);
  if(qpvOverlay)
    leafletMap.removeLayer(qpvOverlay);
};

// cache les base maps
function removeAllBM(){
  if(tilesCARTO)
    leafletMap.removeLayer(tilesCARTO);
  if(satellTiles)
    leafletMap.removeLayer(satellTiles);
  if(tilesOSM)
    leafletMap.removeLayer(tilesOSM);
};

function setLayers(key, matrix){
  let layers = matrix[key];
  for(let i in layers){
    eval(`${layers[i]}.addTo(leafletMap)`);
  }
};

function setLayerController(){

  bgLayersControlVector = initControlsState(bgLayersControlVector);
  layersControlVector = initControlsState(layersControlVector);
  let bgSerializedKey = serializeControlsKey(bgLayersControlVector);
  let serializedKey = serializeControlsKey(layersControlVector);

  removeAllLayers();
  // removeAllBM();
  if (!isPlaying) removeAllBM(); 
  setLayers(bgSerializedKey,bgLayersControlMatrix)
  setLayers(serializedKey,layersControlMatrix[modrep])

  $('.bm').click(function(e){
    // removeAllBM();
    if(bm0.checked == true){
      attrib.setPrefix(copy + ' | ' + source + ' | ' + leafletLink);
    } else {
      attrib.setPrefix('');
    }
  })
  
}



function printMap(chemin, idu, col){
  console.log('printMap : '+ chemin + ' - ' + idu + ' - ' + col)

	update_fontsize() ;

	$(window).resize(function() {
		update_fontsize();
	});

  // indicateurModalité (ex: age2):
  var indmod = idu.split('_')[0] ;
  // indicateur (ex: age):
  var ind = indmod.slice(0,-1) ;
  // mode de représentation (ex: prop):
  modrep = idu.split('_')[1] ;
  // indicateur_modeReprésensation (ex: age_prop):
  var indrep = ind + "_" + modrep;

  // chemin vers les csv
  var csvStacked = "/data/" + city + "/stacked/" + ind + "_" + modrep + "_stacked.csv" ;
  var csvDuncan = "/data/" + city + "/segreg/" + ind + "_Duncan.csv" ;
  var csvMoran = "/data/" + city + "/segreg/" + ind + "_Moran.csv" ;
  var csvFlow = "/data/" + city + "/flowData/" + indmod + "_flow.csv" ;

  // Récupération du titre des cartes et des graphiques 'simples' dans translation
  // et réécriture dynamique quand %vcMenu% dans le texte
  var tMap = translation['tMap'][indmod][version];
  var regVC = /%vcMenu%/ig;
  tMap = tMap.replace(regVC, function () {
      return vcName;
    });
  var tMapNR = translation['tMapNR'][indmod][version];
  var regVC = /%vcMenu%/ig;
  tMapNR = tMapNR.replace(regVC, function () {
      return vcName;
    });

  // Récrire tMap pour le overflow
  function replaceStr(str, find, replace) {
    for (var i = 0; i < find.length; i++) {
      str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
    }
    return str;
  }
  var find = ["<strong>","</strong>"];
  var replace = ['',''];
  var tMapLab = replaceStr(tMap, find, replace);

	// LOAD MAP
  displayMap(chemin) ;

  // Valeurs de l'axe x des graphiques
  var sliderValueDomX = translation['sliderValueDomX'][version];
  // Valeurs traduites (4am -> 4h) de l'axe x des graphiques
  var sliderValue = translation['sliderValue'][version];
  // Étiquette de l'axe x des graphiques
  var Xgraph = translation['Xgraph'][version];

  // Main title graphiques secteurs
  var titleGraph2 = translation['titleGraph2'][version];

	// Build IDF chart
	// Initialisation
  $("#mainGr1").html("<strong>" + translation['titleGraph1'][version] + "</strong>");

  // download button
  $(".mainGr1-tooltip").html('<img src="/dist/assets/download.svg" />');
  $("#stacked-dowload.cont-picto").html('<span class="downloadTitle"></span>');

  // POUR ZIP
  $('#stacked-dowload').attr('href','/zip-streamer.php?files=.' + csvStacked + ',./'+ sec_gjson + ',./' + dico + ',./' + licence_pdf) //ICI

  // d3.select("#grIDF").html("") ;
	$("#altGr21").html('Duncan');
	$("#altGr11").html('Moran');
  $("#altGr12").html(translation['titleAltGr2']['stacked'][version]);
	$("#altGr22").html(translation['titleAltGr2']['simple'][version]);


  if ( ind != 'pop' && ind != 'res' && ind != 'act' && ind != 'mode' && modrep != "flow" ) {
    displayGraphSegreg("#grIDF", // div d'insertion du graphique
        csvDuncan, // chemin du fichier de données
        "hour", //valeurs de l'axe x
        indmod,//Object.keys(d)[1] // valeurs de l'axe y
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
			csvMoran,
			"hour", //valeurs de l'axe x
			indmod,  //Object.keys(d)[1] // valeurs de l'axe y
			"" // domain de l'axe y)
			);

	}) ;

	$("#altGr21").on("click", function(d){

		typeGrIDF = "Duncan" ;

		$("#altGr21").attr('class', 'style1');
		$("#altGr11").attr('class', 'style2');

		$("#grIDF").html('') ;

		displayGraphSegreg("#grIDF", // div d'insertion du graphique
			csvDuncan,
			"hour", //valeurs de l'axe x
			indmod, //Object.keys(d)[1] // valeurs de l'axe y
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

    if( ind != 'pop' ){

      typeGraph = "simple" ;

      // Initialisation
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');

      $("#grSect").html('') ;

      // Display simple chart
      if (modrep=="choro") {
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      }
      if (modrep=="prop"){
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      }
      if (modrep=="flow") {
        $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      } 

      displayGraph("#grSect",
        csvStacked,
        "hour",
        currSect[0],
        "") ;
      }

      if( ind == 'pop' ){

      typeGraph = "simple" ;

      // Initialisation
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style3');

      $("#grSect").html('') ;

      // Display simple chart
      if (modrep=="choro") {
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl_dens'] + translation['spanPopup']) ;
      }
      if (modrep=="prop"){
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      }
      if (modrep=="flow") {
        $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      } 

      displayGraph("#grSect",
        csvStacked,
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
			csvMoran,
			"hour", //valeurs de l'axe x
			indmod, //Object.keys(d)[1] // valeurs de l'axe y
			"" // domain de l'axe y)
		);

	}

	if(typeGrIDF == "Duncan"){

		//  Initialisation
		$("#grIDF").html('') ;

		$("#altGr21").attr('class', 'style1');
		$("#altGr11").attr('class', 'style2');
    if ( ind != 'pop' && ind != 'res' && ind != 'act' && ind != 'mode' && modrep != "flow") {
  		displayGraphSegreg("#grIDF", // div d'insertion du graphique
  			csvDuncan,
  			"hour", //valeurs de l'axe x
  			indmod, //Object.keys(d)[1] // valeurs de l'axe y
  			"" // nom de l'axe y
  		);
    }
	}

  var graph1Message = translation['graph1Message'][version];
  // Comportement du graphique simple selon indicateur
	if (currSect && typeGraph == "simple"){

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>"  + "<p id = 'nameSect'>" + currSect[1]);
    if (modrep=="choro") {
      if (ind == 'pop') {
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl_dens'] + translation['spanPopup']) ;
      } else {
        $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
      }
    }
    if (modrep=="prop"){
      $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
    }
    if (modrep=="flow") {
      $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
    } 

    if ( ind == 'pop' ){
      $("#altGr21").attr('class', 'style3');
      $("#altGr11").attr('class', 'style3');
      $("#altGr12").attr('class', 'style3');
      $("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;
    } else if ( ind == 'res' ){
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');
      $("#altGr21").attr('class', 'style3');
      $("#altGr11").attr('class', 'style3');
      $("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;
    } else if( ind != 'pop' || ind != 'res' ){
      $("#altGr22").attr('class', 'style1');
      $("#altGr12").attr('class', 'style2');
    };

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
			csvStacked,
			"hour",
			currSect[0],
			"") ;
	}

  // Comportement du graphique empilé pour tous les indicateurs sauf pop totale
	if (currSect && typeGraph == "stacked" && ind != 'pop'){

		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<p id = 'nameSect'>" + currSect[1]);

    $("#altGr12").attr('class', 'style1');
    $("#altGr22").attr('class', 'style2');

		d3.select("#grSect").html("") ;

		// Build sector chart
		stackedBarChart(currSect) ;

	}

  // Retirer le graphique ségrégation pour certains indicateurs et mode flow
	if ( currSect && (ind == 'pop' || ind == 'res' || ind == 'act' || ind == 'mode' || modrep == 'flow') ){

    $(".mainGr1-tooltip").html('');

		$("#altGr11").attr('class', 'style3');
		$("#altGr21").attr('class', 'style3');

    $("#titleGr1").html("") ;
    titleDuncan = "";
    titleMoran = "";

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

	}


  // Comportement du graphique empilé pour l'indicateur pop totale
	if (currSect && typeGraph == "stacked" && ind == 'pop'){

		typeGraph = "simple" ;

		// Initialisation
		$("#mainGr2").html("<strong>" + titleGraph2 + "</strong>" + "<p id = 'nameSect'>" + currSect[1]);
    if (modrep=="choro") {
      $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl_dens'] + translation['spanPopup']) ;
    }
    if (modrep=="prop"){
      $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
    }
    if (modrep=="flow") {
      $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
    } 

    $("#altGr12").attr('class', 'style3');
		$("#altGr22").attr('class', 'style1');

		$("#grIDF").html("<p id='message'>" + graph1Message + "</p>") ;

		d3.select("#grSect").html("") ;

		// Build sector chart
		displayGraph("#grSect",
		csvStacked,
		"hour",
		currSect[0],
		"") ;

	}


	if(!currSect && (ind == 'pop' || modrep == "flow") ){

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

		$("#grSect").html("<p id='message'>"+ translation['graph2Message'][version] + "</p>") ;

	}



	// Création de la slidebar
	createSlider() ;

  //tooltip-play
  var tooltipPlay = translation['tooltipPlay'][version];
  var tooltipPause = translation['tooltipPause'][version];
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
    $('#segreg-dowload').attr('href', '/zip-streamer.php?files=.' + csvSegreg + ',./' + dico + ',./' + licence_pdf); 
    
		// Definition du format du graphique
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 430 ,
			height = 178;
		// Set the ranges
		var	x = d3.scale.ordinal().domain(sliderValueDomX).rangePoints([0, width], .5);
		var	xb = d3.scale.ordinal().domain(sliderValue).rangePoints([0, width], .5);
		var	y = d3.scale.linear().range([height, 1]);
  	
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

      // Titre 
      $("#titleGr1").html(translation['tSegreg_start'][typeGrIDF][version] + translation['indicateurHR'][ind][version] + translation['tSegreg_end'][typeGrIDF]);

			if(csvSegreg.split("_")[1] == "Duncan.csv" && typeGrIDF == "Duncan" && modrep != "flow"){
				tform = '.2f' ;
				domY = [valMin * 0.8, valMax * 1.1] ;
				// $("#titleGr1").html(titleSegreg[0] + " <strong>" + indicateurHR[ind] + "</strong>" + titleSegreg[1]);

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

			if(csvSegreg.split("_")[1] == "Moran.csv" && typeGrIDF == "Moran" && modrep != "flow"){
				tform = '.2f' ;
        if(valMin<0){
          domY = [valMin * 1.1, valMax * 1.1]
        } else {
          domY = [valMin * 0.8, valMax * 1.1] ;
        }
				// $("#titleGr1").html(titleSegreg[3] + " <strong>" + indicateurHR[ind] + "</strong>" + titleSegreg[2]) ;

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

			
      // Récupération des noms des modalités dans le fichier segreg
      var k = d3.keys(data[0]).filter(function(key) { return key !== "hour"; })

      // Récupération des couleurs associées à chaque modalité
      var gamme_ind = [];
      for (var i in k) {
        gamme_ind.push(colors[k[i]][4]); // la dernière couleur des nuanciers
      }

      // Range and domain of gamme_ind
      var color = d3.scale.ordinal().range(gamme_ind);
			color.domain(k);

      // Afficher les indices
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
            if (d.name == indmod) {
						return 1 ;
					} else {
						return 0.45 ;
					}
				  })
				.attr("z-index", function(d){
					if (d.name == indmod) {
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
				.style("stroke", col)
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
			  .style("fill", col)
			  .style("stroke", col);

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
	function displayGraph(div, csvGr, varX, varY){

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

      // sélection de la modalité observée
      data = data.map(function(d){
        return {
          district: d.district,
          hour: d.hour,
          values: d[indmod]
        }
      });

      // long to wide format
      var data = d3.nest()
            .key(function(d) { return d["hour"] }) 
            .rollup(function(d) { 
              return d.reduce(function(prev, curr) {
                prev["hour"] = curr["hour"];
                prev[curr["district"]] = curr["values"];
                return prev;
              }, {});
            })
            .entries(data) // tell it what data to process
            .map(function(d) { // pull out only the values
              return d.values;
            });
           

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

      if (ind != 'pop') {
        // domY en %
        if (modrep == "choro"){
          tform = '.0f' ;
          domY = [valMin * 0.8, 100];
        }
      } else {
        //modalité densité
        tform = '.2s' ;
        domY = [valMin * 0.8, valMax * 1.1];
      }

			if( modrep == "prop" || modrep == "flow"){
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

      
			// Add the valueline path.
			gr.append("path")
			  .data([data])
			  .attr("class", "line")
			  .attr("d", valueline)
			  .style("stroke", col);

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
				.style("stroke", col)
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
			/*gr.append("text")
				// .attr("transform", "rotate(-90)")
				.attr("y", -margin.top)
				.attr("x", margin.left + 1)
				.attr("dy", "10px")
				.style("text-anchor", "middle")
				//.text(indmod)
				.style("font-size", "1.25em")
				.style("fill", "#393939");*/

			// Add mouseover event
			var yVal = data.map(function(d) {
				  return d[varY]
				});

			var focus = gr.append("g")
			  .attr("class", "focus")
			  .style("display", "none");

			focus.append("circle")
			  .attr("r", 2.5)
			  .style("fill", col)
			  .style("stroke", col);

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

				if (modrep == "choro"){
					vFoc = (Math.round(yVal[xI]*10)/10).toFixed(1) ;
				}

				if (modrep == "prop" || modrep == "flow" || idu == "pop0_choro"){
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
    $("#titleGr2").css('color', 'black').html(translation['tStacked'][modrep][version] + translation['indicateurHR'][ind][version] + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;

		// Definition du format
		var	margin = {top: 0, right: 0, bottom: 0, left: 30},
			width = 430 ,
			height = 178;

		var	x = d3.scale.ordinal();
		var	xb = d3.scale.ordinal();
		var	y = d3.scale.linear().range([height, 1]);

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

      // Récupération des noms des modalités dans le fichier stack 
      var k = d3.keys(data[0]).filter(function(key) { return key !== "hour" && key !== "district"; })

      // Récupération des couleurs associées à chaque modalité
      var gamme_ind = [];
      for (var i in k) {
        gamme_ind.push(colors[k[i]][4]); // la dernière couleur des nuanciers
      }

      // Range and domain of gamme_ind
      var color = d3.scale.ordinal().range(gamme_ind);
			color.domain(k);
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
					if(d.name == indmod){
						return color(d.name) ;
					}
					else{
						return "url(#hash_" + d.name + ")" ;
					}
				})
				.style("opacity" , function(d) {
					if(d.name == indmod){
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

				//position of the circle and text
				d3.selectAll(".mouse-per-line")
				  	.attr("transform", function(d, i) {

					var orY = myObjectValues(browsers[0])[1][xI].y ;
					var vFoc ;

					if ( modrep == "choro" && typeGraph !== "Duncan") {
						vFoc = (Math.round(myObjectValues(d)[1][xI].y * 10)/10).toFixed(1) ;
					}
					if ( modrep == "prop" || modrep == "flow"){
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


    var textStatSum = translation['textStatSum'];

    if ( modrep == 'choro') {           // CARTE CHORO

      //Titre carte
      $("#mapTitle").html(tMap).attr('lab', tMapLab) ;

      var indic_quintile = ['age', 'ageqc', 'cleduc', 'educmen', 'cs', 'cspmen', 'occ', 'mode', 'strm', 'strmfr', 'strmqc', 'log', 'cso', 'inf', 'sse'],
          indic_manuelle = 'sex',
          indic_nestedAve = 'pop',
          //indic_arithmProg = ['dep'],
          indic_amplEg = ['rev', 'revqc', 'reval', 'qpv', 'sex'],  // + 'res' en amplitude égale manuelle
          indic_seuilNat = ['act', 'resarea', 'zona', 'dep'];


      d3.csv(csvStacked, function(error, data) {
        if (error) throw error;

        // On sélectionne uniquement les data du sous-groupe observé (indmod)
        var dataMod = d3.map(data, function(d, name){ return(d[indmod])}).keys();

        // On en fait une série geostats
        serie = new geostats(dataMod);
        console.log(serie);

        // Méthode de discrétisation selon indicateur
        if (indic_quintile.includes(ind)) {
          var bk = serie.getClassQuantile(5);
          var methodName = translation['discretMethod']["quintiles"][version];
        } else if (ind=="res"){
          var bk = [0, 20, 40, 60, 80, 100];
          var methodName = translation['discretMethod']["amplEg"][version];
        } else if (indic_amplEg.includes(ind)){
          var bk = serie.getClassEqInterval(5);
          var methodName = translation['discretMethod']["amplEg"][version];
        } else if (indic_seuilNat.includes(ind)){
          var bk = serie.getClassJenks(5);
          var methodName = translation['discretMethod']["seuilNat"][version];
        } else if (ind == 'pop') {
          var bk = nestedAverages();
          var methodName = translation['discretMethod']["nestedAve"][version];
        }

        // Fonction moyennes emboîtées
        function nestedAverages(){
          var s = serie.sorted();
          var m = [serie.min(),
                   d3.mean(s.filter(function(d) { return d <= serie.mean() ;})),
                   serie.mean(),
                   d3.mean(s.filter(function(d) { return d > serie.mean() ;})),
                   serie.max()
                  ];

          var bk = [m[0],
                    d3.mean(s.filter(function(d) { return d <= m[1] ;})),
                    m[1],
                    d3.mean(s.filter(function(d) { return d > m[1] && d <= m[2] ;})),
                    m[2],
                    d3.mean(s.filter(function(d) { return d > m[2] && d <= m[3] ;})),
                    m[3],
                    d3.mean(s.filter(function(d) { return d > m[3] ;})),
                    m[4],
                   ];
          return bk;
        }

        
        if (ind!="pop") {
          var legend_labels = [roundMin(bk[0]) + textStatSum[2][version] + roundBKS(bk[1]) + '%',
                               roundBKS(bk[1]) + textStatSum[2][version] + roundBKS(bk[2]) + '%',
                               roundBKS(bk[2]) + textStatSum[2][version] + roundBKS(bk[3]) + '%',
                               roundBKS(bk[3]) + textStatSum[2][version] + roundBKS(bk[4]) + '%',
                               roundBKS(bk[4]) + textStatSum[2][version] + roundMax(bk[5]) + '%'];
        } else {
          var legend_labels = [roundMin(bk[0]), roundBKS(bk[1]), roundBKS(bk[2]),
                               roundBKS(bk[3]), roundBKS(bk[4]), roundBKS(bk[5]),
                               roundBKS(bk[6]), roundBKS(bk[7]), roundBKS(bk[8]),
                               roundMax(bk[9])];
        }


        var color_domain = bk.slice(1, bk.length - 1);


        function roundMin(val) {
          if (ind=="pop"){
            if (val<10) {
              formatVal = Math.floor(val/1)*1 ;
            } else if (val>=10 && val<100) {
              formatVal = Math.floor(val/10)*10 ;
            } else {
              formatVal = Math.floor(val/100)*100 ;
            }
          } else if (ind!="pop") {
            formatVal = Math.floor(val/1)*1 ;
          }
          return formatVal ;
        }

        function roundBKS(val) {
          if (ind == "pop") {
            if (val <100){
              formatVal = Math.round(val/10)*10 ;
            } else if (val>=100 && val<1000) {
              formatVal = Math.round(val/10)*10 ;
            } else if (val>=1000 && val<10000) {
              formatVal = Math.round(val/100)*100 ;
            } else {
              formatVal = Math.round(val/1000)*1000 ;
            }
          } else if (ind!="pop") {
            if (val<2) {
              formatVal = (Math.round(val*10)/10).toFixed(1) ;
            } else {
              formatVal = Math.round(val) ;
            }
          }
          return formatVal ;
        }

        function roundMax(val) {
          if (ind=="pop"){
            formatVal = Math.ceil(val/100)*100 ;
          } else if (ind!="pop") {
            if (val<10) {
              formatVal = Math.ceil(val/10)*10 ;
            } else if (val>=100) {
              formatVal = 100 ;
            } else {
              formatVal = Math.ceil(val/1)*1 ;
            }
          }
          return formatVal ;
        }


        var color = d3.scale.threshold()
          .domain(color_domain)
          .range(colors[indmod]);

        var hour = Math.trunc(slider.value()),
            indic = indmod + '_h' + hour ;


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
              if(idu == 'pop0_choro'){
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
                d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong>' + '<p id = "nameSect">' + currSect[1]);

                // DISPLAY SECTOR CHARTS FROM SELECTION
                currSect[0] = d.properties.Secteur_EM ;
                if (currSect && typeGraph == 'simple'){

                  // Initialisation
                  if (idu == 'pop0_choro') {
                    $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl_dens'] + translation['spanPopup']) ;
                  } else {
                    $("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
                  }
                  $('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

                  // Build sector chart
                  displayGraph('#grSect',
                    csvStacked,
                    'hour',
                    currSect[0],
                    '') ;
                }

                if (currSect && typeGraph == 'stacked' && idu != 'pop0_choro'){

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
          //removeAllLayers();
          //leafletMap.removeLayer(mrOverlay2);

          // data
          choroJson = json.features;

          // secteursOverlay.addTo(leafletMap);
          mobiMap = L.layerGroup([secteursOverlay]);

          setLayerController();

          // LEGEND
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


          // Concat textes légende
          var textCompar = translation['textCompar'];
          if (ind == 'pop') {
            var textLegChoro = methodName + textCompar[0][version];
          } else if (ind == 'res') {
            var textLegChoro = methodName + textCompar[1][version];
          } else {
            var textLegChoro = methodName + textCompar[2][version];
          }

          // construction légende %
          if(idu != 'pop0_choro'){

            // calcul taux moyen
            // load csv in STOCK
            var csvStock = "/data/" + city + "/stacked/" + ind + "_prop_stacked.csv" ;

            d3.csv(csvStock, function(error, data) {
              if (error) throw error;

              // on filtre une heure
              data = data.filter(function(x) { return x.hour == dayTime}) ;

              // pop total de l'ensemble des secteurs à heure H
              var popTot = d3.sum(data, function(d){
                var vals = d3.keys(d).map(function(key){ return key !== "hour"  && key !== "district" ? d[key] : 0 });
                return d3.sum(vals);
              });

              // sous-pop total (le groupe observé : indmod) de l'ensemble des secteurs à heure H
              var colMod = d3.map(data, function(d, name){ return(d[indmod])}).keys();
              var popMod = d3.sum(colMod);

              // taux moyen à heure H
              var txMoy = Math.round(popMod*100/popTot);


              var legendGroup = d3.select('.legend.leaflet-control').append('svg')
                .attr('id', 'legend')
                .attr('width', 150)
                .attr('height', 230)
                .attr('class', 'legendbloc');

              // on recalcule le color domain pour la légende
              var color_domain = bk.slice(1, bk.length);
              var legCol = colors[indmod]
              legCol.push('#ffffff00');
              var color = d3.scale.threshold()
                .domain(color_domain)
                .range(legCol);

              var lgchoro = legendGroup.selectAll('g.lgchoro')
                .data(bk)
                .enter().append('g')
                .attr('class', 'lgchoro');

              lgchoro.append('rect')
                .attr('y', function(d, i){ return 110 - (i*ls_h)  ; })
                .attr('width', ls_w)
                .attr('height', ls_h)
                .style('fill', function(d, i) { return color(d); })
                .style('opacity', 0.75);

              lgchoro.append('text')
                .attr('x', 1.5*ls_w)
                .attr('y', function(d, i){ return 110 - (i*ls_h) + .7*ls_h; })
                .text(function(d, i){ return legend_labels[i]; })
                .style('font-size', '10px');



              // ICI à basculer dans translation.php
              if (version==="fr"){
                var textTxMoy = "Moyenne à " + heure + "h : " + txMoy + "%";
              } else if (version==="es") {
                var textTxMoy = "Media a las " + heure + " horas: " + txMoy + "%";
              } else if (version==="en") {
                var textTxMoy = "Mean at " + dayTime + ": " + txMoy + "%";
              }

              // titre
              legendGroup.append('foreignObject')
                .attr('class', 'Tleg')
                .attr('width', '100%')
                .attr('height', 15)
                .attr('y', 0)
                .attr('overflow', 'visible')
                .html(translation['Tleg'][modrep][version]);

              // Notabene
              legendGroup.append('foreignObject')
                .attr('class', 'notabene2')
                .attr('width', '100%')
                .attr('height', 15)
                .attr('overflow', 'visible')
                .attr('y', 150 )
                .html(textTxMoy);

              // Notabene
              legendGroup.append('foreignObject')
                .attr('class', 'notabene')
                .attr('width', '100%')
                .attr('height', 50)
                .attr('overflow', 'visible')
                .attr('y', 170)
                .html(textLegChoro);

              });
            }


            if(idu == 'pop0_choro'){

              var legendGroup = d3.select('.legend.leaflet-control').append('svg')
                    .attr('id', 'legend')
                    .attr('width', 130)
                    .attr('height', 272)
                    // .attr('height', 'auto')
                    .attr('class', 'legendbloc');


              // on recalcule le color domain pour la légende
              var color_domain = bk.slice(1, bk.length);
              var legCol = colors[indmod]
              legCol.push('#ffffff00');
              var color = d3.scale.threshold()
                .domain(color_domain)
                .range(legCol);

              var lgchoro = legendGroup.selectAll('g.lgchoro')
                  .data(bk)
                  .enter().append('g')
                  .attr('class', 'lgchoro');

              lgchoro.append('rect')
                  .attr('y', function(d, i){ return 185 - (i*ls_h); })
                  .attr('width', ls_w)
                  .attr('height', ls_h)
                  .style('fill', function(d, i) { return color(d); });
                  // .style('opacity', 1);

              lgchoro.append('text')
                  .attr('x', 1.5*ls_w)
                  .attr('y', function(d, i){ return 185 - (i*ls_h) + 23; })
                  .text(function(d, i){ return format(legend_labels[i]); })
                  .style('font-size', '9px');

              // titre
              legendGroup.append('foreignObject')
                .attr('class', 'Tleg')
                .attr('width', '100%')
                .attr('height', 30)
                .attr('overflow', 'visible')
                .attr('y', 0)
                .html(translation['TlegDens'][version]);

              // Notabene
              legendGroup.append('foreignObject')
                  .attr('class', 'notabene')
                  .attr('width', '100%')
                  .attr('height', 50)
                  .attr('overflow', 'visible')
                  .attr('y', 220)
                  .html(textLegChoro);
              }

        });

      });





		}


      if (modrep == 'prop'){                                              // CARTE PROP


      //Titre carte
      $("#mapTitle").html(tMap).attr('lab', tMapLab) ;


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
					  indic = indmod + '_h' + hour ;

				var upd = sel.selectAll('circle').data(propJson);

					upd.enter()
					   .append('circle')
					   .attr('id', 'circles')
					   .attr('class', 'bubble')
					   .style('fill', col);

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
						d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong>' + '<p id = "nameSect">' + currSect[1]);
						// DISPLAY SECTOR CHARTS FROM SELECTION
            currSect[0] = d.properties.Secteur_EM ;
						if (currSect && typeGraph == 'simple'){

							// Initialisation
							$("#titleGr2").css('color', col).html(tMap + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
							$('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

							// Build sector chart
							displayGraph('#grSect',
								csvStacked,
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
        //removeAllLayers();

				// data
				secteurs = json.features;
				propJson = json.features.map(function(d){
    				d.latLng = [+d.properties.CENTROID_Y,+d.properties.CENTROID_X];
    				return d;
  				});

        mobiMap = L.layerGroup([secteursOverlay, circlesOverlay]);

        setLayerController();

				// LEGENDE
				var hour = Math.trunc(slider.value()) ;
					  indic = indmod + '_h' + hour ;

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
        d3.csv(csvStacked, function(error, data) {
          if (error) throw error;

          // on filtre une heure
          data = data.filter(function(x) { return x.hour == dayTime}) ;

          // on sélectionne la modalité observée
          data = d3.map(data, function(d, name){ return(d[indmod])}).keys() ;
          data = data.map((i) => Number(i));

          // min max et moyenne à heure h
          var valMoy = d3.mean(data) ;
          var valMin = d3.min(data) ;
          var valMax = d3.max(data) ;



          // build legend
          var height = 2*radius(datasetProp[0]) + 82;
          var legendGroup = d3.select('.legend.leaflet-control').append('svg')
            .attr('id', 'legend')
            //.attr('width', 2*radius(datasetProp[0]) + 135)
            .attr('width', 202)
            .attr('height', height )
            .attr('class', 'legendbloc');


          var lgprop = legendGroup.selectAll('g.lgprop')
            .data(datasetProp)
            .enter().append('g')
            .attr('class', 'lgprop');

          lgprop.append('circle')
            .attr('cx', radius(datasetProp[0]) + 1)
            .attr('cy', function(d){ return 2*radius(datasetProp[0]) - radius(d) + 35; })
            .attr('r', function(d) { return radius(d); })
            .style('fill', 'none')
            .style('stroke', 'black');

          lgprop.append('text')
            .attr('x', 2.2*radius(datasetProp[0]))
            .attr('y', function(d){ return (2*radius(datasetProp[0]) - 2*radius(d)) + 40; })
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
            .attr('y', radius(datasetProp[2]) + 30)
            .text(textH);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 43)
            .text('Max.: ' + format(Math.floor(valMax)))
            .style('fill', col);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 56)
            .text(textStatSum[0][version] + ' ' + format(Math.floor(valMoy)))
            .style('fill', col);

          lgprop.append('text')
            .attr('x', 4*radius(datasetProp[0]))
            .attr('y', radius(datasetProp[2]) + 69)
            .text('Min.: ' + format(Math.floor(valMin)))
            .style('fill', col);

          // titre
          legendGroup.append('foreignObject')
            .attr('class', 'Tleg')
            .attr('width', '100%')
            .attr('height', 15)
            .attr('overflow', 'visible')
            .attr('y', 0)
            .html(translation['Tleg'][modrep][version]);

          // Notabene
          legendGroup.append('foreignObject')
            .attr('class', 'notabene')
            .attr('width', '100%')
            .attr('height', 40)
            .attr('overflow', 'visible')
            .attr('y', function(d){ return 2*radius(datasetProp[0]) + 50 ; })
            .html(translation['notabene']['prop'][version]);

        });

			});

		}


		if ( modrep == 'flow' ) {                 // CARTE FLOW

      //Titre carte
      $("#mapTitle").html(tMapNR).attr('lab', tMapLab) ;

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
					  indic = indmod + '_h' + hour ;

				var upd = sel.selectAll('circle').data(flowJson);

					upd.enter()
					   .append('circle')
					   .attr('id', 'circles')
					   .attr('class', 'bubble')
					   .style('fill', col);

					upd.attr('cx', function(d) { return proj.latLngToLayerPoint(d.latLng).x;  })
						.attr('cy', function(d) { return proj.latLngToLayerPoint(d.latLng).y; })
						.attr('r', function(d) { return radius(d.properties[indic])/proj.scale; })
						.attr('stroke-width', .5 / proj.scale);

			},{
			zoomHide: true
			});

      var hour = Math.trunc(slider.value()) ;
          indic = indmod + '_h' + hour ;

			var flowOverlay = L.d3SvgOverlay(function(sel, proj) {

				// build flows in mouseover function
				var mouseover = function(d){

					d3.csv(csvFlow, function(error, flux) {

            // if (error) throw 'error';

            if (error) {

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
                    d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong>'  + '<p id = "nameSect">' + currSect[1]);

                    // DISPLAY SECTOR CHARTS FROM SELECTION
                    if (currSect && typeGraph == 'simple'){

                      // Initialisation
                      $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
                      $('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

                      // Build sector chart
                      displayGraph('#grSect',
                        csvStacked,
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

            } else {
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
                    d3.select('#mainGr2').html('<strong>' + titleGraph2 + '</strong>'  + '<p id = "nameSect">' + currSect[1]);

                    // DISPLAY SECTOR CHARTS FROM SELECTION
                    if (currSect && typeGraph == 'simple'){

                      // Initialisation
                      $("#titleGr2").css('color', col).html(tMapNR + " " + translation['titleGr2_compl'][modrep][version] + translation['spanPopup']) ;
                      $('#titleGr2').css('font-size', $('#titleGr1').css('font-size')) ;

                      // Build sector chart
                      displayGraph('#grSect',
                        csvStacked,
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
            }



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
        //removeAllLayers();

				// data use by overlay
				flowJson = json.features.map(function(d){
    				d.latLng = [+d.properties.CENTROID_Y,+d.properties.CENTROID_X];
    				return d;
  				});

        mobiMap = L.layerGroup([secteursOverlay, circlesOverlay, flowOverlay]);

        setLayerController();

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
        d3.csv(csvStacked, function(error, data) {
          if (error) throw error;

          // on filtre une heure
          data = data.filter(function(x) { return x.hour == dayTime}) ;

          // on sélectionne la modalité observée
          data = d3.map(data, function(d, name){ return(d[indmod])}).keys() ;
          data = data.map((i) => Number(i));

          // min max et moyenne à heure h
          var valMoy = d3.mean(data) ;
          var valMin = d3.min(data) ;
          var valMax = d3.max(data) ;

          if (screen.width>1024) { // Taille du bloc en fonction de l'écran
            var height = 195;
          } else {
            var height = 85;
          }

          // build legend
          var legendGroup = d3.select('.legend.leaflet-control').append('svg')
            .attr('id', 'legend')
            .attr('width', 222)
            .attr('height', 2*radius(datasetFlow[0]) + height)
            .attr('class', 'legendbloc');

          // circles
          var lgflow = legendGroup.selectAll('g.lgflow')
            .data(datasetFlow)
            .enter().append('g')
            .attr('class', 'lgflow');

          lgflow.append('circle')
            .attr('cx', radius(datasetFlow[0]) + 1)
            .attr('cy', function(d){ return 2*radius(datasetFlow[0]) - radius(d) + 35; })
            .attr('r', function(d) { return radius(d); })
            .style('fill', 'none')
            .style('stroke', 'black');

          lgflow.append('text')
            .attr('x', 2.2*radius(datasetFlow[0]))
            .attr('y', function(d){ return (2*radius(datasetFlow[0]) - 2*radius(d)) + 40; })
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
            .attr('y', radius(datasetFlow[2]) + 30)
            .text(textH);

          lgflow.append('text')
            .attr('x', 4.5*radius(datasetFlow[0]))
            .attr('y', radius(datasetFlow[2]) + 43)
            .text('Max.: ' + format(Math.floor(valMax)))
            .style('fill', col);

          lgflow.append('text')
            .attr('x', 4.5*radius(datasetFlow[0]))
            .attr('y', radius(datasetFlow[2]) + 56)
            .text(textStatSum[0][version] + ' ' + format(Math.floor(valMoy)))
            .style('fill', col);

          lgflow.append('text')
            .attr('x', 4.5*radius(datasetFlow[0]))
            .attr('y', radius(datasetFlow[2]) + 69)
            .text('Min.: ' + format(Math.floor(valMin)))
            .style('fill', col);

          // titre
          legendGroup.append('foreignObject')
            .attr('class', 'Tleg')
            .attr('width', '100%')
            .attr('height', 15)
            .attr('overflow', 'visible')
            .attr('y', 0)
            .html(translation['Tleg']['prop'][version]);

          // Notabene circle
          legendGroup.append('foreignObject')
            .attr('class', 'notabene')
            .attr('width', '100%')
            .attr('height', 30)
            .attr('overflow', 'visible')
            .attr('y', function(d){ return 2*radius(datasetFlow[0]) + 55; })
            .html(translation['notabene']['prop'][version]);

          if (screen.width>1024) { // légende avec les flux

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
              .attr('y1', function(d){return d.y + 60})
              .attr('x2', 61)
              .attr('y2', function(d){return d.y + 60})
              .attr('stroke-width', function(d){ return d.strk })
              .attr('stroke', 'black') ;

            var text2 = lgflow.selectAll('.textL')
              .attr('class', 'textL')
              .data(datasetLiens)
              .enter()
              .append('text') ;

            var textLabels2 = text2
              .attr('x', 75)
              .attr('y', function(d){return d.y + 63})
              .text(function(d){return d.txt });

            // titre 2
              legendGroup.append('foreignObject')
                .attr('class', 'Tleg')
                .attr('width', '100%')
                .attr('height', 15)
                .attr('overflow', 'visible')
                .attr('y', 2*radius(datasetFlow[0]) + 90)
                .html(translation['Tleg']['flow'][version]);

            // Notabene link
            legendGroup.append('foreignObject')
              .attr('class', 'notabene')
              .attr('width', '100%')
              .attr('height', 30)
              .attr('overflow', 'visible')
              .attr('y', 2*radius(datasetFlow[0]) + 155)
              .html(translation['notabene']['flow'][version]);

          }

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

				if (chemin != "/data/" + city + "/pop0_prop/geo/secteursData.geojson"){
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
				if (chemin == "/data/" + city + "/pop0_prop/geo/secteursData.geojson"){
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

			if (chemin != "/data/" + city + "pop0_prop/geo/secteursData.geojson"){
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
			if (chemin == "/data/" + city + "pop0_prop/geo/secteursData.geojson"){
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


// Partage dynamique de la vue
// traduction dans les fichiers /src/scripts/text-en.js text-es.js text-fr.js
// Attention : loads.js doit être chargé avant
function getShareInfo (share){
  var title = 'Mobiliscope - '+ encodeURIComponent($("#city-name h2").html().replace(/<[^>]*>/g, '')) + '%0D%0A';
  var description = encodeURIComponent($("#mapTitle").html().replace(/<[^>]*>/g, '').trim()) + ' ' + shareLocalText[0][version];
  var pageUrl = encodeURIComponent(location.href);
  var mailMessage =  description+ '%0D%0A %0D%0A' + pageUrl;
  var shareInfo = '';

  switch(share){
    case 'share-mail':
      shareInfo = 'mailto:?subject=' + title + '&body=' + mailMessage;
      break;
    case 'share-tw':
      shareInfo = "https://twitter.com/share?title=" + title + "&url=" + pageUrl + "&text=" + description;
      break;
    case 'share-fb':
      shareInfo = "https://www.facebook.com/sharer/sharer.php?quote=" + title + ' %0D%0A %0D%0A ' + mailMessage + "&u=" + pageUrl;
      break;
    case 'share-lk':
      shareInfo = "https://www.linkedin.com/sharing/share-offsite/?url=" + pageUrl + '&title=' + title + '&summary=' + description;
      break;

    case 'share-link':
      try {
          //https://caniuse.com/?search=navigator.clipboard
          //https://caniuse.com/?search=document.execCommand
          //navigator.clipboard.writeText(location.href);
          Clipboard.copy(location.href);

          $("#share-link span").html(shareLocalText[1][version]);
          setTimeout(function() { $("#share-link span").html(shareLocalText[2][version]); }, 2000);
        } catch (error) {
          $("#share-link span").html('Sorry your browser is too old for this...');
          setTimeout(function() { $("#share-link span").html(shareLocalText[2][version]); }, 2000);
          console.error(error);
          if(!window.isSecureContext)
            console.error('This feature needs secured https protocol');
        }
      break;
  }


  if(shareInfo.length > 0){
    window.open(shareInfo, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

}


// fonction copy paste supportée par iOS Safari (version > 9.3)
// https://stackoverflow.com/questions/40147676/javascript-copy-to-clipboard-on-safari
window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);




