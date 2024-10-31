let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");

let formCloseBtn = document.querySelector("#form-close-btn");

let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("ri-close-large-line");
  searchBar.classList.remove("active");
  // navBar.classList.remove('active');
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("ri-close-large-line");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formCloseBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("ri-close-large-line");
  navBar.classList.toggle("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
