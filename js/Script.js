
//exploreServices btn service section
var exploreBtn = document.querySelector('.knowMorebtn');
var arrow = document.querySelector('.arrow');

exploreBtn.addEventListener('mouseenter', () => {
    arrow.classList.add('arrowActive');
})


//contact btn navbar
var contactbtn = document.querySelector('.contactBtn');
var locateSection = document.querySelector('.location_section');

contactbtn.addEventListener('click', () => {
    locateSection.scrollIntoView({ behavior: 'smooth' });
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
