var map = {};
var item = {};
var language = $('body').attr('lang');
var cities = Array();

//var lastScrollTop = 0;
//$(".full-menu").scroll(function(){
//  st = $(this).scrollTop();
//  console.log(st);
//  if(st <= 2) {
//    $(".mouse_scroll").css("display","inherit");
//  }
//  else if(st > 2) {
//    $(".mouse_scroll").css("display","none");
//  }
//  lastScrollTop = st;
//})



function init (data, cb){


var currentPathname = window.location.pathname;

if (currentPathname.slice(1,3)==="fr"){

   $( ".dropLang" ).css("background-image","url('/dist/assets/french-flag-arrow.svg')");
   $( ".langchoice" ).css("background-image","url('/dist/assets/uk-flag.svg')");
}else{
   $( ".dropLang" ).css("background-image","url('/dist/assets/uk-flag-arrow.svg')");
   $( ".langchoice" ).css("background-image","url('/dist/assets/french-flag.svg')");
}


$(".niv3 button").click(function (e) {
  $(".niv3 button").closest().css( "background-color", "red" );
});


$("#submit").click(function() {
  alert("The selected Value is "+ $("ul").find(".selected").data("value"));
});

$('.toggle-nav').on('click',function(e) {
  $('.full-menu').show('fast', function(){$(this).toggleClass('active');});
  $('#close-menu-btn').click(function(){
    $('.full-menu').removeClass('active');
  });
});

$("ul").on("click", ".init", function() {
  $(this).closest("ul").children('li:not(.init)').slideDown();
});




$('.search-input-btn').click(function(e) {
  $('#topbar-search').val('');
  if($('#topbar-search').hasClass('focus')){
    $('#topbar-search').removeClass('focus');
    $('.search-input-btn').css("background-image",'url(/dist/assets/search-black.svg)');
    $('#topbar-search').val('');
  } else {
    $('#topbar-search').addClass('focus');
    $('.search-input-btn').css("background-image",'url(/dist/assets/search-orange.svg)');
    $('#topbar-search').val('');
  }

  const w = $( window ).width();
  if ($('#topbar-search-mobile').css("display")=="none" && w < 1024){
    $('#topbar-search-mobile').css("display","inherit").focus();
    $('.twitter-typeahead').css("height","66px");
  } else {
    $('#topbar-search-mobile').css("display","none");
    $('.twitter-typeahead').css("height","0px");
  }

  e.preventDefault();
});

$('.top-search').click(function(e) {
  $('#cityName').toggleClass('hidden');
  $('.topbar .top-search-container').toggleClass('down');
  $('#search-bar').focus();
  e.preventDefault();
});




$('.typeahead').typeahead({
    hint: false,
    highlight: true,
    minLength: 2,
    accent: true
  },
  {
    limit: 15,
    name: 'cities',
    source: substringMatcher(data),
  }


  );

  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    var cityPage = '/' + language + '/geoviz/' + map[suggestion];
    window.location = cityPage;
  });

  $('.typeahead').bind('typeahead:active', function(ev, suggestion) {
    $('#topbar-search').attr('autocomplete', 'new-password');
    $('#search-box').attr('autocomplete', 'new-password');
  });

  cb();

}

//scroll-button
$("#scrolling-down").click(function() {
  $(".topbar .full-menu.active").animate({
                   scrollTop: $(
                     'html, body').get(0).scrollHeight
               }, 2000);
})

$("#scrolling-up").click(function() {
  $('.topbar .full-menu.active').animate({
      scrollTop: (0)}, 1000)
})



//scroling-hover orange
$('#scrolling-down').on('mouseover', function() {
  $(this).find('img').attr('src', '/dist/assets/scroll-orange.svg');
});

$('#scrolling-up').on('mouseover', function() {
  $(this).find('img').attr('src', '/dist/assets/scroll-orange.svg');
});

$('#scrolling-down').on('mouseleave', function() {
  $(this).find('img').attr('src', '/dist/assets/scroll.svg');
});

$('#scrolling-up').on('mouseleave', function() {
  $(this).find('img').attr('src', '/dist/assets/scroll.svg');
});




var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    var charMap = {
    "à": "a",
    "á": "a",
    "â": "a",
    "é": "e",
    "è": "e",
    "ê": "e",
    "ë": "e",
    "É": "e",
    "ï": "i",
    "î": "i",
    "ô": "o",
    "ö": "o",
    "û": "u",
    "ù": "u",
    "ü": "u",
    "ñ": "n",
    "-":" ",
};


    var normalize = function (input) {
    $.each(charMap, function (unnormalizedChar, normalizedChar) {
        var regex = new RegExp(unnormalizedChar, 'i');
        input = input.replace(regex, normalizedChar);
        input = input.toUpperCase();
    });
    return input;
};

     const x = normalize(q)
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(x, "i");

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {


      map[str.name] = str.id;

      var normalize = function (input) {
      $.each(charMap, function (unnormalizedChar, normalizedChar) {
          var regex = new RegExp(unnormalizedChar, 'gi');
          input = input.replace(regex, normalizedChar);
          input = input.toUpperCase();

      });
      return input;
  };

        if (normalize(str.name).substr(0,q.length).toUpperCase() == q.toUpperCase() || str.name.substr(0,q.length).toUpperCase() == q.toUpperCase()) {
          matches.push(str.name);
          var res = matches.sort(function (a, b) {
            return a.localeCompare(b);
          });

        }

    });

    cb(matches);

  };
};



// detect touch screen
//https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
function is_touch_device() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');

  return mq(query);
}


function isIE() {
    var ua = window.navigator.userAgent;
    //console.log('user Agent = ' + ua);
    //ua= 'this a test MSIE for IE';
    return (ua.match(/MSIE|Trident/) !== null);
}


//function to show alert if it's IE
function ShowIEAlert(){
    if(isIE()){
      if(language == 'fr')
       alert("Désolé, votre navigateur est trop ancien pour consulter le Mobiliscope. Merci d'utiliser une version récente de Firefox ou Chrome");
      else
       alert("Sorry your browser is too old to display Mobiliscope. Please use a recent version of Firefox or Chrome.");
    }
}


$(document).ready(function() {
  ShowIEAlert();
  // prevent from scroll zoom on touch screens
  if(is_touch_device()){
    //https://stackoverflow.com/questions/52130484/how-to-catch-pinch-and-stretch-gesture-events-in-d3-zoom-d3v4-v5
    var svg = d3.select("body")
    //.append("svg")
    if($('svg').length){
      svg.on("dblclick.zoom", null)
      .on("touchstart.zoom", null)
      .on("mousewheel.zoom", null)
      .on("MozMousePixelScroll.zoom", null);

      $( "body" ).keyup(function( event ) {
        if(event.which == "17"){
          svg.on("wheel.zoom", null);
        }
      });
    }
  }


  $.getJSON( "/cities/cities_list.json", function( data ) {
    init(data, function(){
      $.getScript('/dist/scripts/home-layers.js',function(){
        if (typeof printMap1 !== 'undefined' && $.isFunction(printMap1)) {
          printMap1();
        }
        if (typeof printMap2 !== 'undefined' && $.isFunction(printMap2)) {
          printMap2();
        }
      });



    });
  });


  $('body').on('click',function(e){
  if(e.target.className  != "search-input-btn" && e.target.className  != "typeahead tt-input focus"  && $('#topbar-search').hasClass('focus')){
    $('#topbar-search').removeClass('focus');
    $('.search-input-btn').css("background-image",'url(/dist/assets/search-black.svg)');
  }
})




});
