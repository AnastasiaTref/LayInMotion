(function($) {

	/**********************************************/
	/* masonry */
	/*******************************************/


	var $masonaryContainer = $('.post__list');

	$( window ).on("load", function() {

		$masonaryContainer.masonry({
	    	itemSelector: '.post__item',
	    	fitWidth: true,
	    	gutter: 20
		});

		$masonaryContainer.masonry('reloadItems');

	});

	$(window).on("resize", function () {
		$masonaryContainer.masonry({
			itemSelector: '.post__item',
			fitWidth: true,
			gutter: 20
		});
		$masonaryContainer.masonry('reloadItems');

	});
	$(window).on("scroll", function () {
		if (!$masonaryContainer.find('.post__item').hasClass('wdportfolio')) {
			$masonaryContainer.masonry({
				itemSelector: '.post__item',
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
		
