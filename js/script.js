const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");
const mobileBgEl = document.querySelector(".mobile-bg");

btnNavEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  mobileBgEl.classList.toggle("transparent-mobile-bg");
});
