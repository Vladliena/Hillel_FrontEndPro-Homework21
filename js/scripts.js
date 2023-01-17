let offset = 0;
const slider = document.querySelector('.slider');

const buttonNext = document.querySelector('.button_next');
buttonNext.addEventListener('click', function () {
    offset = offset + 300;
    if (offset === 900) {
        buttonNext.style.visibility = 'hidden'
    } else if (offset < 900) {
        buttonPrev.style.visibility = 'visible'
    }
    slider.style.right = offset + 'px';
});

const buttonPrev = document.querySelector('.button_prev')
buttonPrev.addEventListener('click', function () {
    offset = offset - 300;
    if (offset === 0) {
        buttonPrev.style.visibility = 'hidden'
    } else if (offset < 900) {
        buttonNext.style.visibility = 'visible'
    }
    slider.style.right = offset + 'px';
});