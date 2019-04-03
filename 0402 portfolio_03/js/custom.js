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
        $("#menu_u>li>ul").stop().slideUp(300);
        $("#menu_bg").stop().slideUp(300);
        $("#search_ac").stop().slideUp(300);
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
        if ($(this).scrollTop() > 10){
            $('header').addClass('hd_big');
        } else {
            $('header').removeClass('hd_big');
            }
    });
    
    $(".slide").eq(1).fadeOut();
    $(".slide").eq(2).fadeOut();
    $(".sl_btn").eq(0).addClass('sl_btn_on');
    $(".sl_btn").eq(0).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(0).fadeIn();
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(0).addClass('sl_btn_on');
    });
    $(".sl_btn").eq(1).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(1).fadeIn();
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(1).addClass('sl_btn_on');
    });
    $(".sl_btn").eq(2).click(function(){
        $(".slide").fadeOut();
        $(".slide").eq(2).fadeIn();
        $(".sl_btn").removeClass('sl_btn_on');
        $(".sl_btn").eq(2).addClass('sl_btn_on');
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
        }, 5000);
    };
    $(".banner").on({mouseover:function(){
        clearInterval(timeID);
    },
                     
    mouseout:function(){
        timer();
    }
    });
    
    
    
});
















