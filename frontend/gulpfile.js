var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default',function(){
	//acces the root dir to our webserver functionality
	gulp.src('root')
	.pipe(webserver({
		//open the directory and show the list
		open:true,
		directoryListing: true
	}));
});