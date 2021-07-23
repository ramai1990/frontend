import quantity from "./quantity";

class Dropdown {
  constructor({ drop, dropDownBtn, dropDownList }) {
    this.drop = drop;
    this.dropDownBtn = dropDownBtn;
    this.dropDownList = dropDownList;
    this.addEventListeners();
    this.show();
  }

  addEventListeners() {
    if (this.dropDownBtn) {
      this.dropDownBtn.addEventListener("click", this.open.bind(this));
    }

    document.addEventListener("click", this.close.bind(this));
  }

  show() {
    function quantity(n, text_forms) {
      text_forms = text_forms.split(",");
      n = Math.abs(n) % 100;
      var n1 = n % 10;
      if (n > 10 && n < 20) {
        return text_forms[2];
      }
      if (n1 > 1 && n1 < 5) {
        return text_forms[1];
      }
      if (n1 == 1) {
        return text_forms[0];
      }
      return text_forms[2];
    }

    this.drop.forEach(function (dropDownWrapper) {
      const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();

          const printValue = (obj) => {
            let list = [...obj.querySelectorAll(".counter__value")];
            list = list.map((el) => {
              const word = quantity(el.value, el.dataset.value);
              return `${el.value} ${word}`;
            });
            obj.querySelector(".dropdown__input").value = list.join(", ");
          };
          printValue(dropDownWrapper);
        });
      });
    });
  }

  open() {
    this.dropDownList.classList.toggle("dropdown__list_active");
    this.dropDownBtn.classList.toggle("dropdown__button_active");
  }

  close(e) {
    if (e.target !== this.dropDownBtn && this.dropDownList) {
      this.dropDownBtn.classList.remove("dropdown__button_active");
      this.dropDownList.classList.remove("dropdown__list_active");
    }
  }
}

const dropdown = new Dropdown({
  drop: document.querySelectorAll(".dropdown"),
  dropDownBtn: document.querySelector('[data-btn="btn"]'),
  dropDownList: document.querySelector('[data-list="list"]'),
});
