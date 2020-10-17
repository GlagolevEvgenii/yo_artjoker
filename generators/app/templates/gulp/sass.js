var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cfg = require('../package.json').config,
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    runseq = require('run-sequence'),
    sync = require('browser-sync'),
    reload = sync.reload;

 
gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(prefix('last 10 versions'))
      .pipe(gulp.dest('dist/css/'))
      .pipe(cleanCSS())
      .pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest('dist/css/'))
      .pipe(reload({stream: true}));
});

 
gulp.task('sass:watch', function () {
  gulp.watch('app/sass/**/*.scss', ()=>runseq('copy','sass'));
});