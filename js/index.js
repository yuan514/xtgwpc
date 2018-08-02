$(function(){
    $('.home_content .img_hover a img').mouseenter(function(){
        $(this).animate({
            opacity:.7
        });
    });
    $('.home_content .img_hover a img').mouseleave(function(){
        $(this).animate({
            opacity:1
        });
    });
})