import AirDatepicker from 'air-datepicker';

// eslint-disable-next-line no-new
new AirDatepicker('.air-datepicker__range', {
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
        document.querySelector('.air-datepicker__range').classList.remove('visible');
        document.querySelector('.air-datepicker__range').previousElementSibling.classList.remove('visible');
        document.querySelector('.air-datepicker__range').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-applyRange').classList.add('active');
    }
    document.querySelector('.air-datepicker__range').previousElementSibling.value = document.querySelector('.air-datepicker__range').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.air-datepicker__from', {
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
        document.querySelector('.air-datepicker__from').classList.remove('visible');
        document.querySelector('.air-datepicker__from').previousElementSibling.classList.remove('visible');
        document.querySelector('.air-datepicker__from').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearFrom').classList.add('active');
    }
    document.querySelector('.air-datepicker__from').previousElementSibling.value = document.querySelector('.air-datepicker__from').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.air-datepicker__to', {
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
        document.querySelector('.air-datepicker__to').classList.remove('visible');
        document.querySelector('.air-datepicker__to').previousElementSibling.classList.remove('visible');
        document.querySelector('.air-datepicker__to').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clearTo').classList.add('active');
    }
    document.querySelector('.air-datepicker__to').previousElementSibling.value = document.querySelector('.air-datepicker__to').value;
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.cards__datepicker', {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
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
      document.querySelector('.js-clearRange').classList.add('active');
    }
  }
});

const airDatepickerButtons = document.querySelectorAll('.air-datepicker-button');
airDatepickerButtons.forEach(button => {
  button.setAttribute('type', 'button');
});
