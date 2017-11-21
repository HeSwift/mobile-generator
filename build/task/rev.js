var gulp = require('gulp');
var revCollector = require('gulp-rev-collector'); //替换html文件
var minifyHTML = require('gulp-minify-html'); //压缩html

var constant = require('../constant');
const { REV } = constant;
const { REV_FILE, REV_FOLDER, REV_CSS_FILE, REV_JS_FILE, REV_DIST_FOLDER } = REV;

gulp.task('rev', function() {
	gulp
		.src([REV_FILE, REV_FOLDER])
		.pipe(
			revCollector({
				replaceReved: true,
			})
		)
		.pipe(
			minifyHTML({
				empty: true,
				spare: true,
			})
		)
		.pipe(gulp.dest(REV_DIST_FOLDER));
});
