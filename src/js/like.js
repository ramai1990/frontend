(function () {

  const btnLikes = document.querySelectorAll('.like-elements__like')
  btnLikes.forEach(function (item) {
    let like = true,
      likeCount = item.querySelector('.like-elements__counter').textContent;
    item.addEventListener('click', function () {
      this.classList.toggle('like-elements__like_active');
      likeCount = like ? ++likeCount : --likeCount;
      like = !like;
      item.querySelector('.like-elements__counter').textContent = likeCount;
    })
  })

}())