class SubMenu {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.render();
  }

  render() {
    if (this.navList) {
      this.navList = document.querySelector(".nav__list");
      this.navLink = this.navList.querySelectorAll(".nav__link_dropdown");
      this.submenu = document.querySelectorAll(".submenu__list");
      this.submenu.forEach((el) =>
        el.addEventListener("click", (e) => e.stopPropagation())
      );
      this.navList.addEventListener("click", this.open);
      document.addEventListener("click", this.close);
    }
  }

  open(e) {
    e.stopPropagation();
    let el = e.target;
    if (el.classList.contains("active")) {
      el.classList.toggle("active");
      el.nextElementSibling.classList.toggle("active");
    } else {
      this.navLink.forEach((link) => {
        this.removeClass(link);
      });
      this.addClass(el);
    }
  }

  removeClass(el) {
    el.classList.remove("active");
    el.nextElementSibling.classList.remove("active");
  }

  addClass(el) {
    el.classList.add("active");
    el.nextElementSibling.classList.add("active");
  }

  close(e) {
    if (this.navLink) {
      this.navLink.forEach((el) => el.classList.remove("active"));
      this.submenu.forEach((el) => el.classList.remove("active"));
    }
  }
}

const submenu = new SubMenu();
