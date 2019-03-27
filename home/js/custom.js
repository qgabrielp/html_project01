//$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { 
            
            $('header').stop().animate({'position': 'fixed','left': '50%','width': '50%','height': '5%','top': '0px'});
            
        } else {
            $('header').stop().animate({'position': 'fixed','left': '50%','width': '30%','height': '5%','top': '10%'});
        }
//        if ($(this).scrollTop() < 50) { 
//            
//            $("#top_menubar_2").css({'position': 'inherit','margin-left': '-700px','width': '1400px','height': '100px'});
//            
//        } 
    });
//});















