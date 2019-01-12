$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('select').styler();

	$('.arrea__range').each(function(index, el) {
		var letter = $(this).attr('data-letter');
		$(this).find('.noUi-handle').html(letter);
	});

	$('.calc .input__wrap').keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			(event.keyCode == 65 && event.ctrlKey === true) ||
			(event.keyCode >= 35 && event.keyCode <= 39)) {
					 return;
		}
		else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault();
			}  
		}
	});

	var square = $('#square-arrea'),
			price = $('.calc__price span'),
			koeff = $('#koeff'),
			money = 0;

	$('.calc__btn').click(function(event) {
		var heightArreaVal = heightArrea.val(),
				widthArreaVal = widthArrea.val(),
				koeffVal = koeff.val(),
				squareVal = (heightArreaVal * widthArreaVal) / 100;

		if (koeffVal == 1) {
			money = 250;
		} else if (koeffVal == 2) {
			money = 450;
		} else if (koeffVal == 3) {
			money = 700;
		}

		if(heightArreaVal == "0.00" || widthArreaVal == "0.00"){
			price.html(((square.val() * money) + " руб.").replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));	
		} else{
			square.val(squareVal);
			price.html(((squareVal * money) + " руб.").replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));	
		}
		
	});

	var galleryImg = $('.gallery__img'),
			galleryImgs = $('.gallery__imgs');

	galleryImg.slick({
		slidesToShow: 1,
		asNavFor: galleryImgs,
		arrows: false
	})
	galleryImgs.slick({
		slidesToShow: 3,
		asNavFor: galleryImg,
		arrows: false,
		focusOnSelect: true
	})

	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});


});
