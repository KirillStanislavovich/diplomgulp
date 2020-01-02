'use strict'

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const imagemin = require('gulp-imagemin');

const jsFiles = [
  './src/js/jquery-3.4.1.min.js',
  './src/js/swiper.min.js',
  './src/js/script.js',
]

function styles() {
  return gulp.src('./src/css/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/css/'));
}

function scripts() {
  return gulp.src(jsFiles)
    .pipe(concat('script.min.js'))
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(gulp.dest('./build/js/'));
}

function image() {
  return gulp.src('./src/img/**/*.*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [
          {
              removeViewBox: true
          }
      ]
    }))
    .pipe(gulp.dest('./build/img/'));
}

function font() {
  return gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./build/fonts/'));
}

function watch() {
  gulp.watch('./src/css/**/*.css', styles);
  gulp.watch('./src/js/**/*.js', scripts);
}

function clean() {
  return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('image', image);

gulp.task('default', gulp.series(clean, gulp.parallel(styles, scripts, font), image, 'watch'));