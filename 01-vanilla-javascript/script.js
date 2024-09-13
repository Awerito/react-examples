const buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', () => {
		const id = button.getAttribute('data-id');

		// TODO: something with id

		if (button.classList.contains('active')) {
			button.classList.remove('active');
			button.innerText = 'Like';
		} else {
			button.classList.add('active');
			button.innerText = 'Dislike';
		}
	})
}
