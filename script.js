// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// humburger menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// toogle clas active form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik dimana aja
const hm = document.querySelector("#humburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
