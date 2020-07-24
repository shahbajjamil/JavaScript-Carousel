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
});
appWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.add("active");
  webWork.classList.remove("active");
  // web.classList.remove(".hide");

  // const appData = [
  //   [
  //     "WhatsApp-UI-Clone",
  //     "whatsapp3.gif",
  //     "Just simple UI clone of WhatsApp, This app is build with flutter.",
  //     "#getapplink",
  //     "https://github.com/shahbajjamil",
  //   ],
  //   [
  //     "WhatsApp-UI-Clone",
  //     "whatsapp3.gif",
  //     "Just simple UI clone of WhatsApp, This app is build with flutter.",
  //     "#getapplink",
  //     "https://github.com/shahbajjamil",
  //   ],
  // ];

  // myworkBuild.innerHTML = "";
  // for (let i = 0; i < appData.length; i++) {
  //   myworkBuild.innerHTML +=
  //     '<div class="slide"><div class="appWork"><div class="appSS">' +
  //     '<img src='+appData[i][1]+' />' +
  //     '</div><div class="appContent">' +
  //     "<h2>"+appData[i][0]+"</h2>" +
  //     "<p>"+appData[i][2]+"</p>" +
  //     '<div class="button">' +
  //     '<a href='+appData[i][3]+'>Get Apk</a>' +
  //     '<a href='+appData[i][4]+'>More Info</a>' +
  //     "</div></div></div></div>";
  // }
});
webWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.remove("active");
  webWork.classList.add("active");

  // myworkBuild.innerHTML = "";
  // for (let i = 0; i < 3; i++) {
  //   myworkBuild.innerHTML +=
  //     '<div class="slide"><div class="webWork"><div class="webSS">' +
  //     '<img src="dell.png" />' +
  //     '</div><div class="webContent">' +
  //     "<h2>Ramadan Mubarak</h2>" +
  //     "<p>Lorem ipsum Fugit eius nemo</p>" +
  //     '<div class="button">' +
  //     '<a href="#">Get Apk</a>' +
  //     '<a href="#">More Info</a>' +
  //     "</div></div></div></div>";
  // }
  // runSlide();
});
// for (let i = 0; i < 2; i++) {
//     myworkBuild.innerHTML +=
//       '<div class="slide"><div class="webWork"><div class="webSS">' +
//       '<img src="dell.png" />' +
//       '</div><div class="webContent">' +
//       "<h2>Ramadan Mubarak</h2>" +
//       "<p>Lorem ipsum Fugit eius nemo</p>" +
//       '<div class="button">' +
//       '<a href="#">Get Apk</a>' +
//       '<a href="#">More Info</a>' +
//       "</div></div></div></div>";
//   }

const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".mywork");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide");
let index = 0;
let slideId;
// let slides = slide.childElementCount;
console.log(slides);
const slideWidth = slides[index].clientWidth;
// slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
console.log(slideWidth);
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