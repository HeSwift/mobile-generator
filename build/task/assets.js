var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); //图片压缩
var cache = require('gulp-cache'); //缓存
var notify = require('gulp-notify'); //通知

var constant = require('../constant');
const { ASSETS } = constant;
const { ASSETS_SRC, ASSETS_DIST } = ASSETS;

// 图片
gulp.task('assets', function() {
	return gulp
		.src(ASSETS_SRC)
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest(ASSETS_DIST));
});
