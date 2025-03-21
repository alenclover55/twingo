const allSlots = new Swiper(".dealer-slots-wrapper", {
  grid: {
    rows: 2,
  },
  breakpoints: {
    1580: {
      slidesPerView: 6,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    1440: {
      grid: {
        rows: 2,
      },
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    620: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      spaceBetween: 16,
    },
  },
});
const popularSlots = new Swiper(".popular-slots-wrapper", {
  grid: {
    rows: 2,
  },
  breakpoints: {
    1580: {
      slidesPerView: 6,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    1440: {
      grid: {
        rows: 2,
      },
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    620: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      spaceBetween: 16,
    },
  },
});
const levelsSlider = new Swiper(".levels-slider", {
  navigation: {
    nextEl: ".all-slots-next",
    prevEl: ".all-slots-prev",
  },
  breakpoints: {
    1580: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 16,
    },
    620: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
