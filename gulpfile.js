'use strict';
// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var jsmin = require('gulp-jsmin');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var ftp = require( 'vinyl-ftp' );//não estou usando
var git = require('gulp-git');

gulp.task('scripts', function () {
	return gulp
		.src(['./js/**/*.js'])
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./mini'));
});

gulp.task('styles', function () {
	return gulp
		.src(['./css/**/*.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./mini'));
});

gulp.task('sass', function () {
	return gulp
		.src(['./sass/**/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

/** =========== GIT  ================== **/

gulp.task('clone', function(){
  git.clone('https://github.com/animalokos/SensualImport.git', function (err) {
    if (err) throw err;
  });
});

gulp.task('commit', function(){
  return gulp.src('./../SIte_sensual_2016/**/*')
    .pipe(git.commit());
});

gulp.task('pull', function(){
  git.pull('origin', 'master', {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
});

gulp.task('push', function(){
  git.push('git@github.com:animalokos/SensualImport.git', 'master', function (err) {
    if (err) throw err;
  });
});

/* ============================== WATCH ============================== */

gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);

	gulp.watch('./js/**/*.js', function (event) {
		gulp.run('scripts');
	});

	gulp.watch('./css/**/*.css', function (event) {
		gulp.run('styles');
	});

	gulp.watch('./../SIte_sensual_2016/**/*', function (event) {
		gulp.run('push');
	});
});

