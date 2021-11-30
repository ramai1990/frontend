class Dropdown {
  constructor() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  render(button, content) {
    this.button = document.querySelector(button);
    this.content = document.querySelector(content);
    this.addEventListeners();
  }

  open() {
    this.button.classList.toggle('active');
    this.content.classList.toggle('active');
  }

  close() {
    this.button.classList.remove('active');
    this.content.classList.remove('active');
  }

  addEventListeners() {
    if ((this.button, this.content)) {
      this.content.addEventListener('click', (e) => e.stopPropagation());
      this.button.addEventListener('click', (e) => e.stopPropagation());
      this.button.addEventListener('click', this.open);
      document.addEventListener('click', this.close);
    }
  }
}

export default Dropdown;
