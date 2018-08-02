$(function () {
    $('.nav_left .select').append('<div class="triangle-right"></div>');
    // 侧边栏点击字体边颜色  添加向右三角形
    $('.nav_left li').click(function(){
        $('.nav_left li').removeClass('select');
        $('.nav_left li .triangle-right').remove();
        $(this).addClass('select').append('<div class="triangle-right"></div>');
    })

    //广告平台
    $('.nav_left li:eq(0)').click(function(){
        $('.content').css({display:'none'});
        $('.adver').css({display:'block'});
    })
    // 大数据平台
    $('.nav_left li:eq(1)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.data').css({display:'block'});
    })
    // 新零售平台
    $('.nav_left li:eq(2)').click(function(){
        $('.content').css({display:'none'});
        $('.synopsis').css({display:'none'});
        $('.sale').css({display:'block'});
    })
    // 新媒体平台
    // $('.nav_left li:eq(3)').click(function(){
    //     $('.content').css({display:'none'});
    //     $('.synopsis').css({display:'none'});
    //     $('.media').css({display:'block'});
    // })
    // 手游分发
    // $('.nav_left li:eq(4)').click(function(){
    //     $('.content').css({display:'none'});
    //     $('.synopsis').css({display:'none'});
    //     $('.hand_computer').css({display:'block'});
    // })
})