// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

import '../../node_modules/nouislider/distribute/nouislider.js'
import '../../node_modules/focus-visible/dist/focus-visible';
import './range-slider'

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = window.jQuery = $;
// $(document).ready(function () {
//   alert(jQuery.fn.jquery);
// });
import '../scss/main.scss';

import '../pug/pages/index.pug'
import '../pug/pages/landing.pug'
import '../pug/pages/sign-in.pug'
import '../pug/pages/sign-up.pug'
import '../pug/pages/headers-footers.pug'
import '../pug/pages/form-elements.pug'
import '../pug/pages/cards.pug'

import './like'
import './rating'
import '../../node_modules/air-datepicker/dist/js/datepicker'
import '../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js'

import './submenu'
import './dropdown.js'
import './drop-guest.js'
import './counter.js'
import './guest-counter.js'
import './list-checkbox.js'
import './calendar.js'

// import "../../node_modules/swiper/swiper-bundle"
import './swiper.js'
import './burger.js'
