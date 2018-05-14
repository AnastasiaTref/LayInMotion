'use strict';

module.exports = function() {

	$.gulp.task('build.css', function() {
		return $.gulp.src(`./${$.path.temp.folder}/${$.path.temp.css}/**/*.css` )
			.pipe($.pl.csso())
			.pipe($.gulp.dest(`./${$.path.dist.folder}/${$.path.dist.css}`)); 
	});
};