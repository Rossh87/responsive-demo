import './sass/main.scss';
import './img/main';
import './js/menu';
import logo from './img/logo.svg';

const logoDivs = document.querySelectorAll('.logo');

(function(divs) {
	const divsArr = [...divs];

	divsArr.forEach(div => {
		div.innerHTML = logo;
	});
})(logoDivs);

