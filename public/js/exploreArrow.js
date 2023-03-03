//exploreServices btn service section
var exploreBtn = document.querySelectorAll('.knowMorebtn');
var arrow = document.querySelectorAll('.arrow');

exploreBtn[0].addEventListener('mouseenter', () => {
    arrow[0].classList.add('arrowActive');
})
exploreBtn[1].addEventListener('mouseenter', () => {
    arrow[1].classList.add('arrowActive');
})