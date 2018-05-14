'use strict';

module.exports = function() {

    $.gulp.task('watch', function() {

        $.gulp.watch(`./${$.path.src.folder}/${$.path.src.js}/**/*.js`, $.gulp.series('script'));        
        $.gulp.watch(`./${$.path.src.folder}/${$.path.src.img}/**/*.*`, $.gulp.series('copy.image'));

        if ($.op.pug) {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.pug}/**/*.pug`, $.gulp.series('pug'));
        } else {
            $.gulp.watch(`./${$.path.src.folder}/**/*.html`, $.gulp.series('html'));
        }
        if ($.op.sass) {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.sass}/**/*.scss`, $.gulp.series('sass'));
        } else {
            $.gulp.watch(`./${$.path.src.folder}/${$.path.src.css}/**/*.css`, $.gulp.series('css'));
        }

    });

};