let MenuBtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");

  this.classList.toggle("fa-xmark");
});

// Animation
let typed = new Typed(".auto-input", {
  // Text to change
  strings: ["Front-End Developer Intern!", "Geodetic Technician!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

const copyrightElement = document.getElementById("copyright");
// Function to update the year
function updateYear() {
  const currentYear = new Date().getFullYear();
  copyrightElement.textContent = `&copy; ${currentYear}`;
}
// Call the function to update the year
updateYear();
// Set an interval to check for year changes every minute
setInterval(updateYear, 60000); // You can adjust the frequency to your needs

// Smooth scrolling when clicking on a link in the navigation
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

// Closing the navigation and footer on click
function closeNavAndFooter() {
  const nav = document.querySelector("header");
  const footer = document.querySelector(".footer");
  // Hide the navigation
  nav.style.left = "-300px";
  // Hide the footer
  footer.style.bottom = "-80px"; // You can adjust the bottom value to your preference
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
        // Call the closeNavAndFooter() function with a delay to synchronize the closing of navigation and footer
        setTimeout(closeNavAndFooter, 400); // 400 ms (you can adjust the time to your preference)
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
  // Handling the resize event
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      // If the screen width is greater than 992px, show the navigation and footer
      openNavAndFooter();
    } else {
      // Otherwise, hide the navigation and footer
      closeNavAndFooter();
    }
  });
  // Call the closeNavAndFooter() function on page load if the screen width is less than or equal to 992px
  if (window.innerWidth <= 992) {
    closeNavAndFooter();
  }
});
const ageElement = document.getElementById("age");

// Age calculation based on date of birth
function calculateAge(birthDate) {
  const currentDate = new Date();
  const diff = currentDate - birthDate;
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const birthDate = new Date("2003-05-16");

ageElement.textContent = calculateAge(birthDate);
