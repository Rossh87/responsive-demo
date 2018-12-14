const menuButton = document.querySelector('.nav-toggle');
const menuModal = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');

menuButton.addEventListener('click', e=> {
	menuModal.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
});