const gulp = require('gulp'),
    babel = require('gulp-babel'),
    terser = require('gulp-terser');

gulp.task('js', () => {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', (done) => {
    gulp.watch('src/*.js', gulp.series('js'));
    done;
});

gulp.task('default', gulp.series('js', 'watch'));