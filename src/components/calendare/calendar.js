$(function () {
  $(".dropdown-date__range_from").datepicker({
    minDate: new Date(),
    range: true,
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
    language: {
      today: "Применить",
    },
    onRenderCell: function (date, cellType) {
      if (cellType == "day") {
        return {
          html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
        };
      }
    },
    onSelect: function (fd, d, picker) {
      $(".dropdown-date__range_from").val(fd.split("-")[0]);
      $(".dropdown-date__range_to").val(fd.split("-")[1]);
    },
  });
  $(".datepicker")
    .find(".datepicker--button")
    .click(function () {
      if (this.dataset.action === "today") {
        $(this)
          .parents(".dropdown-date")
          .hide();
      }
    });
  $(".dropdown-date__range_to").click(function () {
    $(".datepicker").show()
    $(this)
      .parents(".dropdown-date")
      .find(".dropdown-date__range_from")
      .data("datepicker")
      .show();
  });
  $(".dropdown-date__range_from").click(function () {
    $(".datepicker").show()
  });

  $('.datepicker-here').datepicker({
    minDate: new Date(),
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
    language: {
      today: "Применить",
    },
    onRenderCell: function (date, cellType) {
      if (cellType == "day") {
        return {
          html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
        };
      }
    }

  });
  $(".datepicker")
    .find(".datepicker--button")
    .click(function () {
      if (this.dataset.action === "today") {
        $(this)
          .parents(".dropdown-date")
          .hide();
      }
    });
  $(".datepicker-here").click(function () {
    $(".datepicker").show()
  });

  $('.datepicker--cells').click(function () {
    $("[data-action=clear]").addClass('open');
  })
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass('open')
  })

}())


