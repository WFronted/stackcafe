/**
 * Created by 64945 on 2015/8/17.
 */
//$(document).ready(function(){
//    $(document).off('click.bs.dropdown.data-api');  //�ر�dropdown�ĵ���¼�
//});
//$(document).ready(function(){
//    dropdownOpen();//����
//});
//
///***��껮��չ���Ӳ˵�������Ҫ�������չ��***/
//function dropdownOpen() {
//    $('.dropdown').mouseover(function() {
//        $(this).addClass('open');
//    }).mouseout(function() {
//        $(this).removeClass('open');
//    });
//}
/***��ʾͶƱ***/
$('.vote-counts').hover(function(){
    var index  = $(".vote-counts").index($(this)),
        $span = $(".vote-counts").children(".vote-button");
    $span.eq(index).animate({bottom:0},500);
},function(){
    var index  = $(".vote-counts").index($(this)),
        $span = $(".vote-counts").children(".vote-button");
    $span.eq(index).animate({bottom:-55},500)}
);
/***������ʾ����***/
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



$(document).ready(function(){
    $("#js-nav").load("base/nav.html");
    $("#js-indexShowcase").load("base/indexShowcase.html");
    $("#js-showcase").load("base/showcase.html");
    $("#js-footer").load("base/footer.html");
});