'use strict';

const ftp = require( 'vinyl-ftp' );
const gutil = require( 'gulp-util' );
const ftpConfig = require( '../paths/ftp.json' );

module.exports = function() {

	// helper function to build an FTP connection based on our configuration
	function getFtpConnection() {  

	    return ftp.create({
	        host: ftpConfig.host,
	        user: ftpConfig.user,
	        password: ftpConfig.pass,
	        log: gutil.log
	    });
	}

	$.gulp.task('ftp', function() {

		let conn = getFtpConnection();

		return $.gulp.src( ftpConfig.localFilesGlob, {base: '.',  buffer: false } )
			.pipe( conn.newer( ftpConfig.remotePath ) ) // only upload newer files
			.pipe( conn.dest( ftpConfig.remotePath ) )


	})
}