var gulp = require('gulp');
var constant = require('../constant');
const { REV } = constant;
const { REV_DIST_FOLDER, REV_FOLDER } = REV;

// 图片
gulp.task('html', function() {
	return gulp.src(REV_FOLDER).pipe(gulp.dest(REV_DIST_FOLDER));
});
