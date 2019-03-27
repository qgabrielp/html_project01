//$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { 
            
            $('header').css({'position': 'fixed','left': '50%','width': '50%','height': '5%','top': '0px'});
            
        } else {
            $('header').css({'position': 'fixed','left': '50%','width': '30%','height': '10%','top': '10%'});
        }
//        if ($(this).scrollTop() < 50) { 
//            
//            $("#top_menubar_2").css({'position': 'inherit','margin-left': '-700px','width': '1400px','height': '100px'});
//            
//        } 
    });
//});















