class Like {
  constructor(el) {
    this.updateValue = this.updateValue.bind(this);
    this.render(el);
  }

  render(el) {
    this.input = el.querySelector('.js-like-input');
    this.counter = el.querySelector('.js-like-counter');
    this.value = parseInt(this.counter.textContent, 10);
    this.updateValue();
    this.input.addEventListener('change', this.updateValue);
  }

  updateValue() {
    this.value += this.input.checked ? 1 : -1;
    this.counter.textContent = Like.shortValue(this.value);
  }

  static shortValue(value) {
    if (value >= 1e10) return `${(value / 1e9).toFixed(0)}B`;
    if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e7) return `${(value / 1e6).toFixed(0)}M`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
    return value.toString();
  }
}

export default Like;
