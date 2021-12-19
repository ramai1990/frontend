class Dropdown {
  constructor() {
    this.close = this.close.bind(this);
  }

  render() {
    this.buttons = document.querySelectorAll('.js-dropdown-value');
    this.addEventListeners();
  }

  static toggleClass(el) {
    el.classList.toggle('active');
    el.parentElement.classList.toggle('active');
    el.nextElementSibling.classList.toggle('active');
  }

  static addClass(el) {
    el.classList.add('active');
    el.parentElement.classList.add('active');
    el.nextElementSibling.classList.add('active');
  }

  static removeClass(el) {
    el.classList.remove('active');
    el.parentElement.classList.remove('active');
    el.nextElementSibling.classList.remove('active');
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
        if (button.classList.contains('active')) {
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
