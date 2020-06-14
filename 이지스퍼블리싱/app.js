$(document).ready(function () {
  $("nav li a").click(function () {
    // $("#container").css("max-width", "100%");
    var id = $(this).attr("data-rol");
    $("nav li a").removeClass("on");
    $(this).addClass("on");
    $(".content").removeClass("prev current next");
    $("#" + id)
      .addClass("current")
      .prevAll()
      .addClass("prev");
    $("#" + id)
      .nextAll()
      .addClass("next");
  });
});
