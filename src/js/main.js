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

import "../components/like/Like";
import "../components/rating/rating";
import "../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js";

import "../components/submenu/SubMenu";
import "../components/dropdown/Dropdown";
import "../components/guest-dropdown/DropdownGuest";
import "../components/room/Rooms";
import "../components/dropdown-checkbox/DropdownCheckbox";
import "../components/air-datepicker/air-datepicker";

import "../../node_modules/swiper/swiper-bundle";
import "../components/swiper/swiper";
import "../components/burger/Burger";
import "../components/imask/imask";
import "../components/dropdown/InnactiveButton";
