var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default',function(){
	//acces the index.html  in app dir  and copy to tmp dir
	gulp.src('app/index.html')
	.pipe(gulp.dest('temp'));

	//serve the index.html file
	gulp.src('temp')
	.pipe(webserver({
		//open the directory and show the list
		open:true
		//directoryListing: true
	}));
});