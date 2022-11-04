export default function inizializeSwiper() {

  new Swiper ('.swiper-container-1', {
    speed: 400,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    }
  })

  new Swiper ('.swiper-container-2', {
    speed: 400,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    }
  })

}
