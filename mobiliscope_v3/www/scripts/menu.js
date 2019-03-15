var map = {};
var item = {};
var language = $('body').attr('lang');
var cities = Array();

function init (data, cb){
    // GOOGLE ANALYTICS
    /*
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


    ga('create', 'UA-72654922-2',{
      'cookieName': 'gaCookie',
      'cookieDomain': 'auto',
      'cookieExpires': 60 * 60 * 24 * 28 * 13  // Time in seconds.
    });

    ga('set', 'anonymizeIp', true);


    ga('send', 'pageview');
    */

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.full-menu').toggleClass('active');
        $('.toggle-nav .fas').toggleClass('fa-angle-double-up').toggleClass('fa-bars');
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

    },
    {
      limit: 15,
      name: 'cities',
      source: substringMatcher(data),
    });

    $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
      var cityPage = '/' + language + '/geoviz/' + map[suggestion];
      window.location = cityPage;

    });

    cb();

}


var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
        map[str.name] = str.id;
        if( str.name == q || str.name_up.toLowerCase() == q.toLowerCase()  ){
          matches = [str.name];
          return;
        }

        if (substrRegex.test(str.name) || substrRegex.test(str.name_up) ) {
            matches.push(str.name);
        }
    });


    cb(matches);
  };
};

function enable_cookies(){
  window['ga-disable-UA-72654922-2'] = false;
  window['ga-enable-UA-72654922-2'] = true;

}

function disable_cookies(){
  window['ga-disable-UA-72654922-2'] = true;

}

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

$(document).ready(function() {

  // prevent from scroll zoom on touch screens
        if(is_touch_device()){
          //https://stackoverflow.com/questions/52130484/how-to-catch-pinch-and-stretch-gesture-events-in-d3-zoom-d3v4-v5
          if($('svg').length){
            svg.on("dblclick.zoom", null)
            .on("touchstart.zoom", null)
            .on("mousewheel.zoom", null)
            .on("MozMousePixelScroll.zoom", null);

            $( "body" ).keyup(function( event ) {
              if(event.which == "17"){
                  console.log('is key ctrl down');
                  svg.on("wheel.zoom", null);
              }
            });
          }


        }


  $.getJSON( "/cities/cities_list.json", function( data ) {
    init(data, function(){
       $.getScript('/scripts/home-layers.js',function(){
          if (typeof printMap !== 'undefined' && $.isFunction(printMap)) {
          printMap();
        }
      });

    });
  });


  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000",
        "text": "#ffffff"
      },
      "button": {
        "background": "transparent",
        "text": "#ffffff",
        "border": "#e29424"
      },
      revokable:true,
    },
    "type": "opt-out",
    "content": {
      "href": "/"+language+"/info/about/license",
      "text": "#000"
    },
    onInitialise: function (status) {
      var didConsent = this.hasConsented();
      if (!didConsent) {
        disable_cookies();
      } else {
        enable_cookies();
      }
    },
    onStatusChange: function(status, chosenBefore) {
      var didConsent = this.hasConsented();
       if (!didConsent) {
        disable_cookies();
      } else {
        enable_cookies();
      }
    },

    onRevokeChoice: function() {
      disable_cookies();
    },
  })



});
