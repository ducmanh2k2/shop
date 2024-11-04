let current = 0;
const imgs = document.getElementsByTagName('img');
const length = imgs.length;
const btnLeft = document.querySelector('.prev');
const btnRight = document.querySelector('.next');
const listImage = document.querySelector('.list-img');

const handleChangeSlide = () => {
    let width = imgs[0].offsetWidth;

    if (current >= length - 1) {
        current = 0;
    } else {
        current++;
    }

    listImage.style.transform = `translateX(${width * -1 * current}px)`;

    const activeSlide = document.querySelector('.active');
    if (activeSlide) activeSlide.classList.remove('active');
    const newActive = document.querySelector('.index-item-' + current);
    if (newActive) newActive.classList.add('active');
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    let width = imgs[0].offsetWidth;

    if (current <= 0) {
        current = length - 1;
    } else {
        current--;
    }

    listImage.style.transform = `translateX(${width * -1 * current}px)`;

    const activeSlide = document.querySelector('.active');
    if (activeSlide) activeSlide.classList.remove('active');
    const newActive = document.querySelector('.index-item-' + current);
    if (newActive) newActive.classList.add('active');

    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});
