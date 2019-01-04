$(function(){

  $(".modalWindow").hide();
  $(".nemu__humburgerMenu").on('click', function(){
    $(".modalWindow").fadeIn("slow");
    $(".mobileMenu").animate({
        "margin": "0"
    }, "normal");
  });

  $(".modalWindow").on('click', function(){
    $(".modalWindow").fadeOut("slow");
    $(".mobileMenu").animate({
        "margin": "0 -200px 0 0"
    }, "normal");
  });
  $(".mobileMenu").on('click', function(e){
    e.stopPropagation();
  });
  $(window).on("load", function() {
    $(".preload_image").fadeOut("slow");
  });
});
