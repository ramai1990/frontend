const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;

    const inp = this.parentElement.querySelector('.counter__value');

    const currentValue = +inp.value;
    let newValue;

    if (direction === 'minus') {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    } else if (direction === 'plus') {
      newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
    }

    // if (direction === 'plus') {
    //   newValue = currentValue + 1;
    // } else {
    //   newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
    // }

    inp.value = newValue;

  })
})