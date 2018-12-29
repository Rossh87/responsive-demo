const menuButton = document.querySelector('.header_nav_toggle');
const menuModal = document.querySelector('.header_nav');
const hamburger = document.querySelector('.hamburger');

menuButton.addEventListener('click', e=> {
	menuModal.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
});