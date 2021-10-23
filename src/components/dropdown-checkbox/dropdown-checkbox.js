class ListCheckbox {
  constructor(el) {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.render(el);
  }

  render(el) {
    this.title = el.querySelector(".dropdown-checkbox__title");
    this.list = el.querySelector(".dropdown-checkbox__list");
    this.addEventListeners();
  }

  open() {
    this.title.classList.toggle("dropdown-checkbox__title_active");
    this.list.classList.toggle("dropdown-checkbox__list_active");
  }

  close() {
    this.title.classList.remove("dropdown-checkbox__title_active");
    this.list.classList.remove("dropdown-checkbox__list_active");
  }

  addEventListeners() {
    this.title.addEventListener("click", (e) => e.stopPropagation());
    this.list.addEventListener("click", (e) => e.stopPropagation());
    this.title.addEventListener("click", this.open);
    document.addEventListener("click", this.close);
  }
}
if (document.querySelector(".dropdown-checkbox")) {
  new ListCheckbox(document.querySelector(".dropdown-checkbox"));
}
