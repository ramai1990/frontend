(function () {

  function declOfNum(n, text_forms) {
    text_forms = text_forms.split(',');
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }

  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const guestListItems = dropDownList.querySelectorAll('.guest__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    const btnClear = document.querySelector('.clear')


    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--active');
      this.classList.add('dropdown__button--active');
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        // const inp = listItem.querySelector('.counter__value');
        // dropDownBtn.textContent = inp.value + ' ' + declOfNum(inp.value, this.dataset.value);

        const printValue = (obj) => {
          let list = [...obj.querySelectorAll('.counter__value')];
          list = list.map((el) => {
            const word = declOfNum(el.value, el.dataset.value);
            return `${el.value} ${word}`;
          });
          obj.querySelector('.dropdown__input').value = list.join(', ');
        };
        printValue(dropDownWrapper)

        // dropDownBtn.focus();
        // dropDownInput.value = this.dataset.value;
        // dropDownList.classList.remove('dropdown__list--active');
      });
    });



    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {

      if (e.target !== dropDownBtn && e.target !== btnClear) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--active');
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--active');
      }
    });
  });

}())
