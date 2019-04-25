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
   
    $(window).scroll(function(){
        var tst = $(this).scrollTop();
        var op = 1;
        console.log("aaa"+tst);
        if($(this).scrollTop() > 4800){
            $('.move_text').addClass('text_fixed');
            $('.move_text').stop().animate({"opacity":op-tst/6300},10);
//            $('.move_text').stop().animate({"top":tst/8+"%"},300);
        }else{
//            $('.move_text').removeClass('text_fixed');
//            $('.move_text').stop().animate({"position":"absolute"},300);
//            $('.move_text').stop().animate({"top":"50%"},300);
        }
        if($(this).scrollTop() > 1000){
            $('.gototop').stop().fadeIn();
        }else{
            $('.gototop').stop().fadeOut();
        }
        if($(this).scrollTop() < 4799){
           $('.move_text').removeClass('text_fixed');
            $('.move_text').stop().animate({"opacity":"1"},300);
           }
        
        
    });
    
    $('.gototop').click(function(){
        $('html, body').stop().animate({scrollTop : 0}, 400);
        return false;
    });
    
});