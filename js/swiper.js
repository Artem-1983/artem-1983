const swiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    a11y: {
      enabled: true,
      paginationBulletMessage: 'переход на слайд {{index}}'
    }
});
