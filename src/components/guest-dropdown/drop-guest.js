import getCounterValue from "../../js/getCounterValue";

class DropdownGuest {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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

  addEventListeners() {
    this.dropDownBtn.addEventListener("click", this.open);
    this.btnApply.addEventListener("click", this.close);
    this.dropDownList.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", this.close);
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
              let newValue;

              if (direction === "minus") {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
              } else if (direction === "plus") {
                newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
              }

              inpGuest.value = newValue;

              let sum = 0;
              this.inputs.forEach(function (i) {
                sum += parseInt(i.value);
              });

              this.btnClear.addEventListener(
                "click",
                function () {
                  inpGuest.value = 0;
                  this.input.value = "Сколько гостей";
                  sum = 0;
                  this.btnClear.classList.remove("active");
                  minBtn.classList.remove("active");
                }.bind(this)
              );

              this.clear(inpGuest.value, minBtn);
              this.clear(sum, this.btnClear);

              this.btnApply.addEventListener(
                "click",
                function (e) {
                  this.input.value = `${sum} ${getCounterValue(
                    sum,
                    this.list.dataset.value
                  )}`;

                  this.showValue();
                }.bind(this)
              );
            }.bind(this)
          );
        }.bind(this)
      );
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
    if (sum === 0 || sum < 1) {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }
  }
}

document
  .querySelectorAll(".dropdown-guest")
  .forEach((dropdown) => new DropdownGuest(dropdown));
