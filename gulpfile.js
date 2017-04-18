var gulp = require('gulp');
var serve  = require('gulp-serve');
var clean = require('gulp-clean');

gulp.task('clean:demo', function() {
  return gulp.src(['./demo/components', './demo/services', './demo/libs'], {read: false})
    .pipe(clean());
});

gulp.task('copy:components', function() {
  gulp.src(['./src/*'])
    .pipe(gulp.dest('./demo/components/'));
  gulp.src(['./node_modules/@banno/jha-design-components/cards/jha-card.html',
            './node_modules/@banno/jha-design-components/container/jha-container.html'])
    .pipe(gulp.dest('./demo/components/jha-design'));
});

gulp.task('copy:libs', function() {
  gulp.src(['./node_modules/@banno/polymer/polymer.js',
            './node_modules/chart.js/dist/Chart.js',
            './node_modules/moment/moment.js',
            './node_modules/webcomponentsjs/lite.js'])
    .pipe(gulp.dest('./demo/libs'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['clean', 'copy']);
});

gulp.task('serve', serve('./demo'));
gulp.task('clean', function() { gulp.start('clean:demo'); });
gulp.task('copy', ['clean:demo'], function() { gulp.start('copy:components', 'copy:libs'); });
gulp.task('default', ['clean', 'copy', 'serve', 'watch']);
