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

let app = new Vue({
  el: "#links",
  data: {
    links: [
      {
        label: "@ToC1Kwin",
        url: "https://twitter.com/ToC1Kwin",
        icon: "https://abs.twimg.com/favicons/twitter.ico",
      },
      {
        label: "@rmc_km",
        url: "https://twitter.com/rmc_km",
        icon: "https://abs.twimg.com/favicons/twitter.ico",
      },
      {
        label: "GitHub",
        url: "https://github.com/rmc8/",
        icon: "https://github.githubassets.com/favicon.ico",
      },
      {
        label: "note",
        url: "https://note.com/toc1kwin",
        icon: "https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico",
      },
    ],
  },
});
