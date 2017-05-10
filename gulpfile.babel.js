import gulp from 'gulp';
import browSync from 'browser-sync';

const browserSync = browSync.create();
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
});

gulp.task('reload', ['browser-sync'], () => {
  gulp.watch('index.html', () => {
    console.log('HERE');
    browserSync.reload();
  });
});
