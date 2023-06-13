import {resultRequest, nextLoadBooks, toggleCategoryBooks} from './books';

export let images = [{
    url: './banner 1.png',
},{
    url: './banner 2.png',
},{
    url: './banner 3.png',
}];

export function initSlider(){
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".container-slider");
    let sliderDots = document.querySelector(".container-dots");
    let intervalSlider = 5000;

    initImage();
    initDots();
    initAutoplay();


function initImage() {                                 // рисуем картинки слайдера
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url('${images[index].url}');" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
};

function initDots() {                                  // рисуем точки переключения слайдера
    images.forEach((image, index) => {
        let dot = `<div class="dot n${index} ${index ===0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);            // передаём индекс в функцию поткаторому будет определяться клвсс active
        });
    });
};

function initAutoplay() {                                          //автоперелистывание слайдера
    setInterval(() => {
        let curNumber = +sliderImages.querySelector('.active').dataset.index;  // находим текущий слайд
        let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;  // определяем перелистывание по кругу
        moveSlider(nextNumber);                                // передаём индекс в функцию поткаторому будет определяться клвсс active
    }, intervalSlider)
}

function moveSlider(num) {                                          //добавляем или убираем active
    sliderDots.querySelector('.active').classList.remove('active');
    sliderDots.querySelector('.n' + num).classList.add('active');
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector('.n' + num).classList.add('active');
    };
};

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
    resultRequest();
    nextLoadBooks();
    toggleCategoryBooks();
  });





