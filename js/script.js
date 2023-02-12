// scrollForest

const forest = document.querySelector(".promo-bg__forest");

// addBgHeader

let scrollpos = window.scrollY;

const header = document.querySelector(".header__bg");
const scrollChange = 3;

const add_class_on_scroll = () => header.classList.add("header__scroll");
const remove_class_on_scroll = () => header.classList.remove("header__scroll");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  //   scrollForest

  forest.style.transform = `translateY(${scrollpos}px)`;
});
