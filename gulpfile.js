var gulp         = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat');

gulp.task('browser-sync', ['styles'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
		
});

gulp.task('styles', function () {
	return gulp.src('./app/css/_style.css')
	.pipe(rename("style.css"))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch('app/css/_*.css', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
