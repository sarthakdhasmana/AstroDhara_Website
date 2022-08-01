//here all the zodiac sign section javascript will be there
let zodiacSign = document.querySelectorAll('.zodiac'); //small zodiac signs
let zodiacDetail_img = document.querySelectorAll('.zodiacDetail_img'); //big zodiac sign details image
let zodiacDetail = document.querySelectorAll('.zodiacSignDetail'); //text desc of zodiac sign

zodiacSign[0].addEventListener('click', () => {
    zodiacDetail_img[0].classList.add('zodiacDetail_imgActive');
    zodiacDetail[0].classList.add('zodiacDetail_active');
    for (let i = 1; i < 12; i++) {
        remove(i);
    }
})

zodiacSign[1].addEventListener('click', () => {
    zodiacDetail_img[1].classList.add('zodiacDetail_imgActive');
    zodiacDetail[1].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 1) {
            continue;
        }
        else {
            remove(i);
        }
    }
})

zodiacSign[2].addEventListener('click', () => {
    zodiacDetail_img[2].classList.add('zodiacDetail_imgActive');
    zodiacDetail[2].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 2) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[3].addEventListener('click', () => {
    zodiacDetail_img[3].classList.add('zodiacDetail_imgActive');
    zodiacDetail[3].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 3) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[4].addEventListener('click', () => {
    zodiacDetail_img[4].classList.add('zodiacDetail_imgActive');
    zodiacDetail[4].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 4) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[5].addEventListener('click', () => {
    zodiacDetail_img[5].classList.add('zodiacDetail_imgActive');
    zodiacDetail[5].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 5) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[6].addEventListener('click', () => {
    zodiacDetail_img[6].classList.add('zodiacDetail_imgActive');
    zodiacDetail[6].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 6) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[7].addEventListener('click', () => {
    zodiacDetail_img[7].classList.add('zodiacDetail_imgActive');
    zodiacDetail[7].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 7) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[8].addEventListener('click', () => {
    zodiacDetail_img[8].classList.add('zodiacDetail_imgActive');
    zodiacDetail[8].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 8) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[9].addEventListener('click', () => {
    zodiacDetail_img[9].classList.add('zodiacDetail_imgActive');
    zodiacDetail[9].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 9) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[10].addEventListener('click', () => {
    zodiacDetail_img[10].classList.add('zodiacDetail_imgActive');
    zodiacDetail[10].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 10) {
            continue;
        }
        else {
            remove(i);
        }
    }
})
zodiacSign[11].addEventListener('click', () => {
    zodiacDetail_img[11].classList.add('zodiacDetail_imgActive');
    zodiacDetail[11].classList.add('zodiacDetail_active');
    console.log('working fine');
    for (var i = 0; i < 12; i++) {
        if (i == 11) {
            continue;
        }
        else {
            remove(i);
        }
    }
})


function remove(element) {
    zodiacDetail_img[element].classList.remove('zodiacDetail_imgActive');
    zodiacDetail[element].classList.remove('zodiacDetail_active');
}