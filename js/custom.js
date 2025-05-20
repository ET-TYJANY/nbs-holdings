console.log("Script chargé !");

// Initialisation de particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Statistiques (optionnel)
  const stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);

  const count_particles = document.querySelector(".js-count-particles");
  const update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom && window.pJSDom[0]?.pJS?.particles?.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  // Effet de scroll pour le header
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Toggle pour les détails de projets
  document.querySelectorAll('.toggle-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      if (details) {
        const isVisible = getComputedStyle(details).display === 'block';
        details.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? 'Voir les détails' : 'Masquer les détails';
      }
    });
  });

  // Bouton "Voir tous les projets"
  const toggleBtn = document.getElementById('toggle-more-projects');
  const moreSection = document.getElementById('121212');

  if (toggleBtn && moreSection) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = getComputedStyle(moreSection).display === 'block';
      moreSection.style.display = isVisible ? 'none' : 'block';
      toggleBtn.textContent = isVisible ? 'Voir tous les projets' : 'Réduire les projets';
    });
  }
});
