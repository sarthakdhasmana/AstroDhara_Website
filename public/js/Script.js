

//explore btn
var explore = document.querySelector('.Explorebtn');
var explorenow = document.querySelector('.image_Slider');

explore.addEventListener('click', () => {
    explorenow.scrollIntoView({ behavior: 'smooth' });
})


//footer js
var footcontact = document.querySelector('.movetcontact');
footcontact.addEventListener('click', () => {
    contactForm.scrollIntoView();
})

var footzodiac = document.querySelector('.movetzodiac');
footzodiac.addEventListener('click', () => {
    var zodiac = document.querySelector('.zodiacSection_Wrapper');
    zodiac.scrollIntoView();
})
