class Dropdown {
  constructor(button, content, buttonApply) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.render(button, content, buttonApply);
  }

  render(button, content, buttonApply) {
    this.button = document.querySelector(button);
    this.content = document.querySelector(content);
    this.buttonApply = document.querySelector(buttonApply);
    this.addEventListeners();
  }

  open() {
    this.button.classList.toggle("active");
    this.content.classList.toggle("active");
  }

  close() {
    this.button.classList.remove("active");
    this.content.classList.remove("active");
  }

  addEventListeners() {
    if ((this.button, this.content, this.buttonApply)) {
      this.content.addEventListener("click", (e) => e.stopPropagation());
      this.button.addEventListener("click", (e) => e.stopPropagation());
      this.buttonApply.addEventListener("click", this.close);
      this.button.addEventListener("click", this.open);
      document.addEventListener("click", this.close);
    }
  }
}

export default Dropdown;
