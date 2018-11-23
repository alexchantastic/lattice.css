'use strict';

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    clean = require('gulp-clean'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stylelint = require('gulp-stylelint'),
    rename = require('gulp-rename'),
    run = require('run-sequence');

var paths = {
  'src': 'src/',
  'dist': 'dist/'
};

gulp.task('build', ['clean'],function() {
  return run('scss', 'scss:min');
});

gulp.task('clean', function() {
  return gulp.src(paths.dist)
    .pipe(clean());
});

gulp.task('default', ['build', 'watch']);

gulp.task('scss', function() {
  return gulp.src(paths.src + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('scss:min', function() {
  return gulp.src(paths.dist + '**/*.css')
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('server', function() {
  browsersync.init({
    server: {baseDir: '.'}
  });
});

gulp.task('server:reload', function() {
  browsersync.reload();
});

gulp.task('lint', function() {
  return gulp.src(paths.src + '**/*.scss')
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
});

gulp.task('watch', ['server'], function() {
  gulp.watch(paths.src + '**/*.scss', ['scss']);

  gulp.watch('./*.html', ['server:reload']);
});
