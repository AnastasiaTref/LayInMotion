'use strict';

const del = require('del');

module.exports = function() {

  $.gulp.task('dist.clean', function(cb) {

    return del($.path.dist.folder, cb);

  });

};