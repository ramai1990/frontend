class SubMenu {
  constructor() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  render() {
    this.navList = document.querySelector('.js-nav-list');
    if (this.navList) {
      this.navLink = this.navList.querySelectorAll('.js-nav-link-dropdown');
    }
    this.submenu = document.querySelectorAll('.js-submenu-list');
    this.menu = document.querySelector('.js-submenu');
    this.addEventListeners();
  }

  open(e) {
    e.stopPropagation();
    let el = e.target;
    if (el.classList.contains('nav__link_active')) {
      el.classList.toggle('nav__link_active');
      el.nextElementSibling.classList.toggle('submenu_active');
    } else {
      this.navLink.forEach((link) => {
        SubMenu.removeClass(link);
      });
      SubMenu.addClass(el);
    }
  }

  static removeClass(el) {
    el.classList.remove('nav__link_active');
    el.nextElementSibling.classList.remove('submenu_active');
  }

  static addClass(el) {
    el.classList.add('nav__link_active');
    el.nextElementSibling.classList.add('submenu_active');
  }

  close() {
    this.navLink.forEach((el) => el.addEventListener('click', SubMenu.removeClass(el)));
  }

  addEventListeners() {
    if (this.navList) {
      this.submenu.forEach((el) => el.addEventListener('click', (e) => e.stopPropagation()));
      this.navLink.forEach((el) => el.addEventListener('click', this.open));
      document.addEventListener('click', this.close);
    }
  }
}

export default SubMenu;
