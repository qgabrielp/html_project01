$(document).ready(function(){
    
    $('.topgu').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
                $('.topgu').stop().fadeIn();
            }else{
                $('.topgu').stop().fadeOut();
            }
    });
    
    
});