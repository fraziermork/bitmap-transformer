'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');


var paths = ['lib/*.js', 'test/*.js', 'index.js', 'gulpfile.js'];

gulp.task('eslint', function(){
  return gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', ['eslint'], function(){
  gulp.src('test/*.js')
  .pipe(mocha());
});

gulp.task('watch', function(){
  gulp.watch(paths, ['test']);
});
