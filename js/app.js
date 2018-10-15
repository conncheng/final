if ($('.home').length) {
	$('.slick-class').slick({
		vertical: true,
		infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 2,
	    arrows: false,
	});
					

	$('.js-button').on('click', function(e) {
		e.preventDefault();
		$('.slick-class').slick('slickNext')
	})	
}


$('.js-submit').on('click', function(e) {
	e.preventDefault();
	const formattedBody = "FirstLine \n Second Line \n Third Line";
	const mailToLink = "mailto:x@y.com?body=" + encodeURIComponent(formattedBody);
	window.location.href = mailToLink;
})