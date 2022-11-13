$(document).ready(function() {
    $('.filters').css('margin-top', $('header').height());

    let spec_one_button = true;
    let spec_two_button = false;
    let spec_three_button = false;
    let spec_four_button = false;
    let spec_list = ['one', 'two', 'three', 'four'];

    let series_one_button = true;
    let series_two_button = false;
    let series_three_button = false;
    let series_list = ['one', 'two', 'three'];

    $('.button_item').each(function() {
        $(this).hover(function() {
            $(this).find('.icon-exclamation-thick').animate({
                opacity: 1
            }, 300);
        });
        $(this).mouseleave(function() {
            $(this).find('.icon-exclamation-thick').animate({
                opacity: 0
            }, 300);
        });

        $(this).click(function() {
            if ($(this).parent().hasClass('specifics')) {
                let spec_name = $(this).attr('name');
                switch (spec_name) {
                    case 'spec_one':
                        spec_one_button = true;
                        spec_two_button = false;
                        spec_three_button = false;
                        spec_four_button = false;
                        break;
                    
                    case 'spec_two':
                        spec_one_button = false;
                        spec_two_button = true;
                        spec_three_button = false;
                        spec_four_button = false;
                        break;
                    
                    case 'spec_three':
                        spec_one_button = false;
                        spec_two_button = false;
                        spec_three_button = true;
                        spec_four_button = false;
                        break;
                    
                    case 'spec_four':
                        spec_one_button = false;
                        spec_two_button = false;
                        spec_three_button = false;
                        spec_four_button = true;
                        break;
                }
    
                if (spec_one_button === true) {
                    for (let i = 0; i < 4; i++) {
                        if(spec_list[i] === 'one') {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                } else if (spec_two_button === true) {
                    for (let i = 0; i < 4; i++) {
                        if(spec_list[i] === 'two') {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                } else if (spec_three_button === true) {
                    for (let i = 0; i < 4; i++) {
                        if(spec_list[i] === 'three') {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                } else if (spec_four_button === true) {
                    for (let i = 0; i < 4; i++) {
                        if(spec_list[i] === 'four') {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="spec_' + spec_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                }
            } else if ($(this).parent().hasClass('series')) {
                let series_name = $(this).attr('name');
                switch (series_name) {
                    case 'series_one':
                        series_one_button = true;
                        series_two_button = false;
                        series_three_button = false;
                        break;
                    
                    case 'series_two':
                        series_one_button = false;
                        series_two_button = true;
                        series_three_button = false;
                        break;
                    
                    case 'series_three':
                        series_one_button = false;
                        series_two_button = false;
                        series_three_button = true;
                        break;
                }
    
                if (series_one_button === true) {
                    for (let i = 0; i < 3; i++) {
                        if(series_list[i] === 'one') {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                } else if (series_two_button === true) {
                    for (let i = 0; i < 3; i++) {
                        if(series_list[i] === 'two') {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                } else if (series_three_button === true) {
                    for (let i = 0; i < 3; i++) {
                        if(series_list[i] === 'three') {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB7',
                                'color': '#1F1C31'
                            });
                        } else {
                            $('[name="series_' + series_list[i] + '"] > button').css({
                                'background-color': '#3DBAB700',
                                'color': '#FFF'
                            });
                        }
                    }
                }
            }
        });
    });
});