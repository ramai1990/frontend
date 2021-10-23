class InnactiveButton {
  constructor(el) {
    this.clearBtn = this.clearBtn.bind(this);
    this.render(el);
  }

  render(el) {
    this.buttons = el.querySelectorAll(".counter__btn");
    this.minBtn = el.querySelector('[data-direction="minus"]');
    this.input = el.querySelector(".counter__value");
    this.clearBtn();
    this.addEventListeners();
  }

  clearBtn() {
    if (+this.input.value === 0) {
      this.minBtn.classList.remove("active");
    } else {
      this.minBtn.classList.add("active");
    }
  }

  addEventListeners() {
    this.buttons.forEach((btn) => btn.addEventListener("click", this.clearBtn));
  }
}

document
  .querySelectorAll(".counter")
  .forEach((btn) => new InnactiveButton(btn));
