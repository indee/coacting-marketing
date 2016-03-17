const gulp = require('gulp');
const util = require('gulp-util');
const sourcemap = require('gulp-sourcemaps');
const ftp = require('vinyl-ftp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');

// PATHING
const paths = { // Set second level paths
  globals: { // Global Pathing
    dev: './assets', // Working Directory
    prod: './dist', // Compiled Code
  },
  app: { // Paths for preprocessed assets
    get styles () {return paths.globals.dev + '/stylesheets'},
		get images () {return paths.globals.dev + '/images'},
    get javascripts () {return paths.globals.dev + '/javascripts'}
  },
  dist: { // Paths for processed assets
		get styles () {return paths.globals.prod + '/css'},
    get javascripts () {return paths.globals.prod + '/js'},
    get images () {return paths.globals.prod + '/img'}
  }
};

gulp.task('scripts', function () {
	return gulp.src(paths.app.scripts + '/*.js')
		.pipe(concat('frontend.js'))
		.pipe(gulp.dest(paths.dist.scripts))
		.pipe(livereload());
});

gulp.task('standalone-scripts', function () {
	return gulp.src(paths.app.scripts + '/standalone/*.js')
		.pipe(gulp.dest(paths.dist.scripts))
		.pipe(livereload());
});

const postCSS = require('gulp-postcss');
const css_proc = [
	require('precss'),
	require('postcss-write-svg'),
	require('rucksack-css'),
	require('postcss-brand-colors'),
	require('cssnano'),
	require('cssnano'),
	require('postcss-color-function'),
	require('lost')
];
gulp.task('styles', function () {
	gulp.src(paths.app.styles + '/index.css')
	.pipe(sourcemap.init())
	.pipe(postCSS(css_proc))
	.pipe(rename('frontend.css'))
	.pipe(sourcemap.write())
	.pipe(gulp.dest(paths.dist.styles))
	.pipe(livereload());
});

gulp.task('images', function () {
	return gulp.src(paths.app.images + '/**/*')
		.pipe(gulp.dest(paths.dist.images))
		.pipe(livereload());
});

gulp.task('deploy', function() {
  var conn = ftp.create({
    host: util.env.FTP_HOST,
    user: util.env.FTP_USER,
    password: util.env.FTP_PASSWORD,
    log: util.log
  });

  return gulp
  	.src([
	  	'./**/*',

	  	'!./assets',
	  	'!./node_modules',
	  	'!./.gitignore',
	  	'!./.travis.yml',
	  	'!./gulpfile.js',
	  	'!./package.json',
	  	'!./readme.md'
	  ])
    .pipe(conn.newer(util.env.FTP_DIR))
    .pipe(conn.dest(util.env.FTP_DIR));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(paths.app.styles + '/**/*.css', [ 'styles' ]);
	gulp.watch(paths.app.fonts + '/*', [ 'fonts' ]);
	gulp.watch(paths.app.scripts + '/*.js', [ 'scripts' ]);
	gulp.watch(paths.app.scripts + '/standalone/*.js', [ 'standalone-scripts' ]);
	gulp.watch(paths.app.images + '/*', [ 'images' ]);
	gulp.watch(paths.app.videos + '/*', [ 'videos' ]);
});

gulp.task('build', [
	'styles',
	'scripts',
	'standalone-scripts',
	'images',
]);

gulp.task('default', [
	'build',
	'watch'
]);
