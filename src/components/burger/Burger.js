class Burger {
  constructor() {
    this.toggle = this.toggle.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  render() {
    this.button = document.querySelector('.js-burger');
    this.close = document.querySelector('.js-burger-btn');
    this.navList = document.querySelector('.js-nav-list');
    this.headerButtons = document.querySelector('.js-header-buttons');
    this.addEventListeners();
  }

  toggle(e) {
    e.stopPropagation();
    this.close.classList.toggle('visible');
    this.navList.classList.toggle('visible');
    this.headerButtons.classList.toggle('visible');
  }

  removeClass() {
    this.close.classList.remove('visible');
    this.navList.classList.remove('visible');
    this.headerButtons.classList.remove('visible');
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
