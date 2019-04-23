$(document).ready(function(){
    new WOW().init();
    
    $('.menu_text').click(function(){
        $('.menu_text').stop().fadeOut(1);
        $('.close_text').stop().fadeIn(100);
        $('.menu').stop().fadeIn();
        $('.kren').stop().fadeIn(1000);
        $('.rei').stop().fadeIn(1000);
        $('.gr_sow').addClass('cross_gr');
        $('.red_sow').addClass('cross_red');
//        $("html").css("overflow","hidden");
    });
    $('.close_text').click(function(){
        $('.close_text').stop().fadeOut(1);
        $('.menu_text').stop().fadeIn(100);
        $('.menu').stop().fadeOut();
        $('.kren').stop().fadeOut();
        $('.rei').stop().fadeOut();
        $('.gr_sow').removeClass('cross_gr');
        $('.red_sow').removeClass('cross_red');
//        $("html").css("overflow","scroll");
    });
    $('.swiper-button-next').click(function(){
        $('.c2_sl_text').on(function(){
            new WOW().init();
        });  
    });
    
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
    });
    $('.scroll_down').click(function(){
        var cont2top = $('.cont02').offset().top + 150;
        $('html, body').stop().animate({scrollTop : cont2top}, 800);
        return false;
    });
    $('#news').addClass('on');
    $('#news').click(function(){
        $('#news').addClass('on');
        $('#video').removeClass('on');
        $('#tab1').stop().fadeIn();
        $('#tab2').stop().hide();
    });
    $('#video').click(function(){
        $('#video').addClass('on');
        $('#news').removeClass('on');
        $('#tab2').stop().fadeIn();
        $('#tab1').stop().hide();
    });
});