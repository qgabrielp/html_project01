$(document).ready(function(){
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
    
});