var gulp = require('gulp');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('content/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions')) 
    .pipe(gulp.dest('content/css'))
}); 


gulp.task('watch', function(){
  gulp.watch('content/sass/**/*.scss', ['sass']); 
  // Other watchers
});


