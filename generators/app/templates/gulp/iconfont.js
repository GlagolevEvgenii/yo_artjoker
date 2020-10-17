var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons';
gulp.task('iconfont', function () {
    gulp.src(['app/i/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'app/sass/components/_icons.scss',
            targetPath: '../sass/_icons.scss',
            fontPath: 'fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true,
            fontHeight: 1001,
            centerHorizontally: true
        }))
        .pipe(gulp.dest('app/fonts/'));
});