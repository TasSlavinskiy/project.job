var gulp = require("gulp");
var server = require("browser-sync");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("style", function(){
    gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});
gulp.task("serve", ["style"], function(){
    server.init({
        server: "."
    });
    
    gulp.watch("sass/**/*.scss", ["style"]);
    gulp.watch("*.html")
        .on("change", server.reload);
});