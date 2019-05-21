$(document).ready(function(){
    
    $('.sec4_sl_box_2').hide();
    $('.sec4_sl_box_3').hide();
    $('.sec4_sl>div').click(function(){
        var i = $(this).index();
        $('.sec4_sl>div').removeClass('select');
        $('.sec4_sl>div').eq(i).addClass('select');
        $('.sec4_sl>div>p').removeClass('select_bb');
        $('.sec4_sl>div>p').eq(i).addClass('select_bb');
        $('.sec4_sl_box>div').hide();
        $('.sec4_sl_box>div').eq(i).show();
    });
    
    $('.topgu').hide();
    $(window).scroll(function(){
        sec2Top = $('.sec2').offset().top - 90;
        sec5Top = $('.sec5').offset().top;
        sec6Top = $('.sec6').offset().top;
        sec7Top = $('.sec7').offset().top;
        
        if($(this).scrollTop() > 1000){
            $('.topgu').stop().fadeIn();
        }else{
            $('.topgu').stop().fadeOut();
        }
        if($(this).scrollTop() < sec2Top){
            $('.main_menu>ul>li>a').removeClass('on');
        }
        if($(this).scrollTop() > sec2Top - 90 && $(this).scrollTop() < sec5Top){
            $('.main_menu>ul>li>a').removeClass('on');
            $('.menu1').addClass('on');
        }
        if($(this).scrollTop() > sec5Top - 90 && $(this).scrollTop() < sec6Top){
            $('.main_menu>ul>li>a').removeClass('on');
            $('.menu2').addClass('on');
        }
        if($(this).scrollTop() > sec6Top - 90 && $(this).scrollTop() < sec7Top){
            $('.main_menu>ul>li>a').removeClass('on');
            $('.menu3').addClass('on');
        }
        if($(this).scrollTop() > sec7Top - 90 ){
            $('.main_menu>ul>li>a').removeClass('on');
            $('.menu4').addClass('on');
        }
    });
    
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop : 0}, 400);
        return false;
    });
    
    $('.menu1').click(function(){
        $('.main_menu>ul>li>a').removeClass('on');
        $(this).addClass('on');
        sec2Top = $('.sec2').offset().top - 90;
        $("html,body").stop().animate({
        "scrollTop":sec2Top+"px"
        },500);
    });
    $('.menu2').click(function(){
        $('.main_menu>ul>li>a').removeClass('on');
        $(this).addClass('on');
        sec5Top = $('.sec5').offset().top;
        $("html,body").stop().animate({
        "scrollTop":sec5Top+"px"
        },500);
    });
    $('.menu3').click(function(){
        $('.main_menu>ul>li>a').removeClass('on');
        $(this).addClass('on');
        sec6Top = $('.sec6').offset().top;
        $("html,body").stop().animate({
        "scrollTop":sec6Top+"px"
        },500);
    });
    $('.menu4').click(function(){
        $('.main_menu>ul>li>a').removeClass('on');
        $(this).addClass('on');
        sec7Top = $('.sec7').offset().top;
        $("html,body").stop().animate({
        "scrollTop":sec7Top+"px"
        },500);
    });
    
    $('#mmbtn').click(function(){
        $('.main_menu').stop().animate({'left' : '0%',}, 600);
        $('.bg').stop().fadeIn();
        
    });
    $('.colse').click(function(){
        $('.main_menu').stop().animate({'left' : '100%'}, 600);
        $('.bg').stop().fadeOut();
    });
    $('.main_menu>ul>li').click(function(){
        $('.main_menu').stop().animate({'left' : '100%'}, 600);
    });
});















