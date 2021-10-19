// ------Прелоадер
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  }, 990);
};

// -------Попап LogIn

const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const popupOpen = document.querySelectorAll(".header__btn");
const popupClose = document.querySelector(".popup__close");

popupOpen.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("active");
    popupForm.classList.add("active");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
  popupForm.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupForm.classList.remove("active");
  }
});

//-------slider main, feedback page

const mainSlider = new Swiper(".main__slider", {
  slidesPerView: 1.5,

  slidesPerGroup: 1,

  loop: true,

  autoplay: {
    delay: 1800,
  },

  speed: 800,
});

const feedbackSlider = new Swiper(".feedback__slider", {
  slidesPerView: 2,

  slidesPerGroup: 1,

  loop: true,

  autoplay: {
    delay: 1800,
  },

  speed: 1500,

  centeredSlides: true,
});

// --------Tabs--------

const tabs = document.querySelectorAll(".slider__tab"),
  tabsContent = document.querySelectorAll(".slider__wrapper"),
  tabsParent = document.querySelector(".slider__nav");

function hideTibeContent() {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });

  tabs.forEach((tab) => {
    tab.classList.remove("slider__tab_active");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].style.display = "flex";
  tabs[i].classList.add("slider__tab_active");
}
hideTibeContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target && target.classList.contains("slider__tab")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTibeContent();
        showTabContent(i);
      }
    });
  }
});

// -----slider+tabs----

const prev = document.querySelector(".slider__btn-left"),
  next = document.querySelector(".slider__btn-right"),
  slideWrapper = document.querySelector(".slider__inner"),
  slideField = document.querySelectorAll(".slider__wrapper"),
  slide = document.querySelectorAll(".slider__item"),
  width = window.getComputedStyle(slideWrapper).width;

let slideIndex = 1;
let offsetSlide = 0;

slideField.forEach((item) => {
  item.style.transition = "0.5s all";
});

slide.forEach((slide) => {
  slide.style.width = window.getComputedStyle(slide).width;
});

next.addEventListener("click", () => {
  if (offsetSlide >= slide.length * 100) {
    offsetSlide = 0;
  } else {
    offsetSlide += slide.length * 50;
  }
  slideField.forEach((item) => {
    item.style.transform = `translateX(-${offsetSlide}px)`;
  });
});

prev.addEventListener("click", () => {
  if (offsetSlide == 0) {
    offsetSlide = slide.length;
  } else {
    offsetSlide = slide.length;
    console.log(offsetSlide);
  }

  slideField.forEach((item) => {
    item.style.transform = `translateX(${offsetSlide}px)`;
  });
});

//----scroll animation
new WOW({
  mobile: true,
}).init();
