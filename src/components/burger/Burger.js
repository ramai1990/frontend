class Burger {
  constructor() {
    this.toggle = this.toggle.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  render() {
    this.button = document.querySelector('.js-burger');
    this.navList = document.querySelector('.js-nav');
    this.headerButtons = document.querySelector('.js-header-buttons');
    this.addEventListeners();
  }

  toggle(e) {
    e.stopPropagation();
    this.button.classList.toggle('burger_active');
    this.navList.classList.toggle('nav_active');
    this.headerButtons.classList.toggle('header__buttons_active');
  }

  removeClass() {
    this.button.classList.remove('burger_active');
    this.navList.classList.remove('nav_active');
    this.headerButtons.classList.remove('header__buttons_active');
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
