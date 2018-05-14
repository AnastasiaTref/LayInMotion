'use strict';

module.exports = function() {

	$.gulp.task('html', function() {

		return $.gulp.src(`./${$.path.src.folder}/**/*.html`)
			.pipe($.gulp.dest(`./${$.path.temp.folder}/`));
	})
}