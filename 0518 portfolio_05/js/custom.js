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
    
    $('.sec4_sl_box_2').hide();
    $('.sec4_sl_box_3').hide();
    $('.sec4_sl>div').click(function(){
        var i = $(this).index();
        $('.sec4_sl>div').removeClass('select');
        $('.sec4_sl>div').eq(i).addClass('select');
        $('.sec4_sl>div>p').removeClass('select_bb');
        $('.sec4_sl>div>p').eq(i).addClass('select_bb');
        $('.sec4_sl_box>div').hide();
        $('.sec4_sl_box>div').eq(i).show();
    });
});















