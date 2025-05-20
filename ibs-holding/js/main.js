function showContent() {
  document.getElementById('star').style.display = 'none';
  const content = document.getElementById('content');
  content.style.display = 'block';
  content.classList.add('fade-in');
}

function loadService(file) {
  fetch('services/' + file)
    .then(response => response.text())
    .then(data => {
      document.querySelector('.services-grid').style.display = 'none';
      document.getElementById('page-content').innerHTML =
        data + '<br><button onclick="goHome()">← Retour</button>';
    })
    .catch(error => {
      document.getElementById('page-content').innerHTML = "<p>Erreur de chargement.</p>";
    });
}

function goHome() {
  document.querySelector('.services-grid').style.display = 'grid';
  document.getElementById('page-content').innerHTML = "";
}

particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 200 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

