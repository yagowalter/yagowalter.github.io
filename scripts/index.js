// typed.js

const typed = new Typed('.multiple-text',{
    strings: ['Frontend', 'Flutter'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})


// navbar

const navbar =document.querySelector('.navbar');
const mobileNavbar =document.querySelector('.navbar__mobile');
const button =document.querySelector('.burguer');

button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
})


window.addEventListener('scroll', function(){
    if(this.window.pageYOffset >0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});


// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, .header__left, .secondary-title, .tertiary-title, .description' , {origin:  'top'})
ScrollReveal().reveal(' .header__right, .txt-scroll, .social-media, .skills__item, .portfolio-container, .button-container, .footer__contact, .mb-m, .mb-l, .footer__copyright' , {origin:  'bottom'})