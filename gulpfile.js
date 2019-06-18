// Variáveis
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Definir a tarefa SASS
gulp.task('sass', gulp.series(function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
        .pipe(gulp.dest('css'));
}));

// Definir a tarefa Watch
gulp.task('watch', gulp.series(function(){
    gulp.watch('scss/**/*.scss', gulp.parallel(['sass']));
}));

// Gulp Default
gulp.task('default', gulp.series(['sass', 'watch']));