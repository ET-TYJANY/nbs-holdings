
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html").then(res => res.text()).then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });
  fetch("footer.html").then(res => res.text()).then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

  const items = document.querySelectorAll(".service-item");
  const radius = 250;
  const centerX = 300;
  const centerY = 300;
  items.forEach((item, index) => {
    const angle = (index / items.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - 60;
    const y = centerY + radius * Math.sin(angle) - 60;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });
});

function showContent() {
  document.getElementById('star').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

function loadService(page) {
  fetch(`services/${page}`).then(res => res.text()).then(data => {
    document.getElementById("page-content").innerHTML = data;
  });
}
