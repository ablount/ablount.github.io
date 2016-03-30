$(document).ready(function () {

    // Sandwich Flip //

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 610) {

            $('#sammich').addClass('animated flip');
        }

        console.log(verticalScroll);
    });

    // Four Items //

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 700) {

            $('#my_1').addClass('animated fadeInRightBig');
            $('#my_1').removeClass('hide_me');
            $('#my_2').addClass('animated fadeInDownBig');
            $('#my_2').removeClass('hide_me');
            $('#my_3').addClass('animated fadeInLeftBig');
            $('#my_3').removeClass('hide_me');
            $('#my_4').addClass('animated fadeInUpBig');
            $('#my_4').removeClass('hide_me');
        }

    });

});