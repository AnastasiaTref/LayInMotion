'use strict';

module.exports = function() {
	$.gulp.task('pug', function() {
		return $.gulp.src(`./${$.path.src.folder}/${$.path.src.pug}/pages/**/*.pug`)
			.pipe($.pl.pug({
				pretty: true
			}))
			.pipe($.gulp.dest($.path.temp.folder))
			.on('end', $.browserSync.reload);
	});
}