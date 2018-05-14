'use strict';

module.exports = function() {

	$.gulp.task('css.libs', function() {

	    return $.gulp.src( `./${$.path.src.folder}/${$.path.src.libs}/*.css` )
	        .pipe($.pl.concatCss('bundle.css'))
	        .pipe($.pl.csso())
	        .pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` ))
	})
};