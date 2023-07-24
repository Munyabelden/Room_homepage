const carousel = document.getElementById("carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselSections = document.querySelectorAll(".carousel-section");
console.log(carouselSections);

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const showSlide = () => {
  carouselSections.forEach((section, index) => {
    section.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + carouselSections.length) % carouselSections.length;
  showSlide();
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % carouselSections.length;
  showSlide();
  console.log(currentIndex);
  console.log("Current carouselSection:", carouselSections[currentIndex]);
};

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

carousel.addEventListener("mousedown", (e) => {
  touchStartX = e.clientX;
});

carousel.addEventListener("mouseup", (e) => {
  touchEndX = e.clientX;
  handleSwipe();
});

const handleSwipe = () => {
  const swipeThreshold = 100;

  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > swipeThreshold) {
    prevSlide();
  } else if (swipeDistance < -swipeThreshold) {
    nextSlide();
  }
};

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

currentIndex = 0;
showSlide();
