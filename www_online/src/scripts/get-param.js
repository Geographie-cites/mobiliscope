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

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var url = new URL(location.href);
var search_params = url.searchParams;

var m1 = '';
var m2 = '';
var m3 = '';
var m4 = '';
var t = '';
var s = '';


if( !queryString){
  age2_prop();
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

/*
* Pour mettre à jour la geoviz selon les paramètres,
* on parcourt le menu pour trouver les éléments à selectionner
* et on simule des clics sur les menus
*/

  if(m1 && m2 && m3 && m4){
    $("#menu .niv1").each( function( i, e ) {

      if( i + 1 == m1 ){
        $(this).trigger("click");

        $(this).nextUntil('.niv1','.niv2').each( function( j, e ) {

          if( j + 1 == m2 ){
            $(e).click();
            $(this).nextUntil('.niv2','.niv3').each( function( k, e ) {
                if( k + 1 == m3 ){
                    $(e).find('.niv-logo button').each( function( i, e ) {
                      if( $(e).attr('class') == m4 ){
                        $(e).click();
                      }
                    });
                }
            });
          }
        });
      }

    });
  } else {
    age2_prop();
  }

}

// initialisation de l'historique et des menus de langue
setUrlParam(m1,m2,m3,m4,t,s);

// paramètres menu par défaut
var m11 = '2';
var m22 = '1';
var m33 = '3';
var m44 = 'nb';

$("#menu .niv3 button").each( function( i, e ) {
  $(e).click(function() {
    var m1 = '';
    var m2 = '';
    var m3 = '1';
    var m4 = '';
    var t = urlParams.get('t');
    var s = urlParams.get('s');

    // on met à jour les paramètres selon le clic
    $(e).parents('.niv3').prevUntil('.niv2','.niv3').each( function( i, e ) {
      m3 = i + 2;
    } );

    $(e).parents('.niv3').prevUntil('.niv1','.niv2').each( function( j, e ) {
      m2 = j + 1;
    });

    $(e).parents('.niv3').prevUntil('#menu','.niv1').each( function( k, e ) {
      m1 = k + 1;
    });

    m4 = $(e).attr('class')
    t = currentFrame;
    s = currSect[0];

    m11 = m1;
    m22 = m2;
    m33 = m3;
    m44 = m4;

    setUrlParam(m1,m2,m3,m4,t,s);

  });
});

d3.select("#map-container").on("click",function(){
  var m1 = m11;
  var m2 = m22;
  var m3 = m33;
  var m4 = m44;
  var s = currSect[0];
  var t = currentFrame;
  setUrlParam(m1,m2,m3,m4,t,s);
});

d3.select(".container-timeline").on("click",function(){
  var m1 = m11;
  var m2 = m22;
  var m3 = m33;
  var m4 = m44;
  var t = currentFrame;
  var s = currSect[0];
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


// Partage dynamique de la vue
// traduction dans les fichiers /src/scripts/text-en.js text-es.js text-fr.js
// Attention : loads.js doit être chargé avant
function getShareInfo (){
  var title = 'Mobiliscope - '+ encodeURIComponent($("#city-name h2").html().replace(/<[^>]*>/g, '')) + '%0D%0A';
  var description = encodeURIComponent($("#mapTitle").html().replace(/<[^>]*>/g, '').trim()) + ' ' + shareLocalText[0];
  var pageUrl = encodeURIComponent(location.href);
  var mailMessage =  description+ '%0D%0A %0D%0A' + pageUrl;
  var shareMailURL = 'mailto:?subject=' + title + '&body=' + mailMessage;
  var shareTWURL = "https://twitter.com/share?title=" + title + "&url=" + pageUrl + "&text=" + description;
  var shareFBURL = "https://www.facebook.com/sharer/sharer.php?quote=" + title + ' %0D%0A %0D%0A ' + mailMessage + "&u=" + pageUrl;
  var shareLKURL =  "https://www.linkedin.com/sharing/share-offsite/?url=" + pageUrl + '&title=' + title + '&summary=' + description;

  return { title, description, pageUrl, mailMessage, shareMailURL, shareTWURL, shareFBURL, shareLKURL}
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



/* UPDATE SHARE LINKS*/
$( document ).ready(function() {


  $("#share-mail").click(
    function(e){
      let shareinfo = getShareInfo();
      window.open(shareinfo.shareMailURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  );

  $("#share-tw").click(
    function(e){
      let shareinfo = getShareInfo();
      window.open(shareinfo.shareTWURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  );
  $("#share-fb").click(
    function(e){
      let shareinfo = getShareInfo();
      window.open(shareinfo.shareFBURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  );

  $("#share-lk").click(
    function(e){
      let shareinfo = getShareInfo();
      window.open(shareinfo.shareLKURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  );

  $("#share-link").click(
    function(e){
      try {
        //https://caniuse.com/?search=navigator.clipboard
        //https://caniuse.com/?search=document.execCommand
        //navigator.clipboard.writeText(location.href);
        Clipboard.copy(location.href);

        $("#share-link span").html(shareLocalText[1]);
        setTimeout(function() { $("#share-link span").html(shareLocalText[2]); }, 2000);
      } catch (error) {
        $("#share-link span").html('Sorry your browser is too old for this...');
        setTimeout(function() { $("#share-link span").html(shareLocalText[2]); }, 2000);
        console.error(error);
        if(!window.isSecureContext)
          console.error('This feature needs secured https protocol');
      }
    }
  );


});

