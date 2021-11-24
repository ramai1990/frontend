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

import "../pug/pages/landing/landing.pug";
import "../pug/pages/sign-in/sign-in.pug";
import "../pug/pages/sign-up/sign-up.pug";
import "../pug/pages/headers-footers/headers-footers.pug";
import "../pug/pages/form-elements/form-elements.pug";
import "../pug/pages/cards/cards.pug";
import "../pug/pages/search-room/search-room.pug";
import "../pug/pages/room/room.pug";
import "../pug/pages/colors-type/colors-type.pug";

import "../components/rating/rating";
import "../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js";
import "../components/air-datepicker/air-datepicker";
import "../../node_modules/swiper/swiper-bundle";
import "../components/swiper/swiper";
import "../components/imask/imask";
import "../components/statistics/statistics";

import Burger from "../components/burger/Burger";
import SubMenu from "../components/submenu/SubMenu.js";
import Dropdown from "../components/dropdown/Dropdown";
import Rooms from "../components/rooms/Rooms";
import Guest from "../components/guest/Guest";
import Like from "../components/like/Like.js";

new Burger();
new SubMenu();
new Dropdown(".dropdown-checkbox__title", ".dropdown-checkbox__list");
new Dropdown(".rooms__button", ".rooms__list");
new Dropdown(".guest", ".guest__contents");
new Rooms(document.querySelector(".rooms"));

document
  .querySelectorAll(".guest__option")
  .forEach((option) => new Guest(option));

document.querySelectorAll(".like").forEach((like) => new Like(like));
