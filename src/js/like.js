(function () {
  const btnLike = document.querySelector('.like-elements__like');
  const btnLike2 = document.querySelector('.like-elements__like2');
  const btnLike3 = document.querySelector('.like-elements__like3');
  let like = true,
    likeCount = document.querySelector('.like-elements__counter').textContent;
  let like2 = true,
    likeCount2 = document.querySelector('.like-elements__counter2').textContent;
  let like3 = true,
    likeCount3 = document.querySelector('.like-elements__counter3').textContent;

  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('like-elements__like--active')
    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    document.querySelector('.like-elements__counter').textContent = likeCount;
  });
  btnLike2.addEventListener('click', () => {
    btnLike2.classList.toggle('like-elements__like--active')
    likeCount2 = like2 ? ++likeCount2 : --likeCount2;
    like2 = !like2;
    document.querySelector('.like-elements__counter2').textContent = likeCount2;
  });
  btnLike3.addEventListener('click', () => {
    btnLike3.classList.toggle('like-elements__like--active')
    likeCount3 = like3 ? ++likeCount3 : --likeCount3;
    like3 = !like3;
    document.querySelector('.like-elements__counter3').textContent = likeCount3;
  });
}())