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
  // Toggle function theme switch dark/light
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
}
toggleSwitch.addEventListener("change", switchTheme);

/* Jump to active page on scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((i) => {
    i.classList.remove("active");
    document
      .querySelector(".navbar ul li a[href*= " + current + "]")
      .classList.add("active");
  });
});
const nav = document.querySelectorAll(".dropdown_menu ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });

  nav.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector(".dropdown_menu li a[href*= " + current + "]")
      .classList.add("active");
  });
});


