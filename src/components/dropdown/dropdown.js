import quantity from "../../js/quantity";

class Dropdown {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.printValue = this.printValue.bind(this);
    this.render(el);
  }

  render(el) {
    this.drop = document.querySelector(el);
    this.dropDownList = this.drop.querySelector('[data-list="list"]');
    this.dropDownBtn = this.drop.querySelector('[data-btn="btn"]');
    this.dropDownListItems = this.drop.querySelectorAll(".dropdown__list-item");
    this.addEventListeners();
  }

  printValue() {
    let list = [...this.drop.querySelectorAll(".counter__value")];
    list = list.map((el) => {
      const word = quantity(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });
    this.drop.querySelector(".dropdown__input").value = list.join(", ");
  }

  open() {
    this.dropDownList.classList.toggle("dropdown__list_active");
    this.dropDownBtn.classList.toggle("dropdown__button_active");
  }

  close(e) {
    if (e.target !== this.dropDownBtn && this.dropDownList) {
      this.dropDownBtn.classList.remove("dropdown__button_active");
      this.dropDownList.classList.remove("dropdown__list_active");
    }
  }

  addEventListeners() {
    this.dropDownList.addEventListener("click", (e) => e.stopPropagation());
    this.dropDownBtn.addEventListener("click", this.open);
    document.addEventListener("click", this.close);
    this.dropDownListItems.forEach((list) =>
      list.addEventListener("click", this.printValue)
    );
  }
}

const dropdown = new Dropdown(".dropdown");
