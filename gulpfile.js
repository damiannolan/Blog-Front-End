"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function() {

    return gulp.src('stylesheets/stylesheet.scss') //gets all scss files within scss directory or child directories
        .pipe(sass(sassOptions).on('error', sass.logError)) //using gulp-sass
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./stylesheets/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch',['browserSync', 'sass'], function(){
    gulp.watch('stylesheets/*.scss', ['sass', browserSync.reload]);
    gulp.watch('form/controllers/*.js', browserSync.reload);
    gulp.watch('form/templates/*.html', browserSync.reload);
    gulp.watch('core/*.js', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('app.js', browserSync.reload);
    //other watchers
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 8082
    });
});








