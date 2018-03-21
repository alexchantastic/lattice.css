'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    browsersync = require('browser-sync'),
    run = require('run-sequence'),
    stylelint = require('gulp-stylelint');

var paths = {
  'src': 'src/',
  'dist': 'dist/'
};

gulp.task('css', function() {
  return gulp.src(paths.src + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dist))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('minify', function() {
  return gulp.src(paths.dist + '*.css')
    .pipe(csso())
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

gulp.task('watch', ['server'], function() {
  gulp.watch(paths.src + '**/*.scss', ['css']);

  gulp.watch('./*.html', ['server:reload']);
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

gulp.task('build', ['css']);

gulp.task('build:dist', function() {
  run('css', 'minify');
});

gulp.task('default', ['build', 'watch']);
