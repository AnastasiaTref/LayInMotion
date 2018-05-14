'use strict';

module.exports = function() {

	$.gulp.task('sass', function() {
		return $.gulp.src( `./${$.path.src.folder}/${$.path.src.sass}/*.+(scss|sass)` )
			.pipe($.pl.sourcemaps.init())
			.pipe($.pl.sass({
				outputStyle: 'expanded',
	      		errLogToConsole: true
			})).on('error', $.pl.notify.onError({title: 'Style'}))
			.pipe($.pl.autoprefixer({ 
		        browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
		        cascade: true
		    }))
		    .pipe($.pl.sourcemaps.write())
			.pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` ))
	})


}