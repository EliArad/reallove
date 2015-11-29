/*jslint node: true */
'use strict';
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    util = require('gulp-util'),
    gulpprint = require('gulp-print'),
    gulpif = require('gulp-if'),
    args = require('yargs').argv,
    gulpless = require('gulp-less'),
    ap = require('gulp-autoprefixer'),
    gulpplumber = require('gulp-plumber'),
    del = require('del'),
    livereload = require('gulp-livereload');

gulp.task('hello-world', function ()
{
   console.log('hello gulp task');
});

gulp.task('styles', ['clean-styles'], function(){
    log('compiling less -> css');
        
    return gulp.src('./src/client/styles/styles.less').
        pipe(ap({
        browsers: ['last 2 versions'],
        cascade: false
    })).
    pipe(gulpplumber()).
    pipe(gulpless()).
    pipe(gulp.dest('./tmp/'));    

});

gulp.task('clean-styles', function(){
    
    var files = './tmp/*.css';
    del(files);    
});

gulp.task('less-watcher' , function() {
   gulp.watch('./src/client/styles/styles.less' , ['styles']);      
});

gulp.task('vet' , function() {
    log('anyalizeing our source');
	return gulp.src([
        './src/**/*.js',
        './*.js']).
    pipe(gulpif(args.verbose , gulpprint())).
    pipe(jscs()).
    pipe(jshint()).
    pipe(jshint.reporter('jshint-stylish',  { verbose:true })).
    pipe(jshint.reporter('fail'));
    
});


function log(msg){
    if (typeof(msg) === 'object')
    {
        for (var item in msg){
            if (msg.hasOwnProperty(item)){
                util.log(util.colors.blue(msg[item]));
            }                
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}