'use strict';

var mmq = require('gulp-merge-media-queries');

module.exports = function() {
	$.gulp.task('sass', function() {
		return $.gulp.src( `./${$.path.src.folder}/${$.path.src.sass}/*.+(scss|sass)` )
			.pipe($.pl.sourcemaps.init())
			.pipe($.pl.sass({
				outputStyle: 'expanded'
			})).on('error', $.pl.notify.onError({
				title: 'Style',
				message: "Error: <%= error.message %>"
	        }))
	        .pipe($.pl.autoprefixer({ 
			    browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
			    cascade: true
			}))
			.pipe(mmq({ 
				log: true,
				//use_external: true
			}))
			.pipe($.pl.sourcemaps.write())	
			.pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` ))
			.pipe($.browserSync.reload({
				stream: true
			}))
	});
}