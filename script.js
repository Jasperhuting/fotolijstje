$(document).ready(function () {
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
});
