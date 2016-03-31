$(document).ready(function () {

    // Top Boxes //

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 2) {

            $('.topleftbox').addClass('animated fadeInRightBig');
            $('.topleftbox').removeClass('hide_me');
            $('.toprightbox').addClass('animated fadeInDownBig');
            $('.toprightbox').removeClass('hide_me');
            $('.bottomleftbox').addClass('animated fadeInLeftBig');
            $('.bottomleftbox').removeClass('hide_me');
            $('.bottomrightbox').addClass('animated fadeInUpBig');
            $('.bottomrightbox').removeClass('hide_me');
        }

        console.log(verticalScroll);
    });

    // Bottom Boxes //

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 50) {

            $('.topleftbox2').addClass('animated fadeInRightBig');
            $('.topleftbox2').removeClass('hide_me');
            $('.toprightbox2').addClass('animated fadeInDownBig');
            $('.toprightbox2').removeClass('hide_me');
            $('.bottomleftbox2').addClass('animated fadeInLeftBig');
            $('.bottomleftbox2').removeClass('hide_me');
            $('.bottomrightbox2').addClass('animated fadeInUpBig');
            $('.bottomrightbox2').removeClass('hide_me');
        }

    });

});