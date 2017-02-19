const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const path = require('path');

const files = require('./pages');

gulp.task('default', () => {
	return files.forEach((file) => {
		let template = file.template ? file.template : 'default'
		console.log('templates/' + template + '.pug');

		gulp.src('views/' + template + '.pug')
			.pipe(pug({
				locals: {
					template: file.template ? file.template : 'default.pug',
					errorCode: file.errorCode,
					errorMessage: file.errorMessage,
					image: file.image
				}
			}))
			.pipe(rename({
				dirname: path.resolve(__dirname, "build"),
				basename: file.fileName,
				extname: ".html"
			}))
			.pipe(gulp.dest('./build/'))
	})
})