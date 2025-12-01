// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    const p = item.querySelector("p");
    p.style.display = p.style.display === "block" ? "none" : "block";
  });
});

// Contact Form
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent to Ganesh (GT Creations).");
});
