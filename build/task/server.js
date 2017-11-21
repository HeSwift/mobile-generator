var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var constant = require('../constant');
const { STYLES, SCRIPTS, DIST } = constant;
const { STYLES_SRC } = STYLES;
const { SCRIPTS_SRC } = SCRIPTS;
const { DIST_HTML } = DIST;
//异步刷新
gulp.task('server-dev', ['clean'], function() {
	gulp.start(['scripts-dev', 'styles-dev', 'assets', 'html']);
});
gulp.task('server', ['server-dev'], function() {
	browserSync.init({
		server: {
			baseDir: 'dist',
		},
		port: 4040,
	});
	gulp.watch(STYLES_SRC).on('change', browserSync.reload);
	gulp.watch(SCRIPTS_SRC).on('change', browserSync.reload);
	gulp.watch(DIST_HTML).on('change', browserSync.reload);
});
