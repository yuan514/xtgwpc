$(function () {
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