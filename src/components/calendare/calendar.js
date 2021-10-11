$(function () {
  $(".filter-date").datepicker({
    onShow: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".air-datepicker").addClass("active");
      }
    },
    onHide: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".air-datepicker").removeClass("active");
      }
    },
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: " - ",
    clearButton: true,
    todayButton: true,
    language: {
      today: "Применить",
    },
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
  });
  $(".datepicker--cells").click(function () {
    $("[data-action=clear]").addClass("open");
  });
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass("open");
  });
  $("[data-action=today]").click(function () {
    $(".filter-date").datepicker().data("datepicker").hide();
    $(".air-datepicker").removeClass("active");
  });

  $(".dropdown-date__range_from").datepicker({
    onShow: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".js-dropdown-date-range-from").addClass("active");
      }
    },
    onHide: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".js-dropdown-date-range-from").removeClass("active");
      }
    },
    minDate: new Date(),
    clearButton: true,
    todayButton: true,
    language: {
      today: "Применить",
    },
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
  });
  $(".datepicker--cells").click(function () {
    $("[data-action=clear]").addClass("open");
  });
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass("open");
  });
  $("[data-action=today]").click(function () {
    $(".dropdown-date__range_from").datepicker().data("datepicker").hide();
    $(".js-dropdown-date-range-from").removeClass("active");
  });

  $(".dropdown-date__range_to").datepicker({
    onShow: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".js-dropdown-date-range-to").addClass("active");
      }
    },
    onHide: function (dp, animationCompleted) {
      if (!animationCompleted) {
        $(".js-dropdown-date-range-to").removeClass("active");
      }
    },
    minDate: new Date(),
    clearButton: true,
    todayButton: true,
    language: {
      today: "Применить",
    },
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
  });
  $(".datepicker--cells").click(function () {
    $("[data-action=clear]").addClass("open");
  });
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass("open");
  });
  $("[data-action=today]").click(function () {
    $(".dropdown-date__range_to").datepicker().data("datepicker").hide();
    $(".js-dropdown-date-range-to").removeClass("active");
  });

  $(".datepicker-here").datepicker({
    minDate: new Date(),
    clearButton: true,
    todayButton: true,
    language: {
      today: "Применить",
    },
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
  });
});
