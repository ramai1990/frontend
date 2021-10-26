import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);
(function () {
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper(".swiper-container2", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      type: "bullets",
      clickable: true,
    },
  });
})();
