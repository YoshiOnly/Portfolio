
var spv = 0;


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grid: {
      columns:5,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 3,
        spaceBetween: 30,

      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,

      }
    }

  });

  