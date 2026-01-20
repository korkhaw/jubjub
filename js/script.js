// สร้างกลีบดอกไม้โปรยลงมา
const petalsContainer = document.querySelector('.petals-container');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  const size = Math.random() * 20 + 15;
  petal.style.width = size + 'px';
  petal.style.height = size + 'px';

  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = Math.random() * 5 + 5 + 's';
  petal.style.animationDelay = Math.random() * 5 + 's';

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 500);

function openLetter() {
  document.getElementById("letterOverlay").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterOverlay").style.display = "none";
}
