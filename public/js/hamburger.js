//hamburger menu
var hamburger = document.querySelector('.hamburger');
var navArea = document.querySelector('.mobileNav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navArea.classList.toggle('is-active');
})