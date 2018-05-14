'use strict';

module.exports = function() {

	$.gulp.task('pug', function() {

		if($.op.pug) {
			console.log($.op.pug)
			return $.gulp.src( `./${$.path.src.folder}/${$.path.src.pug}/pages/**/*.pug` )

			.pipe($.pl.pug({ pretty: true }))
			.on('error', $.pl.notify.onError(function(error) {
	        	return {
	          		title: 'Pug',
	          		message:  error.message
	        	}
       		}))
			.pipe($.gulp.dest($.path.temp.folder))
		} else {
			return $.gulp.src(`./${$.path.src.folder}/**/*.html`)
				.pipe($.gulp.dest(`./${$.path.temp.folder}/${$.path.temp}`));
		}

		
	})

}