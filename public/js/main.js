$(document).ready(function() {

// PARALLAX SCRIPT

// The plugin code
(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            // "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "0 "+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);
// call the plugin
// $('.section_1').parallax({ "coeff":-0.65 });
$('.section_1 .inner').parallax({ "coeff":-0.09 });
$('.section_1 .inner_left').parallax({ "coeff":0.08 });

// GOOGLE MAPS API

function initialize() {

      var myLatLng = {lat: 40.7079436, lng: -74.0063315};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
}
      google.maps.event.addDomListener(window, 'load', initialize);

});



