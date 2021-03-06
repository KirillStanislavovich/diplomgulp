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

  $('input[type="tel"]').inputmask({"mask": "8 (999) 999-9999"});

  $('form').each(function() {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
        },
        mail: {
          required: true,
          email: true,
        },
        question: {
          required: true,
        }
      },
      submitHandler(form) {
        let th = $(form);
        $.ajax({
          type: 'POST',
          url: '../../build/php/post.php',
          data: th.serialize(),
        }).done(() => {
          $('.form').append("<p class='form__success'>Запрос успешно отправлен</p>");
          th.trigger('reset');
        });
        return false;
      },
    })
  });

  $('.button-pink').on('click', function(){
    $('.popup--pink').toggle();
    $('body').addClass('not-scroll');
  });

  $('.button-orange').on('click', function(){
    $('.popup--orange').toggle();
    $('body').addClass('not-scroll');
  });

  $('.form__close').on('click', function(){
    $('.popup').hide();
    $('body').removeClass('not-scroll');
    $('.form__success').remove();
  });
});
