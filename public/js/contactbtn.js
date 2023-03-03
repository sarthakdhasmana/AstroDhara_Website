//contact btn navbar
var contactbtn1 = document.querySelector('.contactBtn1');
var locateSection = document.querySelector('.location_section');
var mobileNav = document.querySelector('.mobileNav');
var Ham = document.querySelector('.hamburger ');
var contactForm = document.querySelector('.contactForm_section');

contactbtn1.addEventListener('click', () => {
    locateSection.scrollIntoView({ behavior: 'smooth' });
    mobileNav.classList.remove('is-active');
    Ham.classList.remove('is-active');
    contactForm.scrollIntoView();
})


// connect btn
var connectBtn = document.querySelector('.contactBtn2');
var contactForm = document.querySelector('.contactForm_section');

connectBtn.addEventListener('click', () => {
    console.log('working');
    contactForm.scrollIntoView();
})