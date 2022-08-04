$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navbar-row").addClass("sticky");
    } else {
        $(".navbar-row").removeClass("sticky");
    }
});


$(document).ready(function() {
    $(".view-details1").on("click", function() {
        if ($(this).html() == 'View Details') {
            var txt = $(".lower-body1").is(':visible') ? 'View Details' : 'Hide Details';
            $(".view-details1").text(txt);
            $(".lower-body1").addClass("showContent");
        } else {
            var text;
            if ($(".view-details1").html() == 'Hide Details') text = 'View Details';
            $(".view-details1").text(text);
            $(".lower-body1").removeClass("showContent");
        }
    });

    $(".view-details2").on("click", function() {
        if ($(this).html() == 'View Details') {
            var txt = $(".lower-body2").is(':visible') ? 'View Details' : 'Hide Details';
            $(".view-details2").text(txt);
            $(".lower-body2").addClass("showContent");
        } else {
            var text;
            if ($(".view-details2").html() == 'Hide Details') text = 'View Details';
            $(".view-details2").text(text);
            $(".lower-body2").removeClass("showContent");
        }
    });

    $(".view-details3").on("click", function() {
        if ($(this).html() == 'View Details') {
            var txt = $(".lower-body3").is(':visible') ? 'View Details' : 'Hide Details';
            $(".view-details3").text(txt);
            $(".lower-body3").addClass("showContent");
        } else {
            var text;
            if ($(".view-details3").html() == 'Hide Details') text = 'View Details';
            $(".view-details3").text(text);
            $(".lower-body3").removeClass("showContent");
        }
    });

    $(".view-details4").on("click", function() {
        if ($(this).html() == 'View Details') {
            var txt = $(".lower-body4").is(':visible') ? 'View Details' : 'Hide Details';
            $(".view-details4").text(txt);
            $(".lower-body4").addClass("showContent");
        } else {
            var text;
            if ($(".view-details4").html() == 'Hide Details') text = 'View Details';
            $(".view-details4").text(text);
            $(".lower-body4").removeClass("showContent");
        }
    });

    $(".burger").on("click", function() {
        if ($(".burger").hasClass("show")) {
            $(".burger").removeClass('show');
            $(".main-row").removeClass('show');
            $(".navbar-sections").removeClass('show');
        } else {
            $(".burger").addClass('show');
            $(".main-row").addClass('show');
            $(".navbar-sections").addClass('show');

        }
    });
});