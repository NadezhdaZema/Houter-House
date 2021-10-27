// ------Preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  }, 990);
};

// -------Popup LogIn---------

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

// -----popup timer---------

const popupTimer = document.querySelector(".popup-fadein");
const popupTimerForm = document.querySelector(".popup__form-fadein");
const popupCloseTimer = document.querySelector(".popup__close-fadein");

function openModal() {
  popupTimer.classList.add("active");
  popupTimerForm.classList.add("active");
  clearInterval(modalTimerId);
}

popupCloseTimer.addEventListener("click", () => {
  popupTimer.classList.remove("active");
  popupTimerForm.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupTimer) {
    popupTimer.classList.remove("active");
    popupTimerForm.classList.remove("active");
  }
});
const modalTimerId = setTimeout(openModal, 4000);

//----popup scroll-----

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
  }
});
//-------popup call back---

const popupCallback = document.querySelector(".callback");
const popupCallForm = document.querySelector(".popup__form-fadeincall");
const popupCAllOpen = document.querySelectorAll(".sell__btn");
const popupCAllClose = document.querySelector(".popup__close-fadeincall");

popupCAllOpen.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupCallback.classList.add("active");
    popupCallForm.classList.add("active");
  });
});

popupCAllClose.addEventListener("click", () => {
  popupCallback.classList.remove("active");
  popupCallForm.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupCallback) {
    popupCallback.classList.remove("active");
    popupCallForm.classList.remove("active");
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

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },

    528: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
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

const sliderHouse = new Swiper(".slider__inner", {
  slidesPerView: 4.5,

  slidesPerGroup: 2,

  loop: true,

  autoplay: {
    delay: 1800,
  },

  speed: 1500,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    410: {
      slidesPerView: 1.2,
    },
    468: {
      slidesPerView: 1.2,
    },
    622: {
      slidesPerView: 1.5,
    },

    786: {
      slidesPerView: 2,
    },
    932: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1222: {
      slidesPerView: 3,
    },
    1244: {
      slidesPerView: 3.5,
    },
    1496: {
      slidesPerView: 4,
    },
  },
});

//----scroll animation
new WOW({
  mobile: true,
}).init();

// ------menu burger----

const burger = document.querySelector(".menu__icon");

if (burger) {
  const menuWrapper = document.querySelector(".header__wrapper");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menuWrapper.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector("header").offsetHeight;
    const menuWrapper = document.querySelector(".header__wrapper");
    if (burger.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      burger.classList.remove("_active");
      menuWrapper.classList.remove("_active");
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

// ----spoiler footer---

$(document).ready(function () {
  $("[data-name='spoiler-title']").click(function () {
    $("div[class^='spoiler-body']").hide("normal");
    $(this).parent().children("div.spoiler-body").toggle("normal");
    return false;
  });
});

// ----spoiler header---
$(document).ready(function () {
  $(".btn__dropdown").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(200);
  });
});
// ----validation---

function validateForms(form) {
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      password: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "We need your name",
      phone: "We need your phone",
      email: {
        required: "We need your e-mail",
        email: "Not an e-mail",
      },
    },
  });
}
validateForms("#formreg");
validateForms("#formcall");
validateForms("#formlogin");

$("input[name=phone]").mask("+7 (999) 999-99-99");
