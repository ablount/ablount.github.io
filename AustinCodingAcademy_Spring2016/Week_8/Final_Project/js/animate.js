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