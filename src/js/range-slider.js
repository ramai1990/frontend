import noUiSlider from "nouislider";
import wNumb from "wnumb";
(function () {
  const rangeElements = document.querySelector('.range-elements')
  if (rangeElements) {

    var keypressSlider = document.querySelector(".slider-keypress");
    var input0 = document.querySelector(".input-with-keypress-0");
    var input1 = document.querySelector(".input-with-keypress-1");
    var inputs = [input0, input1];

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
        suffix: '₽',
      })
    });

    keypressSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = values[handle];

      function setSliderHandle(i, value) {
        var r = [null, null];
        r[i] = value;
        keypressSlider.noUiSlider.set(r);
      }

      inputs.forEach(function (input, handle) {
        input.addEventListener("change", function () {
          setSliderHandle(handle, this.value);
        });

        input.addEventListener("keydown", function (e) {
          var values = keypressSlider.noUiSlider.get();
          var value = Number(values[handle]);

          var steps = keypressSlider.noUiSlider.steps();

          var step = steps[handle];

          var position;

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


}())