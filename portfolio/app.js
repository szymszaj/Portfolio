let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')

    this.classList.toggle('fa-xmark')
})

//animation 

let typed = new Typed('.auto-input', {
    //tekst do zmiany 
    strings: ['Front-End Developer!', 'Technik Geodeta!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
