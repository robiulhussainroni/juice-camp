///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
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

///////////////////////////////////////////////////////////
// Accordion

// Select all step buttons
const stepButtons = document.querySelectorAll(".how-button");

// Add event listener to each button
stepButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the parent .steps element
    const stepsEl = this.closest(".steps");

    // Toggle the .open class
    stepsEl.classList.toggle("open");

    // Change the icon direction based on open state
    const icon = this.querySelector(".how-icon");
    if (stepsEl.classList.contains("open")) {
      icon.name = "chevron-down-outline";
    } else {
      icon.name = "chevron-up-outline";
    }
  });
});
