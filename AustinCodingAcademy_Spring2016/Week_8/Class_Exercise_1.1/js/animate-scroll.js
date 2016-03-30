$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 200) {

            $('#fudge').addClass('animated flipInX');
        }

    });

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 500) {

            $('#myJello').addClass('animated jello infinite');
        }

    });
});