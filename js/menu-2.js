//JQ方法
$('em').click(function () {
    $(this).toggleClass('open').next().next().stop().slideToggle().find('ul').css({display:'none'}).prev().prev().removeClass('open');
    //或者把prev().prev()换成prevAll();
})