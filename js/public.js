$(function () {
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop!=0?document.body.scrollTop:document.documentElement.scrollTop;
        // var height=$('.banner').height()-$('.nav').height();
        var height=20;
        if (scrollTop>=height) {
            $('.nav_all').css({background:'white'});
            $('.nav .logo .white').css({display:'none'});
            $('.nav .logo .blue').css({display:'block'});
            $('.nav ul li a').css({color:'#999999'});
            $(".nav ul li a:has(span)").css({color:'#00a5ea'});
            $('.nav ul li a:has(span) span').addClass('active');
            $('.nav_all').addClass('border_bottom');
        }else{
            $('.nav .logo .blue').css({display:'none'});
            $('.nav_all').css({background:'rgba(255, 255, 255,0)'});
            $('.nav_all').removeClass('border_bottom');
            $('.nav .logo .white').css({display:'block'});
            $('.nav ul li a').css({color:'#ffffff'});
            $('.nav ul li a:has(span)').css({color:'white'});
            $('.nav ul li a:has(span) span').removeClass('active');
        }
    }

    $('.foot .foot_content ul li:eq(2) img:eq(0)').mouseover(function(){
        $('.weibo_logo').css({display:'none'});
        $('.weibo_hover_logo').css({display:'block'});
    })
    $('.foot .foot_content ul li:eq(2) img:eq(1)').mouseout(function(){
        $('.weibo_hover_logo').css({display:'none'});
        $('.weibo_logo').css({display:'block'});
    })
    $('.foot .foot_content ul li:eq(2) img:eq(2)').mouseover(function(){
           $('.weixin_logo').css({display:'none'});
           $('.weixin_hover_logo').css({display:'block'});
    })
    $('.foot .foot_content ul li:eq(2) img:eq(3)').mouseout(function(){
        $('.weixin_hover_logo').css({display:'none'});
        $('.weixin_logo').css({display:'block'});
    })

})
