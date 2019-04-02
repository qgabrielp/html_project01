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
});















