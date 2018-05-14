'use strict';

module.exports = function() {

	$.gulp.task('css', function() {
		return $.gulp.src( `./${$.path.src.folder}/${$.path.src.css}/*.css` )
			.pipe($.pl.autoprefixer({ 
		        browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
		        cascade: true
		    }).on('error', $.pl.notify.onError({title: 'Style'})))
			.pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` ))
	})


}