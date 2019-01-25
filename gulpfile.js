var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
});

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
    .pipe(gulp.dest("src/js"));
});


gulp.task('default', gulp.series('sass', 'js'));