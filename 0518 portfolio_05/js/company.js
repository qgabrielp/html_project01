$(document).ready(function(){
    
    $('.topgu').hide();
    $(window).scroll(function(){
        sec1Top = $('.sec1').offset().top - 150;
        sec2Top = $('.sec2').offset().top;
        sec3Top = $('.sec3').offset().top;
        sec4Top = $('.sec4').offset().top;
        if($(this).scrollTop() > 600){
                $('.topgu').stop().fadeIn();
            }else{
                $('.topgu').stop().fadeOut();
            }
        if($(this).scrollTop() < sec1Top){
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu_in>div>span').removeClass('on');
        }
        if($(this).scrollTop() > sec1Top - 90 && $(this).scrollTop() < sec2Top){
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu1').addClass('on_bg');
            $('.submenu1>span').removeClass('on');
            $('.submenu1>span').addClass('on');
        }
        if($(this).scrollTop() > sec2Top - 90 && $(this).scrollTop() < sec3Top){
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu2').addClass('on_bg');
            $('.submenu2>span').removeClass('on');
            $('.submenu2>span').addClass('on');
        }
        if($(this).scrollTop() > sec3Top - 90 && $(this).scrollTop() < sec4Top){
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu3').addClass('on_bg');
            $('.submenu3>span').removeClass('on');
            $('.submenu3>span').addClass('on');
        }
        if($(this).scrollTop() > sec4Top - 90){
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu4').addClass('on_bg');
            $('.submenu4>span').removeClass('on');
            $('.submenu4>span').addClass('on');
        }
    });
    
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop : 0}, 400);
        return false;
    });
    
    $('.submenu1').click(function(){
        $('.submenu_in>div').removeClass('on_bg');
        $('.submenu1').addClass('on_bg');
        $('.submenu_in>div>span').removeClass('on');
        $('.submenu1>span').addClass('on');
        sec1Top = $('.sec1').offset().top - 140;
        $("html,body").stop().animate({
        "scrollTop":sec1Top+"px"
        },500);
    });
    $('.submenu2').click(function(){
        $('.submenu_in>div').removeClass('on_bg');
        $('.submenu2').addClass('on_bg');
        $('.submenu_in>div>span').removeClass('on');
        $('.submenu2>span').addClass('on');
        sec2Top = $('.sec2').offset().top - 50;
        $("html,body").stop().animate({
        "scrollTop":sec2Top+"px"
        },500);
    });
    $('.submenu3').click(function(){
        $('.submenu_in>div').removeClass('on_bg');
        $('.submenu3').addClass('on_bg');
        $('.submenu_in>div>span').removeClass('on');
        $('.submenu3>span').addClass('on');
        sec3Top = $('.sec3').offset().top - 50;
        $("html,body").stop().animate({
        "scrollTop":sec3Top+"px"
        },500);
    });
    $('.submenu4').click(function(){
        $('.submenu_in>div').removeClass('on_bg');
        $('.submenu4').addClass('on_bg');
        $('.submenu_in>div>span').removeClass('on');
        $('.submenu4>span').addClass('on');
        sec4Top = $('.sec4').offset().top - 50;
        $("html,body").stop().animate({
        "scrollTop":sec4Top+"px"
        },500);
    });
    
    $('.submenu1_m').click(function(){
        $('.submenu_in_m>div').removeClass('on_bg');
        $('.submenu1_m').addClass('on_bg');
        $('.submenu_in_m>div>span').removeClass('on');
        $('.submenu1_m>span').addClass('on');
        $('.sec2,.sec3,.sec4').hide();
        $('.sec1').stop().show();
    });
    $('.submenu2_m').click(function(){
        $('.submenu_in_m>div').removeClass('on_bg');
        $('.submenu2_m').addClass('on_bg');
        $('.submenu_in_m>div>span').removeClass('on');
        $('.submenu2_m>span').addClass('on');
        $('.sec1,.sec3,.sec4').hide();
        $('.sec2').stop().show();
    });
    $('.submenu3_m').click(function(){
        $('.submenu_in_m>div').removeClass('on_bg');
        $('.submenu3_m').addClass('on_bg');
        $('.submenu_in_m>div>span').removeClass('on');
        $('.submenu3_m>span').addClass('on');
        $('.sec1,.sec2,.sec4').hide();
        $('.sec3').stop().show();
    });
    $('.submenu4_m').click(function(){
        $('.submenu_in_m>div').removeClass('on_bg');
        $('.submenu4_m').addClass('on_bg');
        $('.submenu_in_m>div>span').removeClass('on');
        $('.submenu4_m>span').addClass('on');
        $('.sec1,.sec2,.sec3').hide();
        $('.sec4').stop().show();
    });
    
    $(window).on('resize', function () {
        var width = $(window).width();
        console.log("aaa"+width);
        if(width > 700){
            $('.sec1,.sec2,.sec3,.sec4').stop().show();
            $('.submenu_in>div').removeClass('on_bg');
            $('.submenu1').addClass('on_bg');
            $('.submenu_in>div>span').removeClass('on');
            $('.submenu1>span').addClass('on');
            }
        if(width < 700){
            $('.sec2,.sec3,.sec4').stop().hide();
            $('.sec1').stop().show();
            $('.submenu_in_m>div').removeClass('on_bg');
            $('.submenu1_m').addClass('on_bg');
            $('.submenu_in_m>div>span').removeClass('on');
            $('.submenu1_m>span').addClass('on');
            $('html, body').stop().animate({scrollTop : 0}, 400);
            }
    });
    
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
    });
    

    
    
    
    
});