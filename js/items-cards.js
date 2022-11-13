$(document).ready(function() {
    $('.wheele_img').height($('.wheele_img').width());

    $('.item-card > .wheele_img').each(function() {
        $(this).hover(function() {
            $(this).children('.image_link').animate({
                opacity: 0
            }, 500);
            $(this).children('.image_hover').animate({
                opacity: 1
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