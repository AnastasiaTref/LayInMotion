'use strict';

module.exports = function() {

	$.gulp.task('copy.image', function() {

		return $.gulp.src(`./${$.path.src.folder}/${$.path.src.img}/**/*.+(jpg|png|gif|svg|tiff|mp4)`, {since: $.gulp.lastRun('copy.image')})
			.pipe($.gulp.dest(`./${$.path.temp.folder}/${$.path.temp.img}`));
	})
}