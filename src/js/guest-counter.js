const btnsGuest = document.querySelectorAll('.counter__btn-guest');
const btnClear = document.querySelector('.clear')
const btnApply = document.querySelector('.apply')
const inp1 = document.querySelector('.dropdown__input-guest')
// const inputs = document.querySelector('.guest__counter')
const inputs = document.querySelectorAll('.guest__counter')
const guest = document.querySelector('.guest')
const list = document.querySelector('.dropdown__list-item')

function declOfNum(n, text_forms) {
  text_forms = text_forms.split(',');
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}




btnsGuest.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;

    const inpGuest = this.parentElement.querySelector('.guest__counter');
    const currentValue = +inpGuest.value;
    let newValue;

    if (direction === 'minus') {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    } else if (direction === 'plus') {
      newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
    }

    inpGuest.value = newValue;

    var sum = 0;
    inputs.forEach(function (i) {
      sum += parseInt(i.value)
    })

    btnClear.addEventListener('click', function () {
      inpGuest.value = 0
      inp1.value = 'Сколько гостей'
    })

    btnApply.addEventListener('click', function (e) {
      inp1.value = sum + ' ' + declOfNum(sum, list.dataset.value)

    })

  })
})