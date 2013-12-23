var RR = RR || {};

RR.Background = (function() {

		var bgImages = $('img.background');
		var currentBgIndex;
		var bgInterval;
		
		var swapImage = function() {
			if (!bgImages)
			{
				clearInterval(bgInterval);
				return false;
			}

			if (currentBgIndex === undefined)
				currentBgIndex = 0;
			
			currentBgIndex++;

			$(bgImages).eq(currentBgIndex).fadeOut(function() {
      			
      			$(bgImages).each(function(x, element) {
      				$(element).css(
      					'zIndex', x + currentBgIndex
      				)
      			})
   			});
		}

		return {
			init: function() {
				if (!bgImages)
					return false;

				bgInterval = setInterval(swapImage, 2000);
			}
		}
})();


$(document).ready(function() {
	RR.Background.init();
});