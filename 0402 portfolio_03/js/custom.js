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
    $("main").click(function(){
//        $("#menu_u>li>ul").stop().slideUp(300);
//        $("#menu_bg").stop().slideUp(300);
//        $("#search_ac").stop().slideUp(300);
    });
    $("#search_ac").hide();
    $("#search").click(function(){
        $("#search_ac").stop().slideDown(300);
    });
    $("#search_close").click(function(){
        $("#search_ac").stop().slideUp(300);
    });
    $("#m_menu").click(function(){
        $("#menu_u>li>ul").stop().slideDown(300);
    });
    
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50){
            $('header').addClass('hd_big');
            $('.c_logo').addClass('logo_b');
            $('.c_m_menu').addClass('m_menu_b');
        } else {
            $('header').removeClass('hd_big');
            $('header').removeClass('hd_hide');
            $('.c_logo').removeClass('logo_b');
            $('.c_m_menu').removeClass('m_menu_b');
            }
    });
    
    var didScroll; 
    var lastScrollTop = 0; 
    var delta = 5; 
    var navbarHeight = $('header').outerHeight(); 
    
    $(window).scroll(function(event){ 
        didScroll = true; 
    }); 
    setInterval(function() { 
        if (didScroll) { 
            hasScrolled(); 
            didScroll = false; 
        } 
    }, 250); 
    
    function hasScrolled() { 
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) 
        return;
        if (st > lastScrollTop && st > 850 ){
            $('header').addClass('hd_hide');
            $('#search_ac').slideUp();
            $("#menu_u>li>ul").stop().slideUp(300);
            $("#menu_bg").stop().slideUp(300);
        } else {
            if(st + $(window).height() < $(document).height()) {            $('header').removeClass('hd_hide');
            } 
        } lastScrollTop = st; 
    }

    $("#m_menu").click(function(){
        $("#m_menu_wrap").fadeIn();
        $(".m_menu_u").addClass('m_menu_u_left');
        $(".m_menu_close").addClass('m_menu_close_left');
        $("html").css("overflow","hidden");
        $(".gtt").css("opacity","0");
    });
    
    $("#m_menu_bg").click(function(){
        $("#m_menu_wrap").fadeOut();
        $(".m_menu_u").removeClass('m_menu_u_left');
        $(".m_menu_close").removeClass('m_menu_close_left');
        $("#m_search_ac").fadeOut('slow');
        $(".m_menu_u>li ul").fadeOut('slow');
        $("html").css("overflow","scroll");
        $(".gtt").css("opacity","1");
        $(".m_menu_u>li").css('border-bottom','none');
    });
    
    $(".m_menu_close").click(function(){
        $("#m_menu_wrap").fadeOut();
        $(".m_menu_u").removeClass('m_menu_u_left');
        $(".m_menu_close").removeClass('m_menu_close_left');
        $("#m_search_ac").fadeOut('slow');
        $(".m_menu_u>li ul").fadeOut('slow');
        $("html").css("overflow","scroll");
        $(".gtt").css("opacity","1");
        $(".m_menu_u>li").css('border-bottom','none');
    });
    
    $("#m_search").click(function(){
        $("#m_search_ac").toggle('slow');
    });
    
    $("#m_search_close").click(function(){
        $("#m_search_ac").fadeOut('slow');
    });
    
    
    $(".m_menu_u>li").click(function(){
        var i = $(this).index();
        $(".m_menu_u>li ul").hide();
        $(".m_menu_u>li").css('border-bottom','none');
        $(".m_menu_u>li").eq(i-2).css('border-bottom','5px solid rgb(89, 149, 247)');
        $(".m_menu_u>li ul").eq(i-2).show();
    });
    
    
    $(".sl_tx1").addClass('sl_tx_up1');
    $(".sl_tx2").addClass('sl_tx_up2');
    $(".slide").eq(1).fadeOut(100);
    $(".slide").eq(2).fadeOut(100);
    $(".sl_btn").eq(0).addClass('sl_btn_on');
    $(".sl_btn").eq(0).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(0).fadeIn(700);
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(0).addClass('sl_btn_on');
        $("#slide01 .sl_tx1").addClass('sl_tx_up1');
        $("#slide01 .sl_tx2").addClass('sl_tx_up2');
    });
    $(".sl_btn").eq(1).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(1).fadeIn(700);
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(1).addClass('sl_btn_on');
        $(".sl_tx1").addClass('sl_tx_up1');
        $(".sl_tx2").addClass('sl_tx_up2');
    });
    $(".sl_btn").eq(2).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(2).fadeIn(700);
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(2).addClass('sl_btn_on');
        $(".sl_tx1").addClass('sl_tx_up1');
        $(".sl_tx2").addClass('sl_tx_up2');
    });
    
    var timeID;
    timer();
    var current = 0;
    current++;
    function timer(){
        timeID = setInterval(function(){
            $(".sl_btn").eq(current++).trigger("click");
            if(current > 3){
                current = 0;
               $(".sl_btn").eq(current++).trigger("click");
               };
        }, 10000);
    };
    
    $("#stop").click(function(){
        clearInterval(timeID);
        $("#start").stop().show();
        $("#stop").stop().hide();
    });
    $("#start").click(function(){
        timer();
        $("#stop").stop().show();
        $("#start").stop().hide();
    });
    
    
    $("#skdw").click(function(){
        var contop = $("#content").offset().top - 200;
        $("html,body").stop().animate({
            "scrollTop":contop+"px"
        },600);
    });
    
    $(window).scroll(function(){
        var sec1top = $("#sec1_1").offset().top - 1200;
        var sec2top = $("#sec1_2").offset().top - 1200;
        var sec3top = $("#sec1_3").offset().top - 1200;
        var sc2top = $(".sec2").offset().top - 1000;
        var sc3_2top = $(".sec3_2").offset().top - 1500;
        var fttop = $(".footer_bot").offset().top -1400;
        console.log("aaa"+$(this).scrollTop());
        if ($(this).scrollTop() > 950){
            $('.gtt').fadeIn();
        } else {
            $('.gtt').fadeOut();
            }
        if ($(this).scrollTop() > sec1top){
            $('#sec1_text').addClass('text_ko_up');
        }
        if ($(this).scrollTop() > sec2top){
            $('#sec2_text').addClass('text_ko_up');
        }
        if ($(this).scrollTop() > sec3top){
            $('#sec3_text').addClass('text_ko_up');
        }
        if ($(this).scrollTop() > sc2top){
            $('.sc1').addClass('sc1img_up');
            $('.sc2').addClass('sc2img_up');
            $('.sc3').addClass('sc3img_up');
        }
        if($(this).scrollTop() > sc3_2top){
            $('.s3_2_1_img').addClass('s3_2_1_img_up');
        }
        if($(this).scrollTop() > 4200){
            $('.gtt').addClass('gtt_ab');
        }else{
            $('.gtt').removeClass('gtt_ab');
        }
        
    });
    $('.gtt').click(function(){
        $('html, body').stop().animate({scrollTop : 0}, 400);
        return false;
    });
    
});
















