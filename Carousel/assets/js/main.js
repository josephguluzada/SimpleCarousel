let nextArrow = document.querySelector(".right-arrow");
let prevArrow = document.querySelector(".left-arrow");

let images = Array.from(document.querySelectorAll(".image"));

nextArrow.addEventListener("click", function () {
    let currentImage = document.querySelector(".image.active");
    currentImage.classList.remove("active");

    if (currentImage == images[images.length - 1]) {
        images[0].classList.add("active");
    } else {
        currentImage.nextElementSibling.classList.add("active");
    }
})

prevArrow.addEventListener("click", function () {
    let currentImage = document.querySelector(".image.active");
    currentImage.classList.remove("active");

    if (currentImage == images[0]) {
        images[images.length - 1].classList.add("active");
    } else {
        currentImage.previousElementSibling.classList.add("active");
    }
})