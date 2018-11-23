import './sass/main.scss'

function makeDiv() {
	const div = document.createElement('div');
	div.innerHTML = 'Hello World';
	return div;
}

document.body.appendChild(makeDiv());