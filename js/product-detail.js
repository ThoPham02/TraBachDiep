"use strict";

// Declare variables:
const productSlider = document.querySelector(".product-list1");
const productItems = document.querySelectorAll(".product-item1");

const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

let runner = 0;
const itemHeight = productItems[0].offsetHeight;
// check if user click up or down:
upBtn.addEventListener("click", function () {
    changeSlide(1);
});

downBtn.addEventListener("click", function () {
    changeSlide(-1);
});

// change Slide #1:
function changeSlide(i) {
    if (i === 1) {
        if (runner >= 0 && runner < 3) {
            runner++;
            productSlider.style = `transform: translateY(-${
                (itemHeight) * runner
            }px)`;
            console.log(runner);
        }
    } else if (i === -1) {
        if (runner > 0 && runner <= 5) {
            runner--;
            productSlider.style = `transform: translateY(-${
                (itemHeight) * runner
            }px)`;
            console.log(runner);
        }
    }
}