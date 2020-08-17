const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
var minifyJS = require("gulp-uglify");

function style() {
  return gulp
    .src("custom-assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("custom-assets/ready"));
}

function js() {
  return gulp
    .src("custom-assets/js/**/*.js")
    .pipe(minifyJS())
    .pipe(gulp.dest("custom-assets/ready"));
}

function watch() {
  gulp.watch("custom-assets/scss/**/*.scss", style);
  gulp.watch("custom-assets/js/**/*.js", js);
}

exports.style = style;
exports.watch = watch;
