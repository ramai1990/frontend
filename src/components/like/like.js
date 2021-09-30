class Like {
  constructor(btnLikes) {
    this.btnLikes = btnLikes;
    this.counter();
  }

  counter() {
    this.btnLikes.forEach((item) => {
      let like = true,
        likeCount = item.querySelector(".like-elements__counter").textContent;
      item.querySelector(".like-elements__counter").textContent =
        this.shortValue(likeCount);
      item.addEventListener("click", () => {
        item.classList.toggle("like-elements__like_active");
        likeCount = like ? ++likeCount : --likeCount;
        like = !like;
        item.querySelector(".like-elements__counter").textContent =
          this.shortValue(likeCount);
      });
    });
  }
  shortValue(value) {
    if (value >= 1e10) return `${(value / 1e9).toFixed(0)}B`;
    if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e7) return `${(value / 1e6).toFixed(0)}M`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
    return value.toString();
  }
}

const like = new Like(document.querySelectorAll(".like-elements__like"));
