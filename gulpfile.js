'use strict';

global.$ = {
	gulp: require('gulp'),
	pl: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	path: {
		src: require('./gulp/paths/config.js').source,
		temp: require('./gulp/paths/config.js').temp,
		dist: require('./gulp/paths/config.js').dist,
		tasks: require('./gulp/paths/tasks.js')
	},
	op: require('./gulp/paths/config.js').options
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		$.op.sass ? 'pug' : 'html',
    	$.op.sass ? 'sass' : 'css',
    	'js.libs',
		'css.libs',		
		'copy.image',
		'sprite.svg',
		'copy.fonts',
		'script'
    ),
	$.gulp.parallel('watch', 'server')
	)
)
$.gulp.task('build', $.gulp.series(
	'dist.clean',
	$.gulp.parallel(
		'build.scripts',
		'build.img',
		'build.fonts',
		'build.html',
		'build.css'
	)
))