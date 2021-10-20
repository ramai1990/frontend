class Burger {
  constructor() {
    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);
    this.render();
  }

  toggle(e) {
    e.stopPropagation();
    this.close.classList.toggle("active");
    this.navList.classList.toggle("active");
    this.headerButtons.classList.toggle("active");
  }

  removeClass() {
    this.close.classList.remove("active");
    this.navList.classList.remove("active");
    this.headerButtons.classList.remove("active");
  }

  hide(e) {
    const target = e.target;
    const itsMenu = target == this.navList || this.navList.contains(target);
    const itsBtnMenu = target == this.button;
    const menuIsActive = this.navList.classList.contains("active");
    if (!itsMenu && !itsBtnMenu && menuIsActive) {
      this.removeClass();
    }
  }

  render() {
    this.button = document.querySelector(".burger");
    this.close = document.querySelector(".burger span");
    this.navList = document.querySelector(".nav__list");
    this.headerButtons = document.querySelector(".header__buttons");
    if (this.button) {
      this.button.addEventListener("click", this.toggle);
      document.addEventListener("click", this.hide);
    }
  }
}

const burger = new Burger();
