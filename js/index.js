"use strict";

// Declare variables:
const productSlider = document.querySelector(".product-list");
const productItems = document.querySelectorAll(".product-item");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let runner = 0;
const itemWidth = productItems[0].offsetWidth;
// check if user click next or previous:
nextBtn.addEventListener("click", function () {
    changeSlide(1);
});

prevBtn.addEventListener("click", function () {
    changeSlide(-1);
});

// change Slide:
function changeSlide(i) {
    if (i === 1) {
        if (runner >= 0 && runner < 4) {
            runner++;
            productSlider.style = `transform: translateX(-${
                (itemWidth + 32) * runner
            }px)`;
            console.log(runner);
        }
    } else if (i === -1) {
        if (runner > 0 && runner <= 5) {
            runner--;
            productSlider.style = `transform: translateX(-${
                (itemWidth + 32) * runner
            }px)`;
            console.log(runner);
        }
    }
}
