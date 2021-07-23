class ListCheckbox {
  constructor({ checkList, checkTitle }) {
    this.checkList = checkList
    this.checkTitle = checkTitle
    this.check()
  }

  check() {
    if (this.checkList) {

      this.checkTitle.addEventListener('click', () => {
        this.checkTitle.classList.toggle('list-checkbox__title_active')
        this.checkList.classList.toggle('list-checkbox__list_active')
      })

      const checkList = this.checkList
      const checkTitle = this.checkTitle

      document.addEventListener('click', function (e) {
        const target = e.target;
        const its_menu = target == checkList || checkList.contains(target);
        const its_btnMenu = target == checkTitle;
        const menu_is_active = checkList.classList.contains('list-checkbox__list_active');

        if (!its_menu && !its_btnMenu && menu_is_active) {
          checkTitle.classList.remove('list-checkbox__title_active')
          checkList.classList.remove('list-checkbox__list_active')
        }
      });

    }

  }
}

const listCheckbox = new ListCheckbox({
  checkList: document.querySelector('.list-checkbox__list'),
  checkTitle: document.querySelector('.list-checkbox__title')
})
