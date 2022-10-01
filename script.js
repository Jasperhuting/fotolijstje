$(document).ready(function () {
  var folder = "images/";

  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|gif)$/)) {
            $(".your-class").append(
              "<div class='slide'><img src='" + folder + val + "'></div>"
            );
          }
        });
    },
  });

  setTimeout(() => {
    $(".your-class").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      navigation: false,
      fade: true,
      cssEase: "linear",
      arrows: false,
      centerMode: true,
      infinite: true,
      adaptive: true,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  }, 5000);
});
