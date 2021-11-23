import AirDatepicker from "air-datepicker";

new AirDatepicker(".js-dropdown-date-range-input", {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: " - ",
  dateFormat(date) {
    return date.toLocaleString("ru", {
      day: "2-digit",
      month: "short",
    });
  },
  navTitles: {
    days: "<h2>MMMM yyyy</h2>",
  },
  buttons: [
    {
      content: "Очистить",
      className: "js-clearRange",
      onClick(dp) {
        dp.clear();
        document.querySelector(".js-clearRange").classList.remove("open");
      },
    },
    {
      content() {
        return "Применить";
      },
      onClick(dp) {
        dp.hide();
      },
    },
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector(".js-clearRange").classList.add("open");
    }
  },
  onShow: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document.querySelector(".js-dropdown-date-range").classList.add("active");
    }
  },
  onHide: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document
        .querySelector(".js-dropdown-date-range")
        .classList.remove("active");
    }
  },
});

new AirDatepicker(".js-dropdown-date-from-input", {
  minDate: new Date(),
  navTitles: {
    days: "<h2>MMMM yyyy</h2>",
  },
  buttons: [
    {
      content: "Очистить",
      className: "js-clearForm",
      onClick(dp) {
        dp.clear();
        document.querySelector(".clearForm").classList.remove("open");
      },
    },
    {
      content() {
        return "Применить";
      },
      onClick(dp) {
        dp.hide();
      },
    },
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector(".clearForm").classList.add("open");
    }
  },
  onShow: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document.querySelector(".js-dropdown-date-from").classList.add("active");
    }
  },
  onHide: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document
        .querySelector(".js-dropdown-date-from")
        .classList.remove("active");
    }
  },
});

new AirDatepicker(".js-dropdown-date-to-input", {
  minDate: new Date(),
  position: "bottom right",
  navTitles: {
    days: "<h2>MMMM yyyy</h2>",
  },
  buttons: [
    {
      content: "Очистить",
      className: "js-clearTo",
      onClick(dp) {
        dp.clear();
        document.querySelector(".js-clearTo").classList.remove("open");
      },
    },
    {
      content() {
        return "Применить";
      },
      onClick(dp) {
        dp.hide();
      },
    },
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector(".clearTo").classList.add("open");
    }
  },
  onShow: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document.querySelector(".js-dropdown-date-to").classList.add("active");
    }
  },
  onHide: function (dp, animationCompleted) {
    if (!animationCompleted) {
      document.querySelector(".js-dropdown-date-to").classList.remove("active");
    }
  },
});

new AirDatepicker(".cards__datepicker", {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: " - ",
  navTitles: {
    days: "<h2>MMMM yyyy</h2>",
  },
  buttons: [
    {
      content: "Очистить",
      className: "js-clearRange",
      onClick(dp) {
        dp.clear();
        document.querySelector(".js-clearRange").classList.remove("open");
      },
    },
    {
      content() {
        return "Применить";
      },
      onClick(dp) {
        dp.hide();
      },
    },
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector(".js-clearRange").classList.add("open");
    }
  },
});
