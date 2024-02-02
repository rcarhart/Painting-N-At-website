// button scroll //
$(document).ready(function (){
$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top
    }, 2000);
});
    
$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#images").offset().top
    }, 2000);
});
    
   $("#nav-link1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});
      $("#nav-link2").click(function() {
    $('html, body').animate({
        scrollTop: $("#images").offset().top
    }, 2000);
});
      $("#nav-link3").click(function() {
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top
    }, 2000);
});
     
    
    });