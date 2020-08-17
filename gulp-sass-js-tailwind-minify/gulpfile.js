const gulp = require("gulp");
const sass = require("gulp-sass");
var postcss = require("gulp-postcss");
// const cleanCSS = require('gulp-clean-css');

function style() {
  var tailwindcss = require("tailwindcss");
  return (
    gulp
      .src("custom-assets/scss//**/*.scss")
      .pipe(
        sass({
          includePaths: ["node_modules"],
        })
      )
      .pipe(postcss([tailwindcss("./tailwind.js"), require("autoprefixer")]))
      // .pipe(cleanCSS())
      .pipe(gulp.dest("custom-assets/ready"))
  );
}

function js() {
  return gulp
    .src("custom-assets/js/**/*.js")
    .pipe(gulp.dest("custom-assets/ready"));
}

function watch() {
  gulp.watch("custom-assets/scss/**/*.scss", style);
  gulp.watch("custom-assets/js/**/*.js", js);
}

exports.style = style;
exports.watch = watch;
