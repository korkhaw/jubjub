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

// ===== เฉพาะหน้า memories =====
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".gallery-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  let allSlides = document.querySelectorAll(".gallery-item");
  let currentIndex = 1;
  let slideWidth = slider.clientWidth;

  function updateWidth() {
    slideWidth = slider.clientWidth;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  window.addEventListener("resize", updateWidth);
  updateWidth();

  function moveToSlide() {
    slider.style.transition = "transform 0.45s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    moveToSlide();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    moveToSlide();
  });

  slider.addEventListener("transitionend", () => {
    allSlides = document.querySelectorAll(".gallery-item");

    if (allSlides[currentIndex].isEqualNode(firstClone)) {
      slider.style.transition = "none";
      currentIndex = 1;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    if (allSlides[currentIndex].isEqualNode(lastClone)) {
      slider.style.transition = "none";
      currentIndex = allSlides.length - 2;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });
});
