$(function () {

    $('.nav_left .select').append('<div class="triangle-right"></div>');
    // 侧边栏点击字体边颜色  添加向右三角形
    $('.nav_left li').click(function(){
        $('.nav_left li').removeClass('select');
        $('.nav_left li .triangle-right').remove();
        $(this).addClass('select').append('<div class="triangle-right"></div>');
    })

    // 公司简介内容
    $('.nav_left li:eq(0)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'block'});
    })
    // 发展历程内容
    $('.nav_left li:eq(1)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.compony_intro').css({display:'block'});
    })
    // 企业文化内容
    $('.nav_left li:eq(2)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.corporate_culture').css({display:'block'});
    })
    // 企业标识内容
    $('.nav_left li:eq(3)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.enterprise_logo').css({display:'block'});
    })
    // 合作伙伴内容
    $('.nav_left li:eq(4)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.partner').css({display:'block'});
    })
})