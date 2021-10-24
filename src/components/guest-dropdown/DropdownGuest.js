import getCounterValue from "../../js/getCounterValue";

class DropdownGuest {
  constructor(el) {
    this.sum = 0;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.render(el);
  }

  render(el) {
    this.dropDownBtn = el.querySelector(".dropdown__button");
    this.dropDownList = el.querySelector(".dropdown__list");
    this.btnApply = el.querySelector(".apply");
    this.dropdownguest = document.querySelector(".dropdown-guest");
    this.btnsGuest = document.querySelectorAll(".counter__btn-guest");
    this.btnClear = document.querySelector(".clear");
    this.btnApply = document.querySelector(".apply");
    this.input = document.querySelector(".dropdown__input-guest");
    this.inputs = document.querySelectorAll(".guest__counter");
    this.list = document.querySelector(".dropdown__list-item");
    this.counter();
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

  updateValue() {
    this.input.value = `${this.sum} ${getCounterValue(
      this.sum,
      this.list.dataset.value
    )}`;

    this.showValue();
  }

  counter() {
    if (this.dropdownguest) {
      this.btnsGuest.forEach(
        function (btn) {
          const minBtn = btn.parentElement.querySelector(
            "[data-direction='minus']"
          );
          const inpGuest = btn.parentElement.querySelector(".guest__counter");
          btn.addEventListener(
            "click",
            function () {
              const direction = btn.dataset.direction;
              const currentValue = +inpGuest.value;
              this.updateCounter(direction, inpGuest, currentValue);
              this.sum = 0;
              this.updateInputsValue();
              this.btnClear.addEventListener(
                "click",
                function () {
                  this.clearValue(minBtn, inpGuest);
                }.bind(this)
              );
              this.clear(inpGuest.value, minBtn);
              this.clear(this.sum, this.btnClear);
            }.bind(this)
          );
        }.bind(this)
      );
    }
  }

  clearValue(minBtn, inpGuest) {
    inpGuest.value = 0;
    this.input.value = "Сколько гостей";
    this.sum = 0;
    this.btnClear.classList.remove("active");
    minBtn.classList.remove("active");
  }

  updateInputsValue() {
    this.inputs.forEach(
      function (i) {
        this.sum += parseInt(i.value);
      }.bind(this)
    );
  }

  updateCounter(direction, inpGuest, currentValue) {
    if (direction === "minus") {
      inpGuest.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
    } else if (direction === "plus") {
      inpGuest.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
    }
  }

  showValue() {
    let list = [...this.dropdownguest.querySelectorAll(".guest__counter_baby")];

    list = list.map((el) => {
      const word = getCounterValue(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });

    if (list > "1") {
      this.dropdownguest.querySelector(".guest__input").value =
        this.input.value + ", " + list.join(", ");
    }
  }

  clear(sum, btn) {
    const resultSum = sum === 0 || sum < 1;
    if (resultSum) {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }
  }

  addEventListeners() {
    this.dropDownBtn.addEventListener("click", this.open);
    this.btnApply.addEventListener("click", this.close);
    this.dropDownList.addEventListener("click", (e) => e.stopPropagation());
    this.btnApply.addEventListener("click", this.updateValue);
    document.addEventListener("click", this.close);
  }
}

document
  .querySelectorAll(".dropdown-guest")
  .forEach((dropdown) => new DropdownGuest(dropdown));
