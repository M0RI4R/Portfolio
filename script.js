const header = document.querySelector(".header");
const introduction = document.querySelector(".introduction");
const footer = document.querySelector("footer");
const hamBtn = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".vertical-nav");
const navAnchors = document.querySelectorAll(".anchor");
const cvAnchor = document.querySelector(".anchorbtn");
const cvPopup = document.querySelector(".cv");
const closePopup = document.querySelector(".close-popup i");

// ------------------------------------------------STICKY-HEADER-------------------------
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
});
// -------------------------------------------------HAMBURGER-MENU-----------------------
function toggleMenu() {
  hamBtn.classList.toggle("hide");
  xMark.classList.toggle("hide");
  nav.classList.toggle("vertical-nav-active");
}
navAnchors.forEach((e) => {
  e.addEventListener("click", function () {
    nav.classList.toggle("vertical-nav-active");
    hamBtn.classList.toggle("hide");
    xMark.classList.toggle("hide");
  });
});
// -------------------------------------------------CV-POPUP----------------------------
function cv() {
  cvPopup.classList.toggle("show-cv");
}

cvAnchor.addEventListener("click", cv);
burger.addEventListener("click", toggleMenu);
closePopup.addEventListener("click", function () {
  cvPopup.classList.toggle("show-cv");
});
