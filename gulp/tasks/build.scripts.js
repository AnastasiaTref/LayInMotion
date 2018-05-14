'use strict';

module.exports = function() {

	$.gulp.task('build.scripts', function() {

	    return $.gulp.src( `./${$.path.temp.folder}/${$.path.temp.js}/*.js` )
	    	.pipe($.pl.uglify())
	       	.pipe($.gulp.dest( `./${$.path.dist.folder}/${$.path.dist.js}` ))
	})
};