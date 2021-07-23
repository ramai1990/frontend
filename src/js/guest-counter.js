import quantity from "./quantity";

class GuestCounter {
  constructor({
    dropdownguest,
    btnsGuest,
    btnClear,
    btnApply,
    input,
    inputs,
    list,
  }) {
    this.dropdownguest = dropdownguest;
    this.btnsGuest = btnsGuest;
    this.btnClear = btnClear;
    this.btnApply = btnApply;
    this.input = input;
    this.inputs = inputs;
    this.list = list;
    this.counter();
  }

  counter() {
    const dropdownguest = this.dropdownguest;
    const btnClear = this.btnClear;
    const btnApply = this.btnApply;
    const input = this.input;
    const inputs = this.inputs;
    const list = this.list;
    const clear = this.clear;
    const showValue = this.showValue;
    if (dropdownguest) {
      btnClear.style.opacity = "0";

      this.btnsGuest.forEach((btn) => {
        btn.addEventListener("click", function () {
          const direction = this.dataset.direction;

          const inpGuest = this.parentElement.querySelector(".guest__counter");
          const currentValue = +inpGuest.value;
          let newValue;

          if (direction === "minus") {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
          } else if (direction === "plus") {
            newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
          }

          inpGuest.value = newValue;

          var sum = 0;
          inputs.forEach(function (i) {
            sum += parseInt(i.value);
          });

          btnClear.addEventListener("click", function () {
            inpGuest.value = 0;
            input.value = "Сколько гостей";
            sum = 0;
            btnClear.style.opacity = "0";
          });

          clear(sum, btnClear);

          btnApply.addEventListener("click", function (e) {
            input.value = sum + " " + quantity(sum, list.dataset.value);

            showValue(dropdownguest, input);
          });
        });
      });
    }
  }

  showValue(obj, input) {
    let list = [...obj.querySelectorAll(".guest__counter_baby")];

    list = list.map((el) => {
      const word = quantity(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });

    if (list > "1") {
      obj.querySelector(".guest__input").value =
        input.value + ", " + list.join(", ");
    }
  }

  clear(sum, btnClear) {
    if (sum == 0 || sum < 1) {
      btnClear.style.opacity = "0";
    } else {
      btnClear.style.opacity = "1";
    }
  }
}

const guestCounter = new GuestCounter({
  dropdownguest: document.querySelector(".dropdown-guest"),
  btnsGuest: document.querySelectorAll(".counter__btn-guest"),
  btnClear: document.querySelector(".clear"),
  btnApply: document.querySelector(".apply"),
  input: document.querySelector(".dropdown__input-guest"),
  inputs: document.querySelectorAll(".guest__counter"),
  list: document.querySelector(".dropdown__list-item"),
});
