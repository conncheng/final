if ($('.home').length) {
	$('.slick-class').slick({
		vertical: true,
		infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: false,
	    verticalSwiping: true,
	});
					

	$('.js-button').on('click', function(e) {
		e.preventDefault();
		$('.slick-class').slick('slickNext')
	})	
}


$('.js-submit').on('click', function(e) {
	e.preventDefault();
	const formattedBody = "fname \n email \n lname";
	const mailToLink = "mailto:connie@donutproject.com?body=" + encodeURIComponent(formattedBody);
	window.location.href = mailToLink;
})