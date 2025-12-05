

document.addEventListener("DOMContentLoaded", function(e){
  slide_menu()
  card_news_slide();
  login_popup_close();
})

const login_popup_close = () => {
  $('.login-section .popup-wrap .btn-wrap .close-btn').click(function(){
    $('.login-section').removeClass('show');
  })
  $('.login-popup .popup-wrap .login-btn').click(function(){
    $('.login-popup').removeClass('show')
  })
  $('.login-popup .popup-wrap .btn-wrap .close-btn').click(function(){
    $('.login-popup').removeClass('show')
  })
}

const card_news_slide = () => {
  var swiper = new Swiper(".main .notice-section .main-news .mySwiper", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main .notice-section .main-news .swiper-pagination",
    },

    on: {
      // 초기 로드 시
      init: function () {
        updateSlideNumber(this);
      },
      // 슬라이드 변경 시
      slideChange: function () {
        updateSlideNumber(this);
      }
    }
  });

  // 숫자 업데이트 함수
  function updateSlideNumber(swiper) {
    const current = swiper.realIndex + 1;
    const total = swiper.slides.length - swiper.loopedSlides * 2;

    const slideNumber = document.querySelector(".main .notice-section .main-news .slide-number");
    if (slideNumber) {
      slideNumber.textContent = `${current} / ${total}`;
    }
  }
};


const slide_menu = () => {
  $('header .real .menu-btn').click(function(){
    $('.slide-menu-close').addClass('show');
    $('.slide-menu').addClass('show');
  })

  $('.slide-menu .btn-wrap .close-btn').click(function(){
    $('.slide-menu-close').removeClass('show');
    $('.slide-menu').removeClass('show');
  })

  $('.slide-menu-close').click(function(){
    $('.slide-menu-close').removeClass('show');
    $('.slide-menu').removeClass('show');
  })

  $('.slide-menu .menu-list > li > a.sub').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on')
    $(this).siblings(".sub-list").slideToggle();

  })
}
