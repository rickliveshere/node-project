var RR = RR || {};

RR.ListSlide = (function() {

	var listElementsId = 'ul li';
	var resetButtonId = 'button';
	var answeredClass = 'answered';
	var chosenClass = 'chosen';

	var unbindEvents = function() {
		$(listElementsId).off();
	}

	var bindEvents = function() {
		$(listElementsId).on('click', function(e) {
			$(this).addClass(answeredClass);
			$(listElementsId).parent().addClass(chosenClass);

			unbindEvents();
		});
	}

	return {
		init: function() {
			bindEvents();

			$(resetButtonId).on('click', function(e) {
				$(listElementsId).removeClass(answeredClass);
				$(listElementsId).parent().removeClass(chosenClass);

				bindEvents();
			})
		}
	}
})();

$(document).ready(function() {
	RR.ListSlide.init();
});