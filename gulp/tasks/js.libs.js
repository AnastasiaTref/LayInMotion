'use strict';

module.exports = function() {

	$.gulp.task('js.libs', function() {

	    return $.gulp.src( `./${$.path.src.folder}/${$.path.src.libs}/*.js` )
	       .pipe($.pl.concat('bundle.js'))
	       .pipe($.pl.uglify())
	       .pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.js}` ))
	})
};