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
//init supermarket wonderfull
new Swiper(".supermarketSwiper", {
  slidesPerView: 5,
  spaceBetween: 3,
  navigation: {
    nextEl: ".supermarketSwiper .swiper-button-next",
    prevEl: ".supermarketSwiper .swiper-button-prev",
  },
  pagination: {
    el: ".supermarketSwiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
    },
    900: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    },
  },
  rtl: true,
  loop: false,
});
//init buy

var swiper = new Swiper(".myBuy", {
  slidesPerView: 7.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 3.5,
    },
    800: {
      slidesPerView: 4.5,
    },
    1000: {
      slidesPerView: 6.5,
    },

    1235: {
      slidesPerView: 7.5,
    },
  },
});
//init fav
var swiper = new Swiper(".myFav", {
  slidesPerView: 9.5,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 3.5,
    },
    600: {
      slidesPerView: 4.5,
    },
    800: {
      slidesPerView: 5.5,
    },
    900: {
      slidesPerView: 6.5,
    },
    1000: {
      slidesPerView: 8.5,
    },

    1235: {
      slidesPerView: 9.5,
    },
  },
});
//init bestseller
var swiper = new Swiper(".myBestseller", {
  slidesPerView: 4,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.5,
    },
    700: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3.5,
    },

    1235: {
      slidesPerView: 4,
    },
  },
});

//supermarket js

//init wonderfull

//clock
function formatTimeUnit(u) {
  return u < 10 ? "0" + u : u;
}

function getTimeString() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = formatTimeUnit(h);
  m = formatTimeUnit(m);
  s = formatTimeUnit(s);

  return h + ":" + m + ":" + s + " " + session;
}

function updateClocks() {
  var clocks = document.querySelectorAll(".clock");
  var time = getTimeString();
  clocks.forEach(function (el) {
    el.textContent = time;
  });
}

// start immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);
//init sale
var swiper = new Swiper(".mysale", {
  slidesPerView: 6.5,
  spaceBetween: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
});

//init cleasn

var swiper = new Swiper(".myClean", {
  slidesPerView: 5.9,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 2.9,
    },
    700: {
      slidesPerView: 3.7,
    },
    900: {
      slidesPerView: 4.2,
    },

    1235: {
      slidesPerView: 5.5,
    },
  },
});

