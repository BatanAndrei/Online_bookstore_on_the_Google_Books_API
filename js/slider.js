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
        
        console.log(imageDiv)
    });
};

function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="dot n${index} ${index ===0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;

        console.log(dot)
    });
};
};




document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });





