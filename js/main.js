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


	/*SLIDER VIDEO ON REVIEW PAGE*/

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
		prevArrow: '<div class="hidden"></div>',
		responsive: [
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});

	$('.videoReview__BottomRowSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		asNavFor: '.videoReview__previewSlider',
		prevArrow: '<div class="rowSlider__prevArr"></div>',
		nextArrow: '<div class="hidden"></div>',
		responsive: [
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/*SLIDER VIDEO ON REVIEW PAGE*/


	/*SLIDER VIDEO ON HOME PAGE*/

	$('.videoNews__previewSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		draggable: false,
		swipe: false,
		arrows: false
	});


	$('.videoNews__TopRowSlider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		asNavFor: '.videoNews__previewSlider',
		nextArrow: '<div class="rowSlider__nextArr"></div>',
		prevArrow: '<div class="hidden"></div>'

	});

	$('.videoNews__BottomRowSlider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		asNavFor: '.videoNews__previewSlider',
		prevArrow: '<div class="rowSlider__prevArr"></div>',
		nextArrow: '<div class="hidden"></div>'
	});

	/*end SLIDER VIDEO ON HOME PAGE*/

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

	$(".calculateTopBar__btnCurrency button").click(function(){
		$(".calculateTopBar__btnCurrency button").removeClass("activeCur");
		$(this).addClass("activeCur");
	});


	$(".pressCenterSlider").slick({
	  centerMode: true,
	  centerPadding: '60px',
	  autoplay: true,
		autoplaySpeed: 2000,
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 970,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$(".pressCenterSliderPreview button").click(function(){
		$(".pressCenterSlider__cont").removeClass("activeBlock");
		$(this).parents(".pressCenterSlider__cont").addClass("activeBlock");
	});

	$(".btnReadMore").click(function(){
		$(".pressCenterSlider__cont").removeClass("activeBlock");
		$(this).parents(".pressCenterSlider__cont").toggleClass("activeBlock");
	});

	$(".newsList__titleItem").click(function(){
		$(".newsList__titleItem").removeClass("activeTitle");
		$(this).addClass("activeTitle");
		if($(this).attr('data-list') == "0") {
			$("#newsList__BodyItem_1").removeClass("activeList");
			$("#newsList__BodyItem_0").addClass("activeList");
		} else {
			$("#newsList__BodyItem_0").removeClass("activeList");
			$("#newsList__BodyItem_1").addClass("activeList");
		}
	});

	$('.videoNewsSectionSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		draggable: false,
		asNavFor: '.underVideoSlider',
		nextArrow: '<div class="NewsSection__nextArrow"></div>',
		prevArrow: '<div class="NewsSection__prevArrow"></div>'
	});

	$(".underVideoSlider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		draggable: false,
		asNavFor: '.videoNewsSectionSlider'
	});


	$(".btn_toggle").click(function(){
		$(this).toggleClass("activeToggle");
		$(".mobileMenu").toggleClass("activeMenu");
	});



});