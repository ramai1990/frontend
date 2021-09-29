class InnactiveButton {
  constructor({ buttons }) {
    this.buttons = buttons;
    this.render();
  }

  render() {
    const clearBtn = this.clearBtn;
    this.buttons.forEach((btn) => {
      const minBtn = btn.parentElement.querySelector(
        '[data-direction="minus"]'
      );

      const input = btn.parentElement.querySelector(".counter__value");
      clearBtn(input.value, minBtn);

      btn.addEventListener("click", function () {
        clearBtn(input.value, minBtn);
      });
    });
  }

  clearBtn(value, btn) {
    if (+value === 0) {
      btn.style.opacity = "0.3";
    } else {
      btn.style.opacity = "1";
    }
  }
}

const innactiveButton = new InnactiveButton({
  buttons: document.querySelectorAll(".counter__btn"),
});
