//Carrusel
let currentIndex = 0;

function showSlide(index) {
  const wrapper = document.querySelector('.carousel-wrapper');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  const newPosition = -index * itemWidth;
  wrapper.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + 29) % 29; // Cambia 3 por el número total de elementos en el carrusel
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 28; // Cambia 3 por el número total de elementos en el carrusel
    showSlide(currentIndex);
  }




let currentIndex2 = 0;
function showSlide2(index) {
    const wrapper = document.querySelector('.carousel-wrapper2');
    const itemWidth = document.querySelector('.carousel-item2').offsetWidth;
    const newPosition = -index * itemWidth;
    wrapper.style.transform = `translateX(${newPosition}px)`;
    currentIndex = index;
}
function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + 29) % 29; // Cambia 3 por el número total de elementos en el carrusel
    showSlide2(currentIndex2);
  }
  function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % 28; // Cambia 3 por el número total de elementos en el carrusel
    showSlide2(currentIndex2);
  }