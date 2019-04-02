$(document).ready(function(){
    $("#menu_u>li>ul").hide();
    $("#menu_u>li").hover(function(){
        var i = $(this).index();
        $("#menu_u>li>ul").stop().slideDown();
    }).mouseleave(function(){
        $("#menu_u>li>ul").stop().slideUp();
    });
});















