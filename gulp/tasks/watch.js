'use strict';

module.exports = function() {
	$.gulp.task('watch', function() {
		if ($.op.pug) {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.pug}/**/*.pug`, $.gulp.series('pug'));
        } else {
            $.gulp.watch(`./${$.path.src.folder}/**/*.html`, $.gulp.series('html'));
        }
        if ($.op.sass) {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.sass}/**/*.+(scss|sass)`, $.gulp.series('sass'));
        } else {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.css}/**/*.css`, $.gulp.series('css'));
        }
        $.gulp.watch(`./${$.path.src.folder}/${$.path.src.img}/**/*`, $.gulp.series('copy.image'));
		$.gulp.watch(`./${$.path.src.folder}/${$.path.src.js}/**/*.js`, $.gulp.series('script'));
	});
}