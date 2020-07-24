const myworkBuild = document.querySelector(".mywork");
// console.log(myworkBuild);
const allWork = document.getElementById("allWork");
const appWork = document.getElementById("appWork");
const webWork = document.getElementById("webWork");

const app = document.querySelectorAll(".app");
const web = document.querySelectorAll(".web");
// console.log(app);
// console.log(web);

allWork.addEventListener("click", () => {
  allWork.classList.add("active");
  appWork.classList.remove("active");
  webWork.classList.remove("active");
  app.forEach((e) => {
    e.classList.remove("hidden");
    e.classList.add("visible");
  });
  web.forEach((e) => {
    e.classList.remove("hidden");
    e.classList.add("visible");
  });
});
appWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.add("active");
  webWork.classList.remove("active");
  app.forEach((e) => {
    e.classList.remove("hidden");
    e.classList.add("visible");
  });
  web.forEach((e) => {
    e.classList.add("hidden");
    e.classList.remove("visible");
  });
  
});
webWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.remove("active");
  webWork.classList.add("active");
  web.forEach((e) => {
    e.classList.remove("hidden");
    e.classList.add("visible");
  });
  app.forEach((e) => {
    e.classList.add("hidden");
    e.classList.remove("visible");
  });
});


const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".mywork");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide.visible");
let index = 0;
let slideId;
// let slides = slide.childElementCount;
console.log(slides);
const slideWidth = slides[index].clientWidth;
// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);
// console.log(slideWidth);
// function runSlide(){
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const moveToNextSlide = () => {
  if (index >= slides.length - 1) {
    index = -1;
  }
  index++;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) {
    index = slides.length;
  }
  index--;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);
prevBtn.addEventListener("click", () => {
  moveToPreviousSlide();
  clearInterval(slideId);
  startSlide();
});

nextBtn.addEventListener("click", () => {
  moveToNextSlide();
  clearInterval(slideId);
  startSlide();
});

startSlide();
// }