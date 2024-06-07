// Getting new year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Making Mobile Navigation Work
const mobileNavEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".main-header");

// Function to toggle the nav
const toggleNav = () => {
  headerEl.classList.toggle("nav-open");
};

// Add click event listener to the mobile nav button
mobileNavEl.addEventListener("click", toggleNav);

// Add click event listener to each navigation link
const navLinks = document.querySelectorAll(".main-header nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// TODO

// why focus doesn't happenig on mobile nav
// Making Accordion Work
