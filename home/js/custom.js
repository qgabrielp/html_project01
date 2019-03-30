﻿    $(window).scroll(function() {
        var page1top = $('.page1').offset().top;
        var page2top = $('.page2').offset().top;
        var page3top = $('.page3').offset().top;
        var page4top = $('.page4').offset().top;
        
        if ($(this).scrollTop() > page2top-50) {
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '100%','height': '5%','top': '0px','background-color':'rgba(255,255,255,0.6)'});
            $('#menu>li').css({'float':'left'});
            $('#top_red').addClass('dnone');
            $('#logo').addClass('logo_sm');
        } else {
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '20%','height': '30%','top': '0%','background-color':'rgba(255,255,255,0.0)'});
            $('#menu>li').css({'float':'none'});
            $('#top_red').removeClass('dnone');
            $('#logo').removeClass('logo_sm');
        }
        
        if($(this).scrollTop() > page1top-50 && $(this).scrollTop() < page2top){
            $('#home span').addClass('on');
        }else{
            $('#home span').removeClass('on');
        }
        if($(this).scrollTop() > page2top-50 && $(this).scrollTop() < page3top){
            $('#skill span').addClass('on');
            $(".ch_tx").addClass('ct_tx_d');
            $("#ch7").stop().animate({"width":"125px", "height":"125px"}, 1000);
        }else{
            $('#skill span').removeClass('on');
            $(".ch_tx").removeClass('ct_tx_d');
//            $("#ch7").stop().animate({"width":"100%", "height":"100%"}, 1000);
        }
        if($(this).scrollTop() > page3top-50 && $(this).scrollTop() < page4top){
            $('#portfolio span').addClass('on');
        }else{
            $('#portfolio span').removeClass('on');
        }
        if($(this).scrollTop() > page4top-50){
            $('#contact span').addClass('on');
        }else{
            $('#contact span').removeClass('on');
        }
    });

$(document).ready(function(){
    
    var moveTop = null;;
    $("#menu>li").click(function(){
        var i = $(this).index();
        moveTop=$('main>.page').eq(i).offset().top;
        console.log(i+"aa");
        $("html,body").stop().animate({
        "scrollTop":moveTop+"px"
        },1000,);
        if(i == 2){
            e.preventDefault();
            $(".ch").gaugeMeter();
            $(".ch_tx").addClass('ct_tx_d');
            $("#ch7").stop().animate({"width":"125px", "height":"125px"}, 1000);
           }else{
               $(".ch").gaugeMeter();
               $(".ch_tx").removeClass('ct_tx_d');
               $("#ch7").stop().animate({"width":"100%", "height":"100%"}, 100);
           }
    });
    
});



$(document).ready(function(){
    $(".ch").gaugeMeter();
});












