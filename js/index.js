var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
slideShow();

function slideShow() {
    slides[slideIndex].style.display = 'none';
    dots[slideIndex].classList.remove("dot-active");
    slideIndex++;
    if (slideIndex > slides.length - 1) { slideIndex = 0 };
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add("dot-active");
}
function prev() {
    slides[slideIndex].style.display = 'none';
    dots[slideIndex].classList.remove("dot-active");
    slideIndex--;
    if (slideIndex > slides.length - 1) { slideIndex = 0 };
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add("dot-active");
}