// jshint ignore: start
var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();
var browserSync     = require('browser-sync');
var gutil           = require('gulp-util');
var exec            = require('child_process').exec;
var spawn           = require('child_process').spawn;
var reload          = browserSync.reload;
var src             = 'assets/src/';
var dist            = 'assets/dist/';
var ignore          = ['!node_modules'];

// +++++++++++++++++++++++++++++++++++++++
// Gulp tasks to build and run application
// +++++++++++++++++++++++++++++++++++++++

function errorAlert(err) {
  $.notify.onError({
    title: 'Gulp Error',
    message: 'Check your terminal',
    sound: 'Basso'
  })(err);
  gutil.log(gutil.colors.red(err.toString()));
  this.emit('end');
}

// Styles
gulp.task('css', function() {
  return gulp.src(src + 'css/master.scss')
    .pipe($.plumber({errorHandler: errorAlert}))
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false 
    }))
    .pipe($.cssnano())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(dist + 'css/'));
});

// Scripts
gulp.task('js', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/owl-carousel/owl-carousel/owl.carousel.min.js',
    src + 'js/**.js'
  ])
    .pipe($.plumber({errorHandler: errorAlert}))
    .pipe($.eslint())
    // .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(dist + 'js/'));
});

// Move Images
gulp.task('images', function() {
  return gulp.src(src + 'images/**/**/**/**/**/**')
    .pipe(gulp.dest(dist + 'images'));
});

// Clean Cache
gulp.task('clear', function(done) {
  return $.cache.clearAll(done);
});

// Move fonts
gulp.task('fonts', function() {
  return gulp.src(src + 'fonts/*')
    .pipe(gulp.dest(dist + 'fonts/'));
});

//  Build static assets
gulp.task('build',['css','js','images', 'fonts']);

// Deafult Gulp Task
gulp.task('default',['runserver'], function() {
  browserSync.init({
    notify: false,
    online: false,
    proxy: 'localhost:8000'
  });
  gulp.watch(ignore, ['./**/**/**/**/*.{html, php}'], reload);
  gulp.watch(src + 'scss/**/**/**/**/*.scss', ['css', reload]);
  gulp.watch(src + 'js/**/*.js', ['js', reload]);
});

// Start Virtualenv and start server
gulp.task('runserver', function() {
  var proc;
  proc = exec('php -S localhost:3000');
  proc.stderr.on('data', function(data) {
    return process.stdout.write(data);
  });
});
