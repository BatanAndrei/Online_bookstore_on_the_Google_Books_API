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
    let sliderDots = document.querySelector(".second-section_dot");

    initImage();


function initImage() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url('${images[index].url}');" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
        
        console.log(imageDiv)
    });
};
};




document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });





