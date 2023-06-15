/* Hamburger function */
const toggleBtn= document.querySelector('.toggle_btn');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
  toggleBtn.classList.toggle('clicked')
  dropDownMenu.classList.toggle('open')
}

/* Theme switch function */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);


/* Jump active page */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    document.querySelector('.navbar ul li a[href*= ' + current + ']').classList.add('active');
  });
});

const nav = document.querySelectorAll(".dropdown_menu li a");
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
    document.querySelector('.dropdown_menu li a[href*= ' + current + ']').classList.add('active');
  });
});




