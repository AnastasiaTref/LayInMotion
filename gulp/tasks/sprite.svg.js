'use strict'; 

module.exports = function() {

	$.gulp.task('sprite.svg', function() {

		return $.gulp.src(`${$.path.src.folder}/${$.path.src.sprite}/*.svg`)
			.pipe($.pl.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.pl.cheerio({

				run: function($) {

					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},

				parserOptions: { xmlMode: true }
			}))
			.pipe($.pl.replace('&gt;', '>'))
			.pipe($.pl.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite.svg'
					}
				}
			}))
			.pipe($.gulp.dest(`./${$.path.temp.folder}/${$.path.temp.img}`))
	})
}