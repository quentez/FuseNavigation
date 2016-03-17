var gulp = require("gulp");
var ts = require("gulp-typescript");
var insert = require("gulp-insert");

var tsProject = ts.createProject("Code/tsconfig.json");

gulp.task("js", function () {
  var tsResult = tsProject
    .src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(insert.append("module.exports = new FuseNavigation.App();"))
    .pipe(gulp.dest("CodeBuild"));
});

gulp.task("watch-js", ["js"], function () {
  gulp.watch("Code/**/*.ts", ["js"]);
});

gulp.task("default", ["js"]);
gulp.task("watch", ["watch-js"]);
