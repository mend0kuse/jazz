const searchs = document.querySelectorAll('.search-header input')
searchs.forEach(el => {
	el.addEventListener('keydown', (e) => {
		if (e.keyCode === 13) {
			top.location.href = 'результат поиска.html';
		}
	})
})
const swiper = new Swiper('.swiper', {
	effect: 'cube',
	cubeEffect: {
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});