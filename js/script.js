jQuery(document).ready(funcion(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(1000);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(1000);
    }),
});