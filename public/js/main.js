$(document).ready(function() {

// PARALLAX SCRIPT

// The plugin code
(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
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
$('.section_1 .inner').parallax({ "coeff":-0.05 });
$('.section_1 .inner_left').parallax({ "coeff":0.08 });

// SMOOTH SCROLLING 

        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                  /*scroll speed */
                }, 2000);
                return false;
              }
            }
          });
        });

});



