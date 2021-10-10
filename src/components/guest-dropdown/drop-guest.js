class DropdownGuest {
  constructor(buttons) {
    this.buttons = buttons;
    this.open();
  }

  open() {
    this.buttons.forEach(function (el) {
      const dropDownBtn = el.querySelector(".dropdown__button");
      const dropDownList = el.querySelector(".dropdown__list");
      const btnApply = el.querySelector(".apply");
      const btnClear = el.querySelector(".clear");
      const guestBtn = el.querySelector(".guest__btn");

      dropDownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownList.classList.toggle("dropdown__list_active");
        dropDownBtn.classList.toggle("dropdown__button_active");
      });

      btnApply.addEventListener("click", function (e) {
        dropDownList.classList.remove("dropdown__list_active");
        dropDownBtn.classList.remove("dropdown__button_active");
      });

      const btnMenu = document.querySelector(".dropdown__button");
      const menu = el.querySelector(".guest__list");

      document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == btnMenu;
        const menu_is_active = menu.classList.contains("dropdown__list_active");

        if (!its_menu && !its_btnMenu && menu_is_active) {
          dropDownList.classList.remove("dropdown__list_active");
          dropDownBtn.classList.remove("dropdown__button_active");
        }
      });
    });
  }
}

const dropdown = new DropdownGuest(
  document.querySelectorAll(".dropdown-guest")
);
