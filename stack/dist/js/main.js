/**
 * Created by 64945 on 2015/8/17.
 */
//$(document).ready(function(){
//    $(document).off('click.bs.dropdown.data-api');  //???dropdown???????
//});
//$(document).ready(function(){
//    dropdownOpen();//????
//});
//
///***?????????????????????????????***/
//function dropdownOpen() {
//    $('.dropdown').mouseover(function() {
//        $(this).addClass('open');
//    }).mouseout(function() {
//        $(this).removeClass('open');
//    });
//}
/***?????***/
$('.vote-counts').hover(function(){
        var index  = $(".vote-counts").index($(this)),
            $span = $(".vote-counts").children(".vote-button");
        $span.eq(index).animate({bottom:0},500);
    },function(){
        var index  = $(".vote-counts").index($(this)),
            $span = $(".vote-counts").children(".vote-button");
        $span.eq(index).animate({bottom:-55},500)}
);
/***???????????***/
$(function () { $("[data-toggle='tooltip']").tooltip(); });
var lableTextWidth;
$('.js-search').focus(function(){
    var parent=$(this).parent();
    lableTextWidth=$(parent).css('width');
    alert(lableTextWidth);
    $('.js-lable').animate({width:"100%"},500);
});
$('.js-search').blur(function(){
    alert(lableTextWidth);
    $('.js-lable').animate({width:lableTextWidth},500);
});


/*加载公共部分代码*/
$(document).ready(function(){
    $("#js-navbar").load("base-common/navbar.html");
    $("#js-panel").load("base-common/top-panel.html");
    $("#js-footer").load("base-common/footer.html");

});

/*
 $(document).ready(function(){
 /!* Login panel *!/
 $("#login-sign").click(function () {
 if ($(this).hasClass("header-login")) {
 $("#login-panel").slideUp(500);
 $(this).removeClass("header-login");
 }else {
 $(".login-panel").slideDown(500);
 $(this).addClass("header-login");
 }
 return false;
 });
 });
 */

$(" .pop-wrap").click(function(){
    popWrap();
});

/* NiceScroll */
$(document).ready(
    function() {
        $("html").niceScroll({
            scrollspeed: 100,
            mousescrollstep: 56,
            cursorwidth: 6,
            cursorborder: 0,
            cursorcolor: '#bdc3c7',
            autohidemode: false,
            zindex: 9999999,
            horizrailenabled: false,
            cursorborderradius: 0
        })
    }
);


