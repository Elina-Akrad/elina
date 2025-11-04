let search = document.querySelector(".header-search-input");
console.dir(search);
search.addEventListener("focus", function () {
  search.placeholder = "";
});
search.addEventListener("blur", function () {
  search.placeholder = "جستجو";
});
//init story
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 12.5,
  spaceBetween: 3,
  breakpoints: {
    400: {
      slidesPerView: 4.5,
    },
    600: {
      slidesPerView: 6.5,
    },
    800: {
      slidesPerView: 8.5,
    },
    1000: {
      slidesPerView: 10.5,
    },

    1235: {
      slidesPerView: 12.5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//init slider
var swiper = new Swiper(".mySlider", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//init wonderfull
var swiper = new Swiper(".myWonderfull", {
  slidesPerView: 8.2,
  spaceBetween: 3,
  breakpoints: {
    400: {
      slidesPerView: 3.2,
    },
    600: {
      slidesPerView: 4.2,
    },
    800: {
      slidesPerView: 5.2,
    },
    1000: {
      slidesPerView: 7.2,
    },

    1235: {
      slidesPerView: 8.2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
