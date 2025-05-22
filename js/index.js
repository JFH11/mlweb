const slides = document.getElementById("slide-track");
const totalSlides = slides.children.length;
let index = 0;

const dotsContainer = document.getElementById("dots");

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    goToSlide(i);
    resetWaktu();
  });
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  goToSlide(index);
}
let slideInterval = setInterval(nextSlide, 4000);

function resetWaktu() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 10000);
}

function showLoader(event) {
  event.preventDefault();
  event.stopPropagation();
  let loader = document.getElementById("container-loader");
  loader.style.display = "grid";

  let targetUrl = event.currentTarget.href;

  setTimeout(function () {
    window.location.href = targetUrl;
  }, 1000);
}
