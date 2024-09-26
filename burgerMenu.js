document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navItems = document.querySelector('.nav-items');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav-item a');

  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navItems.classList.toggle('show');
    overlay.classList.toggle('active');

    if (burgerMenu.classList.contains('active')) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }

  burgerMenu.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navItems.classList.contains('show')) {
        toggleMenu();
      }
    });
  });
});
