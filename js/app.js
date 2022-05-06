$(".accordion__header").click(function () {
	$(this).parent().toggleClass("active");
});


$(document).ready(function () {
	$('.slider').slick({
		// arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
	});
});


/* Menu nav toggle */
$("#nav-toggle").on("click", function (event) {
	event.preventDefault();

	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
});

