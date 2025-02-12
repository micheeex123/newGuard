let slideIndex = 0;
let slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    slideInterval = setInterval(autoShowSlides, 3000);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

slideInterval = setInterval(autoShowSlides, 3000); 
showSlides(slideIndex);
