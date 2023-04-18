
console.log('get-param.js')
// Ce script gère les paramètres GET passés en url et simule les clics sur les boutons selon ces paramètres
// Il ré-crit l'url au clic sur le menu et aussi au clic sur la timeline et sur les secteurs

/* ====
  Paramètres GET :
m1 : int = niveau 1 du menu (en partant de 1)
m2 : int = niveau 2 du menu (en partant de 1)
m3 : int = niveau 3 du menu (en partant de 1)
m4 : niveau 4 du menu = nb | part | flow
t : int = l'heure sur la frise chronologique
s : int = l'id du secteur

  Exemple d'appel
https://mobiliscope.parisgeo.cnrs.fr/fr/geoviz/idf?m1=3&m2=2&m3=3&m4=nb&t=5&s=9106
Ce lien ouvre le menu PROFIL SOCIAL (m1=3) puis Niveau éducation des ménages (m2=2)
puis Intermédiaire (m3=3) puis la version nombre et met l'horloge à 5h (t=5) et sélectionne le secteur 9106

*/

var shareLocalText = translation['shareLocalText'] ;

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var url = new URL(location.href);
var search_params = url.searchParams;

var currSect = [nomCol, nameSec];

var m1 = m11;
var m2 = m22;
var m3 = m33;
var m4 = m44;
var t = 14;
var s = currSect[0];



if( !queryString){
  selectGeovizMenu(m1,m2,m3,m4)
} else {
  m1 = urlParams.get('m1')
  m2 = urlParams.get('m2')
  m3 = urlParams.get('m3')
  m4 = urlParams.get('m4')
  t = urlParams.get('t')
  s = urlParams.get('s')


  // On met le slider à l'heure si le paramètre existe
  if( t ) {
    slider = d3.slider().value(t);
    currentFrame = t;
  }
  // On met le secteur si le paramètre existe
  if( s ) {
    currSect[0] = s;
  }

  // initialisation de l'historique et des menus de langue
  setUrlParam(m1,m2,m3,m4,t,s);

  selectGeovizMenu(m1,m2,m3,m4)

}


$("#geoviz-menu .niv3 button").each( function( i, e ) {
  $(e).click(function() {
    m1 = $(e).data('m1')
    m2 = $(e).data('m2')
    m3 = $(e).data('m3')
    m4 = $(e).data('mode')
    t = currentFrame
    s = currSect[0]

    setUrlParam(m1,m2,m3,m4,t,s);

  });
});

d3.select("#map-container").on("click",function(){
  t = currentFrame;
  s = currSect[0];
  setUrlParam(m1,m2,m3,m4,t,s);
});

d3.select("#container-timeline").on("click",function(){
  t = currentFrame;
  s = currSect[0];
  setUrlParam(m1,m2,m3,m4,t,s);
});


function setUrlParam(m1,m2,m3,m4,t,s){
  search_params.set('m1', m1);
  search_params.set('m2', m2);
  search_params.set('m3', m3);
  search_params.set('m4', m4);
  search_params.set('t', t);
  search_params.set('s', s);
  url.search = search_params.toString();

  // update de l'url de la langue :
  $('#myDropdown a').each( function(){
    $(this).attr("href",$(this).attr("href").split('?')[0] + '?' + search_params.toString());
  } )

  const state = { 'm1': m1, 'm2': m2 , 'm3': m3 , 'm4': m4 , 't': t , 's':s}
  window.history.pushState(state, document.title, url.search);
}




