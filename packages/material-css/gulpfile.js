const gulp = require('gulp')
const rimraf = require('rimraf')
const postcss = require('gulp-postcss')
const cssnano = require('gulp-cssnano')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

const UMD_OUTPUT_PATH = '../../dist/packages/material-css'

function clean(done) {
  rimraf.sync(UMD_OUTPUT_PATH)
  done(0)
}

function compileCss() {
  return gulp
    .src('src/index.css')
    .pipe(postcss())
    .pipe(gulp.dest(UMD_OUTPUT_PATH))
}

function bundleCss() {
  return gulp
    .src('src/index.css')
    .pipe(postcss())
    .pipe(gulp.dest(UMD_OUTPUT_PATH))
    .pipe(sourcemaps.init())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(UMD_OUTPUT_PATH))
}

exports.clean = clean
exports.compile = compileCss
exports.default = gulp.series(clean, bundleCss)
