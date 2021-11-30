class SubMenu {
  constructor() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  render() {
    this.navList = document.querySelector('.nav__list');
    if (this.navList) {
      this.navLink = this.navList.querySelectorAll('.nav__link_dropdown');
    }
    this.submenu = document.querySelectorAll('.submenu__list');
    this.menu = document.querySelector('.submenu');
    this.addEventListeners();
  }

  open(e) {
    e.stopPropagation();
    let el = e.target;
    if (el.classList.contains('active')) {
      el.classList.toggle('active');
      el.nextElementSibling.classList.toggle('active');
    } else {
      this.navLink.forEach((link) => {
        SubMenu.removeClass(link);
      });
      SubMenu.addClass(el);
    }
  }

  static removeClass(el) {
    el.classList.remove('active');
    el.nextElementSibling.classList.remove('active');
  }

  static addClass(el) {
    el.classList.add('active');
    el.nextElementSibling.classList.add('active');
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
