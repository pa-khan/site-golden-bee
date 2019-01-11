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
});
