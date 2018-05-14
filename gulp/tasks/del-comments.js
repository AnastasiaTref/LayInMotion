'use strict';

const stripCssComments = require('gulp-strip-css-comments');

module.exports = function() {

  $.gulp.task('del-comments', function() {

    	return $.gulp.src(`./${$.path.dist.folder}/${$.path.dist.css}/**/*.css`)
    		.pipe(stripCssComments(
    			'/*! <copyright> */ body { /* unicorns */color: hotpink; }',
    			{preserve: false}
    		))
    		.pipe($.gulp.dest(`./${$.path.dist.folder}/${$.path.dist.css}`)); 

  });

};