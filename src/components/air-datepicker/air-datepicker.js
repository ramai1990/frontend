import AirDatepicker from 'air-datepicker';

// eslint-disable-next-line no-new
new AirDatepicker('.js-air-datepicker-range', {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat(date) {
    return date.toLocaleString('ru', {
      day: '2-digit',
      month: 'short'
    });
  },
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearRange',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearRange').classList.remove('active');
      }
    },
    {
      content: 'Применить',
      className: 'js-applyRange',
      onClick() {
        document.querySelector('.js-air-datepicker-range').classList.remove('visible');
        document.querySelector('.js-air-datepicker-range').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-air-datepicker-range').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearRange').classList.add('active');
    }
    document.querySelector('.js-air-datepicker-range').previousElementSibling.value = document.querySelector('.js-air-datepicker-range').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.js-air-datepicker-from', {
  minDate: new Date(),
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearFrom',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearFrom').classList.remove('active');
      }
    },
    {
      content: 'Применить',
      className: 'js-applyForm',
      onClick() {
        document.querySelector('.js-air-datepicker-from').classList.remove('visible');
        document.querySelector('.js-air-datepicker-from').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-air-datepicker-from').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearFrom').classList.add('active');
    }
    document.querySelector('.js-air-datepicker-from').previousElementSibling.value = document.querySelector('.js-air-datepicker-from').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.js-air-datepicker-to', {
  minDate: new Date(),
  position: 'bottom left',
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearTo',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearTo').classList.remove('active');
      }
    },
    {
      content() {
        return 'Применить';
      },
      onClick(dp) {
        dp.hide();
        document.querySelector('.js-air-datepicker-to').classList.remove('visible');
        document.querySelector('.js-air-datepicker-to').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-air-datepicker-to').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearTo').classList.add('active');
    }
    document.querySelector('.js-air-datepicker-to').previousElementSibling.value = document.querySelector('.js-air-datepicker-to').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.js-air-datepicker-inline', {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearInline',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearInline').classList.remove('active');
      }
    },
    {
      content() {
        return 'Применить';
      },
      onClick(dp) {
        dp.hide();
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearInline').classList.add('active');
    }
  }
});

const airDatepickerButtons = document.querySelectorAll('.air-datepicker-button');
airDatepickerButtons.forEach(button => {
  button.setAttribute('type', 'button');
});
