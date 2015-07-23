var gulp = require('gulp');
var babel = require('gulp-babel');

const SRC = ['src/**/*.js'];
gulp.task('babel', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist/'));
});
gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], ['babel']);
});
gulp.task('default', ['watch']);