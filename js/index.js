var i=1;
$("#btn").click(function () {
    $("#menu").slideToggle(300);
    $(".nav").toggleClass("nav_click");
    if(i%2==0){
        $("#nav_link2").css("display","block");
        $("#nav_link").css("background","#333333");
        $(".nav_inner").css("height","");
        $("#btn3,#btn4,#apple3,#apple4").css({"z-index":"0","display":"none"});
        $("#btn1,#btn2").css({"transform":"rotate(0deg)","z-index":"99","opacity":"1"});
        $("#apple,#apple1").css({"z-index":"99","opacity":"1"});
        $("#apple1,#btn2").css({"opacity":"0"});

    }
    else {
        $("#nav_link2").css("display","none");
        $("#nav_link").css("background","black");
        $(".nav_inner").css("height","100%");
        $("#btn3,#btn4,#apple3,#apple4").css({"z-index":"999","display":"block"});
        $("#btn1,#btn2").css({"transform":"rotate(90deg)","z-index":"0","opacity":"0"});
        $("#apple,#apple1").css({"z-index":"0","opacity":"0"});
    }
    i++;

});
$("#apple1,#btn2").hover(function () {
    $(this).css({"opacity":"1"});
},function () {
    $(this).css({"opacity":"0"});
});
$(".nav_link1_a_p").click(function () {
    $(this).parents("div").addClass("nav_link1_a_div")
});
//    var oTop = $(".fixed").offset().top+52;
var sTop = 0;
var oTop=84;
$(window).scroll(function(){
    sTop = $(this).scrollTop();
    if(sTop >= oTop){
        $(".fixed").css({"position":"fixed","top":"0","left":"0"});
        $(".banner").css("margin-top","106px");
        $("#back").css({"width":"360px","height":"720px","background-size":"100% 100%"});
        $("#triangle-down").css("top","-100%");
        $("#triangle-left").css("right","-100%");
        $("#triangle-up").css("bottom","-100%");
        $("#triangle-right").css("left","-100%");

    }
    else{
        $(".fixed").css({"position":"static"});
        $(".banner").css("margin-top","0px");
        $("#back").css({"width":"340px","height":"400px","background-size":"116% 116%"});
        $("#triangle-down").css("top","0%");
        $("#triangle-left").css("right","0%");
        $("#triangle-up").css("bottom","0%");
        $("#triangle-right").css("left","0%");

    }
});




var sTop1 =0;
$(window).scroll(function(){
    sTop1 = $(this).scrollTop();
    if(sTop1 >=640){
        $("#back").css({"transform":"translateY(-50px)"});
    }
    else if (sTop1<=700){
        $("#back").css({"transform":"translateY(0)"});
    }



    if(sTop1>=1677){
        $(".main_two_p").css({"transform":"translateY(-50px)"})
    }else if(sTop1<=2000){
        $(".main_two_p").css({"transform":"translateY(0px)"})
    }
});



var oTop3 = $(".main_three_p").offset().top+50;
var oTop4 = $(".main_four_p").offset().top+50;
var oTop5 = $(".main_five_p").offset().top+50;
var oTop6 = $(".main_six_p").offset().top+50;
var oTop7 = $(".main_seven_p").offset().top+50;
var oTop8 = $(".main_eight_p").offset().top+50;
var oTop9 = $(".main_nine_p").offset().top+50;
var oTop10 = $(".main_ten_p").offset().top+50;
var oTop11 = $(".main_eleven_p").offset().top+50;
var oTop12 = $(".main_twelve_p").offset().top+50;
var oTop13 = $(".main_thirteen_p").offset().top+50;
var oTop14 = $(".main_fourteen_p2").offset().top+50;
var oTop15 = $(".main_fifteen_p").offset().top+50;
var oTop16 = $(".main_sixteen_p").offset().top+50;
var oTop17 = $(".main_seventeen_p").offset().top+50;
var oTop18 = $(".main_eighteen_p").offset().top+50;
var oTop19 = $(".main_nineteen_p").offset().top+50;
var oTop20= $(".main_twenty_p").offset().top+50;
var oTop21= $(".main_twenty-one_p").offset().top+50;
var oTop22= $(".main_twenty-two_p").offset().top+50;
var oTop23= $(".main_twenty-three_p").offset().top+50;
var oTop24= $(".main_twenty-four_p").offset().top+50;
var oTop25= $(".main_twenty-five_p").offset().top+50;
var oTop26= $(".main_twenty-six_p").offset().top+50;
var oTop27= $(".main_twenty-seven_p").offset().top+50;
var oTop28= $(".main_twenty-eight_p").offset().top+50;
var oTop29= $(".main_twenty-nine_p").offset().top+50;
var oTop30= $(".main_thirty_p").offset().top+50;
var mp4_1 = $("#mp4-1").offset().top;
//  nineteenthirty
var sTop3 = 0;
$(window).scroll(function(){
    sTop3 = $(this).scrollTop();
    if(sTop3 >= oTop3){
        $(".main_three").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_three").css({"background":"white"});
    }
    if(sTop3 >= oTop4){
        $(".main_four").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_four").css({"background":"white"});
    }
    if(sTop3 >= oTop5){
        $(".main_five").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_five").css({"background":"white"});
    }
    if(sTop3 >= oTop6){
        $(".main_six").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_six").css({"background":"white"});
    }
    if(sTop3 >= oTop7){
        $(".main_seven").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_seven").css({"background":"white"});
    }
    if(sTop3 >= oTop8){
        $(".main_eight").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_eight").css({"background":"white"});
    }
    if(sTop3 >= oTop9){
        $(".main_nine").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_nine").css({"background":"white"});
    }
    if(sTop3 >= oTop10){
        $(".main_ten").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_ten").css({"background":"white"});
    }
    if(sTop3 >= oTop11){
        $(".main_eleven").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_eleven").css({"background":"white"});
    }
    if(sTop3 >= oTop12){
        $(".main_twelve").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twelve").css({"background":"white"});
    }
    if(sTop3 >= oTop13){
        $(".main_thirteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_thirteen").css({"background":"white"});
    }
    if(sTop3 >= oTop14){
        $(".main_fourteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_fourteen").css({"background":"white"});
    }
    if(sTop3 >= oTop15){
        $(".main_fifteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_fifteen").css({"background":"white"});
    }
    if(sTop3 >= oTop16){
        $(".main_sixteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_sixteen").css({"background":"white"});
    }
    if(sTop3 >= oTop17){
        $(".main_seventeen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_seventeen").css({"background":"white"});
    }
    if(sTop3 >= oTop18){
        $(".main_eighteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_eighteen").css({"background":"white"});
    }
    if(sTop3 >= oTop19){
        $(".main_nineteen").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_nineteen").css({"background":"white"});
    }
    if(sTop3 >= oTop20){
        $(".main_twenty").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty").css({"background":"white"});
    }
    if(sTop3 >= oTop21){
        $(".main_twenty-one").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-one").css({"background":"white"});
    }
    if(sTop3 >= oTop22){
        $(".main_twenty-two").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-two").css({"background":"white"});
    }
    if(sTop3 >= oTop23){
        $(".main_twenty-three").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-three").css({"background":"white"});
    }
    if(sTop3 >= oTop24){
        $(".main_twenty-four").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-four").css({"background":"white"});
    }
    if(sTop3 >= oTop25){
        $(".main_twenty-five").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-five").css({"background":"white"});
    }
    if(sTop3 >= oTop26){
        $(".main_twenty-six").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-six").css({"background":"white"});
    }
    if(sTop3 >= oTop27){
        $(".main_twenty-seven").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-seven").css({"background":"white"});
    }
    if(sTop3 >= oTop28){
        $(".main_twenty-eight").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-eight").css({"background":"white"});
    }
    if(sTop3 >= oTop29){
        $(".main_twenty-nine").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_twenty-nine").css({"background":"white"});
    }
    if(sTop3 >= oTop30){
        $(".main_thirty").css({"background":"#B7B7B7"});
    }
    else{
        $(".main_thirty").css({"background":"white"});
    }





    if(sTop3 >= mp4_1){
        $("#mp4-1").attr("autoplay","autoplay");
    }
    else{
        $("#mp4-1").attr("autoplay","");
    }
});



