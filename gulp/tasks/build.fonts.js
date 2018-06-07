'use strict';

module.exports = function() {

	$.gulp.task('build.fonts', function() {

	    return $.gulp.src( `./${$.path.temp.folder}/${$.path.temp.fonts}/**/*` )
	       	.pipe($.gulp.dest( `./${$.path.dist.folder}/${$.path.dist.fonts}` ))
	})
};