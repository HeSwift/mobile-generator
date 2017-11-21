const SCRIPTS = {
	SCRIPTS_SRC: 'src/scripts/js/**/*.js',
	SCRIPTS_LIB_SRC: 'src/scripts/lib/**/*.js',
	SCRIPTS_LIB_DIST: 'dist/scripts/lib',
	SCRIPTS_DIST: 'dist/scripts/js',
	SCRIPTS_CONCAT_NAME: 'bundle.min.js',
	SCRIPTS_LIB_NAME: 'lib.min.js',
};

const STYLES = {
	STYLES_SRC_MAIN: 'src/styles/sass/main.scss',
	STYLES_MULIT: 'src/styles/sass/*.scss',
	STYLES_SRC: 'src/styles/sass/**/*.scss',
	STYLES_DIST: 'dist/styles/css',
	STYLES_LIB_NAME: 'lib.min.css',
	STYLES_LIB_SRC: 'src/styles/lib/**/*.css',
	STYLES_LIB_DIST: 'dist/styles/lib',
};

const ASSETS = {
	ASSETS_SRC_MAIN: 'src/assets/**',
	ASSETS_SRC: 'src/assets/**',
	ASSETS_DIST: 'dist/assets',
};

const DIST = {
	DIST_ASSETS: 'dist/assets',
	DIST_STYLES: 'dist/styles',
	DIST_SCRIPTS: 'dist/scripts',
	DIST_HTML: 'dist/**/*.html',
	DIST_FOLDER: 'dist',
};

const REV = {
	REV_CSS_SRC: 'src/rev/css',
	REV_JS_SRC: 'src/rev/js',
	REV_FILE: 'src/rev/**/*.json',
	REV_FOLDER: 'src/**/*.html',
	REV_DIST_FOLDER: 'dist',
};

module.exports = { SCRIPTS, DIST, STYLES, ASSETS, REV };
