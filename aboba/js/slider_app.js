const sliderMain = new Swiper('.slider_main', {
	
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints:{
		0: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		680:{
			slidesPerView: 2.5,
			spaceBetween: 35
		},
		1110:{
			slidesPerView: 3,
			spaceBetween: 60
		}

	}
})



