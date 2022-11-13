$(document).ready(function() {
    let width_wind = $(window).width();

    $('.darking-wheele').hover(function() {
        $(this).children('.image_hover').animate({
            opacity: 1
        }, 500);
    });

    $('.darking-wheele').mouseleave(function() {
        $(this).children('.image_hover').animate({
            opacity: 0
        }, 300);
    });

    $('.new-items_inner article').each(function() {
        $(this).hover(function() {
            if (width_wind > 1024) {
                $(this).find('.first-part').animate({
                    marginTop: '-124px'
                }, 500);
            }
            if (width_wind <= 1024 && width_wind > 800) {
                $(this).find('.second-part').animate({
                    top: '172px',
                    opacity: 1
                }, 500);
            } else if (width_wind <= 800 && width_wind > 640) {
                $(this).find('.second-part').animate({
                    top: '112px',
                    opacity: 1
                }, 500);
            } else if (width_wind > 1024) {
                $(this).find('.second-part').animate({
                    top: '152px',
                    opacity: 1
                }, 500);
            }
        });
        $(this).mouseleave(function() {
            if (width_wind > 1024) {
                $(this).find('.first-part').animate({
                    marginTop: '0'
                }, 300);
                $(this).find('.second-part').animate({
                    top: '300px',
                    opacity: 0
                }, 300);
            }
        });
    });

    $('.new-items_inner .wheele_img').each(function() {
        $(this).hover(function() {
            $(this).children('.image_hover').animate({
                opacity: 1
            }, 500);
            $(this).children('.image_link').animate({
                opacity: 0
            }, 500);
        });

        $(this).mouseleave(function() {
            $(this).children('.image_link').animate({
                opacity: 1
            }, 300);
            $(this).children('.image_hover').animate({
                opacity: 0
            }, 300);
        });
    });
});