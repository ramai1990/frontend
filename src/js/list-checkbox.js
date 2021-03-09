(function () {
  const checkbox__list = document.querySelector('.list-checkbox__list')
  if (checkbox__list) {


    const checkBtn = document.querySelector('.list-checkbox__title')
    const checkList = document.querySelector('.list-checkbox__list')

    checkBtn.addEventListener('click', () => {
      checkBtn.classList.toggle('list-checkbox__title--active')
      checkList.classList.toggle('list-checkbox__list--active')
    })


    document.addEventListener('click', function (e) {
      const target = e.target;
      const its_menu = target == checkList || checkList.contains(target);
      const its_btnMenu = target == checkBtn;
      const menu_is_active = checkList.classList.contains('list-checkbox__list--active');

      if (!its_menu && !its_btnMenu && menu_is_active) {
        checkBtn.classList.remove('list-checkbox__title--active')
        checkList.classList.remove('list-checkbox__list--active')
      }
    });

  }

}())
