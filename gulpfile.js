var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var merge = require("merge-stream");
var typings = require("gulp-typings");
var insert = require("gulp-insert");
var webpack = require("webpack-stream");

gulp.task("js", function () {
  var polyfillStream = gulp.src("Code/Polyfill/**/*.js");
  
  var tsStream = gulp.src("Code/App.ts")
    .pipe(webpack(Object.assign({}, require("./Code/webpack.config.js"))))
    .pipe(insert.prepend("var RequireObservable = require('FuseJS/Observable'); module.exports = "));
  
  return merge(polyfillStream, tsStream)
    .pipe(concat("App.js"))
    .pipe(gulp.dest("CodeBuild/"));
});

gulp.task("watch-js", ["js"], function () {
  return gulp.watch("Code/**/*.ts", ["js"]);
});

gulp.task("default", ["install", "js"]);
gulp.task("watch", ["watch-js"]);
