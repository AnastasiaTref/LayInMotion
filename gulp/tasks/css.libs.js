'use strict';

module.exports = function() {

	$.gulp.task('css.libs', function() {

		if( $.path.src.cssLibs().length !== 0 ) { 

		    return $.gulp.src( $.path.src.cssLibs(), {since: $.gulp.lastRun('css.libs')} )
		        .pipe($.pl.concatCss('bundle.css'))
		        .pipe($.pl.csso())
		        .pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` )) 
		} else {
			return false;			
		}
	})
};

