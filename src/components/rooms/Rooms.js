class Rooms {
  render(el) {
    let element = document.querySelector(el);
    if (element) {
      this.totalValue = element.previousElementSibling;
      this.drop = element.querySelector('.js-rooms');
      this.dropDownListItems = element.querySelectorAll('.js-rooms-list-item');
      this.buttons = element.querySelectorAll('.js-counter-btn');
      this.addEventListeners();
    }
  }

  static isButtonDisabled(element) {
    const minBtn = element.parentElement.querySelector(
      '[data-direction="minus"]'
    );
    const input = element.parentElement.querySelector('.js-counter-value');
    if (+input.value === 0) {
      minBtn.classList.remove('active');
    } else {
      minBtn.classList.add('active');
    }
  }

  static counter(btn) {
    const direction = btn.dataset.direction;
    const input = btn.parentElement.querySelector('.js-counter-value');
    const currentValue = +input.value;
    if (direction === 'minus') {
      input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
      Rooms.isButtonDisabled(btn);
    } else if (direction === 'plus') {
      input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
      Rooms.isButtonDisabled(btn);
    }
  }

  static getCounterValue(n, textForms) {
    let forms = textForms;
    let number = n;
    forms = forms.split(',');
    number = Math.abs(number) % 100;
    let n1 = number % 10;
    if (number > 10 && number < 20) {
      return forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return forms[1];
    }
    if (n1 === 1) {
      return forms[0];
    }
    return forms[2];
  }

  printValue() {
    let list = [...document.querySelectorAll('.js-counter-value')];
    list = list.map((el) => {
      const word = Rooms.getCounterValue(el.value, el.dataset.value);
      return `${el.value} ${word}`;
    });
    this.totalValue.value = list.join(', ');
  }

  addEventListeners() {
    this.dropDownListItems.forEach((list) => list.addEventListener('click', () => this.printValue()));
    this.buttons.forEach((btn) => {
      Rooms.isButtonDisabled(btn);
      btn.addEventListener('click', () => Rooms.counter(btn));
    });
  }
}

export default Rooms;
