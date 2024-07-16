document.addEventListener('DOMContentLoaded', function () {
  const texts = ["INTENSE WORKOUT", "OTHER WORKOUT", "YET ANOTHER WORKOUT"];
  let currentIndex = 0;
  const textSlide = document.getElementById('text-slide');
  const images = document.querySelectorAll('.slide img');

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    textSlide.textContent = texts[index];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
