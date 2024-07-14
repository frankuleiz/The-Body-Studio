document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  showSlide(currentSlide);
});
