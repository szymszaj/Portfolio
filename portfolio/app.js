let MenuBtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");

  this.classList.toggle("fa-xmark");
});

let typed = new Typed(".auto-input", {
  strings: ["Front-End Developer Intern!", "Geodetic Technician!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

const copyrightElement = document.getElementById("copyright");
function updateYear() {
  const currentYear = new Date().getFullYear();
  copyrightElement.textContent = `&copy; ${currentYear}`;
}
updateYear();
setInterval(updateYear, 60000);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

function closeNavAndFooter() {
  const nav = document.querySelector("header");
  const footer = document.querySelector(".footer");
  nav.style.left = "-300px";
  footer.style.bottom = "-80px";
}
function openNavAndFooter() {
  const nav = document.querySelector("header");
  const footer = document.querySelector(".footer");
  // On MenuBtn click, show the navigation and footer
  nav.style.left = "0";
  footer.style.bottom = "0";
}
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header nav ul li a");
  const menuBtn = document.getElementById("MenuBtn");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        setTimeout(closeNavAndFooter, 400);
      }
    });
  });
  menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      openNavAndFooter();
    } else {
      closeNavAndFooter();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      openNavAndFooter();
    } else {
      closeNavAndFooter();
    }
  });
  if (window.innerWidth <= 992) {
    closeNavAndFooter();
  }
});
const ageElement = document.getElementById("age");

function calculateAge(birthDate) {
  const currentDate = new Date();
  const diff = currentDate - birthDate;
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const birthDate = new Date("2003-05-16");

ageElement.textContent = calculateAge(birthDate);
