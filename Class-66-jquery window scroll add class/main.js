$(document).ready(function () {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".stick-area").addClass("is-stick");
    } else {
      $(".stick-area").removeClass("is-stick")
    }
  });

});