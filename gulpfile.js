"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function() {
    return gulp.src('stylesheets/sass/*.scss') //gets all scss files within scss directory or child directories
        .pipe(sass(sassOptions).on('error', sass.logError)) //using gulp-sass
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./stylesheets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch',['browserSync', 'sass'], function(){
    gulp.watch('stylesheets/sass/*.scss', ['sass', browserSync.reload]);
    gulp.watch('form/controllers/*.js', browserSync.reload);
    gulp.watch('form/templates/*.html', browserSync.reload);
    gulp.watch('core/*.js', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('app.js', browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 8082
    });
});

