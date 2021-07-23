class Burger {
  constructor({ btnMenu, button, close, navList, headerButtons }) {
    this.btnMenu = btnMenu;
    this.button = button;
    this.close = close;
    this.navList = navList;
    this.headerButtons = headerButtons;
    this.toggleMenu();
    this.hideMenu();
  }

  toggleMenu() {
    this.button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.btnMenu.forEach((item) => {
        item.classList.toggle("active");
      });
    });
  }

  hideMenu() {
    const close = this.close;
    const btnMenu = this.button;
    const menu = this.navList;
    const btns = this.headerButtons;
    document.addEventListener("click", function (e) {
      const target = e.target;
      const its_menu = target == menu || menu.contains(target);
      const its_btnMenu = target == btnMenu;
      const menu_is_active = menu.classList.contains("active");
      if (!its_menu && !its_btnMenu && menu_is_active) {
        close.classList.remove("active");
        menu.classList.remove("active");
        btns.classList.remove("active");
      }
    });
  }
}

const burger = new Burger({
  btnMenu: document.querySelectorAll(".nav__list, .burger span, .header-btns"),
  button: document.querySelector(".burger"),
  close: document.querySelector(".burger span"),
  navList: document.querySelector(".nav__list"),
  headerButtons: document.querySelector(".header-btns"),
});
