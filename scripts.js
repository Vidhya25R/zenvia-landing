// Start: Multi-step form navigation
let currentStep = 1;

function nextStep() {
  document.getElementById(`step-${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step-${currentStep}`).classList.add("active");
}
// End: Multi-step form navigation

// Start: Testimonial slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll("#testimonial-slider .slide");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  slides[currentSlide].classList.add("active");
  setInterval(nextSlide, 3000);
});
// End: Testimonial slider functionality


// Start: Scroll to form section
function scrollToForm() {
  const formSection = document.getElementById("lead-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}
// End: Scroll to form section
