class Like {
  constructor(btnLikes) {
    this.btnLikes = btnLikes
    this.counter()
  }

  counter() {
    this.btnLikes.forEach(function (item) {
      let like = true,
        likeCount = item.querySelector('.like-elements__counter').textContent;
      item.addEventListener('click', function () {
        this.classList.toggle('like-elements__like_active');
        likeCount = like ? ++likeCount : --likeCount;
        like = !like;
        item.querySelector('.like-elements__counter').textContent = likeCount;
      })
    })
  }
}

const like = new Like(document.querySelectorAll('.like-elements__like'))