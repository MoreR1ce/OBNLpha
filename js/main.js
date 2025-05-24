
document.addEventListener('DOMContentLoaded', () => {
    // === Menu Burger ===
    const burger = document.getElementById('burger-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    if (burger && navMenu) {
      burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('open');
      });
    }
  
    // === Apparition progressive des éléments ===
    const elements = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => observer.observe(el));
  
    // === Formulaire (redirige vers merci.html) ===
    const form = document.getElementById('contact-form'); // Ajoute id="contact-form" au <form>
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        window.location.href = 'merci.html';
      });
    }
  
    // === Thème sombre / clair ===
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
  
    function setTheme(mode) {
      if (mode === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }
  
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(isDark ? 'light' : 'dark');
      });
    }
  });
  