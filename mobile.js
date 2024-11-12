document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      menu.classList.toggle('active');
  });
});
