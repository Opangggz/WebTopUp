
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount; // Loop back to the first slide
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set interval for automatic slide change
    setInterval(showNextSlide, 5000); // Change slide every 3 seconds
});