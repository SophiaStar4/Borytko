$(document).ready(function() {
    let navigation_fullsize;
    let burger_menu = $('.burger-menu').detach();
    let width_wind = $(window).width();
    let call_back_text = 'Заявка на звонок';
    let call_back_image = '<span class="icon-phone-call-free-icon-font"></span>';
    let call_back_popup = '<aside class="call-back_popup"><div class="call-back_popup_window"><button class="cross">закрыть</button><h2>Заявка на звонок</h2><form action="#"><input type="text" name="full_name" placeholder="ФИО"><input type="text" name="telephone" placeholder="Номер телефона"><input type="text" name="auto_brend" placeholder="Марка автомобиля"><input type="text" name="auto_model" placeholder="Модель автомобиля"><input type="text" name="wheele_model" placeholder="Модель дисков"><textarea name="comments" id="" cols="30" rows="10" placeholder="Комментарии..."></textarea><label for="" class="privacy_check"><input type="checkbox" name="privacy" id="privacy-checkbox"><p class="checkbox-descrip">Я согласен(-на) на обработку моих <a href="#">персональных данных</a></p></label><input type="button" name="send-call-back_form" value="Отправить"></form></div></aside>';
    
    
    if (width_wind <= 768) {
        navigation_fullsize = $('.header_inner > nav').detach();
        burger_menu.appendTo('.wrapper');
        $('.call-back').html(call_back_image);
    } else {
        burger_menu = $('.burger-menu').detach();
        $('.logotype').after(navigation_fullsize);
        $('.call-back').html(call_back_text);
    }

    $('.burger-icon').click(function() {
        if ($('.burger-icon').hasClass('active')) {
            $('.burger-icon, .burger-menu, .burger-menu nav').removeClass('active');
            $('.burger-icon > img').animate({
                borderSpacing: -360
            }, {
                step: function(now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 1000,
                complete: function() {
                    $(this).css('border-spacing', '0');
                }
            }, 'swing');
        } else {
            $('.burger-icon, .burger-menu, .burger-menu nav').addClass('active');
            $('.burger-icon > img').animate({
                borderSpacing: 360
            }, {
                step: function(now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 1000,
                complete: function() {
                    $(this).css('border-spacing', '0');
                }
            }, 'swing');
        }
    });

    $('.call-back').click(function() {
        $('.call-back_popup').toggleClass('active');
    });
    $('.icon-cross').click(function() {
        $('.call-back_popup').toggleClass('active');
    });
});