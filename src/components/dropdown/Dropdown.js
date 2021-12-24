class Dropdown {
  constructor() {
    this.close = this.close.bind(this);
  }

  render() {
    this.buttons = document.querySelectorAll('.js-dropdown-value');
    this.addEventListeners();
  }

  static toggleClass(el) {
    el.classList.toggle('visible');
    el.parentElement.classList.toggle('visible');
    el.nextElementSibling.classList.toggle('visible');
  }

  static addClass(el) {
    el.classList.add('visible');
    el.parentElement.classList.add('visible');
    el.nextElementSibling.classList.add('visible');
  }

  static removeClass(el) {
    el.classList.remove('visible');
    el.parentElement.classList.remove('visible');
    el.nextElementSibling.classList.remove('visible');
  }

  close(e) {
    e.stopPropagation();
    this.buttons.forEach(el => Dropdown.removeClass(el));
  }

  addEventListeners() {
    this.buttons.forEach((button)=>{
      button.parentElement.addEventListener('click', e => e.stopPropagation());
      button.nextElementSibling.addEventListener('click', e => e.stopPropagation());
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (button.classList.contains('visible')) {
          Dropdown.toggleClass(button);
        } else {
          this.buttons.forEach(el => Dropdown.removeClass(el));
          Dropdown.addClass(button);
        }
      });
    });
    document.addEventListener('click', this.close);
  }
}

export default Dropdown;
