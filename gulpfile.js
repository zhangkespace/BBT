//加载组件
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    jst = require('gulp-cmd-jst');
//任务机制
gulp.task('jst',function(){
    gulp.src('view/*.html')
        .pipe(jst(
            {
                templateSettings: {
                  evaluate: /##([\s\S]+?)##/g,
                  interpolate: /\{\{(.+?)\}\}/g,
                  escape: /\{\{\{\{-([\s\S]+?)\}\}\}\}/g
                },
                //filter escape character 
                processContent: function(src) {
                  return src.replace(/(^\s+|\s+$)/gm, '');
                },
                //compress Jst 
                prettify: true, 
                //cmd: true || amd: true         
                cmd: true
            }
        ))
        .pipe(gulp.dest('view/'));
});
gulp.task('jst1',function(){
    gulp.src('banner/slide.html')
        .pipe(jst(
            {
                templateSettings: {
                  evaluate: /##([\s\S]+?)##/g,
                  interpolate: /\{\{(.+?)\}\}/g,
                  escape: /\{\{\{\{-([\s\S]+?)\}\}\}\}/g
                },
                //filter escape character 
                processContent: function(src) {
                  return src.replace(/(^\s+|\s+$)/gm, '');
                },
                //compress Jst 
                prettify: true, 
                //cmd: true || amd: true         
                cmd: true
            }
        ))
        .pipe(gulp.dest('banner/'));
});
gulp.task('less',function(){
     gulp.src(['less/*.less'])
        .pipe( less() )
        .pipe(autoprefixer({
            browsers: ['last 20 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20'],
            cascade: true
        }))
        .pipe( cleanCss() )
        .pipe( gulp.dest('less/'));
});
gulp.task('watch',function(){
    gulp.watch('less/*.less',['less']);
    gulp.watch('view/*.html',['jst']);
});
gulp.task('localhost',function(){
    connect.server({
        root:'./',
        port:8090
    });
    
});
gulp.task('default',['localhost','watch']);