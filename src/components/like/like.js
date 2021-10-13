class Like {
  constructor(elem) {
    this.init(elem);
  }
  render() {
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

  init(elem) {
    this.input = elem.querySelector(".like__input");
    this.counter = elem.querySelector(".like__counter");
    this.value = parseInt(this.counter.textContent);
    this.render();
    this.input.addEventListener("change", this.render.bind(this));
  }
}

document.querySelectorAll(".like").forEach((like) => new Like(like));
