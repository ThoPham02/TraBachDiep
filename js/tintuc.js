const pages = document.querySelectorAll(".page");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
let run = 0;

console.log(pages[run]);

function changePage(i) {
    if (i === -1) {
        pages[run].classList.toggle("highlight");
        run--;
        pages[run].classList.toggle("highlight");
    } else if (i === 1) {
        pages[run].classList.toggle("highlight");
        run++;
        pages[run].classList.toggle("highlight");
    }
}
// sự kiện click:
btnNext.addEventListener("click", function () {
    if (run === pages.length - 1) {
        return run;
    } else {
        changePage(1);
    }
});

btnPrev.addEventListener("click", function () {
    if (run === 0) {
        return run;
    } else {
        changePage(-1);
    }
});

// sự kiện click vào trang bất kì:
pages.forEach(function (page, index) {
    page.addEventListener("click", function () {
        pages[run].classList.toggle("highlight");
        run = index;
        pages[run].classList.toggle("highlight");
        console.log(run);
    });
});
