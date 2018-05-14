'use strict';

const pngquant = require('imagemin-pngquant');

module.exports = function() {

	$.gulp.task('build.img', function() {
		return $.gulp.src([`./${$.path.temp.folder}/${$.path.temp.img}/**/*.+(jpg|png|gif|svg|tiff|mp4)`])
			.pipe($.pl.imagemin([
				$.pl.imagemin.gifsicle({interlaced: true}),
			    $.pl.imagemin.jpegtran({progressive: true}),
			    $.pl.imagemin.optipng({optimizationLevel: 5}),
			    $.pl.imagemin.svgo({
			        plugins: [
			            {removeViewBox: true},
			            {cleanupIDs: false}
			        ]
			    })
			]))
			.pipe($.gulp.dest(`./${$.path.dist.folder}/${$.path.dist.img}` )); 
	});
};