'use strict';

const del = require('del');

module.exports = function() {

  $.gulp.task('clean', function(cb) {

    return del($.path.temp.folder, cb);

  });

};