var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerfiles = require('main-bower-files');
var inject = require('gulp-inject');
//var del = require('del');
var paths ={
	temp: 'temp',
	tempVendor: 'temp/vendor',
	tempIndex: 'temp/index.html',

	index: 'app/index.html',
	appSrc : ['app/**/*', '!app/index.html'],
	bowerSrc: 'bower_components/**/*'
};

gulp.task('default',['watch']);

gulp.task('watch',['serve'],function(){
	gulp.watch(paths.appSrc, ['scripts']);
	gulp.watch(paths.bowerSrc, ['vendors']);
	gulp.watch(paths.index, ['copyAll']);
});

gulp.task('serve', ['copyAll'], function(){
	//serve the index.html file
	return gulp.src(paths.temp)
		.pipe(webserver({
			livereload: true,
			proxies: [{
				source: '/api',
				target: 'http://localhost:1337'
		}]
		}));
});

gulp.task('copyAll',function(){
	var tempVendors = gulp.src(mainBowerfiles()).pipe(gulp.dest(paths.tempVendor));
	var appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));
	
	return gulp.src(paths.index)
			.pipe(gulp.dest(paths.temp))
			.pipe(inject(tempVendors,{relative: true, name:'vendorInject'}))
			.pipe(inject(appFiles,{relative: true}))
			.pipe(gulp.dest(paths.temp));
});

gulp.task('vendors',function(){
	var tempVendors = gulp.src(mainBowerfiles()).pipe(gulp.dest(paths.tempVendor));
	
	
	return gulp.src(paths.tempIndex)
			.pipe(inject(tempVendors,{relative: true, name:'vendorInject'}))
			.pipe(gulp.dest(paths.temp));
});

gulp.task('scripts',function(){

	var appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));
	return gulp.src(paths.tempIndex)
			.pipe(inject(appFiles,{relative: true}))
			.pipe(gulp.dest(paths.temp));

});

//gulp.task('clean', function(){
//	del([paths.temp]);
//});
