var gulp = require('gulp');
var requireDir = require('require-dir'); //分解gulpfile文件
requireDir('./build/task');

var constant = require('./build/constant');
const { SCRIPTS, STYLES, ASSETS, REV } = constant;
const { SCRIPTS_SRC, SCRIPTS_DIST } = SCRIPTS;
const { STYLES_SRC, STYLES_DIST } = STYLES;
const { ASSETS_SRC } = ASSETS;
const { REV_FOLDER } = REV;

gulp.task('build', ['clean'], function() {
	gulp.start('scripts-pro', 'styles-pro', 'assets', 'html');
});

gulp.task('default', ['server'], function() {
	gulp.watch(ASSETS_SRC, ['assets']);
	gulp.watch(REV_FOLDER, ['html']);
	gulp.watch(STYLES_SRC, ['sass-dev']);
	gulp.watch(SCRIPTS_SRC, ['js-dev']);
});
