/*add this when you're using jQuery for play/pause button on a carousel***links to your html file*/
$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
      } else {
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause"); 
      }
  });
});

$(function() {
    $("#reserveButton").click(function(){
        $("#reserveModal").collapse("show");
    });
    $(".close").click(function(){
        $("#reserveModal").collapse("hide");
    });
    $("#loginButton").click(function(){
        $("#loginModal").collapse("show");
    });
    $(".close").click(function(){
        $("#loginModal").collapse("hide");
    });
});

