// Getting new year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Making Mobile Navigation Work
const mobileNavEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".main-header");

mobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// TODO

// why focus doesn't happenig on mobile nav
// Making Accordion Work
