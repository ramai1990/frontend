class Burger {
  constructor() {
    this.toggle = this.toggle.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  render() {
    this.button = document.querySelector('.burger');
    this.close = document.querySelector('.burger__btn');
    this.navList = document.querySelector('.nav__list');
    this.headerButtons = document.querySelector('.header__buttons');
    this.addEventListeners();
  }

  toggle(e) {
    e.stopPropagation();
    this.close.classList.toggle('burger__btn_visible');
    this.navList.classList.toggle('nav__list_visible');
    this.headerButtons.classList.toggle('header__buttons_visible');
  }

  removeClass() {
    this.close.classList.remove('burger__btn_visible');
    this.navList.classList.remove('nav__list_visible');
    this.headerButtons.classList.remove('header__buttons_visible');
  }

  addEventListeners() {
    if (this.button) {
      this.navList.addEventListener('click', (e) => e.stopPropagation());
      this.button.addEventListener('click', this.toggle);
      document.addEventListener('click', this.removeClass);
    }
  }
}

export default Burger;
