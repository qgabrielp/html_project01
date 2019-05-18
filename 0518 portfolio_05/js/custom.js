$(document).ready(function(){
    $('.bn_2').hide();
    $('.bn_btn_1').click(function(){
        $('.bn_btn_1').addClass('on');
        $('.bn_btn_2').removeClass('on');
        $('.bn_2').hide();
        $('.bn_1').fadeIn(600);
    });
    $('.bn_btn_2').click(function(){
        $('.bn_btn_2').addClass('on');
        $('.bn_btn_1').removeClass('on');
        $('.bn_1').hide();
        $('.bn_2').fadeIn(600);
    });
});















