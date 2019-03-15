'use strict';
// Static server

module.exports = function() {
	
	$.gulp.task('server', function() {
	    $.browserSync.init({
	    	open: false,
	    	notify: false,
	        server: {
	            baseDir: $.path.temp.folder

	        }
	    });
	    //$.browserSync.watch($.path.temp.folder , $.browserSync.reload)
	});
}