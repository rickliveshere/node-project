var RR = RR || {};

RR.Background = (function() {

		var bgTimeout;
		var swappingBegin = false;
		var firstImageLoaded = false;
		var $images = $('img.background');

		var onImageLoaded = function() {

			if (bgTimeout !== undefined || bgTimeout !== null)
				clearTimeout(bgTimeout); // Don't need default option

			if (!firstImageLoaded)
				firstImageLoaded = !firstImageLoaded;

			if (firstImageLoaded && !swappingBegin)
			{
				swappingBegin = true;
				swapImage();
			}
		}

		var checkImageLoad = function () {
			$images.each(function(x) {
				$($images[x]).load(
					function() {
						$(this).addClass('ready');
						onImageLoaded(this);
					}
				);
			});

			bgTimeout = setTimeout(forceImageLoaded, 7000);
		}

		var forceImageLoaded = function() {
			$images.each(function(x) {
				$(this).addClass('ready');
			});

			swapImage();
		}

		var swapImage = function() {

			var $active = $('img.background.active');
			var $next = ($('img.background.active').next('.ready').length > 0) 
				? $('img.background.active').next('.ready') : $('img.background.ready:first');
      		$next.css('z-index', -2); 
	  		
      		if ($next.length === 0)
      		{
      			// Wait for an image to become ready
      			bgTimeout = setTimeout(swapImage, 7000);
      			return;
      		}

	  		$active.fadeOut(300, function() {
	  			$active.css('z-index',-3).show().removeClass('active');
      			$next.css('z-index',-1).addClass('active');

      			bgTimeout = setTimeout(swapImage, 7000);
      		});
		}

		return {
			init: function() {
				checkImageLoad();
			}
		}
})();


$(document).ready(function() {
	RR.Background.init();
});