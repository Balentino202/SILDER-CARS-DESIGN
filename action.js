const images = document.querySelectorAll('.slider img');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
let index = 0;

function showImage() {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
  index++;
  if (index === images.length) {
    index = 0;
  }
  setTimeout(showImage, 5000);
}

showImage();

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('show');
});
