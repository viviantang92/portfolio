/* Hamburger */
const toggleBtn = document.querySelector(".toggle_btn");
const dropDownMenu = document.querySelector(".dropdown_menu");
const dropDownMenuItems = document.querySelectorAll(".dropdown_menu li a");

function toggleClasses() {
  // Function to toggle classes
  toggleBtn.classList.toggle("clicked");
  dropDownMenu.classList.toggle("open");
}

toggleBtn.addEventListener("click", toggleClasses);

dropDownMenuItems.forEach((item) => {
  item.addEventListener("click", toggleClasses);
});



/* Theme switch dark/light */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
}

toggleSwitch.addEventListener("change", switchTheme);



/* Jump to active page on scroll */
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar ul li a");
const dropdownLinks = document.querySelectorAll(".dropdown_menu ul li a");

function getCurrentSection() {
  return Array.from(sections).find((section) => {
    const sectionTop = section.offsetTop - 65;
    const sectionBottom = sectionTop + section.offsetHeight;

    return scrollY >= sectionTop && scrollY < sectionBottom;
  });
}

function updateActiveClass(links, currentId) {
  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentId}`
    );
  });
}

function handleScroll() {
  const currentSection = getCurrentSection();
  const currentId = currentSection ? currentSection.getAttribute("id") : "";

  updateActiveClass(navbarLinks, currentId);
  updateActiveClass(dropdownLinks, currentId);
}

window.addEventListener("scroll", handleScroll);
