let navBar = document.querySelector('.menu-items');
let menuIcon = document.querySelector('#nav-icon');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');
});
