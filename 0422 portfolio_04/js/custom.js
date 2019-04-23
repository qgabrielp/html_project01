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
    });
    $('.close_text').click(function(){
        $('.close_text').stop().fadeOut(1);
        $('.menu_text').stop().fadeIn(100);
        $('.menu').stop().fadeOut();
        $('.kren').stop().fadeOut();
        $('.rei').stop().fadeOut();
        $('.gr_sow').removeClass('cross_gr');
        $('.red_sow').removeClass('cross_red');
    });
    
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});