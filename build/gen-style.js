const gulp = require('gulp')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// 构建统一的样式文件
function createCss (cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename('my-ui.css'))
    .pipe(gulp.dest('../lib/styles'))
  cb()
}

exports.default = gulp.series(createCss)