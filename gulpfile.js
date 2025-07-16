const gulp = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const tinypng = require("gulp-tinypng-compress");
const gulpIf = require("gulp-if");
const pathImg = "./template/assets/images/";
const fs = require("fs");
function copyAsset() {
  return gulp.src(["src/assets/**/*"]).pipe(gulp.dest("./template/assets"));
}

function cleanSource() {
  return del(["template/**", "!dist"]);
}

//compile scss into css
function style() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./template/assets/css"))
    .pipe(browserSync.stream());
}
//Tiny PNG
var API_KEY = ["VLMNbRLp20d1zb8sMthZWtddyNJRWBLs"];

function optimizeImages() {
  const sizeLimit = 1024 * 1024;

  return gulp
    .src("src/assets/images/**/*.{png,jpg,jpeg}")
    .pipe(plumber())
    .pipe(
      gulpIf(
        (file) => {
          const stats = fs.statSync(file.path);
          return stats.size > sizeLimit;
        },
        tinypng({
          key: API_KEY,
          sigFile: "images/.tinypng-sigs",
          log: true,
        })
      )
    )
    .pipe(gulp.dest("template/assets/images"));
}

//compile jade into html
function html() {
  return gulp
    .src([
      "src/pug/**/*.pug",
      "!src/pug/_layout/*.pug",
      "!src/pug/_modules/*.pug",
      "!src/pug/_mixins/*.pug",
    ])
    .pipe(
      pug({
        doctype: "html",
        pretty: true,
      })
    )
    .pipe(gulp.dest("./template"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./template",
    },
    port: 4000,
  });
  gulp.watch("src/assets/**/*", copyAsset).on("change", browserSync.reload);
  gulp.watch("src/scss/**/*.scss", style).on("change", browserSync.reload);
  gulp.watch("src/pug/**/*.pug", html).on("change", browserSync.reload);
}

// define complex tasks
const build = gulp.series(
  cleanSource,
  style,
  html,
  copyAsset,
  // optimizeImages,
  watch
);

// export tasks
exports.cleanSource = cleanSource;
exports.style = style;
exports.html = html;
exports.build = build;
// exports.optimage = optimizeImages;
exports.watch = watch;
exports.default = build;
