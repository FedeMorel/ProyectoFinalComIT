const gapTwo = 16;
const gap = 16;
const carousel = document.getElementById("carouselPhotofolio"),
    content = document.getElementById("contentPhotofolio"),
    next = document.getElementById("next-one"),
    prev = document.getElementById("prev-one");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 100) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const carouselTwo = document.getElementById("carouselAlbum"),
    contentTwo = document.getElementById("contentAlbum"),
    nextTwo = document.getElementById("next-two"),
    prevTwo = document.getElementById("prev-two");

nextTwo.addEventListener("click", e => {
    carouselTwo.scrollBy(widthTwo + gapTwo, 0);
    if (carouselTwo.scrollWidth !== 0) {
        prevTwo.style.display = "flex";
    }
    if (contentTwo.scrollWidth - widthTwo - gapTwo <= carouselTwo.scrollLeft + widthTwo) {
        nextTwo.style.display = "none";
    }
});
prevTwo.addEventListener("click", e => {
    carouselTwo.scrollBy(-(widthTwo + gapTwo), 0);
    if (carouselTwo.scrollLeft - widthTwo - gapTwo <= 100) {
        prevTwo.style.display = "none";
    }
    if (!contentTwo.scrollWidth - widthTwo - gapTwo <= carouselTwo.scrollLeft + widthTwo) {
        nextTwo.style.display = "flex";
    }
});

let widthTwo = carouselTwo.offsetWidth;
window.addEventListener("resize", e => (widthTwo = carouselTwo.offsetWidth));


const carouselThree = document.getElementById("carouselfarmhouse"),
    contentThree = document.getElementById("contentfarmhouse"),
    nextThree = document.getElementById("next-three"),
    prevThree = document.getElementById("prev-three");

nextThree.addEventListener("click", e => {
    carouselThree.scrollBy(widthThree + gapTwo, 0);
    if (carouselThree.scrollWidth !== 0) {
        prevThree.style.display = "flex";
    }
    if (contentThree.scrollWidth - widthThree - gapTwo <= carouselThree.scrollLeft + widthThree) {
        nextThree.style.display = "none";
    }
});
prevThree.addEventListener("click", e => {
    carouselThree.scrollBy(-(widthThree + gapTwo), 0);
    if (carouselThree.scrollLeft - widthThree - gapTwo <= 100) {
        prevThree.style.display = "none";
    }
    if (!contentThree.scrollWidth - widthThree - gapTwo <= carouselThree.scrollLeft + widthThree) {
        nextThree.style.display = "flex";
    }
});

let widthThree = carouselThree.offsetWidth;
window.addEventListener("resize", e => (widthThree = carouselThree.offsetWidth));


const carouselFour = document.getElementById("carouselCountry"),
    contentFour = document.getElementById("contentCountry"),
    nextFour = document.getElementById("next-four"),
    prevFour = document.getElementById("prev-four");

nextFour.addEventListener("click", e => {
    carouselFour.scrollBy(widthFour + gapTwo, 0);
    if (carouselFour.scrollWidth !== 0) {
        prevFour.style.display = "flex";
    }
    if (contentFour.scrollWidth - widthFour - gapTwo <= carouselFour.scrollLeft + widthFour) {
        nextFour.style.display = "none";
    }
});
prevFour.addEventListener("click", e => {
    carouselFour.scrollBy(-(widthFour + gapTwo), 0);
    if (carouselFour.scrollLeft - widthFour - gapTwo <= 100) {
        prevFour.style.display = "none";
    }
    if (!contentFour.scrollWidth - widthFour - gapTwo <= carouselFour.scrollLeft + widthFour) {
        nextFour.style.display = "flex";
    }
});

let widthFour = carouselFour.offsetWidth;
window.addEventListener("resize", e => (widthFour = carouselFour.offsetWidth));