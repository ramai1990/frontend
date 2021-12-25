/* eslint-disable no-shadow */
/* eslint-disable func-names */
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
(function () {
  const rangeElements = document.querySelector('.js-range');
  if (rangeElements) {
    let keypressSlider = document.querySelector('.js-range-keypress');
    let input0 = document.querySelector('.js-range-from');
    let input1 = document.querySelector('.js-range-to');
    let inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
      start: [5000, 10000],
      connect: true,
      step: 1000,
      range: {
        min: [0],
        max: [15000]
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
      })
    });

    keypressSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];

      function setSliderHandle(i, value) {
        let r = [null, null];
        r[i] = value;
        keypressSlider.noUiSlider.set(r);
      }

      inputs.forEach(function (input, handle) {
        input.addEventListener('change', function () {
          setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {
          let values = keypressSlider.noUiSlider.get();
          let value = Number(values[handle]);

          let steps = keypressSlider.noUiSlider.steps();

          let step = steps[handle];

          let position;

          // eslint-disable-next-line default-case
          switch (e.which) {
            case 13:
              setSliderHandle(handle, this.value);
              break;

            case 38:
              position = step[1];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                setSliderHandle(handle, value + position);
              }

              break;

            case 40:
              position = step[0];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                setSliderHandle(handle, value - position);
              }

              break;
          }
        });
      });
    });
  }
}());
