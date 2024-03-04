document.getElementById('mobile-menu-button').addEventListener('click', function () {
	console.log('ENTRO REMOVE');
	document.querySelector('.mobile-menu').classList.remove('hidden');
});

document.getElementById('close-menu-button').addEventListener('click', function () {
	console.log('ENTRO ADD');
	document.querySelector('.mobile-menu').classList.add('hidden');
});

document.querySelectorAll('.mobile-menu-link').forEach((link) => {
	link.addEventListener('click', () => {
		console.log('entro');
		document.querySelector('.mobile-menu').classList.add('hidden');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar-bg');
	window.onscroll = function () {
		if (window.scrollY > 400) {
			navbar.classList.add('bg-accent');
		} else {
			navbar.classList.remove('bg-accent');
		}
	};
});
