'use strict';

module.exports = function() {
	$.gulp.task('script', function() {
		return $.gulp.src( `./${$.path.src.folder}/${$.path.src.js}/**/*.js` )
			.pipe($.pl.sourcemaps.init())
			//.pipe($.pl.concat('main.js'))
			.pipe($.pl.sourcemaps.write())
			.pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.js}`  ))
			.pipe($.browserSync.reload({
				stream: true
			}))			
	});
}