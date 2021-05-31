const gulp = require('gulp')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const components = require('./components.json')

// 构建统一的样式文件
function createCss (cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename('mwp-ui.css'))
    .pipe(gulp.dest('../lib/styles'))
  cb()
}

function buildSeperateCss (cb) {
  Object.keys(components).forEach(comName => {
  console.log('buildSeperateCss -> comName', comName)
    gulp.src(`../src/styles/${comName}.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename(`${comName}.css`))
    .pipe(gulp.dest('../lib/styles'))
  cb()
  })
}

exports.default = gulp.series(createCss, buildSeperateCss)