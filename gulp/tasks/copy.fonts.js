'use strict';

module.exports = function() {

	$.gulp.task('copy.fonts', function() {

		return $.gulp.src(`./${$.path.src.folder}/${$.path.src.fonts}/**/*.*`, {since: $.gulp.lastRun('copy.fonts')})
			.pipe($.gulp.dest(`./${$.path.temp.folder}/${$.path.temp.fonts}`));
	})
}