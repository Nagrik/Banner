function createSlick(){  

	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
		// autoplay: true,
		// appendArrows: $('.slick-arrow'),	
		nextArrow: '<div class="next"><img src="images/Arrow-Right.png" alt=""></div>', 
		prevArrow: '<div class="prev"><img src="images/Arrow-Left.png" alt=""></div>',

	
  		slidesToShow: 3,
	    responsive: [{ 
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});	

}

createSlick();

//Will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );