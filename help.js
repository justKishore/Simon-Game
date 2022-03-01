$(".help-img").click(function () {
  if ($("#help-frame").hasClass("frame-off")) {
    $("#help-frame").addClass("frame-on");
    $("#help-frame").removeClass("frame-off");
  } else {
    $("#help-frame").addClass("frame-off");
    $("#help-frame").removeClass("frame-on");
  }
});
