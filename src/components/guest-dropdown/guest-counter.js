// import getCounterValue from "../../js/getCounterValue";

// class GuestCounter {
//   constructor({
//     dropdownguest,
//     btnsGuest,
//     btnClear,
//     btnApply,
//     input,
//     inputs,
//     list,
//   }) {
//     this.dropdownguest = dropdownguest;
//     this.btnsGuest = btnsGuest;
//     this.btnClear = btnClear;
//     this.btnApply = btnApply;
//     this.input = input;
//     this.inputs = inputs;
//     this.list = list;
//     this.counter();
//   }

//   counter() {
//     if (this.dropdownguest) {
//       this.btnClear.style.opacity = "0.3";
//       this.btnsGuest.forEach(
//         function (btn) {
//           const minBtn = btn.parentElement.querySelector(
//             "[data-direction='minus']"
//           );
//           const inpGuest = btn.parentElement.querySelector(".guest__counter");

//           this.clear(inpGuest.value, minBtn, "0.3");

//           btn.addEventListener(
//             "click",
//             function () {
//               const direction = btn.dataset.direction;

//               const currentValue = +inpGuest.value;
//               let newValue;

//               if (direction === "minus") {
//                 newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//               } else if (direction === "plus") {
//                 newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
//               }

//               inpGuest.value = newValue;

//               let sum = 0;
//               this.inputs.forEach(function (i) {
//                 sum += parseInt(i.value);
//               });

//               this.btnClear.addEventListener(
//                 "click",
//                 function () {
//                   inpGuest.value = 0;
//                   this.input.value = "Сколько гостей";
//                   sum = 0;
//                   this.btnClear.style.opacity = "0.3";
//                   minBtn.style.opacity = "0.3";
//                 }.bind(this)
//               );

//               this.clear(inpGuest.value, minBtn);
//               this.clear(sum, this.btnClear);

//               this.btnApply.addEventListener(
//                 "click",
//                 function (e) {
//                   this.input.value =
//                     sum + " " + getCounterValue(sum, this.list.dataset.value);

//                   this.showValue();
//                 }.bind(this)
//               );
//             }.bind(this)
//           );
//         }.bind(this)
//       );
//     }
//   }

//   showValue() {
//     let list = [...this.dropdownguest.querySelectorAll(".guest__counter_baby")];

//     list = list.map((el) => {
//       const word = getCounterValue(el.value, el.dataset.value);
//       return `${el.value} ${word}`;
//     });

//     if (list > "1") {
//       this.dropdownguest.querySelector(".guest__input").value =
//         this.input.value + ", " + list.join(", ");
//     }
//   }

//   clear(sum, btn, opacity = "0.3") {
//     if (sum === 0 || sum < 1) {
//       btn.style.opacity = opacity;
//     } else {
//       btn.style.opacity = "1";
//     }
//   }
// }

// const guestCounter = new GuestCounter({
//   dropdownguest: document.querySelector(".dropdown-guest"),
//   btnsGuest: document.querySelectorAll(".counter__btn-guest"),
//   btnClear: document.querySelector(".clear"),
//   btnApply: document.querySelector(".apply"),
//   input: document.querySelector(".dropdown__input-guest"),
//   inputs: document.querySelectorAll(".guest__counter"),
//   list: document.querySelector(".dropdown__list-item"),
// });
// import getCounterValue from "../../js/getCounterValue";

// class GuestCounter {
//   constructor(el) {
//     this.render(el);
//   }

//   render(el) {
//     this.dropdownguest = document.querySelector(".dropdown-guest");
//     this.btnsGuest = document.querySelectorAll(".counter__btn-guest");
//     this.btnClear = document.querySelector(".clear");
//     this.btnApply = document.querySelector(".apply");
//     this.input = document.querySelector(".dropdown__input-guest");
//     this.inputs = document.querySelectorAll(".guest__counter");
//     this.list = document.querySelector(".dropdown__list-item");
//     this.counter();
//   }

//   counter() {
//     if (this.dropdownguest) {
//       this.btnClear.style.opacity = "0.3";
//       this.btnsGuest.forEach(
//         function (btn) {
//           const minBtn = btn.parentElement.querySelector(
//             "[data-direction='minus']"
//           );
//           const inpGuest = btn.parentElement.querySelector(".guest__counter");

//           this.clear(inpGuest.value, minBtn, "0.3");

//           btn.addEventListener(
//             "click",
//             function () {
//               const direction = btn.dataset.direction;

//               const currentValue = +inpGuest.value;
//               let newValue;

//               if (direction === "minus") {
//                 newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//               } else if (direction === "plus") {
//                 newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
//               }

//               inpGuest.value = newValue;

//               let sum = 0;
//               this.inputs.forEach(function (i) {
//                 sum += parseInt(i.value);
//               });

//               this.btnClear.addEventListener(
//                 "click",
//                 function () {
//                   inpGuest.value = 0;
//                   this.input.value = "Сколько гостей";
//                   sum = 0;
//                   this.btnClear.style.opacity = "0.3";
//                   minBtn.style.opacity = "0.3";
//                 }.bind(this)
//               );

//               this.clear(inpGuest.value, minBtn);
//               this.clear(sum, this.btnClear);

//               this.btnApply.addEventListener(
//                 "click",
//                 function (e) {
//                   this.input.value =
//                     sum + " " + getCounterValue(sum, this.list.dataset.value);

//                   this.showValue();
//                 }.bind(this)
//               );
//             }.bind(this)
//           );
//         }.bind(this)
//       );
//     }
//   }

//   showValue() {
//     let list = [...this.dropdownguest.querySelectorAll(".guest__counter_baby")];

//     list = list.map((el) => {
//       const word = getCounterValue(el.value, el.dataset.value);
//       return `${el.value} ${word}`;
//     });

//     if (list > "1") {
//       this.dropdownguest.querySelector(".guest__input").value =
//         this.input.value + ", " + list.join(", ");
//     }
//   }

//   clear(sum, btn, opacity = "0.3") {
//     if (sum === 0 || sum < 1) {
//       btn.style.opacity = opacity;
//     } else {
//       btn.style.opacity = "1";
//     }
//   }
// }

// const guestCounter = new GuestCounter(
//   document.querySelector(".dropdown-guest")
// );
