var gulp = require('gulp');
var clean = require('gulp-clean'); //清理文件夹

var constant = require('../constant');
const { DIST } = constant;
const { DIST_FOLDER } = DIST;
// 清理
gulp.task('clean', function() {
	return gulp.src(DIST_FOLDER, { read: false }).pipe(clean());
});
