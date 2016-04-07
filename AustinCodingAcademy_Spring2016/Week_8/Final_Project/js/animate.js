    $(document).ready(function () {

        var mq = window.matchMedia('@media screen and (max-width: 991px)');
        if (mq.matches) {


            // SECTION INTROS //

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 100) {

                    $('#education').addClass('animated fadeInRightBig');
                    $('#education').removeClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 175) {

                    $('#skills').addClass('animated fadeInLeftBig');
                    $('#skills').removeClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 250) {

                    $('#work').addClass('animated fadeInRightBig');
                    $('#work').removeClass('hide_me');
                    $('#down_arrow').addClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 25) {

                    $('#portfolio').addClass('animated fadeInLeftBig');
                    $('#portfolio').removeClass('hide_me');
                }

            });


        } else {
            
            // PHONE ANIMATIONS //

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 175) {

                    $('#education').addClass('animated fadeInLeftBig');
                    $('#education').removeClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 100) {

                    $('#skills').addClass('animated fadeInRightBig');
                    $('#skills').removeClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 250) {

                    $('#work').addClass('animated fadeInRightBig');
                    $('#work').removeClass('hide_me');
                    $('#down_arrow').addClass('hide_me');
                }

            });

            $(window).scroll(function () {

                var verticalScroll = $(this).scrollTop();

                if (verticalScroll >= 25) {

                    $('#portfolio').addClass('animated fadeInLeftBig');
                    $('#portfolio').removeClass('hide_me');
                }

            });

        }

    });

/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}(jQuery));

$('.bg-1,.bg-3').parallax({
	speed :	0.15
});

$('.bg-2').parallax({
	speed :	0.25
});