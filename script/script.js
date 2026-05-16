// Menu hamburguer mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Fechar menu ao clicar em link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// Animação de entrada ao rolar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".skill-card, .project-card, .timeline-item, .contato-card")
  .forEach((el) => {
    observer.observe(el);
  });
