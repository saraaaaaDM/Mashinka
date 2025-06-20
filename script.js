const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // change toutes les 3 secondes

window.addEventListener('load', () => {
  const galerie = document.querySelector('.galerie-piercings .galerie');
  const images = galerie.querySelectorAll('img');

  images.forEach(img => {
    img.style.gridRowEnd = `span ${Math.ceil(img.naturalHeight / 10)}`;
  });
});
