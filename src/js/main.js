$(document).ready(function($) {


	var $masonaryContainer = $('.post__list');

	$masonaryContainer.masonry({
		columnWidth: '.post__item',
    	itemSelector: '.post__item',
    	fitWidth: true,
    	gutter: 20
	})
})
