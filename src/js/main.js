if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

import "../../node_modules/nouislider/distribute/nouislider.js";
import "../../node_modules/focus-visible/dist/focus-visible";
import "../components/range/range-slider";

import $ from "jquery";
import jQuery from "jquery";
window.$ = window.jQuery = $;
import "../scss/main.scss";

import "../pug/pages/index.pug";
import "../pug/pages/sign-in.pug";
import "../pug/pages/sign-up.pug";
import "../pug/pages/headers-footers.pug";
import "../pug/pages/form-elements.pug";
import "../pug/pages/cards.pug";
import "../pug/pages/search-room.pug";
import "../pug/pages/colors-type.pug";

import "../components/like/like";
import "../components/rating/rating";
import "../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js";

import "../components/submenu/submenu";
import "../components/dropdown/dropdown.js";
import "../components/guest-dropdown/drop-guest.js";
import "../components/room/rooms.js";
import "../components/dropdown-checkbox/dropdown-checkbox.js";
import "../components/air-datepicker/air-datepicker.js";

import "../../node_modules/swiper/swiper-bundle";
import "../components/swiper/swiper.js";
import "../components/burger/burger.js";
import "../components/imask/imask";
import "../components/dropdown/inactive-button";
