var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true,
  },
});
$(document).ready(function() {
  $('.header__burger').on('click', function(){
		$('.nav__list--horizontal').slideToggle(300)
    $(this).toggleClass('header__burger--close')
  });
    $('.elements').toggleClass('elements--active');
});

