'use strict';

module.exports = function() {

	$.gulp.task('uncss', function() {
	   
	    return $.gulp.src(`./${$.path.temp.folder}/${$.path.temp.css}/**/*.css`)
		    .pipe($.pl.uncss({
		        html: [`./${$.path.temp.folder}/*.html`]
		    }))
		    .pipe($.gulp.dest(`./${$.path.temp.folder}/${$.path.temp.css}/`));
	})
}
