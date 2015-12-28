// ------------------------------------------- //
//           VARIABLES AND DEPENDANCIES
// ------------------------------------------- //
	// Node Packages
var gulp = require('gulp');

	// Gulp Packages
// var util = require('gulp-util');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

// Post CSS Awesomeness
var postCSS = require('gulp-postcss');

var css_proc = [
	require('precss'),
	require('postcss-write-svg'),
	require('rucksack-css'),
	require('postcss-brand-colors'),
	require('cssnano'),
	require('cssnano'),
	require('postcss-color-function'),
	require('lost')
];

// ------------------------------------------- //
//                    PATHING
// ------------------------------------------- //
// Global Pathing
var globals = {
	// Working Directory
	dev: 'assets',
	// Compiled Code
	prod: 'dist'
};

// Set second level paths
var paths = {
	// Paths for preprocessed assets
	app: {
		'scripts': globals.dev + '/scripts',
		'styles': globals.dev + '/styles',
		'images': globals.dev + '/images',
		'fonts': globals.dev + '/fonts',
		'videos': globals.dev + '/videos'
	},

	// Paths for processed assets
	dist: {
		'scripts': globals.prod + '/js',
		'styles': globals.prod + '/css',
		'images': globals.prod + '/img',
		'fonts': globals.prod + '/fonts',
		'videos': globals.prod + '/videos'
	}
};

// ------------------------------------------- //
//                  GULP TASKS
// ------------------------------------------- //
// Scripts Task
gulp.task('scripts', function () {
	// Find Scripts source
	return gulp.src(paths.app.scripts + '/*.js')
		// Concat all scripts into one
		.pipe(concat('frontend.js'))
		// Create frontend.js
		.pipe(gulp.dest(paths.dist.scripts))
		// Reload Page
		.pipe(livereload());
});

// Scripts Task
gulp.task('standalone-scripts', function () {
	// Find Scripts source
	return gulp.src(paths.app.scripts + '/standalone/*.js')
		// Concat all scripts into one
		// Create frontend.js
		.pipe(gulp.dest(paths.dist.scripts))
		// Reload Page
		.pipe(livereload());
});

// Styles Task
gulp.task('styles', function () {
	gulp.src(paths.app.styles + '/index.css')
	.pipe(sourcemap.init())
	.pipe(postCSS(css_proc))
	.pipe(rename('frontend.css'))
	.pipe(sourcemap.write())
	.pipe(gulp.dest(paths.dist.styles))
	.pipe(livereload());
});

// Fonts Task
gulp.task('fonts', function () {
	// Find Fonts source
	return gulp.src(paths.app.fonts + '/*')
		// Copy font to dist
		.pipe(gulp.dest(paths.dist.fonts))
		// Reload Page
		.pipe(livereload());
});

// Video Task
gulp.task('videos', function () {
	// Find Videos source
	return gulp.src(paths.app.videos + '/*')
		// Copy Video to dist
		.pipe(gulp.dest(paths.dist.videos))
		// Reload Page
		.pipe(livereload());
});

// Image Task
gulp.task('images', function () {
	return gulp.src(paths.app.images + '/**/*')
		.pipe(gulp.dest(paths.dist.images))
		// Reload Page
		.pipe(livereload());
});

// ------------------------------------------- //
//                  GULP WATCHING
// ------------------------------------------- //
gulp.task('watch', function () {
	// Start livereload server
	livereload.listen();
	// Watch Styles
	gulp.watch(paths.app.styles + '/**/*.css', [ 'styles' ]);
	// Watch Fonts
	gulp.watch(paths.app.fonts + '/*', [ 'fonts' ]);
	// Watch Scripts
	gulp.watch(paths.app.scripts + '/*.js', [ 'scripts' ]);
	// Watch Standalone Scripts
	gulp.watch(paths.app.scripts + '/standalone/*.js', [ 'standalone-scripts' ]);
	// Watch Images
	gulp.watch(paths.app.images + '/*', [ 'images' ]);
	// Watch Videos
	gulp.watch(paths.app.videos + '/*', [ 'videos' ]);
});

// ------------------------------------------- //
//           GULP TASK REGISTRATION
// ------------------------------------------- //

gulp.task('build', [
	'styles',
	'fonts',
	'scripts',
	'standalone-scripts',
	'images',
	'videos'
]);

gulp.task('default', [
	'build',
	'watch'
]);
