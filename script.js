const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
});
