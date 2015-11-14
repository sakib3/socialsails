var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerfiles = require('main-bower-files');
var inject = require('gulp-inject');
var paths ={
	temp: 'temp',
	tempVendor: 'temp/vendor',
	index: 'app/index.html'
};
gulp.task('default',['scripts','serve']);


gulp.task('scripts',function(){

	//acces the index.html  in app dir  and copy to tmp dir
	var tempIndex = gulp.src(paths.index).pipe(gulp.dest(paths.temp));
	//copy main files from bower components
	var temVendors = gulp.src(mainBowerfiles()).pipe(gulp.dest(paths.tempVendor));

	tempIndex
			.pipe(inject(temVendors,{relative: true}))
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