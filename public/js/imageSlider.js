//image slider javascript will be here

let images = document.querySelectorAll(".SlideImage");
let indicators = document.querySelectorAll(".circles");
let textDesc_Slide = document.querySelectorAll(".desc");


indicators[0].addEventListener('click', () => {
    textDesc_Slide[0].style.opacity = "1";
    textDesc_Slide[1].style.opacity = "0";
    textDesc_Slide[2].style.opacity = "0";
    textDesc_Slide[3].style.opacity = "0";
    textDesc_Slide[4].style.opacity = "0";
    indicators[0].classList.add('circle_active');
    indicators[1].classList.remove('circle_active');
    indicators[2].classList.remove('circle_active');
    indicators[3].classList.remove('circle_active');
    indicators[4].classList.remove('circle_active');
    images[0].classList.add('ImageActive');
    images[1].classList.remove('ImageActive');
    images[2].classList.remove('ImageActive');
    images[3].classList.remove('ImageActive');
    images[4].classList.remove('ImageActive');
});

indicators[1].addEventListener('click', () => {
    textDesc_Slide[0].style.opacity = "0";
    textDesc_Slide[1].style.opacity = "1";
    textDesc_Slide[2].style.opacity = "0";
    textDesc_Slide[3].style.opacity = "0";
    textDesc_Slide[4].style.opacity = "0";
    indicators[0].classList.remove('circle_active');
    indicators[1].classList.add('circle_active');
    indicators[2].classList.remove('circle_active');
    indicators[3].classList.remove('circle_active');
    indicators[4].classList.remove('circle_active');
    images[0].classList.remove('ImageActive');
    images[1].classList.add('ImageActive');
    images[2].classList.remove('ImageActive');
    images[3].classList.remove('ImageActive');
    images[4].classList.remove('ImageActive');
});

indicators[2].addEventListener('click', () => {
    textDesc_Slide[0].style.opacity = "0";
    textDesc_Slide[1].style.opacity = "0";
    textDesc_Slide[2].style.opacity = "1";
    textDesc_Slide[3].style.opacity = "0";
    textDesc_Slide[4].style.opacity = "0";
    indicators[0].classList.remove('circle_active');
    indicators[1].classList.remove('circle_active');
    indicators[2].classList.add('circle_active');
    indicators[3].classList.remove('circle_active');
    indicators[4].classList.remove('circle_active');
    images[0].classList.remove('ImageActive');
    images[1].classList.remove('ImageActive');
    images[2].classList.add('ImageActive');
    images[3].classList.remove('ImageActive');
    images[4].classList.remove('ImageActive');
});

indicators[3].addEventListener('click', () => {
    textDesc_Slide[0].style.opacity = "0";
    textDesc_Slide[1].style.opacity = "0";
    textDesc_Slide[2].style.opacity = "0";
    textDesc_Slide[3].style.opacity = "1";
    textDesc_Slide[4].style.opacity = "0";
    indicators[0].classList.remove('circle_active');
    indicators[1].classList.remove('circle_active');
    indicators[2].classList.remove('circle_active');
    indicators[3].classList.add('circle_active');
    indicators[4].classList.remove('circle_active');
    images[0].classList.remove('ImageActive');
    images[1].classList.remove('ImageActive');
    images[2].classList.remove('ImageActive');
    images[3].classList.add('ImageActive');
    images[4].classList.remove('ImageActive');
});

indicators[4].addEventListener('click', () => {
    textDesc_Slide[0].style.opacity = "0";
    textDesc_Slide[1].style.opacity = "0";
    textDesc_Slide[2].style.opacity = "0";
    textDesc_Slide[3].style.opacity = "0";
    textDesc_Slide[4].style.opacity = "1";
    indicators[0].classList.remove('circle_active');
    indicators[1].classList.remove('circle_active');
    indicators[2].classList.remove('circle_active');
    indicators[3].classList.remove('circle_active');
    indicators[4].classList.add('circle_active');
    images[0].classList.remove('ImageActive');
    images[1].classList.remove('ImageActive');
    images[2].classList.remove('ImageActive');
    images[3].classList.remove('ImageActive');
    images[4].classList.add('ImageActive');
});
