'use strict';

module.exports = function() {

    $.gulp.task('server', function() {

    	console.log($.path.temp.folder)

        $.browserSync.init({
        	open: false,
            notify: false,
        	server: $.path.temp.folder
        });

        $.browserSync.watch($.path.temp.folder, $.browserSync.reload);
    });
};