const appData = [
  [
    "App-UI-1",
    "whatsapp3.gif",
    "Just simple UI clone of WhatsApp, This app is build with flutter.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "App-UI-2",
    "whatsapp3.gif",
    "Just simple UI clone of WhatsApp, This app is build with flutter.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "App-UI-3",
    "whatsapp3.gif",
    "Just simple UI clone of WhatsApp, This app is build with flutter.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  // [
  //   "App-UI-4",
  //   "whatsapp3.gif",
  //   "Just simple UI clone of WhatsApp, This app is build with flutter.",
  //   "#getapplink",
  //   "https://github.com/shahbajjamil",
  // ],
  // [
  //   "App-UI-5",
  //   "whatsapp3.gif",
  //   "Just simple UI clone of WhatsApp, This app is build with flutter.",
  //   "#getapplink",
  //   "https://github.com/shahbajjamil",
  // ],
  // [
  //   "App-UI-6",
  //   "whatsapp3.gif",
  //   "Just simple UI clone of WhatsApp, This app is build with flutter.",
  //   "#getapplink",
  //   "https://github.com/shahbajjamil",
  // ],
];
const webData = [
  [
    "web-UI-1",
    "dell.png",
    "Just simple UI clone of web, This app is build with html,css and js.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "web-UI-2",
    "dell.png",
    "Just simple UI clone of web, This app is build with html,css and js.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "web-UI-3",
    "dell.png",
    "Just simple UI clone of web, This app is build with html,css and js.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "web-UI-4",
    "dell.png",
    "Just simple UI clone of web, This app is build with html,css and js.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
  [
    "web-UI-5",
    "dell.png",
    "Just simple UI clone of web, This app is build with html,css and js.",
    "#getapplink",
    "https://github.com/shahbajjamil",
  ],
];
const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".mywork");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;
let index = 0;

const myworkBuild = document.querySelector(".mywork");

const allWork = document.getElementById("allWork");
const appWork = document.getElementById("appWork");
const webWork = document.getElementById("webWork");

const app = document.querySelectorAll(".app");
const web = document.querySelectorAll(".web");

function AllWorkBuild() {
  myworkBuild.innerHTML = "";
  for (
    let i = 0;
    i < (appData.length < webData.length ? webData.length : appData.length);
    i++
  ) {
    if (i < appData.length) {
      myworkBuild.innerHTML +=
        '<div class="slide app"><div class="appWork"><div class="appSS">' +
        "<img src=" +
        appData[i][1] +
        " />" +
        '</div><div class="appContent">' +
        "<h2>" +
        appData[i][0] +
        "</h2>" +
        "<p>" +
        appData[i][2] +
        "</p>" +
        '<div class="button">' +
        "<a href=" +
        appData[i][3] +
        ">Get Apk</a>" +
        "<a href=" +
        appData[i][4] +
        ">More Info</a>" +
        "</div></div></div></div>";
    }
    if (i < webData.length) {
      myworkBuild.innerHTML +=
        '<div class="slide web"><div class="webWork"><div class="webSS">' +
        "<img src=" +
        webData[i][1] +
        " />" +
        '</div><div class="webContent">' +
        "<h2>" +
        webData[i][0] +
        "</h2>" +
        "<p>" +
        webData[i][2] +
        "</p>" +
        '<div class="button">' +
        "<a href=" +
        webData[i][3] +
        ">View Link</a>" +
        "<a href=" +
        webData[i][4] +
        ">More Info</a>" +
        "</div></div></div></div>";
    }
  }
}
window.onload = function () {
  AllWorkBuild();
  runSlide();
};

allWork.addEventListener("click", () => {
  allWork.classList.add("active");
  appWork.classList.remove("active");
  webWork.classList.remove("active");
  // app.forEach((e) => {
  //   e.classList.remove("hidden");
  //   e.classList.add("visible");
  // });
  // web.forEach((e) => {
  //   e.classList.remove("hidden");
  //   e.classList.add("visible");
  // });
  AllWorkBuild();
  runSlide();
});
appWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.add("active");
  webWork.classList.remove("active");

  myworkBuild.innerHTML = "";
  for (let i = 0; i < appData.length; i++) {
    myworkBuild.innerHTML +=
      '<div class="slide app"><div class="appWork"><div class="appSS">' +
      "<img src=" +
      appData[i][1] +
      " />" +
      '</div><div class="appContent">' +
      "<h2>" +
      appData[i][0] +
      "</h2>" +
      "<p>" +
      appData[i][2] +
      "</p>" +
      '<div class="button">' +
      "<a href=" +
      appData[i][3] +
      ">Get Apk</a>" +
      "<a href=" +
      appData[i][4] +
      ">More Info</a>" +
      "</div></div></div></div>";
  }

  // app.forEach((e) => {
  //   e.classList.remove("hidden");
  //   e.classList.add("visible");
  // });
  // web.forEach((e) => {
  //   e.classList.add("hidden");
  //   e.classList.remove("visible");
  // });
  runSlide();
});
webWork.addEventListener("click", () => {
  allWork.classList.remove("active");
  appWork.classList.remove("active");
  webWork.classList.add("active");
  // slide.style.transform = `translateX(${0}px)`;

  myworkBuild.innerHTML = "";
  for (let i = 0; i < webData.length; i++) {
    myworkBuild.innerHTML +=
      '<div class="slide web"><div class="webWork"><div class="webSS">' +
      "<img src=" +
      webData[i][1] +
      " />" +
      '</div><div class="webContent">' +
      "<h2>" +
      webData[i][0] +
      "</h2>" +
      "<p>" +
      webData[i][2] +
      "</p>" +
      '<div class="button">' +
      "<a href=" +
      webData[i][3] +
      ">View Link</a>" +
      "<a href=" +
      webData[i][4] +
      ">More Info</a>" +
      "</div></div></div></div>";
  }

  // web.forEach((e) => {
  //   e.classList.remove("hidden");
  //   e.classList.add("visible");
  // });
  // app.forEach((e) => {
  //   e.classList.add("hidden");
  //   e.classList.remove("visible");
  // });
  runSlide();
});

function runSlide() {
  let slides = document.querySelectorAll(".slide");
  let slideId;
  const slideWidth = slides[index].clientWidth;

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
    // console.log(slideId);
  };
  
  const moveToNextSlide = () => {
    if (index >= slides.length - 1) {
      index = -1;
    }
    console.log(index);
    index++;
    console.log(index);
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
    // clearInterval(slideId);
    clrtime();
  });
  function clrtime() {
    clearInterval(slideId);
  }

  slideContainer.addEventListener("mouseleave", startSlide);
  prevBtn.addEventListener("click", moveToPreviousSlide);
  nextBtn.addEventListener("click", moveToNextSlide);

  startSlide();
}
