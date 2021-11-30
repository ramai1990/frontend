import AirDatepicker from 'air-datepicker';

// eslint-disable-next-line no-new
new AirDatepicker('.js-dropdown-date-range-input', {
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
        document.querySelector('.js-clearRange').classList.remove('open');
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
      document.querySelector('.js-clearRange').classList.add('open');
    }
  },
  // eslint-disable-next-line func-names
  onShow: function (animationCompleted) {
    if (!animationCompleted) {
      document.querySelector('.js-dropdown-date-range').classList.add('active');
    }
  },
  // eslint-disable-next-line func-names
  onHide: function (animationCompleted) {
    if (!animationCompleted) {
      document
        .querySelector('.js-dropdown-date-range')
        .classList.remove('active');
    }
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.js-dropdown-date-from-input', {
  minDate: new Date(),
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearForm',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearForm').classList.remove('open');
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
      document.querySelector('.js-clearForm').classList.add('open');
    }
  },
  // eslint-disable-next-line func-names
  onShow: function (animationCompleted) {
    if (!animationCompleted) {
      document.querySelector('.js-dropdown-date-from').classList.add('active');
    }
  },
  // eslint-disable-next-line func-names
  onHide: function (animationCompleted) {
    if (!animationCompleted) {
      document
        .querySelector('.js-dropdown-date-from')
        .classList.remove('active');
    }
  }
});

// eslint-disable-next-line no-new
new AirDatepicker('.js-dropdown-date-to-input', {
  minDate: new Date(),
  position: 'bottom right',
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clearTo',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clearTo').classList.remove('open');
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
      document.querySelector('.js-clearTo').classList.add('open');
    }
  },
  // eslint-disable-next-line func-names
  onShow: function (animationCompleted) {
    if (!animationCompleted) {
      document.querySelector('.js-dropdown-date-to').classList.add('active');
    }
  },
  // eslint-disable-next-line func-names
  onHide: function (animationCompleted) {
    if (!animationCompleted) {
      document.querySelector('.js-dropdown-date-to').classList.remove('active');
    }
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
        document.querySelector('.js-clearRange').classList.remove('open');
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
      document.querySelector('.js-clearRange').classList.add('open');
    }
  }
});
