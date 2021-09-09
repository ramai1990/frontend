/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/burger/burger.js":
/*!*************************************!*\
  !*** ./components/burger/burger.js ***!
  \*************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Burger = /*#__PURE__*/function () {
  function Burger(_ref) {
    var btnMenu = _ref.btnMenu,
        button = _ref.button,
        close = _ref.close,
        navList = _ref.navList,
        headerButtons = _ref.headerButtons;

    _classCallCheck(this, Burger);

    this.btnMenu = btnMenu;
    this.button = button;
    this.close = close;
    this.navList = navList;
    this.headerButtons = headerButtons;
    this.toggleMenu();
    this.hideMenu();
  }

  _createClass(Burger, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this = this;

      this.button.addEventListener("click", function (e) {
        e.stopPropagation();

        _this.btnMenu.forEach(function (item) {
          item.classList.toggle("active");
        });
      });
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      var close = this.close;
      var btnMenu = this.button;
      var menu = this.navList;
      var btns = this.headerButtons;
      document.addEventListener("click", function (e) {
        var target = e.target;
        var its_menu = target == menu || menu.contains(target);
        var its_btnMenu = target == btnMenu;
        var menu_is_active = menu.classList.contains("active");

        if (!its_menu && !its_btnMenu && menu_is_active) {
          close.classList.remove("active");
          menu.classList.remove("active");
          btns.classList.remove("active");
        }
      });
    }
  }]);

  return Burger;
}();

var burger = new Burger({
  btnMenu: document.querySelectorAll(".nav__list, .burger span, .header-btns"),
  button: document.querySelector(".burger"),
  close: document.querySelector(".burger span"),
  navList: document.querySelector(".nav__list"),
  headerButtons: document.querySelector(".header-btns")
});

/***/ }),

/***/ "./components/calendare/calendar.js":
/*!******************************************!*\
  !*** ./components/calendare/calendar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
$(function () {
  $(".dropdown-date__range_from").datepicker({
    minDate: new Date(),
    range: true,
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: "<div class=\"arrow_prew\"></div>",
    nextHtml: "<div class=\"arrow_next\"></div>",
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>"
    },
    language: {
      today: "Применить"
    },
    onRenderCell: function onRenderCell(date, cellType) {
      if (cellType == "day") {
        return {
          html: "".concat(date.getDate(), "<div class=\"bg-selected\"><span></span></div>")
        };
      }
    },
    onSelect: function onSelect(fd, d, picker) {
      $(".dropdown-date__range_from").val(fd.split("-")[0]);
      $(".dropdown-date__range_to").val(fd.split("-")[1]);
    }
  });
  $(".datepicker").find(".datepicker--button").click(function () {
    if (this.dataset.action === "today") {
      $(this).parents(".dropdown-date").hide();
    }
  });
  $(".dropdown-date__range_to").click(function () {
    $(".datepicker").show();
    $(this).parents(".dropdown-date").find(".dropdown-date__range_from").data("datepicker").show();
  });
  $(".dropdown-date__range_from").click(function () {
    $(".datepicker").show();
  });
  $('.datepicker-here').datepicker({
    minDate: new Date(),
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: "<div class=\"arrow_prew\"></div>",
    nextHtml: "<div class=\"arrow_next\"></div>",
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>"
    },
    language: {
      today: "Применить"
    },
    onRenderCell: function onRenderCell(date, cellType) {
      if (cellType == "day") {
        return {
          html: "".concat(date.getDate(), "<div class=\"bg-selected\"><span></span></div>")
        };
      }
    }
  });
  $(".datepicker").find(".datepicker--button").click(function () {
    if (this.dataset.action === "today") {
      $(this).parents(".dropdown-date").hide();
    }
  });
  $(".datepicker-here").click(function () {
    $(".datepicker").show();
  });
  $('.datepicker--cells').click(function () {
    $("[data-action=clear]").addClass('open');
  });
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass('open');
  });
}());

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/quantity */ "./js/quantity.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Dropdown = /*#__PURE__*/function () {
  function Dropdown(_ref) {
    var drop = _ref.drop,
        dropDownBtn = _ref.dropDownBtn,
        dropDownList = _ref.dropDownList;

    _classCallCheck(this, Dropdown);

    this.drop = drop;
    this.dropDownBtn = dropDownBtn;
    this.dropDownList = dropDownList;
    this.addEventListeners();
    this.show();
  }

  _createClass(Dropdown, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      if (this.dropDownBtn) {
        this.dropDownBtn.addEventListener("click", this.open.bind(this));
      }

      document.addEventListener("click", this.close.bind(this));
    }
  }, {
    key: "show",
    value: function show() {
      function quantity(n, text_forms) {
        text_forms = text_forms.split(",");
        n = Math.abs(n) % 100;
        var n1 = n % 10;

        if (n > 10 && n < 20) {
          return text_forms[2];
        }

        if (n1 > 1 && n1 < 5) {
          return text_forms[1];
        }

        if (n1 == 1) {
          return text_forms[0];
        }

        return text_forms[2];
      }

      this.drop.forEach(function (dropDownWrapper) {
        var dropDownList = dropDownWrapper.querySelector(".dropdown__list");
        var dropDownListItems = dropDownList.querySelectorAll(".dropdown__list-item");
        dropDownListItems.forEach(function (listItem) {
          listItem.addEventListener("click", function (e) {
            e.stopPropagation();

            var printValue = function printValue(obj) {
              var list = _toConsumableArray(obj.querySelectorAll(".counter__value"));

              list = list.map(function (el) {
                var word = quantity(el.value, el.dataset.value);
                return "".concat(el.value, " ").concat(word);
              });
              obj.querySelector(".dropdown__input").value = list.join(", ");
            };

            printValue(dropDownWrapper);
          });
        });
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.dropDownList.classList.toggle("dropdown__list_active");
      this.dropDownBtn.classList.toggle("dropdown__button_active");
    }
  }, {
    key: "close",
    value: function close(e) {
      if (e.target !== this.dropDownBtn && this.dropDownList) {
        this.dropDownBtn.classList.remove("dropdown__button_active");
        this.dropDownList.classList.remove("dropdown__list_active");
      }
    }
  }]);

  return Dropdown;
}();

var dropdown = new Dropdown({
  drop: document.querySelectorAll(".dropdown"),
  dropDownBtn: document.querySelector('[data-btn="btn"]'),
  dropDownList: document.querySelector('[data-list="list"]')
});

/***/ }),

/***/ "./components/guest-dropdown/drop-guest.js":
/*!*************************************************!*\
  !*** ./components/guest-dropdown/drop-guest.js ***!
  \*************************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownGuest = /*#__PURE__*/function () {
  function DropdownGuest(buttons) {
    _classCallCheck(this, DropdownGuest);

    this.buttons = buttons;
    this.open();
  }

  _createClass(DropdownGuest, [{
    key: "open",
    value: function open() {
      this.buttons.forEach(function (el) {
        var dropDownBtn = el.querySelector(".dropdown__button");
        var dropDownList = el.querySelector(".dropdown__list");
        var btnApply = el.querySelector(".apply");
        var btnClear = el.querySelector(".clear");
        dropDownBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          dropDownList.classList.toggle("dropdown__list_active");
          this.classList.remove("dropdown__button_active");
        });
        btnApply.addEventListener("click", function (e) {
          dropDownList.classList.remove("dropdown__list_active");
        });
        var btnMenu = document.querySelector(".dropdown__button");
        var menu = el.querySelector(".guest__list");
        document.addEventListener("click", function (e) {
          var target = e.target;
          var its_menu = target == menu || menu.contains(target);
          var its_btnMenu = target == btnMenu;
          var menu_is_active = menu.classList.contains("dropdown__list_active");

          if (!its_menu && !its_btnMenu && menu_is_active) {
            dropDownList.classList.remove("dropdown__list_active");
          }
        });
      });
    }
  }]);

  return DropdownGuest;
}();

var dropdown = new DropdownGuest(document.querySelectorAll(".dropdown-guest"));

/***/ }),

/***/ "./components/guest-dropdown/guest-counter.js":
/*!****************************************************!*\
  !*** ./components/guest-dropdown/guest-counter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/quantity */ "./js/quantity.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GuestCounter = /*#__PURE__*/function () {
  function GuestCounter(_ref) {
    var dropdownguest = _ref.dropdownguest,
        btnsGuest = _ref.btnsGuest,
        btnClear = _ref.btnClear,
        btnApply = _ref.btnApply,
        input = _ref.input,
        inputs = _ref.inputs,
        list = _ref.list;

    _classCallCheck(this, GuestCounter);

    this.dropdownguest = dropdownguest;
    this.btnsGuest = btnsGuest;
    this.btnClear = btnClear;
    this.btnApply = btnApply;
    this.input = input;
    this.inputs = inputs;
    this.list = list;
    this.counter();
  }

  _createClass(GuestCounter, [{
    key: "counter",
    value: function counter() {
      var dropdownguest = this.dropdownguest;
      var btnClear = this.btnClear;
      var btnApply = this.btnApply;
      var input = this.input;
      var inputs = this.inputs;
      var list = this.list;
      var clear = this.clear;
      var showValue = this.showValue;

      if (dropdownguest) {
        btnClear.style.opacity = "0";
        this.btnsGuest.forEach(function (btn) {
          btn.addEventListener("click", function () {
            var direction = this.dataset.direction;
            var inpGuest = this.parentElement.querySelector(".guest__counter");
            var currentValue = +inpGuest.value;
            var newValue;

            if (direction === "minus") {
              newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            } else if (direction === "plus") {
              newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
            }

            inpGuest.value = newValue;
            var sum = 0;
            inputs.forEach(function (i) {
              sum += parseInt(i.value);
            });
            btnClear.addEventListener("click", function () {
              inpGuest.value = 0;
              input.value = "Сколько гостей";
              sum = 0;
              btnClear.style.opacity = "0";
            });
            clear(sum, btnClear);
            btnApply.addEventListener("click", function (e) {
              input.value = sum + " " + (0,_js_quantity__WEBPACK_IMPORTED_MODULE_0__.default)(sum, list.dataset.value);
              showValue(dropdownguest, input);
            });
          });
        });
      }
    }
  }, {
    key: "showValue",
    value: function showValue(obj, input) {
      var list = _toConsumableArray(obj.querySelectorAll(".guest__counter_baby"));

      list = list.map(function (el) {
        var word = (0,_js_quantity__WEBPACK_IMPORTED_MODULE_0__.default)(el.value, el.dataset.value);
        return "".concat(el.value, " ").concat(word);
      });

      if (list > "1") {
        obj.querySelector(".guest__input").value = input.value + ", " + list.join(", ");
      }
    }
  }, {
    key: "clear",
    value: function clear(sum, btnClear) {
      if (sum == 0 || sum < 1) {
        btnClear.style.opacity = "0";
      } else {
        btnClear.style.opacity = "1";
      }
    }
  }]);

  return GuestCounter;
}();

var guestCounter = new GuestCounter({
  dropdownguest: document.querySelector(".dropdown-guest"),
  btnsGuest: document.querySelectorAll(".counter__btn-guest"),
  btnClear: document.querySelector(".clear"),
  btnApply: document.querySelector(".apply"),
  input: document.querySelector(".dropdown__input-guest"),
  inputs: document.querySelectorAll(".guest__counter"),
  list: document.querySelector(".dropdown__list-item")
});

/***/ }),

/***/ "./components/like/like.js":
/*!*********************************!*\
  !*** ./components/like/like.js ***!
  \*********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Like = /*#__PURE__*/function () {
  function Like(btnLikes) {
    _classCallCheck(this, Like);

    this.btnLikes = btnLikes;
    this.counter();
  }

  _createClass(Like, [{
    key: "counter",
    value: function counter() {
      this.btnLikes.forEach(function (item) {
        var like = true,
            likeCount = item.querySelector('.like-elements__counter').textContent;
        item.addEventListener('click', function () {
          this.classList.toggle('like-elements__like_active');
          likeCount = like ? ++likeCount : --likeCount;
          like = !like;
          item.querySelector('.like-elements__counter').textContent = likeCount;
        });
      });
    }
  }]);

  return Like;
}();

var like = new Like(document.querySelectorAll('.like-elements__like'));

/***/ }),

/***/ "./components/list-checkbox/list-checkbox.js":
/*!***************************************************!*\
  !*** ./components/list-checkbox/list-checkbox.js ***!
  \***************************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListCheckbox = /*#__PURE__*/function () {
  function ListCheckbox(_ref) {
    var checkList = _ref.checkList,
        checkTitle = _ref.checkTitle;

    _classCallCheck(this, ListCheckbox);

    this.checkList = checkList;
    this.checkTitle = checkTitle;
    this.check();
  }

  _createClass(ListCheckbox, [{
    key: "check",
    value: function check() {
      var _this = this;

      if (this.checkList) {
        this.checkTitle.addEventListener('click', function () {
          _this.checkTitle.classList.toggle('list-checkbox__title_active');

          _this.checkList.classList.toggle('list-checkbox__list_active');
        });
        var checkList = this.checkList;
        var checkTitle = this.checkTitle;
        document.addEventListener('click', function (e) {
          var target = e.target;
          var its_menu = target == checkList || checkList.contains(target);
          var its_btnMenu = target == checkTitle;
          var menu_is_active = checkList.classList.contains('list-checkbox__list_active');

          if (!its_menu && !its_btnMenu && menu_is_active) {
            checkTitle.classList.remove('list-checkbox__title_active');
            checkList.classList.remove('list-checkbox__list_active');
          }
        });
      }
    }
  }]);

  return ListCheckbox;
}();

var listCheckbox = new ListCheckbox({
  checkList: document.querySelector('.list-checkbox__list'),
  checkTitle: document.querySelector('.list-checkbox__title')
});

/***/ }),

/***/ "./components/range/range-slider.js":
/*!******************************************!*\
  !*** ./components/range/range-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "../node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wnumb */ "../node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  var rangeElements = document.querySelector('.range-elements');

  if (rangeElements) {
    var keypressSlider = document.querySelector(".slider-keypress");
    var input0 = document.querySelector(".input-with-keypress-0");
    var input1 = document.querySelector(".input-with-keypress-1");
    var inputs = [input0, input1];
    nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(keypressSlider, {
      start: [5000, 10000],
      connect: true,
      step: 1000,
      range: {
        min: [0],
        max: [15000]
      },
      format: wnumb__WEBPACK_IMPORTED_MODULE_1___default()({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
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
})();

/***/ }),

/***/ "./components/rating/rating.js":
/*!*************************************!*\
  !*** ./components/rating/rating.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
$(function () {
  $('.rate-elements__rating').barrating({
    theme: 'css-stars'
  });
  $('.rate-elements__rating').barrating('set', 5);
  $('.rate-elements__rating2').barrating({
    theme: 'css-stars'
  });
  $('.rate-elements__rating2').barrating('set', 4);
});

/***/ }),

/***/ "./components/room/rooms.js":
/*!**********************************!*\
  !*** ./components/room/rooms.js ***!
  \**********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rooms = /*#__PURE__*/function () {
  function Rooms(buttons) {
    _classCallCheck(this, Rooms);

    this.buttons = buttons;
    this.input = 0;
    this.counter();
  }

  _createClass(Rooms, [{
    key: "counter",
    value: function counter() {
      this.buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var direction = this.dataset.direction;
          this.input = this.parentElement.querySelector('.counter__value');
          var currentValue = +this.input.value;

          if (direction === 'minus') {
            this.input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
          } else if (direction === 'plus') {
            this.input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
          }
        });
      });
    }
  }]);

  return Rooms;
}();

var counter = new Rooms(document.querySelectorAll('.counter__btn'));

/***/ }),

/***/ "./components/submenu/submenu.js":
/*!***************************************!*\
  !*** ./components/submenu/submenu.js ***!
  \***************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubMenu = /*#__PURE__*/function () {
  function SubMenu(navLink) {
    _classCallCheck(this, SubMenu);

    this.navLink = navLink;
    this.show();
  }

  _createClass(SubMenu, [{
    key: "show",
    value: function show() {
      var _this = this;

      this.navLink.forEach(function (item) {
        item.addEventListener('click', function (e) {
          var el = e.currentTarget;

          if (el.classList.contains('nav__link_active')) {
            el.classList.remove('nav__link_active');
            el.nextElementSibling.classList.remove('submenu__list_active');
          } else {
            _this.navLink.forEach(function (e) {
              e.classList.remove('nav__link_active');
              e.nextElementSibling.classList.remove('submenu__list_active');
            });

            el.classList.add('nav__link_active');
            el.nextElementSibling.classList.add('submenu__list_active');
          }

          document.addEventListener('click', function (e) {
            if (e.target !== el) {
              el.classList.remove('nav__link_active');
              el.nextElementSibling.classList.remove('submenu__list_active');
            }
          });
        });
      });
    }
  }]);

  return SubMenu;
}();

var subMenu = new SubMenu(document.querySelectorAll('.nav__link_dropdown'));

/***/ }),

/***/ "./components/swiper/swiper.js":
/*!*************************************!*\
  !*** ./components/swiper/swiper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/pagination/pagination.js");


swiper_core__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper_core__WEBPACK_IMPORTED_MODULE_1__.default, swiper_core__WEBPACK_IMPORTED_MODULE_2__.default]);

(function () {
  var swiper = new swiper_core__WEBPACK_IMPORTED_MODULE_0__.default('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiper2 = new swiper_core__WEBPACK_IMPORTED_MODULE_0__.default('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true
    }
  });
})();

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/nouislider/distribute/nouislider.js */ "../node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var _node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_range_range_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/range/range-slider */ "./components/range/range-slider.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _components_like_like__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/like/like */ "./components/like/like.js");
/* harmony import */ var _components_like_like__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_like_like__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_rating_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rating/rating */ "./components/rating/rating.js");
/* harmony import */ var _components_rating_rating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_rating_rating__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/air-datepicker/dist/js/datepicker */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js */ "../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js");
/* harmony import */ var _node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_submenu_submenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/submenu/submenu */ "./components/submenu/submenu.js");
/* harmony import */ var _components_submenu_submenu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_submenu_submenu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/dropdown/dropdown.js */ "./components/dropdown/dropdown.js");
/* harmony import */ var _components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/guest-dropdown/drop-guest.js */ "./components/guest-dropdown/drop-guest.js");
/* harmony import */ var _components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_room_rooms_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/room/rooms.js */ "./components/room/rooms.js");
/* harmony import */ var _components_room_rooms_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_room_rooms_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_guest_dropdown_guest_counter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/guest-dropdown/guest-counter.js */ "./components/guest-dropdown/guest-counter.js");
/* harmony import */ var _components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/list-checkbox/list-checkbox.js */ "./components/list-checkbox/list-checkbox.js");
/* harmony import */ var _components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/calendare/calendar.js */ "./components/calendare/calendar.js");
/* harmony import */ var _components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_swiper_swiper_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/swiper/swiper.js */ "./components/swiper/swiper.js");
/* harmony import */ var _components_burger_burger_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/burger/burger.js */ "./components/burger/burger.js");
/* harmony import */ var _components_burger_burger_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_17__);
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}






window.$ = __webpack_provided_window_dot_jQuery = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
 // import "../pug/pages/index.pug";
// import "../pug/pages/sign-in.pug";
// import "../pug/pages/sign-up.pug";
// import "../pug/pages/headers-footers.pug";
// import "../pug/pages/form-elements.pug";
// import "../pug/pages/cards.pug";
// import "../pug/pages/search-room.pug";
















/***/ }),

/***/ "./js/quantity.js":
/*!************************!*\
  !*** ./js/quantity.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function quantity(n, text_forms) {
  text_forms = text_forms.split(",");
  n = Math.abs(n) % 100;
  var n1 = n % 10;

  if (n > 10 && n < 20) {
    return text_forms[2];
  }

  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }

  if (n1 == 1) {
    return text_forms[0];
  }

  return text_forms[2];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantity);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_air-datepicker_dist_js_datepicker_js-node_modules_focus-visible_dist_foc-340b43"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map