$(document).ready(function(){
    $("#menu_u>li>ul").hide();
    $("#menu_bg").hide();
    $("#menu_u>li").hover(function(){
        var i = $(this).index();
        $("#menu_u>li>ul").stop().slideDown(300);
        $("#menu_bg").stop().slideDown(300);
    }).mouseleave(function(){
        $("#menu_u>li>ul").stop().slideUp(300);
        $("#menu_bg").stop().slideUp(300);
    });
    $("#search_ac").hide();
    $("#search").click(function(){
        $("#search_ac").stop().slideDown(300);
    });
    $("#search_close").click(function(){
        $("#search_ac").stop().slideUp(300);
    });
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10){
            $('header').addClass('hd_big');
        } else {
            $('header').removeClass('hd_big');
            }
    });
});
















