'use strict';

module.exports = function() {

	$.gulp.task('build.html', function() {
		return $.gulp.src(`./${$.path.temp.folder}/**/*.html` )
			.pipe($.gulp.dest(`./${$.path.dist.folder}`)); 
	});
};