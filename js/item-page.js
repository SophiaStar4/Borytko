$(document).ready(function() {
    let header_height = $('header').height();
    let overviewVideo_height_hover = $(window).height() * 0.9 - header_height;

    let item_image_mini_one = true;
    let item_image_mini_two = false;
    let item_image_mini_three = false;

    $('.overview-video').css('margin-top', header_height);

    $('.overview-video').hover(function() {
        $('.overview-video').animate({
            height: overviewVideo_height_hover
        }, 500);
    });
    $('.overview-video').mouseleave(function() {
        $('.overview-video').animate({
            height: '32vh'
        }, 500);
    });

    $('.item-image_mini').each(function() {
        $(this).click(function() {
            let item_image_name = $(this).attr('name');
            switch (item_image_name) {
                case 'item_image_one':
                    item_image_mini_one = true;
                    item_image_mini_two = false;
                    item_image_mini_three = false;
                    break;
                case 'item_image_two':
                    item_image_mini_one = false;
                    item_image_mini_two = true;
                    item_image_mini_three = false;
                    break;
                case 'item_image_three':
                    item_image_mini_one = false;
                    item_image_mini_two = false;
                    item_image_mini_three = true;
                    break;
            }
            if (item_image_mini_one === true) {
                $('[name="item_image_one"]').css('filter', 'blur(4px)');
                $('[name="item_image_two"]').css('filter', 'none');
                $('[name="item_image_three"]').css('filter', 'none');
                let item_image_main = $(this).html();
                $('.item-image_main').html(item_image_main);
            } else if (item_image_mini_two === true) {
                $('[name="item_image_one"]').css('filter', 'none');
                $('[name="item_image_two"]').css('filter', 'blur(4px)');
                $('[name="item_image_three"]').css('filter', 'none');
                let item_image_main = $(this).html();
                $('.item-image_main').html(item_image_main);
            } else if (item_image_mini_three === true) {
                $('[name="item_image_one"]').css('filter', 'none');
                $('[name="item_image_two"]').css('filter', 'none');
                $('[name="item_image_three"]').css('filter', 'blur(4px)');
                let item_image_main = $(this).html();
                $('.item-image_main').html(item_image_main);
            }
        });
    });
});