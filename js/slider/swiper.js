// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs';

const swiper2 = new Swiper(".swiper-horizontal", {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagintaion: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
