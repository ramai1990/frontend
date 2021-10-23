import getCounterValue from "../../js/getCounterValue";

class Dropdown {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.render(el);
  }

  render(el) {
    this.drop = el.querySelector(".dropdown");
    this.dropDownList = el.querySelector(".dropdown__list");
    this.dropDownBtn = el.querySelector('[data-btn="btn"]');
    this.dropDownListItems = el.querySelectorAll(".dropdown__list-item");
    this.addEventListeners();
  }

  printValue() {
    let list = [...document.querySelectorAll(".counter__value")];
    list = list.map((el) => {
      const word = getCounterValue(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });
    document.querySelector(".dropdown__input").value = list.join(", ");
  }

  open() {
    this.dropDownList.classList.toggle("dropdown__list_active");
    this.dropDownBtn.classList.toggle("dropdown__button_active");
  }

  close() {
    this.dropDownBtn.classList.remove("dropdown__button_active");
    this.dropDownList.classList.remove("dropdown__list_active");
  }

  addEventListeners() {
    this.dropDownList.addEventListener("click", (e) => e.stopPropagation());
    this.dropDownBtn.addEventListener("click", (e) => e.stopPropagation());
    this.dropDownBtn.addEventListener("click", this.open);
    this.dropDownListItems.forEach((list) =>
      list.addEventListener("click", this.printValue)
    );
    document.addEventListener("click", this.close);
  }
}

if (document.querySelector(".dropdown")) {
  const dropdown = new Dropdown(document.querySelector(".dropdown"));
}
