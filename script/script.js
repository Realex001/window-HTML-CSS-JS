const btn = document.querySelectorAll(".btn");
const navForm = document.querySelectorAll(".nav-form");
const navForms = document.querySelector(".nav-forms");
const close = document.querySelectorAll(".form-close");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    navForm[i].classList.add("active");
    navForms.classList.add("active");
    bg.classList.add("active");
    body.classList.add("active");
  });
}

for (let x = 0; x < btn.length; x++) {
  close[x].addEventListener("click", () => {
    navForm[x].classList.remove("active");
    navForms.classList.remove("active");
    bg.classList.remove("active");
    body.classList.remove("active");
  });
}

const navBtn = document.querySelector(".nav-btn-byrger");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navBtn.classList.toggle("active");
  bg.classList.toggle("active");
  body.classList.toggle("active");
});

bg.addEventListener("click", () => {
  for (let q = 0; q < navForm.length; q++) {
    navForm[q].classList.remove("active");
  }
  bg.classList.remove("active");
  navBtn.classList.remove("active");
  navForms.classList.remove("active");
  navList.classList.remove("active");
  body.classList.remove("active");
});

const navBtns = document.querySelector(".nav-btns");
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navBtns.classList.add("active");
  } else {
    navBtns.classList.remove("active");
  }
});

// ====== SWIPER ========
// ====== SWIPER ========
// ====== SWIPER ========

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 5000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Появление всплывающих окон раздела "Наши услуги"
const servCardIcon = document.querySelectorAll(".services-card-icon"); // click
const servBlocks = document.querySelector(".services-blocks");
const servBlock = document.querySelectorAll(".services-block");
const servBlockSpan = document.querySelectorAll(".services-block-span");
const servBg = document.querySelector(".services-bg");
const nav = document.querySelector(".nav");

for (let i = 0; i < servCardIcon.length; i++) {
  servCardIcon[i].addEventListener("click", () => {
    servBlocks.classList.add("active");
    servBlock[i].classList.add("active");
    servBg.classList.add("active");
    if (servBg.classList.contains("active")) {
      nav.style.zIndex = "8";
    }
  });
}

for (let i = 0; i < servBlockSpan.length; i++) {
  servBlockSpan[i].addEventListener("click", () => {
    servBlocks.classList.remove("active");
    servBlock[i].classList.remove("active");
    servBg.classList.remove("active");
    nav.style.zIndex = "9999";
  });
}

servBg.addEventListener("click", () => {
  servBlocks.classList.remove("active");
  servBg.classList.remove("active");
  const activeBlock = document.querySelector(".services-block.active");
  if (activeBlock) {
    activeBlock.classList.remove("active");
  }

  aboutReviewsForm.classList.remove("active"); // Закрытие формы отзыва

  for (let i = 0; i < portfolioSlideClose.length; i++) {
    // Зыкрытие portfolio pop-up
    portfolioPopUp[i].classList.remove("active");
  }
});

// Карусель products
// Карусель

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const carouselBtn = document.querySelectorAll(".carousel-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000);

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    carouselBtn.forEach((btn) => btn.classList.remove("active"));

    slides[index].classList.add("active");
    carouselBtn[index].classList.add("active");
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }

  nextBtn.addEventListener("click", function (e) {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });

  prevBtn.addEventListener("click", function (e) {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });

  carouselBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      goToSlide(index);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    });
  });

  slides.forEach((slide, index) => {
    slide.addEventListener("mouseover", function () {
      clearInterval(slideInterval);
    });

    slide.addEventListener("mouseover", function () {
      slideInterval = setInterval(nextSlide, 3000);
    });
  });
});

// About
const aboutBtn = document.querySelectorAll(".about-btn");
const aboutSlide = document.querySelectorAll(".about-content-slide");

for (let i = 0; i < aboutBtn.length; i++) {
  aboutBtn[i].addEventListener("click", () => {
    for (let j = 0; j < aboutBtn.length; j++) {
      aboutBtn[j].classList.remove("active");
      aboutSlide[j].classList.remove("active");
    }
    aboutBtn[i].classList.add("active");
    aboutSlide[i].classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutReviewSlide = document.querySelectorAll(".about-reviews-slide");
  const aboutReviewBtnNext = document.querySelector(".about-reviews-btn-next");
  const aboutReviewBtnPrev = document.querySelector(".about-reviews-btn-prev");
  let aboutReviewCurrent = 0;

  aboutReviewBtnNext.addEventListener("click", () => {
    aboutReviewSlide.forEach((slide) => slide.classList.remove("active"));
    if (aboutReviewSlide.length > aboutReviewCurrent + 1) {
      aboutReviewSlide[aboutReviewCurrent + 1].classList.add("active");
      aboutReviewCurrent++;
    } else {
      aboutReviewCurrent = 0;
      aboutReviewSlide[aboutReviewCurrent].classList.add("active");
    }
  });

  aboutReviewBtnPrev.addEventListener("click", () => {
    aboutReviewSlide.forEach((slide) => slide.classList.remove("active"));
    if (aboutReviewCurrent - 1 >= 0) {
      aboutReviewSlide[aboutReviewCurrent - 1].classList.add("active");
      aboutReviewCurrent--;
    } else {
      aboutReviewCurrent = aboutReviewSlide.length - 1;
      aboutReviewSlide[aboutReviewCurrent].classList.add("active");
    }
  });
});

// About form
const aboutReviewsBtn = document.querySelector(".about-reviews-btn");
const aboutReviewsForm = document.querySelector(".about-reviews-form");
const aboutReviewsFormClose = document.querySelector(
  ".about-reviews-form-btn-close"
);

aboutReviewsBtn.addEventListener("click", () => {
  aboutReviewsForm.classList.add("active");
  servBg.classList.add("active");
  if (servBg.classList.contains("active")) {
    nav.style.zIndex = "8";
  }
});

aboutReviewsFormClose.addEventListener("click", () => {
  aboutReviewsForm.classList.remove("active");
  servBg.classList.remove("active");
});

let aboutSwiper = new Swiper(".about-certificate-swiper", {
  spaceBetween: 11,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let portfolioSwiper = new Swiper(".portfolio-swiper", {
  spaceBetween: 44,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let popUpSwiper = new Swiper(".pop-up-slider", {
  loop: true,
  autoplay: { delay: 5000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// portfolio pop-up
const portfolioSlide = document.querySelectorAll(".portfolio-slide");
const portfolioPopUp = document.querySelectorAll(".pop-up");
const portfolioSlideClose = document.querySelectorAll(".pop-up-close");

for (let i = 0; i < portfolioSlide.length; i++) {
  portfolioSlide[i].addEventListener("click", () => {
    portfolioPopUp[i % 2].classList.add("active");
    servBg.classList.add("active");

    if (servBg.classList.contains("active")) {
      nav.style.zIndex = "8";
    }
  });
}

for (let i = 0; i < portfolioSlideClose.length; i++) {
  portfolioSlideClose[i].addEventListener("click", () => {
    portfolioPopUp[i].classList.remove("active");
    servBg.classList.remove("active");
  });
}

// question

const questionBlock = document.querySelectorAll(".question-block");
const answerBlock = document.querySelectorAll(".answer-block");
const answerBlockText = document.querySelectorAll(".answer-block-text");
const questionBlockArrow = document.querySelectorAll(".question-block-arrow");

for (let i = 0; i < questionBlock.length; i++) {
  questionBlock[i].addEventListener("click", () => {
    questionBlock[i].classList.toggle("active");
    answerBlock[i].classList.toggle("active");
    answerBlockText[i].classList.toggle("active");
    questionBlockArrow[i].classList.toggle("active");
  });
}
