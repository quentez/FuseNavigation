var gulp = require("gulp");
var ts = require("gulp-typescript");
var typings = require("gulp-typings");
var insert = require("gulp-insert");
var webpack = require("webpack-stream");

gulp.task("js", function () {
  return gulp.src("Code/App.ts")
    .pipe(webpack(require("./Code/webpack.config.js")))
    .pipe(insert.prepend("var RequireObservable = require('FuseJS/Observable');"))
    .pipe(gulp.dest("CodeBuild/"))
});

gulp.task("watch-js", function () {
  return gulp.src("Code/App.ts")
    .pipe(webpack(Object.assign({}, require("./Code/webpack.config.js"), {
      watch: true
    })))
    .pipe(insert.prepend("var RequireObservable = require('FuseJS/Observable'); module.exports = "))
    .pipe(gulp.dest("CodeBuild/"))
});

gulp.task("default", ["install", "js"]);
gulp.task("watch", ["watch-js"]);
