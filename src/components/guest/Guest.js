class Guest {
  constructor(el) {
    this.count = 0;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.findTotal = this.findTotal.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.render(el);
  }

  render(el) {
    this.dropdown = document.querySelector(".guest");
    this.contents = document.querySelector(".guest__contents");
    this.currentValue = el.querySelector(".guest__value");
    this.btnIncrement = el.querySelector('.guest__btn[data-btn="plus"]');
    this.btnDecrement = el.querySelector('.guest__btn[data-btn="minus"]');
    this.values = document.querySelectorAll(
      '.guest__value[data-value="guest"]'
    );
    this.children = document.querySelector(
      '.guest__value[data-value="children"]'
    );
    this.totalValue = document.querySelector(".guest__input");
    this.btnApply = document.querySelector(".apply");
    this.btnClear = document.querySelector(".clear");
    this.isButtonActive(this.btnDecrement);
    this.addEventListeners();
  }

  increment() {
    this.updateValue(++this.count);
    this.isButtonActive(this.btnClear);
    this.isButtonDisasbled(this.btnDecrement);
  }

  decrement() {
    if (this.count > 0) {
      this.updateValue(--this.count);
    }
    if (this.count === 0) {
      this.isButtonActive(this.btnDecrement);
    }
  }

  updateValue(val) {
    this.currentValue.value = val;
  }

  clearValue() {
    this.count = 0;
    this.currentValue.value = 0;
    this.totalValue.value = "Сколько гостей";
  }

  findChildren() {
    const children = ["младенец", "младенца", "младенцев"];
    if (this.children.value < 1) {
      return "";
    } else if (this.children.value < 2) {
      return `, ${this.children.value} ${children[0]}`;
    } else if (this.children.value > 1 && this.children.value < 5) {
      return `, ${this.children.value} ${children[1]}`;
    } else if (this.children.value > 4) {
      return `, ${this.children.value} ${children[2]}`;
    }
  }

  findTotal() {
    let total = 0;
    for (let i = 0; i < this.values.length; i++) {
      total += parseInt(this.values[i].value);
    }
    const guest = ["гость", "гостя", "гостей"];
    if (total === 0) {
      this.isButtonDisasbled(this.btnClear);
      this.totalValue.value = "Сколько гостей";
    } else if (total === 1) {
      this.totalValue.value = `${total} ${guest[0]}${this.findChildren()}`;
    } else if (total > 1 && total < 5) {
      this.totalValue.value = `${total} ${guest[1]}${this.findChildren()}`;
    } else if (total > 4) {
      this.totalValue.value = `${total} ${guest[2]}${this.findChildren()}`;
    }
    if (this.children.value > 0) {
      this.isButtonActive(this.btnClear);
    }
  }

  isButtonDisasbled(btn) {
    btn.classList.remove("active");
  }

  isButtonActive(btn) {
    btn.classList.add("active");
  }

  addEventListeners() {
    this.btnIncrement.addEventListener("click", () => {
      this.increment();
    });
    this.btnDecrement.addEventListener("click", () => {
      this.decrement();
    });
    this.btnApply.addEventListener("click", () => {
      this.findTotal();
    });
    this.btnClear.addEventListener("click", () => {
      this.clearValue();
      this.isButtonDisasbled(this.btnClear);
      this.isButtonActive(this.btnDecrement);
    });
  }
}

export default Guest;
