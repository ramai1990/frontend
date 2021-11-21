import getCounterValue from "../../js/getCounterValue";
import Dropdown from "../dropdown/Dropdown";

class Rooms {
  constructor(el) {
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
    this.render(el);
  }

  render(el) {
    this.drop = el.querySelector(".rooms");
    this.dropDownListItems = el.querySelectorAll(".rooms__list-item");
    this.buttons = el.querySelectorAll(".counter__btn");
    this.addEventListeners();
  }

  isButtonDisabled(element) {
    const minBtn = element.parentElement.querySelector(
      '[data-direction="minus"]'
    );
    const input = element.parentElement.querySelector(".counter__value");
    if (+input.value === 0) {
      minBtn.classList.remove("active");
    } else {
      minBtn.classList.add("active");
    }
  }

  counter(btn) {
    const direction = btn.dataset.direction;
    const input = btn.parentElement.querySelector(".counter__value");
    const currentValue = +input.value;
    if (direction === "minus") {
      input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
      this.isButtonDisabled(btn);
    } else if (direction === "plus") {
      input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
      this.isButtonDisabled(btn);
    }
  }

  printValue() {
    let list = [...document.querySelectorAll(".counter__value")];
    list = list.map((el) => {
      const word = getCounterValue(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });
    document.querySelector(".rooms__input").value = list.join(", ");
  }

  addEventListeners() {
    this.dropDownListItems.forEach((list) =>
      list.addEventListener("click", this.printValue)
    );
    this.buttons.forEach((btn) => {
      this.isButtonDisabled(btn);
      btn.addEventListener(
        "click",
        function () {
          this.counter(btn);
        }.bind(this)
      );
    });
  }
}

if (document.querySelector(".rooms")) {
  new Rooms(document.querySelector(".rooms"));
}
if (document.querySelector(".rooms__button", ".rooms__list")) {
  new Dropdown(".rooms__button", ".rooms__list");
}
