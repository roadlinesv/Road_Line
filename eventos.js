//Navbar
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('show');
});

// Cierra el menú si haces clic fuera de él
document.addEventListener('click', function(event) {
  if (!btn.contains(event.target) && !menu.contains(event.target)) {
    btn.classList.remove('open');
    menu.classList.remove('show');
  }
});

