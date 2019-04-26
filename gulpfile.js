var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var server = require("browser-sync");
var postcss = require("gulp-postcss");
var sorting = require("postcss-sorting");
var auto = require("autoprefixer");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([ auto() ]))
  .pipe(gulp.dest("css"))
  .pipe(server.reload({stream:true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
      server: ".",
      notify: false
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html")
  .on("change", server.reload);
});
