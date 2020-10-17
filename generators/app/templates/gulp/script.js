var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    sync = require('browser-sync'),
    reload = sync.reload;



gulp.task('script', function(){
    return gulp.src('app/js/main.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(plumber())
        .pipe(gulp.dest('dist/js/'))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('dist/js/'))
        .pipe(reload({stream: true}));
});

gulp.task('script:watch', function () {
    gulp.watch('app/js/**/*.js', ()=>runseq('copy','sass'));
});