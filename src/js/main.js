(function($) {

	/**********************************************/
	/* masonry */
	/*******************************************/


	var $masonaryContainer = $('.masonry');

	$( window ).on("load", function() {

		$masonaryContainer.masonry({
	    	itemSelector: '.masonry__item',
	    	fitWidth: true,
	    	gutter: 20
		});

		$masonaryContainer.masonry('reloadItems');

	});

	$(window).on("resize", function () {
		$masonaryContainer.masonry({
			itemSelector: '.masonry__item',
			fitWidth: true,
			gutter: 20
		});
		$masonaryContainer.masonry('reloadItems');

	});
	$(window).on("scroll", function () {
		if (!$masonaryContainer.find('.masonry__item').hasClass('wdportfolio')) {
			$masonaryContainer.masonry({
				itemSelector: '.masonry__item',
				fitWidth: true,
				gutter: 20
			});
			$masonaryContainer.masonry('reloadItems');
		}
	});
	

	/*******************************************/
    /* WAYPOINT */
    /*******************************************/

   /* $(function() {

    	$('.post__item').waypoint(function() {

    		$(this).addClass('animate');

    		//if browser less ie10
    		if($.browser.msie && $.browser.version < 10) {
    			$(this).css({
    				'opacity' : '1'
    			});
    		}
    	}, {
    		offset: '110%',
    		triggerOnce: false
    	});
    });*/


})(jQuery);
		
