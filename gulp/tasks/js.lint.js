'use strict';

module.exports = function() {

    $.gulp.task('js.lint', function() {

        return $.gulp.src(`./${$.path.temp.folder}/${$.path.temp.js}/main.js`)
            .pipe($.pl.eslint())
            .pipe($.pl.eslint.format());
    })

};