import '../../node_modules/nouislider/distribute/nouislider.js';
import '../../node_modules/focus-visible/dist/focus-visible';
import '../components/range/range-slider';

import '../scss/main.scss';

import '../pug/pages/landing/landing.pug';
import '../pug/pages/sign-in-page/sign-in-page.pug';
import '../pug/pages/sign-up-page/sign-up-page.pug';
import '../pug/pages/headers-footers/headers-footers.pug';
import '../pug/pages/form-elements/form-elements.pug';
import '../pug/pages/cards/cards.pug';
import '../pug/pages/search-room/search-room.pug';
import '../pug/pages/room/room.pug';
import '../pug/pages/colors-type/colors-type.pug';

import '../components/rating/rating';
import '../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js';
import '../components/air-datepicker/air-datepicker';
import '../../node_modules/swiper/swiper-bundle';
import '../components/swiper/swiper';
import '../components/imask/imask';
import '../components/statistics/statistics';

import Burger from '../components/burger/Burger';
import SubMenu from '../components/submenu/SubMenu.js';
import Dropdown from '../components/dropdown/Dropdown';
import Rooms from '../components/rooms/Rooms';
import Guest from '../components/guest/Guest';
import Like from '../components/like/Like.js';

const burger = new Burger();
burger.render();

const submenu = new SubMenu();
submenu.render();

const dropdown = new Dropdown();
dropdown.render();

const rooms = new Rooms();
rooms.render('.js-rooms');

document
  .querySelectorAll('.js-guest-option')
  .forEach((option) => new Guest(option));

document.querySelectorAll('.js-like').forEach((like) => new Like(like));
