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

/* ---   ---*/
// head要素を取得します
let head = document.getElementsByTagName("head")[0];

// 追加する各タグを作成して、head要素に追加します

let tags = [
  {
    name: "meta",
    attributes: {
      name: "google-site-verification",
      content: "wPpgindvtwVOOeQCpIIgEVZNvi-qlc6bC-i3lqNyUt0",
    },
  },
];

tags.forEach(function (tag) {
  let element = document.createElement(tag.name);
  for (let attr in tag.attributes) {
    element.setAttribute(attr, tag.attributes[attr]);
  }
  head.appendChild(element);
});
