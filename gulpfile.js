var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js', 'appmodules/homepage/server/**/*.js'];
var nodemon = require('gulp-nodemon');
gulp.task('style', function () {
    return gulp.src(jsFiles).
    pipe(jshint()).
    pipe(jshint.reporter('jshint-stylish', {
        vebose: true
    })).pipe(jscs());
});

gulp.task('serve', ['style'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 8000
        },
        watch: jsFiles
    };
    return nodemon(options).on('restart', function () {
        console.log('restarting');
    });
});
