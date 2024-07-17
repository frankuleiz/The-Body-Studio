document.addEventListener('DOMContentLoaded', function () {
  const texts = ["INTENSE WORKOUT", "WORLD CLASS EQUIPMENTS", "QUALIFIED TRAINERS"];
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
  setInterval(nextSlide, 4000);
});
