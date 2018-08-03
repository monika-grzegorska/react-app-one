//deklaracja zmiennych 
var gulp = require('gulp');
var  sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/components/scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('src/components/css'))
});

gulp.task('default', ['sass']);