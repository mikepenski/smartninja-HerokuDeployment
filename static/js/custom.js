/**
 * Main Script
 */
jQuery(document).ready(function($){

    $body = $('body');

    var breakpoint = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    };
    /**
     * Cookies
     */

     /*
    if(Cookies.get('cookies_accepted') === undefined){
        $body.append('<div id="cookie-notice"><p>Wir verwenden Cookies, um Ihnen den bestmöglichen Service zu gewährleisten. Weitere Informationen finden Sie <a href="'+bloginfo.datenschutz+'">hier</a></p><button class="btn btn-block btn-primary">Verstanden</button></div>');
    }

    if($('#cookie-notice').length > 0){
        $('#cookie-notice button').on('click', function(){
            Cookies.set('cookies_accepted', true);
            $(this).parent('#cookie-notice').fadeOut();
        });
    }

*/

    /**
     * Fixed header hide
     */

    $(document).ready(function () {

    'use strict';

     var c, currentScrollTop = 0,
         navbar = $('header');

     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    });

    /**
     * Slider
     */

    $('#header-slider .slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.media-reports-nav-slider',
       //appendArrows: '.media-reports-arrows',
        //appendDots: '.media-reports-dots',
        prevArrow: '<button class="btn prev"><i class="icon-circle-arrow-left"></i></button>',
        nextArrow: '<button class="btn next"><i class="icon-circle-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: breakpoint.md,
                settings: {
                    adaptiveHeight: true,
                    dots: false
                }
            },
        ]
    });

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('body').toggleClass('noscroll');
        $('#overlay').toggleClass('open');
    });



});
