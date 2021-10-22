import getCounterValue from "../../js/getCounterValue";

class DropdownGuest {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.hide = this.hide.bind(this);
    this.render(el);
  }

  render(el) {
    this.dropDownBtn = el.querySelector(".dropdown__button");
    this.dropDownList = el.querySelector(".dropdown__list");
    this.btnsGuest = el.querySelectorAll(".counter__btn-guest");
    this.btnApply = el.querySelector(".apply");
    this.btnClear = el.querySelector(".clear");
    this.addEventListeners();
  }

  open(e) {
    e.stopPropagation();
    this.dropDownList.classList.toggle("dropdown__list_active");
    this.dropDownBtn.classList.toggle("dropdown__button_active");
  }

  close() {
    this.dropDownList.classList.remove("dropdown__list_active");
    this.dropDownBtn.classList.remove("dropdown__button_active");
  }

  hide(e) {
    const itsMenu =
      e.target == this.dropDownList || this.dropDownList.contains(e.target);
    const itsBtnMenu = e.target == this.dropDownBtn;
    const menuIsActive = this.dropDownList.classList.contains(
      "dropdown__list_active"
    );

    if (!itsMenu && !itsBtnMenu && menuIsActive) {
      this.close();
    }
  }

  addEventListeners() {
    this.dropDownBtn.addEventListener("click", this.open);
    this.btnApply.addEventListener("click", this.close);
    document.addEventListener("click", this.hide);
  }
}

document
  .querySelectorAll(".dropdown-guest")
  .forEach((dropdown) => new DropdownGuest(dropdown));
