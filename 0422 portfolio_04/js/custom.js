$(document).ready(function(){
    new WOW().init();
    
    $('.menu_text').click(function(){
        $('.menu_text').stop().fadeOut(1);
        $('.close_text').stop().fadeIn(100);
        $('.menu').stop().fadeIn();
    });
    $('.close_text').click(function(){
        $('.close_text').stop().fadeOut(1);
        $('.menu_text').stop().fadeIn(100);
        $('.menu').stop().fadeOut();
    });
});