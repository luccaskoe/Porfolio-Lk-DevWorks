// MENU MOBILE
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

function setMenu(open) {
  links.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuBtn.querySelector('i').className = open ? 'ri-close-line' : 'ri-menu-line';
}

menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });


// window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 20));

/* SCROLL REVEAL */
ScrollReveal({
  reset: false,
  distance: "30px",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  opacity: 0
});

ScrollReveal().reveal(".hero-content", {
  origin: "bottom",
  distance: "35px",
  duration: 1000,
  delay: 150
});

ScrollReveal().reveal(".about-img", {
  origin: "left",
  distance: "35px",
  duration: 900,
  delay: 100
});

ScrollReveal().reveal(".about-text", {
  origin: "right",
  distance: "35px",
  duration: 900,
  delay: 200
});

ScrollReveal().reveal(".skill-card", {
  origin: "bottom",
  distance: "20px",
  duration: 700,
  interval: 120
});

ScrollReveal().reveal(".service-list article", {
  origin: "bottom",
  distance: "25px",
  duration: 750,
  interval: 100
});

ScrollReveal().reveal(".project-card", {
  origin: "bottom",
  distance: "30px",
  duration: 850,
  interval: 120
});

ScrollReveal().reveal(".faq-item", {
  origin: "bottom",
  distance: "20px",
  duration: 700,
  interval: 100
});

ScrollReveal().reveal(".cta", {
  origin: "bottom",
  distance: "25px",
  duration: 800,
  delay: 100
});