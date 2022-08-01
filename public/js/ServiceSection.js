var exploreBtn = document.querySelector('.knowMorebtn');
var arrow = document.querySelector('.arrow');

exploreBtn.addEventListener('mouseenter', () => {
    arrow.classList.add('arrowActive');
})


var contactbtn = document.querySelector('.contactBtn');
var locateSection = document.querySelector('.location_section');

contactbtn.addEventListener('click', () => {
    locateSection.scrollIntoView();
})