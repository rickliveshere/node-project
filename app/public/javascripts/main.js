var RR = RR || {};

RR.Background = (function() {

		var bgTimeout;
		
		var swapImage = function() {

			var $active = $('img.background.active');
			var $next = ($('img.background.active').next().length > 0) 
				? $('img.background.active').next() : $('img.background:first');
      		$next.css('z-index', -2); 
	  		
	  		$active.fadeOut(300, function() {
	  			$active.css('z-index',-3).show().removeClass('active');
      			$next.css('z-index',-1).addClass('active');

      			bgTimeout = setTimeout(swapImage, 7000)
      		});
		}

		return {
			init: function() {
				swapImage();
			}
		}
})();


$(document).ready(function() {
	RR.Background.init();
});