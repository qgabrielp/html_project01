    $(window).scroll(function() {
        var page1top = $('.page1').offset().top;
        var page2top = $('.page2').offset().top;
        var page3top = $('.page3').offset().top;
        var page4top = $('.page4').offset().top;
        if ($(this).scrollTop() > page2top-50) { 
            
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '100%','height': '5%','top': '0px','background-color':'rgba(255,255,255,0.6)'});
            $('#menu>li').css({'float':'left'});
            $('#top_red').addClass('dnone');
        } else {
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '20%','height': '30%','top': '0%','background-color':'rgba(255,255,255,0.0)'});
            $('#menu>li').css({'float':'none'});
            $('#top_red').removeClass('dnone');
        }
        
        if($(this).scrollTop() > page1top-50 && $(this).scrollTop() < page2top){
//            $('#menu').removeClass('on');
            $('#home span').addClass('on');
        }else{
            $('#home span').removeClass('on');
        }
        if($(this).scrollTop() > page2top-50 && $(this).scrollTop() < page3top){
//            $('#menu').removeClass('on');
            $('#skill span').addClass('on');
            if($(this).scrollTop() == page2top){
                $(".ch").gaugeMeter();
               }
        }else{
            $('#skill span').removeClass('on');
        }
        if($(this).scrollTop() > page3top-50 && $(this).scrollTop() < page4top){
//            $('#menu').removeClass('on');
            $('#portfolio span').addClass('on');
        }else{
            $('#portfolio span').removeClass('on');
        }
        if($(this).scrollTop() > page4top-50){
//            $('#menu').removeClass('on');
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
        },1400,"easeOutBounce");
        if(i == 1){
            $(".ch").gaugeMeter();
           }
    });
    
});



$(document).ready(function(){
    $(".ch").gaugeMeter();
});












