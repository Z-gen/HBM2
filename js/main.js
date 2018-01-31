$(document).ready(function(){

	$('.sliderHome').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});


	$('.sliderSteps').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.sliderStepImgSlider',
		nextArrow: '<div class="stepSlider__nextArr"></div>',
		prevArrow: '<div class="stepSlider__prevArr"></div>'
	});

	$('.sliderStepImgSlider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.sliderSteps'
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

	$(".sliderSteps .slick-arrow").click(function(){
		if($("#sliderStep__item_1").hasClass("slick-current")) {
			$(".stepNumbers ul li").removeClass("active");
			$(".stepNumbers__1").addClass("active");
		}
		if($("#sliderStep__item_2").hasClass("slick-current")) {
			$(".stepNumbers ul li").removeClass("active");
			$(".stepNumbers__1").addClass("active");
			$(".stepNumbers__2").addClass("active");
		}
		if($("#sliderStep__item_3").hasClass("slick-current")) {
			$(".stepNumbers ul li").removeClass("active");
			$(".stepNumbers__1").addClass("active");
			$(".stepNumbers__2").addClass("active");
			$(".stepNumbers__3").addClass("active");
		}
		if($("#sliderStep__item_4").hasClass("slick-current")) {
			$(".stepNumbers__1").addClass("active");
			$(".stepNumbers__2").addClass("active");
			$(".stepNumbers__3").addClass("active");
			$(".stepNumbers__4").addClass("active");
		}
		
	});

});