    $(window).scroll(function() {
        var page2top = $('.page2').offset().top;
        if ($(this).scrollTop() > page2top) { 
            
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '100%','height': '5%','top': '0px','background-color':'rgba(255,255,255,0.6)'});
            $('#menu>li').css({'float':'left'});
            $('#top_red').addClass('dnone');
        } else {
            $('header').stop().animate({'position': 'fixed','left': '0%','width': '20%','height': '30%','top': '0%','background-color':'rgba(255,255,255,0.0)'});
            $('#menu>li').css({'float':'none'});
            $('#top_red').removeClass('dnone');
        }
    });















