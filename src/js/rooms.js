class Rooms {
  constructor(buttons) {
    this.buttons = buttons
    this.input = 0
    this.counter()
  }

  counter() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        this.input = this.parentElement.querySelector('.counter__value')

        const currentValue = +this.input.value

        if (direction === 'minus') {
          this.input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
        } else if (direction === 'plus') {
          this.input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
        }

      })
    })
  }

}

const counter = new Rooms(document.querySelectorAll('.counter__btn'))