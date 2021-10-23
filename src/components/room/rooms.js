class Rooms {
  constructor(selector) {
    this.counter = this.counter.bind(this);
    this.render(selector);
  }

  render(selector) {
    this.buttons = document.querySelectorAll(selector);
    this.counter();
  }

  counter() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const direction = this.dataset.direction;
        this.input = this.parentElement.querySelector(".counter__value");

        const currentValue = +this.input.value;

        if (direction === "minus") {
          this.input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
        } else if (direction === "plus") {
          this.input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
        }
      });
    });
  }
}

new Rooms(".counter__btn");
