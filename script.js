// Hamburger menu toggle
function toggleMenu() {
  const menuLinks = document.querySelector("#hamburger-nav .menu-links");
  menuLinks.classList.toggle("active");
}

// Close hamburger menu when clicking outside or pressing ESC
document.addEventListener('click', (e) => {
  const menu = document.querySelector("#hamburger-nav .menu-links");
  const hamburger = document.querySelector(".hamburger-icon");
  if (menu && hamburger && menu.classList.contains("active")) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
    }
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    const menu = document.querySelector("#hamburger-nav .menu-links");
    if (menu) menu.classList.remove("active");
  }
});

// Dynamic title cycling
const titles = [
  "Web Development & Data Science",
  "Full-Stack Developer",
  "Data Enthusiast",
  "Aspiring Software Engineer",
  "Tech Problem Solver",
  "JavaScript & Python Lover"
];
let currentIndex = 0;
const titleElement = document.getElementById("dynamic-title");
function changeTitle() {
  currentIndex = (currentIndex + 1) % titles.length;
  if (titleElement) titleElement.textContent = titles[currentIndex];
}
setInterval(changeTitle, 3000);

// Contact form validation and mailto
document.addEventListener("DOMContentLoaded", function() {
  // Dynamic title element (in case DOM wasn't ready before)
  if (!titleElement) {
    const dynTitle = document.getElementById("dynamic-title");
    if (dynTitle) dynTitle.textContent = titles[0];
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const question = document.getElementById("question").value.trim();
      const messageDiv = document.getElementById("form-message");

      // Simple validation
      if (!name || !email || !question) {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.style.color = "#e11d48";
        return;
      }
      // Email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        messageDiv.textContent = "Please enter a valid email address.";
        messageDiv.style.color = "#e11d48";
        return;
      }

      // Send via mailto
      const subject = encodeURIComponent("Portfolio Contact from " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nQuestion: ${question}`);
      window.location.href = `mailto:shuklagauravakela@gmail.com?subject=${subject}&body=${body}`;
      messageDiv.textContent = "Thank you! Your message is being sent...";
      messageDiv.style.color = "#4f46e5";
      form.reset();
    });
  }
});