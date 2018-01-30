$(document).ready(function(){

	$('.sliderHome').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	$('.videoReview__previewSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		draggable: false,
		swipe: false,
		arrows: false
	});

	$('.videoReview__TopRowSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		asNavFor: '.videoReview__previewSlider',
		nextArrow: '<div class="rowSlider__nextArr"></div>',
		prevArrow: '<div class="hidden"></div>'

	});

	$('.videoReview__BottomRowSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		asNavFor: '.videoReview__previewSlider',
		prevArrow: '<div class="rowSlider__prevArr"></div>',
		nextArrow: '<div class="hidden"></div>'
	});

});