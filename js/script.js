var menuBtn = document.querySelector(".page-header__menu-btn");
var mobileMenu = document.querySelector(".page-header__menu");

mobileMenu.classList.add("page-header__menu--hide");
menuBtn.classList.remove("page-header__menu-btn--nojs");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("page-header__menu-btn--close");
  mobileMenu.classList.toggle("page-header__menu--hide");
});
