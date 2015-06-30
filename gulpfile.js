// ------------------------------------------- //
//           VARIABLES AND DEPENDANCIES 
// ------------------------------------------- //
var 
	// Node Packages
	gulp       = require("gulp"),
	nib        = require('nib'),
	beeper     = require('beeper'),
	pngquant   = require('imagemin-pngquant'),
	bootstrap  = require('bootstrap-styl'),
	
	// Gulp Packages
	bower      = require('gulp-bower'),
	imagemin   = require('gulp-imagemin'),
	plumber    = require("gulp-plumber"),
	shell      = require('gulp-shell')
	concat     = require("gulp-concat"),
	rename     = require("gulp-rename"),
	stylus     = require('gulp-stylus');
	uglify     = require("gulp-uglify"),
	livereload = require('gulp-livereload');


// ------------------------------------------- //
//                    PATHING 
// ------------------------------------------- //
// Global Pathing
globals = {
	// Working Directory
	dev: "src",
	// Compiled Code
	prod: "dist"
};

// Set second level paths
paths = {
	// Paths for preprocessed assets
	app:{
		"scripts": globals.dev + "/scripts",
		"styles": globals.dev + "/stylus",
		"images": globals.dev + "/images",
		"fonts": globals.dev + "/fonts",
		"videos": globals.dev + "/videos"
	},

	// Paths for processed assets
	dist:{
		"scripts": globals.prod + "/js",
		"styles": globals.prod + "/css",
		"images": globals.prod + "/img",
		"fonts": globals.prod + "/fonts",
		"videos": globals.prod + "/videos"
	}
};



// ------------------------------------------- //
//                  GULP TASKS 
// ------------------------------------------- //
// Scripts Task
gulp.task("scripts", function() {
	// Find Scripts source
	return gulp.src(paths.app.scripts + "/*.js")
		// Error Handling
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				beeper('***');
				this.emit('end');
		}}))
		// Concat all scripts into one
		.pipe(concat("frontend.js"))
		// Create frontend.js
		.pipe(gulp.dest(paths.dist.scripts))
		// Reload Page
		.pipe(livereload());
});

// Styles Task
gulp.task('stylus', function() {
	// Find styles source
	return gulp.src(paths.app.styles + '/index.styl')
		// Error Handling
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				beeper('***');
				this.emit('end');
		}}))
		// Run code through stylus compiler 
		.pipe(stylus(
			{
				use: [nib(), bootstrap()],
				'include css': true
			}
		))
		// Rename to frontend.css
		.pipe(rename("frontend.css"))
		// Create frontend.css
		.pipe(gulp.dest(paths.dist.styles))
		// Reload Page
		.pipe(livereload());
});

// Fonts Task
gulp.task("fonts", function() {
	// Find Fonts source
	return gulp.src(paths.app.fonts + "/*")
		// Copy font to dist
		.pipe(gulp.dest(paths.dist.fonts))
		// Reload Page
		.pipe(livereload());
});

// Video Task
gulp.task("videos", function() {
	// Find Videos source
	return gulp.src(paths.app.videos + "/*")
		// Copy Video to dist
		.pipe(gulp.dest(paths.dist.videos))
		// Reload Page
		.pipe(livereload());
});

// Image Task
gulp.task("images", function() {
	return gulp.src(paths.app.images + "/**/*")
		.pipe(imagemin(
			{
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}
		))
		.pipe(gulp.dest(paths.dist.images))
		// Reload Page
		.pipe(livereload());
});

// Run Bower
gulp.task('bower', function() {
	return bower('./dist/bower_components')
});

// ------------------------------------------- //
//                  GULP WATCHING 
// ------------------------------------------- //
gulp.task("watch", function() {
	// Start livereload server
	livereload.listen();
	// Watch Styles
	gulp.watch(paths.app.styles + "/**/*.styl", [ "stylus" ]);
	// Watch Fonts
	gulp.watch(paths.app.fonts + "/*", [ "fonts" ]);
	// Watch Scripts
	gulp.watch(paths.app.scripts + "/*.js", [ "scripts" ]);
	// Watch Images
	gulp.watch(paths.app.images + "/*", [ "images" ]);
	// Watch Videos
	gulp.watch(paths.app.videos + "/*", [ "videos" ]);
});

// ------------------------------------------- //
//           GULP TASK REGISTRATION 
// ------------------------------------------- //


gulp.task("build", [
	"stylus",
	"images",
	"scripts",
	"fonts",
	"videos",
	"bower"
]);

gulp.task("default", [
	"build",
	"watch"
]);
