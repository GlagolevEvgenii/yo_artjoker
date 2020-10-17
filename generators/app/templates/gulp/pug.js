var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sync = require('browser-sync'),
    runseq = require('run-sequence'),
    reload = sync.reload;

gulp.task('pug', function(){
    return gulp.src('app/pug/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});

gulp.task('pug:watch', function () {
    gulp.watch('app/pug/**/*.pug', ()=>runseq('pug','copy'));
});