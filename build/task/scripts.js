var gulp = require('gulp');
var concat = require('gulp-concat'); //合并文件
var uglify = require('gulp-uglify'); //压缩文件
var notify = require('gulp-notify'); //通知
var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //替换文件

var constant = require('../constant');
const { SCRIPTS, REV } = constant;
const { SCRIPTS_LIB_NAME, SCRIPTS_SRC, SCRIPTS_DIST, SCRIPTS_CONCAT_NAME, SCRIPTS_LIB_SRC, SCRIPTS_LIB_DIST } = SCRIPTS;
const { REV_JS_SRC } = REV;

gulp.task('js-dev', function() {
	gulp
		.src(SCRIPTS_SRC)
		.pipe(concat(SCRIPTS_CONCAT_NAME))
		.pipe(uglify())
		.pipe(gulp.dest(SCRIPTS_DIST));
});

gulp.task('js-pro', function() {
	gulp
		.src(SCRIPTS_SRC)
		.pipe(concat(SCRIPTS_CONCAT_NAME))
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest(SCRIPTS_DIST))
		.pipe(rev.manifest())
		.pipe(gulp.dest(REV_JS_SRC));
});

gulp.task('libScripts', function() {
	gulp
		.src(SCRIPTS_LIB_SRC)
		.pipe(concat(SCRIPTS_LIB_NAME))
		.pipe(uglify())
		.pipe(gulp.dest(SCRIPTS_LIB_DIST));
});

gulp.task('scripts-dev', ['js-dev', 'libScripts']);
gulp.task('scripts-pro', ['js-pro', 'libScripts']);
