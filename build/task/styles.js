var gulp = require('gulp');
var sass = require('gulp-sass'); //编译sass
var concat = require('gulp-concat'); //合并文件
var rename = require('gulp-rename'); //重命名文件
var autoprefixer = require('gulp-autoprefixer'); //补全css前缀
var minifycss = require('gulp-clean-css'); //压缩css
var notify = require('gulp-notify'); //通知
var rev = require('gulp-rev'); //- 对文件名加MD5后缀

var constant = require('../constant');
const { STYLES, REV } = constant;
const { STYLES_LIB_NAME, STYLES_SRC, STYLES_DIST, STYLES_MULIT, STYLES_LIB_SRC, STYLES_LIB_DIST } = STYLES;
const { REV_CSS_SRC } = REV;

gulp.task('sass-dev', function() {
	gulp
		.src(STYLES_MULIT)
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss({ outputStyle: 'compressed' }))
		.pipe(gulp.dest(STYLES_DIST));
});

gulp.task('sass-pro', function() {
	gulp
		.src(STYLES_MULIT)
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss({ outputStyle: 'compressed' }))
		.pipe(rev())
		.pipe(gulp.dest(STYLES_DIST))
		.pipe(rev.manifest())
		.pipe(gulp.dest(REV_CSS_SRC));
});

gulp.task('libStyles', function() {
	gulp
		.src(STYLES_LIB_SRC)
		.pipe(concat(STYLES_LIB_NAME))
		.pipe(minifycss())
		.pipe(gulp.dest(STYLES_LIB_DIST));
});

gulp.task('styles-dev', ['sass-dev', 'libStyles']);
gulp.task('styles-pro', ['sass-pro', 'libStyles']);
