$(document).ready(function () {
  $(".mavic").hover(
    function () {
      $(".mavic-img").addClass("mavic-on").removeClass("mavic-off");
      $(".mavic").addClass("phone-on").removeClass("phone-off");
    },
    function () {
      $(".mavic-img").removeClass("mavic-on").addClass("mavic-off");
      $(".mavic").removeClass("phone-on").addClass("phone-off");
    }
  );
});
