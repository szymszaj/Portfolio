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