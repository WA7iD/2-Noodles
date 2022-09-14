//========selecting element=========//
const toTopBtn = document.querySelector(".toTop");
// =============== Slider 1
const sliderOne = function () {
  const slides = document.querySelectorAll(".landing__content");
  const dotsContainer = document.querySelector(".landing__indactors");
  //give every slide their own space and insert dots
  const goToSlide = function (slide) {
    slides.forEach(function (sl, i) {
      sl.style.transform = `translateY(${(i - slide) * 100}%)`;
    });
  };

  //create indactors
  const createDots = function () {
    slides.forEach((_, i) =>
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="indactor" data-slide="${i}"></li>`
      )
    );
  };

  //give indactors avtive class
  const activeDot = function (slide) {
    document
      .querySelectorAll(".indactor")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelector(`.indactor[data-slide="${slide}"]`)
      .classList.add("active");
  };

  //turn on slider
  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();
  //switch slides
  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("indactor")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
sliderOne();

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 160) {
    toTopBtn.style.bottom = "40px";
    toTopBtn.style.opacity = 100;
  } else {
    toTopBtn.style.bottom = "-50px";
    toTopBtn.style.opacity = 0;
  }
});
