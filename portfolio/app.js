let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')

    this.classList.toggle('fa-xmark')
})

//animation 
let typed = new Typed('.auto-input', {
    //tekst do zmiany 
    strings: ['Początkujący Front-End Developer!', 'Technik Geodeta!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

 // Pobierz element span, który zawiera rok
 const copyrightElement = document.getElementById("copyright");
 // Funkcja do aktualizacji roku
 function updateYear() {
   const currentYear = new Date().getFullYear();
   copyrightElement.textContent = `&copy; ${currentYear}`;
 }
 // Wywołaj funkcję aktualizującą rok
 updateYear();
 // Ustaw interwał do sprawdzania zmiany roku co minutę
 setInterval(updateYear, 60000); // Możesz dostosować częstotliwość do swoich potrzeb
//plynne przewijanie po nacisnięciu na odnosnik w nawigacji 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


//zamykanie odnosnika po nacisnieciu 
function closeNavAndFooter() {
  const nav = document.querySelector("header");
  const footer = document.querySelector(".footer")
// Ukryj nawigację
  nav.style.left = "-300px";
 // Ukryj stopkę
  footer.style.bottom = "-80px"; // Możesz dostosować wartość bottom do preferencji
}
function openNavAndFooter() {
  const nav = document.querySelector("header");
  const footer = document.querySelector(".footer");
  // Po kliknięciu w przycisk MenuBtn, pokaż nawigację i stopkę
  nav.style.left = "0";
  footer.style.bottom = "0";
}
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header nav ul li a");
  const menuBtn = document.getElementById("MenuBtn");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        // Wywołaj funkcję closeNavAndFooter() z opóźnieniem, aby zsynchronizować zamykanie nawigacji i stopki
        setTimeout(closeNavAndFooter, 400); // 400 ms (możesz dostosować czas do swoich preferencji)
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
  // Obsługa zdarzenia resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      // Jeśli szerokość ekranu jest większa niż 992px, pokaż nawigację i stopkę
      openNavAndFooter();
    } else {
      // W przeciwnym razie ukryj nawigację i stopkę
      closeNavAndFooter();
    }
  });
  // Wywołaj funkcję closeNavAndFooter() przy załadowaniu strony, jeśli szerokość ekranu jest mniejsza lub równa 992px
  if (window.innerWidth <= 992) {
    closeNavAndFooter();
  }
});

