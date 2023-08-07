const menuButton = document.querySelector('#menuButton');
const exitButton = document.querySelector('#exitButton');
const primaryNavigation = document.querySelector('.primary-navigation');

menuButton.addEventListener('click', () => {
  primaryNavigation.classList.toggle('render');
});

exitButton.addEventListener('click', () => {
  primaryNavigation.classList.remove('render');
});
