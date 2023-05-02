$(function () {
  // Smooth scrolling for internal links
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 60,
        },
        1000
      );
    }
  });
});
