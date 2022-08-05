
//exploreServices btn service section
var exploreBtn = document.querySelectorAll('.knowMorebtn');
var arrow = document.querySelectorAll('.arrow');

exploreBtn[0].addEventListener('mouseenter', () => {
    arrow[0].classList.add('arrowActive');
})
exploreBtn[1].addEventListener('mouseenter', () => {
    arrow[1].classList.add('arrowActive');
})


//contact btn navbar
var contactbtn = document.querySelector('.contactBtn');
var locateSection = document.querySelector('.location_section');
var mobileNav = document.querySelector('.mobileNav');
var Ham = document.querySelector('.hamburger ');

contactbtn.addEventListener('click', () => {
    locateSection.scrollIntoView({ behavior: 'smooth' });
    mobileNav.classList.remove('is-active');
    Ham.classList.remove('is-active');
})


//connect btn
var connectBtn = document.querySelector('.connectbtn');
var contactForm = document.querySelector('.contactForm_section');

connectBtn.addEventListener('click', () => {
    contactForm.scrollIntoView({ behavior: 'smooth' });
})


//explore btn
var explore = document.querySelector('.Explorebtn');
var explorenow = document.querySelector('.image_Slider');

explore.addEventListener('click', () => {
    explorenow.scrollIntoView({ behavior: 'smooth' });
})

//hamburger menu
var hamburger = document.querySelector('.hamburger');
var navArea = document.querySelector('.mobileNav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navArea.classList.toggle('is-active');
})
