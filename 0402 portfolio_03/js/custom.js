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
        } else {
            $('header').removeClass('hd_big');
            $('header').removeClass('hd_hide');
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
        } else {
            if(st + $(window).height() < $(document).height()) {            $('header').removeClass('hd_hide');
            } 
        } lastScrollTop = st; 
    }

    
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
    
//    var timeID;
//    timer();
//    var current = 0;
//    current++;
//    function timer(){
//        timeID = setInterval(function(){
//            $(".sl_btn").eq(current++).trigger("click");
//            if(current > 3){
//                current = 0;
//               $(".sl_btn").eq(current++).trigger("click");
//               };
//        }, 10000);
//    };
//    
//    $("#stop").click(function(){
//        clearInterval(timeID);
//        $("#start").stop().show();
//        $("#stop").stop().hide();
//    });
//    $("#start").click(function(){
//        timer();
//        $("#stop").stop().show();
//        $("#start").stop().hide();
//    });
    
    
    
});
















