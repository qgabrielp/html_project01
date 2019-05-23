$(document).ready(function(){
    $('.topgu').stop().hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
                $('.topgu').stop().fadeIn();
            }else{
                $('.topgu').stop().fadeOut();
            }
    });
    
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop : 0}, 400);
        return false;
    });
    
    $('.bg').stop().hide();
    $('#mmbtn').click(function(){
        $('.main_menu').stop().animate({'left' : '0%',}, 600);
        $('.bg').stop().fadeIn();
    });
    $('.close').click(function(){
        $('.main_menu').stop().animate({'left' : '100%'}, 600);
        $('.bg').stop().fadeOut();
    });
    $('.main_menu>ul>li').click(function(){
        $('.main_menu').stop().animate({'left' : '100%'}, 600);
        $('.bg').stop().fadeOut();
    });
    
});