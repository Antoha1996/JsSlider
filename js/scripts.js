$(document).ready(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
	 
	  loop: true,

	  pagination: {
		el: '.swiper-pagination',
		clickable: true
	  },

	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  
	  autoplay: {
		delay: 3000,
		disableOnInteraction: false
	  },
	  
	})
	
		var mySwiper = new Swiper('.reviews-container', {
	 
	  loop: true,

	  pagination: {
		el: '.swiper-pagination',
		clickable: true
	  },

	  autoplay: {
		delay: 3000,
		disableOnInteraction: false
	  },
	  
	})
	
});

