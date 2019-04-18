    $(window).scroll(function() {
        var page1top = $('.page1').offset().top;
        var page2top = $('.page2').offset().top;
        var page3top = $('.page3').offset().top;
        var page4top = $('.page4').offset().top;
        
        if ($(this).scrollTop() > page2top-50) {
//            $('header').stop().animate({'position': 'fixed','left': '0%','width': '100%','height': '5%','top': '0px','background-color':'rgba(255,255,255,0.6)'}, 600);
            $('header').removeClass('header_sm');
            $('header').addClass('header_la');
            $('#menu').css({'left':'10%'});
//            $('#menu>li').css({'float':'left'});
            $('#menu>li').addClass('menu_li_la');
            $('#top_red').addClass('dnone');
            $('#logo').addClass('logo_sm');
        } else {
//            $('header').stop().animate({'position': 'fixed','left': '0%','width': '20%','height': '30%','top': '0%','background-color':'rgba(255,255,255,0.0)'}, 600);
            $('header').addClass('header_sm');
            $('header').removeClass('header_la');
            $('#menu').css({'left':'0%'});
//            $('#menu>li').css({'float':'none'});
            $('#menu>li').removeClass('menu_li_la');
            $('#top_red').removeClass('dnone');
            $('#logo').removeClass('logo_sm');
        }
        
        if($(this).scrollTop() > page1top-50 && $(this).scrollTop() < page2top){
            $('#home span').addClass('on');
        }else{
            $('#home span').removeClass('on');
        }
        if($(this).scrollTop() > page2top-20 && $(this).scrollTop() < page3top){
            $('#skill span').addClass('on');
            $(".ch_tx").addClass('ct_tx_d');
            $("#ch7").stop().animate({"width":"125px", "height":"125px"}, 600);
            $(".ch").gaugeMeter();
        }else{
            $('#skill span').removeClass('on');
            $(".ch_tx").removeClass('ct_tx_d');
//            $("#ch7").stop().animate({"width":"70%", "height":"70%"}, 100);
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
        
        $("#menu_btn").click(function(){
            $("#menu").toggle();
        });
        
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
            $("#ch7").stop().animate({"width":"125px", "height":"125px"}, 600);
           }else{
               $(".ch").gaugeMeter();
               $(".ch_tx").removeClass('ct_tx_d');
               $("#ch7").stop().animate({"width":"70%", "height":"70%"}, 100);
           }
    });
    $(window).scroll(function(){
                if ($(this).scrollTop() > 1000){
                    $('#gototop').fadeIn();
                } else {
                    $('#gototop').fadeOut();
                }
            });
    $("#gototop").click(function(){
        $("html,body").stop().animate({"scrollTop":"0"}, 600);
    });
    
    $("main .page").each(function(){
            $(this).on("mousewheel",function(e){
                e.preventDefault();
                var delta = 0; // delta 마우스휠 델타값(-120:내렸을때,120:올렸을때)
                delta = event.wheelDelta/120;
                var moveTop = null; // 각 페이지의 top을 계산
                if(delta < 0){
                    
                    if($(this).next() !== undefined){
                        moveTop=$(this).next().offset().top;   
                       }else{
                           moveTop=$(this).prev().offset().top;
                       }
                   }else{
                    if($(this).prev() !== undefined){
                        moveTop=$(this).prev().offset().top;   
                       }else{
                           moveTop=$(this).next().offset().top;
                       }
                   }
                $("html,body").stop().animate({
                    "scrollTop":moveTop+"px"
                },600);
            });
        });
});



$(document).ready(function(){
    $(".ch").gaugeMeter();
});


$(document).ready(function(){
    $(".pz_wrap>div").click(function(){
        var i = $(this).index();
        $("html").css("overflow","hidden");
        $(".modal_close").stop().fadeIn();
        $(".modal_wrap").stop().fadeIn();
        $(".modal_in>div").eq(i).stop().fadeIn();
    });
    
    $(".modal_bg").click(function(){
        $(".modal_wrap").stop().fadeOut();
        $(".modal_in>div").stop().fadeOut();
    });
    
    $(".modal_close").click(function(){
        $(".modal_wrap").stop().fadeOut();
        $(".modal_in>div").stop().fadeOut();
    });
});


















