(function ($) {
  $.fn.swipeDetector = function (options) {
    // States: 0 - no swipe, 1 - swipe started, 2 - swipe released
    var swipeState = 0;
    // Coordinates when swipe started
    var startX = 0;
    var startY = 0;
    // Distance of swipe
    var pixelOffsetX = 0;
    var pixelOffsetY = 0;
    // Target element which should detect swipes.
    var swipeTarget = this;
    var defaultSettings = {
      // Amount of pixels, when swipe don't count.
      swipeThreshold: 70,
      // Flag that indicates that plugin should react only on touch events.
      // Not on mouse events too.
      useOnlyTouch: false
    };

    // Initializer
    (function init() {
      options = $.extend(defaultSettings, options);
      // Support touch and mouse as well.
      swipeTarget.on('mousedown touchstart', swipeStart);
      $('html').on('mouseup touchend', swipeEnd);
      $('html').on('mousemove touchmove', swiping);
    })();

    function swipeStart(event) {
      if (options.useOnlyTouch && !event.originalEvent.touches)
        return;

      if (event.originalEvent.touches)
        event = event.originalEvent.touches[0];

      if (swipeState === 0) {
        swipeState = 1;
        startX = event.clientX;
        startY = event.clientY;
      }
    }

    function swipeEnd(event) {
      if (swipeState === 2) {
        swipeState = 0;

        if (Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
           Math.abs(pixelOffsetX) > options.swipeThreshold) { // Horizontal Swipe
          if (pixelOffsetX < 0) {
            swipeTarget.trigger($.Event('swipeLeft.sd'));
            console.log('Left');
          } else {
            swipeTarget.trigger($.Event('swipeRight.sd'));
            console.log('Right');
          }
        } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) { // Vertical swipe
          if (pixelOffsetY < 0) {
            swipeTarget.trigger($.Event('swipeUp.sd'));
            console.log('Up');
          } else {
            swipeTarget.trigger($.Event('swipeDown.sd'));
            console.log('Down');
          }
        }
      }
    }

    function swiping(event) {
      // If swipe don't occuring, do nothing.
      if (swipeState !== 1)
        return;


      if (event.originalEvent.touches) {
        event = event.originalEvent.touches[0];
      }

      var swipeOffsetX = event.clientX - startX;
      var swipeOffsetY = event.clientY - startY;

      if ((Math.abs(swipeOffsetX) > options.swipeThreshold) ||
          (Math.abs(swipeOffsetY) > options.swipeThreshold)) {
        swipeState = 2;
        pixelOffsetX = swipeOffsetX;
        pixelOffsetY = swipeOffsetY;
        console.log(pixelOffsetX);
      }
    }

    return swipeTarget; // Return element available for chaining.
  }

}(jQuery));
