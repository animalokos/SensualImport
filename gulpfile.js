'use strict';
// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var jsmin = require('gulp-jsmin');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var ftp = require( 'vinyl-ftp' );

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

/** Configuration {{ F T P }}  **/
var user = process.env.FTP_USER;  
var password = process.env.FTP_PWD;  
var host = 'https://sensualimport.wc2.securestore.global/admin/includes/elementos/igerfiles/dialog.php';  
var port = 21; 
var localFilesGlob = ['./mini/*'];  
var remoteFolder = '/'

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {  
    return ftp.create({
        host: host,
        port: port
        user: user,
        password: password,
        parallel: 5,
        log: gutil.log
    });
}

gulp.task('ftp-deploy', function() {
    var conn = getFtpConnection();
    return gulp.src(localFilesGlob, { base: '.', buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
    ;
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

	var conn = getFtpConnection();
    gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);
      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
      ;
    });
});

gulp.task('ftp-deploy-watch', function() {
	    var conn = getFtpConnection();
	    gulp.watch(localFilesGlob)
	    .on('change', function(event) {
	      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);
	      return gulp.src( [event.path], { base: '.', buffer: false } )
	        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
	        .pipe( conn.dest( remoteFolder ) )
	      ;
	    });
	});

