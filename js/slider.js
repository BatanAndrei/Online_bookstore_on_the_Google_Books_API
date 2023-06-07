import {navigation} from './navigation'; 

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

    initImage();
    initDots();


function initImage() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url('${images[index].url}');" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
};

function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="dot n${index} ${index ===0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        });
    });
};

function moveSlider(num) {{
    sliderDots.querySelector('.active').classList.remove('active');
    sliderDots.querySelector('.n' + num).classList.add('active');
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector('.n' + num).classList.add('active');
        };
    };
};






document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });





