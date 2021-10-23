class Like {
  constructor(el) {
    this.updateValue = this.updateValue.bind(this);
    this.render(el);
  }

  render(el) {
    this.input = el.querySelector(".like__input");
    this.counter = el.querySelector(".like__counter");
    this.value = parseInt(this.counter.textContent);
    this.updateValue();
    this.input.addEventListener("change", this.updateValue);
  }

  updateValue() {
    this.value += this.input.checked ? 1 : -1;
    this.counter.textContent = this.shortValue(this.value);
  }

  shortValue(value) {
    if (value >= 1e10) return `${(value / 1e9).toFixed(0)}B`;
    if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e7) return `${(value / 1e6).toFixed(0)}M`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
    return value.toString();
  }
}

document.querySelectorAll(".like").forEach((like) => new Like(like));
