var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('app/**/*')
  	.pipe(gulp.dest('dist/'))
});

gulp.task('copy:watch', function () {
  gulp.watch('app/**/*', ['copy']);
});