var gulp = require('gulp');
var webserver = require('gulp-webserver');
var paths ={
	temp: 'temp',
	index: 'app/index.html'
};
gulp.task('default',['tempSetup','serve']);

gulp.task('tempSetup',function(){
	//acces the index.html  in app dir  and copy to tmp dir
	gulp.src(paths.index)
	.pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function(){
	//serve the index.html file
	gulp.src(paths.temp)
	.pipe(webserver({
		//open the directory and show the list
		open:true
		//directoryListing: true
	}));
});