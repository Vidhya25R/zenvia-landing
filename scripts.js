// Start: Multi-step form navigation
let currentStep = 1;

function nextStep() {
  document.getElementById(`step-${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step-${currentStep}`).classList.add("active");
}
// End: Multi-step form navigation


// Start: Form submission and data sending to Google Apps Script
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const goal = document.querySelector("#step-1 select").value;
  const amount = document.querySelector("#step-2 input").value;
  const name = document.querySelector("#step-3 input[type='text']").value;
  const email = document.querySelector("#step-3 input[type='email']").value;
  const phone = document.querySelector("#step-3 input[type='tel']").value;

  const payload = { name, email, phone, goal, amount };

  fetch("https://script.google.com/macros/s/AKfycbxWNMr-4nmZtLN7lJqHDc8IXYvD3Z5sQft-9KlmoJkLGsrIpAAAcO-wGywdD6OQQHZD1Q/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  document.getElementById("step-3").classList.remove("active");
  document.getElementById("thank-you").classList.add("active");
});
// End: Form submission and data sending to Google Apps Script


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
