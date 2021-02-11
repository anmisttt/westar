if (!window.location.href.match(new RegExp("/ru/"))) {
  if (
    window.location.href.match(new RegExp("shop")) ||
    window.location.href.match(new RegExp("product"))
  ) {
    const cards = document.querySelectorAll(".product-type-variable");
    words = [];
    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].querySelector(".entry-summary")) {
        words.push(
          cards[i]
            .querySelector("a")
            .querySelector(".shop-wt-more-meta")
            .querySelectorAll("span")[3]
        );
      }
    }
    words.forEach((word) => {
      arr = word.innerHTML.split(" ");
      arr[arr.length - 1] == "день"
        ? (arr[arr.length - 1] = "day")
        : (arr[arr.length - 1] = "days");
      word.innerHTML = arr.join(" ");
    });
  }
  if (window.location.href.match(new RegExp("product"))) {
    const word = document
      .querySelector(".location-info")
      .querySelectorAll(".media")[0]
      .querySelector(".media-heading");
    arr = word.textContent.trim().split(" ");
    arr[1] == "день" ? (arr[1] = "day") : (arr[1] = "days");
    word.textContent = arr.join(" ");
  }
}


